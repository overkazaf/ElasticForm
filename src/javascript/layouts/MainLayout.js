import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import MenuBar from './MenuBar';
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
} from 'antd';

import ConfigTable from '../components/Config/ConfigTable.js';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const TabPane = Tabs.TabPane;


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
    this.props.dispatch({
      type: 'SET_MODAL_VISIBILITY',
      payload: false,
    });
  }

  handleOk() {
    this.props.dispatch({
      type: 'SET_MODAL_VISIBILITY',
      payload: false,
    });
  }

  render() {

    let {
      collapsed,
      data,
      dispatch,
      editModalVisible,
    } = this.props;

    console.log('this.props', this.props);

    return (
      <Layout>
       <Header style={{ background: 'rgba(0,0,0,0.75)', padding: 0 }} >
        <MenuBar />
       </Header>
       <Layout style={{ height: '100vh' }}>

        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto' }}
        >
          <div className="logo" />
          <ComponentSider 
            handleMenuClick={this.handleMenuClick}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: '2px' }}>
            <div style={{ padding: '5px', background: '#fff', minHeight: 520 }}>
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
            >
            <div style={{ positon: 'relative', width: '240px', padding: '5px' }}>
                <Search
                  placeholder="input search text"
                  style={{ width: 160 }}
                  onSearch={value => console.log(value)}
                />
              <div style={{position: 'absolute', background: '#999', width: '100%',left: 0, bottom: '100px'}}>
                <Table 
                  pagination={false}
                  dataSource={dataSource} 
                  columns={columns} />
                </div>
            </div>
          </Sider>
        </Layout>
      </Layout>

        <Modal title="Modal" visible={editModalVisible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
          okText="OK" cancelText="Cancel"
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