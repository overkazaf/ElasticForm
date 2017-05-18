import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

const { is } = Immutable;

export default
class IFComponentBase extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	option: props.option,
	  	eventMap: {},
	  };
	}

	getFieldValue(field) {
		return this.state.option.get(field);
	}

	setFieldValue(json, callback = () => {}) {
		let $$option = this.state.option;

		Object.keys(json).map((field) => {
			$$option = $$option.set(field, json[field]);
		});

		this.setState({
			option: $$option,
		}, callback);
	}

	getFieldsValue(array) {
		let valueObj = {};

		array.map((field) => {
			valueObj[field] = this.getFieldValue(field);
		});

		return valueObj;
	}

	getValue() {
		return this.getFieldValue('value');
	}

	setValue(value, callback) {
		this.setFieldValue({
			value,
		}, callback);
	}

	componentWillReceiveProps(nextProps) {
		let newState = Object.assign(this.state.option, nextProps.option);

		this.setState({
			option: newState,
		}, console.log(this.state.option))
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !(this.props === nextProps || is(this.props, nextProps)) 
			|| !(this.state === nextState || is(this.state, nextState));
	}
	
	render() {
		return (
			<div>
				<h1>Warning</h1>
				<p style={{ color: 'red' }}>You need to override the IFComponentBase Class in your SubClass</p>
			</div>
		)
	}
}