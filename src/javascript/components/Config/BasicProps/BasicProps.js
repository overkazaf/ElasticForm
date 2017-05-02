import { Component } from 'react';
import {
	Form,
	Row,
	Col,
	Collapse,
	Panel,
	Switch,
	Radio,
	Input,
	Select,
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


class StatusProps extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<Row gutter={8}>
			    <Col span={6}>
			        可见： <Switch checkedChildren={'是'} unCheckedChildren={'否'} defaultChecked={true} />
			    </Col>
			    <Col span={6}>
			        锁定：<Switch checkedChildren={'是'} unCheckedChildren={'否'} defaultChecked={false} />
			    </Col>
			    <Col span={6}>
			        必录：<Switch checkedChildren={'是'} unCheckedChildren={'否'} defaultChecked={false} />
			    </Col>
			    <Col span={6}>
			        自动汇总：<Switch checkedChildren={'是'} unCheckedChildren={'否'} defaultChecked={false} />
			    </Col>
			</Row>
		)
	}
}

class InputAlignProps extends Component {
	render() {
		return (
			<Row gutter={8}>
		        <Col span={12}>
		            <FormItem label={"文本对齐"}>
		                <RadioGroup onChange={null} value={1}>
		                    <Radio value={1}>左对齐</Radio>
		                    <Radio value={2}>居中</Radio>
		                    <Radio value={3}>右对齐</Radio>
		                </RadioGroup>
		            </FormItem>
		        </Col>
		        <Col span={12}>
		            <FormItem label={"进位方式"}>
		                <RadioGroup onChange={null} value={1}>
		                    <Radio value={1}>四舍五入</Radio>
		                    <Radio value={2}>向上取整</Radio>
		                    <Radio value={3}>向下取整</Radio>
		                </RadioGroup>
		            </FormItem>
		        </Col>
		    </Row>
		)
	}
}

class InputValueProps extends Component {
	render() {
		return (
			<Row gutter={8}>
				<Col span={5}>
				  <FormItem label={"提示文字"}>
				    <Input placeholder="组件提示文字" />
				  </FormItem>
				</Col>
				<Col span={5}>
				<FormItem label={"默认值"}>
				  <Input placeholder="组件初始化的默认值" />
				</FormItem>
				</Col>
				<Col span={5}>
				  <FormItem label={"当前值"}>
				    <Input placeholder="存在则覆盖默认值" />
				  </FormItem>
				</Col>
			</Row>
		)
	}
}

class InputDecorationProps extends Component {
	render() {
		return (
			<Row gutter={8}>
				<Col span={5}>
				  <FormItem label={"前缀文字"}>
				    <Input placeholder="如：数量, 单价, 总金额 等" />
				  </FormItem>
				</Col>
				<Col span={5}>
				  <FormItem label={"后缀文字"}>
				    <Input placeholder="如：元, ￥, $ 等" />
				  </FormItem>
				</Col>
				<Col span={5}>
				  <FormItem label={"前置图标"}>
				    <Input placeholder="前置图标" />
				  </FormItem>
				</Col>
				<Col span={5}>
				  <FormItem label={"后置图标"}>
				    <Input placeholder="后置图标" />
				  </FormItem>
				</Col>
			</Row>
		)
	}
}

class ComponentThemeStyle extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<Row gutter={8}>
				<Col span={7}>
				  <FormItem label={"组件尺寸"}>
				    <Select title="选择组件尺寸" value="default">
				      <Option value="default">默认大小</Option>
				      <Option value="large">大尺寸</Option>
				      <Option value="small">小尺寸</Option>
				    </Select>
				  </FormItem>
				</Col>
				<Col span={7} offset={1}>
				  <FormItem label={"组件主题"}>
				    <Select title="选择组件主题" value="default">
				      <Option value="default">默认主题</Option>
				    </Select>
				  </FormItem>
				</Col>
				<Col span={7} offset={1}>
				  <FormItem label={"组件风格"}>
				    <Select title="选择组件风格" value="vertical">
				      <Option value="vertical">垂直排布</Option>
				      <Option value="horizontal">水平排布</Option>
				    </Select>
				  </FormItem>
				</Col>
			</Row>
		)
	}
}

class ComponentColorStyle extends Component {
	render() {
		return (
			<Row gutter={8}>
				<Col span={10}>
				  <FormItem label={"文字颜色"}>
				    <CirclePicker />
				  </FormItem>
				</Col>
				<Col span={10}>
				  <FormItem label={"背景颜色"}>
				    <CirclePicker />
				  </FormItem>
				</Col>
			</Row>
		)
	}
}

export default class BasicProps extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		console.log('this.props in basic props', this.props);

		return (
			<Collapse defaultActiveKey={['1', '2']}>
				<Form>
					<Panel header="状态属性" key="1"> 
						<StatusProps />
					</Panel>
					<Panel header="输入框属性" key="2">
					    <InputAlignProps />
					    <InputValueProps />
					    <InputDecorationProps />
					</Panel>
					<Panel header="组件风格" key="3">
					  	<ComponentThemeStyle />
					  	<ComponentColorStyle />
					</Panel>
				</Form>
			</Collapse>
		)
	}
}


const InputPropsForm = Form.create({})(BasicProps);