import{d as g,C as _,g as p,o as u,w as t,e as a,b as d,u as e,m as c,i as x,h as i,j as V}from"./app-C6S4eeMO.js";import{_ as l}from"./InputError.vue_vue_type_script_setup_true_lang-DIrGzTQ6.js";import{_ as b}from"./TextLink.vue_vue_type_script_setup_true_lang-DaFFEoF-.js";import{_ as y}from"./Button.vue_vue_type_script_setup_true_lang-UBqR5B5M.js";import{_ as n,a as m}from"./Label.vue_vue_type_script_setup_true_lang-PgU_U5A9.js";import{L as C,_ as v}from"./AuthLayout.vue_vue_type_script_setup_true_lang-Bd2q2X6K.js";import"./index-CUMDcsfT.js";const $={class:"grid gap-6"},N={class:"grid gap-2"},q={class:"grid gap-2"},U={class:"grid gap-2"},k={class:"grid gap-2"},B={class:"text-center text-sm text-muted-foreground"},S=g({__name:"Register",setup(L){const o=_({name:"",email:"",password:"",password_confirmation:""}),f=()=>{o.post(route("register"),{onFinish:()=>o.reset("password","password_confirmation")})};return(w,s)=>(u(),p(v,{title:"Create an account",description:"Enter your details below to create your account"},{default:t(()=>[a(e(c),{title:"Register"}),d("form",{onSubmit:x(f,["prevent"]),class:"flex flex-col gap-6"},[d("div",$,[d("div",N,[a(e(n),{for:"name"},{default:t(()=>s[4]||(s[4]=[i("Name")])),_:1}),a(e(m),{id:"name",type:"text",required:"",autofocus:"",tabindex:1,autocomplete:"name",modelValue:e(o).name,"onUpdate:modelValue":s[0]||(s[0]=r=>e(o).name=r),placeholder:"Full name"},null,8,["modelValue"]),a(l,{message:e(o).errors.name},null,8,["message"])]),d("div",q,[a(e(n),{for:"email"},{default:t(()=>s[5]||(s[5]=[i("Email address")])),_:1}),a(e(m),{id:"email",type:"email",required:"",tabindex:2,autocomplete:"email",modelValue:e(o).email,"onUpdate:modelValue":s[1]||(s[1]=r=>e(o).email=r),placeholder:"email@example.com"},null,8,["modelValue"]),a(l,{message:e(o).errors.email},null,8,["message"])]),d("div",U,[a(e(n),{for:"password"},{default:t(()=>s[6]||(s[6]=[i("Password")])),_:1}),a(e(m),{id:"password",type:"password",required:"",tabindex:3,autocomplete:"new-password",modelValue:e(o).password,"onUpdate:modelValue":s[2]||(s[2]=r=>e(o).password=r),placeholder:"Password"},null,8,["modelValue"]),a(l,{message:e(o).errors.password},null,8,["message"])]),d("div",k,[a(e(n),{for:"password_confirmation"},{default:t(()=>s[7]||(s[7]=[i("Confirm password")])),_:1}),a(e(m),{id:"password_confirmation",type:"password",required:"",tabindex:4,autocomplete:"new-password",modelValue:e(o).password_confirmation,"onUpdate:modelValue":s[3]||(s[3]=r=>e(o).password_confirmation=r),placeholder:"Confirm password"},null,8,["modelValue"]),a(l,{message:e(o).errors.password_confirmation},null,8,["message"])]),a(e(y),{type:"submit",class:"mt-2 w-full",tabindex:"5",disabled:e(o).processing},{default:t(()=>[e(o).processing?(u(),p(e(C),{key:0,class:"h-4 w-4 animate-spin"})):V("",!0),s[8]||(s[8]=i(" Create account "))]),_:1},8,["disabled"])]),d("div",B,[s[10]||(s[10]=i(" Already have an account? ")),a(b,{href:w.route("login"),class:"underline underline-offset-4",tabindex:6},{default:t(()=>s[9]||(s[9]=[i("Log in")])),_:1},8,["href"])])],32)]),_:1}))}});export{S as default};
