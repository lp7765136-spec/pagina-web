/* ============================================================
   CELUPOWER · EDITA AQUÍ TU INFORMACIÓN
   ------------------------------------------------------------
   IMPORTANTE: los productos, marcas y PRECIOS de abajo son de
   EJEMPLO. Cámbialos por los reales de tu negocio.
   Formato: { c: categoría, n: nombre, m: marca, p: precio (número), d: descripción, img: foto }
   Las fotos son imágenes de referencia de Unsplash/Pexels (enlace directo).
   Para usar la foto real de tu producto: img: 'https://...enlace-de-tu-foto.jpg'
   o súbela a la carpeta y usa  img: 'fotos/mi-producto.jpg'
   ============================================================ */
const WHATSAPP = '573146039495';          // 57 = Colombia + tu número
const NEGOCIO  = 'CeluPower';

const un = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`;   // fotos de Unsplash (licencia libre)
const pex = id => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`; // fotos de Pexels (licencia libre)

const productos = [
  { c: 'Cargadores', n: 'Cargador de pared 25W USB-C', m: 'Samsung', p: 65000, d: 'Carga rápida para celulares Samsung y Android.', img: un('1583863788434-e58a36330cf0') },
  { c: 'Cargadores', n: 'Cargador de pared 33W', m: 'Xiaomi', p: 55000, d: 'Carga rápida con salida USB-A. Compacto y resistente.', img: un('1586254116951-5263e2cdb44c') },
  { c: 'Cargadores', n: 'Cargador GaN 65W', m: 'Baseus', p: 140000, d: 'Carga celular y portátil. Pequeño y de alta potencia.', img: un('1725304382197-663ae3864750') },
  { c: 'Cables', n: 'Cable USB-C a USB-C 1 m', m: 'Hoco', p: 18000, d: 'Carga y transferencia de datos. Cubierta reforzada.', img: un('1603539444875-76e7684265f6') },
  { c: 'Cables', n: 'Cable Lightning 1 m', m: 'Hoco', p: 22000, d: 'Compatible con iPhone 14 y anteriores.', img: un('1499033300314-43c811cff6d5') },
  { c: 'Cables', n: 'Cable micro-USB 1 m', m: 'Genérico', p: 10000, d: 'Para equipos antiguos y accesorios.', img: un('1557767382-97b28f5488e7') },
  { c: 'Audífonos', n: 'Audífonos inalámbricos Redmi Buds', m: 'Xiaomi', p: 85000, d: 'Bluetooth con estuche de carga y micrófono.', img: un('1606220588913-b3aacb4d2f46') },
  { c: 'Audífonos', n: 'Audífonos con cable 3.5 mm', m: 'Samsung', p: 20000, d: 'Sonido claro con micrófono y control de llamadas.', img: un('1600294037681-c80b4cb5b434') },
  { c: 'Audífonos', n: 'Diadema Bluetooth Tune 520BT', m: 'JBL', p: 180000, d: 'Sonido potente y batería de larga duración.', img: un('1590658268037-6bf12165a8df') },
  { c: 'Fundas', n: 'Funda de silicona transparente', m: 'Genérico', p: 15000, d: 'Protege sin ocultar el color. Pregunta por tu modelo.', img: un('1758398013809-fc909955bd76') },
  { c: 'Fundas', n: 'Funda antigolpes reforzada', m: 'Genérico', p: 25000, d: 'Esquinas reforzadas contra caídas.', img: un('1759588071814-f960ed8f7ee8') },
  { c: 'Protectores', n: 'Vidrio templado 9H', m: 'Genérico', p: 12000, d: 'Protege la pantalla de rayones y golpes.', img: un('1600577231598-31ea4cb50da3') },
  { c: 'Baterías portátiles', n: 'Power bank 10.000 mAh', m: 'Anker', p: 110000, d: 'Carga tu celular hasta 2 veces. Dos puertos.', img: un('1760708825913-65a50b3dc39b') },
  { c: 'Baterías portátiles', n: 'Power bank 20.000 mAh', m: 'Xiaomi', p: 140000, d: 'Gran capacidad para varios días sin enchufe.', img: un('1566554738544-d962991c3fee') },
  { c: 'Parlantes', n: 'Parlante Bluetooth portátil Go 3', m: 'JBL', p: 150000, d: 'Pequeño, resistente al agua y con gran sonido.', img: un('1608043152269-423dbba4e7e1') },
  { c: 'Soportes', n: 'Soporte magnético para carro', m: 'Baseus', p: 25000, d: 'Sujeta tu celular firme mientras manejas.', img: un('1539787200876-3c033a7bebcd') },
  { c: 'Memorias', n: 'Memoria microSD 64 GB', m: 'Samsung', p: 28000, d: 'Más espacio para fotos, videos y apps.', img: pex('1738643') }
];

