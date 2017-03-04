import IFBaseComponent from '../Base/IFBaseComponent';
import { connect } from 'react-redux';

class Loading extends IFBaseComponent {

  constructor(props) {
    super(props);
  }

  render() {
  	let styleObj = this.props.style;
  	let { uuid } = this.props;

  	console.log('uuid');

    return (
      <div id={uuid} className="m-loading" style={styleObj}>
      	Loading
      </div>
    )
  }
}

const mapStateToProps = ($$state) => {
    return $$state.toJS();
};

export default connect(mapStateToProps)(Loading);
