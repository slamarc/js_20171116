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