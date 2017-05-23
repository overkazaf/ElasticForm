let structure = {
  id: 'IntelliForm-00001', // 设计器系统生成的id
  key: 'IntelliForm-00001', // 可自定义的id，用于后续做表单间的关联
  name: 'form1',　// 表单名字
  title: '测试表单一', // 表单标题
  description: '测试表单一',  //表单描述
  formType: 0, //　表单类型
  pageIndex: 1, // 当前页索引
  theme: 'default', //　主题
  creater: 'u-001', // 创建者id
  createTS: 1488133454806, //　创建时间
  updateTS: 1488133494806, //　更新时间
  style: {
    width: 960, //　表单样式，主要定义一些宽高背景色等
  },
  nextId: 'IntelliForm-00002', // 下推表单ID
  plugIns: [],　//　插件列表
  basicProps: {}, // 基础设置信息(表单级别)
  dataSource: [], //　数据源信息(表单级别)
  eventList: [ // 事件列表
    {
      eventType: 'onLoad',
      options: {
        action: 'BringDataSource',
        expression: 'LOOKUP',
        target: ['comp4']
      }
    }
  ],
  advanced: {}, //　高级设置信息
  layouts: { // 布局信息，　主要分为表头，表体和表足三个部分
    header: [
      {
        grid: {i: 'h1', x: 0, y: 0, w: 2, h: 9, minH: 9}, // 布局信息
        component: { //　组件信息
          type: 'IFLabel', 
          props: { 
            id: 'Label_1', 
            name: '标签一',
            description: '',
            ctrlType: 'Label',
            // width: '',
            // height: '',
            // x: '',
            // y: '',
            basicProps: {
              componentTheme: {
                fontColor: {
                  value: '',
                },
                backgroundColor: {
                  value: '',
                },
                size: {
                  value: 'large',
                },
                theme: {
                  value: 'primary',
                },
                layoutStyle: {
                  value: 'vertical',
                },
              },
              formStatus: {
                visibility: {
                  value: true,
                },
                locked: {
                  value: false,
                },
                mustInput: {
                  value: false,
                },
                autoSum: {
                  value: false,
                },
              },
              inputDecoration: {
                addonBefore: {
                  value: '',
                },
                addonAfter: {
                  value: '',
                },
                prefix: {
                  value: '',
                },
                suffix: {
                  value: '',
                },
              },
              inputValue: {
                carry: {
                  value: '',
                },
                label: {
                  value: 'abcd',
                },
                link: {
                  value: '#',
                },
                linkTarget: {
                  value: '',
                },
                placeholder: {
                  value: '',
                },
                defaultValue: {
                  value: '',
                },
                value: {
                  value: '',
                },
              },
              fontStyles: {
                fontStyle: {
                  isMultiple: true,
                  values: '',
                  // values: [
                  //   'fontWeight:bold',
                  //   'fontStyle:italic',
                  //   'textDecoration:underline'
                  // ].join('$'),
                },
                fontSize: {
                  value: '12px',
                },
                fontFamily: {
                  value: 'sans serif',
                },
                textAlign: {
                  value: 'left',
                },
                lineHeight: {
                  value: 1.5,
                }
              },
            },
            dataSource: [],
            filterRules: {},
            eventList: [],
            validations: {},
          },
        }
      },
    ],
    body: [],
    footer: [],
  }
};