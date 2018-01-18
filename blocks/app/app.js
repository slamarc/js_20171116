'use strict';

<<<<<<< HEAD
    const Block = window.Block;
    const Input = window.Input;
    const Button = window.Button;
    const Storage = window.AppStorage;
    const User = window.User;
    const TypeZone=window.TypeZone;
    const MsgZone=window.MsgZone;
=======
import Block from '../block';
import Button from '../button/button';
import Textarea from '../textarea/textarea';
>>>>>>> 91dc9c0462ec2e16a0e8043141b3e23ef0577540

import Chat from '../chat/chat';
import Auth from '../auth/auth';
import CreateMsg from '../message-create/message-create';

<<<<<<< HEAD
        constructor(node, options = {}) {
            super(node, options);
            this.chatStorage=new Storage();
            this.User = new User(this.chatStorage);
            this.User.logged=false;
        }

        render() {
            this.node.innerHTML = `
                <div class="app">
                    <div class="app__header">
                        <div class="app__name">Minichat</div>
                        <div class="app__members js-members"></div>
                    </div>
                    <div class="app__messages js-messages"></div>
                    <div class="app__typezone js-typezone"></div>
                </div>`;
            this.membersNode=this.node.querySelector('.js-members');
            this.msgZone=new MsgZone(this.node.querySelector('.js-messages'),{},this.User);
            this.msgZone.showMessages();
            //console.log(this.User);
            this.typeZone = new TypeZone(this.node.querySelector('.js-typezone'));

            this.typeZone.render(this);

            this.updateMembers();

        }

        updateMembers(){
            this.membersNode.innerHTML=this.getMembers().join(", ");
        }

        getMembers(){
            if (this.User.logged){
                return [this.User.getUser(),'Stas','Egor'];
            }
            return ['Stas', 'Egor'];
        }

        sendMessage(message){
            var data = JSON.stringify({
                "username": this.User.getUser(),
                "message": message,
                "datetime": Date.now()
            });

            var xhr = new XMLHttpRequest();
            let that=this;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    that.msgZone.showMessages({type:'partial'});
                }
            });

            xhr.open("POST", "https://jschat-3993.restdb.io/rest/messages");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("x-apikey", "5a5ce22f7d7ef24c5cf08cc0");
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send(data);
        }
=======
import template from './app.pug';
import './app.scss';

class App extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }
>>>>>>> 91dc9c0462ec2e16a0e8043141b3e23ef0577540

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