(function () {
    'use strict';

    const Block = window.Block;

    class Button extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            console.log(this.options);
            this.node.innerHTML = `
            <button class="button ${this.options.className}">
                ${this.options.text}
            </button>`;
        }

    }

    window.Button = Button;
})();