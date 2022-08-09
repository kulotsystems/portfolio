import{q as h,c as s,b as g,g as p,m as u,r as v,s as b,t as _,_ as x,a as y}from"./VSpacer.922d6423.js";import{_ as B}from"./VImg.fb7352cc.js";import{V as m,n as T}from"./index.4f5d80e5.js";const r=h.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...h.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:s(this.computedHeight)}}},created(){[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]].forEach(([e,o])=>{this.$attrs.hasOwnProperty(e)&&g(e,o,this)})},methods:{genBackground(){const t={height:s(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(B,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:s(this.computedContentHeight)}},p(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:s(this.extensionHeight)}},p(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],o=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,o,e)}});function O(t,e,o){const{self:i=!1}=e.modifiers||{},l=e.value,n=typeof l=="object"&&l.options||{passive:!0},a=typeof l=="function"||"handleEvent"in l?l:l.handler,c=i?t:e.arg?document.querySelector(e.arg):window;!c||(c.addEventListener("scroll",a,n),t._onScroll=Object(t._onScroll),t._onScroll[o.context._uid]={handler:a,options:n,target:i?void 0:c})}function $(t,e,o){var i;if(!(!((i=t._onScroll)===null||i===void 0)&&i[o.context._uid]))return;const{handler:l,options:n,target:a=t}=t._onScroll[o.context._uid];a.removeEventListener("scroll",l,n),delete t._onScroll[o.context._uid]}const f={inserted:O,unbind:$},A=f;function H(t,e=[]){return u(v(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(o,i){i?this.removeApplication(!0):this.callUpdate()},applicationProperty(o,i){this.$vuetify.application.unregister(this._uid,i)}},activated(){this.callUpdate()},created(){for(let o=0,i=e.length;o<i;o++)this.$watch(e[o],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){!this.app||this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(o=!1){!o&&!this.app||this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}const S=m.extend({name:"scrollable",directives:{Scroll:f},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return typeof window<"u"},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||b(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){!this.canScroll||(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick(()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()}))},thresholdMet(){}}}),E=m.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}}),w=u(r,S,E,_,H("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),I=w.extend({name:"v-app-bar",directives:{Scroll:A},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return S.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...r.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return r.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25;return t+(1.5-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(!!this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=r.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&this.currentScroll===0&&this.isActive||this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?this.currentScroll===0||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&this.computedTransform!==0},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:r.options.computed.isCollapsed.call(this)},isProminent(){return r.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...r.options.computed.styles.call(this),fontSize:s(this.computedFontSize,"rem"),marginTop:s(this.computedMarginTop),transform:`translateY(${s(this.computedTransform)})`,left:s(this.computedLeft),right:s(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){!this.canScroll||!this.clippedLeft&&!this.clippedRight||this.callUpdate()},invertedScroll(t){this.isActive=!t||this.currentScroll!==0},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=r.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){if(this.invertedScroll){this.isActive=this.currentScroll>this.computedScrollThreshold;return}this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),!(this.currentThreshold<this.computedScrollThreshold)&&(this.savedScroll=this.currentScroll)}},render(t){const e=r.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}});var C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(x,{attrs:{fab:"",color:t.color,outlined:t.outlined,text:t.text,large:t.large,small:t.small,"x-small":t.xSmall},on:{click:function(i){return t.$store.commit("goto",t.url)}}},[o(y,[t._t("default")],2)],1)},P=[];const k={name:"ButtonSocial",components:{},props:{outlined:{type:Boolean,default:!1},text:{type:Boolean,default:!1},color:{type:String,default:"primary"},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},xSmall:{type:Boolean,default:!1},url:{type:String,default:null}},data(){return{}},computed:{},methods:{}},d={};var R=T(k,C,P,!1,U,null,null,null);function U(t){for(let e in d)this[e]=d[e]}const M=function(){return R.exports}(),N=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"}));export{N as B,S,I as _,H as a,E as b,M as c};
