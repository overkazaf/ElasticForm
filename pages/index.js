import React, { Component } from 'react';
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Counter from '../src/javascript/components/Counter';

//import Test from '../src/javascript/components/Test';
//import InteliCollapse from '../src/javascript/components/Layout/InteliCollapse';
import MainLayout from '../src/javascript/layouts/MainLayout';
import Rx from 'rxjs/Rx';
import antdStyle from '../src/css/index.min.css';

class MainPage extends Component {
  static getInitialProps ({ store, isServer }) {

    // const res = await fetch('https://api.github.com/repos/developit/preact');
    // const json = await res.json();

    store.subscribe(() => {
      console.log(store.getState());
    });

    // store.dispatch({
    //   type: 'UPDATE',
    //   payload: json.stargazers_count,
    // })

    return Immutable.fromJS({ 
      isServer, 
    });
  }

  render() {

    let { 
      isServer,
    } = this.props;

    return (
      <div className="p-main">
        <style dangerouslySetInnerHTML={{ __html: antdStyle}} />
        <MainLayout />
      </div>
    )
  }
}

export default withRedux(initStore)(MainPage);
