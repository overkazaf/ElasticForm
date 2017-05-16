import IFComponentBase from '../IFComponentBase/index.js';

export default
class IFLabel extends IFComponentBase {
  

  render() {
    let {
      option,
    } = this.props;

    console.warn('option in input label', option);

    // let {
    //   label,
    //   fontStyles: {
    //     fontFamily,
    //     fontSize,
    //     fontStyle: {
    //       options,
    //     },
    //     textAlign,
    //     fontColor,
    //   },
    //   bgColor,
    // } = option;

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

    return (
      <div className="if-label" style={null}>
        {123}
      </div>  
    );
  }
}