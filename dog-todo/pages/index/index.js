//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userText:'',
    todos:[],
    // 用户的当前输入的todo
    current:'',
    motto: 'Hello World',
    userInfo: {}
  },
  bindkeyInput:function(e){
    this.data.current=e.detail.value
  },
  addItem:function(e){
  //  将用户输入的todo项拿到，
  // 传统的JS 
  // document.querySelector(inout).value
  // 用户没有输入值 正在输入 输入完成 三种状态
  // current 数据项 数据维护
  // input={{current}}
  // 界面 数据，模棱两可的
  // 数据绑定的界面，经量减少dom 查找及修改
  // 交给框架小程序 vue mvvm
  // 界面 数据
  // 存储到野狗
  console.log(this.data.current);
  if (this.data.current!=''){
    // 应用程序级别的逻辑与
    // 当前页面的逻辑
    app.addItem(this.data.current)
    // 添加完了,将input 清空
    this.setData({
      current:''
    })
  }

  },
deleteItem:function(e){
  // 数据集合 collections
  // 数据表 excel
  // row ->child
  // column->field 字段
  // NoSQL js 友好 面向文档的数据库
  var key=e.target.dataset.key;
  // 所有东西都是key:value 定义的，所以找到key 就找到了那行，也找到了数据，因为都经过了索引
  this.ref.child(key).remove();
},
doLogin:function(){
  // 异步
  var that=this;
  app.login(function(user){
    console.log(user);
    that.setData({
      userText:JSON.stringify(user)
    })
  });
},
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.ref=app.getTodoRef();
    // var that=this
    this.ref.on('child_added',function(snapshot,prkey){
      // 事件监听，数据从小程序去到野狗服务器
      // 异步的过程，花时间定义事件
      // todo json 对象 文档数据库存的就是json对象
      var key=snapshot.key()
      var text=snapshot.val()
      var newItem={key:key,text:text}
      // 新增一条，维护好todos
      this.data.todos.push(newItem)
      // 通知界面更新
      this.setData({
        todos:this.data.todos
      })
    },this)
  this.ref.on('child_removed',function(snapshot){
    var key=snapshot.key()
    // 如何在数组中删除一个存在的项？
    // 遍历比对
    // 先要找到其index 再调用splice方法将其剪掉
    var index=this.data.todos.findIndex(function(item,index){
      if(item.key==key)return true
        return false
    })
    // 从某个位置删除几个，
    if(index>=0){
      this.data.todos.splice(index,1)
      // 改数据
      // 管界面
      this.setData({
        todos:this.data.todos
      })
    }
    var index=this.data.todos.splice(index)
  },this)
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
