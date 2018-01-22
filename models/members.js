import User from './user';
import Block from '../blocks/block'

export default class Members extends Block {
	constructor(node,options={}){
		super(node,options);
		this.restUrl="https://jschat-3993.restdb.io/rest/messages";
		this.restAPIKey="5a5ce22f7d7ef24c5cf08cc0";
		this.members=[];
		this.forLastMs=60*15*1000; // 15 minutes in ms
		this.updateTimer=null;
	}

	start(){
		this.showMembers();
		this.updateTimer=setInterval(()=>{this.showMembers()},10000);
	}

	stop(){
		clearInterval(this.updateTimer);
		this.updateTimer=null;
	}

	showMembers(){
		let xhr = new XMLHttpRequest();
		let data = null;
		xhr.open("GET", this.restUrl);
		xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", this.restAPIKey);
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.addEventListener("readystatechange", () => {
	            if (xhr.readyState === 4 && xhr.status===200) {
	            	try {
	            		//console.log(xhr.response);
	            		let messages=JSON.parse(xhr.response);
	            		let dNow=Date.now();
	            		messages=messages.filter(({datetime}) => {
	            			return (dNow-datetime)<this.forLastMs;
	            		});
	            		this.members=messages.map(({username})=>username);
	            		this.renderMembers();
	            		
			        } catch(err) {
			        	console.log(err);
			            console.error('invalid check members');
			            return false;
			        }
	            }
        });
        xhr.send(data);
	}

	renderMembers(){
		let model=User.load();
		if (model){
			if (!this.members.includes(model.name))
				this.members.unshift(model.name);
		}
		if (!this.members.length){
			this.node.innerHTML="Сейчас в чате никого.";
			return;
		}
		//console.log(this.members,model);
		this.node.innerHTML="В чате: "+this.members.join(", ");
	}
}