'use strict';

import Block from '../block';

import template from './message.pug';

export default class Message extends Block {
    
    constructor(node, messageModel, options = {}) {
        super(node, options);
        this.messageModel = messageModel;
        this.messageModel.renderMessages=()=>this.render();
    }
    
    render() {
        this.node.innerHTML = template({messages:this.messageModel.messages});
        //this.node.scrollIntoView(false);
    }
    
}