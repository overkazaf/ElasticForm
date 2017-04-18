import {
	Row,
	Col,
} from 'antd';

import ComponentFactory from '../factory/ComponentFactory.js';

export default
class LayoutEngine {
	static renderLayout(page) {
		let {
			name,
			layouts,
		} = page;

		return (
			<div>
			{
				layouts.map((layout) => {
					return LayoutEngine.renderRow(layout);
				})
			}
			</div>
		)
	}

	static renderRow(layout = {}) {
		let {
			name,
			components,
		} = layout;
		
		console.log('components in renderRow', components);

		switch(name) {
			case 'r1-c4': {
				return (
					<Row gutter={16}>
						{
							[1, 2, 3, 4].map((item, index) => {
								let component = components[index];
								if (!component) return (<div></div>);
								
								let {
									type,
									props,
								} = component;

								return (
									<Col span={6}>
										{ComponentFactory.create(type, props)}
									</Col>
								)
							})
						}
					</Row>
			  )
			}

			default:
				return (
					<div>EmptyRow</div>
				)
		}
	}
}