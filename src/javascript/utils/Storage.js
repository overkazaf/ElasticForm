function isLocalStorageSupported() {
	return !(typeof window.localStorage === 'undefined');
}

export default class Storage {
	
	constructor() { 
		this.supportLocalStorage = isLocalStorageSupported();
	}

	save(key, obj) {
		if (this.supportLocalStorage) {
			return localStorage.setItem(key, JSON.stringify(obj));
		}
	}	

	static get(key) {
		if (this.supportLocalStorage) {
			return JSON.parse(localStorage.getItem(key));
		}
	}
	
	remove(key) {
		if (this.supportLocalStorage) {
			localStorage.removeItem(key);
		}
	}
}