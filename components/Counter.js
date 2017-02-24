import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

class Counter extends Component {

  render () {
    let { increase, decrease, counter } = this.props;

    return (
      <div className="m-counter">
        <span onClick={increase} className="btn"> + </span>
        <span> {counter} </span>
        <span onClick={decrease} className="btn"> - </span>
      </div>
    )
  }
}

const mapStateToProps = ($$state, ownProps) => {
  return $$state.get('counterReducer').toJS();
};

export default connect(mapStateToProps)(Counter);
