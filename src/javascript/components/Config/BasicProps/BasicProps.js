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


/**
 * 处理组件状态数据
 */
class StatusProps extends JFormComponent {
	constructor(props) {
	  super(props);

	  this.state = {
	  	visibility: true,
	  	locked: false,
	  	mustInput: false,
	  	autoSum: false,
	  };
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

		this.state = {
			textAlign: 'left',
			carry: 'round',
		};
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
		this.state = {
			label: {
				id: 'label',
				label: '标签文字',
				value: '',
				defaultValue: '',
				placeholder: '组件标签文字',
			},
			placeholder: {
				id: 'placeholder',
				label: '提示文字',
				value: '',
				defaultValue: '',
				placeholder: '组件提示文字',
			},
			defaultValue: {
				id: 'defaultValue',
				label: '默认值',
				value: '',
				defaultValue: '',
				placeholder: '组件默认值',
			},
			value: {
				id: 'value',
				label: '当前值',
				value: '',
				defaultValue: '',
				placeholder: '存在则覆盖默认值',
			},
		};
	}
	
	handleChange(id, e) {
		let newState = Object.assign(this.state[id], {value: e.target.value});

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

		this.state = {
			addonBefore: {
				id: 'addonBefore',
				type: 'input',
				label: '前缀文字',
				addonBefore: '前缀',
				addonAfter: '',
				prefix: '',
				suffix: '',
				placehodler: '如：数量, 单价, 总金额 等',
				value: '',
			},
			addonAfter: {
				id: 'addonAfter',
				type: 'input',
				label: '后缀文字',
				addonBefore: '',
				addonAfter: '后缀',
				prefix: '',
				suffix: '',
				placehodler: '如：元, ￥, $ 等',
				value: '',
			},
			prefix: {
				id: 'prefix',
				type: 'select',
				label: '前置图标',
				placehodler: '请选择前置图标',
				value: '',
				options: [
					{ id: 1, value: 'user', icon: 'user' },
					{ id: 2, value: 'lock', icon: 'lock' },
					{ id: 3, value: 'cloud', icon: 'cloud' },
					{ id: 4, value: 'smile', icon: 'smile' },
					{ id: 5, value: 'link', icon: 'link' },
					{ id: 6, value: 'mail', icon: 'mail' },
				],
			},
			suffix: {
				id: 'suffix',
				type: 'select',
				label: '后置图标',
				placehodler: '请选择后置图标',
				value: '',
				options: [
					{ id: 1, value: (<Icon type="close-circle" />), icon: 'close-circle' },
					{ id: 2, value: (<Icon type="close-circle-o" />), icon: 'close-circle-o' },
					{ id: 3, value: (<Icon type="check-circle" />), icon: 'check-circle' },
					{ id: 4, value: (<Icon type="check-circle-o" />), icon: 'check-circle-o' },
				],
			},
		};
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

	  this.state = {
	  	size: {
	  		id: 'size',
	  		value: 'large',
	  		label: '组件尺寸',
	  		title: '选择组件尺寸',
	  		options: [
					{id: 1, label: '默认大小', value: 'default'},
					{id: 2, label: '大尺寸', value: 'large'},
					{id: 3, label: '小尺寸', value: 'small'},
	  		]
	  	},
	  	theme: {
	  		id: 'theme',
	  		value: 'primary',
	  		label: '默认主题',
	  		title: '选择组件主题',
	  		options: [
					{id: 1, label: 'default', value: 'default'},
					{id: 2, label: 'primary', value: 'primary'},
					{id: 3, label: 'dashed', value: 'dashed'},
					{id: 4, label: 'danger', value: 'danger'},
	  		]
	  	},
	  	layoutStyle: {
	  		id: 'layoutStyle',
	  		value: 'vertical',
	  		label: '组件风格',
	  		title: '选择组件风格',
	  		options: [
					{id: 1, label: '垂直风格', value: 'vertical'},
					{id: 2, label: '水平风格', value: 'horizontal'},
	  		]
	  	},
	  };
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
		
		this.state = {
			fontStyle: {
				id: 'fontStyle',
				label: '文字样式',
				values: [],
				options: [
					{id: 'fontWeight', label: '加粗', value: 'bold', checked: false},
					{id: 'fontStyle', label: '斜体', value: 'italic', checked: false},
					{id: 'textDecoration', label: '下划线', value: 'underline', checked: false}
	  		]
			},
			fontSize: {
				id: 'fontSize',
				label: '字号大小',
				title: '请选择字号大小',
				value: '12px',
				options: [
					{id: 'ft10', label: '10px', value: '10px'},
					{id: 'ft12', label: '12px', value: '12px'},
					{id: 'ft14', label: '14px', value: '14px'},
					{id: 'ft16', label: '16px', value: '16px'},
					{id: 'ft20', label: '20px', value: '20px'},
					{id: 'ft24', label: '24px', value: '24px'},
					{id: 'ft28', label: '28px', value: '28px'},
					{id: 'ft32', label: '32px', value: '32px'},
					{id: 'ft36', label: '36px', value: '36px'},
					{id: 'ft40', label: '40px', value: '40px'},
					{id: 'ft44', label: '44px', value: '44px'},
					{id: 'ft48', label: '48px', value: '48px'},
					{id: 'ft52', label: '52px', value: '52px'},
					{id: 'ft56', label: '56px', value: '56px'},
					{id: 'ft60', label: '60px', value: '60px'},
					{id: 'ft64', label: '64px', value: '64px'},
					{id: 'ft68', label: '68px', value: '68px'},
				]

			},
			fontFamily: {
				id: 'fontFamily',
				label: '字体',
				title: '请选择字体',
				value: 'sans serif',
				options: [
					{id: 'ff1', label: 'sans serif', value: 'sans serif'},
					{id: 'ff2', label: '微软雅黑', value: 'Microsoft Yahei'},
					{id: 'ff3', label: '黑体', value: 'Heiti'},
				],
			},
		};
	}

