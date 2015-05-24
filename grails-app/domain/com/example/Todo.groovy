package com.example

class Todo {

    String todoName
    String description
    int importance
    boolean isComplete
    static constraints = {
        description type:'text'
    }
}
