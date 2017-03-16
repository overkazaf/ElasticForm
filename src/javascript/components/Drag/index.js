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
} from 'antd';

const {
	Header,
	Sider,
	Content,
	Footer,
} = Layout;


import IntelliDatePicker from '../Forms/InteliDatePicker.js';
import InteliCollapse from '../Layout/InteliCollapse.js';
import SmartTable from '../Forms/SmartTable.js';
import Draggable from 'react-draggable';
import IFTextInput from '../Forms/IFTextInput.js';
import _ from 'lodash';

import indexStyle from './index.scss';

const {
	is
} = Immutable;

class Drag extends Component {

	static getInitialProps() {
		return Immutable.fromJS({
			collapsed: '',
			components: [],
		});
	}

	handleDrag(e: MouseEvent, data: Object) {}

	handleStart(e: MouseEvent, data: Object) {}

	handleStop(uuid, e: MouseEvent, data: Object) {
		const { x, y } = data;
		const el = this.refs['device'];

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
				        <div className="drag-comp">
				        	<IFTextInput />
				        </div>
				    </Draggable>
				)
			},
		});
	}

	genComponent() {
		const el = this.refs['device'];
		const uuid = _.uniqueId();

		this.props.dispatch({
			type: 'APPEND',
			payload: {
				id: uuid,
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
				        <div className="drag-comp">
				        	<IFTextInput />
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

	render() {
		let handleClick = () => {
			this.genComponent();
		};
	
		let components = () => {
			return this.props.components.map(function(item, index) {
				return item.comp;
			});
		};

		return (
			<div className="drag-container">
			    <style dangerouslySetInnerHTML={{ __html: indexStyle}} />
			    <div className="toolbar">
			    	<span>工具栏</span>
			    	<Button 
			    		type="primary"
			    		onClick={this.switchDevice.bind(this)}
			    	>Switch Device</Button>
			    </div>
				<div className="tools">
				<h2>组件库</h2>
				<div>
					<ul className="comp-list">
						<li onClick={handleClick}>
							Email
					    </li>
					    <li onClick={handleClick}>
							Email
					    </li>
					    <li onClick={handleClick}>
							Email
					    </li>
					    <li onClick={handleClick}>
							Email
					    </li>
				    </ul>
				    </div>
			    </div>
			    <div ref="device" id="device" className="device">
					{components()}
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