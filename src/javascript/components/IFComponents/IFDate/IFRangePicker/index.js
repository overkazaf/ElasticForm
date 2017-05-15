import IFComponentBase from '../../IFComponentBase/index.js';

import {
	DatePicker,
} from 'antd';

let {
	RangePicker,
} = DatePicker;

export default 
class IFRangePicker extends IFComponentBase {

	onChange(date, dateString) {
		console.log(date, dateString);
	}

	render() {

		return (
			<RangePicker size={'large'} onChange={this.onChange} />
		)
	}
}