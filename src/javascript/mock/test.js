const pageJson = {
	code: 0,
	errorMsg: '',
	data: {
		id: 'IntelligentForm-00000011',
		name: '表单名',
		label: 'XXX公司物料采购单',
		creater: 'u-001',
		createTS: 1488133454806,
		contentMinHeight: 450,
		style: {
			width: '960px', 
			margin: 'auto',
			padding: '3px',
		},
		eventList: [
			{
				eventType: 'onLoad',
				options: {
					action: 'BringBase',
					params: [],
					expression: 'LOOKUP',
					target: ['comp4']
				}
			}
		],
		header: {
			components: [
				{
					key: 'comp0',
					type: 'IFInputNumber',
					props: {
						id: 'comp0',
					    name: 'comp0',
					    label: '商品数量',
					    ctrlType: 'IFInput',
					    placeholder: "输入数量呗",
					    addonBefore: "数量",
					    addonAfter: "只",
					    prefix: "",
					    subfix: "",
	  					defaultValue: 0,
	  					value: 1,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onKeyUp',
								options: {
									action: 'UpdateValue',
									params: [],
									expression: '',
									target: ['comp0'],
								},
							}
						]
					},
				},
				{
					key: 'comp3',
					type: 'IFInputNumber',
					props: {
						id: 'comp31',
					    name: 'comp3',
					    label: '商品数量',
					    addonBefore: "数量",
					    addonAfter: "个",
					    prefix: "数量",
					    subfix: "个",
	  					defaultValue: "0",
	  					value: 1,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					ctrlType: 'IFInput',
	  					filterRules: [],

	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onChange',
								options: {
									action: 'SetToTarget',
									params: ['comp3', 'comp4'],
									expression: '${comp3}*${comp4}',
									target: ['comp5']
								}
							}
						]
					},
				},
				{
					key: 'comp4',
					type: 'IFInputNumber',
					props: {
						id: 'comp4',
					    name: 'comp4',
					    label: '商品单价',
					    addonBefore: "单价",
					    addonAfter: "元",
					    prefix: "单价",
					    subfix: "元",
	  					defaultValue: "0.00",
	  					value: 3.44,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],


	  					style: {},
	  					ctrlType: 'IFInput',
						eventList: [
							{
								eventType: 'onChange',
								options: {
									action: 'SetToTarget',
									params: ['comp3', 'comp4'],
									expression: '${comp3}*${comp4}',
									target: ['comp5']
								}
							}
						],
					},
				},
				{
					key: 'comp5',
					type: 'IFInputNumber',
					props: {
						id: 'comp5',
					    name: 'comp5',
					    label: '商品总价',
					    addonBefore: "总价",
					    addonAfter: "元",
					    prefix: "总价",
					    subfix: "元",
	  					defaultValue: "0.00",
	  					value: 3.44,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

	  					ctrlType: 'IFInput',
	  					style: {},
						eventList: [
						]
					},
				},
				{
					key: 'comp666',
					type: 'IFTreeSelect',
					props: {
						id: 'comp666',
					    name: 'comp666',
					    label: "房租",

	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

	  					style: {},
	  					baseData: [
	  					],
	  					ctrlType: 'IFTree',
						eventList: [],
					},
				},
				{
					key: 'comp676',
					type: 'IFRangePicker',
					props: {
						id: 'comp676',
					    name: 'comp676',
					    label: '起始时间',

	  					defaultValue: "0",
	  					value: '2016-02-03 ~ 2017-04-05',

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

	  					style: {},
	  					baseData: [
	  					],
	  					ctrlType: 'IFDate',
						eventList: [],
					},
				},
				{
					key: 'comp67336',
					type: 'IFUploadImage',
					props: {
						id: 'comp67336',
					    name: 'comp67336',

					    label: '图片',

	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

	  					style: {},
	  					baseData: [
	  					],
	  					ctrlType: 'IFDate',
						eventList: [],
					},
				},
				{
					key: 'comp611136',
					type: 'IFCheckBoxGroupVertical',
					props: {
						id: 'comp611136',
					    name: 'comp611136',
					    label: '多选',
	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

	  					style: {},
	  					baseData: [
	  					],
	  					ctrlType: 'IFDate',
						eventList: [],
					},
				},
				{
					key: 'comp1111',
					type: 'IFRadioGroupVertical',
					props: {
						id: 'comp1111',
					    name: 'comp1111',
					    label: '按钮',
					    theme: 'dashed',
					    ghost: 0,
					    label: 'SetToTarget 222',
					    ctrlType: 'IFButton',

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],
	  					style: {
	  					},
						eventList: [
						]
					},
				},
				{
					key: 'comp1',
					type: 'IFButtonNormal',
					props: {
						id: 'comp1',
					    name: 'comp1',
					    label: '按钮',
					    theme: 'dashed',
					    ghost: 0,
					    label: 'SetToTarget 222',
					    ctrlType: 'IFButton',

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],
	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onClick',
								options: {
									action: 'SetToTarget',
									params: ['comp0'],
									expression: '222',
									target: ['comp0'],
								},
							}
						]
					},
				},
				{
					key: 'comp6',
					type: 'IFDropdown',
					props: {
						id: 'comp6',
					    name: 'comp6',
					    label: "费用类型",
					    theme: 'default',
					    ctrlType: 'IFDropdown',

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					defaultValue: "0",
	  					value: 0,
	  					style: {},
	  					baseData: [
	  						{label: '水费', value: 0},
	  						{label: '电费', value: 1},
	  						{label: '网费', value: 2},
	  						{label: '清洁费', value: 3},
	  						{label: '油费', value: 4},
	  						{label: '租金', value: 5},
	  					],
	  					filterRules: [],
	  					style: {
	  					},
						eventList: [
						]
					},
				},{
					key: 'comp7',
					type: 'IFButtonNormal',
					props: {
						id: 'comp7',
					    name: 'comp7',
					    label: "显示/隐藏",
	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [
	  						{'value': '>1'}
	  					],

	  					style: {},
	  					baseData: [
	  						
	  					],
	  					ctrlType: 'IFButton',
						eventList: [
							{
								eventType: 'onClick',
								options: {
									action: 'ShowOrHide',
									params: [],
									expression: null,
									target: ['comp0']
								}
							}
						],
					},
				},
				{
					key: 'comp8',
					type: 'IFButtonNormal',
					props: {
						id: 'comp8',
					    name: 'comp8',

					    label: "锁定/解锁",
	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [
	  						{'value': '>1'}
	  					],

	  					style: {},
	  					baseData: [
	  					],
	  					ctrlType: 'IFButton',
						eventList: [
							{
								eventType: 'onClick',
								options: {
									action: 'LockOrUnlock',
									params: [],
									expression: null,
									target: ['comp0']
								}
							}
						],
					},
				}
			]
		},
		body: {
			components: [
				{
					key: 'compA',
					type: 'IFSmartTable',
					props: {
						id: 'compA',
					    name: 'compA',
					    theme: 'default',
					    label: 'Append',
					    ctrlType: 'IFTable',

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],
	  					style: {
	  					},
						eventList: [
						]
					},
				},
			],
		},
		footer: {
			components: [
				{
					key: 'comp2',
					type: 'IFButtonNormal',
					props: {
						id: 'comp2',
					    name: 'comp2',
					    theme: 'primary',
					    label: 'CommitForm',
					    ctrlType: 'IFButton',
					    ghost: 0,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 0,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],
	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onClick',
								options: {
									action: 'CommitForm',
									params: [],
									expression: 'EXEC_VALIDATE',
									target: [],
								},
							}
						]
					},
				},
			],
		}
	}
};

export default pageJson;