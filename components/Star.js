import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import Immutable from 'immutable';

class Star extends Component {

  static getInitialProps ({ store, isServer }) {
    return { stars: 0 };
  }

  componentWillReceiveProps (nextProps) {
    console.log('nextProps', nextProps);
  }

  handleClick(type) {
    this.props.dispatch({
      type: 'UPDATE',
      data: {
        stars: 3,
      }
    })
  }

  render() {

    return (
      <div className={'aaa'}>
        <div onClick={this.handleClick.bind(this)}>
        点我
        </div>
        <span>Next.js has {this.props.stars} ⭐️</span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { ...state };
};
export default connect(mapStateToProps)(Star);
