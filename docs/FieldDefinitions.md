<!--
author: 不惑-农佳武
date: 2017-02-25
title: 工作流表单设计器设计文档 v1.0.0 （二、数据模型定义）
tags: 系统设计
category: 其它 
status: publish 
summary: 工作流表单设计器设计文档 v1.0.0，参考金蝶K3 BOS的系统实现对工作流表单设计器的功能进行分析设计
-->

##表单
举一个最基础的表单数据结构的样例：

```
<Form>
	<FormHead>
		<Component
			key="comp1"
			name="name"
			label="用户名"
			ctrlType="text"
			mustInput=true
			...
		/>
		
		<Component
			key="comp2"
			name="date"
			label="日期"
			ctrlType="date"
			mustInput=true
			...
		/>
		
		<Component
			key="comp2"
			name="dropdown"
			label="费用"
			ctrlType="dropdown"
			mustInput=true
			...
		/>
	</FormHead>
    <FormBody>
    	<SmartTable
			key="comp3"
			name="formbody1"
			label="表体"
			ctrlType="formbody"
			mustInput=true
			autoCalculate=true
			...
		>
		
		<TableComponent
		>
			<THead>
				<TH>日期</TH>
				<TH>单价</TH>
				<TH>数量</TH>
				<TH>总价</TH>
			</THead>
			<TBody>
				<TR>
					<TD>2017-02-23</TD>
					<TD>9.00</TD>
					<TD>3</TD>
					<TD>27.00</TD>
				</TR>
				<TR>
					<TD>2017-02-24</TD>
					<TD>94.00</TD>
					<TD>30</TD>
					<TD>2,820.00</TD>
				</TR>
			</TBody>
			
			<TFoot>
				<TF colspan="3">
					总价
				</TF>
				<TF>
					￥2,847.00
				</TF>
			</TFoot>
		</TableComponent>
		
		</SmartTable>
    </FormBody>
    <FormFoot>
    	<Submit />
    </FormFoot>
</Form>
```

###表头
用于放置普通组件，SmartTable组件无法放置入内

###表体
用于放置生成SmartTable组件，可以为多个，SmartTable组件具备自运算功能，并可以关联到同一层级的其它SmartTable组件中

###表足
用于放置提交/重置按钮

==================

##输出的数据模型
由IF生成的最终数据模型如下
```
{
	formId: '123',
	formName: '表单名',
	creater: 'u-001',
	createTS: 1488133454806,
	formHead: {
		compKeys: ['comp1', 'comp2'],
		components: [
			{
				key: 'comp1',
				props: {
				    name: 'comp1',
				    label: "薪水",
  					defaultValue: "0.00",
  					theme: "default",
  					ctrlType: 'double',
  					visibility: 1,
  					level: 1,
  					locked: 1,
  					mustInput: 1,
  					needToSum: 0,
  					lookUpType: 0,
  					lookUpStretagy: 'none',
  					refKeys: [],
					styles: [],
					actions: [],
					actionRules: [],
					validations: [],
					filterRules: [],
					children: [],
				}
			},
			...
		]
	},
	formBody: {
		compKeys: ['comp3'],
		components: [...],
	},
	formFoot: {
		compKeys: ['comp4'],
		components: [...],
	},
}
```

##组件
```
<Component
  key="salary"
  name="salary"
  label="薪水"
  defaultValue="123"
  theme="default"
  level=1
  styles={border:2, borderColor:'#ddd'}
  ctrlType="ctrlId"
  validations=[{
	name: "minValue",
	params: [2.00]
  },
  {
	name: "maxValue",
	params: [9999.00]
  },
  {
	name: "isDigit",
	params: null
  }]
  events=[
  	{"formOnload": "id0"},
  	{"onInit": "id1}",
  	{"onCtrlUpdate": "id2"},
  	{"onSaved": "id3"}
  ]
  eventRules=[
  	{"onSaved": "ruleId1", "ruleId2", "ruleId3"}, 
  	{"onInit": "ruleId4"}
  ]
  refKeys=[
  	"refId1", "refId2", "refId3", "refId4", "refId5" 
  ]  
  visibility=11011101
  locked=1111111
  mustInput=1
  needToSum=1
  lookUpType=1
  lookUpStretagy={{'dropdown': 'listId'}}
  filterRules=[
  	"filterRule1"
  ]
  children=[
  	"cKey1", "cKey2"
  ]
/>
```

{
	code,
	message,
	data: {
		key,
		name,
		components: [
			{
				key: salary,
				name: 'salaly'
				value: 123,
			}
		],
		events,
	}
}


##属性说明

| 属性 | 值类型 | 说明 |
|:------|:------|:----------|
|key| string| 字段id，在同一表单内唯一|
|name| string| 字段名称，类似于form中的name属性|
|label| string| 字段标签，描述字段类似|
|defaultValue| string| 字段默认值|
|theme| string| 字段主题|
|styles| array| 字段样式，保含位置、颜色、大小等信息|
|ctrlType| string| 字段类型|
|validations| array| 字段校验规则，如果存在，则在填写表单时候弹出警告提示|
|actions| array| 事件钩子，如果存在，则会在一定的条件下触发事件的执行，执行的前提是actionRules里定义的事件触发规则|
|actionRules| array| 事件规则，与事件钩子的id相对应，如果存在监听事件，则首先会找到是否存在事件规则，通过后才去触发事件的执行|
|level| number| 组件层级|
|refKeys| array| 关联字段id|
|visibility| number| 可见性，以掩码形式给出，只保证新建、审核下的配置|  
|locked| number| 锁定性，同上，以掩码形式给出|
|mustInput| number| 是否为必录|
|needToSum| number| 是否合计，用于单据体内的字段|
|lookUpType| number| 查询类型，0为默认，1为基础资料，2为自定义|
|lookUpStretagy| object| 查询策略，如 {'dropdown': 'listId', 'limits': 'ruleId'}|
|filterRules| array| 字段过滤的过滤规则，用于进行数据的筛选|
|children| array| 子元素列表|