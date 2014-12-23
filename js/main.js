var data = [
  [ 0, 0, 1, 0, 0 ],
  [ 0, 1, 1, 1, 0 ],
  [ 0, 0, 1, 0, 0 ]
];

var strokeColour = '#fff',
    nonSelectedFillOpacity = '0.08',
    boxSize = 40,
    numberOfBoxesVertical = data.length,
    numberOfBoxesHorizontal = data[0].length;

var d3 = window.d3;

var svg = d3.select('.main-svg')
      .style('width', numberOfBoxesHorizontal*boxSize+'px')
      .style('height', numberOfBoxesVertical*boxSize+'px');

svg.selectAll('rect')
  .data(d3.merge(data))
  .enter()
  .append('rect')
  .on('click', (d,i) => {
    var elem = d3.select(this);
    elem.attr('fill-opacity',
              elem.attr('fill-opacity') === '1' ?
              nonSelectedFillOpacity : '1');
  })
  .attr('stroke', strokeColour)
  .attr('fill-opacity', d => d === 0 ? nonSelectedFillOpacity : 1)
  .attr('fill', 'teal')
  .attr('width', boxSize)
  .attr('height', boxSize)
  .attr('x', (d,i) => i*boxSize -
        Math.floor(i/numberOfBoxesHorizontal)*boxSize*numberOfBoxesHorizontal)
  .attr('y', (d,i) => Math.floor(i/numberOfBoxesHorizontal)*boxSize);
  // .transition()
  // .duration(500)
  // .attr('fill-opacity', d => d === 0 ? nonSelectedFillOpacity : 1);
console.log('loaded main');
