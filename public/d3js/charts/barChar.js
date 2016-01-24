function barChart(){
var negative_test_data = [{"key":"Stream0","values":[{"x":0,"y":0.10883705668070172},{"x":1,"y":0.19443067302664366},{"x":2,"y":0.14711821116132412},{"x":3,"y":0.19262961435559722}]},{"key":"Stream1","values":[{"x":0,"y":0.10397294628204483},{"x":1,"y":0.13655212058513383},{"x":2,"y":0.16720666152098013},{"x":3,"y":0.8668508990646013}]},{"key":"Stream2","values":[{"x":0,"y":0.11316780357155949},{"x":1,"y":0.1110383995479403},{"x":2,"y":2.094028662616139},{"x":3,"y":0.40620197631903177}]}] ;

var chart;
nv.addGraph(function() {
    chart = nv.models.multiBarChart()
    .color(d3.scale.category10().range())
      .rotateLabels(0)      //Angle to rotate x-axis labels.
      .transitionDuration(300)
       .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.24)    //Distance between each group of bars.
	  
      ;

chart.reduceXTicks(false).staggerLabels(true).groupSpacing(0.3);

chart.x(function(d) { return d.x; });
chart.y(function(d) { return d.y; });

    d3.select('#barChart svg')
        .datum(negative_test_data)
       .call(chart);

    nv.utils.windowResize(chart.update);

    

    return chart;
});
}