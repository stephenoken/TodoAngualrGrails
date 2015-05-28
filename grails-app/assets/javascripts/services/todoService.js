/**
 * Created by stephenokennedy on 26/05/15.
 */
var todoServices = angular.module('todoServices',['ngResource']);

todoServices.factory('TodoLists',['$resource',function($resource){
    return $resource('todo/:todId',{},
    {
        update:{
            method:'PUT'
        },
        save:{
            method:'POST',
            url: '/todo/save'
        }
    });
}]);