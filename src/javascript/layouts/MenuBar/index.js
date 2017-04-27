import { Component } from 'react';
import {
	Menu,
	Dropdown,
	Icon,
	Button,
} from 'antd';

let SubMenu = Menu.SubMenu;

import menuStyle from './index.scss';

const menuArray = [
	{
		name: '文件(Files)', 
		children: [
			{
				name: '打开',
				children: [
					{
						name: '最近打开',
					}
				]
			},
			{
				name: '新建',
				children: [
					{name: '数据源'},
					{name: '自定义表单'},
				]
			},
			{name: '保存'},
			{name: '另存为'},
			{name: 'divider'},
			{name: '退出'}
		],
	},
	{
		name: '编辑(Edit)',
		children: [
			{name: '复制'},
			{name: '粘贴'},
			{name: '撤销'},
			{name: '重做'},
		]
	},
	{
		name: '预览(Preview)',
		children: [
			{name: '查看模式'},
			{name: '添加模式'},
			{name: '编辑模式'},
		],
	},
	{
		name: '发布(Publish)',
		children: [
			{
				name: 'OSS',
				children: [
					{name: 'Bucket1'},
					{name: 'Bucket2'},
					{name: 'Bucket3'},
				]
			},
			{
				name: '应用服务器',
				children: [
					{name: '192.168.1.1（测试1）'},
					{name: '192.168.1.2（测试2）'},
					{name: 'divider'},
					{name: '添加服务器'},
				]
			},
		], 
	},
	{
		name: '部署(Deploy)',
		children: [
			{
				name: '查看',
				children: [
					{name: '目标环境一'},
					{name: '目标环境二'}
				]
			},
			{
				name: '操作',
				children: [
					{name: '在浏览器新选项卡打开'},
					{name: '复制链接'},
				]
			},
		], 
	},
	{	
		name: '帮助(Help)',
		children: [
			{name: '使用手册'},
			{name: '版本信息'},
			{name: '在线更新'},
			{name: 'divider'},
			{name: '关于我们'},
		],
	},
];

export default 
class MenuBar extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		// FIXME:
		// change this function to a DFS create fn
		let dropdownContent = menuArray.map((item, index) => {
			const menu = (
				<Menu>
					{
						item.children && item.children.map((topMenu, topIndex) => {

							if (topMenu.children && topMenu.children.length) {
								return (
									<SubMenu title={topMenu.name}>
										{
											topMenu.children.map((subMenu, subIndex) => {
												let menuContent = subMenu.name === 'divider' ?
														<Menu.Divider />:
														<Menu.Item key={`sub-${subIndex}`}>
															{subMenu.name}
														</Menu.Item>;
												
												return menuContent;
											})
										}
								    </SubMenu>
								)
							} else {
								let menuContent = topMenu.name === 'divider' ?
										<Menu.Divider />:
										<Menu.Item key={`top-${topIndex}`}>
											<a rel="noopener noreferrer" href="#">{topMenu.name}</a>
										</Menu.Item>

								return menuContent;
							}
						})
					}
				  </Menu>
			)

			return (
				<Dropdown key={`menu-${index}`} overlay={menu} style={{ width: '140px', marginLeft: '20px'}}>
				    <a href="#">
				      {item.name} <Icon type="down" />
				    </a>
				</Dropdown>
			)
		});

		return (
			<div className="m-menubar">
				<style dangerouslySetInnerHTML={{ __html: menuStyle}} />
				{dropdownContent}
			</div>
		)
	}
}