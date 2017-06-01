/**
 * [pickTinyModel 将多余的页面信息剔除，生成最精简的页面结构json]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2017-06-01T14:52:37+0800
 * @param    {[type]}                     json [description]
 * @return   {[type]}                          [description]
 */
function pickTinyModel(json) {
	let {
		layouts: {
			header,
			body,
			footer,
		},
	} = json;

	[header, body, footer] = [header, body, footer].map((layout) => {
		return layout.map((item) => {
			let {
				grid,
				component: {
					type,
					props: {
						basicProps,
						eventList,
						dataSource,
						filterRules,
					},
				},
			} = item;

			let reduceProps = reduceBasicProps(basicProps);

			return {
				grid,
				component: {
					type,
					props: {
						basicProps: reduceProps,
						eventList,
						dataSource,
						filterRules,
					},
				},
			}
		});
	});

	let newJson = Object.assign(json, {
		layouts: {
			header,
			body,
			footer,
		},
	});

	return newJson;
}

function reduceBasicProps(basicProps) {
	let targetProps = {};
	[
		'componentTheme',
		'formStatus',
		'inputDecoration',
		'inputValue',
		'fontStyles',
	].map((key) => {
		let current = basicProps[key];
		let target = {};
		for (let subKey in current) {
			let currentObj = current[subKey];
			target[subKey] = typeof currentObj.values !== 'undefined' ? {
				values: currentObj.values,
			} : {
				value: currentObj.value,
			};
		}

		targetProps[key] = target;
	});

	return targetProps;
}


export default {
	pickTinyModel,
};