(function () {
    'use strict';

    const Block = window.Block;

    class MsgZone extends Block {

        constructor(node, options = {},User) {
            super(node, options);
            this.username=User.getUser();
        }

        showMessages() {
            let data = null;

            let xhr = new XMLHttpRequest();
            let that=this;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4 && this.status===200) {
                    that.renderMessages(JSON.parse(this.response));
                }
            });

            xhr.open("GET", "https://jschat-3993.restdb.io/rest/messages");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("x-apikey", "5a5ce22f7d7ef24c5cf08cc0");
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send(data);
        }

        getMessageTime(msec){
            return new Date(msec).toTimeString().split(" ")[0].substr(0,5);
        }
        n2p(message){
            let splitbyN=message.split("\n");
            return splitbyN.map(v=>"<p>"+v+"</p>").join("");
        }

        renderMessages(messages){

            this.node.innerHTML='<ol class="app__chat">'+
                    messages.map(({username,message,datetime})=>{
                        return `<li class="${(username===this.username) ? "message__self" : "message__other"}">
                          <div class="msg">
                              <div class="user">${username}</div>
                            ${this.n2p(message)}
                            <time>${this.getMessageTime(datetime)}</time>
                          </div>
                        </li>`
                    }).join('')+
                '</ol>';
        }


    }

    window.MsgZone = MsgZone;
})();