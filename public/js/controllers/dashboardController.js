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

NUMBER_OF_OFFERS_BY_TREND = [{
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


var app = angular.module('dashBoard', ["highcharts-ng"]);

app.controller('dashboardController', ['$scope', function($scope) {    
        /*$scope.effortConfig = {
            options: {
                chart: {
                    type: 'column'
                }
            },
            series: [{
                showInLegend: false,
                data: [10, 15, 12, 8, 7, 12, 14 , 8 , 9 , 5 ]
            }],
            title: {
                text: null
            },
            xAxis: {
                title: {
                    text: 'time'
                }
            },
            loading: false
        }
        
        
        $scope.scheduleConfig = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            series: [{
                showInLegend: false,
                data: [10, 15, 12, 8, 7, 12, 14 , 8 , 9 , 5 ]
            }],
            title: {
                text: null
            },
            xAxis: {
                title: {
                    text: 'time'
                }
            },
            loading: false
        }*/
        
        
        $scope.chartConfig = {
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
                  series: NUMBER_OF_OFFERS_BY_TREND
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
                        center: ['50%', '15%']
                    }
                }
              },
              series: [{
                name: 'Trends',
                colorByPoint: true,
                size: '35%',
                data: TREND_LIST
              }] 
            };
}]);