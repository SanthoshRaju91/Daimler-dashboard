var app = angular.module('projectSummary', ["highcharts-ng"]);

app.controller('projectSummaryController', ['$scope', function($scope) {
    $scope.scheduleConfig = {
        options: {
            chart: {
                type: 'line'
            }
        },
        title: {
            text: '',            
        },
        xAxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
        },
        yAxis: {            
            min: -10,
            max: 10,
            ticketInterval: 5,
            title: {
                text: 'Resource'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '',
            showInLegend: false,
            data: [7, -6, 9, 2, 5, -5]
        }]
    };
    
    $scope.effortConfig = {
        options: {
            chart: {
                type: 'line'
            }
        },
        title: {
            text: '',            
        },
        xAxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7']
        },
        yAxis: {
            min: -10,
            max: 10,
            ticketInterval: 5,
            title: {
                text: 'Resource'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '',
            showInLegend: false,
            data: [7, 6, -2, 5, 3, -1, 0]
        }]
    };
    
}]);