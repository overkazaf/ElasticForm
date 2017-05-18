import {
	Button,
} from 'antd';
import Immutable from 'immutable';
import IFButtonNormal from '../IFButtonNormal/index.js';
import Util from '../../../../utils/Util.js';

export default
class IFButtonReset extends IFButtonNormal {
	constructor(props) {
	  super(props);

	  this.state = {
	  	option: props.option,
	  	eventMap: {},
	  };
	}

	render() {
		
		let model = Util.parseDataModel(this.props.option);
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

		return (
			<Button 
			  size={size || 'large'}
				type={'default'}
				disabled={!!locked}
				onClick={null}
				style={{ width: '100%'}}
			>
				<span style={fontStyleObj}>{label}</span>
			</Button>
		)
	}
}