import View from '../view';
import template from './logout.pug';
import User from "../../models/user";

export default class Logout extends View {

    constructor(node) {
        super(node);
        this.node.innerHTML = template();
        window.addEventListener("hashchange",()=>{
			if (location.hash==='#logout'){
				let model = User.load();
				model.logout();
			}
		});
    }
}