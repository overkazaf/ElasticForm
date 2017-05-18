import { Component } from 'react';
import {
	Form,
	Row,
	Col,
	Collapse,
	Switch,
	Radio,
	Input,
	Select,
	Button,
	Icon,
	Slider,
	InputNumber,
} from 'antd';

import { 
  TwitterPicker,
  GithubPicker,
  CirclePicker,
  SketchPicker,
  CompactPicker,
} from 'react-color';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Option = Select.Option;
const Panel = Collapse.Panel;
const ButtonGroup  = Button.Group;

import JFormComponent from '../JFormComponent';
import defaultBasicProps from './defaultBasicProps.js';
import ApplyConfigButton from '../ApplyConfigButton.js';

import _ from 'lodash';

/**
 * 处理组件状态数据
 */
class FormStatus extends JFormComponent {
	constructor(props) {
	  super(props);
	  this.state = _.cloneDeep(defaultBasicProps.formStatus);
	}

	handleChange(stateKey) {
		this.setState({
			[stateKey]: {
				value: !this.state[stateKey].value,
			},
		}, () => {
			console.log('this.getFieldsValue', this.getFieldsValue());
		});
	}
	
	render() {
		let that = this;

		let {
			visibility,
			locked,
			mustInput,
			autoSum,
		} = this.state;

		[
			visibility,
			locked,
			mustInput,
			autoSum,
		] = [visibility,locked,mustInput,autoSum].map((item) => item.value);

		let attributeArray = [
			{id: 1, label: '可见', checkedChildren: '是', unCheckedChildren: '否', defaultChecked: true, checked: visibility, onChangeParam: 'visibility' },
			{id: 2, label: '锁定', checkedChildren: '是', unCheckedChildren: '否', defaultChecked: false, checked: locked, onChangeParam: 'locked' },
			{id: 3, label: '必录', checkedChildren: '是', unCheckedChildren: '否', defaultChecked: false, checked: mustInput, onChangeParam: 'mustInput' },
			{id: 4, label: '自动汇总', checkedChildren: '是', unCheckedChildren: '否', defaultChecked: true, checked: autoSum, onChangeParam: 'autoSum' },
		];

		let statusPropsContent = attributeArray.map((item, index) => {
			let {
				label,
				checkedChildren,
				unCheckedChildren,
				defaultChecked,
				checked,
				onChangeParam,
			} = item;

			let handleChange = that.handleChange.bind(that, `${onChangeParam}`);

			return (
				<Col key={`status-props-${index}`} span={6}>
					{label}:

					<Switch
						checkedChildren={'是'} 
      			unCheckedChildren={'否'} 
      			defaultChecked={defaultChecked}
      			checked={checked}
      			onChange={handleChange}
      		/>
				</Col>
			)
		});

		return (
			<Row gutter={8}>
		    {statusPropsContent}
			</Row>
		)
	}
}

/**
 * 处理组件中文本的对齐状态
 */
class InputAlignCarry extends JFormComponent {
	constructor(props) {
		super(props);
		this.state = Object.assign({}, defaultBasicProps.inputAlignCarry);
	}
	
	handleChange(type, e) {

		this.setState({
			[type]: e.target.value,
		}, () => {
			console.log('this.getFiledsValue', this.getFieldsValue());
		});
	}

	render() {
		let {
			textAlign,
			carry,
		} = this.state;

		return (
			<Row gutter={8}>
		        <Col span={12}>
		            <FormItem label={"文本对齐"}>
		                <RadioGroup onChange={this.handleChange.bind(this, 'textAlign')} value={textAlign}>
		                    <Radio value={'left'}>左对齐</Radio>
		                    <Radio value={'center'}>居中</Radio>
		                    <Radio value={'right'}>右对齐</Radio>
		                </RadioGroup>
		            </FormItem>
		        </Col>
		        <Col span={12}>
		            <FormItem label={"进位方式"}>
		                <RadioGroup onChange={this.handleChange.bind(this, 'carry')} value={carry}>
		                    <Radio value={'round'}>四舍五入</Radio>
		                    <Radio value={'ceil'}>向上取整</Radio>
		                    <Radio value={'floor'}>向下取整</Radio>
		                </RadioGroup>
		            </FormItem>
		        </Col>
		    </Row>
		)
	}
}

