import IFComponentBase from '../../IFComponentBase/index.js';

import {
	Input,
} from 'antd';

export default
class IFInputNumber extends IFComponentBase {
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
			placeholder,
			prefix,
			subfix,
			addonBefore,
			addonAfter,
			defaultValue,
			value,
			locked,
			visibility,
		} = option.toJS();

		if (!visibility) {
			return <div></div>;
		}

		return (
			<Input 
				 placeholder={placeholder}
				 addonBefore={addonBefore}
				 addonAfter={addonAfter}
				 disabled={!!locked}
				 size={'large'}
				 value={value}
				 defaultValue={defaultValue}
			/>
		)
	}
}