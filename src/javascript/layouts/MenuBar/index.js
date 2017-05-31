import { Component } from 'react';
import {
	Menu,
	Dropdown,
	Icon,
	Button,
} from 'antd';

let SubMenu = Menu.SubMenu;

import menuStyle from './index.scss';
import { connect } from 'react-redux';

const menuArray = [
	{
		name: '文件(Files)', 
		key: 'files', 
		children: [
			{
				name: '打开',
				key: 'open',
				children: [
					{
						name: '最近打开',
						key: 'recently_opened',
					}
				]
			},
			{
				name: '新建',
				key: 'new',
				children: [
					{name: '数据源', key: 'data_source'},
					{name: '自定义表单', key: 'custom_form'},
				]
			},
			{name: '保存', key: 'save'},
			{name: '另存为', key: 'save_as'},
			{name: '导入', key: 'import'},
			{name: '导出', key: 'export'},
			{name: 'divider'},
			{name: '退出', key: 'exit'}
		],
	},
	{
		name: '编辑(Edit)',
		key: 'edit',
		children: [
			{name: '复制', key: 'copy'},
			{name: '粘贴', key: 'paste'},
			{name: '撤销', key: 'undo'},
			{name: '重做', key: 'redo'},
		]
	},
	{
		name: '预览(Preview)',
		key: 'preview',
		children: [
			{name: '查看模式', key: 'view_mode'},
			{name: '添加模式', key: 'add_mode'},
			{name: '编辑模式', key: 'edit_mode'},
		],
	},
	{
		name: '发布(Publish)',
		key: 'publish',
		children: [
			{
				name: 'OSS',
				key: 'OSS',
				children: [
					{name: 'Bucket1', key: 'bucket1'},
					{name: 'Bucket2', key: 'bucket2'},
					{name: 'Bucket3', key: 'bucket3'},
				]
			},
			{
				name: '应用服务器',
				key: 'app_server',
				children: [
					{name: '192.168.1.1（测试1）', key: 'test_server_1'},
					{name: '192.168.1.2（测试2）', key: 'test_server_2'},
					{name: 'divider'},
					{name: '添加服务器', key: 'add_server'},
				]
			},
		], 
	},
	{
		name: '部署(Deploy)',
		key: 'deploy',
		children: [
			{
				name: '查看',
				key: 'view',
				children: [
					{name: '目标环境一', key: 'target_env_1'},
					{name: '目标环境二', key: 'target_env_2'}
				]
			},
			{
				name: '操作',
				key: 'operations',
				children: [
					{name: '在浏览器新选项卡打开', key: 'open_in_new_tab'},
					{name: '复制链接', key: 'copy_link_address'},
				]
			},
		], 
	},
	{	
		name: '帮助(Help)',
		key: 'help',
		children: [
			{name: '使用手册', key: 'manual'},
			{name: '版本信息', key: 'version_info'},
			{name: '在线更新', key: 'update_online'},
			{name: 'divider'},
			{name: '关于我们', key: 'about_us'},
		],
	},
];

class MenuBar extends Component {
	constructor(props) {
	  super(props);
	
	}

	handleMenuClick({ key, item, keyPath, domEvent }) {
		this.props.dispatch({
			type: 'MENUBAR_COMMAND',
			payload: {
				key, 
				item, 
				keyPath, 
				domEvent,
			},
		});
	}

	render() {
		let that = this;

		// FIXME:
		// change this function to a DFS create fn
		let dropdownContent = menuArray.map((item, index) => {
			// 顶层菜单
			const menu = (
				<Menu onClick={that.handleMenuClick.bind(that)}>
					{
						item.children && item.children.map((topMenu, topIndex) => {

							if (topMenu.children && topMenu.children.length) {
								return (
									<SubMenu key={`${item.key}-${topIndex}`} title={topMenu.name}>
										{
											topMenu.children.map((subMenu, subIndex) => {
												let menuContent = subMenu.name === 'divider' ?
														<Menu.Divider />:
														<Menu.Item key={`${subMenu.key}`}>
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
										<Menu.Item key={`${topMenu.key}`}>
											<a rel="noopener noreferrer" href="#">{topMenu.name}</a>
										</Menu.Item>

								return menuContent;
							}
						})
					}
				  </Menu>
			)

			return (
				<Dropdown 
					key={`menu-${index}`} 
					overlay={menu} 
					style={{ width: '140px', marginLeft: '20px'}}>
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

const mapStateToProps = (store, ...args) => {
	console.log('...args in MenuBar reducer');
	return store.get('menubarReducer').toJS();
}

export default connect(mapStateToProps)(MenuBar);