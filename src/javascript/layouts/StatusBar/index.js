import { Component } from 'react';
import { connect } from 'react-redux';

class StatusBar extends Component {

	render() {
		let {
			activeCId,
			elementProps,
		} = this.props;

		return (
			<div>
				<p><b>Focusing on:::{elementProps['name']}</b></p>
				<p>{JSON.stringify(elementProps)}</p>
				<p>
					<b>IntelliForm ©2017 Created by overkazaf</b>
				</p>
			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return store.get('statusBarReducer').toJS();
};

export default connect(mapStateToProps)(StatusBar);