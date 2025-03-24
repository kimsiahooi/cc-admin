import{d as H,C as T,a as c,o as g,e as s,u as e,m as j,w as l,b as i,i as A,h as a,t as f,F as y,l as M,g as R,W}from"./app-D9_Z4KoN.js";import{c as V,d as C,e as S,f as k,g as w,h as r,_ as q,a as L,b as Y}from"./TableCaption.vue_vue_type_script_setup_true_lang-BhG5XpId.js";import{_ as z,a as G}from"./OrderStatus.vue_vue_type_script_setup_true_lang-Bvgh_lgx.js";import{_ as p}from"./Button.vue_vue_type_script_setup_true_lang-Bhb2OtQp.js";import{_ as J,a as K,b as Q,c as X,u as Z}from"./useDateFormat-CACd80EC.js";import{_ as v,a as D}from"./Label.vue_vue_type_script_setup_true_lang-DrQKvqU7.js";import{_ as h}from"./Separator.vue_vue_type_script_setup_true_lang-BlDoW3a2.js";import{_ as ee,a as te,b as F,c as o,d as se,e as u}from"./TableHeader.vue_vue_type_script_setup_true_lang-D2BDCwP2.js";import{_ as le}from"./AppLayout.vue_vue_type_script_setup_true_lang-CeWkiBYn.js";import"./index-EIHh3i_c.js";import"./check-DErZdoQY.js";import"./index-B_5wtV8K.js";const ae={class:"flex h-full flex-1 flex-col gap-4 rounded-xl p-4"},de={class:"grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},ne={class:"flex flex-col space-y-1.5"},ie={class:"flex flex-col space-y-1.5"},re={class:"flex flex-col space-y-1.5"},oe={class:"space-x-3"},ue={class:"flex items-center justify-between"},fe={class:"flex items-center gap-2"},me={class:"flex items-center gap-2"},ke=H({__name:"Index",props:{orders:{},customer_id:{},filter_config:{}},setup(m){const I=Z(),n=T({entries:+m.filter_config.entries,page:+m.filter_config.page,order_id:m.filter_config.order_id,customer_id:m.customer_id,status:m.filter_config.status}),N=[{title:"Orders",href:route("orders.index")}],O=()=>{b(),_()},P=()=>{n.page>1&&n.page--,_()},U=()=>{n.page++,_()},b=()=>{n.page=1},B=()=>{b(),_()},E=()=>{W.visit(route("orders.index"))},_=()=>{n.get(route("orders.index"),{preserveState:!0,preserveScroll:!0})};return(x,t)=>(g(),c(y,null,[s(e(j),{title:"Orders"}),s(le,{breadcrumbs:N},{default:l(()=>[i("div",ae,[i("div",null,[s(e(J),null,{default:l(()=>[i("form",{onSubmit:A(B,["prevent"])},[s(e(K),null,{default:l(()=>[s(e(Q),null,{default:l(()=>t[4]||(t[4]=[a("Orders")])),_:1})]),_:1}),s(e(X),null,{default:l(()=>[i("div",de,[i("div",ne,[s(e(v),{for:"search"},{default:l(()=>t[5]||(t[5]=[a("Order ID")])),_:1}),s(e(D),{id:"order_id",placeholder:"Order ID",modelValue:e(n).order_id,"onUpdate:modelValue":t[0]||(t[0]=d=>e(n).order_id=d),disabled:e(n).processing},null,8,["modelValue","disabled"])]),i("div",ie,[s(e(v),{for:"search"},{default:l(()=>t[6]||(t[6]=[a("Customer ID")])),_:1}),s(e(D),{id:"customer_id",placeholder:"Customer ID",modelValue:e(n).customer_id,"onUpdate:modelValue":t[1]||(t[1]=d=>e(n).customer_id=d),disabled:e(n).processing},null,8,["modelValue","disabled"])]),i("div",re,[s(e(v),{for:"status"},{default:l(()=>t[7]||(t[7]=[a("Status")])),_:1}),s(e(V),{modelValue:e(n).status,"onUpdate:modelValue":t[2]||(t[2]=d=>e(n).status=d),disabled:e(n).processing},{default:l(()=>[s(e(C),{class:"min-w-20"},{default:l(()=>[s(e(S),{placeholder:"Select Entries"})]),_:1}),s(e(k),null,{default:l(()=>[s(e(w),null,{default:l(()=>[s(e(r),{value:"any"},{default:l(()=>t[8]||(t[8]=[a("Any")])),_:1}),s(e(r),{value:"pending"},{default:l(()=>t[9]||(t[9]=[a("Pending")])),_:1}),s(e(r),{value:"processing"},{default:l(()=>t[10]||(t[10]=[a("Processing")])),_:1}),s(e(r),{value:"on-hold"},{default:l(()=>t[11]||(t[11]=[a("On Hold")])),_:1}),s(e(r),{value:"completed"},{default:l(()=>t[12]||(t[12]=[a("Completed")])),_:1}),s(e(r),{value:"cancelled"},{default:l(()=>t[13]||(t[13]=[a("Cancelled")])),_:1}),s(e(r),{value:"refunded"},{default:l(()=>t[14]||(t[14]=[a("Refunded")])),_:1}),s(e(r),{value:"failed"},{default:l(()=>t[15]||(t[15]=[a("Failed")])),_:1}),s(e(r),{value:"trash"},{default:l(()=>t[16]||(t[16]=[a("Trash")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"])])])]),_:1}),s(e(q),{class:"flex justify-end gap-2 px-6 pb-6"},{default:l(()=>[s(e(p),{type:"button",onClick:E,disabled:e(n).processing,variant:"outline"},{default:l(()=>t[17]||(t[17]=[a("Reset")])),_:1},8,["disabled"]),s(e(p),{type:"submit",disabled:e(n).processing},{default:l(()=>t[18]||(t[18]=[a("Filter")])),_:1},8,["disabled"])]),_:1})],32)]),_:1})]),s(e(h),{class:"my-2"}),i("div",null,[s(e(ee),{class:"min-w-max"},{default:l(()=>[s(e(L),null,{default:l(()=>{var d;return[a(f((d=x.orders)!=null&&d.length?"A list of your recent orders.":"No order found."),1)]}),_:1}),s(e(te),null,{default:l(()=>[s(e(F),null,{default:l(()=>[s(e(o),{class:"text-center"},{default:l(()=>t[19]||(t[19]=[a("ID")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[20]||(t[20]=[a("Status")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[21]||(t[21]=[a("Coupon Used")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[22]||(t[22]=[a("Discount")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[23]||(t[23]=[a("Shipping")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[24]||(t[24]=[a("Tax")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[25]||(t[25]=[a("Total")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[26]||(t[26]=[a("Payment Method")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[27]||(t[27]=[a("Date Created")])),_:1}),s(e(o),{class:"text-center"},{default:l(()=>t[28]||(t[28]=[a("Actions")])),_:1})]),_:1})]),_:1}),s(e(se),null,{default:l(()=>[(g(!0),c(y,null,M(x.orders,d=>(g(),R(e(F),{key:d.id},{default:l(()=>[s(e(u),{class:"text-center"},{default:l(()=>[a(f(d.id),1)]),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>[s(z,{status:d.status},null,8,["status"])]),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>{var $;return[a(f(($=d.coupon_lines)!=null&&$.length?"Yes":"No"),1)]}),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>[a(f(d.discount_total),1)]),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>[a(f(d.shipping_total),1)]),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>[a(f(d.total_tax),1)]),_:2},1024),s(e(u),{class:"text-center font-black"},{default:l(()=>[a(f(d.total),1)]),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>[a(f(d.payment_method),1)]),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>[a(f(e(I)(d.date_created)),1)]),_:2},1024),s(e(u),{class:"text-center"},{default:l(()=>[i("div",oe,[s(Y,{href:x.route("orders.show",d.id)},null,8,["href"]),s(G,{"order-id":d.id},null,8,["order-id"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),i("div",ue,[i("div",null,[i("p",fe,[t[33]||(t[33]=a(" Show ")),s(e(V),{modelValue:e(n).entries,"onUpdate:modelValue":[t[3]||(t[3]=d=>e(n).entries=d),O],disabled:e(n).processing},{default:l(()=>[s(e(C),{class:"min-w-20"},{default:l(()=>[s(e(S),{placeholder:"Select Entries"})]),_:1}),s(e(k),null,{default:l(()=>[s(e(w),null,{default:l(()=>[s(e(r),{value:10},{default:l(()=>t[29]||(t[29]=[a("10")])),_:1}),s(e(r),{value:25},{default:l(()=>t[30]||(t[30]=[a("25")])),_:1}),s(e(r),{value:50},{default:l(()=>t[31]||(t[31]=[a("50")])),_:1}),s(e(r),{value:100},{default:l(()=>t[32]||(t[32]=[a("100")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","disabled"]),t[34]||(t[34]=a(" Entries "))])]),i("div",me,[s(e(p),{onClick:P,disabled:e(n).page<=1||e(n).processing},{default:l(()=>t[35]||(t[35]=[a("Previous")])),_:1},8,["disabled"]),s(e(p),{onClick:U,disabled:e(n).processing},{default:l(()=>t[36]||(t[36]=[a("Next")])),_:1},8,["disabled"])])])])]),_:1})],64))}});export{ke as default};
