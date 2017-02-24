import React, { Component } from 'react';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';

import Counter from '../components/Counter';

class MainPage extends Component {
  static getInitialProps ({ store, isServer }) {

    store.subscribe(() => {
      console.log(store.getState());
    });

    return { 
      isServer, 
      counter: 0,
    };
  }


  componentDidMount() {
    let { dispatch } = this.props;

    setTimeout(() => {
      dispatch({
        type: 'INC',
        payload: 10,
      });
      console.log('dispatched');
    }, 2000);
  }

  increase() {
    this.props.dispatch({
      type: 'INC',
      payload: 1,
    });
  }

  decrease() {
    this.props.dispatch({
      type: 'INC',
      payload: -1,
    });
  }

  handleClick() {
    console.log('handle');
    this.props.dispatch({
      type: 'INC',
      payload: 3,
    });
  }

  render() {

    let { 
      counter,
      isServer,
    } = this.props;

    return (
      <div className={isServer}>
        <div onClick={this.handleClick.bind(this)}>aaaaa</div>
        <NoSSR onSSR={null}>
          <Counter 
          increase={this.increase.bind(this)}
          decrease={this.decrease.bind(this)}
          counter={counter}/>
        </NoSSR>
      </div>
    )
  }
}

export default withRedux(initStore)(MainPage);
