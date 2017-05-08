import Storage from './Storage';

const storeInstance = new Storage('storage-for-util');

export default class Util {

	static getCurrentUserId() {
		return storeInstance.get('userId');
	}
}