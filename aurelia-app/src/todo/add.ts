import { autoinject } from 'aurelia-framework';
import { TodoService } from './todo-service';

@autoinject()
export class Add {
    constructor(private todoService: TodoService) {
    }
}