/* ---------- Ilustraciones por categoría (si no hay foto propia) ---------- */
const ICONOS = {
  'Cargadores': '<rect x="38" y="28" width="44" height="52" rx="8"/><path d="M50 28V16M70 28V16M60 80v14M63 42l-8 14h10l-6 14"/>',
  'Cables': '<path d="M30 92c0-34 60-12 60-52"/><rect x="22" y="88" width="16" height="18" rx="3"/><rect x="82" y="16" width="16" height="18" rx="3"/>',
  'Audífonos': '<path d="M26 72V62a34 34 0 0 1 68 0v10"/><rect x="20" y="68" width="16" height="28" rx="6"/><rect x="84" y="68" width="16" height="28" rx="6"/>',
  'Fundas': '<rect x="36" y="14" width="48" height="92" rx="10"/><rect x="44" y="22" width="16" height="16" rx="4"/><circle cx="52" cy="30" r="3"/>',
  'Protectores': '<rect x="36" y="14" width="48" height="92" rx="8"/><path d="M44 36l18-14M44 62l34-34" opacity=".7"/>',
  'Baterías portátiles': '<rect x="30" y="34" width="60" height="52" rx="8"/><path d="M62 46l-10 16h12l-8 16M42 34v-8M78 34v-8"/>',
  'Parlantes': '<rect x="34" y="18" width="52" height="84" rx="16"/><circle cx="60" cy="50" r="13"/><circle cx="60" cy="82" r="6"/>',
  'Soportes': '<rect x="40" y="16" width="40" height="56" rx="8"/><path d="M60 72v22M40 100h40"/>',
  'Memorias': '<path d="M38 16h30l16 16v72H38z"/><path d="M48 16v14M56 16v14M64 16v14"/>'
};

/* ---------- Utilidades ---------- */
const cop = n => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
const waLink = msg => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Todos los botones de WhatsApp generales
document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = waLink(`Hola ${NEGOCIO}, vi su página web y quiero información sobre sus accesorios.`);
});

/* ---------- Catálogo ---------- */
const cont = document.getElementById('productos');
const chipsEl = document.getElementById('chips');
const buscar = document.getElementById('buscar');
const contador = document.getElementById('contador');
const categorias = ['Todos', ...new Set(productos.map(p => p.c))];
let catActual = 'Todos', marcaActual = '';

