import Block from '../block';
import Textarea from '../textarea/textarea';
import Button from '../button/button';

import template from './message-create.pug';

export default class CreateMsg extends Block {
    
    constructor(node, messageModel,options = {}) {
        super(node, options);
        this.messageModel=messageModel;
    }

    sendMessage() {
        let txt=this.node.querySelector('textarea').value;
        this.messageModel.sendMessage(txt);
        this.node.querySelector('textarea').value='';
    }
    
    render() {
        this.node.innerHTML = template();
        
        let button = new Button(this.node.querySelector('.js-submit'), {
            text: ''
        });

        button.onClick=()=>{
            this.sendMessage();
        }
        
        let textarea = new Textarea(this.node.querySelector('.js-textarea'), {
            placeholder: 'Введите сообщение',
            rows: 5
        });

        textarea.ctrlEnter=()=>{
            this.sendMessage();
        }
        
        textarea.render();
        button.render();
    }
    
}