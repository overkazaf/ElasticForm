import { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {

  render() {
    return (
      <div className="m-loading">
        <img src="/static/loading.gif" />
      </div>
    )
  }
}

const mapStateToProps = ($$state) => {
    return $$state.toJS();
};

export default connect(mapStateToProps)(Loading);
