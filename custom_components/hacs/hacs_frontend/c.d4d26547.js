import{al as e,am as a,ag as s,an as r,ao as u}from"./main-c486ac4b.js";async function i(i,o,n){const t=new e("updateLovelaceResources"),l=await a(i),c=`/hacsfiles/${o.full_name.split("/")[1]}`,d=s({repository:o,version:n}),p=l.find((e=>e.url.includes(c)));t.debug({namespace:c,url:d,exsisting:p}),p&&p.url!==d?(t.debug(`Updating exsusting resource for ${c}`),await r(i,{url:d,resource_id:p.id,res_type:p.type})):l.map((e=>e.url)).includes(d)||(t.debug(`Adding ${d} to Lovelace resources`),await u(i,{url:d,res_type:"module"}))}export{i as u};
