import View from '../view';
import template from './chat.pug';

import MessageCreate from '../../blocks/message-create/message-create';
import Message from '../../blocks/message/message';

import User from '../../models/user';

export default class Chat extends View {

    constructor(node) {
        super(node);
        this.node.innerHTML = template();

        let model = User.load();

        if (!model) {
            location.href = './#auth';
        }

        this.form = new MessageCreate(document.querySelector('.js-form'));
        this.form.render();

        this.messages = new Message(this.node.querySelector('.js-list'));
        this.messages.render();
    }

}