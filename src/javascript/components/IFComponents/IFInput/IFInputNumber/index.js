import IFComponentBase from '../../IFComponentBase/index.js';

import {
	InputNumber,
	Form,
} from 'antd';


const FormItem = Form.Item;

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
			suffix,
			addonBefore,
			addonAfter,
			defaultValue,
			value,
			locked,
			visibility,
			mustInput,
			label,
			size,
			min,
			max,
			step,
		} = option.toJS();

		if (!visibility) {
			return <div></div>;
		}
	
		console.log('disabled', locked);

		return (
			<FormItem
				label={label}
				required={!!mustInput}
			>
				<InputNumber 
					 min={min || -Infinity}
					 max={max || Infinity}
					 step={step || 1}
					 disabled={!!locked}
					 size={size || 'large'}
					 value={value}
					 defaultValue={defaultValue}
					 style={{ width: '100%' }}
				/>
			</FormItem>
		)
	}
}