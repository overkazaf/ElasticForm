import React, {Component} from 'react';
import { showAction, hideAction, nextConnect} from '../stores/store.js';
import withRedux from 'next-redux-wrapper';
import * as Types from '../constants/ActionTypes';

class Comp extends Component {
  static getInitialProps ({ store, isServer }) {
    return { isServer, shown: true };
  }

  componentDidMount () {
    let {
      dispatch,
      shown,
    } = this.props;

    let startClock = () => 

    dispatch(startClock());
  }

  toggle() {
    let { shown, dispatch } = this.props;
    let type = shown ? Types.HIDE : Types.SHOW;
    
    dispatch(() => {
      return () => {
        dispatch({ type });
      }
    });
  }

  render () {
    let {
      isServer,
      dispatch,
      shown,
    } = this.props;

    let that = this;

    return (
      <div className={isServer}>
        <button onClick={that.toggle.bind(that)}>
          SHOW
        </button>

        <button onClick={null}>
          HIDE
        </button>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Comp);
