export class App {
    configureRouter(config, router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'todo'], name: 'Todos', moduleId: 'todo/index' },
            { route: 'todo/add', name: 'Add new todo', moduleId: 'todo/add' }
        ]);
    }
}