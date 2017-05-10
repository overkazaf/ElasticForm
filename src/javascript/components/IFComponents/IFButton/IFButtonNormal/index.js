import {
	Button,
} from 'antd';
import Immutable from 'immutable';
import IFComponentBase from '../../IFComponentBase/index.js';

export default
class IFButtonNormal extends IFComponentBase {
	constructor(props) {
	  super(props);

	  console.log('props.option', props);
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
				type={theme}
				disabled={!!locked}
				onClick={onClick || null}
				style={{ width: '100%'}}
			>
				{label}
			</Button>
		)
	}
}