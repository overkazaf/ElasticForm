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

	  let selectedOption = this.state.option.get('dataSource').toJS().filter((item, index) => {
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
		    {rawOption.dataSource && rawOption.dataSource.map((item, index) => {
		    	return (
		    		<Menu.Item key={index} value={item.value}>{item.label}</Menu.Item>
		    	)
		    })}
		  </Menu>
		);

		let {
			size,
			theme,
		} = rawOption;


		console.log('size', size);
		console.log('theme', theme);

		return (
			<Dropdown overlay={menu}>
		      <Button 
		      	size={'large'}
		      	type={theme || 'default'}
		      	style={{ width: '100%'}}>
		        {rawOption.label} <Icon type="down" />
		      </Button>
		    </Dropdown>
		)

	}
}