(function () {
    'use strict';

    const Block = window.Block;

    class MsgZone extends Block {

        constructor(node, options = {},User) {
            super(node, options);
            this.User=User;
            this.oldmessages=[];
        }

        showMessages(options={}) {
            let data = null;

            let xhr = new XMLHttpRequest();
            let that=this;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4 && this.status===200) {
                    that.renderMessages(JSON.parse(this.response),options);
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

        messageTPL({username,message,datetime}){
            return `<li class="${(username===this.User.getUser()) ? "message__self" : "message__other"}">
                              <div class="msg">
                                  <div class="user">${username}</div>
                                ${this.n2p(message)}
                                <time>${this.getMessageTime(datetime)}</time>
                              </div>
                            </li>`;
        }

        renderMessages(messages,{type='full'}){

            if (!this.oldmessages.length || type=='full'){
                this.node.innerHTML='<ol class="app__chat">'+
                        messages.map((v)=>{
                            return this.messageTPL(v);
                        }).join('')+
                    '</ol>';                
            }
            else{
                let oldIDs=this.oldmessages.map(({_id})=>_id);
                let newMessages=messages.filter(({_id})=>{return !oldIDs.includes(_id)});
                for (let message of newMessages){
                    this.node.querySelector("ol").insertAdjacentHTML('beforeend',this.messageTPL(message));
                }
            }
            this.oldmessages=messages;
            this.node.scrollIntoView(false);
        }


    }

    window.MsgZone = MsgZone;
})();