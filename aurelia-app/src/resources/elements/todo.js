import { bindable, decorators } from 'aurelia-framework';

export const TodoCustomElement = decorators(
    bindable('item')
).on(class {
    constructor() {
        this.item = {};
    }

    done() {
        this.item.done = true;
    }
});