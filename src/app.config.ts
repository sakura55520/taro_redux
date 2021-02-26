export default {
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/shoppingcart/index',
    'pages/detail/index',
  ],
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页",
      },
      {
        pagePath: "pages/category/index",
        iconPath: "./assets/tab-bar/cate.png",
        selectedIconPath: "./assets/tab-bar/cate-active.png",
        text: "分类",
      },
      {
        pagePath: "pages/shoppingcart/index",
        iconPath: "./assets/tab-bar/cart.png",
        selectedIconPath: "./assets/tab-bar/cart-active.png",
        text: "购物车",
      },
      {
        pagePath: "pages/index/index",
        iconPath: "./assets/tab-bar/user.png",
        selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "个人",
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
