import {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import Immutable from 'immutable';
import {
	Layout,
	Menu,
	Icon,
	Row,
	Col,
	Button,
	Modal,
	DatePicker,
	TreeSelect,
	Select,
	Table,
	Tabs,
	Transfer,
} from 'antd';

let { RangePicker } = DatePicker;
let { TreeNode } = TreeSelect;
let { Option } = Select;
let { TabPane } = Tabs;

const {
	Header,
	Sider,
	Content,
	Footer,
} = Layout;

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `基础资料${i + 1}`,
    description: `基础资料${i + 1}描述详情`,
    disabled: i % 3 < 1,
  });
}

const targetKeys = mockData
        .filter(item => +item.key % 3 > 1)
        .map(item => item.key);

import { SketchPicker } from 'react-color';

import IntelliDatePicker from '../Forms/InteliDatePicker.js';
import InteliCollapse from '../Layout/InteliCollapse.js';
import SmartTable from '../Forms/SmartTable.js';
import Draggable from 'react-draggable';
import IFTextInput from '../Forms/IFTextInput.js';
import _ from 'lodash';
import { Resizable, ResizableBox } from 'react-resizable';

import indexStyle from './index.scss';

const {
	is
} = Immutable;

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];

const componentMap = {
	'email': () => {
		return (<IFTextInput />)
	},
	'date': () => {
		return (<DatePicker size="default" />)
	},
	'table': () => {
		return (
			<Table dataSource={dataSource} columns={columns} />
		)
	},
	'treeSet': () => {
		return (
			<TreeSelect
		        showSearch
		        style={{ width: 280 }}
		        value={null}
		        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
		        placeholder="Please select"
		        allowClear
		        treeDefaultExpandAll
		      >
		        <TreeNode value="parent 1" title="parent 1" key="0-1">
		          <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
		            <TreeNode value="leaf1" title="my leaf" key="random" />
		            <TreeNode value="leaf2" title="your leaf" key="random1" />
		          </TreeNode>
		          <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
		            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
		          </TreeNode>
		        </TreeNode>
		      </TreeSelect>
		)
	},
	'select': () => {
		return (
			<Select
		    showSearch
		    style={{ width: 200 }}
		    placeholder="Select a person"
		    optionFilterProp="children"
		    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
		  >
		    <Option value="jack">Jack</Option>
		    <Option value="lucy">Lucy</Option>
		    <Option value="tom">Tom</Option>
		  </Select>
		)
	},
	'rangePicker': () => {
		return (<RangePicker />)
	}
};

const componentMenus =[
	{type: 'email', label: 'Email'},
	{type: 'treeSet', label: 'TreeSet'},
	{type: 'date', label: 'DatePicker'},
	{type: 'rangePicker', label: 'RangePicker'},
	{type: 'select', label: 'Select'},
	{type: 'table', label: 'SmartTable'},
];

const idTypeMap = {};

class Drag extends Component {

	static getInitialProps() {
		return Immutable.fromJS({
			collapsed: '',
			components: [],
			shown: false,
		});
	}

	handleCompClick() {
		this.props.dispatch({
			type: 'SHOW',
		});
	}

	handleDrag(e: MouseEvent, data: Object) {}

	handleStart(e: MouseEvent, data: Object) {}

	handleStop(uuid, e: MouseEvent, data: Object) {
		const { x, y } = data;
		const el = this.refs['device'];

		let handleCompClick = () => { this.handleCompClick(); };
		
		e.preventDefault();
		e.stopPropagation();

		this.props.dispatch({
			type: 'UPDATE_POS',
			payload: {
				id: uuid,
				comp: (
					<Draggable
				        axis="both"
				        handle=".drag-comp"
				        defaultPosition={{x: 0, y: 0}}
				        position={{x: x, y: y}}
				        grid={[10, 10]}
				        offsetParent={el}
				        defaultClassNameDragging="dragging"
				        onStart={this.handleStart.bind(this)}
				        onDrag={this.handleDrag.bind(this)}
				        onStop={this.handleStop.bind(this, uuid)}
				        key={uuid}
				        bounds={{left: 0, top: 0, right: 750, bottom: 480}}
				        >
				        <div className="drag-comp" onDoubleClick={handleCompClick}>
				        	{componentMap[idTypeMap[uuid]]()}
				        </div>
				    </Draggable>
				)
			},
		});
	}

