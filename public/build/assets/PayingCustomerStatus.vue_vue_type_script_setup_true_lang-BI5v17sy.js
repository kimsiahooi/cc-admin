import{a as f,b as g,c as k}from"./AppLayout.vue_vue_type_script_setup_true_lang-BgGy3wqy.js";import{S as $,d as C}from"./useDateFormat-B3H1fJSR.js";import{d as c,n as b,g as o,o as n,w as a,e as t,u as s,b as u,h as _,p as l}from"./app-CLpXQeyA.js";import{_ as p}from"./index-Bg5gA6AQ.js";const y=["href"],B=c({__name:"CustomerLink",props:{customerId:{}},setup(d){const r=b();return(e,i)=>(n(),o(s(C),null,{default:a(()=>[t(s(f),null,{default:a(()=>[t(s(g),{"as-child":""},{default:a(()=>[u("a",{href:`${s(r).props.domain_api_url}/wp-admin/user-edit.php?user_id=${e.customerId}`,target:"_blank"},[t(s($),{class:"inline-block size-5 cursor-pointer"})],8,y)]),_:1}),t(s(k),null,{default:a(()=>i[0]||(i[0]=[u("p",null,"Website Link",-1)])),_:1})]),_:1})]),_:1}))}}),m="capitalize",I=c({__name:"PayingCustomerStatus",props:{IsPayingCustomer:{type:[Boolean,null]}},setup(d){return(r,e)=>r.IsPayingCustomer?(n(),o(s(p),{key:0,class:l(["bg-success text-success-foreground",m])},{default:a(()=>e[0]||(e[0]=[_("Yes")])),_:1})):(n(),o(s(p),{key:1,class:l(m),variant:"destructive"},{default:a(()=>e[1]||(e[1]=[_("No")])),_:1}))}});export{I as _,B as a};
