PROGRAM_TREND_LIST = [{
  drilldown: "Channel Partner",
  name: "Channel Partner",
  visible: true,
  y: 20
}, {
  drilldown: "SAP Upgrade",
  name: "SAP Upgrade",
  visible: true,
  y: 15
}, {
  drilldown: "Digital",
  name: "Digital",
  visible: true,
  y: 15
}, {
  drilldown: "Data Migration",
  name: "Data Migration",
  visible: true,
  y: 50
}]

PROGRAM_DATA_BY_TREND = [{
  id: "Channel Partner",
  name: "Channel Partner",
  data: [
    ["Offer1", 50],
    ["Offer2", 30],
    ["Offer3", 20]
  ]
}, {
  id: "SAP Upgrade",
  name: "SAP Upgrade",
  data: [
    ["Offer3", 20],
    ["Offer4", 10],
    ["Offer5", 40],
    ["Offer6", 30]
  ]
}, {
  id: "Digital",
  name: "Digital",
  data: [
    ["Offer7", 70],
    ["Offer8", 30]
  ]
}, {
  id: "Data Migration",
  name: "Data Migration",
  data: [
    ["Offer9", 15],
    ["Offer10", 35],
    ["Offer11", 20],
    ["Offer12", 30]
  ]
}];

LOB_TREND_LIST = [{
  drilldown: "IT",
  name: "IT",
  visible: true,
  y: 20
}, {
  drilldown: "SAP",
  name: "SAP",
  visible: true,
  y: 15
}, {
  drilldown: "DC",
  name: "DC",
  visible: true,
  y: 15
}, {
  drilldown: "ISS",
  name: "ISS",
  visible: true,
  y: 35
}, {
    drilldown: "RnD",
    name: 'RnD',
    visible: true,
    y: 15
}]

LOB_DATA_BY_TREND = [{
  id: "IT",
  name: "IT",
  data: [
    ["Offer1", 50],
    ["Offer2", 30],
    ["Offer3", 20]
  ]
}, {
  id: "SAP",
  name: "SAP",
  data: [
    ["Offer3", 20],
    ["Offer4", 10],
    ["Offer5", 40],
    ["Offer6", 30]
  ]
}, {
  id: "DC",
  name: "DC",
  data: [
    ["Offer7", 70],
    ["Offer8", 30]
  ]
}, {
  id: "ISS",
  name: "ISS",
  data: [
    ["Offer9", 15],
    ["Offer10", 35],
    ["Offer11", 20],
    ["Offer12", 30]
  ]
}, {
  id: "RnD",
  name: "RnD",
  data: [
    ["Offer9", 15],
    ["Offer10", 35],
    ["Offer11", 20],
    ["Offer12", 30]
  ]
}];

PEOPLE_TREND_LIST = [{
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
}];

PEOPLE_DATA_BY_TREND = [{
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
}];



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
        
        
        $scope.programConfig = {
              title: {
                text: ''
              },

              tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
              },
              options: {
                chart: {
                    type: 'pie',
                    credits: {
                        enabled: false
                    }    
                },
                drilldown: {
                  series: PROGRAM_DATA_BY_TREND
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
                        center: ['52%', '20%']
                    }
                }
              },
              series: [{
                name: 'Trends',
                colorByPoint: true,
                size: '30%',
                data: PROGRAM_TREND_LIST
              }] 
            };
    
    
    $scope.lobConfig = {
              title: {
                text: ''
              },

              tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
              },
              options: {
                chart: {
                    type: 'pie',
                    credits: {
                        enabled: false
                    }    
                },
                drilldown: {
                  series: LOB_DATA_BY_TREND
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
                        center: ['52%', '20%']
                    }
                }
              },
              series: [{
                name: 'Trends',
                colorByPoint: true,
                size: '30%',
                data: LOB_TREND_LIST
              }] 
            };
    
    
    $scope.peopleConfig = {
              title: {
                text: ''
              },

              tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
              },
              options: {
                chart: {
                    type: 'pie',
                    credits: {
                        enabled: false
                    }    
                },
                drilldown: {
                  series: PEOPLE_DATA_BY_TREND
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
                        center: ['52%', '20%']
                    }
                }
              },
              series: [{
                name: 'Trends',
                colorByPoint: true,
                size: '30%',
                data: PEOPLE_TREND_LIST
              }] 
            };
    
    
}]);