import { Component } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import ComponentFactory from '../factory/ComponentFactory.js';
import LayoutEngine from '../engine/LayoutEngine.js';
import mock from '../mock/test.js';

import designViewStyle from './DesignView.scss';

export default
class DesignView extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;

    const panes = [];

    this.state = {
      activeKey: 'pane1',
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
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

  _renderDesignView(pageJson) {

    let {
      header,
      body,
      footer,
    } = pageJson;

    return (
      <div className="m-designview-container">
        {
          header.components.map((item, index) => {
            let {
              type,
              props,
            } = item;

            return (
              <div key={`item-${index}`}>
                {ComponentFactory.create(type, props)}
              </div>
            )
          })
        }
      </div>
    )
  }

  getTmpData() {
    return mock.data;
  }

  render() {
    let that = this;
    let {
      panes,
    } = this.props.data;

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: designViewStyle}} />
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {panes.map(pane => 
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {LayoutEngine.renderLayout(pane)}
                { /* that._renderDesignView(that.getTmpData()) */ }
              </TabPane>)}
        </Tabs>
      </div>
    );
  }
}