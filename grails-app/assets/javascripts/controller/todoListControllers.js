/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoListControllers = angular.module('todoListControllers',[]);

todoListControllers.controller('TodoListCtrl',['$scope','$http','$mdDialog',function($scope,$http,$mdDialog){
    $http.get('todo').success(function(data){
        $scope.todos = data;
        console.log(data);
    });
    $scope.edit = function(ev,todo){
        console.log(todo);
        $mdDialog.show({
            clickOutsideToClose: true,
            //scope: $scope,
            //preserveScope: true,
            controller:'EditTodoDialogCtrl',
            templateUrl:'views/partials/edit-todo.html',
            targetEvent:ev,
            locals: {todo:todo}
        });
    };
    $scope.completed = function(){
        var count = 0;
        angular.forEach($scope.todos,function(todo){
            count += todo.isComplete ? 1:0;
        });
        return count;
    };
}]);

todoListControllers.controller('TodoSaveCtrl',['$scope','$http','$mdToast',function($scope,$http,$mdToast){

    $scope.createTodo = function(){
        $http({
            method: 'POST',
            url: '/todo/test',
            data: angular.toJson($scope.todo),
            dataType: 'json',//Need to explicitly say it's JSON
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).
            success(function(data, status, headers, config) {
                $mdToast.show($mdToast.simple().content(data));
                $scope.todo = null;
            });
        console.log($scope.todo);
    }
}]);

todoListControllers.controller('EditTodoDialogCtrl',['$scope','$mdDialog','todo',function($scope,$mdDialog,todo){
    $scope.todo = todo;
    $scope.cancel = function() {
        $mdDialog.hide();
    };
}]);