import{d as l,a as t,o as a,b as s,j as f,t as o,n as u,e as i,F as g,l as x,u as c,r as y,w as _,P as w,h as $,p as b}from"./app-CoWngWRx.js";import{_ as v}from"./Button.vue_vue_type_script_setup_true_lang-aYFoSxA9.js";import{_ as k}from"./Separator.vue_vue_type_script_setup_true_lang-DVzRNT2B.js";const N={class:"mb-0.5 text-base font-medium"},P={key:0,class:"text-sm text-muted-foreground"},R=l({__name:"HeadingSmall",props:{title:{},description:{}},setup(d){return(e,n)=>(a(),t("header",null,[s("h3",N,o(e.title),1),e.description?(a(),t("p",P,o(e.description),1)):f("",!0)]))}}),C={class:"mb-8 space-y-0.5"},S={class:"text-xl font-semibold tracking-tight"},V={key:0,class:"text-sm text-muted-foreground"},z=l({__name:"Heading",props:{title:{},description:{}},setup(d){return(e,n)=>(a(),t("div",C,[s("h2",S,o(e.title),1),e.description?(a(),t("p",V,o(e.description),1)):f("",!0)]))}}),B={class:"px-4 py-6"},L={class:"flex flex-col space-y-8 md:space-y-0 lg:flex-row lg:space-x-12 lg:space-y-0"},j={class:"w-full max-w-xl lg:w-48"},F={class:"flex flex-col space-x-0 space-y-1"},H={class:"flex-1 md:max-w-2xl"},A={class:"max-w-xl space-y-12"},T=l({__name:"Layout",setup(d){var p;const e=[{title:"Profile",href:"/settings/profile"},{title:"Password",href:"/settings/password"},{title:"Appearance",href:"/settings/appearance"}],n=u(),m=(p=n.props.ziggy)!=null&&p.location?new URL(n.props.ziggy.location).pathname:"";return(h,D)=>(a(),t("div",B,[i(z,{title:"Settings",description:"Manage your profile and account settings"}),s("div",L,[s("aside",j,[s("nav",F,[(a(),t(g,null,x(e,r=>i(c(v),{key:r.href,variant:"ghost",class:b(["w-full justify-start",{"bg-muted":c(m)===r.href}]),"as-child":""},{default:_(()=>[i(c(w),{href:r.href},{default:_(()=>[$(o(r.title),1)]),_:2},1032,["href"])]),_:2},1032,["class"])),64))])]),i(c(k),{class:"my-6 md:hidden"}),s("div",H,[s("section",A,[y(h.$slots,"default")])])])]))}});export{T as _,R as a};
