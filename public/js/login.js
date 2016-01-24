var loginApp = angular.module('loginApp', []);


loginApp.controller('FormController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.login = function() {
        $http.post('http://localhost:3000/api/login', angular.toJson({username: $scope.username, password: $scope.password}))    
            .then(function(response) {
                if(response.status === 200) {
                    window.location.href = 'http://localhost:3000/dashboard';
                }
            });
    }
}]);
