import{_ as l,o as _,c as f,p as m,m as h,k as p,a1 as o,s as c,a2 as A,a3 as g,a4 as v,a5 as y,a6 as b,a7 as w,a8 as P,a9 as x,aa as C,ab as E,V as R,d as S,u as B,j as I,y as j,ac as D,ad as L,ae as T}from"./chunks/framework.d38f8df0.js";import{t as i}from"./chunks/theme.e856cf1a.js";const V="/weixin.jpeg";const O={},u=e=>(m("data-v-35a5fab5"),e=e(),h(),e),k={class:"content"},F=u(()=>p("img",{class:"icon",src:V},null,-1)),$=u(()=>p("span",{class:"text"},"微信公众号",-1)),M=[F,$];function N(e,t){return _(),f("div",k,M)}const G=l(O,[["render",N],["__scopeId","data-v-35a5fab5"]]),H={...i,Layout(){return o(i.Layout,null,{"aside-bottom":()=>o(G)})}};function d(e){if(e.extends){const t=d(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=d(H),U=S({name:"VitePressApp",setup(){const{site:e}=B();return I(()=>{j(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),D(),L(),T(),s.setup&&s.setup(),()=>o(s.Layout)}});async function q(){const e=J(),t=z();t.provide(g,e);const a=v(e.route);return t.provide(y,a),t.component("Content",b),t.component("ClientOnly",w),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:P}),{app:t,router:e,data:a}}function z(){return x(U)}function J(){let e=c,t;return C(a=>{let n=E(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=R(()=>import(n),[])),c&&(e=!1),r},s.NotFound)}c&&q().then(({app:e,router:t,data:a})=>{t.go().then(()=>{A(t.route,a.site),e.mount("#app")})});export{q as createApp};
