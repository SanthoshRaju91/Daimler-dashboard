mypage();

function mypage(){
    $(document).ready(function (e) {
    console.log("hello...");        
    $("#modalBody").before('<select id="xInterval" style="width:200px;margin :10px;font-weight:bold;">'
                +'<option>X-axis</option>'
                +'<option value="release">Releases</option>'                           
                +'<option value="Schedule_Adherence">Schedule Adherence</option>'
                +'<option value="WeekEnding">Week Ending</option>'
                +'<option value="no_of_requirement"># of Requirement</option>'
                +'<option value="monthEnding">monthEnding</option>'
        +'</select>'
        +'<select id="yInterval" style="width:200px;margin :10px;font-weight:bold;">'
            +'<option >Y-axis</option>'
                +'<option value="Schedule_Adherence">Schedule Adherence</option>'
                +'<option value="testcases">Test Cases Executed</option>'
                +'<option value="Schedule_Adherence">Schedule Adherence</option>'
                +'<option value="no_of_defects">No of Defects</option>'                           
                +'<option value="WeekEnding">Week Ending</option>'
                +'<option value="Planned_vs_Actual_Hrs">Planned vs Actual Hrs</option>'
                +'<option value="no_of_requirement"># of Requirement</option>'
            +'<option value="monthEnding">monthEnding</option>'
        +'</select>'
       +'<select id="chartType" style="width:200px;margin :10px;font-weight:bold;">'
            +'<option >Chart</option>'
                +'<option value="bar">Bar Graph</option>'
                +'<option value="line">Line Graph</option>'
                +'<option value="3d">3d Graph</option>'
                +'<option value="pie">Pie Chart</option>'
                +'<option value="stacked">Stacked Graph</option>'
        +'</select>');
    })

}

var clicks=0;

function drawGraph(){
    $('#myModal').modal('hide');
    
    clicks = clicks+1; 
    
    
    
         y = document.getElementById("yInterval").value;
         x = document.getElementById("xInterval").value;
         chart = document.getElementById("chartType").value;
    
    
        console.log('X-Axis ' + x);
        console.log('Y-Axis ' + y);
        console.log('Chart ' + chart);
        var release = ['cycle1','cycle2','cycle3','cycle4'];
        
        var Schedule_Adherence = [-30,-25,-20,-15,-10,-5,0,5,10];

        var WeekEnding=    ['1.Mar','8.Mar','15.Mar','22.Mar','29.Mar','5.Apr','12.Apr','19.Apr','26.Apr','3.May','10.May','17.May'];

        var Planned_vs_Actual_Hrs= [440,446,480,500,520,540,560,580,600];

        var no_of_requirement =[0,10,20,30,40,50,50,60];
        var monthEnding =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'];
        var testcases=[150,175,123,156];
    
         x_axis = [];
         y_axis = [];   
         y_axis_planned2=[442,450,480,500];
         y_axis_planned1=[440,446,480,500];
    
            switch (x) {
                case "Schedule_Adherence":
                    x_axis=Schedule_Adherence
                    break;
                case "WeekEnding":
                   x_axis=WeekEnding
                    break;
                case "Planned_vs_Actual_Hrs":
                    x_axis=Planned_vs_Actual_Hrs
                    break;
                case "no_of_requirement":
                   x_axis=no_of_requirement
                    break;
               case "monthEnding":
                   x_axis=monthEnding
                    break;
                case "release":
                    x_axis=release
                    break;
            } 
            console.log("after switch printing x axis--> "+x_axis);
            switch (y) {
                case "Schedule_Adherence":
                    y_axis=Schedule_Adherence
                    break;
                case "WeekEnding":
                   y_axis=WeekEnding
                    break;
                case "Planned_vs_Actual_Hrs":
                    y_axis=Planned_vs_Actual_Hrs
                    break;
                case "no_of_requirement":
                   y_axis=no_of_requirement
                    break;
                case "monthEnding":
                   y_axis=monthEnding
                    break;
                case "testcases" :
                    y_axis=testcases
                    break;
            } 
            console.log("after y switch---> "+y_axis);
      
    
    
    if(chart=="line"){
        drawLine();
    }else if(chart=="bar"){
        if(y=="Planned_vs_Actual_Hrs"){drawBarForPlannedvsActual();}else{ drawBar();}
    }else if(chart=="pie"){
        drawPie();
    }else if(chart=="3d"){
        draw3d();
    }else if(chart=="stacked"){
        drawStacked();
    }
    /*var conId= 'container'+clicks; console.log("conId--->" +conId);*/
   // $('#container_'+clicks).append("<div style='color:red;' id='#container_"+(2)"'>hello world</div>");
    //$('#container_'+clicks).after('<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bs-example-modal-lg" > Add Chart </button>');
       conId= clicks+1;
    
    
   $("<div />", { "class": "col-md-6 containerClass", id:"container_"+conId})
     .insertAfter("#container_"+clicks); 
  
}

