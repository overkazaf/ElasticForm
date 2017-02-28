import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { 
	Layout,
	Menu, 
	Icon, 
	Row,
	Col,
	Button,
} from 'antd';

const { 
	Header, 
	Sider, 
	Content,
	Footer,
} = Layout;

import IntelliDatePicker from '../Forms/InteliDatePicker.js';
import InteliCollapse from '../Layout/InteliCollapse.js';
import SmartTable from '../Forms/SmartTable.js';

import './index.scss';

const { is } = Immutable;


class Drag extends Component {

	static getInitialProps() {
		return Immutable.fromJS({
			collapsed: false,
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log('nextProps', nextProps);
	}

	render() {
		let { collapse } = this.props;

		return (
			<div className="m-i-drag">
				<Layout>
			        <Sider
			          trigger={null}
			          collapsible
			          collapsed={this.props.collapsed}
			        >
			          <div className="logo" />
			          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
			            <Menu.Item key="1">
			              <Icon type="user" />
			              <span className="nav-text">nav 1</span>
			            </Menu.Item>
			            <Menu.Item key="2">
			              <Icon type="video-camera" />
			              <span className="nav-text">nav 2</span>
			            </Menu.Item>
			            <Menu.Item key="3">
			              <Icon type="upload" />
			              <span className="nav-text">nav 3</span>
			            </Menu.Item>
			          </Menu>
			        </Sider>
			        <Layout>
			          <Header style={{ background: '#fff', padding: 0 }}>
			         	<Row>
					      <Col span={16}>
				            <Icon
				              className="trigger"
				              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
				              onClick={collapse}
				            />
				          </Col>
				          <Col span={8}>
				          	<Button type="primary">
					          Export IntelliForm
					        </Button>
				          </Col>
				        </Row>
			           
			          </Header>
			          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
			            <br />
			            <Row>
					      <Col span={16}>
					      	<SmartTable />
					      </Col>
					      <Col span={1}>
					      	
					      </Col>
					      <Col span={7}>
					     	<IntelliDatePicker />
							<br />
							<br />
							<br />
							<InteliCollapse />
					      </Col>
					    </Row>
			            
			          </Content>
			        </Layout>
			      </Layout>
			</div>
		)
	}
}


const mapStateToProps = ($$state, ownProps) => {
	return $$state.get('dragReducer').toJS();
}

export default connect(mapStateToProps)(Drag);

