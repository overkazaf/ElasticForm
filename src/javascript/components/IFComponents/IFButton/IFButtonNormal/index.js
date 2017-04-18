import {
	Button,
} from 'antd';

import IFComponentBase from '../../IFComponentBase/index.js';

export default
class IFButtonNormal extends IFComponentBase {
	constructor(props) {
	  super(props);
	}

	getDataModel() {

	}

	render() {

		let {
			option,
			eventMap,
		} = this.state;

		let {
			label,
			visibility,
			locked,
			theme,
			ghost,
		} = option.toJS();

		let {
			onClick,
		} = eventMap;

		return (
			<Button 
				ghost={!!ghost}
			    size={'large'}
				type={theme}
				disabled={!!locked}
				onClick={onClick}
			>
				{label}
			</Button>
		)
	}
}