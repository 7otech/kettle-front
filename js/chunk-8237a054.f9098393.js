(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8237a054"],{"4b4f":function(e,t,r){"use strict";r("7cbb")},"7cbb":function(e,t,r){},e49c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("Carousel",{attrs:{autoplay:e.setting.autoplay,"autoplay-speed":e.setting.autoplaySpeed,dots:e.setting.dots,"radius-dot":e.setting.radiusDot,trigger:e.setting.trigger,arrow:e.setting.arrow},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}},[a("CarouselItem",[a("div",{staticClass:"demo-carousel"},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:r("c7a5"),alt:"轮播图"}})])]),a("CarouselItem",[a("div",{staticClass:"demo-carousel"},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:r("6063"),alt:"轮播图"}})])]),a("CarouselItem",[a("div",{staticClass:"demo-carousel"},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:r("93f3"),alt:"轮播图"}})])]),a("CarouselItem",[a("div",{staticClass:"demo-carousel"},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:r("cbf0"),alt:"轮播图"}})])])],1),a("div",{staticClass:"login-con"},[a("Card",{attrs:{icon:"log-in",title:"欢迎访问Smart Kettle调度监控平台",bordered:!1}},[a("div",{staticStyle:{"text-align":"center"}},[a("img",{staticStyle:{width:"50%",height:"50%"},attrs:{src:r("74fd")}})]),a("div",{staticClass:"form-con"},[a("login-form",{attrs:{loading:e.loading},on:{"on-success-valid":e.handleSubmit}}),a("p",{staticClass:"login-tip"},[e._v("输入用户名admin或superadmin,密码为1,即可登录")])],1)])],1),e._m(0)],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{position:"fixed","text-align":"center",bottom:"0",margin:"0 auto",width:"100%",color:"#5c6b77"}},[r("a",{staticStyle:{color:"#5c6b77"},attrs:{target:"_blank",href:"http://open.inspur.com/yuenbin/x-smart-kettle-front.git"}},[e._v("\n        © 2020-2021 规划、设计、开发、运维等版权归yuenbin所有")]),e._v(" "),r("br"),e._v("\n      博客地址： "),r("a",{staticStyle:{color:"#5c6b77"},attrs:{target:"_blank",href:"https://my.oschina.net/yaukie"}},[e._v("\n      https://my.oschina.net/yaukie")])])}],o=(r("ac67"),r("1bc7"),r("32ea"),r("2559")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[r("FormItem",{attrs:{prop:"userName"}},[r("Input",{attrs:{size:"large",placeholder:"请输入用户名"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:24,type:"ios-person"}})],1)])],1),r("FormItem",{attrs:{prop:"passWord"}},[r("Input",{attrs:{size:"large",type:"password",placeholder:"请输入密码"},model:{value:e.form.passWord,callback:function(t){e.$set(e.form,"passWord",t)},expression:"form.passWord"}},[r("span",{attrs:{slot:"prepend"},slot:"prepend"},[r("Icon",{attrs:{size:24,type:"md-lock"}})],1)])],1),r("FormItem",{attrs:{prop:"verifyCode"}},[r("Input",{attrs:{size:"large",placeholder:"验证码"},model:{value:e.form.verifyCode,callback:function(t){e.$set(e.form,"verifyCode",t)},expression:"form.verifyCode"}}),r("img",{staticStyle:{width:"100px",display:"block","margin-top":"10px",cursor:"pointer"},attrs:{src:e.base64_image,title:"换一张",border:"0"},on:{click:e.fleshVerify}})],1),r("FormItem",[r("Button",{attrs:{type:"primary",loading:e.loading,long:""},on:{click:e.handleSubmit}},[e._v("登录")])],1)],1)},n=[],l=(r("8dee"),r("c24f")),c={name:"LoginForm",props:{userName:{type:Array,default:function(){return[{required:!0,message:"账号不能为空",trigger:"blur"}]}},passWord:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"}]}},verifyCode:{type:Array,default:function(){return[{required:!0,message:"验证码不能为空",trigger:"blur"}]}},loading:{type:Boolean,default:!1}},data:function(){return{base64_image:"",form:{userName:"",passWord:"",verifyCode:"",uuid:""}}},created:function(){this.fleshVerify()},computed:{rules:function(){return{userName:this.userName,passWord:this.passWord,verifyCode:this.verifyCode}}},methods:{fleshVerify:function(){var e=this,t=this,r=Math.random();Object(l["b"])({t:r}).then((function(e){if(e&&e.data&&e.data.code){var r=e.data.data.code;t.base64_image="data:image/jpeg;base64,"+r.replace(/=+$/,""),t.form.uuid=e.data.data.uuid}})).catch((function(t){e.$Message.error("获取验证码异常,错误信息:"+t)}))},handleSubmit:function(){var e=this,t={userName:this.form.userName,passWord:this.form.passWord,verifyCode:this.form.verifyCode,uuid:this.form.uuid};this.$refs.loginForm.validate((function(r){var a=e;r?a.$emit("on-success-valid",t):a.$Message({showClose:!0,message:"登录失败,失败原因:"+res.msg,type:"error"})}))}}},u=c,d=r("4ac2"),m=Object(d["a"])(u,i,n,!1,null,null,null),p=m.exports,f=p,g=r("5880");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={components:{LoginForm:f},data:function(){return{value3:0,loading:!1,setting:{autoplay:!0,autoplaySpeed:2e3,dots:"inside",radiusDot:!1,arrow:"never"}}},methods:y(y(y({},Object(g["mapGetters"])(["getToken"])),Object(g["mapActions"])(["handleLogin","getUserInfo"])),{},{handleSubmit:function(e){var t=this,r=e.userName,a=e.passWord,s=e.verifyCode,o=e.uuid,i=this;i.loading=!0,i.handleLogin({userName:r,passWord:a,verifyCode:s,uuid:o}).then((function(e){null!=i.getToken()&&t.$Message.success({closable:!0,content:"登录成功",type:"success"}),i.$router.push({name:i.$config.homeName}),i.loading=!1})).catch((function(e){i.loading=!1,i.$Message.error(e.message)}))}})},v=b,C=(r("4b4f"),Object(d["a"])(v,a,s,!1,null,null,null));t["default"]=C.exports}}]);