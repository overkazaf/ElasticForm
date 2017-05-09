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
	Icon,
} from 'antd';

import { 
  TwitterPicker,
  GithubPicker,
  CirclePicker,
} from 'react-color';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Option = Select.Option;
const Panel = Collapse.Panel;

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
class InputAlignProps extends JFormComponent {
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
	  		value: 'default',
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
	  		value: 'default',
	  		label: '默认主题',
	  		title: '选择组件主题',
	  		options: [
					{id: 1, label: 'default', value: 'default'},
					{id: 2, label: 'primary', value: 'primay'},
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
					{id: 1, label: '垂直排布', value: 'vertical'},
					{id: 2, label: '水平排布', value: 'horizontal'},
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

			let colOffset = index ? 1 : 0;

			return (
				<Col key={`${id}-${index}`} span={7} offset={colOffset}>
					<FormItem label={label}>
							<Select title={title} value={value} onChange={that.handleChange.bind(that, id)}>
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

			return (
				<Col key={`color-${id}-${index}`} span={10}>
					<FormItem label={label}>
						<CirclePicker
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
	InputAlignProps: (refName) => {
		return (
			<InputAlignProps ref={refName} />
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
	}
}

export default class BasicProps extends Component {
	constructor(props) {
	  super(props);
	}

	render() {

		return (
			<Collapse defaultActiveKey={['1', '2', '3']}>
				<Panel header="状态属性" key="1">
					{PropsPanelMap['StatusProps']('formStatus')}
				</Panel>
				<Panel header="输入框属性" key="2">
					{PropsPanelMap['InputAlignProps']('inputAlign')}
					{PropsPanelMap['InputValueProps']('inputValue')}
					{PropsPanelMap['InputDecorationProps']('inputDecoration')}
				</Panel>
				<Panel header="组件风格" key="3">
					{PropsPanelMap['ComponentThemeStyle']('componentTheme')}
					{PropsPanelMap['ComponentColorStyle']('componentColor')}
				</Panel>
			</Collapse>
		)
	}
}
