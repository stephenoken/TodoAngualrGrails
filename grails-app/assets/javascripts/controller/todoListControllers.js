/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoListControllers = angular.module('todoListControllers',[]);

todoListControllers.controller('TodoListCtrl',['$scope','$mdDialog','TodoLists',function($scope,$mdDialog,TodoLists){
    $scope.todos = TodoLists.query();
    $scope.edit = function(ev,todo){
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

todoListControllers.controller('TodoSaveCtrl',['$scope','$mdToast','$location','TodoLists',function($scope,$mdToast,$location,TodoLists){
    $scope.todo = new TodoLists();
    $scope.createTodo = function(){
        $scope.todo.$save(
            function(){//Successful callback
            $mdToast.show($mdToast.simple().content("Todo has been created!!"));
                $location.url('/todo');
        },
            function(){//Error callback
                $mdToast.show($mdToast.simple().content("Sorry an error has occurred!"));
            }
        );
    }
}]);

todoListControllers.controller('EditTodoDialogCtrl',['$scope','$mdDialog','todo',function($scope,$mdDialog,todo){
    $scope.todo = todo;
    $scope.cancel = function() {
        $mdDialog.hide();
    };
}]);