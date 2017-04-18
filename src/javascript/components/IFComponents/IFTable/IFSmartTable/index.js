import { Component } from 'react';
import IFComponentBase from '../../IFComponentBase/index.js';
import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import mathjs from 'mathjs';
import Immutable from 'immutable';

import './index.scss';

class EditableCell extends Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}



export default
class IFSmartTable extends IFComponentBase {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '物料名',
      dataIndex: 'name',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'name')}
        />
      ),
    }, {
      title: '数量(个)',
      dataIndex: 'amount',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'amount')}
        />
      ),
    }, {
      title: '单价(元)',
      dataIndex: 'price',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'price')}
        />
      ),
    },{
      title: '折扣(%)',
      dataIndex: 'discount',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'discount')}
        />
      ),
    },{
      title: '总价(元)',
      dataIndex: 'total',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'total')}
        />
      ),
    },{
      title: '日期',
      dataIndex: 'date',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'date')}
        />
      ),
    },{
      title: '采购人',
      dataIndex: 'buyer',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
          this.state.option.get('dataSource').length > 1 ?
          (
            <Popconfirm title="确定要删除本行记录?" onConfirm={() => this._onDelete(index)}>
              <a href="#">删除本行记录</a>
            </Popconfirm>
          ) : null
        );
      },
    }];
  }

  componentDidMount() {
    this.setFieldValue({
      dataSource: [{
        key: '0',
        name: '新增物料 0',
        amount: '1',
        price: '12.00',
        total: '12.00',
        discount: '0',
        buyer: '管理员',
        date: '2016-10-24',
        fixed: 'right',
        width: 100,
      }],
      count: 1,
    });
  }


  onCellChange = (index, key) => {
    return (value) => {
      const newDataSource = this.state.option.get('dataSource');
      newDataSource[index][key] = value;

      let autoCalcMap = {
        price: true,
        discount: true,
        amount: true,
      };

      let row = newDataSource[index];

      if (key in autoCalcMap) {
        let {
          price,
          amount,
          discount,
        } = row;

        newDataSource[index]['total'] = new Number(mathjs.eval(`${price} * ${amount} * (100 - ${discount}) / 100`)).toFixed(2);
      }  

      // this.setState({ 
      //   dataSource: [],
      // }, () => {
      //   this.setState({
      //     dataSource: newDataSource,
      //   });
      // });

      this.setFieldValue({
        dataSource: [],
      }, () => {
        this.setFieldValue({
          dataSource: newDataSource,
        });
      });

    };
  }

  _onDelete = (index) => {
    const dataSource = this.state.option.get('dataSource');
    dataSource.splice(index, 1);
   
    this.setFieldValue({
      dataSource,
    });
  }

  _handleAdd = () => {
    const { count, dataSource } = this.state.option.toJS();
    const newData = {
      key: count,
      name: `新增物料 ${count}`,
      amount: 1,
      price: '00.00',
      total: '00.00',
      discount: '0',
      buyer: '管理员',
      date: '2016-10-24',
      fixed: 'right',
      width: 100,
    };

    this.setFieldValue({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  render() {
    const { 
      option,
      eventMap,
    } = this.state;

    let {
      dataSource,
    } = option.toJS();

    const columns = this.columns;
    return (
      <div>
        <Button 
          className="editable-add-btn"
          style={{marginBottom: 10}}
          onClick={this._handleAdd}>
        <Icon type="plus-circle" />
          New Row
        </Button>
        <Table 
          size="small"
          bordered 
          dataSource={dataSource} 
          scroll={{ x: 700 }}
          columns={columns} />
      </div>
    );
  }
}