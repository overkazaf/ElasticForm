import React, { Component } from 'react';

import {
	Row,
	Col,
	Layout,
	Icon,
	Button,
	Popconfirm,
} from 'antd';

let {
	Header,
	Content,
	Footer,
} = Layout;

import ComponentFactory from '../factory/ComponentFactory.js';
import ReactGridLayout from 'react-grid-layout';
import layoutStyle from './LayoutEngine.scss';

import GL from '../components/Test/GL.js';


let ResponsiveReactGridLayout = ReactGridLayout.Responsive;


class ComponentsView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeElemId: null,
		};
	}

	render() {
		let that = this;

		let {
			layouts,
			dispatch,
			position,
		} = this.props;

		let { activeElemId } = this.state;

		let gridLayout = layouts.map(layout => layout.grid);

		let handleLayoutChange = (layouts) => {
			dispatch({
				type: 'UPDATE_LAYOUTS',
				payload: {
					position,
					tabIndex: 0,
					layouts,
				},
			})
		};

		let showEditModal = (id, component, tabIndex = 0, position) => {

			console.error('showing modal', id, component, tabIndex, position);

			dispatch({
				type: 'SET_MODAL_VISIBILITY',
				payload: true,
			});

			dispatch({
				type: 'UPDATE_ACTIVE_CID',
				payload: {
					id,
				},
			});

			dispatch({
				type: 'EDIT_COMPONENT',
				payload: {
					id,
					tabIndex,
					position,
				},
			})
		};

		let removeComponent = (id, tabIndex, position) => {
			dispatch({
				type: 'REMOVE_COMPONENT',
				payload: {
					id,
					tabIndex, 
					position,
				},
			})
		};

		let setActiveEl = (id) => {
			dispatch({
				type: 'UPDATE_ACTIVE_CID',
				payload: {
					id,
				},
			});
		};

		return (
			<ReactGridLayout 
				className="layout" 
				layout={gridLayout}
				rowHeight={5} 
				width={960}
				height={500}
				margin={[0, 0]}
				containerPadding={[0,0]}
				autoSize={true}
				onLayoutChange={handleLayoutChange}
			>
	      {
	      	layouts.map((item, index) => {
	      		let {
	      			grid,
	      			component,
	      		} = item;

	      		let {
	      			type,
	      			props,
	      			id,
	      		} = component;

	      		let clazz = id == activeElemId ? 'draggable-item active' : 'draggable-item';

	      		return (
	      			<div key={grid.i} className={clazz}>
			          <span className="ctrl">
			        		<i>
			        			<Icon type="edit" 
			        				onClick={showEditModal.bind(that, props.id, component, 0, position)}
			        			/>
			        		</i>
			        		<i>
			        			<Popconfirm 
			        				title="Are you sure to delete this component？" 
			        				okText="Yes" 
			        				cancelText="No"
			        				onConfirm={removeComponent.bind(this, props.id, 0, position)}
			        			>
								    	<Icon type="delete" />
										</Popconfirm>
			        		</i>
			        	</span>
			        	<span className="if-component-grid">
			        		{ ComponentFactory.create(type, props) }
			        	</span>
			        </div>
	      		)
	      	})
	      }
      </ReactGridLayout>
		)
	}
}

export default
class LayoutEngine {
	static renderLayout(page = {}, dispatch) {
		let {
			name,
			title,
			layouts: {
				header,
				body,
				footer,
			},
		} = page;

		return (
			<div className="form-view">
				<style dangerouslySetInnerHTML={{ __html: layoutStyle}} />
				<Layout>
					<Header>
						<h1 style={{textAlign: 'center', color: '#fff'}}>{title}</h1>
					</Header>
					<Content>
						<ComponentsView 
							layouts={header}
							dispatch={dispatch}
							position={'header'}
							/>
					</Content>
					<Footer style={{ background: '#e7e7e7'}}>
						<ComponentsView 
							layouts={footer}
							dispatch={dispatch}
							position={'footer'}
						/>
					</Footer>
				</Layout>
			</div>
		)
	}
}