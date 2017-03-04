const LEVEL = {
	DEV: 0,
	TEST: 1,
	ONLINE: 2,
}

export default
class LoggerFactory {
	const factories = {};

	static create(clazzName, level) {
		return factories[clazzName] ? 
			   factories[clazzName] :
			   (factories[clazzName] = new Logger(level));
	}
}

class Logger {
	constructor(level) {
		this.level = level;
	}

	log(...args) {
		const { level } = this;
		if () {

		}
	}
}