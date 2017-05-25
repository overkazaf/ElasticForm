import { Component } from 'react';
import { connect } from 'react-redux';
import {
	Input,
	Icon,
	Table,
	Tree,
	Tabs,
} from 'antd';

import Draggable from 'react-draggable';
import _ from 'lodash';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;
const TabPane = Tabs.TabPane;

import indexStyle from './index.scss';


function buildItem({
	key, value, type = 'text',
}) {
	let target = {
		key: _.uniqueId('property_'),
		name: key,
		value: value,
	};

	console.log('target', target);
	return target;
}

function buildDataSource(model) {
	if(!model) return [buildItem({
		key: '组件信息', 
		value: '暂无',
	})];

	let {
		basicProps: {
			// componentTheme: {
			// 	backgroundColor,
			// 	fontColor,
			// 	size,
			// 	theme,
			// 	layoutStyle,
			// },	
			// formStatus: {
			// 	locked,
			// 	visibility,
			// 	mustInput,
			// 	autoSum,
			// }, 
		},
		dataSource,
		eventList,
		validations,
		filterRules
	} = model;

	let dataSourceArray = [];
	
	dataSourceArray.push(buildItem({
		key: '组件ID', 
		value: model.id,
	}));
	dataSourceArray.push(buildItem({
		key: '组件名', 
		value: model.name,
	}));

	dataSourceArray.push(buildItem({
		key: '组件标签', 
		value: model.label,
	}));

	dataSourceArray.push(buildItem({
		key: '描述', 
		value: '暂无描述',
	}));

	dataSourceArray.push(buildItem({
		key: '背景色', 
		value: '#666',
	}));

	return dataSourceArray;
}

class DraggableSiderTools extends Component {

	buildPropertyPanelTable(model) {
		let dataSource = Object.keys(model).length ? buildDataSource(model) : [];

		const columns = [{
		  title: '属性',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '值',
		  dataIndex: 'value',
		  key: 'value',
		}];

		return {
			dataSource,
			columns,
		};
	}

	render() {
		
		let {
			model,
		} = this.props;

		let {
			dataSource,
			columns,
		} = this.buildPropertyPanelTable(model);

		let tableContainerStyleObj = {
		  padding: '5px', 
		  background: '#f6f6f6', 
		  width: '100%',
		};

		return(
			<Draggable handle=".sider-tool-handler">
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
						          columns={columns} 
						        />
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

const mapStateToProps = (store) => {
	return store.get('toolboxReducer').toJS();
};

export default connect(mapStateToProps)(DraggableSiderTools);