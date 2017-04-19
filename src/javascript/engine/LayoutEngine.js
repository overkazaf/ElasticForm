import {
	Row,
	Col,
	Layout,
	Icon,
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

export default
class LayoutEngine {
	static renderLayout(page = {}, dispatch) {
		let {
			name,
			title,
			layouts,
		} = page;

		return (
			<div className="form-view">
      	<style dangerouslySetInnerHTML={{ __html: layoutStyle}} />
	      <Layout>
	        <Header>
	        	<h1 style={{textAlign: 'center', color: '#fff'}}>{title}</h1>
	        </Header>
	        <Content>
	        	{ LayoutEngine.execRender(layouts, dispatch) }
	        </Content>
        </Layout>
      </div>
		)
	}

	static execRender(layouts = [], dispatch = () => {}) {
		let gridLayout = layouts.map(layout => layout.grid);

		let handleLayoutChange = (layouts) => {
			dispatch({
				type: 'UPDATE_LAYOUTS',
				payload: layouts,
			})
		}

		return (
			<ReactGridLayout 
				className="layout" 
				layout={gridLayout}
				rowHeight={40} 
				width={960}
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
	      		} = component;

	      		return (
	      			<div key={grid.i} className="draggable-item">
			          <span className="ctrl">
			        		<i><Icon type="edit" /></i><i><Icon type="delete" /></i>
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