import Button from '../button/button';
import Block from '../block';
import Textarea from '../textarea/textarea';
import Input from '../input/input';

import Messages from '../messages/messages'

import template from './app.pug';
import './app.scss';

class App extends Block {

    constructor(node, options = {}) {
        super(node, options);
    }

    render() {
        this.node.innerHTML = template();
        
        let messages = new Messages(this.node.querySelector('.js-chat-inner'));

        let button = new Button(this.node.querySelector('.js-submit-name'), {
            text: 'Войти'
        });

        let input = new Input(this.node.querySelector('.js-name'), {
            value: '',
            placeholder: 'Введите имя'
        });

        let buttonMessage = new Button(this.node.querySelector('.js-submit'), {
            text: 'Отправить'
        });

        let textareaMessage = new Textarea(this.node.querySelector('.js-textarea'), {
            placeholder: 'Введите сообщение',
            rows: 5
        });

        messages.render();
        button.render();
        input.render();
        textareaMessage.render();
        buttonMessage.render();
    }

}

window.addEventListener('DOMContentLoaded', () => {
    let app = new App(document.querySelector('.js-app'));
    app.render();
});

