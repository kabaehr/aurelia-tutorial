import { TodoService } from './todo-service';

export class Add {
    static inject() { return [TodoService]; }

    constructor(todoService) {
        this.todoService = todoService;
    }
}