import { Component } from 'react';
import MenuBar from './MenuBar';
import ComponentSider from './ComponentSider';
import DesignView from './DesignView';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class 
MainLayout extends Component {

  state = {
    collapsed: false,
    mode: 'inline',
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }

  render() {

    let data = {
      panes: [
        {
          name: 'pane1', 
          key: 'pane1',
          title: 'Tab1',
          closable: false,
          layouts: [
            {
              name: 'r1-c3',
              components: [
                {
                  type: 'IFInputNumber', 
                  props: { 
                    id: 1, defaultValue: 0,
                    visibility: true,
                    locked: false,
                  },
                },
                {
                  type: 'IFRangePicker', 
                  props: { 
                    id: 2, 
                  },
                },
                {
                    type: 'IFInputNumber', 
                    props: { 
                      id: 3, defaultValue: 0,
                      visibility: true,
                      locked: false,
                    },
                },
              ]
            }
          ]
        },
        {
          name: 'pane2',
          key: 'pane2',
          title: 'Tab2',
          closable: true,
          layouts: []
        }
      ]
    };

    return (
      <Layout>
       <Header style={{ background: 'rgba(0,0,0,0.75)', padding: 0 }} >
        <MenuBar />
       </Header>
       <Layout style={{ height: '100vh' }}>

        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ overflow: 'auto' }}
        >
          <div className="logo" />
          <ComponentSider />
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