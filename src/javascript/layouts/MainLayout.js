import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import MenuBar from './MenuBar';
import ComponentSider from './ComponentSider';
import DesignView from './DesignView';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MainLayout extends Component {

  static getInitialState() {
    return Immutable.fromJS({
      collapsed: false,
      mode: 'inline',
      data: null,
    });
  }

  onCollapse = (collapsed) => {
    this.props.dispatch({
      type: 'UPDATE_COLLAPSED',
      payload: {
        collapsed,
        mode: collapsed ? 'vertical' : 'inline',
      }
    });
  }

  render() {
    let layouts = [
      {
        grid: {i: 'g1', x: 0, y: 0, w: 3, h: 1},
        component: {
          type: 'IFInputNumber', 
          props: { 
            id: 1, 
            defaultValue: 0,
            visibility: true,
            locked: false,
          },
        }
      },
      {
        grid: {i: 'g2', x: 3, y: 0, w: 3, h: 1},
        component: {
          type: 'IFRangePicker', 
          props: { 
            visibility: true,
            locked: false,
          },
        }
      },
      {
        grid: {i: 'g3', x: 8, y: 0, w: 3, h: 1},
        component: {
          type: 'IFInputNumber', 
          props: { 
            id: 3, 
            defaultValue: 1,
            visibility: true,
            locked: false,
          },
        }
      }
    ];
    let data = {
      panes: [
        {
          name: 'form1', 
          key: 'form1',
          title: '测试表单一',
          closable: false,
          layouts,
        }
      ]
    };

    let {
      collapsed,
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
            handleMenuClick={handleMenuClick}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: '2px' }}>
            <div style={{ padding: '5px', background: '#fff', minHeight: 420 }}>
              <DesignView 
                data={data}
              />
            </div>
            <Footer style={{ textAlign: 'center' }}>
              StatusBar: IntelliForm ©2017 Created by John
            </Footer>
          </Content>
          <Sider
              collapsible
            >
              Content
          </Sider>
        </Layout>
      </Layout>
      </Layout>
    )
  }
}

function handleMenuClick({ key }) {
  console.log(key);

}

const mapStateToProps = ($$state, ownProps) => {
  return $$state.get('mainLayoutReducer').toJS();
}

export default MainLayout;
//export default connect(mapStateToProps)(MainLayout);