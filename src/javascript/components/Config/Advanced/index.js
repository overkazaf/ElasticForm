import { Component } from 'react';
import {
	Collapse,
	Row,
	Popover,
	Icon,
	Col,
	Button,
	Form,
	Select,
	Tag,
	Input,
} from 'antd';

import _ from 'lodash';
import Util from '../../../utils/Util.js';
import IFEventTransfer from './IFEventTransfer.js';
import ApplyConfigButton from '../ApplyConfigButton.js';

const FormItem = Form.Item;
const Panel = Collapse.Panel;
const Option = Select.Option;


const children = [];
for (let i = 10; i < 16; i++) {
  children.push(<Option key={i.toString(16) + i}>组件{i}</Option>);
}

const getEventPopoverContent = () => {
  return (
    <div>
      <b>事件表达式说明：</b>
      <ul>
        <li>以 <Tag color='#df2311'>_$组件id</Tag>代替组件值, 如<Tag color='green'>_$comp1</Tag></li>
        <li>程序会对表达式进行合法性校验</li>
      </ul>
      <hr />
      <div>
        样例： _$comp1 * _$comp2
      </div>
    </div>
  );
};

let getActionTypes = () => {
  let types = [];
  let actionDict = {
    'SHOW_ELEM': '显示元素',
    'HIDE_ELEM': '隐藏元素',
    'MATH_CALC': '数学运算',
    'BRING_DATA_SOURCE': '携带数据源',
    'UPDATE_VALUE': '更新值',
    'LOCK_ELEM': '锁定元素',
    'UNLOCK_ELEM': '解锁元素',
    'VALIDATE_FORM': '校验表单',
    'SUBMIT_FORM': '提交表单',
    'JUMP_TO_LINK': '跳转链接',
    'DAIL': '拨打电话',
    'SEND_EMAIL': '发送邮件',
    'ALERT': '警告信息',
    'NOTIFICATION': '通知信息',
    'MESSAGE': '提醒消息',
  };
  
  Object.keys(actionDict).map((key, index) => {
    types.push(<Option key={`ACTION:${key}`}>{actionDict[key]}</Option>);
  });

  return types;
}

/**
 * [ActionModel 动作模型实体]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2017-05-23T16:32:15+0800
 * @param    {Object}                     options [可选参数]
 */
function ActionModel(options = {}) {
	return Object.assign({
		type: '',
		expr: '',
		target: [],
	}, options);
}



/**
 * [EventMapping 事件映射的数据结构]
 * @type {Object}
 */
const EventMapping = {
	onLoad: {
        key: 'onLoad',
        title: `onLoad`,
        description: `加载`,
        chosen: false
    },
    onClick: {
        key: 'onClick',
        title: `onClick`,
        description: `点击`,
        chosen: false
    },
    onFocus: {
        key: 'onFocus',
        title: `onFocus`,
        description: `获得焦点`,
        chosen: false
    },
    onBlur: {
        key: 'onBlur',
        title: `onBlur`,
        description: `失去焦点`,
        chosen: false
    },
    onChange: {
        key: 'onChange',
        title: `onChange`,
        description: `值更新`,
        chosen: false
    },
    onInput: {
        key: 'onInput',
        title: `onInput`,
        description: `正在输入`,
        chosen: false
    },
    onSubmit: {
        key: 'onSubmit',
        title: `onSubmit`,
        description: `表单提交`,
        chosen: false
    },
    onDoubleClick: {
        key: 'onDoubleClick',
        title: `onDoubleClick`,
        description: `双击`,
        chosen: false
    },
    onKeyPress: {
        key: 'onKeyPress',
        title: `onKeyPress`,
        description: `按键下压`,
        chosen: false
    },
    onKeyUp: {
        key: 'onKeyUp',
        title: `onKeyUp`,
        description: `按键抬起`,
        chosen: false
    },
    onKeyDown: {
        key: 'onKeyDown',
        title: `onKeyDown`,
        description: `按键按下`,
        chosen: false
    },
    onMouseUp: {
        key: 'onMouseUp',
        title: `onMouseUp`,
        description: `鼠标抬起`,
        chosen: false
    },
    onMouseDown: {
        key: 'onMouseDown',
        title: `onMouseDown`,
        description: `鼠标按下`,
        chosen: false
    }
};

