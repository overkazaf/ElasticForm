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
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter((k, i) => i !== index),
      values: values.filter((k, i) => i !== index),
    });
  }

  add = () => {
    uuid++;
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    const values = form.getFieldValue('values');
    const nextValues = values.concat(uuid);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
      values: nextValues,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
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


    getFieldDecorator('keys', { initialValue: [] });
    getFieldDecorator('values', { initialValue: [] });
    const keys = getFieldValue('keys');
    const values = getFieldValue('values');
    const formItems = keys.map((k, index) => {
      const val = values[index];
      return (
        <Row gutter={6}>
          <Col span={10}>
            <FormItem
              {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
              label={index === 0 ? '新增Key' : ''}
              required={false}
              key={k}
                  >
                  {getFieldDecorator(`keys-${k}`, {
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  whitespace: true,
                  message: "请将新增的键补充完整",
                }],
              })(
              <Input placeholder="input key" style={{ width: '90%', marginRight: 8 }} />
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
              <Input placeholder="input value" style={{ width: '90%', marginRight: 8 }} />
            )}
            </FormItem>
          </Col>
          <Col span={4}>
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => {
                this.remove(index);
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