# Tutorial
## Introduction
### Why Aurelia?

Taken from [here](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/technical-benefits/1):
- Use modern JavaScript and TypeScript - fully written in standards-based ES 2015 and ES 2016
- Designed to work with modern ES 2015-oriented package managers like JSPM.
- Intended to be used with modern transpilers such as Babel and TypeScript.
- Leverages standards-compliant Web Components specs such as HTMLTemplateElement and ShadowDOM
- Highly modular development, suitable for large-scale apps
- Designed for modern web browsers.
- Adds polyfills to support older browsers, such as IE9.
- Fully-extensible and adaptive data-binding engine.
- Powerful and flexible hierarchical dependency injection.
- Leverage conventions to write less code and get more done.
- Little to no framework intrusion, so developers can focus on their app, not the framework.
- Application and package bundling compatible with any build system.

### Requirements

In this tutorial we will primarily be using the Aurelia CLI. Prerequisites for this are 
- NodeJS version 4.x or above
- Git

Once you have those prerequisites installed you can install the Aurelia CLI itself by running the following command on the command line:

`npm install aurelia-cli -g`

## Basic tutorial

### 1. Creating and running a new app

1. Run `au new` on the command line. Take option `2. Default TypeScript` and accept all other defaults.
2. Change directory to the newly created `aurelia-app` folder and run `au run --watch`.
3. Wait for the build to be finished, open a web browser and navigate to [http://localhost:9000](http://localhost:9000). You should see a web page displaying "Hello World!".

### 2. Router setup and first module

4. Replace `<h1>${message}</h1>` in `app.html` with `<router-view></router-view>`.
5. Add `configureRouter(config, router)` function in `app.ts` and remove the message. Full code for the function:

```
  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'todo'], name: 'Todos', moduleId: 'todo/index' },
      { route: 'todo/add', name: 'Add new todo', moduleId: 'todo/add' }
    ]);
  }
```

6. Add `todo/index.html` with the following content:

```
<template>
    <h3>Todos</h3>
</template>
```

7. Add `todo/index.ts` with the following content:

```
export class Index {
}
```
### 3. Dependency injection, services and models

8. Add `todo/todo.ts` with the following content:

```
export class Todo {
    constructor(private description: string, private deadline: string, private priority: string) {
    }
}
```

9. Add a new module with `todo/add.html` and `todo/add.ts`.

todo/add.html:
```
<template>
    <h3>Todos</h3>
    <h4>Add new todo</h4>
    <form>
        <input type="text">
        <input type="date">
        <select>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
        </select>
        <button type="submit">Add todo</button>
    </form>
</template>
```

todo/add.ts:
```
export class Add {
}
```

10. Add todo/todo-service.ts with the following content:

```
import { Todo } from './todo';

export class TodoService {
    todos: Array<Todo> = [];

    constructor() {
    }
}
```

11. Add TodoService injection to `todo/index.ts` and `todo/add.ts`. To do this, extend both files with the following parts:

At the top of the file add:
```
import { TodoService } from './todo-service';
```

Import the `autoinject` decorator and at the top of each class and use it above the class declaration:
```
import { autoinject} from 'aurelia-framework';

@autoinject()
```

Add/extend the constructor for each class:
```
constructor(private todoService: TodoService) {
}
```

## Advanced tutorial