chipsEl.innerHTML = categorias.map(c => `<button class="chip${c === 'Todos' ? ' activo' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
chipsEl.addEventListener('click', e => {
  const b = e.target.closest('.chip'); if (!b) return;
  catActual = b.dataset.cat; marcaActual = '';
  chipsEl.querySelectorAll('.chip').forEach(x => x.classList.toggle('activo', x === b));
  pintar();
});
buscar.addEventListener('input', () => { marcaActual = ''; pintar(); });

const svgIcono = p => `<svg viewBox="0 0 120 120" role="img" aria-label="${esc(p.n)}">${ICONOS[p.c] || ICONOS['Cargadores']}</svg>`;
function foto(p) {
  return p.img ? `<img src="${esc(p.img)}" alt="${esc(p.n)}" loading="lazy" referrerpolicy="no-referrer">` : svgIcono(p);
}

function pintar() {
  const q = buscar.value.trim().toLowerCase();
  const lista = productos.filter(p =>
    (catActual === 'Todos' || p.c === catActual) &&
    (!marcaActual || p.m === marcaActual) &&
    (!q || `${p.n} ${p.m} ${p.c}`.toLowerCase().includes(q)));
  contador.textContent = `${lista.length} producto${lista.length === 1 ? '' : 's'}` + (marcaActual ? ` · marca ${marcaActual}` : '');
  cont.innerHTML = lista.length ? lista.map(p => `
    <article class="card">
      <div class="foto">${foto(p)}</div>
      <div class="card-cuerpo">
        <span class="cat">${esc(p.c)}</span>
        <h3>${esc(p.n)}</h3>
        <span class="marca-t">Marca: ${esc(p.m)}</span>
        <p>${esc(p.d)}</p>
        <div class="precio">${cop(p.p)}</div>
        <a class="btn btn-wa btn-pedir" target="_blank" rel="noopener"
           href="${waLink(`Hola ${NEGOCIO}, quiero pedir: ${p.n} (${p.m}) - ${cop(p.p)}. ¿Está disponible?`)}">Pedir por WhatsApp</a>
      </div>
    </article>`).join('') : '<p class="vacio">No encontramos productos con esa búsqueda. Escríbenos por WhatsApp y te ayudamos.</p>';
}

// Si una foto no carga, se muestra la ilustración de la categoría
cont.addEventListener('error', e => {
  const img = e.target;
  if (img.tagName !== 'IMG') return;
  const p = productos.find(x => x.n === img.alt);
  if (p) img.replaceWith(Object.assign(document.createElement('div'), { innerHTML: svgIcono(p) }).firstChild);
}, true);

/* ---------- Marcas ---------- */
const marcas = [...new Set(productos.map(p => p.m))];
document.getElementById('marcas').innerHTML = marcas.map(m => {
  const items = productos.filter(p => p.m === m);
  const cats = [...new Set(items.map(p => p.c))].join(', ');
  return `<article class="card marca-card"><div class="monograma">${esc(m[0])}</div><h3>${esc(m)}</h3>
    <p>${items.length} producto${items.length === 1 ? '' : 's'} · ${esc(cats)}</p>
    <button class="btn btn-linea" data-marca="${esc(m)}">Ver productos</button></article>`;
}).join('');
document.getElementById('marcas').addEventListener('click', e => {
  const b = e.target.closest('[data-marca]'); if (!b) return;
  marcaActual = b.dataset.marca; catActual = 'Todos'; buscar.value = '';
  chipsEl.querySelectorAll('.chip').forEach(x => x.classList.toggle('activo', x.dataset.cat === 'Todos'));
  pintar(); mostrar(1);
});

/* ---------- Navegación por páginas ---------- */
const paginas = document.querySelectorAll('.pagina');
const total = paginas.length;
const scroller = document.getElementById('paginas');
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const btnInicio = document.getElementById('btnInicio');
const btnAtras = document.getElementById('btnAtras');
const btnAdelante = document.getElementById('btnAdelante');
let actual = 0;

function mostrar(n) {
  actual = Math.max(0, Math.min(total - 1, n));
  paginas.forEach((p, i) => p.classList.toggle('activa', i === actual));
  document.getElementById('indNum').textContent = `${actual + 1} / ${total}`;
  document.getElementById('indTit').textContent = paginas[actual].dataset.titulo;
  btnAtras.disabled = btnInicio.disabled = actual === 0;
  btnAdelante.disabled = actual === total - 1;
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('activo', parseInt(a.dataset.ir) === actual));
  scroller.scrollTo(0, 0);
  nav.classList.remove('abierto');
  menuBtn.setAttribute('aria-expanded', false);
}

document.querySelectorAll('[data-ir]').forEach(el => el.addEventListener('click', e => {
  e.preventDefault();
  if (parseInt(el.dataset.ir) === 1 && el.closest('nav, .hero')) { marcaActual = ''; pintar(); }
  mostrar(parseInt(el.dataset.ir));
}));
btnInicio.addEventListener('click', () => mostrar(0));
btnAtras.addEventListener('click', () => mostrar(actual - 1));
btnAdelante.addEventListener('click', () => mostrar(actual + 1));
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === 'ArrowRight') mostrar(actual + 1);
  if (e.key === 'ArrowLeft') mostrar(actual - 1);
});
menuBtn.addEventListener('click', () => {
  const abierto = nav.classList.toggle('abierto');
  menuBtn.setAttribute('aria-expanded', abierto);
});

document.getElementById('anio').textContent = new Date().getFullYear();
pintar();
mostrar(0);
