export default class User {

    constructor(name) {
        this.name = name;
    }

    save() {
        localStorage.setItem('user', JSON.stringify({
            name: this.name
        }));
    }

    logout(){
        delete this.name;
        localStorage.removeItem('user');
    }

    static load() {
        let data = localStorage.getItem('user');

        if (!data) {
            return false;
        }

        try {
            data = JSON.parse(data);
        } catch(err) {
            console.error('invalid user');
            return false;
        }

        return new User(data.name);
    }

}