function drawLine(){
    $("#container_"+clicks).highcharts({
        title: {
            text: x,
            x: -20 //center
        },
        xAxis: {
            categories: x_axis,
           /* title:{
                text:'Week Ending'
            }*/
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false
        },
        yAxis: {
            title: {
                text: 'Schedule Variance %'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },/*
        tooltip: {
            valueSuffix: '%'
        },*/
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Planned',
            data: y_axis_planned1
        }, {
            name: 'Actual',
            data: y_axis_planned2
        }]
    });
            
}

function drawBar(){
    $("#container_"+clicks).highcharts({
        chart: {
            type: 'column'
        },
       /* title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },*/
        xAxis: {
            categories: x_axis,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: y
            }
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false
        },
       /* tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },*/
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Releases',
            data: y_axis
      
        }]
    });
    
}

function draw3d(){
    $("#container_"+clicks).highcharts({

        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            },
            marginTop: 80,
            marginRight: 40
        },

        
        xAxis: {
            categories:x_axis
        },
        credits: {
            enabled: false
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            /*title: {
                text: 'Number of fruits'
            }*/
        },
        exporting: { 
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },

        plotOptions: {
            column: {
                stacking: 'normal',
                depth: 40
            }
        },

       series: [{
            name: 'Planned Hours',
            data: y_axis_planned1,
            color:'#1BA39C',
            stack: 'Planned Hours'
        }, {
            name: 'Actual Hours',
            data: y_axis_planned2,
            color:'#22313F',
            stack: 'Actual Hours'
        }]
    });

}

function drawPie(){
    $("#container_"+clicks).highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: ''
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Jan',
                y: 56.33
            }, {
                name: 'Feb',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Mar',
                y: 10.38
            }, {
                name: 'Apr',
                y: 4.77
            }, {
                name: 'May',
                y: 2.91
            }, {
                name: ' Jun',
                y: 3.2
            }, {
                name: ' Jul',
                y: 7.2
            }, {
                name: 'Aug',
                y: 4.2
            }]
        }]
    });
        

}

function  drawStacked(){

    $("#container_"+clicks).highcharts({
        chart: {
            type: 'column'
        },
        /*title: {
            text: 'Stacked column chart'
        },*/
        xAxis: {
            categories: x_axis
        },
        yAxis: {
            min: 0,
            title: {
                text: y
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false
        },
        series: [{
            name: 'critical',
            data: [5, 3, 4, 7],
            color: '#C0392B'
        }, {
            name: 'high',
            data: [2, 2, 3, 2],
            color: '#337ab7'
        }, {
            name: 'medium',
            data: [3, 4, 4, 2],
            color: '#26A65B'
        },{
            name: 'low',
            data: [3, 4, 4, 2],
            color: '#BFBFBF'
        }]
    });

}

function drawBarForPlannedvsActual(){
    
    $("#container_"+clicks).highcharts({
        chart: {
            type: 'column'
        },
       /* title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },*/
        xAxis: {
            categories: x_axis,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: y
            }
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false
        },
       /* tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },*/
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Planned',
            data: y_axis_planned1
      
        },{
            name: 'Actual',
            data: y_axis_planned2
      
        }]
    });
    
 }

