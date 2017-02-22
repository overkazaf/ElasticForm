import React, {Component} from 'react';
import { showAction, hideAction, nextConnect} from '../stores/store.js';
import withRedux from 'next-redux-wrapper';
import * as ActionTypes from '../constants/ActionTypes';
import stylesheet from '../scss/index.scss';

class Comp extends Component {
  static getInitialProps ({ store, isServer }) {
    store.subscribe(() => {
      console.log(store.getState());
    });
    return { isServer, shown: true };
  }

  componentDidMount () {
    let {
      dispatch,
      shown,
    } = this.props;

    let startClock = () => dispatch => {
      dispatch({ type: ActionTypes.SHOW});
    }

    dispatch(startClock());
  }

  toggle() {
    let { shown, dispatch } = this.props;
    let type = shown ? ActionTypes.HIDE : ActionTypes.SHOW;

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
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <button onClick={that.toggle.bind(that)}>
          SHOW
        </button>
        <div>
          Hello guy!
          <span>
            It's a span for testing
          </span>
        </div>
        <button onClick={null}>
          HIDE
        </button>
      </div>
    )
  }
}

export default nextConnect((state) => state)(Comp);
