(this["webpackJsonpreact-crypto-information"]=this["webpackJsonpreact-crypto-information"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a.n(r),s=(a(153),a(14)),o=(a(154),a(18)),l=a.n(o),j=a(21),d=a(22),b=a.n(d),u=a(319),h=a(5),p=a(35),f=a(325),O=a(328),x=a(322),g=a(324),m=a(329),v=a(339),w=a(327),y=a(136),C=a(323),k=a(92),S=a.n(k),B=a(94),F=a.n(B),T=a(93),P=a.n(T),I=a(91),_=a.n(I),A=a(326),E=a(2),M=Object(u.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}})),W=Object(h.a)((function(e){return{head:{backgroundColor:"#202020",color:e.palette.common.white},body:{fontSize:14}}}))(x.a);function N(e){var t=M(),a=Object(p.a)(),n=e.count,c=e.page,r=e.rowsPerPage,i=e.onChangePage;return Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsx)(C.a,{onClick:function(e){i(e,0)},disabled:0===c,"aria-label":"first page",children:"rtl"===a.direction?Object(E.jsx)(_.a,{}):Object(E.jsx)(S.a,{})}),Object(E.jsx)(C.a,{onClick:function(e){i(e,c-1)},disabled:0===c,"aria-label":"previous page",children:"rtl"===a.direction?Object(E.jsx)(P.a,{}):Object(E.jsx)(F.a,{})}),Object(E.jsx)(C.a,{onClick:function(e){i(e,c+1)},disabled:c>=Math.ceil(n/r)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(E.jsx)(F.a,{}):Object(E.jsx)(P.a,{})}),Object(E.jsx)(C.a,{onClick:function(e){i(e,Math.max(0,Math.ceil(n/r)-1))},disabled:c>=Math.ceil(n/r)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(E.jsx)(S.a,{}):Object(E.jsx)(_.a,{})})]})}var z=Object(u.a)({table:{minWidth:500}});var D=function(e){var t=e.data,a=e.columns,n=z(),r=c.a.useState(0),i=Object(s.a)(r,2),o=i[0],l=i[1],j=c.a.useState(9),d=Object(s.a)(j,2),b=d[0],u=d[1],h=b-Math.min(b,t.length-o*b);return Object(E.jsx)(g.a,{component:y.a,children:Object(E.jsxs)(f.a,{className:n.table,"aria-label":"custom pagination table",children:[Object(E.jsx)(A.a,{children:Object(E.jsx)(w.a,{children:a.map((function(e){return Object(E.jsx)(W,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(E.jsxs)(O.a,{children:[(b>0?t.slice(o*b,o*b+b):t).map((function(e,t){return Object(E.jsxs)(w.a,{children:[Object(E.jsx)(x.a,{children:t+1+o*b}),Object(E.jsx)(x.a,{style:{width:400},children:e.name}),Object(E.jsxs)(x.a,{style:{width:120,color:-1===Math.sign(e.change_percent)?"#ff1a1a":"limegreen"},children:[e.change_percent,"%"]}),Object(E.jsx)(x.a,{style:{width:120},children:e.total_coin}),Object(E.jsxs)(x.a,{style:{width:120},children:[e.best,"/USDT"]}),Object(E.jsxs)(x.a,{style:{width:120,color:-1===Math.sign(e.best_percent)?"#ff1a1a":"limegreen"},children:[e.best_percent,"%"]})]},e.id)})),h>0&&Object(E.jsx)(w.a,{style:{height:53*h},children:Object(E.jsx)(x.a,{colSpan:6})})]}),Object(E.jsx)(m.a,{children:Object(E.jsx)(w.a,{children:Object(E.jsx)(v.a,{rowsPerPageOptions:[9,15,25,{label:"All",value:-1}],colSpan:5,count:t.length,rowsPerPage:b,page:o,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){u(parseInt(e.target.value,10)),l(0)},ActionsComponent:N})})})]})})},R=a(290),G=a(340),q=a(133),L=a(341),J=a(331),U=Object(q.a)();U=Object(L.a)(U);var H=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://dncapi.bqrank.net/api/concept/web-conceptlist?page=1&webp=1");case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),5e4);return function(){return clearInterval(a)}}),[]),Object(E.jsxs)("div",{children:[Object(E.jsxs)(J.a,{theme:U,children:[Object(E.jsx)(R.a,{variant:"h4",style:{marginTop:20,marginBottom:10},children:Object(E.jsx)(G.a,{fontWeight:"fontWeightBold",children:"\u677f\u584a\u5206\u4f48"})}),Object(E.jsx)(R.a,{variant:"h7",style:{marginTop:20,marginBottom:10},children:Object(E.jsx)(G.a,{color:"#c1b9bc",children:"\u5e63\u5708\u7531\u8a31\u591a\u4e0d\u540c\u9818\u57df\u6240\u7d44\u6210\uff0c\u6b64\u8868\u6392\u5217\u51fa\u4e86\u5168\u90e8\u9818\u57df\u4ee5\u53ca\u66f4\u6df1\u5165\u7684\u8a0a\u606f"})})]}),Object(E.jsx)(D,{data:a,columns:[{id:"rank",label:"Rank"},{id:"name",label:"\u677f\u584a"},{id:"change_percent",label:"\u6f32\u8dcc\u5e45"},{id:"total_coin",label:"\u5e63\u7a2e"},{id:"best",label:"\u6700\u597d\u5e63\u7a2e"},{id:"best_percent",label:"\u9818\u6f32"}]})]})},K=a(19);var Q=function(e){var t=e.data;return K.a.defaults.color="#fefefe",K.a.defaults.borderColor="#686868",Object(E.jsx)("div",{children:Object(E.jsx)(K.c,{data:t,width:500,height:300,options:{maintainAspectRatio:!1}})})};var V=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(j.a)(l.a.mark((function e(){var t,a,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],n=[],e.next=5,b.a.get("https://dncapi.bqrank.net/api/coin/coin_accounting?webp=1");case 5:for(r=e.sent,n=["#FF6F61","#34568B","#6B5B95","#88B04B","#F7CAC9","#92A8D1","#B565A7","#955251","#009B77","#BC243C"],i=0;i<10;i++)t.push(r.data.data[i].symbol),a.push(r.data.data[i].percentage);c({labels:t,datasets:[{data:a,backgroundColor:n,borderColor:"#fefefe"}]});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),3e5)}()}),[]),Object(E.jsx)("div",{children:Object(E.jsx)("div",{style:{marginTop:30,marginBottom:20,fontSize:50},children:Object(E.jsx)(Q,{data:a})})})};var X=function(){K.a.defaults.color="#fefefe",K.a.defaults.borderColor="#686868";var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,b.a.get("https://dncapi.bqrank.net/api/home/global?webp=1");case 3:a=e.sent,t.push(a.data.data.risenum),t.push(a.data.data.fallnum),c(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),3e4)}()}),[]),Object(E.jsx)("div",{children:Object(E.jsx)(K.c,{data:{labels:["\u4e0a\u6f32\u6578\u91cf","\u4e0b\u8dcc\u6578\u91cf"],datasets:[{label:"My First Dataset",data:a,backgroundColor:["#00ff00","#cd0000"],hoverOffset:4}]},width:500,height:300,options:{maintainAspectRatio:!1}})})},Y=a(332),Z=Object(h.a)((function(e){return{head:{backgroundColor:"#202020",color:e.palette.common.white},body:{fontSize:14}}}))(x.a),$=Object(h.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(w.a),ee=Object(u.a)({table:{minWidth:400}});var te=function(e){var t=e.data,a=ee();return Object(E.jsx)(g.a,{component:y.a,children:Object(E.jsxs)(f.a,{className:a.table,"aria-label":"customized table",children:[Object(E.jsx)(A.a,{children:Object(E.jsxs)(w.a,{children:[Object(E.jsx)(Z,{children:"\u65e5\u671f"}),Object(E.jsx)(Z,{})]})}),Object(E.jsx)(O.a,{children:t.map((function(e){return Object(E.jsxs)($,{children:[Object(E.jsxs)(Z,{children:[e.date[5]+e.date[6],"/",e.date[8]+e.date[9]]}),Object(E.jsx)(Z,{children:Object(E.jsx)(Y.a,{href:e.link,style:{color:"#fefefe"},children:e.title.rendered})})]},e.id)}))})]})})},ae=Object(q.a)();ae=Object(L.a)(ae);var ne=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://www.abmedia.io/wp-json/wp/v2/posts?categories_exclude=3818%2C3819%2C3820%2C3782%2C1&per_page=9");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),3e5);return function(){return clearInterval(a)}}),[]),Object(E.jsxs)("div",{children:[Object(E.jsxs)(J.a,{theme:ae,children:[Object(E.jsx)(R.a,{variant:"h4",style:{marginTop:20,marginBottom:10},children:Object(E.jsx)(G.a,{fontWeight:"fontWeightBold",children:"\u4eca\u65e5\u65b0\u805e"})}),Object(E.jsx)(R.a,{variant:"h7",style:{marginTop:20,marginBottom:10},children:Object(E.jsx)(G.a,{color:"#c1b9bc",children:"\u6b64\u8868\u5217\u51fa\u5f9e\u93c8\u65b0\u805e\u53d6\u51fa\u7684\u65b0\u805e"})})]}),Object(E.jsx)(te,{data:a})]})},ce=a(337),re=a(334),ie=a(336),se=a(333);var oe=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),o=i[0],d=i[1];return Object(n.useEffect)((function(){!function(){var e=[],t=[];function a(){return(a=Object(j.a)(l.a.mark((function a(){var n,r,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.get("https://api.alternative.me/fng/?limit=30");case 2:for(n=a.sent,r=0;r<30;r++)e.push(n.data.data[r].value),i=new Date(1e3*n.data.data[r].timestamp).toLocaleDateString("en-US"),t.push(i);c(e.reverse()),d(t.reverse());case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}()}),[]),Object(E.jsxs)("div",{children:[Object(E.jsx)(se.a,{children:Object(E.jsx)(R.a,{align:"center",style:{marginTop:5,paddingBottom:5,fontSize:16},children:"Extrem Fear: 0-25 |   Fear: 26-50 | Greed: 51-75 | Extrem Fear: 76-100"})}),Object(E.jsx)(K.b,{width:500,height:250,data:{labels:o,datasets:[{label:"Bitcoin Fear & Greed Index: ",data:a,borderColor:"#fefefe"}]}})]})},le=a(335),je=a(330),de=a(338),be=a.p+"static/media/logo.221fea2f.png";var ue=function(){K.a.defaults.color="#fefefe",K.a.defaults.borderColor="#686868";var e=c.a.useState([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(j.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,b.a.get("https://dncapi.bqrank.net/api/v2/news/action_stat?webp=1");case 3:for(a=e.sent,n=0;n<3;n++)t.push(a.data.data.items[n].ratio);r(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),5e4)}()}),[]),Object(E.jsx)("div",{children:Object(E.jsx)(K.c,{data:{labels:["\u770b\u6f32","\u7a7a\u624b","\u770b\u8dcc"],datasets:[{data:a,backgroundColor:["#00ff00","#696969","#cd0000"],hoverOffset:4}]},width:500,height:300,options:{maintainAspectRatio:!1}})})},he=Object(q.a)({palette:{type:"dark"},typography:{fontFamily:"'Baloo Tammudu 2', 'cursive';",fontSize:15}}),pe=Object(u.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},divider:{margin:e.spacing(2,0)},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"}}}));var fe=function(){var e=pe(),t=Object(n.useState)("First"),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(E.jsxs)(J.a,{theme:he,children:[Object(E.jsx)(re.a,{}),Object(E.jsx)(le.a,{position:"relative",style:{background:"#202020"},children:Object(E.jsxs)(je.a,{children:[Object(E.jsx)(C.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(E.jsx)("div",{className:"head",children:Object(E.jsx)("img",{src:be,alt:"logo",width:"35",height:"35"})})}),Object(E.jsx)(R.a,{variant:"h4",className:e.title,style:{marginTop:20,marginBottom:10},children:"Crypto Information"})]})}),Object(E.jsxs)(ie.a,{children:[Object(E.jsx)("div",{className:"topnav",style:{marginTop:30,marginBottom:10},children:Object(E.jsxs)(ce.a,{container:!0,spacing:0,alignItems:"center",justify:"center",children:[Object(E.jsx)(de.a,{onClick:function(){return r("First")},children:"\u6f32\u8dcc\u5206\u4f48"}),Object(E.jsx)(de.a,{onClick:function(){return r("Second")},children:"\u5e02\u5834\u60c5\u6cc1"}),Object(E.jsx)(de.a,{onClick:function(){return r("Third")},children:"\u5e02\u5360\u7387"}),Object(E.jsx)(de.a,{onClick:function(){return r("Fourth")},children:"\u8caa\u5a6a\u6307\u6a19"})]})}),Object(E.jsxs)("div",{style:{marginBottom:30},children:["First"===c&&Object(E.jsx)(X,{}),"Second"===c&&Object(E.jsx)(ue,{}),"Third"===c&&Object(E.jsx)(V,{}),"Fourth"===c&&Object(E.jsx)(oe,{})]}),Object(E.jsxs)(ce.a,{container:!0,spacing:3,children:[Object(E.jsx)(ce.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(H,{})}),Object(E.jsx)(ce.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(ne,{})})]})]})]})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,343)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(fe,{})}),document.getElementById("root")),Oe()}},[[287,1,2]]]);
//# sourceMappingURL=main.08bf8bfe.chunk.js.map