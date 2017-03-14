import { Component } from 'react';
import _ from 'lodash';

export default 
class IFBaseComponent extends Component {
	static defaultProps = {
		style: {
			border: '2px solid #ddd',
			padding: '5px',
		},
		action: [],
		actionRules: [],
		actionList: [],
		validations: [],
		children: [],
		uuid: _.uniqueId('ifcomp'),
	};

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<div className="if-comp">
			</div>
		)
	}
}