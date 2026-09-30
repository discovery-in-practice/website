(() => {
'use strict';
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

(() => {
  const controls = document.querySelector('.research-filters');
  if (!controls) return;
  const rows = [...document.querySelectorAll('.reading-row')];
  controls.hidden = false;
  controls.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const topic = button.dataset.filter;
      controls.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      rows.forEach(row => { row.hidden = topic !== 'all' && !row.dataset.tags.split(' ').includes(topic); });
      document.querySelectorAll('.reading-group').forEach(group => {
        group.hidden = ![...group.querySelectorAll('.reading-row')].some(row => !row.hidden);
        const link = document.querySelector('[aria-label="On this page"] a[href="#' + group.id + '"]');
        if (link) link.hidden = group.hidden;
      });
      const count = rows.filter(row => !row.hidden).length;
      document.querySelector('#filter-status').textContent = count + (count === 1 ? ' article' : ' articles') + (topic === 'all' ? '' : ' · ' + button.textContent);
    });
  });
})();

if(location.pathname==='/'||location.pathname==='/index.html'){const u=new URL(location.href);if(u.searchParams.has('view')){u.searchParams.delete('view');history.replaceState(null,'',u.pathname+u.search+u.hash);}}
