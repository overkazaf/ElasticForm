import { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';

class InteliDatePicker extends Component {

	render() {
		return (
			<div className="m-i-datepicker">
				<DatePicker />
			</div>
		)
	}
}


const mapStateToProps = ($$state, ownProps) => {
	return $$state.toJS();
}

export default connect(mapStateToProps)(InteliDatePicker);

