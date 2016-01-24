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
            data: [5, 3, 4, 7, 2, 4, 5, ,6, 3, 8, 5, 9]
        }, {
            name: 'Failed',
            data: [2, 2, 3, 2, 1, 2, 3 ,4 , 1, 4, 2, 3]
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
            data: [2, 3, 4 ,6, 7, 12, 4, 3, 6, 7, 4, 9]
        }, {
            name: 'Project 2',
            data: [3, 4, 5, 1, 2, 8, 4, 6, 3, 9, 1, 3]
        }, {
            name: 'Project 3',
            data: [4, 5, 8, 2, 6, 3, 9, 10, 11, 23, 4, 6]
        }, {
            name: 'Project 4',
            data: [3, 5, 6, 11, 2, 3, 5, 7, 2, 12, 3, 4]
        }, {
            name: 'Project 5',
            data: [4, 8, 3, 2, 5, 11, 2, 5, 7, 11, 6, 5]
        }]
    }
}]);