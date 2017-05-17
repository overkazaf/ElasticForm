import IFComponentBase from '../IFComponentBase/index.js';

export default
class IFLabel extends IFComponentBase {
  

  render() {
    let {
      option,
    } = this.props;

    console.warn('option in input label', option);

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

    console.log('============== inside IFLabel ==================');


    // let styleObj = {};
    // styleObj['fontFamily'] = fontFamily;
    // styleObj['fontSize'] = fontSize;
    // styleObj['textAlign'] = textAlign;
    // styleObj['color'] = fontColor || '#000';
    // styleObj['backgroundColor'] = bgColor;
    // styleObj['height'] = '100%';

    // options.map((item) => {
    //   styleObj[item.id] = item.value;
    // });

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

    let styleObj = buildStyleObjet(styleKeys, kvObject);

    console.log('styleObj', styleObj);

    return (
      <div className="if-label" style={styleObj}>
        {label.value}
      </div>  
    );
  }
}

function buildStyleObjet(keys, kvObject) {
  let style = {};
  keys.map((key) => {
    let styleKey = key;
    let styleValue = kvObject[key];
    if (key === 'fontStyle') {
      let values = styleValue ? styleValue.split('$') : "";
  
      console.log('values in buildStyleObjet', values);

      values.length && values.map((kvPairs) => {
        let [k, v] = kvPairs.split(':');
        style[k] = v;
      });
    } else {
      if (key === 'fontColor') {
        styleKey = 'color';
        styleValue = styleValue.hex;
      }

      if (key === 'backgroundColor') {
        styleValue = styleValue.hex;
      }

      if (key === 'visibility') {
        styleKey = 'display';
        styleValue = styleValue ? '' : 'none';
      }

      style[styleKey] = styleValue;
    }

  });

  return style;
}

function print(...args) {
  args.map((item) => {
    console.log(item);
  });
}