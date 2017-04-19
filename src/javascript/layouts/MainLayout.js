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
} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;


const dataSource = [{
  key: '1',
  name: '表名',
  value: 'IntelliForm-0001',
}, {
  key: '2',
  name: '描述',
  value: '测试用表'
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

  render() {

    let {
      collapsed,
      data,
      dispatch,
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
            <div style={{ padding: '5px', background: '#fff', minHeight: 420 }}>
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
              width={300}
              style={{ background: '#fff' }}
            >
            <div style={{ positon: 'relative', width: '240px', padding: '5px' }}>
                <Search
                  placeholder="input search text"
                  style={{ width: 160 }}
                  onSearch={value => console.log(value)}
                />
              <div style={{positon: 'absolute', left: 0, bottom: 0}}>
                <Table 
                  size="small"
                  pagination={false}
                  dataSource={dataSource} 
                  columns={columns} />
                </div>
            </div>
          </Sider>
        </Layout>
      </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = ($$state, ownProps) => {
  return $$state.get('mainLayoutReducer').toJS();
}

export default connect(mapStateToProps)(MainLayout);