import { Component } from 'react';
import { 
    Tabs,
    Switch,
    Form,
    Layout,
} from 'antd';
import IFTransfer from './index.js';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

let {
    Row,
    Col,
} = Layout;

export default
class ConfigTable extends Component {
    
    render() {
        return (
          <Tabs type="card">
            <TabPane tab="基础设置" key="1">
                <Row>
                    <Col span={4}>
                    可视性： <Switch defaultChecked={true} />
                    </Col>
                    <Col span={4}>
                    锁定性：<Switch defaultChecked={false} />
                    </Col>
                    <Col span={4}>
                    必录：<Switch defaultChecked={false} />
                    </Col>
                    <Col span={4}>
                    自动汇总：<Switch defaultChecked={false} />
                    </Col>
                </Row>
              
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