const {chromium}=require('playwright');
(async()=>{
  const b=await chromium.launch();
  const p=await b.newPage({viewport:{width:1920,height:1080}});
  await p.goto('file://'+__dirname+'/index.html',{waitUntil:'networkidle'});
  await p.waitForFunction(()=>document.body.dataset.ready==='1',{timeout:30000});
  await p.evaluate(()=>document.fonts.ready);
  console.log('missions', await p.evaluate(()=>missions.length));
  const n=await p.$$eval('.slide',s=>s.length);
  for(let i=1;i<=n;i++){await (await p.$('#s'+i)).screenshot({path:__dirname+'/shots/s'+i+'.png'});}
  if(process.argv[2]==='pdf') await p.pdf({path:__dirname+'/Corridor-Mornings_PSEB-x-BYOC.pdf',width:'1920px',height:'1080px',printBackground:true,preferCSSPageSize:true});
  await b.close();
})();
