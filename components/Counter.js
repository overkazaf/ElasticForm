import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

class Counter extends Component {
  componentDidMount() {
    let { dispatch, increase } = this.props;

    setTimeout(() => {
      dispatch({
        type: 'TEST',
        data: {
          counter: 90
        }
      })
    }, 3000);
  }


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

const mapStateToProps = ($$state, ownProps) => $$state;

export default connect(mapStateToProps)(Counter)
