import IFComponentBase from '../../IFComponentBase/index.js';
import Immutable from 'immutable';

import {
	Input,
	Form,
	Icon,
} from 'antd';

const FormItem = Form.Item;

export default
class IFInputNormal extends IFComponentBase {
	constructor(props) {
	  super(props);
	}

	getDataModel() {

	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps', nextProps);
		let newState = Immutable.fromJS(Object.assign(this.state.option.toJS(), nextProps.option));

		console.log(newState.toJS());
		this.setState({
			option: newState,
		}, console.log(this.state.option.toJS()))
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {

		let {
			option,
			eventMap,
		} = this.state;

		let {
			placeholder,
			prefix,
			suffix,
			addonBefore,
			addonAfter,
			defaultValue,
			value,
			locked,
			visibility,
			size,
			mustInput,
			label,
		} = option.toJS();

		if (!visibility) {
			return <div style={{textAlign: 'center'}}><Icon type="eye" /></div>;
		}

		return (
			<FormItem
				label={label}
				required={!!mustInput}
			>
				<Input 
					 placeholder={placeholder}
					 addonBefore={addonBefore}
					 addonAfter={addonAfter}
					 suffix={suffix}
					 prefix={prefix}
					 disabled={!!locked}
					 size={size || 'large'}
					 value={value}
					 defaultValue={defaultValue}
				/>
			</FormItem>
		)
	}
}