import { autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { TodoService } from "./todo-service";
import { TodoModel } from "./todo-model";

@autoinject()
export class Add {
    description: string;
    priority: string;
    deadline: string;

    constructor(private todoService: TodoService, private router: Router) {
        this.description = '';
        this.priority = 'Medium';
        this.deadline = new Date().toISOString().substring(0, 10);
    }

    addTodo() {
        let todo = new TodoModel(this.description, this.deadline, this.priority);
        this.todoService.todoList.push(todo);
        this.router.navigateToRoute('todo-list');
    }
}