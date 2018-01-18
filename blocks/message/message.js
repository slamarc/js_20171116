'use strict';

import Block from '../block';
import template from './message.pug';
import './message.scss';

export default class Message extends Block {
    
    constructor(node, options = {}) {
        super(node, options);
    }
    
    render() {
        this.node.innerHTML = template({
            user: "Василий Пупкин",
            message: "Lorem123 4123  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            isOwner: false
        });
    }
    
}