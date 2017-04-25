import { Component } from 'react';
import {
	Button,
	Transfer,
    Form,
    Input,
    Icon,
} from 'antd';

import _ from 'lodash';

const FormItem = Form.Item;

export default
class IFEventTransfer extends Component {

  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];


    const mockData = [
        {
            key: 'onLoad',
            title: `onLoad`,
            description: `加载`,
            chosen: false
        },
        {
            key: 'onClick',
            title: `onClick`,
            description: `点击`,
            chosen: false
        },
        {
            key: 'onFocus',
            title: `onFocus`,
            description: `获得焦点`,
            chosen: false
        },
        {
            key: 'onBlur',
            title: `onBlur`,
            description: `失去焦点`,
            chosen: false
        },
        {
            key: 'onChange',
            title: `onChange`,
            description: `值更新`,
            chosen: false
        },
        {
            key: 'onInput',
            title: `onInput`,
            description: `正在输入`,
            chosen: false
        },
        {
            key: 'onSubmit',
            title: `onSubmit`,
            description: `表单提交`,
            chosen: false
        },
        {
            key: 'onDoubleClick',
            title: `onDoubleClick`,
            description: `双击`,
            chosen: false
        },
        {
            key: 'onKeyPress',
            title: `onKeyPress`,
            description: `按键下压`,
            chosen: false
        },
        {
            key: 'onKeyUp',
            title: `onKeyUp`,
            description: `按键抬起`,
            chosen: false
        },
        {
            key: 'onKeyDown',
            title: `onKeyDown`,
            description: `按键按下`,
            chosen: false
        },
        {
            key: 'onMouseUp',
            title: `onMouseUp`,
            description: `鼠标抬起`,
            chosen: false
        },
        {
            key: 'onMouseDown',
            title: `onMouseDown`,
            description: `鼠标按下`,
            chosen: false
        },
    ];

      mockData.map((data) => {
          if (data.chosen) {
              targetKeys.push(data.key);
          }
      });
    this.setState({ mockData, targetKeys });
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  renderFooter = () => {
    return (
      <div>
        <Button size="small" style={{ float: 'right', margin: 5 }}
        >
          <Icon type="up" />上移
        </Button>
        <Button size="small" style={{ float: 'right', margin: 5 }}
        >
          <Icon type="down" />下移
        </Button>
        <Button size="small" type="danger" style={{ float: 'right', margin: 5 }}
          onClick={this.getMock}
        >
          <Icon type="retweet" />重置
        </Button>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Transfer
            dataSource={this.state.mockData}
            showSearch
            listStyle={{
              width: 300,
              height: 300,
            }}
            operations={['添加', '移除']}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            render={item => `${item.title} (${item.description})`}
            footer={this.renderFooter}
        />
      </div>
    );
  }
}