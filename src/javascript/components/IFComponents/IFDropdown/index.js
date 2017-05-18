import {
	Dropdown,
	Menu,
	Button,
	Icon,
	message,
} from 'antd';

import IFComponentBase from '../IFComponentBase/index.js';

export default
class IFDropdown extends IFComponentBase {
	constructor(props) {
	  super(props);
	}
	
	handleMenuClick({ key }) {

		console.log('this.state.option.dataSource', this.props.option.dataSource);

	  let selectedOption = this.props.option.dataSource.filter((item, index) => {
	  	return index == key;
	  })[0];

	  message.info(`Click on menu item ${selectedOption.label} values ${selectedOption.value}.`);

	  if (selectedOption) {
		this.setFieldValue({
			label: selectedOption.label,
			value: selectedOption.value,
		});
	  }
	}

	render() {
		let {
			option,
		} = this.props;

		let rawOption = option;

		console.log('rawOption.dataSource', rawOption.dataSource);

		const menu = (
		  <Menu 
		  	defaultSelectedKeys={['1']}
		  	onClick={this.handleMenuClick.bind(this)}
		  >
		    {rawOption.dataSource && rawOption.dataSource.map((item, index) => {
		    	return (
		    		<Menu.Item key={index} value={item.value}>{item.label}</Menu.Item>
		    	)
		    })}
		  </Menu>
		);

		let {
			basicProps: {
				componentTheme: {
	        backgroundColor,
	        fontColor,
	        layoutStyle,
	        size,
	        theme,
	      },
				inputValue: {
	        carry,
	        defaultValue,
	        label,
	        link,
	        linkTarget,
	        placeholder,
	        value,
	      },
	      formStatus: {
	      	visibility,
	      	locked,
	      },
	      fontStyles: {
          fontFamily,
          fontStyle,
          fontSize,
          lineHeight,
          textAlign,
        },
			},
		} = rawOption;

		[backgroundColor, size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked ] = 
		[backgroundColor, size, theme, label, fontFamily, fontSize, lineHeight, textAlign, visibility, locked ].map(item => item.value);

		[fontStyle] = [fontStyle].map(item => item.values);
		
		let extraStyle = {};
		if (fontStyle) {
			let pairs = fontStyle.split('$');
			pairs.map((pair) => {
				let [k, v] = pair.split(':');
				extraStyle[k] = v;
			});
		}

		let fontStyleObj = {
			fontSize,
			fontFamily,
			lineHeight,
			...extraStyle,
		};

		if(!visibility) {
			return <div></div>;
		}

		return (
			<div style={{backgroundColor}}>
				<Dropdown overlay={menu}>
		      <Button 
		        disabled={!!locked}
		      	size={size}
		      	type={theme || 'default'}
		      	style={{ width: '100%', textAlign}}>
		      	<span style={fontStyleObj}>{label}</span> 
		        <Icon type="down" />
		      </Button>
		    </Dropdown>
			</div>
		)

	}
}