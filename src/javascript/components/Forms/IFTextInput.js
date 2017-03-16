import {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	Form,
	Input,
} from 'antd';

let FormItem = Form.Item;

class IFTextInput extends Component {

	render() {
		let formItemLayout = {
			labelCol: {
				span: 6
			},
			wrapperCol: {
				span: 14
			},
		};

		let {
			getFieldDecorator
		} = this.props.form;

		return (
			<FormItem
	          {...formItemLayout}
	          label="Email"
	          hasFeedback
	        >
	          {getFieldDecorator('email', {
	            rules: [{
	              type: 'email', message: 'The input is not valid E-mail!',
	            }, {
	              required: true, message: 'Please input your E-mail!',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
		);
	}
}

export default Form.create()(IFTextInput);