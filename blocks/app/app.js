'use strict';

import Block from '../block';
import Button from '../button/button';
import Textarea from '../textarea/textarea';

import Chat from '../chat/chat';
import Auth from '../auth/auth';
import CreateMsg from '../message-create/message-create';

import template from './app.pug';
import './app.scss';

class App extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template();
        
        let chat = new Chat(this.node.querySelector('.js-chat-inner'));
        let createMsg = new CreateMsg(this.node.querySelector('.js-chat-footer'));
                
        chat.render();        
        createMsg.render();
    }

}

window.addEventListener('DOMContentLoaded', () => {
    let app = new App(document.querySelector('.js-app'));
    app.render();
});

    let MessageList = [
    {
        user: "Василий Пупкин",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isOwner: false
    },
    {
        user: "Вы",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isOwner: true
    },
    {
        user: "Василий Пупкин",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isOwner: false
    },
    {
        user: "Василий Пупкин",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isOwner: false
    },
    {
        user: "Вы",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        isOwner: true
    }
];