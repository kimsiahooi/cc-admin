import{d as _,C as g,g as w,o as u,w as t,e as a,b as l,u as s,m as V,i as b,h as d,j as k}from"./app-tDwwnxb8.js";import{_ as i,a as m,b as n}from"./Label.vue_vue_type_script_setup_true_lang-Cq3O8jCi.js";import{_ as y}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-44Pv8OmD.js";import{L as C,_ as v}from"./AuthLayout.vue_vue_type_script_setup_true_lang-p6l7z65T.js";import"./index-C0wFy9zR.js";const P={class:"grid gap-6"},$={class:"grid gap-2"},x={class:"grid gap-2"},N={class:"grid gap-2"},F=_({__name:"ResetPassword",props:{token:{},email:{}},setup(f){const p=f,e=g({token:p.token,email:p.email,password:"",password_confirmation:""}),c=()=>{e.post(route("password.store"),{onFinish:()=>{e.reset("password","password_confirmation")}})};return(R,o)=>(u(),w(v,{title:"Reset password",description:"Please enter your new password below"},{default:t(()=>[a(s(V),{title:"Reset password"}),l("form",{onSubmit:b(c,["prevent"])},[l("div",P,[l("div",$,[a(s(i),{for:"email"},{default:t(()=>o[3]||(o[3]=[d("Email")])),_:1}),a(s(m),{id:"email",type:"email",name:"email",autocomplete:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),class:"mt-1 block w-full",readonly:""},null,8,["modelValue"]),a(n,{message:s(e).errors.email,class:"mt-2"},null,8,["message"])]),l("div",x,[a(s(i),{for:"password"},{default:t(()=>o[4]||(o[4]=[d("Password")])),_:1}),a(s(m),{id:"password",type:"password",name:"password",autocomplete:"new-password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),class:"mt-1 block w-full",autofocus:"",placeholder:"Password"},null,8,["modelValue"]),a(n,{message:s(e).errors.password},null,8,["message"])]),l("div",N,[a(s(i),{for:"password_confirmation"},{default:t(()=>o[5]||(o[5]=[d(" Confirm Password ")])),_:1}),a(s(m),{id:"password_confirmation",type:"password",name:"password_confirmation",autocomplete:"new-password",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password_confirmation=r),class:"mt-1 block w-full",placeholder:"Confirm password"},null,8,["modelValue"]),a(n,{message:s(e).errors.password_confirmation},null,8,["message"])]),a(s(y),{type:"submit",class:"mt-4 w-full",disabled:s(e).processing},{default:t(()=>[s(e).processing?(u(),w(s(C),{key:0,class:"h-4 w-4 animate-spin"})):k("",!0),o[6]||(o[6]=d(" Reset password "))]),_:1},8,["disabled"])])],32)]),_:1}))}});export{F as default};
