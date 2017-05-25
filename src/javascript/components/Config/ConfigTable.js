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
    Popover,
} from 'antd';

import { 
  TwitterPicker,
  GithubPicker,
  CirclePicker,
} from 'react-color';

import _ from 'lodash';
import IFDynamicForm from './IFDynamicForm.js';
import IFTransfer from './IFTransfer.js';
import BasicProps from './BasicProps/BasicProps.js';
import Advanced from './Advanced/index.js';

import defaultBasicProps from './BasicProps/defaultBasicProps.js';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Panel = Collapse.Panel;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Option = Select.Option;

import ApplyConfigButton from './ApplyConfigButton.js';
import Immutable from 'immutable';

class ConfigTable extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
        dataSourceRadioValue: 2, // 1为从已有数据源中选择，2为批量自定义数据源
        activeConfigTabKey: "4",
        components: props.components,
        // shared models
        configModel: Object.assign({
          basicProps: {},
          dataSource: {},
          filterRules: {},
          eventList: [],
          validations: {},
          advanced: {},
        }, props.dataModel),
      };
    }

    componentWillReceiveProps(nextProps) {

      let {
        config: {
          configModel,
        },
        components,
      } = nextProps;

      console.log('componentWillReceiveProps(nextProps) in ConfigTable', nextProps);

      if (!configModel) return;

      this.setState({
        configModel,
        components,
      });
    }

    handleDataSourceRadioChange = () => {      
      let { dataSourceRadioValue } = this.state;
      dataSourceRadioValue = dataSourceRadioValue == 2 ? 1 : 2;
      this.setState({
        dataSourceRadioValue,
      });
    };

    onChange(activeConfigTabKey) {
      this.setState({
        activeConfigTabKey,
      });
    }

    render() {
      let that = this;
      let { 
        dispatch, 
        onApply,
      } = this.props;

      let {
        components,
        configModel,
        dataSourceRadioValue,
        activeConfigTabKey,
      } = this.state;

      let {
        basicProps,
        dataSource,
        filterRules,
        eventList,
        validations,
        advanced,
      } = configModel;
      
        return (
          <Tabs 
            onChange={this.onChange.bind(this)}
            type="card" 
            activeKey={activeConfigTabKey}>
            <TabPane tab="基础设置" key="1">
              <BasicProps 
                config={basicProps}
                dispatch={dispatch}
                ref="basicProps"/>
            </TabPane>
            <TabPane tab="数据源" key="2">
              <RadioGroup onChange={this.handleDataSourceRadioChange} value={dataSourceRadioValue}>
                <Radio value={1}>选择已有数据源</Radio>
                <Radio value={2}>自定义字典</Radio>
              </RadioGroup>

              <div style={{ marginTop: '10px' }}>
                {
                  dataSourceRadioValue == 1 ?
                    <IFTransfer ref="dataSource" dispatch={dispatch}/>:
                    <IFDynamicForm ref="dataSource" dispatch={dispatch}/>
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
              <Advanced 
                components={components}
                dispatch={dispatch}
                eventList={eventList}
              />
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
                            <Radio value={1}>无</Radio>
                            <Radio value={2}>手机</Radio>
                            <Radio value={3}>邮箱</Radio>
                            <Radio value={4}>整数</Radio>
                            <Radio value={5}>小数</Radio>
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


const ModelConversionsStretagy = {
  'basicProps': (config) => {
    if (!Object.keys(config).length) {
      return config;
    }

    let targetConfig = {};
    let basicKeys = [
      'componentColor',
      'componentTheme',
      'fontStyle',
      'formStatus',
      'configutAlignCarry',
      'inputDecoration',
      'inputValue',
    ];

    basicKeys.map((key) => {
      targetConfig[key] = config[key];
    });

    return config;
  },
};

function convertModel(config, type) {
  return ModelConversionsStretagy[type](config);
}

const mapStateToProps = (store) => {
  let $$configReducer = store.get('configReducer');
  let configBase = $$configReducer.toJS();
  let configModel = $$configReducer.get('configModel').toJS();
  return {
    ...configBase,
    configModel,
  }
};

export default ConfigTable;
//export default connect(mapStateToProps)(ConfigTable);