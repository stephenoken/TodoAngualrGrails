package com.example

import grails.converters.JSON
import grails.rest.RestfulController
import grails.transaction.Transactional

//@Transactional(readOnly = true)
class TodoController extends RestfulController{
    static responseFormats = ['json','xml']
    TodoController(){
        super(Todo)
    }

    def index(){
        render Todo.list() as JSON
    }

    def show(int id){
        render Todo.get(id) as JSON
    }

    def save(){
        Todo t = new Todo(request.JSON)
        t.save flush: true
    }

    def delete(Todo todoInstance){
        println todoInstance
        todoInstance.delete flush:true
        render "Deleted"
    }

    def update(Todo todoInstance){
        todoInstance.save flush: true
        render "Updated"
    }
}