	handleChange(key, id) {
		console.log('handleChange in fontStyle');
		console.log('key', key, 'id', id);
		switch(key) {
			case 'fontStyle': {
				let newState = Object.assign({}, this.state.fontStyle);
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

		this.state = {
			fontColor: {
				id: 'fontColor',
				label: '文字颜色',
				value: '',
			},
			bgColor: {
				id: 'bgColor',
				label: '背景颜色',
				value: '',
			},
		};
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


const PropsPanelMap = {
	StatusProps: (refName) => {
		return (
			<StatusProps ref={refName} />
		)
	},
	ComponentThemeStyle: (refName) => {
		return (
			<ComponentThemeStyle ref={refName} />
		)
	},
	ComponentColorStyle: (refName) => {
		return (
			<ComponentColorStyle ref={refName} />
		)
	},
	InputAlignCarry: (refName) => {
		return (
			<InputAlignCarry ref={refName} />
		)
	},
	InputValueProps: (refName) => {
		return (
			<InputValueProps ref={refName} />
		)
	},
	InputDecorationProps: (refName) => {
		return (
			<InputDecorationProps ref={refName} />
		)
	},
	FontStyle: (refName) => {
		return (
			<FontStyle ref={refName} />
		)
	}
}

export default class BasicProps extends Component {
	constructor(props) {
	  super(props);
	}

	render() {

		return (
			<Collapse defaultActiveKey={['1', '2', '3']}>
				<Panel header="组件风格" key="1">
					{PropsPanelMap['InputAlignCarry']('inputAlignCarry')}
					{PropsPanelMap['FontStyle']('fontStyle')}
					{PropsPanelMap['ComponentThemeStyle']('componentTheme')}
					{PropsPanelMap['ComponentColorStyle']('componentColor')}
				</Panel>
				<Panel header="输入框属性" key="2">
					{PropsPanelMap['InputValueProps']('inputValue')}
					{PropsPanelMap['InputDecorationProps']('inputDecoration')}
				</Panel>
				<Panel header="状态属性" key="3">
					{PropsPanelMap['StatusProps']('formStatus')}
				</Panel>
			</Collapse>
		)
	}
}
