export default function () {
  return [
    {
      title: '会员/客户模块',
      expand: true,
      checked: true,
      decs: 'client',
      children: [
        {
          title: '会员/客户基础模块',
          expand: true,
          checked: true,
          decs: 'client-base',
          children: []
        },
        {
          title: '会员/客户等级模块',
          expand: true,
          checked: true,
          decs: 'client-level',
          children: []
        },
        {
          title: '会员/客户价格模块',
          expand: true,
          checked: true,
          decs: 'client-price',
          children: []
        }
      ]
    },
    {
      title: '商品模块',
      expand: true,
      checked: true,
      decs: 'good',
      children: [
        {
          title: '商品基础模块',
          expand: true,
          checked: true,
          decs: 'good-base',
          children: []
        },
        {
          title: '商品分类模块',
          expand: true,
          checked: true,
          decs: 'good-category',
          children: []
        },
        {
          title: '商品单位模块',
          expand: true,
          checked: true,
          decs: 'good-unit',
          children: []
        },
        {
          title: '商品标签模块',
          expand: true,
          checked: true,
          decs: 'good-tag',
          children: []
        }
      ]
    },
    {
      title: '订单模块',
      expand: true,
      checked: true,
      decs: 'order',
      children: []
    },
    {
      title: '活动模块',
      expand: true,
      checked: true,
      decs: 'active',
      children: []
    },
    {
      title: '分销模块',
      expand: true,
      checked: true,
      decs: 'distribution',
      children: []
    },
    {
      title: '积分模块',
      expand: true,
      checked: true,
      decs: 'integral',
      children: []
    },
    {
      title: '系统设置模块',
      expand: true,
      checked: true,
      decs: 'setting',
      children: []
    }
  ]
}
