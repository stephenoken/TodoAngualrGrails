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

//    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]
//
//    def index(Integer max) {
//        params.max = Math.min(max ?: 10, 100)
////        respond Todo.list(params), model:[todoCount: Todo.count()]
//        render Todo.all as JSON
//    }
//
//    def show(Todo todo) {
//        respond todo
//    }
//
//    def create() {
//        respond new Todo(params)
//    }
//    def test(){
//        Todo t = new Todo(request.JSON)
//
//        t.save flush: true
//        render "New todo Created"
//
//    }
//    def save(){
//        println "Hello"
//    }
////    @Transactional
////    def save(Todo todo) {
////        if (todo == null) {
////            transactionStatus.setRollbackOnly()
////            notFound()
////            return
////        }
////
////        if (todo.hasErrors()) {
////            transactionStatus.setRollbackOnly()
////            respond todo.errors, view:'create'
////            return
////        }
////
////        todo.save flush:true
////
////        request.withFormat {
////            form multipartForm {
////                flash.message = message(code: 'default.created.message', args: [message(code: 'todo.label', default: 'Todo'), todo.id])
////                redirect todo
////            }
////            '*' { respond todo, [status: CREATED] }
////        }
////    }
//
//    def edit(Todo todo) {
//        respond todo
//    }
//
//    @Transactional
//    def update(Todo todo) {
//        if (todo == null) {
//            transactionStatus.setRollbackOnly()
//            notFound()
//            return
//        }
//
//        if (todo.hasErrors()) {
//            transactionStatus.setRollbackOnly()
//            respond todo.errors, view:'edit'
//            return
//        }
//
//        todo.save flush:true
//
//        request.withFormat {
//            form multipartForm {
//                flash.message = message(code: 'default.updated.message', args: [message(code: 'todo.label', default: 'Todo'), todo.id])
//                redirect todo
//            }
//            '*'{ respond todo, [status: OK] }
//        }
//    }
//
//    @Transactional
//    def delete(Todo todo) {
//
//        if (todo == null) {
//            transactionStatus.setRollbackOnly()
//            notFound()
//            return
//        }
//
//        todo.delete flush:true
//
//        request.withFormat {
//            form multipartForm {
//                flash.message = message(code: 'default.deleted.message', args: [message(code: 'todo.label', default: 'Todo'), todo.id])
//                redirect action:"index", method:"GET"
//            }
//            '*'{ render status: NO_CONTENT }
//        }
//    }
//
//    protected void notFound() {
//        request.withFormat {
//            form multipartForm {
//                flash.message = message(code: 'default.not.found.message', args: [message(code: 'todo.label', default: 'Todo'), params.id])
//                redirect action: "index", method: "GET"
//            }
//            '*'{ render status: NOT_FOUND }
//        }
//    }
}
