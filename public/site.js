(() => {
  'use strict';
  const routes = {home:'/index.html?view=home',article:'/articles/z-prime-detector-linearity/'};
  let prefs = {startPage:'home',showConsulting:true};
  try { prefs = {...prefs,...JSON.parse(localStorage.getItem('dip-display-v1') || '{}')}; } catch {}
  if (!Object.hasOwn(routes,prefs.startPage)) prefs.startPage='home';
  if (typeof prefs.showConsulting !== 'boolean') prefs.showConsulting=true;
  if (['/','/index.html'].includes(location.pathname) && !new URLSearchParams(location.search).has('view') && prefs.startPage !== 'home') {
    location.replace(routes[prefs.startPage]); return;
  }
  const apply=()=>document.querySelectorAll('[data-consulting]').forEach(el=>el.hidden=!prefs.showConsulting);
  const store=()=>{try {localStorage.setItem('dip-display-v1',JSON.stringify(prefs));}catch{} apply();};
  apply();
  const dialog=document.querySelector('#settings-dialog');
  const start=document.querySelector('#start-page');
  const consulting=document.querySelector('#show-consulting');
  start.value=prefs.startPage;consulting.checked=prefs.showConsulting;
  document.querySelector('#settings-open').addEventListener('click',()=>dialog.showModal());
  start.addEventListener('change',()=>{prefs.startPage=start.value;store();});
  consulting.addEventListener('change',()=>{prefs.showConsulting=consulting.checked;store();});
  document.querySelector('#open-start').addEventListener('click',()=>{location.href=routes[prefs.startPage];});
  dialog.addEventListener('click',ev=>{if(ev.target===dialog){const r=dialog.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)dialog.close();}});
  const diff=document.querySelector('#diff-only');
  if(diff){
    const rows=[...document.querySelectorAll('.spec-row')];
    diff.addEventListener('change',()=>{
      rows.forEach(row=>row.hidden=diff.checked && row.dataset.different==='false');
      document.querySelectorAll('.spec-group').forEach(group=>group.hidden=![...group.querySelectorAll('.spec-row')].some(row=>!row.hidden));
      const n=rows.filter(row=>!row.hidden).length;
      document.querySelector('#row-count').textContent=n;
      document.querySelector('#compare-status').textContent=n+' specifications shown';
    });
    document.querySelectorAll('[data-select-reader]').forEach(button=>button.addEventListener('click',()=>{
      const active=button.getAttribute('aria-pressed')!=='true';
      document.querySelectorAll('[data-select-reader]').forEach(b=>b.setAttribute('aria-pressed',String(active&&b===button)));
      document.querySelectorAll('[data-reader]').forEach(cell=>cell.classList.toggle('selected-reader',active&&cell.dataset.reader===button.dataset.selectReader));
    }));
  }
})();
