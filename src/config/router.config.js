// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard',
    // children: [
    //   // dashboard
    //   {
    //     path: '/dashboard',
    //     name: 'dashboard',
    //     redirect: '/dashboard/workplace',
    //     component: RouteView,
    //     meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
    //     children: [
    //       {
    //         path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
    //         name: 'Analysis',
    //         component: () => import('@/views/dashboard/Analysis'),
    //         meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: [ 'dashboard' ] }
    //       },
    //       // 外部链接
    //       {
    //         path: 'https://www.baidu.com/',
    //         name: 'Monitor',
    //         meta: { title: 'menu.dashboard.monitor', target: '_blank' }
    //       },
    //       {
    //         path: '/dashboard/workplace',
    //         name: 'Workplace',
    //         component: () => import('@/views/dashboard/Workplace'),
    //         meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: [ 'dashboard' ] }
    //       }
    //     ]
    //   },

    //   // forms
    //   {
    //     path: '/form',
    //     redirect: '/form/base-form',
    //     component: RouteView,
    //     meta: { title: '表单页', icon: 'form', permission: [ 'form' ] },
    //     children: [
    //       {
    //         path: '/form/base-form',
    //         name: 'BaseForm',
    //         component: () => import('@/views/form/basicForm'),
    //         meta: { title: '基础表单', keepAlive: true, permission: [ 'form' ] }
    //       },
    //       {
    //         path: '/form/step-form',
    //         name: 'StepForm',
    //         component: () => import('@/views/form/stepForm/StepForm'),
    //         meta: { title: '分步表单', keepAlive: true, permission: [ 'form' ] }
    //       },
    //       {
    //         path: '/form/advanced-form',
    //         name: 'AdvanceForm',
    //         component: () => import('@/views/form/advancedForm/AdvancedForm'),
    //         meta: { title: '高级表单', keepAlive: true, permission: [ 'form' ] }
    //       }
    //     ]
    //   },

    //   // list
    //   {
    //     path: '/list',
    //     name: 'list',
    //     component: RouteView,
    //     redirect: '/list/table-list',
    //     meta: { title: '列表页', icon: 'table', permission: [ 'table' ] },
    //     children: [
    //       {
    //         path: '/list/table-list/:pageNo([1-9]\\d*)?',
    //         name: 'TableListWrapper',
    //         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
    //         component: () => import('@/views/list/TableList'),
    //         meta: { title: '查询表格', keepAlive: true, permission: [ 'table' ] }
    //       },
    //       {
    //         path: '/list/table-list-bak/:pageNo([1-9]\\d*)?',
    //         name: 'TableListWrapperBak',
    //         hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
    //         component: () => import('@/views/list/TableListBak'),
    //         meta: { title: '查询表格备份', keepAlive: true, permission: [ 'table' ] }
    //       },
    //       {
    //         path: '/list/basic-list',
    //         name: 'BasicList',
    //         component: () => import('@/views/list/BasicList'),
    //         meta: { title: '标准列表', keepAlive: true, permission: [ 'table' ] }
    //       },
    //       {
    //         path: '/list/card',
    //         name: 'CardList',
    //         component: () => import('@/views/list/CardList'),
    //         meta: { title: '卡片列表', keepAlive: true, permission: [ 'table' ] }
    //       },
    //       {
    //         path: '/list/search',
    //         name: 'SearchList',
    //         component: () => import('@/views/list/search/SearchLayout'),
    //         redirect: '/list/search/article',
    //         meta: { title: '搜索列表', keepAlive: true, permission: [ 'table' ] },
    //         children: [
    //           {
    //             path: '/list/search/article',
    //             name: 'SearchArticles',
    //             component: () => import('../views/list/search/Article'),
    //             meta: { title: '搜索列表（文章）', permission: [ 'table' ] }
    //           },
    //           {
    //             path: '/list/search/project',
    //             name: 'SearchProjects',
    //             component: () => import('../views/list/search/Projects'),
    //             meta: { title: '搜索列表（项目）', permission: [ 'table' ] }
    //           },
    //           {
    //             path: '/list/search/application',
    //             name: 'SearchApplications',
    //             component: () => import('../views/list/search/Applications'),
    //             meta: { title: '搜索列表（应用）', permission: [ 'table' ] }
    //           }
    //         ]
    //       }
    //     ]
    //   },

    //   // profile
    //   {
    //     path: '/profile',
    //     name: 'profile',
    //     component: RouteView,
    //     redirect: '/profile/basic',
    //     meta: { title: '详情页', icon: 'profile', permission: [ 'profile' ] },
    //     children: [
    //       {
    //         path: '/profile/basic',
    //         name: 'ProfileBasic',
    //         component: () => import('@/views/profile/basic'),
    //         meta: { title: '基础详情页', permission: [ 'profile' ] }
    //       },
    //       {
    //         path: '/profile/advanced',
    //         name: 'ProfileAdvanced',
    //         component: () => import('@/views/profile/advanced/Advanced'),
    //         meta: { title: '高级详情页', permission: [ 'profile' ] }
    //       }
    //     ]
    //   },

    //   // result
    //   {
    //     path: '/result',
    //     name: 'result',
    //     component: RouteView,
    //     redirect: '/result/success',
    //     meta: { title: '结果页', icon: 'check-circle-o', permission: [ 'result' ] },
    //     children: [
    //       {
    //         path: '/result/success',
    //         name: 'ResultSuccess',
    //         component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
    //         meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
    //       },
    //       {
    //         path: '/result/fail',
    //         name: 'ResultFail',
    //         component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
    //         meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: [ 'result' ] }
    //       }
    //     ]
    //   },

    //   // Exception
    //   {
    //     path: '/exception',
    //     name: 'exception',
    //     component: RouteView,
    //     redirect: '/exception/403',
    //     meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
    //     children: [
    //       {
    //         path: '/exception/403',
    //         name: 'Exception403',
    //         component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
    //         meta: { title: '403', permission: [ 'exception' ] }
    //       },
    //       {
    //         path: '/exception/404',
    //         name: 'Exception404',
    //         component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
    //         meta: { title: '404', permission: [ 'exception' ] }
    //       },
    //       {
    //         path: '/exception/500',
    //         name: 'Exception500',
    //         component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
    //         meta: { title: '500', permission: [ 'exception' ] }
    //       }
    //     ]
    //   },

    //   // account
    //   {
    //     path: '/account',
    //     component: RouteView,
    //     redirect: '/account/center',
    //     name: 'account',
    //     meta: { title: '个人页', icon: 'user', keepAlive: true, permission: [ 'user' ] },
    //     children: [
    //       {
    //         path: '/account/center',
    //         name: 'center',
    //         component: () => import('@/views/account/center'),
    //         meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
    //       },
    //       {
    //         path: '/account/settings',
    //         name: 'settings',
    //         component: () => import('@/views/account/settings/Index'),
    //         meta: { title: '个人设置', hideHeader: true, permission: [ 'user' ] },
    //         redirect: '/account/settings/base',
    //         hideChildrenInMenu: true,
    //         children: [
    //           {
    //             path: '/account/settings/base',
    //             name: 'BaseSettings',
    //             component: () => import('@/views/account/settings/BaseSetting'),
    //             meta: { title: '基本设置', hidden: true, permission: [ 'user' ] }
    //           },
    //           {
    //             path: '/account/settings/security',
    //             name: 'SecuritySettings',
    //             component: () => import('@/views/account/settings/Security'),
    //             meta: { title: '安全设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
    //           },
    //           {
    //             path: '/account/settings/custom',
    //             name: 'CustomSettings',
    //             component: () => import('@/views/account/settings/Custom'),
    //             meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: [ 'user' ] }
    //           },
    //           {
    //             path: '/account/settings/binding',
    //             name: 'BindingSettings',
    //             component: () => import('@/views/account/settings/Binding'),
    //             meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: [ 'user' ] }
    //           },
    //           {
    //             path: '/account/settings/notification',
    //             name: 'NotificationSettings',
    //             component: () => import('@/views/account/settings/Notification'),
    //             meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: [ 'user' ] }
    //           }
    //         ]
    //       }
    //     ]
    //   }

    //   // other
    //   /*
    //   {
    //     path: '/other',
    //     name: 'otherPage',
    //     component: PageView,
    //     meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
    //     redirect: '/other/icon-selector',
    //     children: [
    //       {
    //         path: '/other/icon-selector',
    //         name: 'TestIconSelect',
    //         component: () => import('@/views/other/IconSelectorView'),
    //         meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
    //       },
    //       {
    //         path: '/other/list',
    //         component: RouteView,
    //         meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
    //         redirect: '/other/list/tree-list',
    //         children: [
    //           {
    //             path: '/other/list/tree-list',
    //             name: 'TreeList',
    //             component: () => import('@/views/other/TreeList'),
    //             meta: { title: '树目录表格', keepAlive: true }
    //           },
    //           {
    //             path: '/other/list/edit-table',
    //             name: 'EditList',
    //             component: () => import('@/views/other/TableInnerEditList'),
    //             meta: { title: '内联编辑表格', keepAlive: true }
    //           },
    //           {
    //             path: '/other/list/user-list',
    //             name: 'UserList',
    //             component: () => import('@/views/other/UserList'),
    //             meta: { title: '用户列表', keepAlive: true }
    //           },
    //           {
    //             path: '/other/list/role-list',
    //             name: 'RoleList',
    //             component: () => import('@/views/other/RoleList'),
    //             meta: { title: '角色列表', keepAlive: true }
    //           },
    //           {
    //             path: '/other/list/system-role',
    //             name: 'SystemRole',
    //             component: () => import('@/views/role/RoleList'),
    //             meta: { title: '角色列表2', keepAlive: true }
    //           },
    //           {
    //             path: '/other/list/permission-list',
    //             name: 'PermissionList',
    //             component: () => import('@/views/other/PermissionList'),
    //             meta: { title: '权限列表', keepAlive: true }
    //           }
    //         ]
    //       }
    //     ]
    //   }
    //   */
    // ]
    children: [
      // 本项目列表 
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/index',
        component: RouteView,
        meta: { title: '总览', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
        children: [
          {
            path: '/dashboard/index',
            name: 'DashboardIndex',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: '分析页', keepAlive: false, permission: [ 'dashboard' ] }
          },
          // {
          //   path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
          //   name: 'Analysis',
          //   component: () => import('@/views/dashboard/AnalysisBak'),
          //   meta: { title: '分析页备份', keepAlive: false, permission: [ 'dashboard' ] }
          // },
        ]
      },
      {
        path: '/enterprise',
        name: 'Enterprise',
        component: RouteView,
        redirect: '/enterprise/index',
        meta: { title: '企业负责人管理', icon: 'bgLeader', permission: ['table'] },
        children: [
          {
            path: '/enterprise/index',
            name: 'EnterpriseIndex',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '企业负责人信息', keepAlive: true, permission: ['table'], key: 'leader' }
          },
          // {
          //   path: '/list/table-list-bak/:pageNo([1-9]\\d*)?',
          //   name: 'TableListWrapperBak',
          //   hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
          //   component: () => import('@/views/list/TableListBak'),
          //   meta: { title: '查询表格备份', keepAlive: true, permission: ['table'] }
          // },
        ]
      },
      {
        path: '/car',
        name: 'Car',
        component: RouteView,
        redirect: '/car/index',
        meta: { title: '车辆管理', icon: 'bgCar', permission: ['table'] },
        children: [
          {
            path: '/car/index',
            name: 'CarIndex',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '车辆信息管理', keepAlive: true, permission: ['table'], key: 'car' }
          },
          {
            path: '/car/driver',
            name: 'CarDriver',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '驾驶员管理', keepAlive: true, permission: ['table'], key: 'driver' }
          },
          {
            path: '/car/etc',
            name: 'CarEtc',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: 'ETC管理', keepAlive: true, permission: ['table'], key: 'etc' }
          },
          {
            path: '/car/gasoline',
            name: 'CarGasoline',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '油卡管理', keepAlive: true, permission: ['table'], key: 'gasolineCard' }
          },
          {
            path: '/car/official',
            name: 'CarOfficial',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '公务用车管理', keepAlive: true, permission: ['table'], key: 'officialVehicles' }
          },
        ]
      },
      {
        path: '/payment',
        name: 'Payment',
        component: RouteView,
        redirect: '/payment/index',
        meta: { title: '费用管理', icon: 'bgPayment', permission: ['table'] },
        children: [
          {
            path: '/payment/index',
            name: 'PaymentIndex',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '培训费管理', keepAlive: true, permission: ['table'], key: 'training' }
          },
          {
            path: '/payment/travel',
            name: 'PaymentTravel',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '差旅费管理', keepAlive: true, permission: ['table'], key: 'travel' }
          },
          {
            path: '/payment/transport',
            name: 'PaymentTransport',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '交通补贴管理', keepAlive: true, permission: ['table'], key: 'transportationSubsidy' }
          },
          {
            path: '/payment/communication',
            name: 'PaymentCommunication',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '通讯费管理', keepAlive: true, permission: ['table'], key: 'communication' }
          },
          {
            path: '/payment/entertainment',
            name: 'PaymentEntertainment',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '招待费管理', keepAlive: true, permission: ['table'], key: 'entertainment' }
          },
          {
            path: '/payment/abroad',
            name: 'PaymentAbroad',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '因公临时出国（境）管理', keepAlive: true, permission: ['table'], key: 'abroad' }
          },
          {
            path: '/payment/operation',
            name: 'PaymentOperation',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/list/TableList'),
            meta: { title: '运行费管理', keepAlive: true, permission: ['table'], key: 'operation' }
          },
        ]
      },
      {
        path: '/charts',
        name: 'Charts',
        component: RouteView,
        redirect: '/charts/index',
        meta: { title: '报表管理', icon: 'bgChart', permission: ['table'] },
        children: [
          {
            path: '/charts/index',
            name: 'ChartsIndex',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/charts/CarUse'),
            meta: { title: '公务用车年度台账', keepAlive: true, permission: ['table'], key: 'OVOReport' }
          },
          {
            path: '/charts/allowance',
            name: 'ChartsAllowance',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/charts/Allowance'),
            meta: { title: '交通补贴确认', keepAlive: true, permission: ['table'], key: 'tbReport' }
          },
        ]
      },
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
