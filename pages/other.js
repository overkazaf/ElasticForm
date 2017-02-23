import React, { Component } from 'react';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import Immutable from 'immutable';

import Star from '../components/Star';

class Comp extends Component {
  static async getInitialProps ({ store, isServer }) {
    let res = await fetch('https://api.github.com/repos/zeit/next.js')
    let json = await res.json();
    store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch({
      type: 'UPDATE',
      data: {
        isServer,
        stars: json.stargazers_count,
        roles: [], 
      },
    })

    return { isServer };
  }

  componentDidMount() {
    let props = this.props;
    let { dispatch, isServer, ...state } = props;

    setTimeout(() => {
      dispatch({
        type: 'UPDATE',
        data: {
          stars: 1,
        }
      })
    }, 5000);
  }

  componentWillUnmount () {
  }

  render() {
    let {
      isServer,
      stars,
    } = this.props;
    console.log('reRender', stars);
    return (
      <div>
        <Star />
      </div>
    )
  }
}

export default withRedux(initStore)(Comp);
