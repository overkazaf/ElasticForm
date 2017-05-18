import IFComponentBase from '../../IFComponentBase/index.js';
import Immutable from 'immutable';

import {
	Input,
	Form,
	Icon,
} from 'antd';
import Util from '../../../../utils/Util.js';

const FormItem = Form.Item;

export default
class IFInputNormal extends IFComponentBase {
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