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
			position: 'relative',
			width: '960px', 
			margin: '20px auto',
			padding: '10px',
			border: '2px solid #ccc',
			borderRadius: '5px'
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
					    addonBefore: "数量",
					    addonAfter: "只",
					    prefix: "",
					    subfix: "",
	  					defaultValue: 0,
	  					value: 1,

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					style: {
	  					},
						eventList: [
						]
					},
				},
				{
					key: 'comp1',
					type: 'IFInputNumber',
					props: {
						id: 'comp1',
					    name: 'comp1',
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
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					style: {
	  					},
						eventList: [
							{
								eventType: 'onChange',
								options: {
									action: 'SetToTarget',
									params: ['comp1', 'comp2'],
									expression: '${comp1}*${comp2}',
									target: ['comp3']
								}
							}
						]
					},
				},
				{
					key: 'comp2',
					type: 'IFInputNumber',
					props: {
						id: 'comp2',
					    name: 'comp2',
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
	  					ctrlType: 'double',
						eventList: [
							{
								eventType: 'onChange',
								options: {
									action: 'SetToTarget',
									params: ['comp1', 'comp2'],
									expression: '${comp1}*${comp2}',
									target: ['comp3']
								}
							}
						],
					},
				},
				{
					key: 'comp3',
					type: 'IFInputNumber',
					props: {
						id: 'comp3',
					    name: 'comp3',
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
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					ctrlType: 'double',
	  					style: {},
						eventList: [
						]
					},
				},
				
				{
					key: 'comp20',
					type: 'IFInputNumber',
					props: {
						id: 'comp20',
					    name: 'comp20',
					    addonBefore: "单价",
					    addonAfter: "元",
					    prefix: "单价",
					    subfix: "元",
	  					defaultValue: "0.00",
	  					value: 88.88,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],


	  					style: {},
	  					ctrlType: 'double',
						eventList: [
							{
								eventType: 'onChange',
								options: {
									action: 'SetToTarget',
									params: ['comp20', 'comp21', 'comp31'],
									expression: '${comp20}*${comp21}*(100-${comp31})/100',
									target: ['comp41']
								}
							}
						],
					},
				},
				{
					key: 'comp21',
					type: 'IFInputNumber',
					props: {
						id: 'comp21',
					    name: 'comp21',
					    addonBefore: "采购数量",
					    addonAfter: "个",
					    prefix: "单价",
					    subfix: "元",
	  					defaultValue: 1,
	  					value: 1,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'null',
	  					filterRules: [],


	  					style: {},
	  					ctrlType: 'double',
						eventList: [
							{
								eventType: 'onChange',
								options: {
									action: 'SetToTarget',
									params: ['comp20', 'comp21', 'comp31'],
									expression: '${comp20}*${comp21}*(100-${comp31})/100',
									target: ['comp41']
								}
							}
						],
					},
				},
				{
					key: 'comp31',
					type: 'IFInputNumber',
					props: {
						id: 'comp31',
					    name: 'comp31',
					    addonBefore: "折扣",
					    addonAfter: "%",
	  					defaultValue: "0.00",
	  					value: 0,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

	  					ctrlType: 'double',
	  					style: {},
						eventList: [
							{
								eventType: 'onChange',
								options: {
									action: 'SetToTarget',
									params: ['comp20', 'comp21', 'comp31'],
									expression: '${comp20}*${comp21}*(100 - ${comp31})/100',
									target: ['comp41']
								}
							}
						]
					},
				},
				{
					key: 'comp41',
					type: 'IFInputNumber',
					props: {
						id: 'comp41',
					    name: 'comp41',
					    addonBefore: "总金额",
					    addonAfter: "元",
					    prefix: "总价",
					    subfix: "元",
	  					defaultValue: "0.00",
	  					value: 0,

	  					visibility: 1,
	  					locked: 0,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

	  					ctrlType: 'double',
	  					style: {},
						eventList: [
						]
					},
				},
				{
					key: 'comp4',
					type: 'IFDropdown',
					props: {
						id: 'comp4',
					    name: 'comp4',
					    label: "费用类型",
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
	  					ctrlType: 'dropdown',
						eventList: [],
					},
				},
				{
					key: 'comp5',
					type: 'rangePicker',
					props: {
						id: 'comp5',
					    name: 'comp5',

					    label: "==== 房租 ====",
	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					style: {},
	  					baseData: [
	  						{label: '水费', value: 1},
	  						{label: '电费', value: 2},
	  						{label: '网费', value: 3},
	  					],
	  					ctrlType: 'dropdown',
						eventList: [],
					},
				},
				{
					key: 'comp6',
					type: 'treeSelect',
					props: {
						id: 'comp6',
					    name: 'comp6',

					    label: "==== 房租 ====",
	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					style: {},
	  					baseData: [
	  					],
	  					ctrlType: 'dropdown',
						eventList: [],
					},
				},
				{
					key: 'comp7',
					type: 'IFButton',
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
	  					ctrlType: 'dropdown',
						eventList: [
							{
								eventType: 'onClick',
								options: {
									action: 'ShowOrHide',
									params: [],
									expression: null,
									target: ['comp0', 'comp5']
								}
							}
						],
					},
				},
				{
					key: 'comp8',
					type: 'IFButton',
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
	  					ctrlType: 'dropdown',
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
					key: 'kkkkkk',
					type: 'RadioGroup',
					props: {
						id: 'kkkkkk',
						label: '',
						value: 1,
						baseData: [
							{name: '男', value: 1},
							{name: '女', value: 2},
						]
					}
				},
				{
					key: 'comp12',
					type: 'editableTable',
					props: {
						id: 'comp12',
						name: 'comp12',

					    label: "==== 房租 ====",
	  					defaultValue: "0",
	  					value: 0,

	  					visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: 'DROP_DOWN',
	  					filterRules: [],

	  					style: {},
	  					baseData: [
	  						{label: '水费', value: 1},
	  						{label: '电费', value: 2},
	  						{label: '网费', value: 3},
	  					],
	  					ctrlType: 'dropdown',
						eventList: [],
					},
				}
			],
		},
		footer: {
			components: [
				{
					key: 'comp10',
					type: 'submit',
					props: {
						id: 'comp10',
						name: 'comp10',
					    label: "提交",

					    visibility: 1,
	  					locked: 1,
	  					mustInput: 1,
	  					needToSum: 0,
	  					lookUpType: null,
	  					lookUpStretagy: null,
	  					filterRules: [],

						eventList: [
							{
								eventType: 'onClick',
								options: ['comp1', 'comp2']
							}
						],
					},
				}
			],
		}
	}
};

export default pageJson;