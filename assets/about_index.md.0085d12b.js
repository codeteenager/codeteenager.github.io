import{d as r,o,c as n,C as e,t as a,_ as c,J as _,a as u,F as h,R as m,b as v,y as f,S as d,U as l}from"./chunks/framework.70c95092.js";const g={class:"hero"},b={class:"title"},$={class:"lead"},x=r({__name:"Hero",props:{title:{},description:{}},setup(t){return(s,i)=>(o(),n("div",g,[e("h1",b,a(s.title),1),e("p",$,a(s.description),1)]))}});const w=c(x,[["__scopeId","data-v-8212f4ab"]]),y={},C={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2",width:"20",height:"20"},k=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},null,-1),S=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),I=[k,S];function B(t,s){return o(),n("svg",C,I)}const j=c(y,[["render",B]]),N=t=>(d("data-v-8e6e54a8"),t=t(),l(),t),A={class:"about-card"},V={class:"info"},H={class:"region"},J=N(()=>e("h4",null,"精通的领域",-1)),L={class:"proficiency"},T=["src"],z=r({__name:"AboutCard",setup(t){const s={name:"姜帅杰",intro:"不懂产品的项目管理者，不是一个好的前端工程师",proficiencies:["Vue","Node.js","JavaScript","Android"],region:"Beijing",banner:"/avatar.png"};return(i,q)=>(o(),n("div",A,[e("div",V,[e("h3",null,a(s.name),1),e("p",H,[_(j),u(" "+a(s.region),1)]),e("p",null,a(s.intro),1),J,e("p",null,[(o(!0),n(h,null,m(s.proficiencies,p=>(o(),n("span",L,a(p),1))),256))])]),e("img",{class:"big",src:v(f)(s.banner)},null,8,T)]))}});const D=c(z,[["__scopeId","data-v-8e6e54a8"]]),F=t=>(d("data-v-47266b5b"),t=t(),l(),t),M={class:"spotlight"},O={class:"spotlight-inner"},P=F(()=>e("h2",null,"个人简介",-1)),U=r({__name:"Content",setup(t){return(s,i)=>(o(),n("div",null,[_(w,{title:"大前端攻城师",description:"技术、产品、商业化"}),e("div",M,[e("div",O,[P,_(D)])])]))}});const E=c(U,[["__scopeId","data-v-47266b5b"]]),K=JSON.parse('{"title":"","titleTemplate":"大前端之路","description":"","frontmatter":{"layout":"page","titleTemplate":"大前端之路"},"headers":[],"relativePath":"about/index.md","filePath":"about/index.md","lastUpdated":1684151363000}'),R={name:"about/index.md"},Q=Object.assign(R,{setup(t){return(s,i)=>(o(),n("div",null,[_(E)]))}});export{K as __pageData,Q as default};