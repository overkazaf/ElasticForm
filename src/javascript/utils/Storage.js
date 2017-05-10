function isLocalStorageSupported() {
	try {
		return !(typeof window.localStorage === 'undefined');
	} catch(e) {
		return false;
	}
}



export default class Storage {
	__global_storage__ = {};
	constructor(name, type = 'localStorage') { 
		this.supportLocalStorage = isLocalStorageSupported();
		this.keyMap = {};
		this.name = name;
	}

	set(key, obj) {
		this.keyMap[key] = 1;

		if (this.type === 'localStorage' && this.supportLocalStorage) {
			localStorage.setItem(key, JSON.stringify(obj));
		} else {
			__global_storage__[key] = JSON.stringify(obj);
		}
	}	

	get(key) {
		if (this.type === 'localStorage' && this.supportLocalStorage) {
			return JSON.parse(localStorage.getItem(key));
		} else {
			return __global_storage__[key];
		}
	}
	
	delete(key) {
		delete this.keyMap[key];

		if (this.type === 'localStorage' && this.supportLocalStorage) {
			localStorage.removeItem(key);
		} else {
			delete __global_storage__[key];
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