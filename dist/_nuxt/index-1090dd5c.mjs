import{_ as d,d as u,o as l,a as i,b as t,t as n,e as p,F as h,r as g,f as c,w as x,g as k}from"./entry-5a8314de.mjs";const v=u({props:{title:null,subtitle:null,image:null,frontend:null,backend:null},setup(s,{expose:r}){r();const e={};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),w={class:"flex flex-col space-y-4 px-12 mt-2"},y={class:"group border-8 border-black/90 shadow-xl shadow-black/60 transform origin-bottom rotate-1"},B=["src"],C=p('<div class="absolute -right-10 -top-5 bg-gradient-to-r from-red-600/90 to-red-500/80 w-max py-3 px-4"><nav class="flex flex-row items-center justify-center space-x-6"><a class="flex items-center justify-center" target="_blank" href="https://github.com/KreskoLab/Priceefy"><svg class="fill-amber-100 h-8 w-8" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a><a class="" href=""><svg class="stroke-amber-100 fill-black h-8 w-8" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path></svg></a></nav></div>',1),S={class:"mx-auto text-center text-orange-500 uppercase tracking-wider text-3xl font-semibold bg-black/60 w-4/6 transform origin-bottom rotate-1 group-hover:-rotate-1"},j={class:"text-amber-100 font-medium"},M={class:"bg-gradient-to-tr from-purple-900/80 to-purple-900/40 mt-4 px-3 py-1"};function P(s,r,e,a,_,f){return l(),i("article",w,[t("div",y,[t("img",{src:e.image,alt:"Priceefy image"},null,8,B),C]),t("h1",S,n(e.title),1),t("section",j,[t("h2",null,n(e.subtitle),1),t("div",M,[t("p",null,n(e.frontend),1),t("p",null,n(e.backend),1)])])])}var $=d(v,[["render",P]]);const N=u({setup(s,{expose:r}){r();const a={cards:[{title:"Priceefy",subtitle:"App for tracking food prices in Ukraine",frontend:"Frontend: Nuxt 3, Tailwind CSS, Pinia",backend:"Backend: Nest, MongoDB",image:"https://res.cloudinary.com/kresko/image/upload/v1652807950/Priceefy-thumb_oojyax.png"},{title:"Balloo",subtitle:"Mock of balloons e-commerce website",frontend:"Frontend: Nuxt 2, Windi CSS, Vuex",backend:"Backend: Fastify, Passport, MongoDB",image:"https://res.cloudinary.com/kresko/image/upload/v1653059804/balloo_uarh1b.png"}]};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),V={class:"relative lg:w-[720px] overflow-hidden bg-black/60 px-6 py-10"},F={class:"flex flex-col flex-nowrap lg:h-[520px] lg:space-y-20 overflow-x-hidden overflow-y-scroll snap-mandatory snap-y"},L=p('<div class="absolute top-1/3 bg-black/40 border-2 border-amber-100 rounded-full"><svg class="h-6 w-6 stroke-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"></path></svg><svg class="h-6 w-6 stroke-amber-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></div>',1);function A(s,r,e,a,_,f){const b=$,m=k;return l(),i("div",V,[t("ul",F,[(l(),i(h,null,g(a.cards,o=>t("li",{key:o.title},[c(m,{to:`/projects/${o.title}`},{default:x(()=>[c(b,{class:"snap-center",title:o.title,subtitle:o.subtitle,image:o.image,frontend:o.frontend,backend:o.backend},null,8,["title","subtitle","image","frontend","backend"])]),_:2},1032,["to"])])),64))]),L])}var D=d(N,[["render",A]]);export{D as default};
