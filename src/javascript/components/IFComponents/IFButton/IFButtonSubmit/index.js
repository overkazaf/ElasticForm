import {
	Button,
} from 'antd';
import Immutable from 'immutable';
import IFButtonNormal from '../IFButtonNormal/index.js';

export default
class IFButtonSubmit extends IFButtonNormal {
	constructor(props) {
	  super(props);

	  this.state = {
	  	option: Immutable.fromJS(props.option || {}),
	  	eventMap: {},
	  };
	}

	render() {

		let {
			option,
			eventMap,
		} = this.state;

		let {
			label,
			visibility,
			locked,
			theme,
			size,
			ghost,
		} = option.toJS();

		let {
			onClick,
		} = eventMap;

		return (
			<Button 
				ghost={!!ghost}
			  size={size || 'large'}
				type={theme || 'primary'}
				disabled={!!locked}
				onClick={onClick || null}
				style={{ width: '100%'}}
			>
				{label}
			</Button>
		)
	}
}