var myApp = angular.module('myApp', ['ngRoute', 'dashBoard']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    
    $routeProvider
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardController'
    })
    .when('/tasks', {
        templateUrl: 'views/tasks.html',
        controller: 'taskController'
    })
    .when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'reportController'
    })
    .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'addController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactController'
    })
    .otherwise({redirectTo: '/'});
}]);
