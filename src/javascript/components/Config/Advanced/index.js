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
    types.push(<Option key={`ACTION-${key}`}>{actionDict[key]}</Option>);
  });

  return types;
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

		handleTransferSelect(selectedEventList) {
			let eventMap = {};
			selectedEventList.map((eventItem) => {
				eventMap[eventItem.key] = [{}];
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
			actionList.push({});
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

		updateEventModel(eventKey, actionIndex, obj) {
			let {
				eventMap,
			} = this.state;

			
		}

		validateActionTypes(eventKey, actionIndex, actionType) {
			console.log('eventKey, actionIndex, actionType', eventKey, actionIndex, actionType);
		}

		changeTargetElements(eventKey, actionIndex, elems) {
			console.log('changeTargetElements', ...elems);
		}

		updateEventExpr(eventKey, actionIndex, { target }) {
			console.log('eventKey, actionIndex, target.value', eventKey, actionIndex, target.value);
		}

		buildOptionChildren(allComponents) {
			let componentArray = _.flatten(allComponents, true);

			return componentArray.map((item, index) => {
				let {
					id,
					name,
				} = item;

				return (
					<Option key={`component-${id}`} value={id}>{name}</Option>
				)
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
						return (
							<Row key={`action-list-item-${index}`}>
								<Col span={3}>
		            　<FormItem label="动作类型">
		                <Select
		                  mode="select"
		                  size={'large'}
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
											onChange={that.updateEventExpr.bind(that, key, index)}
		                	placeholder="表达式" />
		              </FormItem>
		            </Col>

		            <Col span={6} offset={1}>
		           　　<FormItem label="目标元素">  
		                <Select
		                  onChange={that.changeTargetElements.bind(that, key, index)}
		                  mode="tags"
		                  size={'large'}
		                  placeholder="请选择目标组件"
		                  defaultValue={[]}
		                  style={{ width: '100%' }}
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
						<div key={`row-${index}`} gutter={8}>
							<div>
	              <b>{key} -- ({description})</b>
	              <Popover
	                placement="right" 
	                content={getEventPopoverContent.bind(that, `${key}`)} 
	                title="事件配置提示"
	              >                  
	                <Icon type="question-circle" />
	              </Popover>
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
						  onSelect={handleTransferSelect}
            />
          </Panel>
          <Panel header="动作设置" key="2">
            {actionContent()}       
          </Panel>
        </Collapse>
        <ApplyConfigButton onApply={null} title="应用高级设置"/>
			</div>
			)
		}
}
