import { TodoService } from './todo-service';

export class Index {
    static inject() { return [TodoService]; }

    constructor(todoService) {
        this.todoService = todoService;
    }
}