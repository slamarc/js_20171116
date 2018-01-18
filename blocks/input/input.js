import Block from '../block';

export default class Input extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

<<<<<<< HEAD
        render() {
            this.node.innerHTML = `
            <input type='input' class='input' value="${this.options.value}" placeholder="${this.options.placeholder}"/>`;
        }
=======
    render() {
        this.node.innerHTML = `
        <input class="input" value="${this.options.value}" placeholder="${this.options.placeholder}"/>`;
    }
>>>>>>> 91dc9c0462ec2e16a0e8043141b3e23ef0577540

    getValue() {
        return this.node.querySelector('input').value;
    }

}
