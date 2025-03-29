import{a as E,_ as I}from"./PayingCustomerStatus.vue_vue_type_script_setup_true_lang-D8vY0FPd.js";import{_ as L}from"./OrderDetailsLink.vue_vue_type_script_setup_true_lang-BtbQ63Ej.js";import{_,a as C,b as N,c as $}from"./CardTitle.vue_vue_type_script_setup_true_lang-CvdNWbjW.js";import{_ as P}from"./Separator.vue_vue_type_script_setup_true_lang-DVzRNT2B.js";import{u as j}from"./useDateFormat-V2QT2jt5.js";import{_ as z}from"./AppLayout.vue_vue_type_script_setup_true_lang-CjOX02-_.js";import{d as M,a as g,o as v,e as t,u as i,m as T,w as n,b as s,j as U,h as F,t as o,F as q}from"./app-CoWngWRx.js";import"./index-_Omba_yE.js";import"./Button.vue_vue_type_script_setup_true_lang-aYFoSxA9.js";import"./index-BxHC6RsT.js";const G={class:"flex h-full flex-1 flex-col gap-4 rounded-xl p-4"},H={key:0,class:"space-y-5"},J={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},K={class:"space-y-1"},O=["src","alt"],Q={key:1},R={class:"space-y-1"},W={class:"space-y-1"},X={class:"space-y-1"},Y={class:"space-y-1"},Z={class:"space-y-1"},h={class:"space-y-1"},x={class:"space-y-1"},ss={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},ls={class:"space-y-1"},es={class:"space-y-1"},os={class:"space-y-1"},ts={class:"space-y-1"},is={class:"space-y-1"},ns={class:"space-y-1"},us={class:"space-y-1"},as={class:"space-y-1"},ds={class:"space-y-1"},rs={class:"space-y-1"},ms={class:"space-y-1"},ps={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},ys={class:"space-y-1"},fs={class:"space-y-1"},bs={class:"space-y-1"},gs={class:"space-y-1"},vs={class:"space-y-1"},cs={class:"space-y-1"},_s={class:"space-y-1"},Cs={class:"space-y-1"},Ns={class:"space-y-1"},Es=M({__name:"Show",props:{customer:{}},setup(c){var k,D;const S=j(),V=[{title:"Customers",href:route("customers.index")},{title:((k=c.customer)==null?void 0:k.id.toString())||"",href:(D=c.customer)!=null&&D.id?route("customers.show",c.customer.id):"#"}];return(e,l)=>{var A;return v(),g(q,null,[t(i(T),{title:`Customer ID ${(A=e.customer)==null?void 0:A.id}`},null,8,["title"]),t(z,{breadcrumbs:V},{default:n(()=>[s("div",G,[e.customer?(v(),g("div",H,[t(i(_),null,{default:n(()=>[t(i(C),null,{default:n(()=>[t(i(N),{class:"space-x-2"},{default:n(()=>[s("span",null,"Customer ID "+o(e.customer.id),1),l[0]||(l[0]=F()),t(L,{href:e.route("orders.index",{customer_id:e.customer.id})},null,8,["href"]),t(E,{class:"ml-2","customer-id":e.customer.id},null,8,["customer-id"])]),_:1})]),_:1}),t(i($),null,{default:n(()=>[s("div",J,[s("div",K,[l[1]||(l[1]=s("label",null,"Avatar:",-1)),s("div",null,[e.customer.avatar_url?(v(),g("img",{key:0,src:e.customer.avatar_url,alt:e.customer.username||e.customer.id.toString(),class:"inline-block size-10 rounded-full object-cover"},null,8,O)):(v(),g("p",Q,"-"))])]),s("div",R,[l[2]||(l[2]=s("label",null,"First Name:",-1)),s("p",null,o(e.customer.first_name||"-"),1)]),s("div",W,[l[3]||(l[3]=s("label",null,"Last Name:",-1)),s("p",null,o(e.customer.last_name||"-"),1)]),s("div",X,[l[4]||(l[4]=s("label",null,"Username:",-1)),s("p",null,o(e.customer.username||"-"),1)]),s("div",Y,[l[5]||(l[5]=s("label",null,"Is Paying Customer:",-1)),s("p",null,[t(I,{"-is-paying-customer":e.customer.is_paying_customer},null,8,["-is-paying-customer"])])]),s("div",Z,[l[6]||(l[6]=s("label",null,"Email:",-1)),s("p",null,o(e.customer.email||"-"),1)]),s("div",h,[l[7]||(l[7]=s("label",null,"Date Created:",-1)),s("p",null,o(i(S)(e.customer.date_created)||"-"),1)]),s("div",x,[l[8]||(l[8]=s("label",null,"Date Modified:",-1)),s("p",null,o(i(S)(e.customer.date_modified)||"-"),1)])])]),_:1})]),_:1}),t(i(P)),t(i(_),null,{default:n(()=>[t(i(C),null,{default:n(()=>[t(i(N),null,{default:n(()=>l[9]||(l[9]=[F("Billing")])),_:1})]),_:1}),t(i($),null,{default:n(()=>{var u,a,d,r,m,p,y,f,b,w,B;return[s("div",ss,[s("div",ls,[l[10]||(l[10]=s("label",null,"First Name:",-1)),s("p",null,o(((u=e.customer.billing)==null?void 0:u.first_name)||"-"),1)]),s("div",es,[l[11]||(l[11]=s("label",null,"Last Name:",-1)),s("p",null,o(((a=e.customer.billing)==null?void 0:a.last_name)||"-"),1)]),s("div",os,[l[12]||(l[12]=s("label",null,"Company:",-1)),s("p",null,o(((d=e.customer.billing)==null?void 0:d.company)||"-"),1)]),s("div",ts,[l[13]||(l[13]=s("label",null,"Address 1:",-1)),s("p",null,o(((r=e.customer.billing)==null?void 0:r.address_1)||"-"),1)]),s("div",is,[l[14]||(l[14]=s("label",null,"Address 2:",-1)),s("p",null,o(((m=e.customer.billing)==null?void 0:m.address_2)||"-"),1)]),s("div",ns,[l[15]||(l[15]=s("label",null,"City:",-1)),s("p",null,o(((p=e.customer.billing)==null?void 0:p.city)||"-"),1)]),s("div",us,[l[16]||(l[16]=s("label",null,"State:",-1)),s("p",null,o(((y=e.customer.billing)==null?void 0:y.state)||"-"),1)]),s("div",as,[l[17]||(l[17]=s("label",null,"Postcode:",-1)),s("p",null,o(((f=e.customer.billing)==null?void 0:f.postcode)||"-"),1)]),s("div",ds,[l[18]||(l[18]=s("label",null,"Country:",-1)),s("p",null,o(((b=e.customer.billing)==null?void 0:b.country)||"-"),1)]),s("div",rs,[l[19]||(l[19]=s("label",null,"Email:",-1)),s("p",null,o(((w=e.customer.billing)==null?void 0:w.email)||"-"),1)]),s("div",ms,[l[20]||(l[20]=s("label",null,"Phone:",-1)),s("p",null,o(((B=e.customer.billing)==null?void 0:B.phone)||"-"),1)])])]}),_:1})]),_:1}),t(i(P)),t(i(_),null,{default:n(()=>[t(i(C),null,{default:n(()=>[t(i(N),null,{default:n(()=>l[21]||(l[21]=[F("Shipping")])),_:1})]),_:1}),t(i($),null,{default:n(()=>{var u,a,d,r,m,p,y,f,b;return[s("div",ps,[s("div",ys,[l[22]||(l[22]=s("label",null,"First Name:",-1)),s("p",null,o(((u=e.customer.shipping)==null?void 0:u.first_name)||"-"),1)]),s("div",fs,[l[23]||(l[23]=s("label",null,"Last Name:",-1)),s("p",null,o(((a=e.customer.shipping)==null?void 0:a.last_name)||"-"),1)]),s("div",bs,[l[24]||(l[24]=s("label",null,"Company:",-1)),s("p",null,o(((d=e.customer.shipping)==null?void 0:d.company)||"-"),1)]),s("div",gs,[l[25]||(l[25]=s("label",null,"Address 1:",-1)),s("p",null,o(((r=e.customer.shipping)==null?void 0:r.address_1)||"-"),1)]),s("div",vs,[l[26]||(l[26]=s("label",null,"Address 2:",-1)),s("p",null,o(((m=e.customer.shipping)==null?void 0:m.address_2)||"-"),1)]),s("div",cs,[l[27]||(l[27]=s("label",null,"City:",-1)),s("p",null,o(((p=e.customer.shipping)==null?void 0:p.city)||"-"),1)]),s("div",_s,[l[28]||(l[28]=s("label",null,"State:",-1)),s("p",null,o(((y=e.customer.shipping)==null?void 0:y.state)||"-"),1)]),s("div",Cs,[l[29]||(l[29]=s("label",null,"Postcode:",-1)),s("p",null,o(((f=e.customer.shipping)==null?void 0:f.postcode)||"-"),1)]),s("div",Ns,[l[30]||(l[30]=s("label",null,"Country:",-1)),s("p",null,o(((b=e.customer.shipping)==null?void 0:b.country)||"-"),1)])])]}),_:1})]),_:1})])):U("",!0)])]),_:1})],64)}}});export{Es as default};
