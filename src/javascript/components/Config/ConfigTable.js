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
} from 'antd';
import IFTransfer from './index.js';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Panel = Collapse.Panel;


export default
class ConfigTable extends Component {
    
    render() {
        return (
          <Tabs type="card">
            <TabPane tab="基础设置" key="1">
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="值" key="1">
                    <Form>
                      <FormItem
                      >
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="默认值" />
                      </FormItem>
                      <FormItem
                      >
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="前缀" />
                      </FormItem>
                      <FormItem
                      >
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="后缀" />
                      </FormItem>
                    </Form>
                    </Panel>
                    <Panel header="组件" key="2">
                      <Row>
                        <Col span={6}>
                            可视性： <Switch defaultChecked={true} />
                            </Col>
                            <Col span={6}>
                            锁定性：<Switch defaultChecked={false} />
                            </Col>
                            <Col span={6}>
                            必录：<Switch defaultChecked={false} />
                            </Col>
                            <Col span={6}>
                            自动汇总：<Switch defaultChecked={false} />
                            </Col>
                        </Row>
                    </Panel>
                    <Panel header="样式" key="3">
                      <Form>
                      <FormItem
                        label="主题"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 8 }}
                      >
                        <Select placeholder="Select a option and change input text above">
                          <Option value="male">male</Option>
                          <Option value="female">female</Option>
                        </Select>
                      </FormItem>
                      </Form>
                    </Panel>
                  </Collapse>
              
            </TabPane>
            <TabPane tab="数据源" key="2">
              <IFTransfer />
            </TabPane>
            <TabPane tab="事件设置" key="3">Content of Tab Pane 3</TabPane>
            <TabPane tab="检验规则" key="4">Content of Tab Pane 3</TabPane>
            <TabPane tab="过滤规则" key="5">Content of Tab Pane 3</TabPane>
            <TabPane tab="下推方案" key="6">Content of Tab Pane 3</TabPane>
          </Tabs> 
        )
    }
}

const DIYForm = Form.create({})(ConfigTable);