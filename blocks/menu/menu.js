import Block from "../block";
import User from "../../models/user";

import template from "./menu.pug";

export default class Menu extends Block {
	constructor (node, options={}){
		super(node,options);
		this.options.menu=options.menu || [];
		this.logout=null;
		this.login=null;
		window.addEventListener("hashchange",()=>{
			this.render();
		});
	}

	updateMenu(hash){
		this.node.querySelectorAll("li").forEach(li=>li.classList.remove("active"));
		if (this.node.querySelector(`a[href="${hash}"]`))
			this.node.querySelector(`a[href="${hash}"]`).closest("li").classList.add('active');

	}

	render(){
		//console.log(this.options.menu);
		let model = User.load();
		if (!model){
			if (this.login){
				this.options.menu.unshift(this.login);
				this.login=null;
			}
			if (!this.logout)
				this.logout=this.options.menu.pop();
			
		}
		else{
			if (this.logout){
				this.options.menu.push(this.logout);
				this.logout=null;
			}
			if (!this.login)
				this.login=this.options.menu.shift();
		}
		this.node.innerHTML=template(this.options);
		this.updateMenu(location.hash);
	}
}