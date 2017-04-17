import { Component } from 'react';
import {
	Menu,
	Dropdown,
	Icon,
} from 'antd';

export default 
class MenuBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		const menuArray = [
			1, 2, 3, 4
		];

		let dropdownContent = menuArray.map((item, index) => {
			const menu = (
				<Menu>
				    <Menu.Item key="0">
				      <a target="_blank" rel="noopener noreferrer" href="#">1st menu item</a>
				    </Menu.Item>
				    <Menu.Item key="1">
				      <a target="_blank" rel="noopener noreferrer" href="#">2nd menu item</a>
				    </Menu.Item>
				    <Menu.Divider />
				    <Menu.Item key="3" disabled>Close</Menu.Item>
				  </Menu>
			)

			return (
				<Dropdown key={`menu-${index}`} overlay={menu} style={{ marginLeft: '20px'}}>
				    <a className="ant-dropdown-link" href="#">
				      菜单项 <Icon type="down" />
				    </a>
				</Dropdown>
			)
		});

		return (
			<div className="m-menubar">
				{dropdownContent}
			</div>
		)
	}
}