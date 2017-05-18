import {
	Button,
} from 'antd';
import Immutable from 'immutable';
import IFComponentBase from '../../IFComponentBase/index.js';
import Util from '../../../../utils/Util.js';

export default
class IFButtonNormal extends IFComponentBase {
	constructor(props) {
	  super(props);

	  this.state = {
	  	option: props.option,
	  	eventMap: {},
	  };
	}

	render() {

		let {
			option,
			eventMap,
		} = this.props;
	
		let model = Util.parseDataModel(option);
		let {
			size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked,
			extraStyle,
		} = model;

		let fontStyleObj = {
			fontSize,
			fontFamily,
			lineHeight,
			...extraStyle,
		};

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
				<span style={fontStyleObj}>{label}</span>
			</Button>
		)
	}
}