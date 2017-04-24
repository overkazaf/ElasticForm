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
    Button,
    InputNumber,
    Tag,
} from 'antd';

import { 
  TwitterPicker,
  GithubPicker,
  CirclePicker,
} from 'react-color';

import IFDynamicForm from './IFDynamicForm.js';
import IFTransfer from './IFTransfer.js';
import IFEventTransfer from './IFEventTransfer.js';

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
      }, () => {
        console.log('this.state in handleDataSourceRadioChange', this.state);
      });
    };

    render() {
        return (
          <Tabs type="card" defaultActiveKey="5">
            <TabPane tab="基础设置" key="1">
              <Collapse defaultActiveKey={['1', '2']}>
                    <Panel header="状态属性" key="1">
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
                    </Panel>
                    <Panel header="输入框属性" key="2">
                    <Form>
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
                      <Row gutter={8}>
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
                          <FormItem label={"前缀文字"}>
                            <Input placeholder="如：数量, 单价, 总金额 等" />
                          </FormItem>
                        </Col>
                        <Col span={6}>
                          <FormItem label={"后缀文字"}>
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
                    <Panel header="组件风格" key="3">
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
                <Radio value={1}>选择已有数据源</Radio>
                <Radio value={2}>自定义字典</Radio>
              </RadioGroup>

              <div style={{ marginTop: '10px' }}>
                {
                  this.state.dataSourceRadioValue == 1 ?
                      <IFTransfer />:
                      <IFDynamicForm />
                }
              </div>
            </TabPane>
            <TabPane tab="过滤规则" key="3">
              <Row>
                <Col span={12}>
                  KeyTree
                </Col>
                <Col span={12}>
                  <Row gutter={6} style={{ marginBottom: 10}}>
                    <Col span={4}>
                      <Button type="default">GT</Button>
                    </Col>
                    <Col span={4}>
                      <Button type="default">EQ</Button>
                    </Col>
                    <Col span={4}>
                      <Button type="default">LT</Button>
                    </Col>
                    <Col span={4}>
                      <Button type="default">GTE</Button>
                    </Col>
                    <Col span={4}>
                      <Button type="default">LTE</Button>
                    </Col>
                    <Col span={4}>
                      <Button type="default">NE</Button>
                    </Col>
                  </Row>
                  <Row gutter={6}>
                    <Col span={4}>
                    <Button type="default">IN</Button>
                    </Col>
                    <Col span={4}>
                    <Button type="default">nIN</Button>
                    </Col>
                    <Col span={4}>
                    <Button type="default">MOD</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: 10}}>
              <Col span={24}>
                <b>样例：</b>
                <ul>
                  <li>
                    <b>过滤出数据源IFTesting的value值小于10的所有集合</b>
                    <Tag color="#2b2b2b">IFTesting.value</Tag>
                    <Tag color="#2db7f5">LT</Tag>
                    <Tag color="#2b2b2b">10</Tag>
                  </li>
                  <li>
                    <b>过滤出数据源IFTesting的value值小于10的所有集合</b>
                    <Tag color="#2b2b2b">IFTesting.value</Tag>
                    <Tag color="#2db7f5">LT</Tag>
                    <Tag color="#2b2b2b">10</Tag>
                  </li>
                  <li>
                    <b>过滤出数据源IFTesting的value值小于10的所有集合</b>
                    <Tag color="#2b2b2b">IFTesting.value</Tag>
                    <Tag color="#2db7f5">LT</Tag>
                    <Tag color="#2b2b2b">10</Tag>
                  </li>
                  <li>
                    <b>过滤出数据源IFTesting的value值小于10的所有集合</b>
                    <Tag color="#2b2b2b">IFTesting.value</Tag>
                    <Tag color="#2db7f5">LT</Tag>
                    <Tag color="#2b2b2b">10</Tag>
                  </li>
                </ul>
              </Col>
              </Row>
            </TabPane>
            <TabPane tab="高级设置" key="4">
              <Collapse defaultActiveKey={['1']}>
                <Panel header="事件设置" key="1">
                  <IFEventTransfer />
                </Panel>
                <Panel header="动作设置" key="2">
                  
                  <Form>
                    <FormItem
                      label="动作描述"
                    >
                        <Input
                            type="textarea"
                            placeholder="点击后触发值更新事件"
                            autosize={{ minRows: 2, maxRows: 4 }}  />
                    </FormItem>
                  </Form>
                  <Button type="primary">
                    应用事件设置
                  </Button>　
                </Panel>
              </Collapse>
            </TabPane>
            
            <TabPane tab="校验规则" key="6">
              <Row gutter={6}>
                <Col span={6}>
                    <FormItem label={"允许全空白字符"}>
                        <Switch checkedChildren={'是'} unCheckedChildren={'否'} defaultChecked={true} />
                    </FormItem>
                </Col>
                <Col span={18}>
                    <FormItem label={"格式检验"}>
                        <RadioGroup onChange={null} value={1}>
                            <Radio value={1}>手机</Radio>
                            <Radio value={2}>邮箱</Radio>
                            <Radio value={3}>整数</Radio>
                            <Radio value={3}>小数</Radio>
                        </RadioGroup>
                    </FormItem>
                </Col>
              </Row>
              <Row gutter={8}>
              　<Col span={6}>
                   <FormItem label={"最小长度"}>
                     <InputNumber min={0}　value="0"/>
                   </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem label={"不足最小长度错误提示信息"}>
                        <Input type="text"/>
                    </FormItem>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={6}>
                    <FormItem label={"最大长度"}>
                        <InputNumber max={24}　value="10"/>
                    </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem label={"超出最大长度错误提示信息"}>
                        <Input type="text"/>
                    </FormItem>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={6}>
                    <FormItem label={"小数位数"}>
                        <InputNumber min={0} max={4}　value="2"/>
                    </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem label={"小数位数错误提示信息"}>
                        <Input type="text"/>
                    </FormItem>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={6}>
                    <FormItem label={"正则表达式"}>
                        <Input　placeholder="输出待校验的正则表达式"/>
                    </FormItem>
                </Col>
                <Col span={12}>
                    <FormItem label={"正则校验失败的提示信息"}>
                        <Input type="text"/>
                    </FormItem>
                </Col>
                <Col span={6}>
                    <FormItem label={"新增正则"}>
                        <Button type="dashed" onClick={null} style={{ width: '60%' }}>
                            <Icon type="plus" />
                        </Button>
                    </FormItem>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col span={6}>
                    <Button type="primary" onClick={null} style={{ width: '60%' }}>
                        应用校验配置
                    </Button>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="下推方案" key="7">
                表单特有的配置项
            </TabPane>
          </Tabs> 
        )
    }
}

const DIYForm = Form.create({})(ConfigTable);