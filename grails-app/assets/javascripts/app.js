'use strict';
/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoApp = angular.module('todoApp',['todoListControllers','todoFilters','ngRoute','ngMaterial']);

todoApp.config(['$mdThemingProvider',function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue')
        .backgroundPalette('grey')
        .warnPalette('red')
        ;
}]);

todoApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/todos',{
            templateUrl:'views/partials/todo-list.html',
            controller:'TodoListCtrl'
        })
        .when('/new-todo',{
            templateUrl:'views/partials/new-todo.html',
            controller:'TodoSaveCtrl'
        })
        .otherwise({
            redirectTo:'/todos'
        });
}]);