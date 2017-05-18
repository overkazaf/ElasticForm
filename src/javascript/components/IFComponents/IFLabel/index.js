import IFComponentBase from '../IFComponentBase/index.js';
import Util from '../../../utils/Util.js';
export default
class IFLabel extends IFComponentBase {

  render() {
    let {
      option,
    } = this.props;

    let {
      basicProps: {
        componentTheme: {
          backgroundColor,
          fontColor,
          layoutStyle,
          size,
          theme,
        },
        fontStyles: {
          fontFamily,
          fontStyle,
          fontSize,
          lineHeight,
          textAlign,
        },
        formStatus: {
          autoSum,
          locked,
          mustInput,
          visibility,
        },
        inputDecoration: {
          addonAfter,
          addonBefore,
          prefix,
          suffix,
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
      },
      dataSource,
      eventList,
      filterRules,
      validations,
    } = option;


    let keyArray = [
      'backgroundColor',
      'fontColor',
      'layoutStyle',
      'size',
      'theme',

      'fontFamily',
      'fontStyle',
      'fontSize',
      'lineHeight',
      'textAlign',

      'autoSum',
      'locked',
      'mustInput',
      'visibility',

      'addonAfter',
      'addonBefore',
      'prefix',
      'suffix',

      'carry',
      'defaultValue',
      'label',
      'link',
      'linkTarget',
      'placeholder',
      'value',
    ];

    let kvObject = {};
    [
      backgroundColor,
      fontColor,
      layoutStyle,
      size,
      theme,

      fontFamily,
      fontStyle,
      fontSize,
      lineHeight,
      textAlign,

      autoSum,
      locked,
      mustInput,
      visibility,

      addonAfter,
      addonBefore,
      prefix,
      suffix,

      carry,
      defaultValue,
      label,
      link,
      linkTarget,
      placeholder,
      value,
    ].map((item, index) => {
      if (item.isMultiple) console.log('isMultiple', item);
      kvObject[keyArray[index]] = item.isMultiple ? item.values : item.value;
    });

    let styleKeys = [
      'backgroundColor',
      'fontColor',
      'fontFamily',
      'fontSize',
      'fontStyle',
      'lineHeight',
      'textAlign',
      'visibility',
    ];

    let styleObj = Util.buildStyleObjet(styleKeys, kvObject);

    return (
      <div className="if-label" style={styleObj}>
        {label.value}
      </div>  
    );
  }
}


