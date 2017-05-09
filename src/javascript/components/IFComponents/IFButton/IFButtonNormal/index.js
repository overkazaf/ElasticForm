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

	componentWillReceiveProps(nextProps) {
		let newState = Immutable.fromJS(Object.assign(this.state.option.toJS(), nextProps.option));
		
		console.log('nextProps in IFButtonNormal', nextProps);
		this.setState({
			option: newState,
		}, console.log(this.state.option.toJS()))
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