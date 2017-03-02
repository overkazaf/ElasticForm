import React, { Component } from 'react';
import { initStore } from '../src/javascript/store';
import withRedux from 'next-redux-wrapper';

import Page from '../src/javascript/components/Page';

class Comp extends Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })

    store.subscribe(() => {
      console.log(store.getState());
    });
    return { isServer, shown: true };
  }

  componentDidMount() {
  }

  componentWillUnmount () {
  }

  handleClick(type) {
    this.props.dispatch({
      type,
    });
  }

  onPageClick() {
    console.log('pageClick');
  }

  render() {
    let { shown } = this.props;

    return (
      <div>
        <Page title='SSR Page' pageOnClick={this.onPageClick.bind(this)} linkTo='/index' />
      </div>
    )
  }
}

export default withRedux(initStore)(Comp);
