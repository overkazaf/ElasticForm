import {
	Row,
	Col,
	Layout,
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

let handleColClick = (...args) => {
	console.log('handleColClick', ...args);
};


export default
class LayoutEngine {
	static renderLayout(page) {
		let {
			name,
			layouts,
		} = page;

		return (
			<div className="form-view" 
      >
      <style dangerouslySetInnerHTML={{ __html: layoutStyle}} />
      <Layout>
        <Header>
        	<h1 style={{textAlign: 'center', color: '#fff'}}>{'表单名'}</h1>
        </Header>
        <Content>
        	{
						layouts.map((layout) => {
							return LayoutEngine.renderRow(layout);
						})
					}
        </Content>
        
        </Layout>
      </div>
		)
	}

	static renderRow(layout = {}) {
		let {
			name,
			components,
		} = layout;
		
		let gridLayout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, isResizable: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 8, minW: 2, maxW: 4, isResizable: true},
      {i: 'c', x: 4, y: 0, w: 5, h: 2, isResizable: true}
    ];

		switch(name) {
			case 'r1-c4': {
				return (
					<Row className="if-row-component" gutter={16}>
						{
							[1, 2, 3, 4].map((item, index) => {
								let component = components[index];
								if (!component) return (<div></div>);
								
								let {
									type,
									props,
								} = component;

								return (
									<Col 
										type="flex"
										className="if-col-component"
										onClick={handleColClick}
										span={6}>
										
										<div className="tools">
											<span>操作</span>
										</div>
										
										{ComponentFactory.create(type, props)}
									</Col>
								)
							})
						}
					</Row>
			  )
			}
			case 'r1-c5': {
				return (
					<GL />
				)
			}
			case 'r1-c3': {
				return (
					<ReactGridLayout 
						className="layout" 
						layout={gridLayout}
						cols={24}
						rowHeight={30} 
						width={960}
						isResizable={true}
						isDraggable={false}
						onResizeStart={() => console.log}
						draggableHandle=".resize-handler"
						onLayoutChange={(...args) => console.log.bind(this, ...args)}
					>
			        <div key={'a'} className="draggable-item">
			        	<span className="text">
			        		A
			        	</span>
			        	<span className="resize-handler"></span>
			        </div>
			        <div key={'b'} className="draggable-item">
			        	<span className="text"></span>
			        	<span className="resize-handler"></span>
			        </div>
			        <div key={'c'} className="draggable-item">c</div>
		      </ReactGridLayout>
				)
			}

			default:
				return (
					<div>EmptyRow</div>
				)
		}
	}
}