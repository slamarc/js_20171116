import View from '../view';
import template from './auth.pug';

import Button from '../../blocks/button/button';
import Input from '../../blocks/input/input';

import User from '../../models/user';

export default class Auth extends View {

    constructor(node) {
        super(node);
        this.node.innerHTML = template();

        let model = User.load();
        //console.log(model);
        if (model) {
            location.href = './#chat';
            return;
        }

        this.renderAuth();

        window.addEventListener("hashchange",()=>{
            let model = User.load();
            console.log("hashchange",model);
            
            if (model && location.hash==="#auth") {
                location.href = './#chat';
                return;
            }
            if (!model && location.hash==="#auth") {
                this.renderAuth();
            }
        });

    }

    renderAuth(){
        console.log("renderAuth");
        this.button = new Button(this.node.querySelector('.js-submit'), {
            text: 'Войти'
        });

        this.input = new Input(this.node.querySelector('.js-name'), {
            value: '',
            placeholder: 'Введите имя'
        });

        this.input.render();
        this.button.render();

        this.button.onClick = () => { this.login() };
    }

    login() {
        let name = this.input.getValue();

        if (!name.length) {
            alert('Не валидное имя');
            return;
        }

        let model = new User(name);
        model.save();

        location.href = './#chat';
    }

}