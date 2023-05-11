import{d as k,m as u,o as e,c as i,C as s,b as o,y as f,t as d,G as p,_ as g,a as w,F as h,R as v,D as b}from"./chunks/framework.5c52ccef.js";const j=["href"],_={class:"box"},y={class:"box-header"},S=["innerHTML"],x={key:1,class:"icon"},V=["src","alt"],C={key:2,class:"icon"},N={class:"avatar"},z=["id"],A={key:0,class:"desc"},T=k({__name:"NavLink",props:{icon:null,title:null,desc:null,link:null},setup(t){const n=t,l=u(()=>typeof n.icon=="object"?n.icon.svg:""),c=u(()=>n.title?n.title.slice(0,1):"");return(a,r)=>t.link?(e(),i("a",{key:0,class:"nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[s("article",_,[s("div",y,[o(l)?(e(),i("div",{key:0,class:"icon",innerHTML:o(l)},null,8,S)):t.icon&&typeof t.icon=="string"?(e(),i("div",x,[s("img",{src:o(f)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,V)])):(e(),i("div",C,[s("div",N,d(o(c)),1)])),t.title?(e(),i("h5",{key:3,id:t.title,class:"title"},d(t.title),9,z)):p("",!0)]),t.desc?(e(),i("p",A,d(t.desc),1)):p("",!0)])],8,j)):p("",!0)}});const R=g(T,[["__scopeId","data-v-e94b4e7d"]]),D=["id"],E=["href"],I={class:"nav-links"},J=k({__name:"NavLinks",props:{title:null,items:null},setup(t){return(n,l)=>(e(),i(h,null,[t.title?(e(),i("h2",{key:0,id:t.title,tabindex:"-1"},[w(d(t.title)+" ",1),s("a",{class:"header-anchor",href:`#${t.title}`,"aria-hidden":"true"},null,8,E)],8,D)):p("",!0),s("div",I,[(e(!0),i(h,null,v(t.items,({icon:c,title:a,desc:r,link:m})=>(e(),b(R,{key:m,icon:c,title:a,desc:r,link:m},null,8,["icon","title","desc","link"]))),128))])],64))}});const U=g(J,[["__scopeId","data-v-ee4ccae3"]]),M=[{title:"技术团队",items:[{icon:"",title:"凹凸实验室",desc:"",link:""},{icon:"",title:"奇舞团",desc:"",link:"https://75.team/"},{icon:"",title:"百度FEX",desc:"",link:"http://fex.baidu.com/"},{icon:"",title:"去哪网UED",desc:"",link:"http://ued.qunar.com/"},{icon:"",title:"AlloyTeam",desc:"",link:"http://www.alloyteam.com/"},{icon:"",title:"大淘宝技术",desc:"",link:"https://tech.taobao.org/"},{icon:"",title:"美团技术团队",desc:"",link:"https://tech.meituan.com/"},{icon:"",title:"抖音前端",desc:"",link:"https://douyinfe.com/"},{icon:"",title:"抖音前端安全",desc:"",link:"https://juejin.cn/team/6947994054248366121/posts"},{icon:"",title:"阿里UED",desc:"",link:"https://www.aliued.com/"},{icon:"",title:"滴滴FE",desc:"",link:"https://github.com/DDFE/DDFE-blog"},{icon:"",title:"有赞前端",desc:"",link:"https://tech.youzan.com/tag/front-end/page/2/"},{icon:"",title:"腾讯 TNFE",desc:"",link:"https://github.com/tnfe/TNT-Weekly"},{icon:"",title:"蚂蚁数据体验技术团队",desc:"",link:"https://github.com/ProtoTeam/blog"},{icon:"",title:"阮一峰weekly",desc:"",link:"https://github.com/ruanyf/weekly"},{icon:"",title:"IMWeb",desc:"",link:"https://imweb.io/"},{icon:"",title:"爱奇艺技术产品团队",desc:"",link:"https://blog.csdn.net/weixin_38753262?type=blog"},{icon:"",title:"鑫空间，鑫生活",desc:"",link:"https://www.zhangxinxu.com/"},{icon:"",title:"支付宝体验科技",desc:"",link:"https://zhuanlan.zhihu.com/xtech"},{icon:"",title:"阿里飞冰",desc:"",link:"https://www.zhihu.com/column/ice-design"},{icon:"",title:"前端精读周刊",desc:"",link:"https://github.com/ascoders/weekly"},{icon:"",title:"百度Geek说",desc:"",link:"https://www.infoq.cn/profile/7A6A18227E53FA/publish"},{icon:"",title:"云音乐大前端专栏",desc:"",link:"https://musicfe.com/"},{icon:"",title:"字节前端",desc:"",link:"https://www.zhihu.com/org/zi-jie-qian-duan/posts"},{icon:"",title:"字节教育",desc:"",link:"https://juejin.cn/team/6954914058332176397/posts"},{icon:"",title:"政采云技术",desc:"",link:"https://juejin.cn/user/3456520257288974/posts"},{icon:"",title:"PingCode研发中心",desc:"",link:"https://www.infoq.cn/profile/B31194CBCA0635/publish"},{icon:"",title:"阿里妈妈MUX",desc:"",link:"https://mux.alimama.com/"}]},{title:"前端大会",items:[{icon:"",title:"Vue.js开发者大会",desc:"Vue.js开发者大会 中国站",link:"https://vue.w3ctech.com/"},{icon:"",title:"前端圈",desc:"打造专业的前端技术会议",link:"https://fequan.com/"},{icon:"",title:"中国CSS开发者大会",desc:"中国第五届CSS开发者大会",link:"https://css.w3ctech.com/"},{icon:"",title:"JS中国开发者大会",desc:"中国JavaScript社区会议",link:"https://jsconfchina.com/"},{icon:"",title:"全球大前端技术大会",desc:"帮助参会者了解大前端&移动开发领域的技术趋势与实践案例",link:"https://gmtc.infoq.cn/"},{icon:"",title:"D2前端技术论坛",desc:"阿里巴巴举办，分享技术的乐趣，探讨行业的发展",link:"http://d2forum.alibaba-inc.com/"}]},{title:"设计资源",items:[{icon:"",title:"花瓣网",desc:"花瓣，陪你做生活的设计师",link:"http://huaban.com/"},{icon:"",title:"Dribbble",desc:"设计作品的交流平台",link:"https://dribbble.com/"},{icon:"",title:"站酷",desc:"打开站酷，发现更好的设计！",link:"http://www.zcool.com.cn/"},{icon:"",title:"Behance",desc:"系列设计作品开放平台",link:"https://www.behance.net/"},{icon:"",title:"UIGREAT",desc:"UI设计师学习交流社区",link:"http://www.uigreat.com/"}]},{title:"前端工具",items:[{icon:"https://caniuse.com/img/favicon-128.png",title:"Can I use",desc:"Web前端兼容性列表",link:"https://caniuse.com"},{icon:"https://tinypng.com/images/apple-touch-icon.png",title:"TinyPNG",desc:"在线图片压缩工具",link:"https://tinypng.com"},{icon:"https://devtool.tech/logo.svg",title:"开发者武器库",desc:"开发者武器库，做开发者最专业最好用的专业工具箱",link:"https://devtool.tech"},{icon:"https://tool.lu/favicon.ico",title:"在线工具",desc:"开发人员的工具箱",link:"https://tool.lu"},{icon:"",title:"Json 中文网",desc:"JSON 在线解析及格式化验证",link:"https://www.json.cn"},{icon:"",title:"CSS3渐变生成工具",desc:"便捷生成 CSS3 渐变背景色",link:"https://www.colorzilla.com/gradient-editor/"},{icon:"",title:"emoji",desc:"在线查询 emoji 图标代码，markdown 文档必备",link:"https://www.webfx.com/tools/emoji-cheat-sheet/"}]},{title:"React 生态",items:[{icon:"https://zh-hans.reactjs.org/favicon.ico",title:"React",desc:"用于构建用户界面的 JavaScript 库",link:"https://zh-hans.reactjs.org"},{icon:"https://reactrouter.com/favicon-light.png",title:"React Router",desc:"React 的声明式路由",link:"https://reactrouter.com"},{icon:"https://nextjs.org/static/favicon/safari-pinned-tab.svg",title:"Next.js",desc:"一个用于 Web 的 React 框架",link:"https://nextjs.org"},{icon:"https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",title:"UmiJS",desc:"插件化的企业级前端应用框架",link:"https://umijs.org"},{icon:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",title:"Ant Design",desc:"一套企业级 UI 设计语言和 React 组件库",link:"https://ant.design"},{icon:"https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",title:"Ant Design Mobile",desc:"构建移动 WEB 应用程序的 React 组件库",link:"https://mobile.ant.design"},{icon:"https://docs.pmnd.rs/apple-touch-icon.png",title:"Zustand",desc:"一个小型、快速、可扩展的 React 状态管理解决方案",link:"https://docs.pmnd.rs/zustand/getting-started/introduction"},{icon:"https://valtio.pmnd.rs/favicon.ico",title:"Valtio",desc:"makes proxy-state simple for React and Vanilla",link:"https://valtio.pmnd.rs"},{icon:"https://jotai.org/favicon.svg",title:"Jotai",desc:"primitive and flexible state management for React",link:"https://jotai.org"},{icon:"https://cn.redux.js.org/img/redux.svg",title:"Redux",desc:"JavaScript 应用的状态容器，提供可预测的状态管理",link:"https://cn.redux.js.org"},{icon:"https://zh.mobx.js.org/assets/mobx.png",title:"MobX",desc:"一个小型、快速、可扩展的 React 状态管理解决方案",link:"https://zh.mobx.js.org"},{icon:"https://ahooks.js.org/simple-logo.svg",title:"ahooks",desc:"一套高质量可靠的 React Hooks 库",link:"https://ahooks.js.org/zh-CN"}]},{title:"Vue 生态",items:[{icon:"https://cn.vuejs.org/logo.svg",title:"Vue 3",desc:"渐进式 JavaScript 框架",link:"https://cn.vuejs.org"},{icon:"https://cn.vuejs.org/logo.svg",title:"Vue 2",desc:"渐进式 JavaScript 框架",link:"https://v2.cn.vuejs.org"},{icon:"https://cn.vuejs.org/logo.svg",title:"Vue Router",desc:`Vue.js 的官方路由
为 Vue.js 提供富有表现力、可配置的、方便的路由`,link:"https://router.vuejs.org/zh"},{icon:"https://pinia.vuejs.org/logo.svg",title:"Pinia",desc:"符合直觉的 Vue.js 状态管理库",link:"https://pinia.vuejs.org/zh"},{icon:"https://nuxt.com/icon.png",title:"Nuxt.js",desc:"一个基于 Vue.js 的通用应用框架",link:"https://nuxt.com"},{icon:"https://vueuse.org/favicon.svg",title:"VueUse",desc:"Vue Composition API 的常用工具集",link:"https://vueuse.org"},{icon:"https://element-plus.org/images/element-plus-logo-small.svg",title:"Element Plus",desc:"基于 Vue 3，面向设计师和开发者的组件库",link:"https://element-plus.org"},{icon:"https://www.antdv.com/assets/logo.1ef800a8.svg",title:"Ant Design Vue",desc:"Ant Design 的 Vue 实现，开发和服务于企业级后台产品",link:"https://antdv.com"},{icon:"https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",title:"Vant",desc:"轻量、可定制的移动端 Vue 组件库",link:"https://vant-ui.github.io/vant"},{icon:"https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",title:"Cube UI",desc:"基于 Vue.js 实现的精致移动端组件库",link:"https://didi.github.io/cube-ui"},{icon:"https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",title:"NutUI",desc:"京东风格的轻量级移动端组件库",link:"https://nutui.jd.com"}]},{title:"Node相关",items:[{title:"Node.js文档",icon:"",desc:"Node.js 是一个开源的、跨平台的 JavaScript 运行时环境",link:"http://nodejs.cn/"},{title:"Express",icon:"",desc:"基于 Node.js 平台，快速、开放、极简的 Web 开发框架",link:"https://www.expressjs.com.cn/"},{title:"Koa",icon:"",desc:"基于node平台的下一代web开发框架",link:"https://koa.bootcss.com/"},{title:"Eggjs",icon:"",desc:"为企业级框架和应用而生",link:"https://www.eggjs.org/zh-CN"},{title:"Nest",icon:"",desc:"用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",link:"https://docs.nestjs.cn/"},{title:"midway",icon:"",desc:"Midway 是阿里巴巴 - 淘宝前端架构团队，基于渐进式理念研发的 Node.js 框架，通过自研的依赖注入容器，搭配各种上层模块，组合出适用于不同场景的解决方案",link:"https://midwayjs.org/"}]},{title:"编译&构建&打包",items:[{title:"Webpack",icon:"",desc:"目前最热门的前端资源模块化管理和打包工具",link:"https://www.webpackjs.com/"},{title:"Vite",icon:"",desc:"下一代的前端工具链，为开发提供极速响应",link:"https://cn.vitejs.dev/"},{title:"Rollup",icon:"",desc:"Rollup 是一个 JavaScript 模块打包工具，可以将多个小的代码片段编译为完整的库和应用",link:"https://www.rollupjs.com/"},{title:"Swc",icon:"",desc:"SWC is an extensible Rust-based platform for the next generation of fast developer tools.",link:"https://swc.rs/"},{title:"Esbuild",icon:"",desc:"An extremely fast bundler for the web",link:"https://esbuild.github.io/"},{title:"Turbopack",icon:"",desc:"Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",link:"https://turbo.build/"},{title:"Gulp",icon:"",desc:"用自动化构建工具增强你的工作流程！",link:"https://www.gulpjs.com.cn/"},{title:"Babel",icon:"",desc:"Babel 是一个 JavaScript 编译器。",link:"https://www.babeljs.cn/"},{title:"Pnpm",icon:"",desc:"通过 Pnpm 可以安装、共享、分发代码,管理项目依赖关系。",link:"https://pnpm.io/zh/"},{title:"Lerna",icon:"",desc:"Lerna is a fast, modern build system for managing and publishing multiple JavaScript/TypeScript packages from the same repository",link:"https://lerna.js.org/"},{title:"npm",icon:"",desc:"通过 npm 可以安装、共享、分发代码,管理项目依赖关系",link:"https://www.npmjs.com/"},{title:"Yarn",icon:"",desc:"快速、可靠、安全的依赖管理。",link:"https://yarnpkg.com/"},{title:"PostCSS",icon:"",desc:"是一个用 JavaScript 工具和插件转换 CSS 代码的工具",link:"https://www.postcss.com.cn/"},{title:"Plop",icon:"",desc:"Plop is a little tool that saves you time and helps your team build new files with consistency",link:"https://plopjs.com/"}]},{title:"微前端相关",items:[{title:"Single Spa",icon:"",desc:"A javascript router for front-end microservices",link:"https://single-spa.js.org/"},{title:"Qiankun",icon:"",desc:"可能是你见过最完善的微前端解决方案",link:"https://qiankun.umijs.org/zh"},{title:"无界",icon:"",desc:"极致的微前端框架,基于 WebComponent 容器 + iframe 沙箱",link:"https://wujie-micro.github.io/doc/"},{title:"MicroApp",icon:"",desc:"一款轻量、高效、功能强大的微前端框架",link:"https://zeroing.jd.com/micro-app/"},{title:"Garfish",icon:"",desc:"包含构建微前端系统时所需要的基本能力，任意前端框架均可使用。接入简单，可轻松将多个前端应用组合成内聚的单个产品",link:"https://www.garfishjs.org/"},{title:"EMP",icon:"",desc:"下一代微前端构建方案，聚焦 ESM 微前端生态闭环建设",link:"https://emp2.netlify.app/"},{title:"ICESTARK",icon:"",desc:"面向大型系统的微前端解决方案",link:"https://micro-frontends.ice.work/"}]},{title:"字体图标",items:[{title:"iconfont",icon:"",desc:"阿里妈妈MUX打造的图标库，是国内功能很强大且图标内容很丰富的矢量图标库。",link:"https://www.iconfont.cn/"},{title:"Font Awesome",icon:"",desc:"一款风靡全球的图标字体库和CSS框架。",link:"http://fontawesome.dashgame.com/"}]},{title:"小程序相关",items:[{title:"mpvue",icon:"",desc:"基于 Vue.js 的小程序开发框架，从底层支持 Vue.js 语法和构建工具体系",link:"http://mpvue.com/"},{title:"uni-app",icon:"",desc:"uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台。",link:"https://uniapp.dcloud.io/"},{title:"Taro",icon:"",desc:"使用 React 的方式开发小程序的框架，同时支持生成多端应用",link:"https://taro.js.org/"},{title:"Chameleon",icon:"",desc:"一套代码运行多端，一端所见即多端所见",link:"https://cml.js.org/"}]},{title:"可视化",items:[{title:"D3.js",icon:"",desc:"用动态图形显示数据的JavaScript库",link:"https://d3js.org/"},{title:"Echarts",icon:"",desc:"百度开发的可定制的数据可视化图表",link:"http://echarts.baidu.com/"},{title:"three.js",icon:"",desc:"three.js是JavaScript编写的WebGL第三方库。提供了非常多的3D显示功能",link:"https://threejs.org/"},{title:"AntV",icon:"",desc:"蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",link:"https://antv.vision/zh"},{title:"Chart.js",icon:"",desc:"一个简单、面向对象，为设计和开发者准备的图表绘制工具库",link:"https://www.chartjs.org/"},{title:"Ant Design Charts",icon:"",desc:"简单好用的 React 图表库",link:"https://charts.ant.design/zh"}]},{title:"设计工具",items:[{title:"Figma",icon:"",desc:"最受欢迎的UI设计工具",link:"https://www.figma.com/"},{title:"Sketch",icon:"",desc:"适用于所有设计师的矢量绘图应用",link:"https://www.sketch.com/"},{title:"XD",icon:"",desc:"一站式UX/UI设计平台",link:"https://adobexdplatform.com/"},{title:"蓝湖",icon:"",desc:"高效的产品设计协作平台",link:"https://lanhuapp.com/"}]},{title:"前端学习",items:[{title:"W3school",icon:"",desc:"w3school在线教程，全球最大的中文Web技术教程",link:"https://www.w3school.com.cn/"},{title:"百度前端技术学园",icon:"",desc:"由百度创办的免费前端技术学习实践、交流、分享平台",link:"http://ife.baidu.com/"},{title:"前端周刊",icon:"",desc:"前端周刊，给前端同学准备的每周 1 小时阅读清单",link:"https://frontend-weekly.com/"},{title:"MDN",icon:"",desc:"提供开放的Web技术，包括HTML、CSS和API等学习资源",link:"https://developer.mozilla.org/zh-CN/"},{title:"web.dev",icon:"",desc:"在 web.dev 的指导下，你可以为你的用户提供最佳体验",link:"https://web.dev/"}]},{title:"静态文档",items:[{title:"vitepress",icon:"",desc:"基于Vite构建的静态网站生成器",link:"https://vitepress.dev/"},{title:"dumi",icon:"",desc:"为组件研发而生的静态站点框架",link:"https://d.umijs.org/"}]},{title:"社区",items:[{title:"Github",icon:{svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'},desc:"一个面向开源及私有软件项目的托管平台",link:"https://github.com"},{icon:"https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",title:"Stack Overflow",desc:"全球最大的技术问答网站",link:"https://stackoverflow.com"},{title:"稀土掘金",icon:"https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",desc:"面向全球中文开发者的技术内容分享与交流平台",link:"https://juejin.cn"},{title:"V2EX",icon:"",desc:"一个关于分享和探索的地方",link:"https://www.v2ex.com"},{title:"SegmentFault 思否",icon:"https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",desc:"技术问答开发者社区",link:"https://segmentfault.com"},{title:"博客园",icon:"",desc:"博客园是一个面向开发者的知识分享社区",link:"https://www.cnblogs.com"},{title:"知乎",icon:"https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",desc:"中文互联网高质量的问答社区和创作者聚集的原创内容平台",link:"https://juejin.cn"},{title:"InfoQ",icon:"",desc:"InfoQ 是一个实践驱动的社区资讯站点，致力于促进软件开发领域知识与创新的传播。",link:"https://www.infoq.cn/"},{title:"CSDN",icon:"",desc:"CSDN-专业IT技术社区",link:"https://www.csdn.net/nav/web"},{title:"开源中国",icon:"",desc:"开源中国 www.oschina.net 是目前中国最大的开源技术社区。",link:"https://www.oschina.net/"}]}],P=s("h1",{id:"前端导航",tabindex:"-1"},[w("前端导航 "),s("a",{class:"header-anchor",href:"#前端导航","aria-label":'Permalink to "前端导航"'},"​")],-1),W=JSON.parse('{"title":"前端导航","titleTemplate":"前端导航","description":"","frontmatter":{"layout":"doc","titleTemplate":"前端导航","page":true},"headers":[],"relativePath":"navigation/index.md","filePath":"navigation/index.md","lastUpdated":1683470060000}'),L={name:"navigation/index.md"},F=Object.assign(L,{setup(t){return(n,l)=>(e(),i("div",null,[P,(e(!0),i(h,null,v(o(M),({title:c,items:a})=>(e(),b(U,{title:c,items:a},null,8,["title","items"]))),256))]))}});export{W as __pageData,F as default};
