import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'todo'], name: 'todo-list', moduleId: 'routes/todo/todo' },
      { route: 'todo/add', name: 'add-todo', moduleId: 'routes/todo/add' }
    ]);
  }
}
