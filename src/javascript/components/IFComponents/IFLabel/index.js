import IFComponentBase from '../IFComponentBase/index.js';

export default
class IFLabel extends IFComponentBase {
  

  render() {
    let {
      option,
    } = this.props;

    let {
      label,
    } = option;
    console.log('option in label');

    return (
      <div className="if-label">
        {label}
      </div>  
    );
  }
}