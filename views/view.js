export default class View {

    constructor(node) {
        this.node = node;
    }

    show() {
        this.node.hidden = false;
    }

    hide() {
        this.node.hidden = true;
    }

}