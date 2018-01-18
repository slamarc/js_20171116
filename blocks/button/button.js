import Block from '../block';

export default class Button extends Block {

    constructor(node, options = {}) {
        super(node, options);

<<<<<<< HEAD
        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `
            <button class="button ${this.options.className}">
                ${this.options.text}
            </button>`;
        }
=======
        this.node.addEventListener('click', () => { this.onClick(); })
    }
>>>>>>> 91dc9c0462ec2e16a0e8043141b3e23ef0577540

    render() {
        this.node.innerHTML = `
        <button class="button">
            ${this.options.text}
        </button>`;
    }

    onClick() {}
}
