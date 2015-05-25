'use strict';
/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoApp = angular.module('todoApp',['todoListControllers','ngMaterial']);

todoApp.config(['$mdThemingProvider',function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('blue')
        .backgroundPalette('grey')
        .warnPalette('red')
        ;
}]);