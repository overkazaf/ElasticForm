import React, { Component } from 'react';
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-fetch';
import NoSSR from 'react-no-ssr';
import Immutable from 'immutable';
import Counter from '../src/javascript/components/Counter';
import Drag from '../src/javascript/components/Drag';
import Test from '../src/javascript/components/Test';
import InteliCollapse from '../src/javascript/components/Layout/InteliCollapse';
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
      counter: 0,
      stars: 0,
    });
  }

  componentDidMount() {

    // let button = document.querySelector('button');
    // Rx.Observable.fromEvent(button, 'click')
    // .subscribe('click', () => console.log('Button has been clicked'));

    //console.log('Rx.Observable.of(1,2,3)', Rx.Observable.of(1,2,3));
    // setTimeout(() => {
    //   // let myObservable = new Rx.Subject();

    //   // myObservable.subscribe(value => console.log(value))
    //   // myObservable.next('fuck you');
    //   // 
    //   var myObservable = Rx.Observable.create(observer => {
    //     observer.next('foo');
    //     setTimeout(() => observer.next('bar'), 1000);
    //   });
    //   myObservable.subscribe(value => console.log(value));
    // }, 3000);

    // of, from, fromPromise, fromEvent
    // 

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
        <Test />
      </div>
    )
  }
}

export default withRedux(initStore)(MainPage);
