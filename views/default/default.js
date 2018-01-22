import View from '../view';
import template from './default.pug';

export default class Logout extends View {

    constructor(node) {
        super(node);
        this.node.innerHTML = template();
    }
}