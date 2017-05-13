import { Component } from 'react';

import {
	Input,
	Icon,
	Table,
	Tree,
	Tabs,
} from 'antd';

import Draggable from 'react-draggable';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

import indexStyle from './index.scss';

export default
class DraggableSiderTools extends Component {

	constructor(props) {
		super(props);
		
	}


	render() {
		const dataSource = [{
		  key: '1',
		  name: '表ID',
		  value: 'IntelliForm-0001',
		},
		{
		  key: '2',
		  name: '标题',
		  value: '测试表一',
		},
		{
		  key: '3',
		  name: '表单描述',
		  value: '这一是个测试用表'
		},
		{
		  key: '4',
		  name: '数据源',
		  value: 'NIL',
		},
		{
		  key: '5',
		  name: '事件列表',
		  value: 'EVENT_LIST:xxxyyy',
		},
		{
		  key: '6',
		  name: '规则列表',
		  value: 'EVENT_LIST:xxxyyy',
		},
		{
		  key: '7',
		  name: '下推方案',
		  value: 'EVENT_LIST:xxxyyy',
		},
		];

		const columns = [{
		  title: '属性',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '值',
		  dataIndex: 'value',
		  key: 'value',
		}];

		let tableContainerStyleObj = {
      padding: '5px', 
      background: '#f6f6f6', 
      width: '100%',
    };

		return(
			<Draggable
        handle=".sider-tool-handler"
        >
        <div>
	        <style dangerouslySetInnerHTML={{ __html: indexStyle}} />
					<div className="sider-right">
		        <div className="sider-tool-handler">
		          <span>系统配置</span>
		          <div className="sider-tool-ctrl">
		            <span><Icon type="minus-square-o" /></span>
		            <span><Icon type="plus-square-o" /></span>
		            <span><Icon type="close-circle" /></span>
		          </div>
		        </div>
		        <div className="sider-tool-content">
		          
		          <Search
		            placeholder="input search text"
		            style={{ width: '200px' }}
		            onSearch={value => console.log(value)}
		          />

		          <Tree
		            showLine
		            defaultExpandedKeys={['0-0-0']}
		            onSelect={this.onSelect}
		          >
		            <TreeNode title="根目录" key="0-0">
		              <TreeNode title="二级目录-1" key="0-0-0">
		                <TreeNode title="表单一" key="0-0-0-0" />
		                <TreeNode title="表单二" key="0-0-0-1" />
		                <TreeNode title="表单三" key="0-0-0-2" />
		              </TreeNode>
		              <TreeNode title="二级目录-2" key="0-0-1">
		                <TreeNode title="数据源一" key="0-0-1-0" />
		                <TreeNode title="数据源二" key="0-0-1-１" />
		              </TreeNode>
		              <TreeNode title="未分类表单-1" key="0-0-2"></TreeNode>
		              <TreeNode title="未分类表单-2" key="0-0-3"></TreeNode>
		            </TreeNode>
		          </Tree>
							
							<div style={tableContainerStyleObj}>
									<Tabs onChange={null} type="card">
								    <TabPane tab="表单属性" key="1">
											<Table 
						          	size={'small'}
						          	bordered={true}
							          pagination={false}
							          dataSource={dataSource} 
							          columns={columns} />
								    </TabPane>
								    <TabPane tab="版面设置" key="2">Content of Tab Pane 2</TabPane>
								    <TabPane tab="插件设置" key="3">Content of Tab Pane 3</TabPane>
								  </Tabs>
			        </div>
			        </div>
			    	</div>
        </div>
    	</Draggable>
		)
	}
}