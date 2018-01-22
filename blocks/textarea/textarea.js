import Block from '../block';

export default class Textarea extends Block {

    constructor(node, options = {}) {
        super(node, options);
        this.node.addEventListener('keydown', (e) => {
        	if (e.ctrlKey && e.keyCode == 13)
        	this.ctrlEnter(); 
    	});
    }

    render() {
        this.node.innerHTML = `
        <textarea class="textarea" rows="${this.options.rows}" placeholder="${this.options.placeholder}"></textarea>`;
    }

    ctrlEnter(){}

}
