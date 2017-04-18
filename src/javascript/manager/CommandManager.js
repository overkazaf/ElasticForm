export default
class CommandManager {
	static exec(cmd, options) {
		switch(cmd) {
			case 'AddRow': {
				CommandManager.doAddRow(options);
				break;
			}
		}
	}


	static doAddRow(options) {

	}
}