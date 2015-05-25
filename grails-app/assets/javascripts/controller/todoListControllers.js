/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoListControllers = angular.module('todoListControllers',[]);

todoListControllers.controller('TodoListCtrl',['$scope','$http','$mdDialog',function($scope,$http,$mdDialog){
    $http.get('todo').success(function(data){
        $scope.todos = data;
        console.log(data);
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
            data: angular.toJson($scope.newTodo),
            dataType: 'json',//Need to explicitly say it's JSON
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        }).
            success(function(data, status, headers, config) {
                $mdToast.show($mdToast.simple().content(data));
                $scope.newTodo = null;
            });
        console.log($scope.newTodo);
    }
}]);