/**
 * 工具栏命令管理器，这里采用命令模式执行用户的操作
 */
export default
class CommandManager {
	static exec(cmd, options) {
		switch(cmd) {
			case 'File:New': {
				CommandManager.NewFile(options);
				break;
			}
		}
	}


	static NewFile(options) {
	}

	static SaveFile() {}
	static OpenFile() {}
	static DeleteFile() {}
	static NewDataSource() {}
	static OpenDataSource() {}
	static SaveDataSource() {}
	static DeleteDataSource() {}
}