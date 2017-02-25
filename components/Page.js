import { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

class Page extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    //console.log('this.props in Page', this.props);

    this.props.dispatch({
      type: 'HIDE',
    });
  }

  render() {
    let {
      title,
      linkTo,
      shown,
    } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        `isShown {shown ? 'true' : 'false'}`
        <nav>
          <Link href={linkTo}><a>Navigate</a></Link>
        </nav>
        <button onClick={this.handleClick.bind(this)}>
          click me
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state }
};

export default connect(mapStateToProps)(Page);
