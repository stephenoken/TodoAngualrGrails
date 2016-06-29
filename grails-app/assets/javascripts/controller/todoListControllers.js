/**
 * Created by stephenokennedy on 24/05/15.
 */
var todoListControllers = angular.module('todoListControllers',[]);

todoListControllers.controller('TodoListCtrl',['$scope','$mdDialog','TodoService',function($scope,$mdDialog,TodoService){
    $scope.todos = TodoService.query();
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
        $scope.todos = TodoService.query();
    };
    $scope.completed = function(){
        var count = 0;
        angular.forEach($scope.todos,function(todo){
            count += todo.isComplete ? 1:0;
        });
        return count;
    };
    $scope.setComplete = function(todo){
        TodoService.get({id:todo.id}).$promise.then(function(t) {
            $scope.todo = t;
        });
        $scope.todo.isComplete = todo.isComplete;
        $scope.todo.$update();
    };
}]);

todoListControllers.controller('TodoSaveCtrl',['$scope','$mdToast','$location','TodoService',function($scope,$mdToast,$location,TodoService){
    $scope.todo = new TodoService();
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

todoListControllers.controller('EditTodoDialogCtrl',['$scope','$mdDialog','TodoService','todo',
    function($scope,$mdDialog,TodoService,todo){
    $scope.todo = new TodoService();
    $scope.todo = TodoService.get({id:todo});
    $scope.cancel = function() {
        $mdDialog.hide();
    };
    $scope.delete = function(){
        $scope.todo.$delete({id:$scope.todo.id},function(){
        });
        $mdDialog.hide();
    }
    $scope.update = function(){
        $scope.todo.class = undefined;
        $scope.todo.$update(function(){
            $mdDialog.hide();
        });
    }
}]);

todoListControllers.controller('GoogleCtrl',['$rootScope',function($rootScope){
    //Oauth methods - So long as the user is signed this method is called
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        $rootScope.oUser = profile;
        $rootScope.isSignedIn = false;
        $rootScope.$digest();
    }
    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
            $rootScope.isSignedIn = false;
        });
    }
    window.onSignIn = onSignIn;
}]);
