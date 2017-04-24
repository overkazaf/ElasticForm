import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import MenuBar from './MenuBar/index.js';
import ComponentSider from './ComponentSider';
import DesignView from './DesignView';
import DevTools from '../components/DevTools/index.js';
import { 
  Layout, 
  Menu, 
  Breadcrumb, 
  Icon,
  Input,
  Table,
  Modal,
  Tabs,
  Tree,
} from 'antd';

import ConfigTable from '../components/Config/ConfigTable.js';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const TabPane = Tabs.TabPane;
const TreeNode = Tree.TreeNode;


const dataSource = [{
  key: '1',
  name: '表名',
  value: 'IntelliForm-0001',
},
{
  key: '2',
  name: '标题',
  value: '测试表一',
},
{
  key: '3',
  name: '描述',
  value: '这一是个测试用表'
},
{
  key: '4',
  name: '基础资料',
  value: 'NIL',
},
{
  key: '5',
  name: '事件',
  value: 'EVENT_LIST:xxxyyy',
}];

const columns = [{
  title: '属性',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '值',
  dataIndex: 'value',
  key: 'value',
}];


class MainLayout extends Component {

  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'UPDATE_COLLAPSED',
      payload: {
        collapsed,
        mode: collapsed ? 'vertical' : 'inline',
      }
    });
  }

  handleMenuClick = (obj) => {
    console.log('obj in HandleMenuClick', obj.key);
    this.props.dispatch({
      type: 'ADD_COMPONENT',
      payload: {
        id: obj.key,
      }
    });
  }

  handleCancel() {
    this._dismissModal();
  }

  _dismissModal() {
    this.props.dispatch({
      type: 'SET_MODAL_VISIBILITY',
      payload: false,
    });
  }

  handleOk() {
    this._dismissModal();
  }

  render() {

    let {
      collapsed,
      data,
      dispatch,
      editModalVisible,
    } = this.props;


    let mainHeaderStyleObj = { 
      background: 'rgba(0,0,0,0.75)', 
      padding: 0,
      height: '32px',
      lineHeight: '32px', 
    };

    let tableContainerStyleObj = {
      position: 'absolute', 
      padding: '5px', 
      background: '#f6f6f6', 
      width: '100%',
      left: 0, 
      bottom: '100px',
      border: '1px solid #aaa',
    };

    let viewContainerStyleObj = { 
      margin: 2, 
      maxWidth: 980, 
      minHeight: 560, 
      overflow: 'auto',
    };

    return (
      <Layout>
       <Header style={mainHeaderStyleObj} >
        <MenuBar />
       </Header>
       <Layout style={{ height: '100vh' }}>

        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto' }}
          collapsedWidth={0}
        >
          <div className="logo" />
          <ComponentSider 
            handleMenuClick={this.handleMenuClick}
          />
        </Sider>
        <Layout>
          <Content style={viewContainerStyleObj}>
            <div style={{ padding: '5px', background: '#fff'}}>
              <DesignView 
                dispatch={dispatch}
                data={data}
              />
            </div>
            <Footer style={{ textAlign: 'center' }}>
              StatusBar: IntelliForm ©2017 Created by overkazaf
            </Footer>
          </Content>
          <Sider
              collapsible
              width={240}
              style={{ backgroundColor: '#f9f9f9' }}
            >
            <div style={{ positon: 'relative', width: '240px', maxHeight: '320px', overflow: 'auto', padding: '5px', border: '1px solid #aaa' }}>
                <div>
                  <Search
                    placeholder="search now"
                    style={{ width: 220 }}
                    onSearch={value => console.log(value)}
                  />

                  <Tree
                    showLine
                    defaultExpandedKeys={['0-0-0']}
                    onSelect={this.onSelect}
                  >
                    <TreeNode title="根目录" key="0-0">
                      <TreeNode title="二级目录-1" key="0-0-0">
                        <TreeNode title="表单一" key="0-0-0-0" />
                        <TreeNode title="表单二" key="0-0-0-1" />
                        <TreeNode title="表单三" key="0-0-0-2" />
                      </TreeNode>
                      <TreeNode title="二级目录-2" key="0-0-1">
                        <TreeNode title="数据源一" key="0-0-1-0" />
                        <TreeNode title="数据源二" key="0-0-1-１" />
                      </TreeNode>
                      <TreeNode title="未分类表单-1" key="0-0-2"></TreeNode>
                      <TreeNode title="未分类表单-2" key="0-0-3"></TreeNode>
                    </TreeNode>
                  </Tree>
                </div>
              <div style={tableContainerStyleObj}>
                <Table 
                  pagination={false}
                  dataSource={dataSource} 
                  columns={columns} />
                </div>
            </div>
          </Sider>
        </Layout>
      </Layout>

        <Modal title="参数配置" visible={true}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
          okText="保存所有配置" cancelText="取消"
          width="750"
        >
          <ConfigTable config={{}}/>
        </Modal>
      </Layout>
    )
  }
}

const mapStateToProps = ($$state, ownProps) => {
  return $$state.get('mainLayoutReducer').toJS();
}

export default connect(mapStateToProps)(MainLayout);