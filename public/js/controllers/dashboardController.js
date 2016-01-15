var app = angular.module('dashBoard', []);

app.controller('dashboardController', ['$scope', function($scope) {
    $scope.message = "DashBoard Page!!";
}]);