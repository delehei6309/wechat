//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        items:[
            {
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/1.png'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/2.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/3.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/4.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/5.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/6.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/7.png'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/8.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/9.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/10.png'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/12.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/13.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/14.jpg'
            },{
                title:'github',
                introduce:'a nb list',
                img:'../../images/portraits/11.jpg'
            }
        ]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../../logs/logs'
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