function eventListToMap(list) {
	let map = {};
	list.map((evtItem) => {
		let {
			eventType,
			actionList,
		} = evtItem;

		if (!map[eventType]) {
			map[eventType] = [];
		}

		actionList.map((action) => {
			map[eventType].push(action);
		});
	});

	return map;
}

export default
class Advanced extends Component {
	constructor(props) {
		super(props);

		this.state = {
			components: props.components,
			selectedEventList: [],
			eventMap: {
			},
		};
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps in Advanced', nextProps);
		let { 
			components,
			eventList,
		} = nextProps;

		let eventMap = eventListToMap(eventList);
		let selectedEventList = eventList.map((evtItem) => {
			let {
				eventType,
			} = evtItem;
			return _.merge(EventMapping[eventType], {
				chosen: true,
			});
		});

		console.log('eventMap', eventMap);
		console.log('selectedEventList', selectedEventList);

		this.setState({
			components,
			eventMap,
			selectedEventList,
		}, () => {
			console.log('this.state', this.state);
		});
	}

	handleTransferSelect(selectedEventList) {
		let eventMap = {};
		selectedEventList.map((eventItem) => {
			eventMap[eventItem.key] = [
				new ActionModel()
			];
		});

		this.setState({
			selectedEventList,
			eventMap,
		});
	}

	addActionToEvent(eventKey) {
		let {
			eventMap,
		} = this.state;
		
		let actionList = eventMap[eventKey];	
		actionList.push({
			type: '',
			expr: '',
			target: [],
		});
		let newEventMap = Object.assign(eventMap, {
			[eventKey]: actionList,
		});
		this.setState({
			eventMap: newEventMap,
		});
	}

	removeEventAction(eventKey, actionIndex) {
		let { eventMap } = this.state;
		let newEventMap = Object.assign({}, eventMap);
		
		if (newEventMap[eventKey].length === 1) {
			return;
		}
			
		newEventMap[eventKey].splice(actionIndex, 1);
		
		this.setState({
			eventMap: newEventMap,
		});
	}

	updateEventActionModel(eventKey, actionIndex, obj = {}) {

		let updateFn = () => {
			let {
				eventMap,
			} = this.state;

			let newEventMap = Object.assign({}, eventMap);
			let targetActionEl = newEventMap[eventKey].filter((item, index) => {
				return index === actionIndex;
			})[0];

			targetActionEl = Util.overrideObj(targetActionEl, obj);
			console.log('targetActionEl inside updateEventActionModel', targetActionEl);
			
			this.setState({
				eventMap: newEventMap,
			}, () => {
				// console.log(+(new Date()) + 'event action model updated', newEventMap);

				// this.props.dispatch({
				// 	type: 'UPDATE_ADVANCED_CONFIG',
				// 	payload: {
				// 		eventMap: newEventMap,
				// 	},
				// });
			});
		};

		// _.throttle(updateFn, 100);
		updateFn();
	}

	validateActionTypes(eventKey, actionIndex, actionType) {
		this.updateEventActionModel(eventKey, actionIndex, {
			type: actionType,
		});
	}

	selectTargetElements(eventKey, actionIndex, elems) {
		console.log('updateEventActionModel', eventKey, actionIndex, elems);
		this.updateEventActionModel(eventKey, actionIndex, {
			target: [...elems],
		});
	}

	updateEventExpr(eventKey, actionIndex, { target }) {
		this.updateEventActionModel(eventKey, actionIndex, {
			expr: target.value,
		});
	}

	buildOptionChildren(allComponents) {
		return _.flatten(allComponents, true).map((item, index) => {
			let {
				id,
				name,
			} = item;

			return (
				<Option key={`component-${id}-${index}`}>{name}</Option>
			)
		});
	}

