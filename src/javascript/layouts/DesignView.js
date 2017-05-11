import { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import ComponentFactory from '../factory/ComponentFactory.js';
import LayoutEngine from '../engine/LayoutEngine.js';
import mock from '../mock/test.js';
import _ from 'lodash';
import Util from '../utils/Util.js'

import designViewStyle from './DesignView.scss';


class DesignView extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    
    const panes = props.data.panes || [];
    this.state = {
      activeKey: 'IntelliForm-00001',
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });

    // let tabIndex = -1;

    // this.state.panes.map((panel, index) => {
    //   if (panel.key === activeKey) {
    //     tabIndex = index;
    //   }
    // });

    // this.props.dispatch({
    //   type: 'CHANGE_ACTIVE_TAB_INDEX',
    //   payload: {
    //     tabIndex,
    //   },
    // });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      panes: nextProps.data.panes || [],
    });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const seq = ++this.newTabIndex;
    const activeKey = `${_.uniqueId()}${seq}`;
    const panelTpl = generateNewFormPanelTemplate({
      id: `IntelliForm-${seq}`,
      key: activeKey,
      name: `${_.uniqueId('form')}`,
      title: `测试表单${seq}`,
      description: `测试表单${seq}`,
      formType: 0,
      pageIndex: 1,
      theme: 'default',
      creater: Util.getCurrentUserId(),
      createTS: (new Date().getTime()),
    });

    panes.push(panelTpl);
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {

    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render() {
    let that = this;
    let {
      dispatch,
    } = this.props;

    let { panes } = this.state;

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: designViewStyle}} />
        <Tabs
          onChange={this.onChange.bind(this)}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {panes && panes.map(pane => 
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {LayoutEngine.renderLayout(pane, dispatch)}
              </TabPane>)}
        </Tabs>
      </div>
    );
  }
}

/**
 * [generateNewFormPanelTemplate Generate an empty form template by given datastructure]
 * @return {[type]} [description]
 */
function generateNewFormPanelTemplate(option = {}) {
  let pageJson = {
    style: {
      width: 960,
    },
    nextId: null,
    plugIns: [],
    dataSourceIds: [],
    eventList: [
    ],
    closable: true,
    layouts: {
      header: [],
      body: [],
      footer: [],
    },
  };

  return Object.assign(pageJson, option);
}

const mapStateToProps = (store) => {
  return store.get('designViewReducer').toJS();
};

export default DesignView;