import React, { Component } from 'react';
import { initStore } from '../store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Counter from '../components/Counter';
import Star from '../components/Star';
import Loading from '../components/Loading';
import Drag from '../components/Drag';

import antdStyle from '../scss/index.min.scss';

class MainPage extends Component {
  static async getInitialProps ({ store, isServer }) {

    const res = await fetch('https://api.github.com/repos/developit/preact');
    const json = await res.json();

    store.subscribe(() => {
      console.log(store.getState());
    });

    store.dispatch({
      type: 'UPDATE',
      payload: json.stargazers_count,
    })

    return Immutable.fromJS({ 
      isServer, 
      counter: 0,
      stars: json.stargazers_count,
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

  collapse() {
    this.props.dispatch({
      type: 'COLLAPSED',
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
      stars,
    } = this.props;

    return (
      <div className="p-main">
        <style dangerouslySetInnerHTML={{ __html: antdStyle}} />
        <Drag 
          collapse={this.collapse.bind(this)}
        />
      </div>
    )
  }
}

export default withRedux(initStore)(MainPage);
