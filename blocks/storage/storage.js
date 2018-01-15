(function(){
	'use strict';

	class AppStorage{
		constructor(storageName='AppStorage'){
			this.storageName=storageName;
			if (!window.localStorage.getItem(storageName)){
				let newStor={};
				window.localStorage.setItem(storageName,JSON.stringify(newStor));
			}
			//console.log(window.localStorage.getItem(storageName));
			this.storage=JSON.parse(window.localStorage.getItem(storageName));
			//console.log(this.storage);
		}

		getValue(item){
			if (item && this.storage[item])
				return this.storage[item];
			else
				return '';
		}

		setValue(item,value=null){
			if (item)
			{
				this.storage[item]=value;
				window.localStorage.setItem(this.storageName,JSON.stringify(this.storage));
			}
		}

	}

	window.AppStorage=AppStorage;
})();