	genComponent( componentType ) {
		const el = this.refs['device'];
		const uuid = _.uniqueId();

		idTypeMap[uuid] = componentType;
	
		let handleCompClick = () => { this.handleCompClick(); };

		this.props.dispatch({
			type: 'APPEND',
			payload: {
				id: uuid,
				type: componentType,
				comp: (
					<Draggable
				        axis="both"
				        handle=".drag-comp"
				        defaultPosition={{x: 0, y: 0}}
				        position={{x: 0, y: 0}}
				        grid={[10, 10]}
				        offsetParent={el}
				        defaultClassNameDragging="dragging"
				        onStart={this.handleStart.bind(this)}
				        onDrag={this.handleDrag.bind(this)}
				        onStop={this.handleStop.bind(this, uuid)}
				        key={uuid}
				        bounds={{left: 0, top: 0, right: 750, bottom: 480}}
				        >
				        <div className="drag-comp" onDoubleClick={handleCompClick}>
				        	{componentMap[componentType]()}
				        </div>
				    </Draggable>
				)
			}
		})
	}

	switchDevice() {
		const devicePanel = this.refs['device'];

		devicePanel.className = 'device ip6';

		console.log('devicePanel', devicePanel);
	}

	handleModal() {
		this.props.dispatch({
			type: 'SHOW'
		});
	}

	render() {
		let {
			shown,
			dispatch,
		} = this.props;
		
		let a = [
			{name: 'a', label: 'btn1', clazz: 'a'},
			{name: 'a', label: 'btn2'},
			{name: 'a', label: 'btn3'},
			{name: 'a', label: 'btn4'},
		];
	
		let btns = a.map(function(item, index) {
			return (
				<button ref={item.name} className={item.clazz} key={index}>
					{item.label}
				</button>
			)
		});

		let components = () => {
			return this.props.components.map(function(item, index) {
				return item.comp;
			});
		};

		let handleOk = () => {
			dispatch({
				type: 'SHOW',
			});
		};
		let handleCancel = () => {
			dispatch({
				type: 'HIDE',
			});
		};

		let that = this;

		let menuList = componentMenus.map((item, index) => {
			return (
				<li key={index} onClick={that.genComponent.bind(that, `${item.type}`)}>
					{item.label}
				</li>
			)
		});

		return (
			<div className="drag-container">
			    <style dangerouslySetInnerHTML={{ __html: indexStyle}} />
			    <div className="toolbar">
			    	<span>工具栏</span>
			    	<Button 
			    		type="primary"
			    		onClick={this.switchDevice.bind(this)}
			    	>
			    		Switch Device
			    	</Button>
					
					<Button 
			    		type="primary"
			    		onClick={this.handleModal.bind(this)}
			    	>
			    		Handle Modal
			    	</Button>
					

			    	<Modal title="Config Modal" visible={shown}
			    	  width="750"
			          onOk={handleOk} onCancel={handleCancel}
			        >
			          <Tabs onChange={null} type="card">
					    <TabPane tab="基本设置" key="1">
							<Row gutter={16}>
							  <Col span={12}>
							  	<SketchPicker />
							  </Col>
							</Row>
							
					    </TabPane>
					    <TabPane tab="基础资料" key="2">
							<Transfer
						        dataSource={mockData}
						        titles={['Source', 'Target']}
						        targetKeys={[]}
						        selectedKeys={[]}
						        render={item => item.title}
						      />

					    </TabPane>
					    <TabPane tab="样式设置" key="3"></TabPane>
					    <TabPane tab="动作设置" key="4"></TabPane>
					    <TabPane tab="关联设置" key="5"></TabPane>
					    <TabPane tab="规则设置" key="6"></TabPane>
					    <TabPane tab="过滤方案" key="7"></TabPane>
					    <TabPane tab="下推方案" key="8"></TabPane>
					  </Tabs>
			        </Modal>
			    </div>
				<div className="tools">
				<h2>组件库</h2>
				<div>
					<ul className="comp-list">
						{menuList}
				    </ul>
				    </div>
			    </div>
			    <div ref="device" id="device" className="device">
					{components()}
			    </div>
			    <div className="property-panel">
					属性窗口p[[]]
			    </div>
			    <footer>
			    	<h2>状态栏</h2>
			    </footer>
			</div>
		);
	}
}


const mapStateToProps = ($$state, ownProps) => {
	return $$state.get('dragReducer').toJS();
}

export default connect(mapStateToProps)(Drag);