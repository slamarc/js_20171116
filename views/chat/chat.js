import View from '../view';
import template from './chat.pug';

import MessageCreate from '../../blocks/message-create/message-create';
import Message from '../../blocks/message/message';

import Message_model from "../../models/message_model";

import User from '../../models/user';

export default class Chat extends View {

    constructor(node) {
        super(node);
        this.node.innerHTML = template();

        let model = User.load();
        //console.log(model);
        if (!model) {
            location.href = './#auth';
        }

        this.renderChat();

        window.addEventListener("hashchange",()=>{

            let model = User.load();
            if (!model && location.hash==="#chat") {
                alert("Пожалуйста, авторизуйтесь.");
                location.href = './#auth';
            }
            else if (model && location.hash==="#chat"){
                this.renderChat();
            }
        });
    }

    renderChat(){
        this.messageModel = new Message_model();

        this.messageModel.start();

        this.form = new MessageCreate(document.querySelector('.js-form'),this.messageModel);
        this.form.render();

        this.messages = new Message(this.node.querySelector('.js-list'),this.messageModel);
        this.messages.render();
    }

}