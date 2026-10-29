(() => {
  // Keep the current year logic minimal; all extra navigation controls were removed.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const desktop = window.matchMedia('(pointer:fine)').matches;
  if (!reduce && desktop) {
    const glow = document.querySelector('.glow');
    window.addEventListener('pointermove', event => {
      if (glow) { glow.style.left = event.clientX + 'px'; glow.style.top = event.clientY + 'px'; }
    }, {passive:true});
    document.querySelectorAll('.art').forEach(art => {
      art.addEventListener('pointermove', event => {
        const rect = art.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        art.style.transform = `perspective(1500px) rotateX(${(-y*.45).toFixed(2)}deg) rotateY(${(x*.6).toFixed(2)}deg)`;
      });
      art.addEventListener('pointerleave', () => { art.style.transform = ''; });
    });
  }
})();
