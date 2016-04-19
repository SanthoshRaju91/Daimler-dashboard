var loginApp = angular.module('loginApp', []);


loginApp.controller('FormController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.login = function() {
        console.log("Here");
        $http.post(document.URL+'api/login', angular.toJson({username: $scope.username, password: $scope.password}))    
            .then(function(response) {
                console.log(response);
                if(response.status === 200) {
                    console.log(response);
                    window.location.href = document.URL+'dashboard';
                }
            });
    }
}]);
