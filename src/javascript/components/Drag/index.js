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
	Form,
} from 'antd';

const FormItem = Form.Item;
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

import indexStyle from './index.scss';

const {
	is
} = Immutable;


class Drag extends Component {

	static getInitialProps() {
		return Immutable.fromJS({
			collapsed: false,
		});
	}

	eventLogger = (e: MouseEvent, data: Object) => {};

	handleDrag(e: MouseEvent, data: Object) {}

	handleStart(e: MouseEvent, data: Object) {}

	handleStop(e: MouseEvent, data: Object) {
		console.log(e, data);

		let newPosition = {
			x: data.x,
			y: data.y,
		};

		this.props.dispatch({
			type: 'COLLAPSED',
			payload: {
				x: data.x,
				y: data.y,
			}
		})

		console.log('newPosition', newPosition);
	}

	genComponent({x, y}) {
		let styleObj = {
			position: 'absolute',
			left: `${x - 310}px`,
			top: `${y}px`,
			border: '1px soild #ddd'
		};

		let formItemLayout = {
	      labelCol: { span: 6 },
	      wrapperCol: { span: 14 },
	    };
	    let { getFieldDecorator } = this.props.form;
		return (
			<FormItem
	          {...formItemLayout}
	          label="E-mail"
	          hasFeedback
	        >
	          {getFieldDecorator('email', {
	            rules: [{
	              type: 'email', message: 'The input is not valid E-mail!',
	            }, {
	              required: true, message: 'Please input your E-mail!',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
		)
	}

	render() {

		let components = this.genComponent(this.props.collapsed);

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
						<li>
							<Draggable
						        axis="both"
						        handle=".drag-comp"
						        defaultPosition={{x: 0, y: 0}}
						        position={{x: 0, y: 0}}
						        grid={[10, 10]}
						        zIndex={100}
						        onStart={this.handleStart.bind(this)}
						        onDrag={this.handleDrag.bind(this)}
						        onStop={this.handleStop.bind(this)}>
						        <div className="drag-comp">
						          <label>Text</label>
						        </div>
						    </Draggable>
					    </li>
					    <li>
							<Draggable
						        axis="both"
						        handle=".drag-comp"
						        defaultPosition={{x: 0, y: 0}}
						        position={{x: 0, y: 0}}
						        grid={[10, 10]}
						        zIndex={100}
						        onStart={this.handleStart.bind(this)}
						        onDrag={this.handleDrag.bind(this)}
						        onStop={this.handleStop.bind(this)}>
						        <div className="drag-comp">
						          <label>Number</label>
						        </div>
						    </Draggable>
					    </li>
				    </ul>
				    </div>
			    </div>
			    <div className="device">
					{components}
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