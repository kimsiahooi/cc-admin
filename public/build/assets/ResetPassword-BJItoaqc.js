import{d as _,C as g,g as w,o as u,w as t,e as a,b as l,u as s,m as V,i as b,h as d,j as k}from"./app-CoWngWRx.js";import{_ as i}from"./InputError.vue_vue_type_script_setup_true_lang-D2Nws60z.js";import{_ as y}from"./Button.vue_vue_type_script_setup_true_lang-aYFoSxA9.js";import{_ as m,a as n}from"./Label.vue_vue_type_script_setup_true_lang-D4UujLN9.js";import{L as C,_ as v}from"./AuthLayout.vue_vue_type_script_setup_true_lang-DoQ76jok.js";import"./index-BxHC6RsT.js";const P={class:"grid gap-6"},$={class:"grid gap-2"},x={class:"grid gap-2"},N={class:"grid gap-2"},M=_({__name:"ResetPassword",props:{token:{},email:{}},setup(f){const p=f,e=g({token:p.token,email:p.email,password:"",password_confirmation:""}),c=()=>{e.post(route("password.store"),{onFinish:()=>{e.reset("password","password_confirmation")}})};return(R,o)=>(u(),w(v,{title:"Reset password",description:"Please enter your new password below"},{default:t(()=>[a(s(V),{title:"Reset password"}),l("form",{onSubmit:b(c,["prevent"])},[l("div",P,[l("div",$,[a(s(m),{for:"email"},{default:t(()=>o[3]||(o[3]=[d("Email")])),_:1}),a(s(n),{id:"email",type:"email",name:"email",autocomplete:"email",modelValue:s(e).email,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).email=r),class:"mt-1 block w-full",readonly:""},null,8,["modelValue"]),a(i,{message:s(e).errors.email,class:"mt-2"},null,8,["message"])]),l("div",x,[a(s(m),{for:"password"},{default:t(()=>o[4]||(o[4]=[d("Password")])),_:1}),a(s(n),{id:"password",type:"password",name:"password",autocomplete:"new-password",modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).password=r),class:"mt-1 block w-full",autofocus:"",placeholder:"Password"},null,8,["modelValue"]),a(i,{message:s(e).errors.password},null,8,["message"])]),l("div",N,[a(s(m),{for:"password_confirmation"},{default:t(()=>o[5]||(o[5]=[d(" Confirm Password ")])),_:1}),a(s(n),{id:"password_confirmation",type:"password",name:"password_confirmation",autocomplete:"new-password",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password_confirmation=r),class:"mt-1 block w-full",placeholder:"Confirm password"},null,8,["modelValue"]),a(i,{message:s(e).errors.password_confirmation},null,8,["message"])]),a(s(y),{type:"submit",class:"mt-4 w-full",disabled:s(e).processing},{default:t(()=>[s(e).processing?(u(),w(s(C),{key:0,class:"h-4 w-4 animate-spin"})):k("",!0),o[6]||(o[6]=d(" Reset password "))]),_:1},8,["disabled"])])],32)]),_:1}))}});export{M as default};
