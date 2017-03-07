<!--
author: 不惑-农佳武
date: 2017-02-25
title: 工作流表单设计器设计文档 v1.0.0 （四、事件列表）
tags: 系统设计
category: 其它 
status: publish 
summary: 工作流表单设计器设计文档 v1.0.0，参考金蝶K3 BOS的系统实现对工作流表单设计器的功能进行分析设计
-->

##事件类型
* ```表单事件```
* ```字段事件```
* 插件事件

v1.0.0版本仅提供表单事件和字段事件

---------------------------------------
###表单事件
+ 表单加载事件    ```onLoad```
+ 表单保存前置事件 ```onBeforeSave```
+ 表单保存后置事件 ```onAfterSave```
+ 表单删除前置事件 ```onBeforeDelete```
+ 表单删除后置事件 ```onAfterDelete```
+ 表单审核前置事件 ```onBeforeVerify```
+ 表单审核后置事件 ```onAfterVerify```


|事件类型|事件名|参数|描述|
|::|::|::|
|表单加载事件|onLoad| refKeys: array,  callback: function||


###字段事件
+ 携带基础资料 ```onBringBase```
+ 计算 ```onCalc```
+ 锁定字段 ```onLock```
+ 字段显示|隐藏 ```onShow|onHide```
+ 校验合法性 ```onValidate```
+ 校验相等性 ```onValidateEquality```
+ 设置值到指定字段 ```onSetToTarget```

###插件事件
+ 表单保存前置事件 ```onBeforeSave```
+ 表单保存后置事件 ```onAfterSave```
+ 表单删除前置事件 ```onBeforeDelete```
+ 表单删除后置事件 ```onAfterDelete```

##事件参数

```
onXXX = function ([currentKey, refsKeys], callback) {
	// 在这里处理回调事件，可以对关联元素refKeys进行操作
}
```


##Demo

```
<Form
	key="form"
	name="form"
	label="表单主体"
	actions=[
		{
			name: "onLoad",
			callbacks: [
				{
					refKeys: ['fee1'],
					actionRules: null,
					actions: [
						"bringBase"
					]					
				}
			]
		}
	]	
/>
```

```
<Component
	key="fee1"
	name="fee1"
	label="费用"
	validations=[
		{
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
		},
	]
	actions=[
		{
			name: "onBringBase",
			callbacks: [
				{
					refKeys: ["fee2"],
					actionRules: null,
					actions: [
						"filterValue",
						"setValueToTarget"
					]					
				}
			]
		}
	]
/>
```

(0303和纯庆讨论后，审核相关的事件本期暂时可以不做，只需要处理加载、保存、值更新三类事件)