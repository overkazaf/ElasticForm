function isLocalStorageSupported() {
	try {
		return !(typeof global.localStorage === 'undefined');
	} catch(e) {
		return false;
	}
}


if (!global.__cache__) {
	global.__cache__ = {};
}

global.GlobalStoreMap = new Map();

export default class Storage {
	constructor(name, type = 'localStorage') { 
		if (typeof GlobalStoreMap.get(name) !== 'undefined') {
			return GlobalStoreMap.get(name);
		} else {
			this.supportLocalStorage = isLocalStorageSupported();
			this.keyMap = {};
			this.name = name;

			global.__cache__[name] = {};
			GlobalStoreMap.set(name, this);
		}
	}

	static getInstance(name) {
		return GlobalStoreMap.get(name);
	}

	set(key, obj) {
		this.keyMap[key] = 1;
		global.__cache__[this.name][key] = obj;

		console.warn('setting storage::', key, obj);
	}	

	get(key) {
		return global.__cache__[this.name][key];
	}
	
	delete(key) {
		delete this.keyMap[key];
		delete global.__cache__[this.name][key];
	}

	destroy() {
		global.__cache__ = null;
	}

	list(keyArray = []) {
		if (!keyArray.length) {
			Object.keys(this.keyMap).map((key) => {
				console.log(`${key} ====> this.get(key)`);
			});
		}
	}
}