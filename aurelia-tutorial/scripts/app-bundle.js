define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'todo'], name: 'todo-list', moduleId: 'routes/todo/todo' },
                { route: 'todo/add', name: 'add-todo', moduleId: 'routes/todo/add' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBV0EsQ0FBQztRQVJDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQ3hFLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRTthQUNyRSxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsVUFBQztJQUFELENBWEEsQUFXQyxJQUFBO0lBWFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyQ29uZmlndXJhdGlvbiwgUm91dGVyIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7IHJvdXRlOiBbJycsICd0b2RvJ10sIG5hbWU6ICd0b2RvLWxpc3QnLCBtb2R1bGVJZDogJ3JvdXRlcy90b2RvL3RvZG8nIH0sXHJcbiAgICAgIHsgcm91dGU6ICd0b2RvL2FkZCcsIG5hbWU6ICdhZGQtdG9kbycsIG1vZHVsZUlkOiAncm91dGVzL3RvZG8vYWRkJyB9XHJcbiAgICBdKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('routes/todo/add',["require", "exports", "aurelia-framework", "aurelia-router", "./todo-service", "./todo-model"], function (require, exports, aurelia_framework_1, aurelia_router_1, todo_service_1, todo_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Add = (function () {
        function Add(todoService, router) {
            this.todoService = todoService;
            this.router = router;
            this.description = '';
            this.priority = 'Medium';
            this.deadline = new Date().toISOString().substring(0, 10);
        }
        Add.prototype.addTodo = function () {
            var todo = new todo_model_1.TodoModel(this.description, this.deadline, this.priority);
            this.todoService.todoList.push(todo);
            this.router.navigateToRoute('todo-list');
        };
        Add = __decorate([
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [todo_service_1.TodoService, aurelia_router_1.Router])
        ], Add);
        return Add;
    }());
    exports.Add = Add;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90b2RvL2FkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQUtJLGFBQW9CLFdBQXdCLEVBQVUsTUFBYztZQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7WUFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVELHFCQUFPLEdBQVA7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQWZRLEdBQUc7WUFEZiw4QkFBVSxFQUFFOzZDQU13QiwwQkFBVyxFQUFrQix1QkFBTTtXQUwzRCxHQUFHLENBZ0JmO1FBQUQsVUFBQztLQWhCRCxBQWdCQyxJQUFBO0lBaEJZLGtCQUFHIiwiZmlsZSI6InJvdXRlcy90b2RvL2FkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHsgVG9kb1NlcnZpY2UgfSBmcm9tIFwiLi90b2RvLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVG9kb01vZGVsIH0gZnJvbSBcIi4vdG9kby1tb2RlbFwiO1xyXG5cclxuQGF1dG9pbmplY3QoKVxyXG5leHBvcnQgY2xhc3MgQWRkIHtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwcmlvcml0eTogc3RyaW5nO1xyXG4gICAgZGVhZGxpbmU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvZG9TZXJ2aWNlOiBUb2RvU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSAnJztcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gJ01lZGl1bSc7XHJcbiAgICAgICAgdGhpcy5kZWFkbGluZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG8oKSB7XHJcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kb01vZGVsKHRoaXMuZGVzY3JpcHRpb24sIHRoaXMuZGVhZGxpbmUsIHRoaXMucHJpb3JpdHkpO1xyXG4gICAgICAgIHRoaXMudG9kb1NlcnZpY2UudG9kb0xpc3QucHVzaCh0b2RvKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZVRvUm91dGUoJ3RvZG8tbGlzdCcpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('routes/todo/todo-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoModel = (function () {
        function TodoModel(description, deadline, priority) {
            this.description = description;
            this.deadline = deadline;
            this.priority = priority;
        }
        return TodoModel;
    }());
    exports.TodoModel = TodoModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90b2RvL3RvZG8tbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFDSSxtQkFBb0IsV0FBbUIsRUFBVSxRQUFnQixFQUFVLFFBQWdCO1lBQXZFLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1lBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBUTtZQUFVLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDM0YsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSw4QkFBUyIsImZpbGUiOiJyb3V0ZXMvdG9kby90b2RvLW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvZG9Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHByaXZhdGUgZGVhZGxpbmU6IHN0cmluZywgcHJpdmF0ZSBwcmlvcml0eTogc3RyaW5nKSB7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('routes/todo/todo-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoService = (function () {
        function TodoService() {
            this.todoList = [];
        }
        return TodoService;
    }());
    exports.TodoService = TodoService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90b2RvL3RvZG8tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUdJO1lBRkEsYUFBUSxHQUFxQixFQUFFLENBQUM7UUFHaEMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FMQSxBQUtDLElBQUE7SUFMWSxrQ0FBVyIsImZpbGUiOiJyb3V0ZXMvdG9kby90b2RvLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2RvTW9kZWwgfSBmcm9tICcuL3RvZG8tbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9TZXJ2aWNlIHtcclxuICAgIHRvZG9MaXN0OiBBcnJheTxUb2RvTW9kZWw+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('routes/todo/todo',["require", "exports", "aurelia-framework", "./todo-service"], function (require, exports, aurelia_framework_1, todo_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Todo = (function () {
        function Todo(todoService) {
            this.todoService = todoService;
        }
        Object.defineProperty(Todo.prototype, "todos", {
            get: function () {
                return this.todoService.todoList;
            },
            enumerable: true,
            configurable: true
        });
        Todo = __decorate([
            aurelia_framework_1.autoinject(),
            __metadata("design:paramtypes", [todo_service_1.TodoService])
        ], Todo);
        return Todo;
    }());
    exports.Todo = Todo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy90b2RvL3RvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUE7UUFDSSxjQUFvQixXQUF3QjtZQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUM1QyxDQUFDO1FBRUQsc0JBQUksdUJBQUs7aUJBQVQ7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3JDLENBQUM7OztXQUFBO1FBTlEsSUFBSTtZQURoQiw4QkFBVSxFQUFFOzZDQUV3QiwwQkFBVztXQURuQyxJQUFJLENBT2hCO1FBQUQsV0FBQztLQVBELEFBT0MsSUFBQTtJQVBZLG9CQUFJIiwiZmlsZSI6InJvdXRlcy90b2RvL3RvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBUb2RvU2VydmljZSB9IGZyb20gJy4vdG9kby1zZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0KClcclxuZXhwb3J0IGNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb1NlcnZpY2UudG9kb0xpc3Q7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvdG9kby1lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290Ijoic3JjIn0=

define("resources/elements/todo-element", [],function(){});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/todo-item',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoItemCustomElement = (function () {
        function TodoItemCustomElement() {
            this.item = {};
        }
        TodoItemCustomElement.prototype.done = function () {
            this.item.done = true;
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], TodoItemCustomElement.prototype, "item", void 0);
        return TodoItemCustomElement;
    }());
    exports.TodoItemCustomElement = TodoItemCustomElement;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy90b2RvLWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRUE7UUFHSTtZQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxvQ0FBSSxHQUFKO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFSUztZQUFULDRCQUFROzsyREFBTTtRQVNuQiw0QkFBQztLQVZELEFBVUMsSUFBQTtJQVZZLHNEQUFxQiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvdG9kby1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9kb0l0ZW1DdXN0b21FbGVtZW50IHtcclxuICAgIEBiaW5kYWJsZSBpdGVtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGRvbmUoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtLmRvbmUgPSB0cnVlO1xyXG4gICAgfSBcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!routes/todo/add.html', ['module'], function(module) { module.exports = "<template><h3>Todos</h3><h4>Add new todo</h4><form submit.delegate=\"addTodo()\"><input type=\"text\" value.bind=\"description\"> <input type=\"date\" value.bind=\"deadline\"><select value.bind=\"priority\"><option>High</option><option>Medium</option><option>Low</option></select><button type=\"submit\">Add todo</button></form></template>"; });
define('text!routes/todo/todo.html', ['module'], function(module) { module.exports = "<template><require from=\"resources/elements/todo-item\"></require><h3>Todos</h3><a route-href=\"route: add-todo\">Add new todo</a><ul><li repeat.for=\"todo of todos\"><todo-item item.bind=\"todo\"></todo-item></li></ul></template>"; });
define('text!resources/elements/todo-element.html', ['module'], function(module) { module.exports = "<template>${item.description} - ${item.deadline} - ${item.priority}</template>"; });
define('text!resources/elements/todo-item.html', ['module'], function(module) { module.exports = "<template><require from=\"./todo-item.css\"></require><span class=\"${item.done ? 'done' : ''}\">${item.description} - ${item.deadline} - ${item.priority} </span><button show.bind=\"!item.done\" click.delegate=\"done()\">Done</button></template>"; });
define('text!resources/elements/todo-item.css', ['module'], function(module) { module.exports = ".done {\r\n    text-decoration: line-through;\r\n}"; });
//# sourceMappingURL=app-bundle.js.map