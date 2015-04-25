// var data = [
//   [ 0, 1, 1, 0, 0, 1, 1, 0 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 1 ],
//   [ 0, 1, 1, 1, 1, 1, 1, 0 ],
//   [ 0, 0, 1, 1, 1, 1, 0, 0 ],
//   [ 0, 0, 0, 1, 1, 0, 0, 0 ],
// ];

var strokeColour = '#fff',
    nonSelectedFillOpacity = '0.08',
    boxSize = 40,
    numberOfBoxesVertical = 20, //data.length,
    numberOfBoxesHorizontal = 20; //data[0].length;

var d3 = window.d3;

var svg = d3.select('.main-svg')
      .style('width', numberOfBoxesHorizontal*boxSize+'px')
      .style('height', numberOfBoxesVertical*boxSize+'px');

function zeros(n) {
  var result = [];
  for (var i=0; i < n; i++) {
    result.push(0);
  }
  return result;
}

svg.selectAll('rect')
  .data(zeros(20*20))
  //.data(d3.merge(data))
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

function download () {
  var html = d3.select('svg')
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

  var imgsrc = 'data:application/octet-stream;base64,'+ btoa(html);
  var img = '<img src="'+imgsrc+'">';
  //window.open(imgsrc, "Download");
  d3.select('main').html(img);
}
