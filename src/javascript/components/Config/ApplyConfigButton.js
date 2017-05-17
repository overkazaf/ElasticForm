import { Component } from 'react';
import {
	Button,
} from 'antd';
/**
 * 应用配置项的按钮
 */
export default
class ApplyConfigButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      onApply,
      title,
    } = this.props;
  
    let styleObj = { 
      marginTop: '10px', 
      marginRight: '10px', 
      textAlign: 'right',
    };

    return (
      <div style={styleObj}>
        <Button ghost onClick={onApply} type="primary">{title}</Button>
      </div>
    ) 
  } 
}