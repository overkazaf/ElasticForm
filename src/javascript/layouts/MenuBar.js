import { Component } from 'react';
import {
	Menu,
	Dropdown,
	Icon,
	Button,
} from 'antd';

let SubMenu = Menu.SubMenu;

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
					{
						name: '数据源',
					},
					{
						name: '自定义表单',
					},
				]
			},
			{
				name: '保存',
			},
			{
				name: '另存为',
			},
			{
				name: '退出',
			}
		],
	},
	{
		name: '编辑(Edit)',
		children: [],
	},
	{
		name: '预览(Preview)',
		children: [],
	},
	{
		name: '发布(Publish)',
		children: [], 
	},
	{	
		name: '帮助(Help)',
		children: [],
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
												return (
													<Menu.Item key={`sub-${subIndex}`}>
														{subMenu.name}
													</Menu.Item>
												)
											})
										}
								    </SubMenu>
								)
							} else {
								return (
									<Menu.Item key={`top-${topIndex}`}>
								      <a rel="noopener noreferrer" href="#">{topMenu.name}</a>
								    </Menu.Item>
								)
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
				{dropdownContent}
			</div>
		)
	}
}