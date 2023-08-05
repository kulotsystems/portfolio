import{V as I,n as a,_ as u}from"./index.e6e86282.js";import{B as Z,C as J,R as Q,T as O,_ as tt,a as et,b as it,V as st,c as nt}from"./VSkeletonLoader.d6b4b950.js";import{m as d,T as _,_ as h,a as r,e as at,c as l,i as rt,d as ot,P as lt,f as ut,M as ht,C as E,b as ct,g as b,V as dt,h as f,k as y,j as g,l as pt,n as c,o as j,p as P,q as mt,r as vt}from"./VSpacer.df8fd39e.js";import{S as w,a as z,b as L,_ as W,c as m}from"./ButtonSocial.df543782.js";import{_ as $,a as _t}from"./VAvatar.36b62be2.js";import{C as ft,R as gt,D as $t}from"./index.c26195b1.js";import{_ as k,V as v,O as bt}from"./VDialog.5e1c456b.js";const yt=d(_).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}}),wt=I.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:n}){const o=Object.assign(n,{staticClass:`v-app-bar__nav-icon ${n.staticClass||""}`.trim(),props:{...s,icon:!0},on:i}),p=e().default;return t(h,o,p||[t(r,"$menu")])}}),kt=rt("VAppBar","v-app-bar-title","v-app-bar"),N=kt.extend().extend({name:"v-app-bar-title",data:()=>({contentWidth:0,left:0,width:0}),watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles(){if(!this.contentWidth)return{};const t=this.width,e=this.contentWidth,i=at(Math.min(1,this.VAppBar.scrollRatio*1.5));return{width:l(t+(e-t)*i),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted(){this.updateDimensions()},methods:{updateDimensions(){const t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}}),H=I.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:i,mobileBreakpoint:s}=this.$vuetify.breakpoint;if(s===this.mobileBreakpoint)return t;const n=parseInt(this.mobileBreakpoint,10);return!isNaN(n)?e<n:i===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&ot("mobile-break-point","mobile-breakpoint",this)}});const xt=d(z("bottom",["height","inputValue"]),E,ht,ut("inputValue"),lt,w,_).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data(){return{isActive:this.inputValue}},computed:{canScroll(){return w.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles(){return{...this.measurableStyles,transform:this.isActive?"none":"translateY(100%)"}}},watch:{canScroll:"onScroll"},created(){this.$attrs.hasOwnProperty("active")&&ct("active.sync","value or v-model",this)},methods:{thresholdMet(){this.hideOnScroll&&(this.isActive=!this.isScrollingUp||this.currentScroll>this.computedScrollThreshold,this.$emit("update:input-value",this.isActive)),!(this.currentThreshold<this.computedScrollThreshold)&&(this.savedScroll=this.currentScroll)},updateApplication(){return this.$el?this.$el.clientHeight:0},updateValue(t){this.$emit("change",t)}},render(t){const e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||this.value!==void 0),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(Z,this.setTextColor(this.color,e),this.$slots.default)}});const Mt=k.extend({name:"v-bottom-sheet",props:{inset:Boolean,maxWidth:[String,Number],transition:{type:String,default:"bottom-sheet-transition"}},computed:{classes(){return{...k.options.computed.classes.call(this),"v-bottom-sheet":!0,"v-bottom-sheet--inset":this.inset}}}});function x(t){t.preventDefault()}const Ct=d(v,Q,J).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?Array.isArray(e)?e.some(i=>this.valueComparator(i,t)):!1:this.trueValue===void 0||this.falseValue===void 0?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=v.options.methods.genLabel.call(this);return t&&(t.data.on={click:x},t)},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:x},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(s=>!this.valueComparator(s,t)),e.length===i&&e.push(t)}else this.trueValue!==void 0&&this.falseValue!==void 0?e=this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?e=this.valueComparator(e,t)?null:t:e=!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}});const St=L.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:i,footer:s,insetFooter:n,bottom:o,left:p}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${i}px`,paddingBottom:`${s+n+o}px`,paddingLeft:`${p}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}});const At=d(z("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),E,$t,H,bt,L,_),Vt=At.extend({name:"v-navigation-drawer",directives:{ClickOutside:ft,Resize:gt,Touch:O},provide(){return{isInNav:this.tag==="nav"}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":Number(this.miniVariantWidth)!==56,"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&H.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:l(this.height),top:this.isBottom?"auto":l(this.computedTop),maxHeight:this.computedMaxHeight!=null?`calc(100% - ${l(this.computedMaxHeight)})`:void 0,transform:`${t}(${l(this.computedTransform,"%")})`,width:l(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),!(e==null||!this.reactsToResize||!this.reactsToMobile)&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){if(!this.permanent){if(t==null){this.init();return}t!==this.isActive&&(this.isActive=t)}},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement($,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return!this.touchless&&!this.stateless&&t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:e=>{if(e.target!==e.currentTarget)return;this.$emit("transitionend",e);const i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=b(this,t);return e&&this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e)},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||this.value!=null?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),!(Math.abs(t.touchendX-t.touchstartX)<100)&&(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),!(Math.abs(t.touchendX-t.touchstartX)<100)&&(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||b(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}});const Bt=Ct.extend({name:"v-switch",directives:{Touch:O},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...v.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(dt,{},[this.loading===!1?null:this.$slots.progress||this.$createElement(f,{props:{color:this.loading===!0||this.loading===""?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===y.left&&this.isActive||t.keyCode===y.right&&!this.isActive)&&this.onChange()}}});var Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(tt,{attrs:{"offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(s){var n=s.on,o=s.attrs;return[i(h,t._g(t._b({staticClass:"mx-1",class:{"grey--text":t.$vuetify.theme.dark},staticStyle:{"justify-content":"right"},attrs:{text:"",color:"white",width:"125"}},"v-btn",o,!1),n),[t._v(" "+t._s(t.activeMenuItem.text)+" "),i(r,{attrs:{right:""}},[t._v("more_vert")])],1)]}}])},[i(et,{attrs:{dense:""}},t._l(t.menuItems,function(s){return i(it,{key:s.name,class:{"primary white--text":s.name===t.activeMenuItem.name,"primary--text":!t.$vuetify.theme.dark&&s.name!==t.activeMenuItem.name,"grey--text":t.$vuetify.theme.dark&&s.name!==t.activeMenuItem.name},on:{click:function(n){return t.menuClick(s.name)}}},[i(st,[i("span",{staticClass:"text-button"},[t._v(t._s(s.text))])])],1)}),1)],1)},Dt=[];const Rt={name:"TopDropdownMenu",components:{},data(){return{}},computed:{menuItems(){return this.$store.getters["navigation/mainMenuItems"]},activeMenuItem(){let t=null;for(let e=0;e<this.menuItems.length;e++)if(this.menuItems[e].name===this.$store.getters["navigation/mainMenuActive"]){t=this.menuItems[e];break}return t}},methods:{menuClick(t){t!==this.activeMenuItem.name?(this.$store.commit("navigation/setActiveMainMenu",t),this.$store.commit("dialog/loader/show"),this.$router.push({name:t})):t==="projects"&&this.$route.params.slug&&this.$router.push({name:"projects"})}}},M={};var It=a(Rt,Tt,Dt,!1,Ot,null,null,null);function Ot(t){for(let e in M)this[e]=M[e]}const F=function(){return It.exports}(),Et=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));var jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.windowWidth>600?i("div",t._l(t.menuItems,function(s){return i(h,{key:s.name,staticClass:"mx-1",class:(s.name===t.activeMenuItem?t.$vuetify.theme.dark?"white--text ":"primary--text ":t.$vuetify.theme.dark?"":"white--text ")+t.$store.getters["breakpoints/button/md"],attrs:{text:s.name!==t.activeMenuItem,large:t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg,"x-large":t.$vuetify.breakpoint.xl,color:t.$vuetify.theme.dark?s.name===t.activeMenuItem?"primary":"grey":"white",elevation:"0",width:t.$vuetify.breakpoint.lgAndDown?125:160},on:{click:function(n){return t.menuClick(s.name)}}},[i(r,{attrs:{left:""}},[t._v(t._s(s.icon))]),t._v(" "+t._s(s.text)+" ")],1)}),1):t._e()},Pt=[];const zt={name:"TopButtonMenu",components:{},data(){return{windowWidth:window.innerWidth}},computed:{menuItems(){return this.$store.getters["navigation/mainMenuItems"]},activeMenuItem(){return this.$store.getters["navigation/mainMenuActive"]}},methods:{menuClick(t){t!==this.activeMenuItem?(this.$store.commit("navigation/setActiveMainMenu",t),this.$store.commit("dialog/loader/show"),this.$router.push({name:t})):t==="projects"&&this.$route.params.slug&&this.$router.push({name:"projects"})},onResize(){this.windowWidth=window.innerWidth}},mounted(){this.$nextTick(()=>{window.addEventListener("resize",this.onResize)})},beforeDestroy(){window.removeEventListener("resize",this.onResize)}},C={};var Lt=a(zt,jt,Pt,!1,Wt,null,null,null);function Wt(t){for(let e in C)this[e]=C[e]}const U=function(){return Lt.exports}(),Nt=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));var Ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(W,{class:{"primary white--text":!t.$vuetify.theme.dark,"light darken-2 grey--text":t.$vuetify.theme.dark},attrs:{app:"",flat:"",height:t.$store.getters["breakpoints/appbar/height"]}},[i(g,[i(pt,{staticClass:"pa-0 pr-md-5 pr-xl-4 fill-height"},[t.$store.getters["navigation/sidebarOpened"]?t._e():i(wt,{class:{"grey--text":t.$vuetify.theme.dark},attrs:{dark:""},on:{click:function(s){return t.$store.commit("navigation/openSidebar")}}}),t.$store.getters["navigation/sidebarOpened"]?t._e():i(N,{class:t.$store.getters["breakpoints/font/h3"]},[t._v(" "+t._s(t.$store.getters.appName)+" ")]),i(c),t.$vuetify.breakpoint.smAndUp?i(U):i(F)],1)],1)],1)},Ft=[];const Ut={name:"TopBar",components:{"top-button-menu":()=>u(()=>Promise.resolve().then(()=>Nt),void 0),"top-dropdown-menu":()=>u(()=>Promise.resolve().then(()=>Et),void 0)},data(){return{}},computed:{},methods:{}},S={};var Xt=a(Ut,Ht,Ft,!1,Kt,null,null,null);function Kt(t){for(let e in S)this[e]=S[e]}const qt=function(){return Xt.exports}(),Gt="/portfolio/assets/kulotsystems-v2.eca35893.jpg";var Yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(j,{staticClass:"transparent",attrs:{flat:"",tile:""}},[i(P,{staticClass:"pt-9",attrs:{align:"center"}},[i(_t,{attrs:{size:t.avatarSize}},[i($,{attrs:{src:t.profilePhoto},on:{load:function(s){return t.$store.commit("navigation/loadSidebar")}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i(g,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i(f,{attrs:{indeterminate:"",color:"primary lighten-3"}})],1)]},proxy:!0}])})],1),i("div",{staticClass:"mt-4"},[i("p",{staticClass:"text-h4 text-xl-h3 primary--text font-weight-bold mb-0",class:{"text--darken-1":!t.$vuetify.theme.dark,"text--lighten-2":t.$vuetify.theme.dark}},[i("small",[t._v(t._s(t.$store.getters.fullName))])]),i("p",{staticClass:"text-body-1 text-xl-h6 primary--text mb-0",class:{"text--darken-1":!t.$vuetify.theme.dark,"text--lighten-2":t.$vuetify.theme.dark}},[t._v(" "+t._s(t.$store.getters.profile.position)+" ")])])],1),i(mt,{staticClass:"justify-center"},[i(m,{staticClass:"mx-1",attrs:{text:"",url:t.$store.getters.profile.socials.Twitter,outlined:"",large:t.$vuetify.breakpoint.xl}},[t._v("$twitter")]),i(m,{staticClass:"mx-1",attrs:{text:"",url:t.$store.getters.profile.socials.Facebook,outlined:"",large:t.$vuetify.breakpoint.xl}},[t._v("$facebook")]),i(m,{staticClass:"mx-1",attrs:{text:"",url:t.$store.getters.profile.socials.Github,outlined:"",large:t.$vuetify.breakpoint.xl}},[t._v("$github")])],1)],1)},Zt=[];const Jt={name:"Profile",components:{"button-social":()=>u(()=>import("./ButtonSocial.df543782.js").then(t=>t.B),["assets/ButtonSocial.df543782.js","assets/ButtonSocial.2bdc9981.css","assets/VSpacer.df8fd39e.js","assets/VSpacer.e0ab1624.css","assets/index.e6e86282.js","assets/index.7a23d228.css","assets/VAvatar.36b62be2.js","assets/VAvatar.3dedd30e.css"])},data(){return{profilePhoto:Gt}},computed:{avatarSize(){let t=160;return this.$vuetify.breakpoint.lg?t=200:this.$vuetify.breakpoint.xl&&(t=250),t}},methods:{}},A={};var Qt=a(Jt,Yt,Zt,!1,te,null,null,null);function te(t){for(let e in A)this[e]=A[e]}const X=function(){return Qt.exports}(),ee=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));var ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i(Vt,{class:{"grey lighten-5":!t.$vuetify.breakpoint.mdAndUp&&!t.$vuetify.theme.dark,"light darken-2":!t.$vuetify.breakpoint.mdAndUp&&t.$vuetify.theme.dark,transparent:t.$vuetify.breakpoint.mdAndUp},staticStyle:{height:"100%"},attrs:{app:"",permanent:t.$vuetify.breakpoint.mdAndUp,width:t.width,"overlay-opacity":"0.1",floating:""},scopedSlots:t._u([{key:"append",fn:function(){return[i("div",{staticClass:"pa-3 d-flex justify-center"},[i(h,{attrs:{block:"",text:"",large:""},on:{click:t.switchClick}},[i(Bt,{attrs:{label:"Dark Mode",inset:"",flat:"",dense:"",color:"dark",ripple:!1},on:{click:function(s){return s.stopPropagation(),t.switchChange.apply(null,arguments)}},model:{value:t.isDarkMode,callback:function(s){t.isDarkMode=s},expression:"isDarkMode"}})],1)],1)]},proxy:!0}]),model:{value:t.$store.state.navigation.sidebar.opened,callback:function(s){t.$set(t.$store.state.navigation.sidebar,"opened",s)},expression:"$store.state.navigation.sidebar.opened"}},[i(W,{class:{"primary white--text":!t.$vuetify.theme.dark,"light darken-2 grey--text":t.$vuetify.theme.dark},attrs:{flat:"",height:t.$store.getters["breakpoints/appbar/height"]}},[t.$vuetify.breakpoint.mdAndUp?i(c):t._e(),i(N,{class:t.$store.getters["breakpoints/font/h3"]},[t._v(" "+t._s(t.$store.getters.appName)+" ")]),t.$vuetify.breakpoint.mdAndUp?i(c):t._e()],1),i(X)],1)],1)},se=[];const ne={name:"Sidebar",components:{profile:()=>u(()=>Promise.resolve().then(()=>ee),void 0)},data(){return{isDarkMode:!1}},computed:{width(){return this.$vuetify.breakpoint.mdAndDown?256:this.$vuetify.breakpoint.lg?320:384}},methods:{toggleTheme(t){t===void 0&&(t=!0),this.isDarkMode?(this.$store.commit("goDark",t),this.$vuetify.theme.dark=!0):(this.$store.commit("goLight",t),this.$vuetify.theme.dark=!1)},switchClick(){this.isDarkMode=!this.isDarkMode,this.toggleTheme()},switchChange(){this.toggleTheme()}},created(){this.isDarkMode=this.$store.getters.isDarkMode,this.$vuetify.theme.dark=this.isDarkMode},mounted(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:t})=>{localStorage.removeItem("theme"),this.isDarkMode=t,this.toggleTheme(!1)})}},V={};var ae=a(ne,ie,se,!1,re,null,null,null);function re(t){for(let e in V)this[e]=V[e]}const K=function(){return ae.exports}();var oe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.$store.state.dialog.loader.opened?i(nt,{attrs:{id:"dialog-loader",type:"image",tile:"",width:"100%",height:"100%"}}):t._e()},le=[];const ue={name:"DialogLoader",components:{},data(){return{}},computed:{dialog(){return this.$store.getters["dialog/loader/state"]}},methods:{}},B={};var he=a(ue,oe,le,!1,ce,null,null,null);function ce(t){for(let e in B)this[e]=B[e]}const q=function(){return he.exports}();var de=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(Mt,{attrs:{"retain-focus":!1,"max-width":t.maxWidth,scrollable:""},model:{value:t.$store.state.dialog.image.opened,callback:function(s){t.$set(t.$store.state.dialog.image,"opened",s)},expression:"$store.state.dialog.image.opened"}},[i(j,{attrs:{tile:"",elevation:"24"}},[i(vt,{staticClass:"pa-3"},[i("p",{staticClass:"ma-0"},[i(r,{staticClass:"pb-1"},[t._v("photo")]),t._v(" "+t._s(t.dialog.title)+" ")],1),i(c),i(h,{attrs:{icon:"",large:""},on:{click:function(s){return t.$store.commit("dialog/image/hide")}}},[i(r,[t._v("close")])],1)],1),i(P,{staticClass:"pa-2 pt-0"},[i($,{staticStyle:{"border-radius":"4px"},attrs:{src:t.dialog.image},scopedSlots:t._u([{key:"placeholder",fn:function(){return[i(g,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i(f,{attrs:{indeterminate:"",color:"primary lighten-3"}})],1)]},proxy:!0}])})],1)],1)],1)},pe=[];const me={name:"DialogImage",components:{},data(){return{}},computed:{dialog(){return this.$store.getters["dialog/image/state"]},maxWidth(){let t=600;return this.$vuetify.breakpoint.sm?t=960:this.$vuetify.breakpoint.mdAndUp&&(t=1200),t}},methods:{}},T={};var ve=a(me,de,pe,!1,_e,null,null,null);function _e(t){for(let e in T)this[e]=T[e]}const G=function(){return ve.exports}(),fe=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));var ge=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.windowHeight>512?i(xt,{attrs:{app:"",grow:"",value:t.activeMenuItem.index,height:48,fixed:""}},t._l(t.menuItems,function(s){return i(h,{key:s.name,on:{click:function(n){return t.menuClick(s.name)}}},[i("span",{class:{"grey--text":s.name!==t.activeMenuItem.item.name&&t.$vuetify.theme.dark}},[t._v(" "+t._s(s.text)+" ")]),i(r,[t._v(t._s(s.icon))])],1)}),1):t._e()},$e=[];const be={name:"BottomNavMenu",components:{},data(){return{windowHeight:window.innerHeight}},computed:{menuItems(){return this.$store.getters["navigation/mainMenuItems"]},activeMenuItem(){let t={index:0,item:null};for(let e=0;e<this.menuItems.length;e++)if(this.menuItems[e].name===this.$store.getters["navigation/mainMenuActive"]){t.index=e,t.item=this.menuItems[e];break}return t}},methods:{menuClick(t){t!==this.activeMenuItem.item.name?(this.$store.commit("navigation/setActiveMainMenu",t),this.$store.commit("dialog/loader/show"),this.$router.push({name:t})):t==="projects"&&this.$route.params.slug&&this.$router.push({name:"projects"})},onResize(){this.windowHeight=window.innerHeight}},mounted(){this.$nextTick(()=>{window.addEventListener("resize",this.onResize)})},beforeDestroy(){window.removeEventListener("resize",this.onResize)}},D={};var ye=a(be,ge,$e,!1,we,"164135ce",null,null);function we(t){for(let e in D)this[e]=D[e]}const Y=function(){return ye.exports}(),ke=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));var xe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(yt,{class:{"mdi-loading":t.mdiLoading}},[i("div",{staticClass:"topbar-backdrop"}),i("topbar"),i(K),i(St,{class:{"grey lighten-5":!t.$vuetify.theme.dark,"light darken-3":t.$vuetify.theme.dark}},[i("router-view"),i(r,{ref:"mdi-init",staticStyle:{visibility:"hidden"}},[t._v("dashboard")])],1),t.$vuetify.breakpoint.xsOnly?i(Y):t._e(),i(q),i(G)],1)},Me=[];const Ce={name:"Portfolio",components:{topbar:qt,sidebar:K,"dialog-loader":q,"dialog-image":()=>u(()=>Promise.resolve().then(()=>fe),void 0),"bottom-nav-menu":()=>u(()=>Promise.resolve().then(()=>ke),void 0)},data(){return{sidebar:{opened:!1},mdiLoading:!0}},computed:{},watch:{$route:{immediate:!0,handler(t,e){if(this.$route.meta.title!==void 0){let i=`${this.$store.getters.appName} | ${this.$route.meta.title}`;t.name==="projects"&&t.params.slug&&(i+=` ~ ${this.$store.getters["projects/all"][t.params.slug].title}`),document.title=i}}}},methods:{},mounted(){const t=this.$refs["mdi-init"],e=()=>t.$el.offsetWidth<=50?(t.$el.remove(),this.mdiLoading=!1,!0):!1;if(!e()){const i=setInterval(()=>{e()&&clearInterval(i)},60)}this.$vuetify.breakpoint.smAndDown&&this.$route.name==="overview"&&setTimeout(()=>{this.$store.commit("navigation/openSidebar"),setTimeout(()=>{const i=setInterval(()=>{this.$store.getters["navigation/sidebarLoaded"]?(clearInterval(i),this.$store.commit("navigation/closeSidebar")):this.$store.getters["navigation/sidebarOpened"]||clearInterval(i)},128)},2048)},128)}},R={};var Se=a(Ce,xe,Me,!1,Ae,null,null,null);function Ae(t){for(let e in R)this[e]=R[e]}const Ee=function(){return Se.exports}();export{Ee as default};