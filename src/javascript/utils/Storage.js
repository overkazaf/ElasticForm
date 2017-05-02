export default Storage {

	static get(key) {
		if (Storage.supportLocalStorage()) {
			return JSON.parse(localStorage.getItem(key));
		}
	}

	static save(key, obj) {
		if (Storage.supportLocalStorage()) {
			return localStorage.setItem(key, JSON.stringify(obj));
		}
	}

	static remove(key) {
		if (Storage.supportLocalStorage()) {
			return localStorage.removeItem(key);
		}
	}

	static supportLocalStorage() {
		return !(typeof window.localStorage === 'undefined');
	}
}