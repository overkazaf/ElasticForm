import { Component } from 'react';
import {
  Button,
  Transfer,
  Form,
  Input,
  Icon,
  Select,
} from 'antd';

import _ from 'lodash';

const FormItem = Form.Item;
const Option = Select.Option;



export default
class IFEventTransfer extends Component {

  state = {
    mockData: [],
    targetKeys: [],
    sourceKeys: [],
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
    let { mockData } = this.state;
    this.setState({ targetKeys }, () => {
      let targetItems = targetKeys.map((key) => {
        return mockData.filter((item) => {
          return item.key === key;
        })[0]
      });
      this.props.onSelect && this.props.onSelect(targetItems);
    });
  }

  handleMove(dir) {
    let {
      selectedKeys,
      targetKeys,
    } = this.state;

    console.log('selectedKeys', selectedKeys);
    console.log('targetKeys', targetKeys);
  }

  renderFooter = () => {
    let moveUp = () => {
      console.log('this.state', this.state);
      this.handleMove(-1);
    };

    let moveDown = () => {
      this.handleMove(1);
    };

    let handleReset = () => {
      this.setState({
        targetKeys: [],
      });
    };

    let btnStyle = { float: 'right', margin: 5 };

    return (
      <div>
        <Button onClick={moveUp} size="small" style={btnStyle}
        >
          <Icon type="up" />上移
        </Button>
        <Button onClick={moveDown} size="small" style={btnStyle}
        >
          <Icon type="down" />下移
        </Button>
        <Button size="small" type="danger" style={btnStyle}
          onClick={handleReset}
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
            notFoundContent={"没找到相应的事件怪我喽"}
            titles={['可选事件列表', '已选事件列表']}
            searchPlaceholder={"请输入待检索的事件类型"}
            operations={['添加事件', '移除事件']}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            render={item => `${item.title} (${item.description})`}
        />
      </div>
    );
  }
}