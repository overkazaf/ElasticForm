let layouts = {
  header: [
    {
      grid: {i: 'h1', x: 0, y: 0, w: 2, h: 9, minH: 9},
      component: {
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
                values: [
                  'fontWeight:bold',
                  'fontStyle:italic',
                  'textDecoration:underline'
                ].join('$'),
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
};

let data = {
  panes: [
    {
      id: 'IntelliForm-00001', // 设计器系统生成的id
      key: 'IntelliForm-00001', // 可自定义的id
      name: 'form1',　// 名字
      title: '测试表单一',
      description: '测试表单一',
      formType: 0,
      pageIndex: 1,
      theme: 'default',
      creater: 'u-001', // 创建者名字
      createTS: 1488133454806,
      style: {
        width: 960,
      },
      nextId: 'IntelliForm-00002', // 下推表单
      plugIns: [],
      basicProps: {},
      dataSource: [],
      eventList: [
        {
          eventType: 'onLoad',
          options: {
            action: 'BringDataSource',
            expression: 'LOOKUP',
            target: ['comp4']
          }
        }
      ],
      advanced: {},
      layouts,
    },
  ]
};


export default data;