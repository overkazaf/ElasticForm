let pageJson = {
	id: '123',
	name: '表单名',
	label: '测试表单',
	creater: 'u-001',
	createTS: 1488133454806,
	style: "width: 960px; height: 400px; margin: 20px auto; border: 1px solid #ccc;",
	actions: [
		{
			name: 'onLoad',
			action: 'bringBase',
			params: ['comp4'],
			operator: 'LOOKUP',
			target: 'comp4'
		}
	],
	header: {
		compKeys: ['comp1', 'comp2', 'comp3'],
		components: [
			{
				key: 'comp1',
				type: 'input',
				props: {
					id: 'comp1',
				    name: 'comp1',
				    label: "数量",
  					defaultValue: "0",
  					value: 1,
  					ctrlType: 'int',
  					style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
					actions: [
						{
							name: 'onUpdate',
							action: 'setToTarget',
							params: ['comp1', 'comp2'],
							operator: 'MUL',
							target: 'comp3'
						}
					]
				},
				children: []
			},
			{
				key: 'comp2',
				type: 'input',
				props: {
					id: 'comp2',
				    name: 'comp2',
				    label: "单价",
  					defaultValue: "0.00",
  					value: 3.44,
  					style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
  					ctrlType: 'double',
					actions: [
						{
							name: 'onUpdate',
							action: 'setToTarget',
							params: ['comp1', 'comp2'],
							operator: 'MUL',
							target: 'comp3'
						}
					],
				},
				children: []
			},
			{
				key: 'comp3',
				type: 'input',
				props: {
					id: 'comp3',
				    name: 'comp3',
				    label: "总价",
  					defaultValue: "0.00",
  					value: 3.44,
  					ctrlType: 'double',
  					style: 'border: 2px solid #f00;color: #666; background: #ccc;padding: 5px;',
  					locked: true,
  					readOnly: true,
					actions: [
					]
				},
				children: []
			},
			{
				key: 'comp4',
				type: 'select',
				props: {
					id: 'comp4',
				    name: 'comp4',
				    label: "房租",
  					defaultValue: "0",
  					value: 0,
  					style: 'border: 2px solid #ddd;color: #666;padding: 5px;',
  					ctrlType: 'dropdown',
					actions: [],
				},
				children: []
			}
		]
	},
	body: {
		compKeys: ['comp3'],
		components: [],
	},
	footer: {
		compKeys: ['comp4'],
		components: [],
	}
}

renderPage(pageJson);

function renderPage(page) {
	renderSections(page.id, page);
	bindEvents(page.id, page);
}

function $(id) {
	return document.querySelector('[id=\'' + id+'\']');
}

function bindEvents(pageId, page) {
	var $page = $(pageId);
	var components = page.header.components;
	toArray(components).forEach(function(item) {
		var $el = $(item.key);
		var actions = JSON.parse($el.getAttribute('actions'));

		toArray(actions).forEach(function(ac) {
			console.log(ac);
			if (ac.name === 'onUpdate') {
				observeAction($el, 'onUpdate', ac);
			}
		});
	});

	var pageActions = JSON.parse($page.getAttribute('actions'));

	toArray(pageActions).map(function(ac) {
		fetch('baseDataId').then(function(data) {
			var info = data.data;
			var $target = $(ac.target);
			for (var i = 0, l = info.length; i < l; i++) {
				var opt = el({'type': 'option'}, {'id': info[i].name, 'text':info[i].name,  'value': info[i].value}, []);
				append(opt, $target);
			}
		});
	});
}

function fetch(url) {
	return new Promise(function(resolve, reject) {
		resolve({
			'data': [
				{'name': '水费', 'value': '0'},
				{'name': '电费', 'value': '1'},
				{'name': '网费', 'value': '2'},
				{'name': '租金', 'value': '3'},
				{'name': '物业费', 'value': '4'},
			]
		});
	});
}

function toArray(obj) {
	return [].slice.call(obj);
}

function observeAction($el, type, option) {
	$el.addEventListener('keyup', function (ev) {
		if (ev.target.value === '') return;
		var params = option.params;
		var refElsValues = params.map(function(el) {
			return $(el).value;
		});

		let ret = 1;
		while (refElsValues.length) {
			ret *= parseFloat(refElsValues.shift())
		}

		$(option.target).setAttribute('value', ret);
	});
}

function renderSections(pageId, page) {
	doRender(pageId, page);
}

function el(node, props, children) {
	var oEl = document.createElement(node.type);
	for (var propName in props) {
		var propValue = props[propName] !== null && typeof props[propName] === 'object' ? JSON.stringify(props[propName]): props[propName];
		if (propName === 'text') {
			oEl.innerText = propValue;
		} else {
			oEl.setAttribute(propName, propValue);
		}
		
	}

	if (children) {
		for (var i = 0, l = children.length; i< l; i++) {
			var c = children[i];
			append(el(c, c.props, c.children), oEl);
		}
	}

	return oEl;
}

function append(el, parent) {
	var parent = parent || document.body;
	return parent.appendChild(el);
}

function prepend(el, parent) {
	var parent = parent || document.body;
	return parent.insertBefore(el, parent.firstChild);
}

function doRender(pageId, json) {

	var $page = el({'type': 'div'}, {'id': pageId}, json.header.components);
	prepend(el({'type': 'h1'}, {'text': json.name}),$page)

	$page.setAttribute('style', json.style);
	$page.setAttribute('actions', JSON.stringify(json.actions));

	append($page);
}
