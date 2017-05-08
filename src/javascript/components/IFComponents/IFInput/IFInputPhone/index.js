import IFComponentBase from '../../IFComponentBase/index.js';
import Immutable from 'immutable';

import {
	Input,
	Form,
	Icon,
} from 'antd';

const FormItem = Form.Item;

class IFInputPhone extends IFComponentBase {
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

		let { getFieldDecorator } = this.props.form;

		let {
			id,
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
			>
				{getFieldDecorator('123', {
	        rules: [
	          { required: `${!!mustInput}`, message: 'Please select your phone number!' },
	          { pattern: '/^{1}[3,4,5]{\d}9$/', message: 'Please input a valid phone number!' },
	        ],
	        initialValue: defaultValue || '',
	      })(
	        <Input 
						 placeholder={placeholder || 'cell phone number'}
						 addonBefore={addonBefore}
						 addonAfter={addonAfter}
						 suffix={suffix}
						 prefix={prefix}
						 disabled={!!locked}
						 size={size || 'large'}
					/>
	      )}
			</FormItem>
		)
	}
}

const wrappedIFInputPhone = Form.create({})(IFInputPhone);

export default wrappedIFInputPhone;