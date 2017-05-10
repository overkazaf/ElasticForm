import { Component } from 'react';
import {
	Menu,
	Icon,
} from 'antd';
import _ from 'lodash';

const SubMenu = Menu.SubMenu;

export default
class ComponentSider extends Component {

	handleMenuClick(...args) {
		this.props.handleMenuClick && this.props.handleMenuClick(...args);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// 菜单栏只需要做首次渲染
		return false;
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
					{ name: '文本', key: 'IFInputNormal' },
					{ name: '下拉框', key: 'IFDropdown' },
					{ name: '手机号', key: 'IFInputPhone', icon: 'mobile'},
					{ name: '表单提交按钮', key: 'IFButtonSubmit'},
					{ name: '表单重置按钮', key: 'IFButtonReset'},


					{ name: '数字', key: 'IFInputNumber', icon: 'pay-circle'},
					{ name: '单价', key: 'IFInputPrice', icon: 'pay-circle-o'},
					{ name: '邮箱', key: 'IFInputMail', icon: 'mail' },
					
				]
			},
			{
				name: '日期组件',
				icon: 'calendar',
				children: [
					{ name: '日期选择器', key: 'IFDatePicker' },
					{ name: '范围选择器', key: 'IFRangePicker' },
					{ name: '时间选择器', key: 'IFTimePicker' },
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
					{ name: '智能表格', key: 'IFTableNormal' },
					{ name: '普通表格', key: 'IFSmartTable' },
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
				let key = menuItem.key ? menuItem.key : `submenu-${idx}`;
				return (
					<Menu.Item 
						key={key}
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

		let uuid = _.uniqueId('menu_' + (Math.random()) + '_');

		return (
			<Menu 
			  key={uuid}
				onClick={handleMenuClick}
				theme="dark" 
				mode={"inline"}>
	        {siderMenus}
	    </Menu>
		)
	}
}