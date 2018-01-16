import Block from '../block';
import Message from './message/message'

import template from './messages.pug';
import './messages.scss';

export default class Messages extends Block {
    
    constructor(node, options = {}) {
        super(node, options);
    }
    
    render() {
        this.node.innerHTML = template();
        
        let message = new Message(this.node.querySelector('.messages'));
        
        message.render();
    }
    
}