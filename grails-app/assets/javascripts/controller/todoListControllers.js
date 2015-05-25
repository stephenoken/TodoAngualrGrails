/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoListControllers = angular.module('todoListControllers',[]);

todoListControllers.controller('TodoListCtrl',['$scope','$http','$mdDialog',function($scope,$http,$mdDialog){
    $scope.hello = "Hello World !!";
    $http.get('todo').success(function(data){
       $scope.todos = data;
    });
    $scope.edit = function(ev){
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.body))
                .title("This is an edit dialog")
                .content('Edit')
                .ok('Got it')
                .targetEvent(ev)
        );
    }
}]);