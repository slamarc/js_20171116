(function () {
    'use strict';

    const Block = window.Block;
    const Input = window.Input;
    const Button = window.Button;
    const Textarea = window.Textarea;

    class App extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            this.node.innerHTML = `                
                <div class="chat">
                    <div class="chat__container">
                        <div class="chat__inner">
                            <div class="messages">
                                <div class="message message_receive">
                                    <div class="message__header">Василий Пупкин</div>
                                    <div class="message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                <div class="message message_send">
                                    <div class="message__header">Вы</div>
                                    <div class="message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                <div class="message message_receive">
                                    <div class="message__header">Василий Пупкин</div>
                                    <div class="message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                <div class="message message_send">
                                    <div class="message__header">Вы</div>
                                    <div class="message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                <div class="message message_receive">
                                    <div class="message__header">Василий Пупкин</div>
                                    <div class="message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                                <div class="message message_send">
                                    <div class="message__header">Вы</div>
                                    <div class="message__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                </div>
                            </div>
                        </div>            
                        <div class="chat__footer">
                            <div class="message-create">
                                <div class="message-create__textarea js-textarea"></div>
                                <div class="message-create__submit js-submit"></div>
                            </div>
                            <div class="auth">
                                <div class="auth__name js-name"></div>
                                <div class="auth__submit js-submit-name"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

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

            button.render();
            input.render();
            textareaMessage.render();
            buttonMessage.render();
        }

    }

    window.App = App;
})();