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

  constructor(props) {
    super(props);
  
    // this.state = {
    //   eventData: props.eventData,
    //   targetKeys: props.selectedEventList && props.selectedEventList.filter((item) => {
    //     return item.chosen;
    //   }) || [],
    //   selectedKeys: props.selectedEventList && props.selectedEventList.map((item) => {
    //     return item.key;
    //   }) || [],
    // }
    // 
      
    console.log('Initial props in IFEventTransfer.js', props);

    this.state = {
      eventData: props.eventData,
      targetKeys: [],
      selectedKeys: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps received in IFEventTransfer.js', nextProps);
    let {
      eventData,
      onSelect,
      selectedEventList,
    } = nextProps;

    let targetKeys = selectedEventList.map(item => item.key);

    this.setState({
      eventData,
      onSelect,
      selectedEventList,
      targetKeys,
    });
  }


  handleChange = (targetKeys) => {
    let { eventData } = this.state;
    this.setState({ targetKeys }, () => {
      let targetItems = targetKeys.map((key) => {
        return eventData.filter((item) => {
          return item.key === key;
        })[0]
      });
      this.props.onSelect && this.props.onSelect(targetItems);
    });
  }

  render() {
    let {
      eventData,
      targetKeys,
      selectedEventList,
    } = this.state;

    console.log('targetKeys in IFEventTransfer.js', targetKeys);
    console.log('selectedEventList in IFEventTransfer.js', selectedEventList);

    return (
      <div>
        <Transfer
          dataSource={eventData}
          showSearch
          listStyle={{
            width: 300,
            height: 300,
          }}
          notFoundContent={"没找到相应的事件怪我喽"}
          titles={['可选事件列表', '已选事件列表']}
          searchPlaceholder={"请输入待检索的事件类型"}
          operations={['添加事件', '移除事件']}
          targetKeys={targetKeys}
          onChange={this.handleChange}
          render={item => `${item.title} (${item.description})`}
        />
      </div>
    );
  }
}