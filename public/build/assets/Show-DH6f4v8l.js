import{_ as M}from"./OrderDetailsLink.vue_vue_type_script_setup_true_lang-B_r5YTZq.js";import{_ as O}from"./ProductLink.vue_vue_type_script_setup_true_lang-DxTfuZTS.js";import{_ as g,a as m,b,c as v,u as H}from"./useDateFormat-Cnk_vq06.js";import{_ as S}from"./Separator.vue_vue_type_script_setup_true_lang-DP0_Qjzl.js";import{_ as I}from"./AppLayout.vue_vue_type_script_setup_true_lang-DRnbt1ut.js";import{d as R,n as j,a as n,o as i,e as d,u as e,m as q,w as u,b as l,j as r,h as k,t as o,F as p,l as h}from"./app-FTKImnht.js";import"./Button.vue_vue_type_script_setup_true_lang-C3rawyyu.js";import"./index-CgSEmqp9.js";const z={class:"flex h-full flex-1 flex-col gap-4 rounded-xl p-4"},V={key:0,class:"space-y-5"},A={class:"grid gap-4 md:grid-cols-2 xl:grid-cols-3"},W={class:"space-y-1"},E={class:"space-y-1"},Q=["href"],G={key:1},J={class:"space-y-1"},K={class:"space-y-1"},U={class:"space-y-1"},X={class:"capitalize"},Z={class:"space-y-1"},x={class:"capitalize"},ll={class:"space-y-1"},sl={class:"space-y-1"},tl={class:"space-y-1"},ol={class:"space-y-1"},el={class:"space-y-1"},dl={class:"space-y-1"},ul={class:"space-y-1"},nl={class:"space-y-1"},il={class:"space-y-1"},al={class:"space-y-1"},rl={class:"space-y-1"},pl={class:"capitalize"},cl={class:"space-y-1"},yl={class:"space-y-1"},fl={class:"space-y-1"},gl={class:"space-y-1"},ml={class:"space-y-1"},bl={class:"capitalize"},vl={class:"space-y-1"},kl={class:"space-y-1"},_l={class:"space-y-1"},Sl={class:"space-y-1"},Nl={class:"space-y-1"},wl={class:"space-y-1"},Dl={class:"space-y-1"},Tl={class:"space-y-1"},$l={class:"space-y-1"},Yl={class:"space-y-1"},Cl={class:"space-y-1"},Pl={class:"space-y-1"},hl={class:"space-y-1"},Bl={class:"grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"},Fl=["src","alt"],Ll=["innerHTML"],Ml=["innerHTML"],Al=R({__name:"Show",props:{product:{}},setup(_){var N,w;const B=j(),f=H(),F=[{title:"Products",href:route("products.index")},{title:((N=_.product)==null?void 0:N.id.toString())||"",href:(w=_.product)!=null&&w.id?route("products.show",_.product.id):"#"}];return(t,s)=>{var D;return i(),n(p,null,[d(e(q),{title:`Product ID ${(D=t.product)==null?void 0:D.id}`},null,8,["title"]),d(I,{breadcrumbs:F},{default:u(()=>{var T;return[l("div",z,[t.product?(i(),n("div",V,[d(e(g),null,{default:u(()=>[d(e(m),null,{default:u(()=>[d(e(b),{class:"space-x-2"},{default:u(()=>[l("span",null,"Product ID "+o(t.product.id),1),s[0]||(s[0]=k()),d(M,{href:t.route("orders.index",{product_id:t.product.id})},null,8,["href"]),d(O,{"product-id":t.product.id},null,8,["product-id"])]),_:1})]),_:1}),d(e(v),null,{default:u(()=>{var a,c,$,Y,C;return[l("div",A,[l("div",W,[s[1]||(s[1]=l("label",null,"Name:",-1)),l("p",null,o(t.product.name||"-"),1)]),l("div",E,[s[2]||(s[2]=l("label",null,"Slug:",-1)),l("div",null,[t.product.slug?(i(),n("a",{key:0,href:`${e(B).props.domain_api_url}/product/${t.product.slug}`,target:"_blank",class:"underline"},o(t.product.slug),9,Q)):(i(),n("p",G,"-"))])]),l("div",J,[s[3]||(s[3]=l("label",null,"Date Created:",-1)),l("p",null,o(e(f)(t.product.date_created)||"-"),1)]),l("div",K,[s[4]||(s[4]=l("label",null,"Date Modified:",-1)),l("p",null,o(e(f)(t.product.date_modified)||"-"),1)]),l("div",U,[s[5]||(s[5]=l("label",null,"Type:",-1)),l("p",X,o(t.product.type||"-"),1)]),l("div",Z,[s[6]||(s[6]=l("label",null,"Status:",-1)),l("p",x,o(t.product.status||"-"),1)]),l("div",ll,[s[7]||(s[7]=l("label",null,"Featured:",-1)),l("p",null,o(t.product.featured?"Yes":"No"),1)]),l("div",sl,[s[8]||(s[8]=l("label",null,"Sku:",-1)),l("p",null,o(t.product.sku),1)]),l("div",tl,[s[9]||(s[9]=l("label",null,"Price:",-1)),l("p",null,o(t.product.price||"-"),1)]),l("div",ol,[s[10]||(s[10]=l("label",null,"Regular Price:",-1)),l("p",null,o(t.product.regular_price||"-"),1)]),l("div",el,[s[11]||(s[11]=l("label",null,"Sale Price:",-1)),l("p",null,o(t.product.sale_price||"-"),1)]),l("div",dl,[s[12]||(s[12]=l("label",null,"Date On Sale From:",-1)),l("p",null,o(e(f)(t.product.date_on_sale_from)||"-"),1)]),l("div",ul,[s[13]||(s[13]=l("label",null,"Date On Sale To:",-1)),l("p",null,o(e(f)(t.product.date_on_sale_to)||"-"),1)]),l("div",nl,[s[14]||(s[14]=l("label",null,"On Sale:",-1)),l("p",null,o(t.product.on_sale===!0?"Yes":"No"),1)]),l("div",il,[s[15]||(s[15]=l("label",null,"Purchasable:",-1)),l("p",null,o(t.product.purchasable===!0?"Yes":"No"),1)]),l("div",al,[s[16]||(s[16]=l("label",null,"Total Sales:",-1)),l("p",null,o(t.product.total_sales||"-"),1)]),l("div",rl,[s[17]||(s[17]=l("label",null,"Tax Status:",-1)),l("p",pl,o(t.product.tax_status||"-"),1)]),l("div",cl,[s[18]||(s[18]=l("label",null,"Tax Class:",-1)),l("p",null,o(t.product.tax_class||"-"),1)]),l("div",yl,[s[19]||(s[19]=l("label",null,"Manage Stock:",-1)),l("p",null,o(t.product.manage_stock===!0?"Yes":"No"),1)]),l("div",fl,[s[20]||(s[20]=l("label",null,"Stock Quantity:",-1)),l("p",null,o(t.product.stock_quantity||"-"),1)]),l("div",gl,[s[21]||(s[21]=l("label",null,"Stock Status:",-1)),l("p",null,o(t.product.stock_status==="instock"?"In Stock":t.product.stock_status==="outofstock"?"Out of Stock":t.product.stock_status==="onbackorder"?"On Back Order":t.product.stock_status),1)]),l("div",ml,[s[22]||(s[22]=l("label",null,"Backorders:",-1)),l("p",bl,o(t.product.backorders||"-"),1)]),l("div",vl,[s[23]||(s[23]=l("label",null,"Backorders Allowed:",-1)),l("p",null,o(t.product.backorders_allowed===!0?"Yes":"No"),1)]),l("div",kl,[s[24]||(s[24]=l("label",null,"Backordered:",-1)),l("p",null,o(t.product.backordered===!0?"Yes":"No"),1)]),l("div",_l,[s[25]||(s[25]=l("label",null,"Sold Individually:",-1)),l("p",null,o(t.product.sold_individually===!0?"Yes":"No"),1)]),l("div",Sl,[s[26]||(s[26]=l("label",null,"Weight:",-1)),l("p",null,o(t.product.weight||"-"),1)]),l("div",Nl,[s[27]||(s[27]=l("label",null,"Dimensions:",-1)),l("p",null,"Length: "+o(((a=t.product.dimensions)==null?void 0:a.length)||"-"),1),l("p",null,"Width: "+o(((c=t.product.dimensions)==null?void 0:c.width)||"-"),1),l("p",null,"Height: "+o((($=t.product.dimensions)==null?void 0:$.height)||"-"),1)]),l("div",wl,[s[28]||(s[28]=l("label",null,"Shipping Required:",-1)),l("p",null,o(t.product.shipping_required===!0?"Yes":"No"),1)]),l("div",Dl,[s[29]||(s[29]=l("label",null,"Shipping Taxable:",-1)),l("p",null,o(t.product.shipping_taxable===!0?"Yes":"No"),1)]),l("div",Tl,[s[30]||(s[30]=l("label",null,"Shipping Class:",-1)),l("p",null,o(t.product.shipping_class||"-"),1)]),l("div",$l,[s[31]||(s[31]=l("label",null,"Reviews Allowed:",-1)),l("p",null,o(t.product.reviews_allowed===!0?"Yes":"No"),1)]),l("div",Yl,[s[32]||(s[32]=l("label",null,"Average Rating:",-1)),l("p",null,o(t.product.average_rating||"-"),1)]),l("div",Cl,[s[33]||(s[33]=l("label",null,"Rating Count:",-1)),l("p",null,o(t.product.rating_count||"-"),1)]),l("div",Pl,[s[34]||(s[34]=l("label",null,"Purchase Note:",-1)),l("p",null,o(t.product.purchase_note||"-"),1)]),l("div",hl,[s[35]||(s[35]=l("label",null,"Categories:",-1)),l("p",null,o((Y=t.product.categories)!=null&&Y.length?t.product.categories.map(y=>y.name).join(", "):"-"),1)]),(C=t.product.attributes)!=null&&C.length?(i(!0),n(p,{key:0},h(t.product.attributes,(y,L)=>{var P;return i(),n("div",{key:y.id||L,class:"space-y-1"},[l("label",null,o(y.name)+":",1),l("p",null,o((P=y.options)==null?void 0:P.join(", ")),1)])}),128)):r("",!0)])]}),_:1})]),_:1}),(T=t.product.images)!=null&&T.length?(i(),n(p,{key:0},[d(e(S)),d(e(g),null,{default:u(()=>[d(e(m),null,{default:u(()=>[d(e(b),null,{default:u(()=>s[36]||(s[36]=[k("Images")])),_:1})]),_:1}),d(e(v),null,{default:u(()=>[l("div",Bl,[(i(!0),n(p,null,h(t.product.images,(a,c)=>(i(),n("div",{key:a.id||c},[a.src?(i(),n("img",{key:0,src:a.src,alt:a.alt||c.toString(),class:"aspect-square w-full object-cover"},null,8,Fl)):r("",!0)]))),128))])]),_:1})]),_:1})],64)):r("",!0),t.product.short_description?(i(),n(p,{key:1},[d(e(S)),d(e(g),null,{default:u(()=>[d(e(m),null,{default:u(()=>[d(e(b),null,{default:u(()=>s[37]||(s[37]=[k("Short Description")])),_:1})]),_:1}),d(e(v),null,{default:u(()=>[l("p",{innerHTML:t.product.short_description},null,8,Ll)]),_:1})]),_:1})],64)):r("",!0),t.product.description?(i(),n(p,{key:2},[d(e(S)),d(e(g),null,{default:u(()=>[d(e(m),null,{default:u(()=>[d(e(b),null,{default:u(()=>s[38]||(s[38]=[k("Description")])),_:1})]),_:1}),d(e(v),null,{default:u(()=>[l("p",{innerHTML:t.product.description},null,8,Ml)]),_:1})]),_:1})],64)):r("",!0)])):r("",!0)])]}),_:1})],64)}}});export{Al as default};
