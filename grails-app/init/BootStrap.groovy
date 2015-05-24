import com.example.Todo

class BootStrap {

    def init = { servletContext ->
        Todo.findOrSaveWhere(todoName:"Learn Grails",description: "Learn grails 3.0", importance: 5, isComplete: true);
        Todo.findOrSaveWhere(todoName:"Learn Angular",description: "Learn Angular", importance: 3, isComplete: false);
        Todo.findOrSaveWhere(todoName:"Learn Grunt",description: "Learn how to run Grunt", importance: 2, isComplete: false);
    }
    def destroy = {
    }
}
