//For testing single data point
var testdata = [
  {
    "key" : "Quinnox" ,
    "values" : [ 
		[ "Business Performance Management" , 28.10],  
		[ "Forecast to Deploy" , 5.56],  
		[ "Franchise Leadership" , 33.33],  
		[ "Manage Other Enterprise Activities" , 7.74],  
		[ "Manage People" , 11.54],  
		[ "Manage, Support, & Control Technology" , 30.11],  
		[ "Market to Order" , 22.73],  
		[ "Marketing & Brand Management" , 8.11],  
		[ "Multiple Processes" , 35.71],  
		[ "Order to Cash" , 28.10],  
		[ "Procure to Pay" , 21.43],  
		[ "Product Lifecycle Management" , 20.00],  
		[ "Record to Report" , 7.02]
	]
  } ,
  {
    "key" : "CSC" ,
    "values" : [ 
		[ "Business Performance Management" , 26.45],  
		[ "Forecast to Deploy" , 38.89],  
		[ "Franchise Leadership" , 0.00],  
		[ "Manage Other Enterprise Activities" , 5.36],  
		[ "Manage People" , 15.38],  
		[ "Manage, Support, & Control Technology" , 10.75],  
		[ "Market to Order" , 20.45],  
		[ "Marketing & Brand Management" , 0.00],  
		[ "Multiple Processes" , 7.14],  
		[ "Order to Cash" , 26.47],  
		[ "Procure to Pay" , 21.43],  
		[ "Product Lifecycle Management" , 10.00],  
		[ "Record to Report" , 15.79]
	]
  },
  {
    "key" : "Cap Gemini" ,
    "values" : [ 
		[ "Business Performance Management" , 13.22],  
		[ "Forecast to Deploy" , 22.22],  
		[ "Franchise Leadership" , 0.00],  
		[ "Manage Other Enterprise Activities" , 19.05],  
		[ "Manage People" , 7.69],  
		[ "Manage, Support, & Control Technology" , 10.75],  
		[ "Market to Order" , 29.55],  
		[ "Marketing & Brand Management" , 10.81],  
		[ "Multiple Processes" , 0.00],  
		[ "Order to Cash" , 20.59],  
		[ "Procure to Pay" , 7.14],  
		[ "Product Lifecycle Management" , 0.00],  
		[ "Record to Report" , 15.79]
	]
  },
  {
    "key" : "CCR Internal" ,
    "values" : [ 
		[ "Business Performance Management" , 4.13],  
		[ "Forecast to Deploy" , 11.11],  
		[ "Franchise Leadership" , 0.00],  
		[ "Manage Other Enterprise Activities" , 14.29],  
		[ "Manage People" , 11.54],  
		[ "Manage, Support, & Control Technology" , 11.83],  
		[ "Market to Order" , 4.55],  
		[ "Marketing & Brand Management" , 18.92],  
		[ "Multiple Processes" , 21.43],  
		[ "Order to Cash" , 16.18],  
		[ "Procure to Pay" , 14.29],  
		[ "Product Lifecycle Management" , 10.00],  
		[ "Record to Report" , 8.77]
	]
  },
  {
    "key" : "Others" ,
    "values" : [ 
		[ "Business Performance Management" , 28.10],  
		[ "Forecast to Deploy" , 22.22],  
		[ "Franchise Leadership" , 66.67],  
		[ "Manage Other Enterprise Activities" , 53.57],  
		[ "Manage People" , 53.85],  
		[ "Manage, Support, & Control Technology" , 36.56],  
		[ "Market to Order" , 22.73],  
		[ "Marketing & Brand Management" , 62.16],  
		[ "Multiple Processes" , 35.71],  
		[ "Order to Cash" , 19.12],  
		[ "Procure to Pay" , 35.71],  
		[ "Product Lifecycle Management" , 60.00],  
		[ "Record to Report" , 52.63]
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
