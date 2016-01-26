//For testing single data point
var testdata = [
  {
    "key" : "App 1" ,
    "values" : [ 
		[ "Module 1" , 28.10],  
		[ "Module 2" , 5.56],  
		[ "Module 3" , 33.33],  
		[ "Module 4" , 7.74],  
		[ "Module 5" , 11.54],  
		[ "Module 6" , 30.11],  
		[ "Module 7" , 22.73],  
		[ "Module 8" , 8.11],  
		[ "Module 9" , 35.71],  
		[ "Module 10" , 28.10],  
		[ "Module 11" , 21.43],  
		[ "Module 12" , 20.00],  
		[ "Module 13" , 7.02]
	]
  } ,
  {
    "key" : "App 2" ,
    "values" : [ 
		[ "Module 1" , 26.45],  
		[ "Module 2" , 38.89],  
		[ "Module 3" , 0.00],  
		[ "Module 4" , 5.36],  
		[ "Module 5" , 15.38],  
		[ "Module 6" , 10.75],  
		[ "Module 7" , 20.45],  
		[ "Module 8" , 0.00],  
		[ "Module 9" , 7.14],  
		[ "Module 10" , 26.47],  
		[ "Module 11" , 21.43],  
		[ "Module 12" , 10.00],  
		[ "Module 13" , 15.79]
	]
  },
  {
    "key" : "App 3" ,
    "values" : [ 
		[ "Module 1" , 13.22],  
		[ "Module 2" , 22.22],  
		[ "Module 3" , 0.00],  
		[ "Module 4" , 19.05],  
		[ "Module 5" , 7.69],  
		[ "Module 6" , 10.75],  
		[ "Module 7" , 29.55],  
		[ "Module 8" , 10.81],  
		[ "Module 9" , 0.00],  
		[ "Module 10" , 20.59],  
		[ "Module 11" , 7.14],  
		[ "Module 12" , 0.00],  
		[ "Module 13" , 15.79]
	]
  },
  {
    "key" : "App 4" ,
    "values" : [ 
		[ "Module 1" , 4.13],  
		[ "Module 2" , 11.11],  
		[ "Module 3" , 0.00],  
		[ "Module 4" , 14.29],  
		[ "Module 5" , 11.54],  
		[ "Module 6" , 11.83],  
		[ "Module 7" , 4.55],  
		[ "Module 8" , 18.92],  
		[ "Module 9" , 21.43],  
		[ "Module 10" , 16.18],  
		[ "Module 11" , 14.29],  
		[ "Module 12" , 10.00],  
		[ "Module 13" , 8.77]
	]
  },
  {
    "key" : "App 5" ,
    "values" : [ 
		[ "Module 1" , 28.10],  
		[ "Module 2" , 22.22],  
		[ "Module 3" , 66.67],  
		[ "Module 4" , 53.57],  
		[ "Module 5" , 53.85],  
		[ "Module 6" , 36.56],  
		[ "Module 7" , 22.73],  
		[ "Module 8" , 62.16],  
		[ "Module 9" , 35.71],  
		[ "Module 10" , 19.12],  
		[ "Module 11" , 35.71],  
		[ "Module 12" , 60.00],  
		[ "Module 13" , 52.63]
	]
  }
].map(function(series) {
  series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
  return series;
});



nv.addGraph(function() {
    var chart = nv.models.multiBarChart()
      .transitionDuration(350)
      .reduceXTicks(false)   //If 'false', every single x-axis tick label will be rendered.
      .rotateLabels(-45)      //Angle to rotate x-axis labels.
      .showControls(true)   //Allow user to switch between 'Grouped' and 'Stacked' mode.
      .groupSpacing(0.1)    //Distance between each group of bars.
	  .margin({left:150, bottom:200})
    ;

	/*
    chart.xAxis
        .tickFormat(d3.format(',f'));
	*/
		
    chart.xAxis.tickFormat(function(d, i) {
	  return testdata[0].values[i].x
    });
		
	/*
    chart.yAxis
        .tickFormat(d3.format(',.2f'));
	*/
		
    chart.yAxis.tickFormat(function(d) {
		return d3.format(',.2f') (d) + '%'
		});
		

    d3.select('#chart4 svg')
        .datum(testdata)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});

//Generate some nice data.
function exampleData() {
  return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
    return {
      key: 'Data Stream #' + (i+1),
      values: data
    };
  });
}
