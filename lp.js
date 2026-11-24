(() => {
  const days=document.getElementById('countdown');
  if(days){const parts=Object.fromEntries(new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).map(p=>[p.type,p.value]));const today=Date.UTC(+parts.year,+parts.month-1,+parts.day);const remaining=Math.ceil((Date.UTC(2027,0,31)-today)/86400000);days.textContent=remaining>0?`Faltam ${remaining} ${remaining===1?'dia':'dias'} para a prova.`:remaining===0?'Hoje é o dia da prova.':'A data prevista da prova já passou.';}
  const tabs=[...document.querySelectorAll('[data-demo]')];
  const setTab=tab=>{tabs.forEach(item=>{const active=item===tab;item.setAttribute('aria-selected',String(active));item.tabIndex=active?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!active;});};
  tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>setTab(tab));tab.addEventListener('keydown',event=>{let next; if(event.key==='ArrowRight')next=tabs[(index+1)%tabs.length];else if(event.key==='ArrowLeft')next=tabs[(index+tabs.length-1)%tabs.length];else if(event.key==='Home')next=tabs[0];else if(event.key==='End')next=tabs.at(-1);if(next){event.preventDefault();setTab(next);next.focus();}});});
})();
