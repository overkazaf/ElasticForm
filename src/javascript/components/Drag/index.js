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

		const el = document.getElementById('device');

		console.log('arguments', arguments);

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
				        bounds={{top: 0, left: 0, right: 660, bottom: 500}}
				        offsetParent={el}
				        zIndex={100}
				        onStart={this.handleStart.bind(this)}
				        onDrag={this.handleDrag.bind(this)}
				        onStop={this.handleStop.bind(this, uuid)}
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
		const el = document.getElementById('device');
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
				        bounds={{top: 0, left: 0, right: 660, bottom: 500}}
				        offsetParent={el}
				        zIndex={100}
				        onStart={this.handleStart.bind(this)}
				        onDrag={this.handleDrag.bind(this)}
				        onStop={this.handleStop.bind(this, uuid)}
				        >
				        <div className="drag-comp">
				        	<IFTextInput />
				        </div>
				    </Draggable>
				)
			}
		})
	}

	render() {
		let handleClick = () => {
			this.genComponent();
		};
	
		let components = () => {
			return this.props.components.map(function(item, index) {
				let key = `item-${index}`;
				return item.comp;
			});
		};

		return (
			<div className="drag-container">
			    <style dangerouslySetInnerHTML={{ __html: indexStyle}} />
			    <div className="toolbar">
			    	<h2>工具栏</h2>
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
			    <div id="device" className="device">
					{components()}
			    </div>
			    <footer>
			    	<h2>状态栏</h2>
			    </footer>
			</div>
		);
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps', nextProps);
	}
}


const mapStateToProps = ($$state, ownProps) => {
	return $$state.get('dragReducer').toJS();
}

export default connect(mapStateToProps)(Drag);