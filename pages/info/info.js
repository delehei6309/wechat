//index.js
//获取应用实例
var app = getApp()
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        items:[
            {
                title:'git',
                introduce:'葛公在时，亦不觉异，自公殁后，不见其比',
                img:'../../images/portraits/1.png'
            },{
                title:'James',
                introduce:'篮球运动员',
                img:'../../images/portraits/2.jpg'
            },{
                title:'海布里的冬天',
                introduce:'阿森纳死忠有何难',
                img:'../../images/portraits/3.jpg'
            },{
                title:'奥巴马',
                introduce:'黑人总统',
                img:'../../images/portraits/4.jpg'
            },{
                title:'专业办证',
                introduce:'下证快！安全！真实！',
                img:'../../images/portraits/5.jpg'
            },{
                title:'国民信息办',
                introduce:'查看信息',
                img:'../../images/portraits/6.jpg'
            },{
                title:'图片处理',
                introduce:'专业ps大师级别',
                img:'../../images/portraits/7.png'
            },{
                title:'祖国一抹红',
                introduce:'我和我的祖国',
                img:'../../images/portraits/8.jpg'
            },{
                title:'乔帮主',
                introduce:'我乔峰又岂是浪得虚名',
                img:'../../images/portraits/9.jpg'
            },{
                title:'亨利',
                introduce:'32岁的亨利就坐在那里，深情的目光望过去，都是自己22岁的影子——海布里国王。',
                img:'../../images/portraits/10.png'
            },{
                title:'穆里尼奥',
                introduce:'God, after god, me',
                img:'../../images/portraits/12.jpg'
            },{
                title:'法国队',
                introduce:'十大杰出青年',
                img:'../../images/portraits/13.jpg'
            },{
                title:'康熙',
                introduce:'千古一帝',
                img:'../../images/portraits/14.jpg'
            },{
                title:'春江花月夜',
                introduce:'春江潮水连海平，海上明月共潮生。',
                img:'../../images/portraits/11.jpg'
            }
        ]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../info-detail/info-detail'
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
