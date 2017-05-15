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

import _ from 'lodash';

/**
 * 处理组件状态数据
 */
class StatusProps extends JFormComponent {
	constructor(props) {
	  super(props);

	  this.state = _.cloneDeep(defaultBasicProps.formStatus);
	}

	handleChange(stateKey) {
		this.setState({
			[stateKey]: !this.state[stateKey],
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

		this.state = _.cloneDeep(defaultBasicProps.inputAlignCarry);
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

class InputValueProps extends JFormComponent {
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

	render() {
		let that = this;
		let {
			placeholder,
			defaultValue,
			value,
			label,
		} = this.state;

		let valuePropsContent = [
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

class InputDecorationProps extends JFormComponent {
	constructor(props) {
		super(props);

		this.state = _.cloneDeep(defaultBasicProps.inputDecoration);
	}

	handleChange(id, e) {
		// console.log('handleChange in inputDecoration');
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

class ComponentThemeStyle extends JFormComponent {
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
		} = this.state;

		let componentThemeStyleContent = [
			size,
			theme,
			layoutStyle,
		].map((item, index) => {
			let {
				id,
				label,
				title,
				value,
				options,
			} = item;

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
				<Col key={`${id}-${index}`} span={8}>
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
		});

		return (
			<Row gutter={8}>
				{componentThemeStyleContent}
			</Row>
		)
	}
}

class FontStyle extends JFormComponent {
	constructor(props) {
		super(props);

		this.state = _.cloneDeep(defaultBasicProps.fontStyle);
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

				this.setState({
					fontStyle: newState,
				}, () => {
					console.log('new state has been successfully setted', this.state);
				});

				return;
			}

			default: {
				let newKeyState = Object.assign(this.state[key], { value: id });
				this.setState({
					[key]: newKeyState,
				}, () => {
					console.warn('state has been changed in colorChange', this.state);
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
		} = this.state;

		let fontStyleContent = [fontStyle, fontSize, fontFamily].map((item, index) => {
			  let { 
			  	id,
			  	label,
			  	title,
			  	value,
			  	options,
			  } = item;

				if (id === 'fontStyle') {
					let buttonContent = options.map((opt, idx) => {
						let buttonKey = `${id}-${idx}`;
						let { 
							id,
							label,
							value,
							checked,
						} = opt;
						
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
					return (
						<Col key={`${id}-${index}`} span={8}>
							<FormItem label={label}>
								<ButtonGroup>
                  {buttonContent}
								</ButtonGroup>
							</FormItem> 
						</Col>
					)
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

					return (
						<Col key={`${id}-${index}`} span={8}>
							<FormItem label={label}>
								<Select 
									title={title} 
									value={value} 
									onChange={that.handleChange.bind(that, id)}
									style={{ width: '80%'}}
									>
									{optionContent}
								</Select>
							</FormItem> 
						</Col>
					)
				}
		});

		return (
			<Row gutter={8} style={{ display: 'block' }}>
				{fontStyleContent}
			</Row>
		)
	}
}

class ComponentColorStyle extends JFormComponent {
	constructor(props) {
		super(props);

		let {
			options,
		} = props;

		this.state = _.cloneDeep(defaultBasicProps.componentColor);
	}


	handleChange(key, { hex }) {

		let newKeyState = Object.assign(this.state[key], { value: hex });
		this.setState({
			[key]: newKeyState,
		}, () => {
			console.warn('state has been changed in colorChange', this.state);
		});
	}

	render() {
		let that = this;
		let {
			fontColor,
			bgColor,
		} = this.state;

		let colorContent = [
			fontColor,
			bgColor,
		].map((item, index) => {
			let {
				id,
				label,
				value,
			} = item;

			let colors = [
			"#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", 
			"#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", 
			"#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", 
			"#ff5722", "#795548", "#607d8b", "#aaaaaa", "#000000"];

			let offset = index ? 1 : 0;

			return (
				<Col key={`color-${id}-${index}`} span={11} offset={offset}>
					<FormItem label={label}>
						<CompactPicker
							color={value}
							onChange={that.handleChange.bind(that, id)} />
					</FormItem>
				</Col>
			)
		});

		return (
			<Row gutter={8} style={{ display: 'block' }}>
				{colorContent}
			</Row>
		)
	}
}

/**
 * [PropsPanelMap 定义一个组件字典方便生成]
 * @type {Object}
 */
const PropsPanelMap = {
	StatusProps: (refName, options) => {
		return (
			<StatusProps ref={refName} options={options} />
		)
	},
	ComponentThemeStyle: (refName, options) => {
		return (
			<ComponentThemeStyle ref={refName} options={options} />
		)
	},
	ComponentColorStyle: (refName, options) => {
		return (
			<ComponentColorStyle ref={refName} options={options} />
		)
	},
	InputAlignCarry: (refName, options) => {
		return (
			<InputAlignCarry ref={refName} options={options} />
		)
	},
	InputValueProps: (refName, options) => {
		return (
			<InputValueProps ref={refName} options={options} />
		)
	},
	InputDecorationProps: (refName, options) => {
		return (
			<InputDecorationProps ref={refName} options={options} />
		)
	},
	FontStyle: (refName, options) => {
		return (
			<FontStyle ref={refName} options={options} />
		)
	}
}

export default class BasicProps extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	config: _.cloneDeep(defaultBasicProps),
	  };
	}

	componentWillReceiveProps(nextProps) {
		if (!nextProps.config) {
			return;
		}

		let {
			...newProps,
		} = nextProps;

		this.setState({
			...newProps,
		}, () => {
			console.log('nextProps in BasicProps', nextProps);
		});
	}

	render() {
		
		let {
			config,
		} = this.state;

		let panelData = [
			{
				key: '1',
				title: '组件风格',
				children: [
					{
						id: 'InputAlignCarry',
						ref: 'inputAlignCarry'
					},
					{
						id: 'FontStyle',
						ref: 'fontStyle'
					},
					{
						id: 'ComponentThemeStyle',
						ref: 'componentTheme'
					},
					{
						id: 'ComponentColorStyle',
						ref: 'componentColor'
					},
				]
			},
			{
				key: '2',
				title: '输入框属性',
				children: [
					{
						id: 'InputValueProps',
						ref: 'inputValue'
					},
					{
						id: 'InputDecorationProps',
						ref: 'inputDecoration'
					},
				]
			},
			{
				key: '3',
				title: '状态属性',
				children: [
					{
						id: 'StatusProps',
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

				return PropsPanelMap[id](ref, config[`${ref}`])
			});

			return (
				<Panel header={title} key={key}>
					{configContent}
				</Panel>
			)
		});

		console.log('panelContent', panelContent);

		return (
			<Collapse defaultActiveKey={['1', '2', '3']}>
				{panelContent}
			</Collapse>
		)
	}
}
