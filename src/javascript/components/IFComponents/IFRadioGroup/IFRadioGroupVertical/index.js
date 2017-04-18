import IFComponentBase from '../../IFComponentBase/index.js';
import { Radio, Input } from 'antd';
const RadioGroup = Radio.Group;

export default
class IFRadioGroupVertical extends IFComponentBase {
  
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setValue(e.target.value);
  }
  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <RadioGroup onChange={this.onChange} value={this.getValue()}>
        <Radio style={radioStyle} value={1}>Option A</Radio>
        <Radio style={radioStyle} value={2}>Option B</Radio>
        <Radio style={radioStyle} value={3}>Option C</Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </RadioGroup>
    );
  }
}