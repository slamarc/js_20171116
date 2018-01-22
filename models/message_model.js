import User from './user';

export default class Message_model {

	constructor (){
		this.messages=[];
		this.prevMessages=[];
		this.updateTimer=null;
		this.restUrl="https://jschat-3993.restdb.io/rest/messages";
		this.restSort="?max=100&sort=datetime&dir=1";
		this.restAPIKey="5a5ce22f7d7ef24c5cf08cc0";
	}

	start(){
		this.loadMessages();
		this.updateTimer=setInterval(()=>{this.loadMessages()},10000);
	}

	stop(){
		clearInterval(this.updateTimer);
		this.updateTimer=null;
	}

	restXHR(message){
		//console.log(message);
		let xhr = new XMLHttpRequest();
		let data = null;
		xhr.open(message ? "POST" : "GET", this.restUrl+(message ? "" : this.restSort));
		xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", this.restAPIKey);
        xhr.setRequestHeader("cache-control", "no-cache");

		let user = User.load();
		if (!user){
			//alert("Ошибка определения автора!");
			return;
		}

        if (message){
	        data = JSON.stringify({
	            "username": user.name,
	            "message": message,
	            "datetime": Date.now()
	        });
	        xhr.addEventListener("readystatechange",  () => {
	            if (xhr.readyState === 4 && this.updateTimer!==null) {
	                this.loadMessages();
	            }
	        });      	
        }
        else{
        	xhr.addEventListener("readystatechange", () => {
	            if (xhr.readyState === 4 && xhr.status===200) {
	            	try {
	            		//console.log(xhr.response);
	            		this.messages=JSON.parse(xhr.response);
	            		let oldDate;
	            		this.messages=this.messages.reduce((allv,v) => {
	            			let messDate=this.getMessageDate(v.datetime);
	            			if (messDate!==oldDate){
	            				allv.push({self:"none",text:messDate});
	            				oldDate=messDate;
	            			}
	            			v.time=this.getMessageTime(v.datetime);
	            			v.self= v.username===user.name ? "self" : "other";
	            			v.text=v.message.split("\n");
	            			allv.push(v);
	            			return allv;
	            		},[]);
	            		this.renderMessages();
			        } catch(err) {
			        	console.log(err);
			            console.error('invalid recieve messages');
			            return false;
			        }
	            }
        });
        }

        xhr.send(data);
	}

	sendMessage(message){
		this.restXHR(message);
    }

    loadMessages() {
    	this.restXHR();
    }

    getMessageTime(msec){
        return new Date(msec).toTimeString().split(" ")[0].substr(0,5);
    }

    getMessageDate(msec){
    	let dateComponents=new Date(msec).toDateString().split(" ");
    	return dateComponents[1]+' '+dateComponents[2];
    }

    renderMessages(){
    	console.log(this.messages);
    }


}