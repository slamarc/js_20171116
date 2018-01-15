(function () {
    'use strict';

    const Block = window.Block;

    class MsgZone extends Block {

        constructor(node, options = {}) {
            super(node, options);
        }

        render() {
            var data = null;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = false;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                console.log(this);
                }
            });

            xhr.open("GET", "https://jschat-3993.restdb.io/rest/messages");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.setRequestHeader("x-apikey", "5a5ce22f7d7ef24c5cf08cc0");
            xhr.setRequestHeader("cache-control", "no-cache");

            xhr.send(data);
        }


    }

    window.MsgZone = MsgZone;
})();