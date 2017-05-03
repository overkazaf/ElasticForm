import { Component } from 'react';
import _ from 'lodash';


export default class JFormComponent extends Component {

	getFieldsValue(keys = []) {
		let resultValuesMap = {};
		let currentState = this.state;

		if (!keys.length) {
			keys = Object.keys(this.state);
		}

		keys.map((key) => {
			resultValuesMap[key] = currentState[key];
		});

		return resultValuesMap;
	}

	setFieldsValue(obj, callback = () => {}) {
		/////////////////////////////////////////////////////////
		// precheck the field, throw an error if it is illegal //
		/////////////////////////////////////////////////////////
		let thisState = this.state;
		let keyNotExists = Object.keys(obj).filter((key) => {
			return !(item	in thisState);
		}).length;

		if (keyNotExists) {
			throw new Error(`Object key:[${key}] not exists in this state`);
		}

		let newState = _.cloneDeep(this.state);
		Object.assign(newState, obj);
		this.setState(newState, callback);
	}

	render() {
		return (
			<div className="JFormComponent-wrapper">
				<h1 style={{color: 'red'}}> Please override the render method in your subClass</h1>
			</div>
		)
	}
}