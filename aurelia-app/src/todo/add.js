import { TodoService } from './todo-service';
import { Todo } from './todo';
import { Router } from 'aurelia-router';

export class Add {
    static inject() { return [TodoService, Router]; }

    constructor(todoService, router) {
        this.router = router;
        this.todoService = todoService;
        this.initializeProperties();
    }

    initializeProperties() {
        this.description = '';
        this.priority = 'Medium';
        this.deadline = new Date();
    }

    addTodo() {
        let todo = new Todo(this.description, this.deadline, this.priority);    
        this.todoService.todos.push(todo);
        this.router.navigateToRoute('Todos');
    }
}