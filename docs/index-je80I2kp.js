import{j as g,k as D,r as x,o as F,b as K,l as R,c as k,d as l,m as U,f as a,g as e,t as w,w as t,h as n,n as S,u as j,p as i,q,i as r,s as W,v as G,x as m,y as H,z as J,A as O,T as P,K as Q,B as X,C as Y}from"./index-B1IWFz1r.js";import{u as Z}from"./user-BYl4buo9.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ee={class:"app-container"},te={class:"logo"},se={class:"main-container"},oe={class:"header"},ae={class:"left"},ne={class:"middle"},le={class:"page-title"},ie={class:"right"},de={class:"user-info"},ue={class:"user-name"},re={class:"content-container"},ce={__name:"index",setup(_e){const y=j(),f=D(),b=Z(),C=g(()=>b.userInfo),B=g(()=>f.path),T=g(()=>({"/admin/teacher":"教师管理","/admin/performance":"业绩管理","/admin/system":"系统管理"})[f.path]||"教师系统管理平台"),s=x(!1),d=x(!1),p=()=>{d.value=window.innerWidth<768,d.value&&!s.value&&(s.value=!0)},E=()=>{s.value=!s.value,localStorage.setItem("sidebarStatus",s.value?"1":"0")},I=()=>{s.value=!0},M=()=>{const c=localStorage.getItem("sidebarStatus");c&&(s.value=c==="1"),p(),window.addEventListener("resize",p)};F(()=>{M()}),K(()=>{window.removeEventListener("resize",p)}),R(f,()=>{d.value&&(s.value=!0)});const z=()=>{Y.confirm("确定要退出登录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{b.logout(),y.push("/login")}).catch(()=>{})};return(c,o)=>{const u=n("el-icon"),v=n("el-menu-item"),N=n("el-menu"),h=n("el-dropdown-item"),V=n("el-dropdown-menu"),L=n("el-dropdown"),A=n("router-view");return l(),k("div",ee,[d.value&&!s.value?(l(),k("div",{key:0,class:"mobile-mask",onClick:I})):U("",!0),a("div",{class:S(["sidebar",{collapsed:s.value,"mobile-sidebar":d.value}])},[a("div",te,w(s.value?"教师系统":"教师系统管理平台"),1),e(N,{"default-active":B.value,class:"sidebar-menu","background-color":"#304156","text-color":"#fff","active-text-color":"#409EFF",router:"",collapse:s.value},{default:t(()=>[e(v,{index:"/admin/teacher"},{title:t(()=>o[0]||(o[0]=[r("教师管理")])),default:t(()=>[e(u,null,{default:t(()=>[e(i(q))]),_:1})]),_:1}),e(v,{index:"/admin/performance"},{title:t(()=>o[1]||(o[1]=[r("业绩管理")])),default:t(()=>[e(u,null,{default:t(()=>[e(i(W))]),_:1})]),_:1}),e(v,{index:"/admin/system"},{title:t(()=>o[2]||(o[2]=[r("系统管理")])),default:t(()=>[e(u,null,{default:t(()=>[e(i(G))]),_:1})]),_:1})]),_:1},8,["default-active","collapse"])],2),a("div",se,[a("div",oe,[a("div",ae,[e(u,{onClick:E,class:S({"el-icon-rotate":s.value})},{default:t(()=>[s.value?(l(),m(i(J),{key:1})):(l(),m(i(H),{key:0}))]),_:1},8,["class"])]),a("div",ne,[a("h3",le,w(T.value),1)]),a("div",ie,[e(L,{trigger:"click"},{dropdown:t(()=>[e(V,null,{default:t(()=>[e(h,null,{default:t(()=>o[4]||(o[4]=[r("个人信息")])),_:1}),e(h,{divided:"",onClick:z},{default:t(()=>o[5]||(o[5]=[r("退出登录")])),_:1})]),_:1})]),default:t(()=>{var _;return[a("span",de,[o[3]||(o[3]=a("img",{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",class:"user-avatar"},null,-1)),a("span",ue,w(((_=C.value)==null?void 0:_.name)||"用户"),1),e(u,null,{default:t(()=>[e(i(O))]),_:1})])]}),_:1})])]),a("div",re,[e(A,null,{default:t(({Component:_})=>[e(P,{name:"fade",mode:"out-in"},{default:t(()=>[(l(),m(Q,null,[(l(),m(X(_)))],1024))]),_:2},1024)]),_:1})])])])}}},ve=$(ce,[["__scopeId","data-v-2d96cc28"]]);export{ve as default};
