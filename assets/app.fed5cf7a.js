import{_ as l,o as _,c as f,p as m,m as h,k as p,a5 as o,s as r,a6 as A,a7 as g,a8 as v,a9 as y,aa as b,ab as P,ac as w,ad as C,ae as x,af as E,X as R,d as S,u as B,j as I,y as D,ag as L,ah as T,ai as j}from"./chunks/framework.1790f0b9.js";import{t as i}from"./chunks/theme.8499930a.js";import{_ as O}from"./chunks/weixin.2e321fdb.js";const V={},u=e=>(m("data-v-35a5fab5"),e=e(),h(),e),k={class:"content"},F=u(()=>p("img",{class:"icon",src:O},null,-1)),$=u(()=>p("span",{class:"text"},"微信公众号",-1)),M=[F,$];function N(e,t){return _(),f("div",k,M)}const G=l(V,[["render",N],["__scopeId","data-v-35a5fab5"]]),H={...i,Layout(){return o(i.Layout,null,{"aside-bottom":()=>o(G)})}};function d(e){if(e.extends){const t=d(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=d(H),U=S({name:"VitePressApp",setup(){const{site:e}=B();return I(()=>{D(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),L(),T(),j(),s.setup&&s.setup(),()=>o(s.Layout)}});async function X(){const e=z(),t=q();t.provide(g,e);const a=v(e.route);return t.provide(y,a),t.component("Content",b),t.component("ClientOnly",P),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:w}),{app:t,router:e,data:a}}function q(){return C(U)}function z(){let e=r,t;return x(a=>{let n=E(a),c=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),c=R(()=>import(n),[])),r&&(e=!1),c},s.NotFound)}r&&X().then(({app:e,router:t,data:a})=>{t.go().then(()=>{A(t.route,a.site),e.mount("#app")})});export{X as createApp};
