import { autoinject } from 'aurelia-framework';
import { TodoService } from './todo-service';

@autoinject()
export class Todo {
    constructor(private todoService: TodoService) {
    }
}