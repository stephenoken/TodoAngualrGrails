/**
 * Created by stephenokennedy on 26/05/15.
 */
var todoServices = angular.module('todoServices',['ngResource']);

todoServices.factory('TodoService',['$resource',function($resource){
    return $resource('todo/:todoId',{},
    {
        get:{
            url:'todo/show/:todoId'
        },
        update:{
            method:'PUT',
            url:'todo/update/:todoId'
        },
        save:{
            method:'POST',
            url: '/todo/save'
        },
        delete:{
            method:'DELETE',
            url:'/todo/delete/:todoId'
        }
    });
}]);