class InputValue extends JFormComponent {
	constructor(props) {
		super(props);
		this.state = _.cloneDeep(defaultBasicProps.inputValue);

	}
	
	handleChange(id, e) {
		let deep = _.cloneDeep(this.state[id]);
		let newState = Object.assign(deep, {value: e.target.value});

		this.setState({
			[id]: newState,
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState(nextProps.options, () => {
			console.log('this.state', this.state);
		});
	}

	render() {
		let that = this;
		let {
			carry,
			link,
			linkTarget,
			placeholder,
			defaultValue,
			value,
			label,
		} = this.state;

		let valuePropsContent = [
			// carry,
			// link,
			// linkTarget,
			label, 
			placeholder, 
			defaultValue, 
			value,
		].map((item, index) => {
			let {
				id,
				label,
				placeholder,
				defaultValue,
				value,
			} = item;
	
			let handleChange = that.handleChange.bind(that, id);

			return (
				<Col key={`value-props-${index}`} span={5}>
					<FormItem label={label}>
						<Input 
								placeholder={placeholder}
								defaultValue={defaultValue} 
								value={value}
								onChange={handleChange}
							/>
					</FormItem>
				</Col>
			)
		});

		return (
			<Row gutter={8}>
				{valuePropsContent}
			</Row>
		)
	}
}

class InputDecoration extends JFormComponent {
	constructor(props) {
		super(props);

		this.state = _.cloneDeep(defaultBasicProps.inputDecoration);
	}

	handleChange(id, e) {
		let currentState = this.state[id];
		let { type } = currentState;
		let newValue = type === 'input' ? e.target.value : e;
		let newState = Object.assign(this.state[id], { value: newValue　 });

		this.setState({
			[id]: newState,
		}, () => {
			console.log('handleChange in input decoration', this.state);
		});
	}
	
	render() {
		let that = this;
		let {
			addonBefore,
			addonAfter,
			prefix,
			suffix,
		} = this.state;

		let inputDecorationContent = [
			addonBefore,
			addonAfter,
			//prefix,
			//suffix,
		].map((item, index) => {
			let {
				id,
				type,
				value,
				label,
				addonBefore,
				addonAfter,
				prefix,
				suffix,
				placehodler,
				options,
			} = item;

			let formContent;
			let handleChange = that.handleChange.bind(that, id);

			if (type === 'input') {
				formContent = <Input 
					addonBefore={addonBefore} 
					addonAfter={addonAfter} 
					prefix={prefix} 
					suffix={suffix}
					value={value} 
					placeholder={placehodler}
					onChange={handleChange}
				/>;
			} else if (type === 'select') {
				formContent = (() => {
					let optionContent = options.map((opt, index) => {
						let {
							id,
							value,
							icon,
						} = opt;
					
						return (
							<Option key={`opt-${id}-index`} value={value}><Icon type={icon} /></Option>
						)
					});
					return (
						<Select 
							onChange={handleChange}
							style={{ width: '100%'}}>
							{optionContent}
						</Select>
					)
				})();
			}

			return (
				<Col key={`input-decoration-${id}-${index}`} span={5}>
					<FormItem label={label}>
						{formContent}
					</FormItem>
				</Col>
			)
		});

		return (
			<Row gutter={8}>
				{inputDecorationContent}
			</Row>
		)
	}
}

class ComponentTheme extends JFormComponent {
	constructor(props) {
	  super(props);

	  this.state = _.cloneDeep(defaultBasicProps.componentTheme);
	}

	handleChange(type, value) {
	
		let newTypeState = Object.assign(this.state[type], { value });
		this.setState({
			[type]: newTypeState,
		}, () => {
			console.log('componetnThemeStyle has been change', this.state);
		});
	}

	render() {
		let that = this;
		let {
			size,
			theme,
			layoutStyle,
			fontColor,
			backgroundColor,
		} = this.state;

		let componentThemeContent = [
			[
				size,
				theme,
				layoutStyle,
			],
			[
				fontColor,
				backgroundColor,
			]
		].map((group, groupIndex) => {
			let rowContent = group.map((item, itemIndex) => {
				let {
					id,
					label,
					title,
					value,
					options,
				} = item;

				if (id == 'fontColor' || id == 'backgroundColor') {
					let colors = [
					"#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", 
					"#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", 
					"#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", 
					"#ff5722", "#795548", "#607d8b", "#aaaaaa", "#000000"];

					let offset = itemIndex ? 1 : 0;

					return (
						<Col key={`color-${id}-${itemIndex}`} span={11} offset={offset}>
							<FormItem label={label}>
								<CompactPicker
									color={value}
									onChange={that.handleChange.bind(that, id)} />
							</FormItem>
						</Col>
					)
				} else {
					let optionContent = options.map((opt, idx) => {
						let {
							id,
							label,
							value,
						} = opt;

						return (
							<Option key={`opt-${id}`} value={value}>{label}</Option>
						)
					});
					
					return (
						<Col key={`${id}-${itemIndex}`} span={8}>
							<FormItem label={label}>
								<Select 
									title={title} 
									value={value} 
									onChange={that.handleChange.bind(that, id)}
									style={{ width: '80%'}}>
									{optionContent}
								</Select>
							</FormItem>
						</Col>
					)
				}
			});

			return (
				<Row key={`row-${groupIndex}`} gutter={8}>
					{rowContent}
				</Row>
			)
		});

		return (
			<div>
				{componentThemeContent}
			</div>
		);
	}
}

class FontStyles extends JFormComponent {
	constructor(props) {
		super(props);

		this.state = _.cloneDeep(defaultBasicProps.fontStyles);
	}

	handleChange(key, id) {
		switch(key) {
			case 'fontStyle': {
				let newState = _.cloneDeep(this.state.fontStyle);
				newState.options = newState.options.map((opt) => {
					if (opt.id === id) {
						opt.checked = !opt.checked;
					}
					return opt;
				});

				newState.values = newState.options.filter((item) => {
					return item.checked;
				});

				newState.values = newState.values.map((item) => {
					return `${item.id}:${item.value}`;
				}).join('$');

				this.setState({
					fontStyle: newState,
				}, () => {
					this.updateModel(this.props.dispatch, {
						rootModel: 'basicProps', 
						modelName: 'fontStyles', 
						model: this.state,
					});
				});

				return;
			}

			default: {
				let newKeyState = Object.assign(this.state[key], { value: id });
				this.setState({
					[key]: newKeyState,
				}, () => {
					this.updateModel(this.props.dispatch, {
						rootModel: 'basicProps', 
						modelName: 'fontStyles', 
						model: this.state,
					});
				});

				return;
			}
		}
	}

	render() {
		let that = this;
		let {
			fontStyle,
			fontSize,
			fontFamily,
			lineHeight,
			textAlign,
		} = this.state;

		let fontStyleContent = [
			fontStyle, 
			fontSize, 
			fontFamily,
			textAlign,
			lineHeight,
		].map((item, index) => {
			  let { 
			  	id,
			  	label,
			  	title,
			  	value,
			  	values,
			  	options,
			  } = item;

			  let content = 'text';
				if (id === 'fontStyle') {
					let buttonContent = options.map((opt, idx) => {
						let buttonKey = `${id}-${idx}`;
						let { 
							id,
							label,
							value,
							checked,
						} = opt;

						if (values && values.length) {
							// 修正options的checked状态
							let kv = values.split('$');
							kv.map((item, kvIndex) => {
								let [key, value] = item.split(':');
								let option = options.filter((ite) => {
									return key == ite.id;
								})[0];
								
								if (key === id) {
									checked = true;
									option.checked = true;
								}
							});
						}
						
						// 区分选中和未选的按钮状态
						let buttonType = !checked ? 'default' : 'primary';
						let styleObj = {};
						styleObj[id] = value;

						return (
							<Button size="default" onClick={that.handleChange.bind(that, 'fontStyle', id)} type={buttonType} key={buttonKey}>
								<span style={styleObj}>{label}</span>
							</Button>
						)
					});
					
					content = <ButtonGroup>
		                  {buttonContent}
										</ButtonGroup>;
				} else if (id === 'lineHeight') {
					content = (
						<div>
							<Col span={16}><Slider defaultValue={1} step={0.1} min={0} max={5} onChange={that.handleChange.bind(that, 'lineHeight')} value={value} /></Col>
							<Col span={4}><InputNumber style={{ width: '32px' }} onChange={that.handleChange.bind(that, 'lineHeight')} value={value} disabled /></Col>
						</div>
					)
;
				} else {
					let optionContent = options.map((opt) => {
						let { 
							id,
							label,
							value,
						} = opt;

						return (
							<Option key={`opt-${id}`} value={value}>{label}</Option>
						)
					});
					content = <Select 
											title={title} 
											value={value} 
											onChange={that.handleChange.bind(that, id)}
											style={{ width: '80%'}}
											>
											{optionContent}
										</Select>;
				}
	
				return (
					<Col key={`${id}-${index}`} span={8}>
						<FormItem label={label}>
							{content}
						</FormItem> 
					</Col>
				)
		});

		return (
			<Row gutter={8} style={{ display: 'block' }}>
				{fontStyleContent}
			</Row>
		)
	}
}

/**
 * [PropsPanelMap 定义一个组件字典方便生成]
 * @type {Object}
 */
const PropsPanelMap = {
	FormStatus: (refName, options, dispatch) => {
		return (
			<FormStatus ref={refName} options={options} dispatch={dispatch} />
		)
	},
	ComponentTheme: (refName, options, dispatch) => {
		return (
			<ComponentTheme ref={refName} options={options} dispatch={dispatch} />
		)
	},

	InputAlignCarry: (refName, options, dispatch) => {
		return (
			<InputAlignCarry ref={refName} options={options} dispatch={dispatch} />
		)
	},
	InputValue: (refName, options, dispatch) => {
		return (
			<InputValue ref={refName} options={options} dispatch={dispatch} />
		)
	},
	InputDecoration: (refName, options, dispatch) => {
		return (
			<InputDecoration ref={refName} options={options} dispatch={dispatch} />
		)
	},
	FontStyles: (refName, options, dispatch) => {
		return (
			<FontStyles ref={refName} options={options} dispatch={dispatch} />
		)
	}
};


export default 
class BasicProps extends Component {
	constructor(props) {
	  super(props);

	  this.state = _.cloneDeep(defaultBasicProps);
	}

	componentWillReceiveProps(nextProps) {
		this.setState(_.merge(this.state, nextProps.config), () => {
			console.log('updated state in BasicProps', this.state);
		});
	}

	onApply() {
		console.log('==================onApply=================');
		let dataModel = this.__getDataModel();

		console.log('UPDATE_COMPONENT_BASIC_PROPS', dataModel);
		this.props.dispatch({
			type: 'UPDATE_COMPONENT_BASIC_PROPS',
			payload: {
				basicProps: dataModel,
			},
		});

		this.props.dispatch({
			type: 'REEDIT_COMPONENT',
		});
	}

	__getDataModel() {
		let dataModel = {};
    Object.keys(this.refs).map((refKey) => {
      dataModel[refKey] = this.refs[refKey].getFieldsValue();
    });

    return dataModel;
	}

	render() {
		let that = this;
		let configModel = this.state;

		let { dispatch } = this.props;

		let panelData = [
			
			{
				key: '1',
				title: '输入框属性',
				children: [
					{
						id: 'InputValue',
						ref: 'inputValue'
					},
					{
						id: 'InputDecoration',
						ref: 'inputDecoration'
					},
				]
			},
			{
				key: '2',
				title: '组件风格',
				children: [
					{
						id: 'FontStyles',
						ref: 'fontStyles'
					},
					{
						id: 'ComponentTheme',
						ref: 'componentTheme'
					},
				]
			},
			{
				key: '3',
				title: '状态属性',
				children: [
					{
						id: 'FormStatus',
						ref: 'formStatus'
					},
				]
			}
		];

		let panelContent = panelData.map((item) => {
			let {
				key,
				title,
				children,
			} = item;

			let configContent = children.map((configItem) => {
				let {
					id,
					ref,
				} = configItem;
				

				return PropsPanelMap[id](ref, configModel[`${ref}`], dispatch)
			});

			return (
				<Panel header={title} key={key}>
					{configContent}
				</Panel>
			)
		});

		return (
			<div>
				<Collapse defaultActiveKey={['1']}>
					{panelContent}
				</Collapse>
				<ApplyConfigButton onApply={that.onApply.bind(that)} title={`应用基础设置`} />
			</div>
		)
	}
}
