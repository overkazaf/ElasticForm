import React, { Component } from 'react';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Counter from '../components/Counter';
import Star from '../components/Star';


import indexStyle from '../scss/index.scss';

class MainPage extends Component {
  static async getInitialProps ({ store, isServer }) {

    const res = await fetch('https://api.github.com/repos/developit/preact');
    const json = await res.json();

    store.subscribe(() => {
      console.log(store.getState());
    });

    return Immutable.fromJS({ 
      isServer, 
      counter: 0,
      stars: json.stargazers_count || 12,
    });
  }

  componentDidMount() {
    let { dispatch } = this.props;
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
        <NoSSR>
          <Star />
        </NoSSR>
      </div>
    )
  }
}

export default withRedux(initStore)(MainPage);
