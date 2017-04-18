import {
	Dropdown,
	Menu,
	Button,
	Icon,
	message,
} from 'antd';

import IFComponentBase from '../IFComponentBase/index.js';

export default
class IFDropdown extends IFComponentBase {
	constructor(props) {
	  super(props);
	}
	
	handleMenuClick({ key }) {

	  let selectedOption = this.state.option.get('baseData').toJS().filter((item, index) => {
	  	return index == key;
	  })[0];

	  message.info(`Click on menu item ${selectedOption.label} values ${selectedOption.value}.`);

	  if (selectedOption) {
		this.setFieldValue({
			label: selectedOption.label,
			value: selectedOption.value,
		});
	  }
	}

	render() {

		let {
			option,
		} = this.state;

		let rawOption = option.toJS();

		const menu = (
		  <Menu 
		  	defaultSelectedKeys={['1']}
		  	onClick={this.handleMenuClick.bind(this)}
		  >
		    {rawOption.baseData.map((item, index) => {
		    	return (
		    		<Menu.Item key={index} value={item.value}>{item.label}</Menu.Item>
		    	)
		    })}
		  </Menu>
		);

		return (
			<Dropdown overlay={menu}>
		      <Button 
		      	size={'large'}
		      	style={{ marginLeft: 8 }}>
		        {rawOption.label} <Icon type="down" />
		      </Button>
		    </Dropdown>
		)

	}
}