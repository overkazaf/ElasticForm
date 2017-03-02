import { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
//import a from '../../css/antd/collapse/style/index.css';

const Panel = Collapse.Panel;

class InteliCollapse extends Component {

  render() {
    const callback = (key) => {
      console.log(key);
    };

    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;
    return (
      <div className="m-i-collapse intelli-comp">
       <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      </div>
    )
  }
}


const mapStateToProps = ($$state, ownProps) => {
  return $$state.toJS();
}

export default connect(mapStateToProps)(InteliCollapse);

