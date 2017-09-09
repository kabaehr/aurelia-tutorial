import { bindable } from 'aurelia-framework';

export class TodoItemCustomElement {
    @bindable item;

    constructor() {
        this.item = {};
    }

    done() {
        this.item.done = true;
    } 
}