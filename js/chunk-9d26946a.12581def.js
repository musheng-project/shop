(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d26946a"],{"7ec8":function(t,e,a){"use strict";var i=a("8f87"),n=a.n(i);n.a},8808:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mine animate__animated animate__fadeIn"},[a("div",{staticClass:"jp_mine_head"},[a("van-nav-bar",{attrs:{title:"个人中心","right-text":t.userInfo.loginText},on:{"click-right":t.login}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"jp_login clearfix"},[a("div",{staticClass:"jp_login_img fl"},[a("van-icon",{attrs:{name:"user-circle-o",color:"#ddd"}})],1),a("div",{staticClass:"jp_login_info fl"},[a("span",[t._v(t._s(t.userInfo.userName))]),a("div",[a("span",[t._v("我的账户")]),a("van-icon",{attrs:{name:"arrow"}})],1)])]),a("van-row",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[a("van-col",{attrs:{span:"11"}},[a("span",{on:{click:function(e){return t.routerGo({name:"register"})}}},[t._v("注册")])]),a("van-col",{attrs:{span:"2"}},[a("span",[t._v("|")])]),a("van-col",{attrs:{span:"11"}},[a("span",{on:{click:function(e){return t.routerGo({name:"login"})}}},[t._v("登录")])])],1)],1),a("div",{staticClass:"jp_mine_order"},[a("van-cell-group",[a("van-cell",{attrs:{title:"我的订单",value:"全部订单"}})],1)],1),a("div",{staticClass:"jp_mine_item"},[a("van-grid",[a("van-grid-item",{attrs:{icon:"pending-payment",text:"待付款"}}),a("van-grid-item",{attrs:{icon:"friends-o",text:"待成团"}}),a("van-grid-item",{attrs:{icon:"logistics",text:"待收货"}}),a("van-grid-item",{attrs:{icon:"after-sale",text:"退款/售后"}})],1)],1),a("div",{staticClass:"jp_mine_itmes"},[a("van-cell-group",[a("van-cell",{attrs:{title:"我的优惠券"}}),a("van-cell",{attrs:{title:"我的收藏"}}),a("van-cell",{attrs:{title:"我的拼团"}}),a("van-cell",{attrs:{title:"我的免单券",value:"0张"}}),a("van-cell",{attrs:{title:"借钱",value:"新用户免费领1000元"}})],1),a("van-cell-group",[a("van-cell",{attrs:{title:"客服中心",value:"全部订单"}}),a("van-cell",{attrs:{title:"关于卷皮"}})],1)],1)])},n=[],s={data:function(){return{isShow:!0,userInfo:{loginText:"",userName:""}}},methods:{routerGo:function(t){this.$router.push(t)},login:function(){this.isShow=!0,this.userInfo.loginText="";var t=localStorage.getItem("user");t&&(t=JSON.parse(t),t.isLogin&&localStorage.removeItem("user"))}},created:function(){this.$toast.loading({duration:1e3,message:"加载中...",forbidClick:!0});var t=localStorage.getItem("user");t&&(t=JSON.parse(t),t.isLogin&&(this.userInfo.userName=t.username,this.userInfo.loginText="退出",this.isShow=!1))}},r=s,o=(a("7ec8"),a("2877")),l=Object(o["a"])(r,i,n,!1,null,"1de50fba",null);e["default"]=l.exports},"8f87":function(t,e,a){}}]);
//# sourceMappingURL=chunk-9d26946a.12581def.js.map