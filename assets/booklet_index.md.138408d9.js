import{d as l,o as s,c as o,k as t,t as i,_ as p,l as n,a3 as h,a4 as v,f,e as b,C as g,H as c,w as k,F as y,D as C}from"./chunks/framework.dedf0ccc.js";const x={class:"product-Hero"},P={class:"title"},$={class:"lead"},w=l({__name:"ProductHero",props:{title:{},description:{}},setup(a){return(e,_)=>(s(),o("div",x,[t("h1",P,i(e.title),1),t("p",$,i(e.description),1)]))}});const H=p(w,[["__scopeId","data-v-48d6dcb4"]]),L={class:"info"},B=["src"],D=l({__name:"ProductCard",props:{data:{}},setup(a){const e=a,{name:_,intro:u,banner:r,link:d}=e.data,m=()=>{window.open(d,"_blank")};return(J,U)=>(s(),o("div",{class:"product-card",onClick:m},[t("div",L,[t("h3",null,i(n(_)),1),h(t("p",null,i(n(u)),513),[[v,n(u)]])]),n(r)?(s(),o("img",{key:0,class:"big",src:n(f)(n(r))},null,8,B)):b("",!0)]))}});const I=p(D,[["__scopeId","data-v-2264f1ae"]]),N={class:"product-list"},O=l({__name:"ProductList",setup(a){const e=[{name:"前端开发核心知识进阶",intro:"",banner:"/booklet/1.jpg",link:"https://codeteenager.github.io/fe-core-book/"},{name:"前端插件化框架设计",intro:"",banner:"/booklet/1.jpg",link:"https://codeteenager.github.io/fe-pluggable/"}];return(_,u)=>{const r=g("ClientOnly");return s(),o("div",N,[c(r,null,{default:k(()=>[(s(),o(y,null,C(e,d=>c(I,{key:d.name,data:d},null,8,["data"])),64))]),_:1})])}}});const j=p(O,[["__scopeId","data-v-e007b9ef"]]),S={class:"product-list"},T={class:"product-list-inner"},V=l({__name:"Content",setup(a){return(e,_)=>(s(),o("div",null,[c(H,{title:"小册",description:""}),t("div",S,[t("div",T,[c(j)])])]))}});const F=p(V,[["__scopeId","data-v-eb776a41"]]),z=JSON.parse('{"title":"","titleTemplate":"大前端之路","description":"","frontmatter":{"layout":"page","titleTemplate":"大前端之路"},"headers":[],"relativePath":"booklet/index.md","filePath":"booklet/index.md","lastUpdated":1699428304000}'),E={name:"booklet/index.md"},A=Object.assign(E,{setup(a){return(e,_)=>(s(),o("div",null,[c(F)]))}});export{z as __pageData,A as default};