import { Component } from 'react';
import {
	Button,
	Transfer,
    Form,
    Input,
} from 'antd';

import _ from 'lodash';

const FormItem = Form.Item;

export default
class IFTransfer extends Component {

  state = {
    mockData: [],
    targetKeys: [],
  }
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];


    const mockData = [];
    for (let i = 0; i < 5; i++) {
      let dsId = _.uniqueId('__ds__');
      const data = {
        key: dsId,
        title: `数据源${dsId}`,
        description: `数据源描述${dsId}`,
        chosen: false
      };

      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }
  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  renderFooter = () => {
    return (
      <Button size="small" style={{ float: 'right', margin: 5 }}
        onClick={this.getMock}
      >
        refresh
      </Button>
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps in IFTransfer', nextProps);  
  }

  render() {
  
    let { dispatch } = this.props;
    console.log('dispatch', dispatch);

    return (
      <div>
        <Transfer
            dataSource={this.state.mockData}
            showSearch
            listStyle={{
              width: 320,
              height: 300,
            }}
            operations={['添加', '移除']}
            targetKeys={this.state.targetKeys}
            onChange={this.handleChange}
            render={item => `${item.title}-${item.description}`}
            footer={this.renderFooter}
        />
        <br />
        <Form>
          <FormItem
            label="连接条件"
          >
              <Input
                  type="textarea"
                  placeholder="example: form1['id'] == component1['fid']"
                  autosize={{ minRows: 2, maxRows: 6 }}  />
          </FormItem>
        </Form>
        <Button type="primary">
          测试数据源
        </Button>
      </div>
    );
  }
}