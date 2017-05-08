function isLocalStorageSupported() {
	try {
		return !(typeof window.localStorage === 'undefined');
	} catch(e) {
		return false;
	}
}

export default class Storage {
	
	constructor() { 
		this.supportLocalStorage = isLocalStorageSupported();
	}

	set(key, obj) {
		if (this.supportLocalStorage) {
			return localStorage.setItem(key, JSON.stringify(obj));
		}
	}	

	get(key) {
		if (this.supportLocalStorage) {
			return JSON.parse(localStorage.getItem(key));
		}
	}
	
	delete(key) {
		if (this.supportLocalStorage) {
			localStorage.removeItem(key);
		}
	}
}