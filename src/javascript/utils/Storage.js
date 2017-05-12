function isLocalStorageSupported() {
	try {
		return !(typeof window.localStorage === 'undefined');
	} catch(e) {
		return false;
	}
}



export default class Storage {
	constructor(name, type = 'localStorage') { 
		this.supportLocalStorage = isLocalStorageSupported();
		this.keyMap = {};
		this.name = name;
	}

	set(key, obj) {
		this.keyMap[key] = 1;

		if (this.type === 'localStorage' && this.supportLocalStorage) {
			localStorage.setItem(key, JSON.stringify(obj));
		}
	}	

	get(key) {
		if (this.type === 'localStorage' && this.supportLocalStorage) {
			return JSON.parse(localStorage.getItem(key));
		}
	}
	
	delete(key) {
		delete this.keyMap[key];

		if (this.type === 'localStorage' && this.supportLocalStorage) {
			localStorage.removeItem(key);
		}
	}


	list(keyArray = []) {
		if (!keyArray.length) {
			Object.keys(this.map).map((key) => {
				console.log(`${key} ====> this.get(key)`);
			});
		}
	}
}