TREND_LIST = [{
  drilldown: "Germany",
  name: "Germany",
  visible: true,
  y: 12
}, {
  drilldown: "U.K",
  name: "U.K",
  visible: true,
  y: 13
}, {
  drilldown: "U.S",
  name: "U.S",
  visible: true,
  y: 25
}, {
  drilldown: "India",
  name: "India",
  visible: true,
  y: 50
}]

NUMBER_OF_PEOPLE_BY_TREND = [{
  id: "Germany",
  name: "Germany",
  data: [
    ["Offer1", 50],
    ["Offer2", 30],
    ["Offer3", 20]
  ]
}, {
  id: "U.K",
  name: "U.K",
  data: [
    ["Offer3", 20],
    ["Offer4", 10],
    ["Offer5", 40],
    ["Offer6", 30]
  ]
}, {
  id: "U.S",
  name: "U.S",
  data: [
    ["Offer7", 70],
    ["Offer8", 30]
  ]
}, {
  id: "India",
  name: "India",
  data: [
    ["Offer9", 15],
    ["Offer10", 35],
    ["Offer11", 20],
    ["Offer12", 30]
  ]
}]


RESOURCE_LIST = [{
  drilldown: "Permanent Employee",
  name: "Permanent Employee",
  visible: true,
  y: 150
}, {
  drilldown: "Contractor",
  name: "Contractor",
  visible: true,
  y: 250
}, {
  drilldown: "Quinnox",
  name: "Quinnox",
  visible: true,
  y: 25
}, {
  drilldown: "CapGemini",
  name: "CapGemini",
  visible: true,
  y: 50
}];

NUMBER_OF_EMPLOYEES_BY_TREND = [{
    id: "Permanent Employee",
    name: "Permanent Employee",
    data: [30]
}, {
    id: "Contractor",
    name: "Contractor",
    data: [40]
}, {
    id: "Quinnox",
    name: "Quinnox",
    data: [10]
}, {
    id: "CapGemini",
    name: "CapGemini",
    data: [20]
}];



var app = angular.module('lobView', []);

app.controller('lobViewController', ['$scope', function($scope) {
    $scope.resourceConfig = {
        title: {
                text: ''
              },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
          },
          options: {
            chart: {
              type: 'pie'                
            },
            drilldown: {
              series: NUMBER_OF_EMPLOYEES_BY_TREND
            },
          legend: {
              align: 'right',
              x: -70,
              verticalAlign: 'top',
              y: 20,
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
              borderColor: '#CCC',
              borderWidth: 1,
              shadow: false
            },
            tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['40%', '40%']
                }
            }
          },
          series: [{
            name: 'Trends',
            colorByPoint: true,
            size: '70%',
            data: RESOURCE_LIST 
          }]  
    }
    
    $scope.resourceDistributionConfig = {
              title: {
                text: ''
              },

              tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
              },
              options: {
                chart: {
                  type: 'pie'
                },
                drilldown: {
                  series: NUMBER_OF_PEOPLE_BY_TREND
                },
                legend: {
                  align: 'right',
                  x: -70,
                  verticalAlign: 'top',
                  y: 20,
                  floating: true,
                  backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                  borderColor: '#CCC',
                  borderWidth: 1,
                  shadow: false
                },
                tooltip: {
                  headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                  pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },                  
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '40%']
                    }
                }
              },
              series: [{
                name: 'Trends',
                colorByPoint: true,
                size: '70%',
                data: TREND_LIST
              }] 
            };        
    
    $scope.resourceIndiaGlobeConfig = {
        options: {
            chart: {
                type: 'column',
                height: 400
            }
        }, 
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Resources'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        }, 
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },        
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: "India",
            data: [250, 300, 312, 310, 298, 301, 304, 298, 296, 300, 316, 334]
        }, {
            name: "Global",
            data: [150, 156, 160, 154, 152, 148, 144, 150, 151, 144, 140, 139]
        }]           
    }
}]);