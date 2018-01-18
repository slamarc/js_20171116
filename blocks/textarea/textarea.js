<<<<<<< HEAD
(function () {
    'use strict';

    const Block = window.Block;

    class TextArea extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
            <textarea placeholder="${this.options.placeholder}"/></textarea>`;
        }

    }

    window.TextArea = TextArea;
})();
=======
import Block from '../block';

export default class Textarea extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = `
        <textarea class="textarea" rows="${this.options.rows}" placeholder="${this.options.placeholder}"></textarea>`;
    }

}

>>>>>>> 91dc9c0462ec2e16a0e8043141b3e23ef0577540
