var app = angular.module('POC', [
        'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlProvider){
    $urlProvider.otherwise('/app');
    $stateProvider.state('app', {
        url: '/app'
        , templateUrl:'app/POC/view/poc.html'
    });
}])