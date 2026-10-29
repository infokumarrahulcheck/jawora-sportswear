(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const button = document.querySelector('.menu');
  const nav = document.querySelector('nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }));
  }
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = matchMedia('(pointer:fine)').matches;
  if (!reduce && desktop) {
    const glow = document.querySelector('.glow');
    addEventListener('pointermove', e => {
      if (glow) { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }
    }, {passive:true});
    document.querySelectorAll('.art').forEach(art => {
      art.addEventListener('pointermove', e => {
        const r = art.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        art.style.transform = `perspective(1500px) rotateX(${(-y*.55).toFixed(2)}deg) rotateY(${(x*.7).toFixed(2)}deg)`;
      });
      art.addEventListener('pointerleave', () => { art.style.transform = ''; });
    });
  }
})();
