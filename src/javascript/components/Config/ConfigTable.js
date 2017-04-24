import { Component } from 'react';
import { 
    Tabs,
    Switch,
    Form,
    Row,
    Col,
    Collapse,
    Select,
    Input,
    Icon,
    Radio,
} from 'antd';

import { 
  TwitterPicker,
  GithubPicker,
  CirclePicker,
} from 'react-color';

import IFDynamicForm from './IFDynamicForm.js';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;



export default
class ConfigTable extends Component {
    
    constructor(props) {
      super(props);
    
      this.state = {
        dataSourceRadioValue: 1,
      };
    }

    handleDataSourceRadioChange = () => {
      this.setState({
        dataSourceRadioValue: this.state.dataSourceRadioValue == 1 ? 2 : 1,
      });
    };

    render() {
        return (
          <Tabs type="card">
            <TabPane tab="基础设置" key="1">
              <Collapse defaultActiveKey={['1', '2']}>
                    <Panel header="状态属性" key="1">
                      <Row gutter={8}>
                        <Col span={6}>
                            可视性： <Switch checkedChildren={'开'} unCheckedChildren={'关'} defaultChecked={true} />
                            </Col>
                            <Col span={6}>
                            锁定性：<Switch checkedChildren={'开'} unCheckedChildren={'关'} defaultChecked={false} />
                            </Col>
                            <Col span={6}>
                            必录性：<Switch checkedChildren={'开'} unCheckedChildren={'关'} defaultChecked={false} />
                            </Col>
                            <Col span={6}>
                            自动汇总：<Switch checkedChildren={'开'} unCheckedChildren={'关'} defaultChecked={false} />
                            </Col>
                        </Row>
                    </Panel>
                    <Panel header="输入框属性" key="2">
                    <Form>
                      <Row gutter={8} style={{ marginBottom: '10px'}}>
                        <Col span={6}>
                        <FormItem label={"默认值"}>
                          <Input placeholder="组件初始化的默认值" />
                        </FormItem>
                        </Col>
                        <Col span={6}>
                          <FormItem label={"当前值"}>
                            <Input placeholder="存在则覆盖默认值" />
                          </FormItem>
                        </Col>
                      </Row>
                      <Row gutter={8}>
                        <Col span={6}>
                          <FormItem label={"组件前缀文字"}>
                            <Input placeholder="如：数量, 单价, 总金额 等" />
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <FormItem label={"组件后缀文字"}>
                            <Input placeholder="如：元, ￥, $ 等" />
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <FormItem label={"前置图标"}>
                            <Input placeholder="前置图标" />
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <FormItem label={"后置图标"}>
                            <Input placeholder="后置图标" />
                          </FormItem>
                        </Col>
                      </Row>
                      </Form>
                    </Panel>
                    <Panel header="风格样式" key="3">
                      <Form>
                      <Row gutter={12}>
                        <Col span={6}>
                          <FormItem label={"组件尺寸"}>
                            <Select title="选择组件尺寸" value="default">
                              <Option value="default">默认大小</Option>
                              <Option value="large">大尺寸</Option>
                              <Option value="small">小尺寸</Option>
                            </Select>
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <FormItem label={"组件主题"}>
                            <Select title="选择组件主题" value="default">
                              <Option value="default">默认主题</Option>
                            </Select>
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <FormItem label={"组件风格"}>
                            <Select title="选择组件风格" value="vertical">
                              <Option value="vertical">垂直排布</Option>
                              <Option value="horizontal">水平排布</Option>
                            </Select>
                          </FormItem>
                        </Col>
                      </Row>
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
                      </Form>
                    </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="数据源" key="2">
              <RadioGroup onChange={this.handleDataSourceRadioChange} value={this.state.dataSourceRadioValue}>
                <Radio value={1}>选择已有</Radio>
                <Radio value={2}>自定义</Radio>
              </RadioGroup>
              <div>
                <IFDynamicForm />
              </div>
            </TabPane>
            <TabPane tab="事件设置" key="3">Content of Tab Pane 3</TabPane>
            <TabPane tab="检验规则" key="4">
              <Row gutter={2}>
                <Col span={4}>
                  非空： <Switch defaultChecked={true} />
                  </Col>
                  <Col span={4}>
                  手机：<Switch defaultChecked={false} />
                  </Col>
                  <Col span={4}>
                  邮箱：<Switch defaultChecked={false} />
                  </Col>
                  <Col span={4}>
                  整数：<Switch defaultChecked={false} />
                  </Col>
                  <Col span={4}>
                  小数：<Switch defaultChecked={false} />
                </Col>
              </Row>
              <Row gutter={2}>
                <Col span={4}>
                  四舍五入：<Switch defaultChecked={false} />
                </Col>
                <Col span={4}>
                  向上取整：<Switch defaultChecked={false} />
                </Col>
                <Col span={4}>
                  向下取整：<Switch defaultChecked={false} />
                </Col>
                <Col span={4}>
                  金额右对齐：<Switch defaultChecked={false} />
                </Col>
              </Row>
              <Row gutter={4}>
                <Col span={4}>
                  最小长度：<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="0" />
                  </Col>
                  <Col span={4}>
                  最大长度：<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="10" />
                  </Col>
                  <Col span={4}>
                  小数位数：<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="0" />
                  </Col>
                  <Col span={4}>
                  整数：<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="0" />
                  </Col>
                  <Col span={4}>
                  正则：<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="input regular expression" />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="过滤规则" key="5">Content of Tab Pane 3</TabPane>
            <TabPane tab="下推方案" key="6">Content of Tab Pane 3</TabPane>
          </Tabs> 
        )
    }
}

const DIYForm = Form.create({})(ConfigTable);