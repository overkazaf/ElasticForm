import {
  Form,
  Input,
  Icon,
  Button,
  Row,
  Col,
} from 'antd';
const FormItem = Form.Item;

let uuid = 0;
class DynamicFieldSet extends React.Component {
  remove = (index) => {
    const { form } = this.props;
    // can use data-binding to get
    const labels = form.getFieldValue('labels');
    const values = form.getFieldValue('values');
    // We need at least one k-v pairs
    if (labels.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      labels: labels.filter((k, i) => i !== index),
      values: values.filter((k, i) => i !== index),
    });
  }

  add = () => {
    uuid++;
    const { form } = this.props;
    // can use data-binding to get
    const labels = form.getFieldValue('labels');
    const nextLabels = labels.concat(uuid);
    const values = form.getFieldValue('values');
    const nextValues = values.concat(uuid);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      labels: nextLabels,
      values: nextValues,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let labels = values.labels;
        let dataSource = labels.map((key, index) => {
          return {
            label: values[`labels-${key}`],
            value: values[`values-${key}`],
          }
        });


        this.props.dispatch({
          type: 'UPDATE_COMPONENT_DATASOURCE',
          payload: {
            dataSource,
          },
        });
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    console.log('this.props in IFDynamicForm');

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 20, offset: 4 },
        sm: { span: 16, offset: 8 },
      },
    };

    const addFormItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 20, offset: 4 },
        sm: { span: 20, offset: 4 },
      },
    };


    getFieldDecorator('labels', { initialValue: [] });
    getFieldDecorator('values', { initialValue: [] });
    const labels = getFieldValue('labels');
    const values = getFieldValue('values');
    const formItems = labels.map((k, index) => {
      const val = values[index];
      return (
        <Row gutter={6}>
          <Col span={10}>
            <FormItem
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={index === 0 ? '新增Label' : ''}
              required={false}
              key={k}
                  >
              {getFieldDecorator(`labels-${k}`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "请将新增的标签补充完整",
                }],
              })(
              <Input placeholder="input new label" style={{ width: '90%', marginRight: 8 }} />
            )}

            </FormItem>
          </Col>
          <Col span={10}>
            <FormItem
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={index === 0 ? '新增Value' : ''}
              required={false}
              key={val}
                  >
                  {getFieldDecorator(`values-${val}`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "请将新增的值补充完整",
                }],
              })(
              <Input placeholder="input new value" style={{ width: '90%', marginRight: 8 }} />
            )}
            </FormItem>
          </Col>
          <Col span={4}>
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={labels.length === 1}
              onClick={() => {
                this.remove(index);
              }}
            />
          </Col>
        </Row>
      );
    });
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <FormItem {...addFormItemLayoutWithOutLabel}>
          <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
            <Icon type="plus" /> 新增字典项
          </Button>
        </FormItem>
        <FormItem {...addFormItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit" size="large" style={{ width: '60%' }}>应用字典配置</Button>
        </FormItem>
      </Form>
    );
  }
}

const IFDynamicForm = Form.create()(DynamicFieldSet);

export default IFDynamicForm;