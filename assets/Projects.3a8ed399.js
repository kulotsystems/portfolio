import{n as B,_}from"./index.e390c0eb.js";import{E as ot,a as O,o as Q,j as Y,h as it,r as bt,p as X,q as st,n as ut,_ as E,l as yt,$ as Tt,s as G}from"./VSpacer.2ac18caf.js";import{c as J,_ as Ct}from"./ButtonSocial.a6f897e7.js";import{_ as lt}from"./VImg.f41dfa84.js";import{a as kt,_ as z}from"./VLazy.51dea9a0.js";const Dt=ot("v-toolbar__title");ot("v-toolbar__items");function v(t,r){if(r.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+r.length+" present")}function Ot(t){return v(1,arguments),t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function w(t){v(1,arguments);var r=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&r==="[object Date]"?new Date(t.getTime()):typeof t=="number"||r==="[object Number]"?new Date(t):((typeof t=="string"||r==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function xt(t){if(v(1,arguments),!Ot(t)&&typeof t!="number")return!1;var r=w(t);return!isNaN(Number(r))}function k(t){if(t===null||t===!0||t===!1)return NaN;var r=Number(t);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}function Mt(t,r){v(2,arguments);var e=w(t).getTime(),a=k(r);return new Date(e+a)}function Pt(t,r){v(2,arguments);var e=k(r);return Mt(t,-e)}var $t=864e5;function St(t){v(1,arguments);var r=w(t),e=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var a=r.getTime(),n=e-a;return Math.floor(n/$t)+1}function F(t){v(1,arguments);var r=1,e=w(t),a=e.getUTCDay(),n=(a<r?7:0)+a-r;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function ct(t){v(1,arguments);var r=w(t),e=r.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(e+1,0,4),a.setUTCHours(0,0,0,0);var n=F(a),o=new Date(0);o.setUTCFullYear(e,0,4),o.setUTCHours(0,0,0,0);var i=F(o);return r.getTime()>=n.getTime()?e+1:r.getTime()>=i.getTime()?e:e-1}function jt(t){v(1,arguments);var r=ct(t),e=new Date(0);e.setUTCFullYear(r,0,4),e.setUTCHours(0,0,0,0);var a=F(e);return a}var Et=6048e5;function Wt(t){v(1,arguments);var r=w(t),e=F(r).getTime()-jt(r).getTime();return Math.round(e/Et)+1}var Ut={};function N(){return Ut}function L(t,r){var e,a,n,o,i,u,c,l;v(1,arguments);var m=N(),d=k((e=(a=(n=(o=r==null?void 0:r.weekStartsOn)!==null&&o!==void 0?o:r==null||(i=r.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:m.weekStartsOn)!==null&&a!==void 0?a:(c=m.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&e!==void 0?e:0);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=w(t),f=h.getUTCDay(),p=(f<d?7:0)+f-d;return h.setUTCDate(h.getUTCDate()-p),h.setUTCHours(0,0,0,0),h}function dt(t,r){var e,a,n,o,i,u,c,l;v(1,arguments);var m=w(t),d=m.getUTCFullYear(),h=N(),f=k((e=(a=(n=(o=r==null?void 0:r.firstWeekContainsDate)!==null&&o!==void 0?o:r==null||(i=r.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:h.firstWeekContainsDate)!==null&&a!==void 0?a:(c=h.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=new Date(0);p.setUTCFullYear(d+1,0,f),p.setUTCHours(0,0,0,0);var x=L(p,r),T=new Date(0);T.setUTCFullYear(d,0,f),T.setUTCHours(0,0,0,0);var M=L(T,r);return m.getTime()>=x.getTime()?d+1:m.getTime()>=M.getTime()?d:d-1}function Yt(t,r){var e,a,n,o,i,u,c,l;v(1,arguments);var m=N(),d=k((e=(a=(n=(o=r==null?void 0:r.firstWeekContainsDate)!==null&&o!==void 0?o:r==null||(i=r.locale)===null||i===void 0||(u=i.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:m.firstWeekContainsDate)!==null&&a!==void 0?a:(c=m.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&e!==void 0?e:1),h=dt(t,r),f=new Date(0);f.setUTCFullYear(h,0,d),f.setUTCHours(0,0,0,0);var p=L(f,r);return p}var Ft=6048e5;function Lt(t,r){v(1,arguments);var e=w(t),a=L(e,r).getTime()-Yt(e,r).getTime();return Math.round(a/Ft)+1}function s(t,r){for(var e=t<0?"-":"",a=Math.abs(t).toString();a.length<r;)a="0"+a;return e+a}var Nt={y:function(t,r){var e=t.getUTCFullYear(),a=e>0?e:1-e;return s(r==="yy"?a%100:a,r.length)},M:function(t,r){var e=t.getUTCMonth();return r==="M"?String(e+1):s(e+1,2)},d:function(t,r){return s(t.getUTCDate(),r.length)},a:function(t,r){var e=t.getUTCHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h:function(t,r){return s(t.getUTCHours()%12||12,r.length)},H:function(t,r){return s(t.getUTCHours(),r.length)},m:function(t,r){return s(t.getUTCMinutes(),r.length)},s:function(t,r){return s(t.getUTCSeconds(),r.length)},S:function(t,r){var e=r.length,a=t.getUTCMilliseconds(),n=Math.floor(a*Math.pow(10,e-3));return s(n,r.length)}};const y=Nt;var D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},At={G:function(t,r,e){var a=t.getUTCFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return e.era(a,{width:"abbreviated"});case"GGGGG":return e.era(a,{width:"narrow"});case"GGGG":default:return e.era(a,{width:"wide"})}},y:function(t,r,e){if(r==="yo"){var a=t.getUTCFullYear(),n=a>0?a:1-a;return e.ordinalNumber(n,{unit:"year"})}return y.y(t,r)},Y:function(t,r,e,a){var n=dt(t,a),o=n>0?n:1-n;if(r==="YY"){var i=o%100;return s(i,2)}return r==="Yo"?e.ordinalNumber(o,{unit:"year"}):s(o,r.length)},R:function(t,r){var e=ct(t);return s(e,r.length)},u:function(t,r){var e=t.getUTCFullYear();return s(e,r.length)},Q:function(t,r,e){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(r){case"Q":return String(a);case"QQ":return s(a,2);case"Qo":return e.ordinalNumber(a,{unit:"quarter"});case"QQQ":return e.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,r,e){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(r){case"q":return String(a);case"qq":return s(a,2);case"qo":return e.ordinalNumber(a,{unit:"quarter"});case"qqq":return e.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,r,e){var a=t.getUTCMonth();switch(r){case"M":case"MM":return y.M(t,r);case"Mo":return e.ordinalNumber(a+1,{unit:"month"});case"MMM":return e.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(a,{width:"wide",context:"formatting"})}},L:function(t,r,e){var a=t.getUTCMonth();switch(r){case"L":return String(a+1);case"LL":return s(a+1,2);case"Lo":return e.ordinalNumber(a+1,{unit:"month"});case"LLL":return e.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(a,{width:"wide",context:"standalone"})}},w:function(t,r,e,a){var n=Lt(t,a);return r==="wo"?e.ordinalNumber(n,{unit:"week"}):s(n,r.length)},I:function(t,r,e){var a=Wt(t);return r==="Io"?e.ordinalNumber(a,{unit:"week"}):s(a,r.length)},d:function(t,r,e){return r==="do"?e.ordinalNumber(t.getUTCDate(),{unit:"date"}):y.d(t,r)},D:function(t,r,e){var a=St(t);return r==="Do"?e.ordinalNumber(a,{unit:"dayOfYear"}):s(a,r.length)},E:function(t,r,e){var a=t.getUTCDay();switch(r){case"E":case"EE":case"EEE":return e.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(a,{width:"short",context:"formatting"});case"EEEE":default:return e.day(a,{width:"wide",context:"formatting"})}},e:function(t,r,e,a){var n=t.getUTCDay(),o=(n-a.weekStartsOn+8)%7||7;switch(r){case"e":return String(o);case"ee":return s(o,2);case"eo":return e.ordinalNumber(o,{unit:"day"});case"eee":return e.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(n,{width:"short",context:"formatting"});case"eeee":default:return e.day(n,{width:"wide",context:"formatting"})}},c:function(t,r,e,a){var n=t.getUTCDay(),o=(n-a.weekStartsOn+8)%7||7;switch(r){case"c":return String(o);case"cc":return s(o,r.length);case"co":return e.ordinalNumber(o,{unit:"day"});case"ccc":return e.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(n,{width:"narrow",context:"standalone"});case"cccccc":return e.day(n,{width:"short",context:"standalone"});case"cccc":default:return e.day(n,{width:"wide",context:"standalone"})}},i:function(t,r,e){var a=t.getUTCDay(),n=a===0?7:a;switch(r){case"i":return String(n);case"ii":return s(n,r.length);case"io":return e.ordinalNumber(n,{unit:"day"});case"iii":return e.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(a,{width:"short",context:"formatting"});case"iiii":default:return e.day(a,{width:"wide",context:"formatting"})}},a:function(t,r,e){var a=t.getUTCHours(),n=a/12>=1?"pm":"am";switch(r){case"a":case"aa":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,r,e){var a=t.getUTCHours(),n;switch(a===12?n=D.noon:a===0?n=D.midnight:n=a/12>=1?"pm":"am",r){case"b":case"bb":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,r,e){var a=t.getUTCHours(),n;switch(a>=17?n=D.evening:a>=12?n=D.afternoon:a>=4?n=D.morning:n=D.night,r){case"B":case"BB":case"BBB":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,r,e){if(r==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),e.ordinalNumber(a,{unit:"hour"})}return y.h(t,r)},H:function(t,r,e){return r==="Ho"?e.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y.H(t,r)},K:function(t,r,e){var a=t.getUTCHours()%12;return r==="Ko"?e.ordinalNumber(a,{unit:"hour"}):s(a,r.length)},k:function(t,r,e){var a=t.getUTCHours();return a===0&&(a=24),r==="ko"?e.ordinalNumber(a,{unit:"hour"}):s(a,r.length)},m:function(t,r,e){return r==="mo"?e.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):y.m(t,r)},s:function(t,r,e){return r==="so"?e.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y.s(t,r)},S:function(t,r){return y.S(t,r)},X:function(t,r,e,a){var n=a._originalDate||t,o=n.getTimezoneOffset();if(o===0)return"Z";switch(r){case"X":return Z(o);case"XXXX":case"XX":return C(o);case"XXXXX":case"XXX":default:return C(o,":")}},x:function(t,r,e,a){var n=a._originalDate||t,o=n.getTimezoneOffset();switch(r){case"x":return Z(o);case"xxxx":case"xx":return C(o);case"xxxxx":case"xxx":default:return C(o,":")}},O:function(t,r,e,a){var n=a._originalDate||t,o=n.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+K(o,":");case"OOOO":default:return"GMT"+C(o,":")}},z:function(t,r,e,a){var n=a._originalDate||t,o=n.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+K(o,":");case"zzzz":default:return"GMT"+C(o,":")}},t:function(t,r,e,a){var n=a._originalDate||t,o=Math.floor(n.getTime()/1e3);return s(o,r.length)},T:function(t,r,e,a){var n=a._originalDate||t,o=n.getTime();return s(o,r.length)}};function K(t,r){var e=t>0?"-":"+",a=Math.abs(t),n=Math.floor(a/60),o=a%60;if(o===0)return e+String(n);var i=r||"";return e+String(n)+i+s(o,2)}function Z(t,r){if(t%60===0){var e=t>0?"-":"+";return e+s(Math.abs(t)/60,2)}return C(t,r)}function C(t,r){var e=r||"",a=t>0?"-":"+",n=Math.abs(t),o=s(Math.floor(n/60),2),i=s(n%60,2);return a+o+e+i}const Rt=At;var tt=function(t,r){switch(t){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},mt=function(t,r){switch(t){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},qt=function(t,r){var e=t.match(/(P+)(p+)?/)||[],a=e[1],n=e[2];if(!n)return tt(t,r);var o;switch(a){case"P":o=r.dateTime({width:"short"});break;case"PP":o=r.dateTime({width:"medium"});break;case"PPP":o=r.dateTime({width:"long"});break;case"PPPP":default:o=r.dateTime({width:"full"});break}return o.replace("{{date}}",tt(a,r)).replace("{{time}}",mt(n,r))},It={p:mt,P:qt};const Vt=It;function Ht(t){var r=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return r.setUTCFullYear(t.getFullYear()),t.getTime()-r.getTime()}var Qt=["D","DD"],Xt=["YY","YYYY"];function Bt(t){return Qt.indexOf(t)!==-1}function Gt(t){return Xt.indexOf(t)!==-1}function et(t,r,e){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(r,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(r,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(r,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Jt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},zt=function(t,r,e){var a,n=Jt[t];return typeof n=="string"?a=n:r===1?a=n.one:a=n.other.replace("{{count}}",r.toString()),e!=null&&e.addSuffix?e.comparison&&e.comparison>0?"in "+a:a+" ago":a};const Kt=zt;function H(t){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.width?String(r.width):t.defaultWidth,a=t.formats[e]||t.formats[t.defaultWidth];return a}}var Zt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},te={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ee={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},re={date:H({formats:Zt,defaultWidth:"full"}),time:H({formats:te,defaultWidth:"full"}),dateTime:H({formats:ee,defaultWidth:"full"})};const ae=re;var ne={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},oe=function(t,r,e,a){return ne[t]};const ie=oe;function S(t){return function(r,e){var a=e!=null&&e.context?String(e.context):"standalone",n;if(a==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=e!=null&&e.width?String(e.width):o;n=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=e!=null&&e.width?String(e.width):t.defaultWidth;n=t.values[c]||t.values[u]}var l=t.argumentCallback?t.argumentCallback(r):r;return n[l]}}var se={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},ue={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},le={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ce={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},de={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},me={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},fe=function(t,r){var e=Number(t),a=e%100;if(a>20||a<10)switch(a%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},ve={ordinalNumber:fe,era:S({values:se,defaultWidth:"wide"}),quarter:S({values:ue,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:S({values:le,defaultWidth:"wide"}),day:S({values:ce,defaultWidth:"wide"}),dayPeriod:S({values:de,defaultWidth:"wide",formattingValues:me,defaultFormattingWidth:"wide"})};const he=ve;function j(t){return function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.width,n=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=r.match(n);if(!o)return null;var i=o[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?pe(u,function(d){return d.test(i)}):ge(u,function(d){return d.test(i)}),l;l=t.valueCallback?t.valueCallback(c):c,l=e.valueCallback?e.valueCallback(l):l;var m=r.slice(i.length);return{value:l,rest:m}}}function ge(t,r){for(var e in t)if(t.hasOwnProperty(e)&&r(t[e]))return e}function pe(t,r){for(var e=0;e<t.length;e++)if(r(t[e]))return e}function _e(t){return function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.match(t.matchPattern);if(!a)return null;var n=a[0],o=r.match(t.parsePattern);if(!o)return null;var i=t.valueCallback?t.valueCallback(o[0]):o[0];i=e.valueCallback?e.valueCallback(i):i;var u=r.slice(n.length);return{value:i,rest:u}}}var we=/^(\d+)(th|st|nd|rd)?/i,be=/\d+/i,ye={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Te={any:[/^b/i,/^(a|c)/i]},Ce={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ke={any:[/1/i,/2/i,/3/i,/4/i]},De={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Oe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},xe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Me={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Pe={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},$e={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Se={ordinalNumber:_e({matchPattern:we,parsePattern:be,valueCallback:function(t){return parseInt(t,10)}}),era:j({matchPatterns:ye,defaultMatchWidth:"wide",parsePatterns:Te,defaultParseWidth:"any"}),quarter:j({matchPatterns:Ce,defaultMatchWidth:"wide",parsePatterns:ke,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:j({matchPatterns:De,defaultMatchWidth:"wide",parsePatterns:Oe,defaultParseWidth:"any"}),day:j({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:Me,defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:Pe,defaultMatchWidth:"any",parsePatterns:$e,defaultParseWidth:"any"})};const je=Se;var Ee={code:"en-US",formatDistance:Kt,formatLong:ae,formatRelative:ie,localize:he,match:je,options:{weekStartsOn:0,firstWeekContainsDate:1}};const We=Ee;var Ue=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ye=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Fe=/^'([^]*?)'?$/,Le=/''/g,Ne=/[a-zA-Z]/;function Ae(t,r,e){var a,n,o,i,u,c,l,m,d,h,f,p,x,T,M,A,R,q;v(2,arguments);var ht=String(r),P=N(),$=(a=(n=e==null?void 0:e.locale)!==null&&n!==void 0?n:P.locale)!==null&&a!==void 0?a:We,I=k((o=(i=(u=(c=e==null?void 0:e.firstWeekContainsDate)!==null&&c!==void 0?c:e==null||(l=e.locale)===null||l===void 0||(m=l.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&u!==void 0?u:P.firstWeekContainsDate)!==null&&i!==void 0?i:(d=P.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var V=k((f=(p=(x=(T=e==null?void 0:e.weekStartsOn)!==null&&T!==void 0?T:e==null||(M=e.locale)===null||M===void 0||(A=M.options)===null||A===void 0?void 0:A.weekStartsOn)!==null&&x!==void 0?x:P.weekStartsOn)!==null&&p!==void 0?p:(R=P.locale)===null||R===void 0||(q=R.options)===null||q===void 0?void 0:q.weekStartsOn)!==null&&f!==void 0?f:0);if(!(V>=0&&V<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!$.localize)throw new RangeError("locale must contain localize property");if(!$.formatLong)throw new RangeError("locale must contain formatLong property");var W=w(t);if(!xt(W))throw new RangeError("Invalid time value");var gt=Ht(W),pt=Pt(W,gt),_t={firstWeekContainsDate:I,weekStartsOn:V,locale:$,_originalDate:W},wt=ht.match(Ye).map(function(g){var b=g[0];if(b==="p"||b==="P"){var U=Vt[b];return U(g,$.formatLong)}return g}).join("").match(Ue).map(function(g){if(g==="''")return"'";var b=g[0];if(b==="'")return Re(g);var U=Rt[b];if(U)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Gt(g)&&et(g,r,String(t)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&Bt(g)&&et(g,r,String(t)),U(pt,g,$.localize,_t);if(b.match(Ne))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return g}).join("");return wt}function Re(t){var r=t.match(Fe);return r?r[1].replace(Le,"'"):t}var qe=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e(O,{attrs:{small:t.small}},[t._t("default")],2)},Ie=[];const Ve={name:"LabelDevTool",components:{},props:{small:{type:Boolean,default:!1}},data(){return{}},computed:{},methods:{}},rt={};var He=B(Ve,qe,Ie,!1,Qe,"151238fb",null,null);function Qe(t){for(let r in rt)this[r]=rt[r]}const ft=function(){return He.exports}(),Xe=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"}));var Be=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e(Q,{attrs:{height:"100%",elevation:"4",dark:t.$store.getters.isDarkMode}},[e(lt,{staticStyle:{cursor:"pointer"},attrs:{src:t.project.cover,"aspect-ratio":"1.36"},on:{click:function(a){return t.$store.commit("dialog/image/show",{image:t.project.cover,title:t.project.title})}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(Y,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e(it,{attrs:{indeterminate:"",color:"primary lighten-3"}})],1)]},proxy:!0}])}),e(bt,[e("div",{staticClass:"title"},[t._v(" "+t._s(t.project.title)+" ")])]),e(X,[e("p",{staticClass:"description mb-0"},[t._v(t._s(t.project.desc))])]),e(st,[t.project.production?e(J,{staticClass:"mx-0",attrs:{url:t.project.production,"x-small":t.$vuetify.breakpoint.lgAndDown,text:""}},[t._v("open_in_new")]):t._e(),t.project.repository?e(J,{staticClass:"mx-0",attrs:{url:t.project.repository,"x-small":t.$vuetify.breakpoint.lgAndDown,text:""}},[t._v("$github")]):t._e(),e(ut),e(E,{attrs:{text:"",color:"primary",exact:"",router:"",to:{name:"projects",params:{slug:this.project.slug}},"x-large":t.$vuetify.breakpoint.xl}},[t._v(" Read More "),e(O,{attrs:{right:"",large:t.$vuetify.breakpoint.xl}},[t._v("chevron_right")])],1)],1)],1)},Ge=[];const Je={name:"Project",props:{project:{type:Object,default:null}},components:{"button-social":()=>_(()=>import("./ButtonSocial.a6f897e7.js").then(t=>t.B),["assets/ButtonSocial.a6f897e7.js","assets/ButtonSocial.2bdc9981.css","assets/VSpacer.2ac18caf.js","assets/VSpacer.e0ab1624.css","assets/index.e390c0eb.js","assets/index.7a23d228.css","assets/VImg.f41dfa84.js","assets/VImg.f5d19e07.css"])},data(){return{}},computed:{},methods:{},mounted(){this.$store.commit("dialog/loader/hide")}},at={};var ze=B(Je,Be,Ge,!1,Ke,"6558ea93",null,null);function Ke(t){for(let r in at)this[r]=at[r]}const vt=function(){return ze.exports}(),Ze=Object.freeze(Object.defineProperty({__proto__:null,default:vt},Symbol.toStringTag,{value:"Module"}));var tr=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e(yt,{staticClass:"pl-md-0 pb-5 pb-md-12"},[t.project?e(Y,{staticClass:"mt-sm-1 mt-md-2 mt-lg-3"},[e(z,{class:{"px-7":t.$vuetify.breakpoint.mdAndUp},attrs:{cols:"12",md:"7"}},[e(Q,{class:{transparent:t.$vuetify.breakpoint.smAndDown},attrs:{elevation:t.$vuetify.breakpoint.smAndDown?0:4,dark:t.$store.getters.isDarkMode}},[e(Ct,{staticClass:"transparent",attrs:{flat:""}},[e(E,{staticClass:"mr-1",attrs:{icon:"","x-large":t.$vuetify.breakpoint.xl},on:{click:function(a){return t.$router.back()}}},[e(O,[t._v("arrow_back")])],1),e(Dt,{staticClass:"pl-0",class:t.$store.getters["breakpoints/font/p"]+(t.$vuetify.breakpoint.smAndDown?" font-weight-bold dark--text text--lighten-1":"")},[t._v(" Project: "+t._s(t.project.title)+" ")]),e(ut),e(E,{attrs:{icon:""},on:{click:function(a){return t.$store.commit("dialog/image/show",{image:t.project.cover,title:t.project.title})}}},[e(O,{attrs:{small:t.$vuetify.breakpoint.lgAndDown}},[t._v("open_in_full")])],1)],1),e(X,{staticClass:"pt-0"},[e(lt,{class:{thumbnail:t.$vuetify.breakpoint.smAndDown},attrs:{src:t.project.cover,height:"100%"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(Y,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e(it,{attrs:{indeterminate:"",color:"primary lighten-3"}})],1)]},proxy:!0}])})],1),e(st,{staticClass:"pt-0 pt-md-2"},t._l(t.project.techStack,function(a){return e(ft,{key:a,staticClass:"mx-2",attrs:{small:a!=="php"}},[t._v(" $"+t._s(a)+" ")])}),1)],1)],1),e(z,{staticClass:"mb-5",class:(t.$vuetify.breakpoint.smAndDown?"px-7 ":"")+t.$store.getters["breakpoints/font/p"],attrs:{cols:"12",md:"5"}},[e(G,{staticClass:"transparent",attrs:{dark:t.$store.getters.isDarkMode}},[e("p",[e("b",[t._v(t._s(t.project.title))]),t._v(" is "),t.project.desc.substr(0,2).toLowerCase()==="an"?[t._v(" an "+t._s(t.project.desc.substr(3))+" ")]:[t._v(" a "+t._s(t.project.desc.substr(2))+" ")]],2),e("p",[t._v(" This project was built using "),t._l(t.project.techStack,function(a,n){return[e("a",{staticClass:"primary--text",attrs:{href:t.$store.getters["technologies/stacks"][a].url,target:"_blank"}},[t._v(t._s(t.$store.getters["technologies/stacks"][a].text))]),t.project.techStack.length>2&&n<t.project.techStack.length-1?[t._v(", ")]:t._e(),n===t.project.techStack.length-2?[t._v(" and ")]:t._e()]}),t._v(". I started it on "+t._s(t.formatDate(t.project.timeFrame.start))+" "),t.project.timeFrame.end?[t._v(" then completed it on "+t._s(t.formatDate(t.project.timeFrame.end))+". ")]:[t._v(" and still open for changes and maintenance at present. ")]],2),e(G,{staticClass:"mt-7 py-3 px-2 text-center rounded",class:{"primary lighten-5":t.$store.getters.isLightMode}},[t.project.repository?e(E,{attrs:{color:"primary",large:"",text:""},on:{click:function(a){return t.$store.commit("goto",t.project.repository)}}},[e(O,{attrs:{small:"",left:""}},[t._v("$github")]),t._v(" Repo"),!t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.md&&!t.project.production?[t._v("sitory")]:t._e()],2):t._e(),t.project.production?e(E,{class:{"ml-3":t.project.repository},attrs:{color:"primary",large:"",text:""},on:{click:function(a){return t.$store.commit("goto",t.project.production)}}},[e(O,{attrs:{small:"",left:""}},[t._v("open_in_new")]),t._v(" See Live ")],1):t._e()],1)],1)],1)],1):e(Q,{staticClass:"transparent mt-2 mt-sm-3 mt-md-4",attrs:{flat:"",dark:t.$store.getters.isDarkMode}},[e(X,[e("p",{staticClass:"text-h4 text-md-h3 text-xl-h2 font-weight-bold mb-0"},[t._v(" Featured Projects ")])]),e(Tt,[e("p",{staticClass:"mb-10",class:t.$store.getters["breakpoints/font/p"]},[t._v(" I enjoy creating projects that are both useful and fun to use. In this page, you'll find a mix of functional systems and personal projects that demonstrate my ability to develop solutions for a variety of users. ")]),e(Y,t._l(t.projects,function(a,n,o){return e(kt,{key:n,staticClass:"col-sm-6 col-md-4 col-lg-3 col-12",attrs:{transition:"slide-x-transition"},model:{value:a.transition,callback:function(i){t.$set(a,"transition",i)},expression:"project.transition"}},[e(vt,{attrs:{project:Object.assign({slug:n},a)}})],1)}),1)],1)],1)],1)},er=[];const rr={name:"Projects",components:{"button-social":()=>_(()=>import("./ButtonSocial.a6f897e7.js").then(t=>t.B),["assets/ButtonSocial.a6f897e7.js","assets/ButtonSocial.2bdc9981.css","assets/VSpacer.2ac18caf.js","assets/VSpacer.e0ab1624.css","assets/index.e390c0eb.js","assets/index.7a23d228.css","assets/VImg.f41dfa84.js","assets/VImg.f5d19e07.css"]),"label-dev-tool":()=>_(()=>Promise.resolve().then(()=>Xe),void 0),project:()=>_(()=>Promise.resolve().then(()=>Ze),void 0),"project-classy":()=>_(()=>import("./ProjectSanayon.3a24dbfe.js"),["assets/ProjectSanayon.3a24dbfe.js","assets/index.e390c0eb.js","assets/index.7a23d228.css"]),"project-schedule":()=>_(()=>import("./ProjectSchedule.54c904a9.js"),["assets/ProjectSchedule.54c904a9.js","assets/index.e390c0eb.js","assets/index.7a23d228.css"]),"project-dtr-lgu-nabua":()=>_(()=>import("./ProjectDtrLguNabua.2f659f74.js"),["assets/ProjectDtrLguNabua.2f659f74.js","assets/index.e390c0eb.js","assets/index.7a23d228.css"]),"project-lending-system":()=>_(()=>import("./ProjectAppexGBLendingSystem.5db21c14.js"),["assets/ProjectAppexGBLendingSystem.5db21c14.js","assets/index.e390c0eb.js","assets/index.7a23d228.css"]),"project-pageant-tabulations":()=>_(()=>import("./ProjectPageantTabulations.6869480f.js"),["assets/ProjectPageantTabulations.6869480f.js","assets/index.e390c0eb.js","assets/index.7a23d228.css"]),"project-sanayon":()=>_(()=>import("./ProjectSanayon.3a24dbfe.js"),["assets/ProjectSanayon.3a24dbfe.js","assets/index.e390c0eb.js","assets/index.7a23d228.css"])},data(){return{}},computed:{projects(){return this.$store.getters["projects/all"]},project(){return this.$route.params.slug!=null?this.projects[this.$route.params.slug]:null}},methods:{formatDate(t){return Ae(new Date(t),"MMMM yyyy")}},created(){this.$store.commit("navigation/setActiveMainMenu","projects"),this.$route.params.slug&&!this.project&&this.$router.replace({name:"projects"})}},nt={};var ar=B(rr,tr,er,!1,nr,"df332852",null,null);function nr(t){for(let r in nt)this[r]=nt[r]}const cr=function(){return ar.exports}();export{cr as default};
