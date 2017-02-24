import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import Immutable from 'immutable';

class Star extends Component {

  handleClick(type) {
    this.props.dispatch({
      type: 'UPDATE',
      payload: 3,
    });
  }

  render() {
    return (
      <div className="m-star">
        <div onClick={this.handleClick.bind(this)}>
        点我
        </div>
        <span>Next.js has {this.props.stars} ⭐️</span>
      </div>
    )
  }
}

const mapStateToProps = ($$state) => {
    return $$state.get('starReducer').toJS();
};

export default connect(mapStateToProps)(Star);
