(this["webpackJsonpreact-crypto-information"]=this["webpackJsonpreact-crypto-information"]||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a.n(r),s=(a(148),a(13)),o=(a(149),a(18)),l=a.n(o),d=a(21),j=a(22),u=a.n(j),b=a(316),h=a(5),p=a(33),f=a(323),O=a(326),x=a(320),g=a(322),m=a(327),v=a(337),w=a(325),y=a(134),C=a(321),k=a(88),S=a.n(k),B=a(90),F=a.n(B),P=a(89),I=a.n(P),_=a(87),T=a.n(_),A=a(324),E=a(3),M=Object(b.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}})),N=Object(h.a)((function(e){return{head:{backgroundColor:"#202020",color:e.palette.common.white},body:{fontSize:14}}}))(x.a);function z(e){var t=M(),a=Object(p.a)(),n=e.count,c=e.page,r=e.rowsPerPage,i=e.onChangePage;return Object(E.jsxs)("div",{className:t.root,children:[Object(E.jsx)(C.a,{onClick:function(e){i(e,0)},disabled:0===c,"aria-label":"first page",children:"rtl"===a.direction?Object(E.jsx)(T.a,{}):Object(E.jsx)(S.a,{})}),Object(E.jsx)(C.a,{onClick:function(e){i(e,c-1)},disabled:0===c,"aria-label":"previous page",children:"rtl"===a.direction?Object(E.jsx)(I.a,{}):Object(E.jsx)(F.a,{})}),Object(E.jsx)(C.a,{onClick:function(e){i(e,c+1)},disabled:c>=Math.ceil(n/r)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(E.jsx)(F.a,{}):Object(E.jsx)(I.a,{})}),Object(E.jsx)(C.a,{onClick:function(e){i(e,Math.max(0,Math.ceil(n/r)-1))},disabled:c>=Math.ceil(n/r)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(E.jsx)(S.a,{}):Object(E.jsx)(T.a,{})})]})}var D=Object(b.a)({table:{minWidth:500}});var R=function(e){var t=e.data,a=e.columns,n=D(),r=c.a.useState(0),i=Object(s.a)(r,2),o=i[0],l=i[1],d=c.a.useState(9),j=Object(s.a)(d,2),u=j[0],b=j[1],h=u-Math.min(u,t.length-o*u);return Object(E.jsx)(g.a,{component:y.a,children:Object(E.jsxs)(f.a,{className:n.table,"aria-label":"custom pagination table",children:[Object(E.jsx)(A.a,{children:Object(E.jsx)(w.a,{children:a.map((function(e){return Object(E.jsx)(N,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(E.jsxs)(O.a,{children:[(u>0?t.slice(o*u,o*u+u):t).map((function(e,t){return Object(E.jsxs)(w.a,{children:[Object(E.jsx)(x.a,{children:t+1+o*u}),Object(E.jsx)(x.a,{style:{width:400},children:e.name}),Object(E.jsxs)(x.a,{style:{width:120,color:-1===Math.sign(e.change_percent)?"#ff1a1a":"limegreen"},children:[e.change_percent,"%"]}),Object(E.jsx)(x.a,{style:{width:120},children:e.total_coin}),Object(E.jsxs)(x.a,{style:{width:120},children:[e.best,"/USDT"]}),Object(E.jsxs)(x.a,{style:{width:120,color:-1===Math.sign(e.best_percent)?"#ff1a1a":"limegreen"},children:[e.best_percent,"%"]})]},e.id)})),h>0&&Object(E.jsx)(w.a,{style:{height:53*h},children:Object(E.jsx)(x.a,{colSpan:6})})]}),Object(E.jsx)(m.a,{children:Object(E.jsx)(w.a,{children:Object(E.jsx)(v.a,{rowsPerPageOptions:[9,15,25,{label:"All",value:-1}],colSpan:5,count:t.length,rowsPerPage:u,page:o,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){b(parseInt(e.target.value,10)),l(0)},ActionsComponent:z})})})]})})};var G=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://dncapi.bqrank.net/api/concept/web-conceptlist?page=1&webp=1");case 2:t=e.sent,c(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),5e4);return function(){return clearInterval(a)}}),[]),Object(E.jsx)(R,{data:a,columns:[{id:"rank",label:"Rank"},{id:"name",label:"\u677f\u584a"},{id:"change_percent",label:"\u6f32\u8dcc\u5e45"},{id:"total_coin",label:"\u5e63\u7a2e"},{id:"best",label:"\u6700\u597d\u5e63\u7a2e"},{id:"best_percent",label:"\u9818\u6f32"}]})},q=a(19);var L=function(e){var t=e.data;return q.a.defaults.color="#fefefe",q.a.defaults.borderColor="#686868",Object(E.jsx)("div",{children:Object(E.jsx)(q.c,{data:t,width:500,height:300,options:{maintainAspectRatio:!1}})})};var W=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(l.a.mark((function e(){var t,a,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],n=[],e.next=5,u.a.get("https://dncapi.bqrank.net/api/coin/coin_accounting?webp=1");case 5:for(r=e.sent,n=["#FF6F61","#34568B","#6B5B95","#88B04B","#F7CAC9","#92A8D1","#B565A7","#955251","#009B77","#BC243C"],i=0;i<10;i++)t.push(r.data.data[i].symbol),a.push(r.data.data[i].percentage);c({labels:t,datasets:[{data:a,backgroundColor:n,borderColor:"#fefefe"}]});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),3e5)}()}),[]),Object(E.jsx)("div",{children:Object(E.jsx)("div",{style:{marginTop:30,marginBottom:20,fontSize:50},children:Object(E.jsx)(L,{data:a})})})};var J=function(){q.a.defaults.color="#fefefe",q.a.defaults.borderColor="#686868";var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){!function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,u.a.get("https://dncapi.bqrank.net/api/home/global?webp=1");case 3:a=e.sent,t.push(a.data.data.risenum),t.push(a.data.data.fallnum),c(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),3e4)}()}),[]),Object(E.jsx)("div",{children:Object(E.jsx)(q.c,{data:{labels:["\u4e0a\u6f32\u6578\u91cf","\u4e0b\u8dcc\u6578\u91cf"],datasets:[{label:"My First Dataset",data:a,backgroundColor:["#00ff00","#cd0000"],hoverOffset:4}]},width:500,height:300,options:{maintainAspectRatio:!1}})})},U=a(329),H=Object(h.a)((function(e){return{head:{backgroundColor:"#202020",color:e.palette.common.white},body:{fontSize:14}}}))(x.a),K=Object(h.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(w.a),Q=Object(b.a)({table:{minWidth:400}});var V=function(e){var t=e.data,a=Q();return Object(E.jsx)(g.a,{component:y.a,children:Object(E.jsxs)(f.a,{className:a.table,"aria-label":"customized table",children:[Object(E.jsx)(A.a,{children:Object(E.jsxs)(w.a,{children:[Object(E.jsx)(H,{children:"\u8cc7\u6599\u4f86\u6e90: \u93c8\u65b0\u805e"}),Object(E.jsx)(H,{children:"\u65e5\u671f"})]})}),Object(E.jsx)(O.a,{children:t.map((function(e){return Object(E.jsxs)(K,{children:[Object(E.jsx)(H,{children:Object(E.jsx)(U.a,{href:e.link,style:{color:"#fefefe"},children:e.title.rendered})}),Object(E.jsxs)(H,{children:[e.date[5]+e.date[6],"/",e.date[8]+e.date[9]]})]},e.id)}))})]})})};var X=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://www.abmedia.io/wp-json/wp/v2/posts?categories_exclude=3818%2C3819%2C3820%2C3782%2C1&per_page=9");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),3e5);return function(){return clearInterval(a)}}),[]),Object(E.jsx)(V,{data:a})},Y=a(335),Z=a(131),$=a(331),ee=a(332),te=a(284),ae=a(334),ne=a(330);var ce=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),o=i[0],j=i[1];return Object(n.useEffect)((function(){!function(){var e=[],t=[];function a(){return(a=Object(d.a)(l.a.mark((function a(){var n,r,i;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.get("https://api.alternative.me/fng/?limit=30");case 2:for(n=a.sent,r=0;r<30;r++)e.push(n.data.data[r].value),i=new Date(1e3*n.data.data[r].timestamp).toLocaleDateString("en-US"),t.push(i);c(e.reverse()),j(t.reverse());case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}()}),[]),Object(E.jsxs)("div",{children:[Object(E.jsx)(ne.a,{children:Object(E.jsx)(te.a,{align:"center",style:{marginTop:5,paddingBottom:5,fontSize:16},children:"Extrem Fear: 0-25 |   Fear: 26-50 | Greed: 51-75 | Extrem Fear: 76-100"})}),Object(E.jsx)(q.b,{width:500,height:100,data:{labels:o,datasets:[{label:"Bitcoin Fear & Greed Index: ",data:a,borderColor:"#fefefe"}]}})]})},re=a(333),ie=a(328),se=a(336),oe=a.p+"static/media/logo.221fea2f.png";var le=function(){q.a.defaults.color="#fefefe",q.a.defaults.borderColor="#686868";var e=c.a.useState([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,u.a.get("https://dncapi.bqrank.net/api/v2/news/action_stat?webp=1");case 3:for(a=e.sent,n=0;n<3;n++)t.push(a.data.data.items[n].ratio);r(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e();var a=setInterval((function(){e()}),5e4)}()}),[]),Object(E.jsx)("div",{children:Object(E.jsx)(q.c,{data:{labels:["\u770b\u6f32","\u7a7a\u624b","\u770b\u8dcc"],datasets:[{data:a,backgroundColor:["#00ff00","#696969","#cd0000"],hoverOffset:4}]},width:500,height:300,options:{maintainAspectRatio:!1}})})},de=Object(Z.a)({palette:{type:"dark"},typography:{fontFamily:"'Baloo Tammudu 2', 'cursive';",fontSize:15}}),je=Object(b.a)((function(e){return{container:{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(3)},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,whiteSpace:"nowrap",marginBottom:e.spacing(1)},divider:{margin:e.spacing(2,0)},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"}}}));var ue=function(){var e=je(),t=Object(n.useState)("First"),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(E.jsxs)($.a,{theme:de,children:[Object(E.jsx)(ee.a,{}),Object(E.jsx)(re.a,{position:"relative",style:{background:"#202020"},children:Object(E.jsxs)(ie.a,{children:[Object(E.jsx)(C.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(E.jsx)("div",{className:"head",children:Object(E.jsx)("img",{src:oe,alt:"logo",width:"40",height:"40"})})}),Object(E.jsx)(te.a,{variant:"h4",className:e.title,style:{marginTop:20,marginBottom:10},children:"Crypto Information"})]})}),Object(E.jsxs)(ae.a,{children:[Object(E.jsx)("div",{className:"topnav",style:{marginTop:30,marginBottom:10},children:Object(E.jsxs)(Y.a,{container:!0,spacing:0,alignItems:"center",justify:"center",children:[Object(E.jsx)(se.a,{onClick:function(){r("First")},children:"\u6f32\u8dcc\u5206\u4f48"}),Object(E.jsx)(se.a,{onClick:function(){return r("Second")},children:"\u5e02\u5834\u60c5\u6cc1"}),Object(E.jsx)(se.a,{onClick:function(){return r("Third")},children:"\u5e02\u5360\u7387"}),Object(E.jsx)(se.a,{onClick:function(){return r("Fourth")},children:"\u8caa\u5a6a\u6307\u6a19"})]})}),Object(E.jsxs)("div",{style:{marginBottom:30},children:["First"===c&&Object(E.jsx)(J,{}),"Second"===c&&Object(E.jsx)(le,{}),"Third"===c&&Object(E.jsx)(W,{}),"Fourth"===c&&Object(E.jsx)(ce,{})]}),Object(E.jsxs)(Y.a,{container:!0,spacing:3,children:[Object(E.jsx)(Y.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(G,{})}),Object(E.jsx)(Y.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(X,{})})]})]})]})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,338)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(ue,{})}),document.getElementById("root")),be()}},[[282,1,2]]]);
//# sourceMappingURL=main.6b4ec5cd.chunk.js.map