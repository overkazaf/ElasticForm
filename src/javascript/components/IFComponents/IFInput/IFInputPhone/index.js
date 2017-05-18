import IFComponentBase from '../../IFComponentBase/index.js';
import Immutable from 'immutable';

import {
	Input,
	Form,
	Icon,
} from 'antd';
import Util from '../../../../utils/Util.js';

const FormItem = Form.Item;

class IFInputPhone extends IFComponentBase {
	constructor(props) {
	  super(props);
	}

	render() {

		let { getFieldDecorator } = this.props.form;
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

		let fontStyleObj = {
			fontSize,
			fontFamily,
			lineHeight,
			...extraStyle,
		};

		if (!visibility) {
			return <div style={{textAlign: 'center'}}><Icon type="eye" /></div>;
		}

		return (
			<FormItem
				label={label}
			>
				{getFieldDecorator(option.id, {
	        rules: [
	          { required: !!mustInput, message: '请输入手机号码' },
	          { pattern: '/^{1}[3,4,5]{\d}9$/', message: '请输入合法的手机号码!' },
	        ],
	        initialValue: defaultValue || '',
	      })(
	        <Input 
						 placeholder={placeholder}
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