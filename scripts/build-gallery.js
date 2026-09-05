// Builds gh-pages gallery: index.html + videos + posters (output to gh-pages-dist/)
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'gh-pages-dist');
const data = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'emotions.json'), 'utf8'));
const REPO = 'ai-video-emotion-guide';
const REF = `ref=${REPO}`;

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'videos'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'posters'), { recursive: true });

for (const e of data) {
  const f = e.videoSrc.split('/').pop();
  fs.copyFileSync(path.join(ROOT, 'videos', f), path.join(OUT, 'videos', f));
  fs.copyFileSync(path.join(ROOT, 'assets', 'posters', f.replace('.mp4', '.jpg')), path.join(OUT, 'posters', f.replace('.mp4', '.jpg')));
}

const cards = data.map((e, i) => {
  const f = e.videoSrc.split('/').pop();
  const s = f.replace('.mp4', '');
  return `    <article class="card" data-family="${e.family.toLowerCase()}" data-intensity="${e.intensity.toLowerCase()}" data-search="${(e.name + ' ' + e.aliases).toLowerCase()}">
      <video controls muted loop preload="none" poster="posters/${s}.jpg" playsinline>
        <source src="videos/${f}" type="video/mp4">
      </video>
      <div class="meta">
        <h2><span class="idx">${String(i + 1).padStart(2, '0')}</span> ${e.name}</h2>
        <p class="tags"><span>${e.family}</span><span>${e.intensity}</span><span>${e.cue}</span></p>
        <p class="prompt">${e.prompt}</p>
        <div class="actions">
          <button class="copy" data-prompt="${e.prompt.replace(/"/g, '&quot;')}">Copy prompt</button>
          <a href="https://useneospark.com/prompt-lib?prompt=${s}&${REF}" target="_blank" rel="noopener">Try on NeoSpark →</a>
        </div>
      </div>
    </article>`;
}).join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AI Video Emotion Direction Guide — Gallery</title>
<meta name="description" content="25 emotion performance directions for AI video with playable Seedance 2.5 reference performances.">
<style>
  :root { color-scheme: dark; --bg:#0d1117; --panel:#161b22; --line:#30363d; --text:#e6edf3; --dim:#8b949e; --accent:#bc8cff; }
  * { box-sizing: border-box; margin: 0; }
  body { background: var(--bg); color: var(--text); font: 15px/1.6 -apple-system, "Segoe UI", system-ui, sans-serif; }
  header { max-width: 1100px; margin: 0 auto; padding: 48px 20px 8px; }
  h1 { font-size: clamp(26px, 4vw, 40px); letter-spacing: -0.02em; }
  h1 .zh { display: block; font-size: 0.55em; color: var(--dim); font-weight: 500; margin-top: 6px; }
  .sub { color: var(--dim); margin-top: 12px; max-width: 640px; }
  .bar { max-width: 1100px; margin: 24px auto; padding: 0 20px; display: flex; gap: 10px; flex-wrap: wrap; }
  .bar input, .bar select { background: var(--panel); border: 1px solid var(--line); color: var(--text); border-radius: 8px; padding: 9px 12px; font-size: 14px; }
  .bar input { flex: 1; min-width: 220px; }
  main { max-width: 1100px; margin: 0 auto; padding: 0 20px 60px; display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
  .card { background: var(--panel); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
  .card video { width: 100%; aspect-ratio: 16/10; background: #000; display: block; }
  .meta { padding: 16px; }
  .meta h2 { font-size: 17px; }
  .idx { color: var(--accent); font-variant-numeric: tabular-nums; }
  .tags { margin: 8px 0 10px; display: flex; gap: 6px; flex-wrap: wrap; }
  .tags span { font-size: 12px; color: var(--dim); border: 1px solid var(--line); border-radius: 99px; padding: 2px 9px; }
  .prompt { font-size: 13.5px; color: var(--dim); }
  .actions { margin-top: 14px; display: flex; gap: 10px; align-items: center; }
  .copy { background: var(--accent); color: #0d1117; border: 0; border-radius: 8px; padding: 7px 14px; font-weight: 600; cursor: pointer; }
  .actions a { color: var(--accent); text-decoration: none; font-size: 13.5px; }
  footer { text-align: center; color: var(--dim); padding: 30px 20px 50px; font-size: 13px; }
  footer a { color: var(--accent); }
  [hidden] { display: none !important; }
</style>
</head>
<body>
<header>
  <h1>The Complete AI Video Emotion Direction Guide<span class="zh">AI 视频情绪导演完全指南 · 在线画廊</span></h1>
  <p class="sub">25 emotion performance directions for AI video — press play, watch the acting, copy the prompt, generate on <a href="https://useneospark.com/?${REF}" style="color:var(--accent)">NeoSpark</a>.</p>
</header>
<div class="bar">
  <input id="q" type="search" placeholder="Search emotions or acting cues / 搜索情绪">
  <select id="fam"><option value="">All families</option>${[...new Set(data.map(e => e.family))].map(f => `<option>${f}</option>`).join('')}</select>
  <select id="int"><option value="">All intensities</option><option>Subtle</option><option>Medium</option><option>Explosive</option></select>
</div>
<main id="grid">
${cards}
</main>
<footer>
  Curated from <a href="https://seedance-emotion-direction.vercel.app/">Emotion Direction</a> ·
  Repo <a href="https://github.com/useneospark/${REPO}">useneospark/${REPO}</a> ·
  Powered by <a href="https://useneospark.com/?${REF}">NeoSpark</a>
</footer>
<script>
const q = document.getElementById('q'), fam = document.getElementById('fam'), int = document.getElementById('int');
const cards = [...document.querySelectorAll('.card')];
function filter() {
  const needle = q.value.trim().toLowerCase();
  for (const c of cards) {
    const ok = (!needle || c.dataset.search.includes(needle))
      && (!fam.value || c.dataset.family === fam.value.toLowerCase())
      && (!int.value || c.dataset.intensity === int.value.toLowerCase());
    c.hidden = !ok;
  }
}
q.addEventListener('input', filter); fam.addEventListener('change', filter); int.addEventListener('change', filter);
document.querySelectorAll('.copy').forEach(b => b.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(b.dataset.prompt); b.textContent = 'Copied ✓'; }
  catch { b.textContent = 'Copy failed'; }
  setTimeout(() => b.textContent = 'Copy prompt', 1500);
}));
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(OUT, 'index.html'), html);
console.log('gallery built:', data.length, 'cards →', OUT);
