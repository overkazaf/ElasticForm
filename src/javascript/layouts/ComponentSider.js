import { Component } from 'react';
import {
	Menu,
	Icon,
} from 'antd';

const SubMenu = Menu.SubMenu;

class ComponentSider extends Component {

	handleMenuClick(...args) {
		this.props.handleMenuClick && this.props.handleMenuClick(...args);
	}

	render() {
		const handleMenuClick = (...args) => {
			this.handleMenuClick(...args);
		};
		const siderMenuArray = [
			{
				name: '常用组件',
				icon: 'rocket',
				children: [
					{ name: '数字', icon: 'pay-circle'},
					{ name: '单价', icon: 'pay-circle-o'},
					{ name: '电话', icon: 'mobile'},
					{ name: '邮箱', icon: 'mail' },
					{ name: '文本' },
				]
			},
			{
				name: '日期组件',
				icon: 'calendar',
				children: [
					{ name: '日期选择器' },
					{ name: '范围选择器' },
					{ name: '时间选择器' },
				]
			},
			{
				name: '表单组件',
				icon: 'copy',
				children: [
					{ name: '数字' },
					{ name: '电话' },
					{ name: '邮箱' },
					{ name: '文本' },
					{ name: '下拉框' },
					{ name: '选择框' },
					{ name: '单选（水平）', icon: 'close-circle'},
					{ name: '单选（垂直）', icon: 'close-circle-o' },
					{ name: '复选（水平）', icon: 'check-square'},
					{ name: '复选（垂直）', icon: 'check-square-o' },
				]
			},
			{
				name: '树组件',
				icon: 'share-alt',
				children: [
					{ name: '树组件一' },
					{ name: '树组件二' },
					{ name: '树组件三' },
				]
			},
			{
				name: '表格组件',
				icon: 'file-excel',
				children: [
					{ name: '智能表格' },
					{ name: '普通表格' },
				]
			},
			{
				name: '容器组件',
				icon: 'appstore',
				children: [
					{ name: '选项卡' },
					{ name: '折叠' },
					{ name: '框架' },
				]
			},
		];

		let siderMenus = siderMenuArray.map((subMenu, index) => {
			let menuItems = subMenu.children.map((menuItem, idx) => {
				return (
					<Menu.Item 
						key={`submenu-${idx}`}
						>
						<Icon type={menuItem.icon} />
						{menuItem.name}
					</Menu.Item>
				)
			});

			return (
				<SubMenu
	              key={`menu-${index}`}
	              title={<span><Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span></span>}
	            >
	              {menuItems}
	            </SubMenu>
			)
		});

		return (
			<Menu 
				onClick={handleMenuClick}
				theme="dark" 
				mode={"inline"}>
	            {siderMenus}
	        </Menu>
		)
	}
}