	applyAdvanceConfig() {
		let {
			eventMap,
		} = this.state;

		this.props.dispatch({
			type: 'UPDATE_ADVANCED_CONFIG',
			payload: {
				eventMap,
			},
		});
	}

	render() {
		let that = this;
		let { 
			selectedEventList,
			eventMap,
			components,
		} = this.state;

		let handleTransferSelect = (selected) => {
			this.handleTransferSelect(selected);
		};

		let allComponents = _.flatten(Object.keys(components).map((key) => {
			return components[key].map((item, index) => {
				return item.component.props;
			}); 
		}), true);

		let optionChildren = this.buildOptionChildren(allComponents);

		let actionContent = () => {
			return selectedEventList.map((evtItem, index) => {
				let {
					key, 
					title,
					description,
				} = evtItem;

				let addAction = () => {
					that.addActionToEvent(key);
				};

				let removeCurrent = (index) => {
					that.removeEventAction(key, index);
				};
							
				let actionListContent = eventMap[key].map((item, index) =>{
					let ctrlFlag = eventMap[key].length === index + 1;
					console.log('actionItem', item);
					let {
						type,
						expr,
						target,
					} = item;

					return (
						<Row key={`action-list-item-${index}`}>
							<Col span={3}>
				            　<FormItem label="动作类型">
				                <Select
				                  mode="select"
				                  size={'large'}
				                  value={type}
				                  onChange={that.validateActionTypes.bind(that, key, index)}
				                  placeholder="请选择动作类型"
				                  defaultValue={[]}
				                  style={{ width: '100%' }}
				                >
				                  {getActionTypes().filter((item) => {
				                  	return true;
									//return !(item.key in selectedActionKeys);
				                  })}
				                </Select>
				              </FormItem>
				            </Col>
				            <Col span={5} offset={1}>
				            　<FormItem label="事件表达式">
				                <Input 
				                	value={expr || ''}
				                	onChange={that.updateEventExpr.bind(that, key, index)} 
				                	placeholder="表达式" 
				                />
				              </FormItem>
				            </Col>

				            <Col span={6} offset={1}>
				           　　<FormItem label="目标元素">  
				                <Select
				                  mode="tags"
				                  defaultValue={target||[]}
								  style={{ width: '100%' }}
								  onChange={that.selectTargetElements.bind(that, key, index)}
				                >
				                  {optionChildren}
				                </Select>
				              </FormItem>
				            </Col>
				            {
				            	ctrlFlag ? 
				            	<Col span={6} offset={1}>
					            　<FormItem label="操作">  
							            <Button disabled={eventMap[key].length === 1} onClick={removeCurrent.bind(null, index)} size="small" type="danger" style={{ marginRight: '10px'}}>
											<Icon type="minus-circle-o" /> Remove
							            </Button>
							            <Button disabled={eventMap[key].length >= 5} onClick={addAction} size="small" type="primary">
											<Icon type="plus-circle-o" /> Add
							            </Button>
					              </FormItem>
					            </Col> :
					            null
				            }
			            </Row>
					)
				});

				return (
					<div key={`row-${index}`}>
						<div>
			              <b>{key} -- ({description})</b>
			            </div>
			            {actionListContent}
					</div>
				)
			});
		};

		return (
			<div>
				<Collapse defaultActiveKey={['1', '2']}>
		          <Panel header="事件设置" key="1">
		            <IFEventTransfer 
		                eventData={Object.keys(EventMapping).map((eventKey) => {
							return EventMapping[eventKey];
		                })}
		                selectedEventList={selectedEventList}
		            	onSelect={handleTransferSelect} 
		            />
		          </Panel>
		          <Panel header="动作设置" key="2">
		            {actionContent()}       
		          </Panel>
		        </Collapse>
		        <ApplyConfigButton onApply={this.applyAdvanceConfig.bind(this)} title="应用高级设置"/>
			</div>
		)
	}
}
