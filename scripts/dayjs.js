!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.dayjs=n()}(this,function(){"use strict";var a="millisecond",$="second",l="minute",m="hour",y="day",M="week",g="month",h="quarter",D="year",i=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,v=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,s=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},t={s:s,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+s(r,2,"0")+":"+s(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,g),i=n-r<0,s=t.clone().add(e+(i?-1:1),g);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:g,y:D,w:M,d:y,D:"date",h:m,m:l,s:$,ms:a,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},n={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},u="en",o={};o[u]=n;var f=function(t){return t instanceof p},c=function(t,n,e){var r;if(!t)return u;if("string"==typeof t)o[t]&&(r=t),n&&(o[t]=n,r=t);else{var i=t.name;o[i]=t,r=i}return e||(u=r),r},d=function(t,n,e){if(f(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new p(r)},S=t;S.l=c,S.i=f,S.w=function(t,n){return d(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var p=function(){function t(t){this.$L=this.$L||c(t.locale,null,!0),this.parse(t)}var n=t.prototype;return n.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(S.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(i);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return S},n.isValid=function(){return!("Invalid Date"===this.$d.toString())},n.isSame=function(t,n){var e=d(t);return this.startOf(n)<=e&&e<=this.endOf(n)},n.isAfter=function(t,n){return d(t)<this.startOf(n)},n.isBefore=function(t,n){return this.endOf(n)<d(t)},n.$g=function(t,n,e){return S.u(t)?this[n]:this.set(e,t)},n.year=function(t){return this.$g(t,"$y",D)},n.month=function(t){return this.$g(t,"$M",g)},n.day=function(t){return this.$g(t,"$W",y)},n.date=function(t){return this.$g(t,"$D","date")},n.hour=function(t){return this.$g(t,"$H",m)},n.minute=function(t){return this.$g(t,"$m",l)},n.second=function(t){return this.$g(t,"$s",$)},n.millisecond=function(t){return this.$g(t,"$ms",a)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,n){var r=this,i=!!S.u(n)||n,e=S.p(t),s=function(t,n){var e=S.w(r.$u?Date.UTC(r.$y,n,t):new Date(r.$y,n,t),r);return i?e:e.endOf(y)},u=function(t,n){return S.w(r.toDate()[t].apply(r.toDate(),(i?[0,0,0,0]:[23,59,59,999]).slice(n)),r)},o=this.$W,a=this.$M,h=this.$D,f="set"+(this.$u?"UTC":"");switch(e){case D:return i?s(1,0):s(31,11);case g:return i?s(1,a):s(0,a+1);case M:var c=this.$locale().weekStart||0,d=(o<c?o+7:o)-c;return s(i?h-d:h+(6-d),a);case y:case"date":return u(f+"Hours",0);case m:return u(f+"Minutes",1);case l:return u(f+"Seconds",2);case $:return u(f+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,n){var e,r=S.p(t),i="set"+(this.$u?"UTC":""),s=((e={})[y]=i+"Date",e.date=i+"Date",e[g]=i+"Month",e[D]=i+"FullYear",e[m]=i+"Hours",e[l]=i+"Minutes",e[$]=i+"Seconds",e[a]=i+"Milliseconds",e)[r],u=r===y?this.$D+(n-this.$W):n;if(r===g||r===D){var o=this.clone().set("date",1);o.$d[s](u),o.init(),this.$d=o.set("date",Math.min(this.$D,o.daysInMonth())).toDate()}else s&&this.$d[s](u);return this.init(),this},n.set=function(t,n){return this.clone().$set(t,n)},n.get=function(t){return this[S.p(t)]()},n.add=function(e,t){var n,r=this;e=Number(e);var i=S.p(t),s=function(t){var n=d(r);return S.w(n.date(n.date()+Math.round(t*e)),r)};if(i===g)return this.set(g,this.$M+e);if(i===D)return this.set(D,this.$y+e);if(i===y)return s(1);if(i===M)return s(7);var u=((n={})[l]=6e4,n[m]=36e5,n[$]=1e3,n)[i]||1,o=this.$d.getTime()+e*u;return S.w(o,this)},n.subtract=function(t,n){return this.add(-1*t,n)},n.format=function(t){var i=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",e=S.z(this),n=this.$locale(),r=this.$H,u=this.$m,o=this.$M,a=n.weekdays,h=n.months,f=function(t,n,e,r){return t&&(t[n]||t(i,s))||e[n].substr(0,r)},c=function(t){return S.s(r%12||12,t,"0")},d=n.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:f(n.monthsShort,o,h,3),MMMM:h[o]||h(this,s),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,a,2),ddd:f(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(r),HH:S.s(r,2,"0"),h:c(1),hh:c(2),a:d(r,u,!0),A:d(r,u,!1),m:String(u),mm:S.s(u,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:e};return s.replace(v,function(t,n){return n||$[t]||e.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,n,e){var r,i=S.p(n),s=d(t),u=6e4*(s.utcOffset()-this.utcOffset()),o=this-s,a=S.m(this,s);return a=((r={})[D]=a/12,r[g]=a,r[h]=a/3,r[M]=(o-u)/6048e5,r[y]=(o-u)/864e5,r[m]=o/36e5,r[l]=o/6e4,r[$]=o/1e3,r)[i]||o,e?a:S.a(a)},n.daysInMonth=function(){return this.endOf(g).$D},n.$locale=function(){return o[this.$L]},n.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=c(t,n,!0);return r&&(e.$L=r),e},n.clone=function(){return S.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},t}();return d.prototype=p.prototype,d.extend=function(t,n){return t(n,p,d),d},d.locale=c,d.isDayjs=f,d.unix=function(t){return d(1e3*t)},d.en=o[u],d.Ls=o,d});