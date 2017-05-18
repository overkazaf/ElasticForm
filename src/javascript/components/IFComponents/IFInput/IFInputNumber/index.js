import IFComponentBase from '../../IFComponentBase/index.js';

import {
	InputNumber,
	Form,
	Icon,
} from 'antd';
import Util from '../../../../utils/Util.js';

const FormItem = Form.Item;

export default
class IFInputNumber extends IFComponentBase {
	constructor(props) {
	  super(props);
	}

	render() {

		let {
			option,
		} = this.props;
	
		let model = Util.parseDataModel(option);
		let {
			size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked, mustInput,
			defaultValue, value, link, linkTarget, placeholder, carry,
			addonBefore, addonAfter, prefix, suffix,
			extraStyle,
		} = model;

		if (!visibility) {
			return <div style={{textAlign: 'center'}}><Icon type="eye" /></div>;
		}
	
		return (
			<FormItem
				label={label}
				required={!!mustInput}
			>
				<InputNumber 
					 min={-Infinity}
					 max={Infinity}
					 prefix={prefix}
					 suffix={suffix}
					 step={1}
					 disabled={!!locked}
					 size={size}
					 value={value}
					 defaultValue={defaultValue}
					 style={{ width: '100%' }}
				/>
			</FormItem>
		)
	}
}