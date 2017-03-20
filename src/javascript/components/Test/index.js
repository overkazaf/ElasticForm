import IFBaseComponent from '../Base/IFBaseComponent';
import { connect } from 'react-redux';
import Immtable from 'immutable';

class Test extends IFBaseComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let fn = () => {
      this.props.dispatch({
        type: 'FETCH_USER',
        payload: 123,
      });
    };
  }

  handleCancel() {
    this.props.dispatch({
      type: 'FETCH_USER_CANCELLED'
    });
  }

  render() {
    const { user } = this.props;
    const username = user ? user.username : 'Anoynomouse';

    return (
      <div id={123} className="m-test" style={null}>
      	Hello, {username}
        <button onClick={this.handleCancel.bind(this)}>Cancel </button>
      </div>
    )
  }
}

const mapStateToProps = ($$state) => {
    return $$state.get('testReducer').toJS();
};

export default connect(mapStateToProps)(Test);
