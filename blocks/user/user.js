(function () {
    'use strict';
    

    class User {

        constructor(storage){
            this.storage=storage;
        }

        getUser() {
            return this.storage.getValue('username');  
        }

        setUser(user){
            this.storage.setValue('username',user);
        }

    }

    window.User = User;
})();