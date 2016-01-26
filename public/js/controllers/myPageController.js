
var app =angular.module('myPage', []);

app.controller('myPageController', ['$scope', function($scope) {        
    
    $scope.xAxes = [{
        key: 'release',
        value: 'Releases'
    }, {
        key: 'Schedule_Adherence',
        value: 'Schedule Adherence'
    }, {
        key: 'WeekEnding',
        value: 'Week Ending'
    }, {
        key: 'no_of_requirement',
        value: '# of Requirement'
    }, {
        key: 'monthEnding',
        value: 'Month Ending'
    }];
    
    $scope.yAxes = [{
        key: 'Schedule_Adherence',
        value: 'Schedule Adherence'
    }, {
        key: 'testcases',
        value: 'Test Cases Executed'
    }, {
        key: 'no_of_defects',
        value: 'No of Defects'
    }, {
        key: 'WeekEnding',
        value: 'Week Ending'
    }, {
        key: 'Planned_vs_Actual_Hrs',
        value: 'Planned vs Actual Hrs'
    }, {
        key: 'no_of_requirement',
        value: '# of Requirement'
    }, {
        key: 'monthEnding',
        value: 'Month Ending'
    }];
    
    $scope.chartTypes = [{
        key: 'bar',
        value: 'Bar Graph'
    }, {
        key: 'line',
        value: 'Line Graph'
    }, {
        key: '3d',
        value: '3D Graph'
    }, {
        key: 'pie',
        value: 'Pie Chart'
    }, {
        key: 'stacked',
        value: 'Stacked Graph'
    }];    
    
    
    $scope.submit = false;
    $scope.submitConfig = function() {
        console.log("In submit Config " + $scope.submit);
        $scope.submit = true;
        console.log($scope.submit);
    }
}]);