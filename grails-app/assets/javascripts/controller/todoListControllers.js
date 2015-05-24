/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoListControllers = angular.module('todoListControllers',[]);

todoListControllers.controller('TodoListCtrl',['$scope','$http',function($scope,$http){
    $scope.hello = "Hello World !!";
    $http.get('todo').success(function(data){
       $scope.todos = data;
    });
}]);