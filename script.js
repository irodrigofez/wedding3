// Elementos clave
const envelope = document.getElementById('envelope');
const layout   = document.getElementById('layout');
const music    = document.getElementById('bgmusic');

// Abrir sobre + mostrar layout lovestory + música
document.getElementById('openArea').addEventListener('click', () => {
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');

  setTimeout(() => {
    // Música (solo tras interacción)
    try { music.volume = 0.65; music.play(); } catch(e){}

    // Mostrar layout
    layout.classList.remove('hidden');

    // Scroll suave hacia la foto principal
    document.querySelector('.hero-photo').scrollIntoView({ behavior: 'smooth' });
  }, 1200); // cuando termina la animación del sobre
});

// ---- Contador hacia 28 Feb 2026 17:00 ----
const countdownEl = document.getElementById('countdown');
const target = new Date('Feb 28, 2026 17:00:00').getTime();

function renderCountdown(){
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const d = Math.floor(diff / (1000*60*60*24));
  diff %= (1000*60*60*24);
  const h = Math.floor(diff / (1000*60*60));
  diff %= (1000*60*60);
  const m = Math.floor(diff / (1000*60));
  diff %= (1000*60);
  const s = Math.floor(diff / 1000);

  countdownEl.innerHTML = `
    <div class="unit"><div class="num">${d.toString().padStart(2,'0')}</div><div class="lab">DÍAS</div></div>
    <div class="unit"><div class="num">${h.toString().padStart(2,'0')}</div><div class="lab">HORAS</div></div>
    <div class="unit"><div class="num">${m.toString().padStart(2,'0')}</div><div class="lab">MINUTOS</div></div>
    <div class="unit"><div class="num">${s.toString().padStart(2,'0')}</div><div class="lab">SEGUNDOS</div></div>
  `;
}
renderCountdown();
setInterval(renderCountdown, 1000);

// ---- Texto de portada (formato A: serif romántica) ----
(function setHeroTitles(){
  const heroTitle = document.querySelector('.hero-title');
  const heroSub   = document.querySelector('.hero-sub');

  // Opción A — serif como en referencia
  heroTitle.textContent = 'LOURDES & DIEGO';
  heroSub.textContent   = '28.02.26 | NUESTRA BODA';
})();
