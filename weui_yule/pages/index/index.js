//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    song_list:[
      {
      pic_big:'http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150'
    },
    {
      pic_big:'http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150'
    },
    {
      pic_big:'http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150'
    },
    {
      pic_big:'http://musicdata.baidu.com/data2/pic/345a08bf0904eb7f708f9591b50ba1e9/544467658/544467658.jpg@s_0,w_150'
    }
  ],
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
