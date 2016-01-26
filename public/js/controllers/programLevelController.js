var app = angular.module('programLevel', ["highcharts-ng"]);

app.controller('programLevelController', ['$scope', function($scope) {
    $scope.testCaseConfig = {
        options: {
            chart: {
                type: 'column',
                height: 300
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
            max: 100,
            ticketInterval: 10,
            title: {
                text: 'Total Test Cases Executed'
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
            name: 'Passed',
            data: [50, 33, 42, 17, 22, 44, 56, ,67, 31, 83 ,35, 49]
        }, {
            name: 'Failed',
            data: [22, 12, 13, 12, 21, 12, 13 ,14 , 11, 14, 22, 13]
        }]
    };
    
    $scope.defectConfig = {
        options: {
            chart: {
                type: 'column',
                height: 300
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
                text: 'Total Defects Logged'
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
            name: 'Project 1',
            data: [2, 14, 22, 10, 2, 23, 33, 12, 8, 11, 22, 6]
        }, {
            name: 'Project 2',
            data: [3, 23, 20, 12, 16, 14, 19, 22, 23, 31, 22, 9]
        }, {
            name: 'Project 3',
            data: [4, 12, 23, 25, 22, 4, 23, 31, 12, 51, 23, 7]
        }, {
            name: 'Project 4',
            data: [22, 42, 33, 51, 33, 52, 13, 42, 24, 22, 31, 12]
        }, {
            name: 'Project 5',
            data: [24, 16, 17, 38, 16, 17, 10, 14, 25, 15, 26, 14]
        }]           
    }
    
    $scope.automationConfig = {
         options: {
            chart: {
                type: 'spline',
                height: 300
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
            max: 100,
            ticketInterval: 10,
            title: {
                text: 'Level Of Automation'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Project 1',
            data: [20, 30, 40 ,62, 72, 12, 42, 33, 60, 47, 24, 69]
        }, {
            name: 'Project 2',
            data: [33, 24, 45, 12, 23, 85, 43, 63, 23, 59, 51, 33]
        }, {
            name: 'Project 3',
            data: [44, 55, 38, 22, 46, 33, 79, 30, 51, 23, 34, 56]
        }, {
            name: 'Project 4',
            data: [43, 55, 36, 51, 42, 53, 35, 57, 32, 32, 43, 34]
        }, {
            name: 'Project 5',
            data: [54, 38, 23, 42, 55, 61, 32, 45, 57, 41, 36, 45]
        }]
    }
}]);