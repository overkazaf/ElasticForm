import IFComponentBase from '../../IFComponentBase/index.js';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export default
class IFRadioGroupHorizontal extends IFComponentBase {
  
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    
    this.setValue(e.target.value)
  }
  render() {
    let value = this.getValue();
    return (
      <RadioGroup onChange={this.onChange} value={value}>
        <Radio value={1}>Option 1</Radio>
        <Radio value={2}>Option 2</Radio>
        <Radio value={3}>Option 3</Radio>
        <Radio value={4}>Option 4</Radio>
      </RadioGroup>
    );
  }
}