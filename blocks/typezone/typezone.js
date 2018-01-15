(function () {
    'use strict';

    const Input = window.Input;
    const Button = window.Button;
    const TextArea = window.TextArea;

    class TypeZone extends Block {

        constructor(node, appmode, options = {}) {
            super(node, options);
        }

        render(App) {
            let User=App.User;
            let submitEl = document.createElement("span");
            let inputEl = document.createElement("span");
            let submit = new Button(submitEl,{text:"Войти"});
            submit.render();
            submitEl.addEventListener("click",e=>{
                if (this.node.querySelector("input").value){
                    User.setUser(this.node.querySelector("input").value);
                    User.logged=true;
                    this.renderChatZone(App);
                    App.updateMembers();
                }
                else
                    return false;
            });
            //console.log(User);
            let input = new Input (inputEl,{value:User.getUser(),placeholder:'Ваше имя'});
            input.render();
            this.node.appendChild(inputEl);
            this.node.appendChild(submitEl);            
        }

        renderChatZone(App){
            while (this.node.lastChild) {
                this.node.removeChild(this.node.lastChild);
            }

            let submitEl = document.createElement("span");
            let submit = new Button(submitEl,{className:"app__send",text:""});
            submit.render();
            submitEl.addEventListener("click",e=>{
                if (this.node.querySelector("textarea").value){
                    App.sendMessage(this.node.querySelector("textarea").value);
                    this.node.querySelector("textarea").value="";
                }
                else
                    return false;
            });

            let areaEl=document.createElement("span");
            let textArea= new TextArea(areaEl,{placeholder:"Введите сообщение..."});
            textArea.render();

            this.node.appendChild(areaEl);
            this.node.appendChild(submitEl);


        }

    }

    window.TypeZone = TypeZone;
})();