// ===== DATA MENU =====
const menuItems = [
  { id: 1, name: 'Kopi Gula Aren', category: 'minuman', desc: 'Espresso, susu, dan gula aren asli. Signature SELA yang menemani setiap sesi kerja.', price: 14000, tag: 'Best Seller', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&q=85' },
  { id: 2, name: 'Cappuccino', category: 'minuman', desc: 'Cappuccino dengan foam tebal dan tekstur lembut. Klasik yang tidak pernah salah.', price: 16000, tag: 'Signature', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=700&q=85' },
  { id: 3, name: 'Es Jeruk Peras', category: 'minuman', desc: 'Jeruk peras segar tanpa pemanis tambahan. Ringan dan menyegarkan.', price: 10000, tag: 'Segar', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=700&q=85' },
  { id: 4, name: 'Americano', category: 'minuman', desc: 'Double shot espresso tanpa gula. Pahit yang jujur, pas untuk yang butuh fokus.', price: 15000, tag: 'Klasik', img: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=700&q=85' },
  { id: 5, name: 'Matcha Latte', category: 'minuman', desc: 'Matcha premium Jepang dengan susu. Lembut, tenang, dan menenangkan.', price: 17000, tag: 'Baru', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=700&q=85' },
  { id: 6, name: 'Hot Chocolate', category: 'minuman', desc: 'Coklat Belgia dengan whipped cream dan taburan meses.', price: 15000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=700&q=85' },
  { id: 7, name: 'Nasi Goreng Spesial', category: 'makanan', desc: 'Nasi goreng bumbu rahasia dengan telur, ayam suwir, dan garnish segar.', price: 22000, tag: 'Best Seller', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700&q=85' },
  { id: 8, name: 'Mie Ayam Komplit', category: 'makanan', desc: 'Mie ayam dengan bakso, pangsit goreng, dan sayuran segar.', price: 24000, tag: 'Best Seller', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&q=85' },
  { id: 9, name: 'Ayam Geprek', category: 'makanan', desc: 'Ayam crispy dengan sambal bawang. Level pedas bisa disesuaikan.', price: 21000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=700&q=85' },
  { id: 10, name: 'Bakso Urat Jumbo', category: 'makanan', desc: 'Bakso urat ukuran jumbo dengan kuah kaldu asli, bihun, dan pangsit.', price: 23000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75f?w=700&q=85' },
  { id: 11, name: 'Pisang Goreng Keju', category: 'cemilan', desc: 'Pisang goreng crispy dengan keju mozarella leleh.', price: 16000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=700&q=85' },
  { id: 12, name: 'Tahu Isi', category: 'cemilan', desc: 'Tahu isi sayuran dengan adonan renyah. Cocok menemani ngopi.', price: 12000, tag: 'Cemilan', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=85' },
  { id: 13, name: 'French Fries Truffle', category: 'cemilan', desc: 'Kentang goreng dengan bumbu truffle dan mayo.', price: 15000, tag: 'Cemilan', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=85' },
  { id: 14, name: 'Roti Bakar Coklat', category: 'cemilan', desc: 'Roti panggang dengan selai coklat dan keju.', price: 14000, tag: 'Cemilan', img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700&q=85' },
  { id: 15, name: 'Croissant Coklat', category: 'cemilan', desc: 'Croissant panggang fresh dengan isi coklat melimpah.', price: 18000, tag: 'Signature', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=85' },
  { id: 16, name: 'Paket Nugas', category: 'paket', desc: 'Kopi Gula Aren + Croissant Coklat. Paket hemat untuk menemani deadline.', price: 28000, tag: 'Paket Hemat', img: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=700&q=85' },
  // --- MENU BARU ---
  { id: 17, name: 'Es Kopi Susu Nanaskan', category: 'minuman', desc: 'Kopi susu dengan es serut halus. Dinginnya sampai ke hati yang panas.', price: 13000, tag: 'Baru', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&q=85' },
  { id: 18, name: 'Kopi Lanjut Ujian', category: 'minuman', desc: 'Triple shot espresso. Satu gelas untuk tiga bab yang belum dibaca.', price: 18000, tag: 'Hero', img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=700&q=85' },
  { id: 19, name: 'Teh Melow', category: 'minuman', desc: 'Teh melati hangat dengan madu. Untuk yang hatinya butuh ditemani.', price: 9000, tag: 'Menenangkan', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=85' },
  { id: 20, name: 'Lemon Tea Sabar', category: 'minuman', desc: 'Lemon tea dingin. Minuman resmi orang yang sedang menahan diri.', price: 9000, tag: 'Segar', img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=700&q=85' },
  { id: 21, name: 'Red Velvet Peluk', category: 'minuman', desc: 'Red velvet latte manis lembut. Rasanya seperti dipeluk, tapi versi minuman.', price: 18000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=700&q=85' },
  { id: 22, name: 'Nasi Uduk Seperti Rumah', category: 'makanan', desc: 'Nasi uduk dengan ayam goreng, tempe, dan sambal. Rasanya seperti pulang.', price: 20000, tag: 'Comfort Food', img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=700&q=85' },
  { id: 23, name: 'Mie Nyemek Anti Menyerah', category: 'makanan', desc: 'Indomie kuah disiram telur dadar. Sederhana, hangat, setia menemani.', price: 11000, tag: 'Setia', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&q=85' },
  { id: 24, name: 'Roti Bakar Tiga Lapis', category: 'cemilan', desc: 'Roti bakar tiga lapis dengan coklat, keju, dan mentega. Berlapis seperti perasaan.', price: 15000, tag: 'Berlapis', img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=700&q=85' },
  { id: 25, name: 'Kentang Goreng Pahlawan', category: 'cemilan', desc: 'Kentang goreng gurih renyah. Pahlawan sejati di balik setiap sesi nugas.', price: 14000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=700&q=85' },
  { id: 26, name: 'Paket Healing Sendiri', category: 'paket', desc: 'Teh Melow + Pisang Goreng Keju. Resmi healing seorang diri tanpa gangguan.', price: 22000, tag: 'Paket Hemat', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&q=85' },
  // --- MENU BARU 2: SIGNATURE & SPECIALS ---
  { id: 27, name: 'Es Blewah Komodo', category: 'minuman', desc: 'Blewah segar dengan sirup gula aren dan es batu. Dingin, manis, khas Sleman.', price: 12000, tag: 'Khas SELA', img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=700&q=85' },
  { id: 28, name: 'Affogato SELA', category: 'minuman', desc: 'Vanilla ice cream dituang espresso. Manis pahit dalam satu suapan.', price: 20000, tag: 'Limited', img: 'https://images.unsplash.com/photo-1579954115545-a94591a28e71?w=700&q=85' },
  { id: 29, name: 'Bandrek Hangat', category: 'minuman', desc: 'Minuman tradisional jahe, serai, dan rempah hangat. Cocok pas hujan malam.', price: 10000, tag: 'Hangat', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&q=85' },
  { id: 30, name: 'Rice Bowl Ayam Cabe', category: 'makanan', desc: 'Nasi hangat dengan ayam suwir pedas, scramble egg, dan lalapan.', price: 24000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=700&q=85' },
  { id: 31, name: 'Chicken Wings BBQ', category: 'makanan', desc: 'Sayap ayam panggang dengan saus BBQ smoky. Craving satisfied.', price: 26000, tag: 'Baru', img: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=700&q=85' },
  { id: 32, name: 'Pisang Goreng Coklat Lumer', category: 'cemilan', desc: 'Pisang goreng crispy disiram coklat lumer dan susu kental manis.', price: 18000, tag: 'Trending', img: 'https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=700&q=85' },
  { id: 33, name: 'Croissant Keju Mozarella', category: 'cemilan', desc: 'Croissant renyah berisi keju mozarella yang melt sempurna.', price: 20000, tag: 'Signature', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=700&q=85' },
  { id: 34, name: 'Paket Kencan Pertama', category: 'paket', desc: 'Cappuccino + Red Velvet + Croissant Coklat. Cocok buat yang lagi PDKT.', price: 48000, tag: 'Paket Kenangan', img: 'https://images.unsplash.com/photo-1554118811-7e8a7782e4a4?w=700&q=85' },
  { id: 35, name: 'Paket Malam Insomnia', category: 'paket', desc: 'Kopi Lanjut Ujian + Americano + Pisang Goreng. Buat yang tidur esok hari.', price: 46000, tag: 'Paket Nugas', img: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=700&q=85' },
  { id: 36, name: 'Roti Canai Keju', category: 'cemilan', desc: 'Roti canai crispy dengan taburan keju. Renyah di luar, lembut di dalam.', price: 17000, tag: 'Favorit', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&q=85' },
];

// ===== KODE PROMO =====
const promoCodes = {
  'HEMAT8':   { label: 'HEMAT8',   type: 'percent', value: 8,  desc: '8%' },
  'HEMAT15':  { label: 'HEMAT15', type: 'percent', value: 15, desc: '15%' },
  'HEMAT20':  { label: 'HEMAT20', type: 'percent', value: 20, desc: '20%' },
  'HEMAT25':  { label: 'HEMAT25', type: 'percent', value: 25, desc: '25%' },
  'HEMAT30':  { label: 'HEMAT30', type: 'percent', value: 30, desc: '30%' },
  'HEMAT40':  { label: 'HEMAT40', type: 'percent', value: 40, desc: '40%' },
  'SELA10K':  { label: 'SELA10K', type: 'fixed', value: 10000, desc: 'Rp 10.000' },
  'SELA15K':  { label: 'SELA15K', type: 'fixed', value: 15000, desc: 'Rp 15.000' },
  'SELA20K':  { label: 'SELA20K', type: 'fixed', value: 20000, desc: 'Rp 20.000' },
  'SELA25K':  { label: 'SELA25K', type: 'fixed', value: 25000, desc: 'Rp 25.000' },
  'GRATIS':   { label: 'GRATIS', type: 'fixed',   value: 5000,  desc: 'Rp 5.000' },
  'MAKANGRATIS': { label: 'MAKANGRATIS', type: 'fixed', value: 20000, desc: 'Rp 20.000' },
  'KOPIGRATIS': { label: 'KOPIGRATIS', type: 'fixed', value: 15000, desc: 'Rp 15.000' },
  'HEMAT50':  { label: 'HEMAT50', type: 'percent', value: 50, desc: '50%' },
};

// ===== STATE =====
let appliedPromo = null;
let activeCategory = 'semua';
let payTimer = null;
let currentMethod = '';
let currentInvoice = null;

// ===== UTIL =====
const el = id => document.getElementById(id);
const rp = n => `Rp ${n.toLocaleString('id-ID')}`;
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// ===== RENDER MENU =====
function categoryLabel(cat) {
  const map = { minuman: 'Minuman', makanan: 'Makanan', cemilan: 'Cemilan', paket: 'Paket Hemat' };
  return map[cat] || cat;
}

function renderMenu() {
  const grid = el('menuGrid');
  if (!grid) return;
  const filtered = activeCategory === 'semua' ? menuItems : menuItems.filter(m => m.category === activeCategory);
  grid.innerHTML = filtered.map((item, idx) => {
    const styleNum = (idx % 3 === 1) ? 'b' : (idx % 3 === 2) ? 'c' : 'a';
    const staggerDelay = Math.min(idx * 0.055, 0.5).toFixed(3);
    const catClass = `cat-${item.category}`;
    const bestClass = item.tag === 'Best Seller' ? ' is-best' : '';
    return `
    <div class="menu-card ${catClass}${bestClass} style-${styleNum}" style="--d:${staggerDelay}s">
      <div class="menu-img-wrap">
        <img src="${item.img}" alt="${esc(item.name)}" class="menu-img" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80'">
        ${item.tag ? `<span class="menu-tag ${['baru','limited','trending'].includes(item.tag.toLowerCase()) ? 'tag-' + item.tag.toLowerCase() : ''}">${esc(item.tag)}</span>` : ''}
        ${item.category === 'paket' ? '<span class="menu-paket-badge">PAKET</span>' : ''}
      </div>
      <div class="menu-body">
        <div class="menu-category-label">${categoryLabel(item.category)}</div>
        <h3 class="menu-name">${esc(item.name)}</h3>
        <p class="menu-desc">${esc(item.desc)}</p>
        <div class="menu-footer">
          <span class="menu-price">${rp(item.price)}</span>
          <button class="menu-order-btn" data-id="${item.id}" title="Tambah ke keranjang" aria-label="Tambah ${esc(item.name)} ke keranjang">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ===== FILTER MENU (event delegation — works after re-render) =====
function filterMenu(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.mcat').forEach(b => b.classList.remove('active'));
  (btn || document.querySelector(`.mcat[data-cat="${cat}"]`))?.classList.add('active');
  renderMenu();
}

// Event delegation untuk menu grid — buka order modal (SATU handler aja)
document.getElementById('menuGrid')?.addEventListener('click', e => {
  const btn = e.target.closest('.menu-order-btn');
  if (btn) {
    const id = parseInt(btn.dataset.id);
    if (id) openOrder(id);
  }
});

// ===== ADD TO CART (simplified — langsung buka modal order) =====
function addToCart(id, btn) {
  openOrder(id);
  if (btn) {
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 600);
  }
}

// ===== RENDER CART (untuk future use / cart modal) =====
function renderCart() {
  // Placeholder — keranjang sudah digantikan oleh order modal
  // Ini bisa di-extend kalau mau bikin cart modal terpisah
}

// ===== ORDER ITEM MODAL (ganti keranjang) =====
let currentOrderItem = null;
let ordQtyVal = 1;

function openOrder(id) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;
  currentOrderItem = { id: item.id, price: item.price, name: item.name };
  ordQtyVal = 1;
  appliedPromo = null;
  if (el('promoInput')) el('promoInput').value = '';
  if (el('promoMsg')) el('promoMsg').textContent = '';
  el('ordImg').src = item.img;
  el('ordImg').alt = item.name;
  el('ordTag').textContent = item.tag || '';
  el('ordCat').textContent = categoryLabel(item.category);
  el('ordName').textContent = item.name;
  el('ordDesc').textContent = item.desc;
  el('ordQtyNum').textContent = '1';
  updateOrdTotal();
  el('orderOverlay')?.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeOrder() {
  el('orderOverlay')?.classList.remove('show');
  document.body.style.overflow = '';
}

function ordQty(delta) {
  ordQtyVal = Math.max(1, ordQtyVal + delta);
  el('ordQtyNum').textContent = ordQtyVal;
  updateOrdTotal();
}

function updateOrdTotal() {
  if (!currentOrderItem) return;
  const subtotal = currentOrderItem.price * ordQtyVal;
  let diskon = 0;
  if (appliedPromo) {
    diskon = appliedPromo.type === 'percent'
      ? Math.floor(subtotal * appliedPromo.value / 100)
      : Math.min(appliedPromo.value, subtotal);
  }
  const total = Math.max(0, subtotal - diskon);
  el('cartTotal').textContent = rp(total);
}

// Tutup order modal kalau klik overlay
el('orderOverlay')?.addEventListener('click', e => {
  if (e.target === el('orderOverlay')) closeOrder();
});

// Checkout button
document.getElementById('checkoutBtn')?.addEventListener('click', openPayment);

// ===== PROMO (order modal) =====
document.getElementById('promoApply')?.addEventListener('click', () => {
  const input = el('promoInput');
  const msgEl = el('promoMsg');
  const kode = input?.value.trim().toUpperCase();
  if (!kode) { if (msgEl) { msgEl.textContent = 'Silakan masukkan kode promo.'; msgEl.className = 'promo-msg err'; } return; }
  const promo = promoCodes[kode];
  if (promo) {
    appliedPromo = promo;
    if (msgEl) { msgEl.textContent = `✓ Promo berhasil — diskon ${promo.desc}.`; msgEl.className = 'promo-msg ok'; }
  } else {
    appliedPromo = null;
    if (msgEl) { msgEl.textContent = '✗ Kode promo tidak valid.'; msgEl.className = 'promo-msg err'; }
  }
  updateOrdTotal();
});
document.getElementById('promoInput')?.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('promoApply')?.click(); });

// ===== PEMBAYARAN =====
function openPayment() {
  if (!currentOrderItem) { alert('Silakan pilih menu terlebih dahulu.'); return; }

  el('orderOverlay')?.classList.remove('show');
  el('payOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
  el('payStep1').style.display = '';
  el('payStep2').style.display = 'none';
  el('payTotal').textContent = el('cartTotal').textContent;
  renderPayMethods();
}
function closePay() {
  el('payOverlay').classList.remove('show');
  clearInterval(payTimer);
  document.body.style.overflow = '';
}
function backToMethods() {
  clearInterval(payTimer);
  el('payStep1').style.display = '';
  el('payStep2').style.display = 'none';
}

// ===== METODE PEMBAYARAN =====
const payMethods = [
  { name: 'QRIS', desc: 'Semua e-wallet & m-banking', cls: 'pm-qris', icon: 'Q' },
  { name: 'GoPay', desc: 'Bayar via aplikasi Gojek', cls: 'pm-gopay', icon: 'G' },
  { name: 'OVO', desc: 'Bayar via aplikasi OVO', cls: 'pm-ovo', icon: 'O' },
  { name: 'DANA', desc: 'Bayar via aplikasi DANA', cls: 'pm-dana', icon: 'D' },
  { name: 'Transfer Bank', desc: 'BCA Virtual Account', cls: 'pm-bank', icon: 'B' },
  { name: 'Bayar di Kasir', desc: 'Tunjukkan kode di kasir SELA', cls: 'pm-cash', icon: 'K' },
];

function renderPayMethods() {
  const wrap = el('payMethods');
  if (!wrap) return;
  wrap.innerHTML = payMethods.map(m => `
    <button class="pay-method" onclick="selectPayMethod('${m.name.replace(/'/g, "\\'")}')">
      <div class="pm-icon ${m.cls}">${m.icon}</div>
      <div class="pm-info"><strong>${m.name}</strong><small>${m.desc}</small></div>
    </button>
  `).join('');
}

function selectPayMethod(method) {
  const nama = el('buyerName')?.value.trim();
  const wa = el('buyerWa')?.value.trim();
  if (!nama) { alert('Silakan masukkan nama pemesan.'); el('buyerName')?.focus(); return; }
  if (!wa) { alert('Silakan masukkan nomor WhatsApp Anda.'); el('buyerWa')?.focus(); return; }

  currentMethod = method;
  el('payStep1').style.display = 'none';
  el('payStep2').style.display = '';
  el('payMethodTitle').textContent = method;
  renderPayBody(method);
  startCountdown();
}

function renderPayBody(method) {
  const item = menuItems.find(m => m.id === currentOrderItem?.id);
  const qty = ordQtyVal;
  const subtotal = (item?.price || 0) * qty;
  const diskon = appliedPromo
    ? (appliedPromo.type === 'percent' ? Math.floor(subtotal * appliedPromo.value / 100) : Math.min(appliedPromo.value, subtotal))
    : 0;
  const total = Math.max(0, subtotal - diskon);
  const body = el('payBody');
  const va = '8808' + String(Math.floor(1000000000 + Math.random() * 8999999999));
  if (method === 'QRIS') {
    body.innerHTML = `
      <div class="pay-qris-wrap">
        <img src="foto qris/Kode QRIS Blueberry, Digital & Kreatif.jpg" alt="QRIS SELA" class="pay-qris-img">
        <p class="pay-hint">Pindai menggunakan aplikasi e-wallet atau m-banking apa pun.<br>Nominal: <strong>${rp(total)}</strong></p>
      </div>`;
  } else if (method === 'Transfer Bank') {
    body.innerHTML = `
      <div class="pay-va-wrap">
        <div class="pay-va-bank">BCA Virtual Account</div>
        <div class="pay-va-number">${va}</div>
        <p class="pay-hint">Mohon transfer tepat sebesar <strong>${rp(total)}</strong>.<br>Nominal harus sama persis agar terverifikasi otomatis.</p>
      </div>`;
  } else if (method === 'Bayar di Kasir') {
    body.innerHTML = `
      <div class="pay-va-wrap">
        <div class="pay-va-bank">Bayar di Kasir</div>
        <div class="pay-va-code">SELA-${Date.now().toString().slice(-6)}</div>
        <p class="pay-hint">Tunjukkan kode ini kepada kasir saat berkunjung.<br>Total: <strong>${rp(total)}</strong></p>
      </div>`;
  } else {
    body.innerHTML = `
      <div class="pay-va-wrap">
        <div class="pay-va-bank">${esc(method)}</div>
        <div class="pay-va-number">08xxxxxxxxxx</div>
        <p class="pay-hint">Buka aplikasi ${esc(method)} Anda, pilih menu bayar, lalu selesaikan pembayaran sebesar <strong>${rp(total)}</strong>.</p>
      </div>`;
  }
}

function startCountdown() {
  clearInterval(payTimer);
  let sisa = 120;
  const cd = el('countdown');
  const update = () => {
    const m = String(Math.floor(sisa / 60)).padStart(2, '0');
    const d = String(sisa % 60).padStart(2, '0');
    if (cd) cd.textContent = `${m}:${d}`;
    if (cd) cd.classList.toggle('danger', sisa <= 30);
  };
  update();
  payTimer = setInterval(() => {
    sisa--;
    update();
    if (sisa <= 0) {
      clearInterval(payTimer);
      alert('Waktu pembayaran telah habis. Silakan coba lagi.');
      closePay();
    }
  }, 1000);
}

// ===== INVOICE =====
function confirmPayment() {
  clearInterval(payTimer);
  if (!currentOrderItem) return;
  const item = menuItems.find(m => m.id === currentOrderItem.id);
  const subtotal = currentOrderItem.price * ordQtyVal;
  const diskon = appliedPromo
    ? (appliedPromo.type === 'percent'
        ? Math.floor(subtotal * appliedPromo.value / 100)
        : Math.min(appliedPromo.value, subtotal))
    : 0;
  const total = Math.max(0, subtotal - diskon);

  const nama = el('buyerName').value.trim();
  const wa = el('buyerWa').value.trim();
  const noInvoice = 'INV/' + new Date().toISOString().slice(0,10).replace(/-/g,'') + '/' + Date.now().toString().slice(-5);
  const waktu = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });
  currentInvoice = { noInvoice, waktu, nama, wa, subtotal, diskon, total, method: currentMethod };

  // LOG PESANAN
  try {
    const orders = JSON.parse(localStorage.getItem('sela_orders') || '[]');
    orders.push({
      no: noInvoice, nama, wa, method: currentMethod,
      items: [item?.name], subtotal, diskon, total,
      time: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }),
    });
    localStorage.setItem('sela_orders', JSON.stringify(orders.slice(-100)));
  } catch(e) {}

  const listItems = `${item?.name || 'Item'} x${ordQtyVal} = ${rp(subtotal)}`;
  const invoiceWA = `*INVOICE SELA*\n━━━━━━━━━━━━━━━━━━\nNo Invoice : ${noInvoice}\nTanggal    : ${waktu}\n━━━━━━━━━━━━━━━━━━\nPenerima   : ${nama}\nWhatsApp   : ${wa}\nMetode     : ${currentMethod}\n━━━━━━━━━━━━━━━━━━\n*Pesanan:*\n- ${listItems}\n━━━━━━━━━━━━━━━━━━\nSubtotal   : ${rp(subtotal)}\n${diskon > 0 ? `Diskon     : -${rp(diskon)} (${appliedPromo?.label || '-'})\n` : ''}*TOTAL      : ${rp(total)}*\n━━━━━━━━━━━━━━━━━━\nLokasi: Jl. Colombo No. 1, Karangmalang, Sleman, Yogyakarta\nBuka 24 Jam Setiap Hari\n━━━━━━━━━━━━━━━━━━\nTerima kasih. Pesanan Anda sedang kami proses.`;
  window.open(`https://wa.me/${wa.replace(/^0/, '62')}?text=${encodeURIComponent(invoiceWA)}`, '_blank');
  window.open(`mailto:?subject=${encodeURIComponent('Invoice SELA — ' + noInvoice)}&body=${encodeURIComponent(
    `INVOICE SELA\n\nNo: ${noInvoice}\nTanggal: ${waktu}\nNama: ${nama}\nWA: ${wa}\nMetode: ${currentMethod}\n\nItem: ${listItems}\nSubtotal: ${rp(subtotal)}\n${diskon > 0 ? `Diskon: -${rp(diskon)}\n` : ''}TOTAL: ${rp(total)}\n\nJl. Colombo No. 1, Sleman — Buka 24 Jam\n\nTerima kasih!`)}`, '_blank');

  el('payOverlay').classList.remove('show');
  triggerConfetti();
  el('invoiceOverlay').classList.add('show');
  el('invoicePaper').innerHTML = `
    <div class="inv-head">
      <div><div class="inv-logo">SELA</div><small>Ambil jeda, ngopi dulu</small></div>
      <div class="inv-no"><strong>${noInvoice}</strong><small>${waktu}</small></div>
    </div>
    <div class="inv-customer">
      <div><span>Penerima</span><strong>${esc(nama)}</strong></div>
      <div><span>WhatsApp</span><strong>${esc(wa)}</strong></div>
      <div><span>Metode Bayar</span><strong>${esc(currentMethod)}</strong></div>
    </div>
    <table class="inv-table">
      <thead><tr><th>Item</th><th>Qty</th><th>Harga</th></tr></thead>
      <tbody>
        <tr><td>${esc(item?.name || '')}</td><td>x${ordQtyVal}</td><td>${rp(subtotal)}</td></tr>
      </tbody>
    </table>
    <div class="inv-summary">
      <div><span>Subtotal</span><span>${rp(subtotal)}</span></div>
      ${diskon > 0 ? `<div class="inv-discount"><span>Diskon (${appliedPromo.label})</span><span>-${rp(diskon)}</span></div>` : ''}
      <div class="inv-total"><span>TOTAL</span><span>${rp(total)}</span></div>
    </div>
    <div class="inv-sending-notice"><span>Invoice telah dikirim melalui WhatsApp &amp; email Anda</span></div>
    <div class="inv-foot"><small>Terima kasih telah memesan di SELA.</small><small>Jl. Colombo No. 1, Sleman — Buka 24 Jam</small></div>`;

  currentOrderItem = null;
  ordQtyVal = 1;
  appliedPromo = null;
}

function printInvoice() {
  const printContents = el('invoicePaper').innerHTML;
  const win = window.open('', '_blank', 'width=420,height=640');
  win.document.write(`<html><head><title>Invoice SELA</title>
    <style>
      body { font-family: Arial; padding: 24px; color:#241A13; }
      .inv-head { display:flex; justify-content:space-between; margin-bottom:16px; }
      .inv-logo { font-size:22px; font-weight:900; color:#9C6B3F; letter-spacing:3px; }
      .inv-no { text-align:right; }
      .inv-customer div { display:flex; justify-content:space-between; font-size:13px; padding:4px 0; }
      .inv-table { width:100%; border-collapse:collapse; margin:14px 0; font-size:13px; }
      .inv-table th { text-align:left; border-bottom:2px solid #9C6B3F; padding:6px 4px; }
      .inv-table td { border-bottom:1px solid #eee; padding:6px 4px; }
      .inv-summary div { display:flex; justify-content:space-between; padding:3px 0; font-size:13px; }
      .inv-total { border-top:2px solid #9C6B3F; margin-top:8px; padding-top:8px; font-weight:900; font-size:15px; color:#9C6B3F; }
      .inv-foot { margin-top:16px; text-align:center; color:#999; font-size:11px; }
    </style>
  </head><body>${printContents}</body></html>`);
  win.document.close();
  setTimeout(() => win.print(), 300);
}

function sendInvoiceWA() {
  if (!currentInvoice) return;
  const inv = currentInvoice;
  let msg = `*INVOICE SELA*\nNo: ${inv.noInvoice}\nWaktu: ${inv.waktu}\n`;
  msg += `--------------------------------------\n`;
  msg += `Nama : ${inv.nama}\nWA   : ${inv.wa}\nMetode: ${inv.method}\n`;
  msg += `--------------------------------------\n`;
  msg += `Subtotal: ${rp(inv.subtotal)}\n`;
  if (inv.diskon > 0) msg += `Diskon: -${rp(inv.diskon)}\n`;
  msg += `*TOTAL: ${rp(inv.total)}*\n`;
  msg += `\nTerima kasih telah memesan di SELA.`;
  window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
}
function sendInvoiceEmail() {
  if (!currentInvoice) return;
  const inv = currentInvoice;
  const subject = `Invoice SELA — ${inv.noInvoice}`;
  let body = `Invoice SELA\nNo: ${inv.noInvoice}\nWaktu: ${inv.waktu}\n\n`;
  body += `Nama: ${inv.nama}\nWA: ${inv.wa}\nMetode: ${inv.method}\n\n`;
  body += `Subtotal: ${rp(inv.subtotal)}\n`;
  if (inv.diskon > 0) body += `Diskon: -${rp(inv.diskon)}\n`;
  body += `TOTAL: ${rp(inv.total)}\n\n`;
  body += `Terima kasih telah memesan di SELA.`;
  window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
}

function finishOrder() {
  el('invoiceOverlay').classList.remove('show');
  document.body.style.overflow = '';
  if (el('buyerName')) el('buyerName').value = '';
  if (el('buyerWa')) el('buyerWa').value = '';
  if (el('promoInput')) el('promoInput').value = '';
  if (el('promoMsg')) el('promoMsg').textContent = '';
  renderCart();
}

// ===== NAVBAR SCROLL + BACK TO TOP (fully cached, rAF throttled, passive) =====
const _navbar = el('navbar');
const _backTop = el('backTop');
const _heroSlidesWrap = document.querySelector('.hero-slides');
let _scrollTicking = false;
const _pBanners = [...document.querySelectorAll('.p-banner-bg')].map(bg => ({
  el: bg, section: bg.closest('.p-banner'),
}));
function updateParallaxBanners() {
  const vh = window.innerHeight;
  for (const b of _pBanners) {
    const rect = b.section.getBoundingClientRect();
    if (rect.bottom < -100 || rect.top > vh + 100) continue; // off-screen, skip
    const progress = (vh - rect.top) / (vh + rect.height);
    const shift = (progress - 0.5) * 200; // travel 200px total
    b.el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
  }
}
window.addEventListener('scroll', () => {
  if (_scrollTicking) return;
  _scrollTicking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    if (_navbar) _navbar.classList.toggle('scrolled', y > 60);
    if (_backTop) _backTop.classList.toggle('show', y > 500);
    // Parallax — 1 transform write di container, GPU-composited
    if (y < window.innerHeight && _heroSlidesWrap) {
      _heroSlidesWrap.style.transform = `translate3d(0, ${(y * 0.25).toFixed(1)}px, 0)`;
    }
    // Parallax hero + banner kopi
    updateParallaxBanners();
    _scrollTicking = false;
  });
}, { passive: true });
document.getElementById('backTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== HAMBURGER / FULLSCREEN MENU =====
const hamburger = el('hamburger');
const fsMenu = el('fullscreenMenu');
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  fsMenu.classList.toggle('open');
  document.body.style.overflow = fsMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.fs-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    fsMenu?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== SCROLL REVEAL =====
function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
}

// ===== DARK MODE =====
const themeToggle = el('themeToggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('sela-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('sela-theme') === 'dark') document.body.classList.add('dark');

// ===== TRANSLATE (ID/EN) =====
const translations = {
  id: {
    hero_eyebrow: 'Buka 24 jam · Sleman, Yogyakarta',
    hero_t1: 'Setiap hari butuh', hero_t2: 'tempat untuk berhenti sejenak.',
    hero_sub: 'Sebuah ruang hangat di Sleman untuk bekerja, belajar, dan berhenti sejenak dari hiruk-pikuk — dengan kopi yang dibuat dengan sepenuh hati.',
    cta_menu: 'Lihat Menu', cta_lokasi: 'Kunjungi Kami',
    founder_btn: 'Lihat Founder', founder_tag: 'Tentang Kami',
    founder_t1: 'Dibangun oleh', founder_t2: 'foundernya',
    founder_bio: 'SELA lahir dari keresahan sederhana: sulit menemukan tempat menyelesaikan tugas dengan kopi yang terjangkau, WiFi yang andal, dan colokan di mana-mana. Bukan sekadar kedai — SELA adalah ruang yang tenang untuk deadline, percakapan, dan semua hal di antaranya.',
    fm_1: 'Jam Buka', fm_2: 'Menu', fm_3: 'Zona',
    menu_tag: 'Menu', menu_t1: 'Pilih', menu_t2: 'favorit Anda',
    f_semua: 'Semua', f_minuman: 'Minuman', f_makanan: 'Makanan', f_cemilan: 'Cemilan', f_paket: 'Paket',
    ruang_tag: 'Ruangan & Fasilitas', ruang_t1: 'Tiga zona,', ruang_t2: 'satu tempat',
    r1_t: 'Zona Nugas', r1_d: 'Meja panjang, lampu meja individual, suasana hening. Tempat yang tepat untuk menyelesaikan pekerjaan hingga pagi.',
    r2_t: 'Ruang Diskusi', r2_d: 'Dirancang untuk kelompok — dilengkapi papan tulis dan layar untuk presentasi hingga sepuluh orang.',
    r3_t: 'Pojok Mantan', r3_d: 'Sudut paling tenang dengan pencahayaan lembut dan playlist yang menenangkan. Untuk waktu bersama diri sendiri.',
    testi_tag: 'Testimoni', testi_t1: 'Kata', testi_t2: 'mereka',
    t1: '“Semester yang berat ini saya selamat karena SELA. Kopi delapan ribuan, WiFi stabil, deadline tidak lagi terasa menakutkan.”',
    t2: '“Setelah minggu yang berat, saya menulis tiga ribu kata di Pojok Mantan. Hati kembali tenang, skripsi selesai. Sangat direkomendasikan.”',
    t3: '“Sangat cocok untuk pekerja remote. Tempat paling nyaman untuk meeting online — dan kopinya tidak kalah dari kedai lain.”',
    t1_r: 'Mahasiswa Teknik', t2_r: 'Mahasiswa Sastra', t3_r: 'Product Designer',
    lokasi_tag: 'Lokasi & Kontak', lokasi_t1: 'Silakan', lokasi_t2: 'mampir',
    k_wa: 'WhatsApp / Telepon', k_jam: 'Jam Buka', k_jam_v: '24 Jam, Setiap Hari', k_maps: 'Buka di Google Maps',
    order_tag: 'Pesan Sekarang', order_t1: 'Lapar kopi?', order_t3: ' saja.',
    order_sub: 'Pilih menu favorit Anda — pembayaran melalui QRIS, e-wallet, atau langsung di kasir.',
    order_cta: 'Lihat Menu',
    fb_tag: 'Saran & Kritik', fb_t1: 'Bantu kami', fb_t2: 'menjadi lebih baik',
    fb_desc: 'Kami sangat menghargai setiap masukan dari pelanggan. Silakan sampaikan saran, kritik, atau ide kolaborasi Anda langsung kepada kami — setiap masukan sangat berarti bagi pengembangan SELA.',
    fb_btn: 'Kirim Masukan',
    fb1_t: 'Kritik & Saran', fb1_d: 'Masukan Anda membantu kami meningkatkan kualitas layanan secara berkelanjutan.',
    fb2_t: 'Lapor Masalah', fb2_d: 'Menemukan kendala selama berkunjung? Kami akan menanganinya dengan segera.',
    fb3_t: 'Kolaborasi', fb3_d: 'Tertarik berdiskusi atau bekerja sama? Kami terbuka untuk peluang kolaborasi.',
    f_tag: 'Ruang jeda untuk menyelesaikan pekerjaan,\nmelepas lelah, dan menikmati kopi.',
    f_nav: 'Jelajah', f_sos: 'Sosial', f_kontak: 'Kontak',
    cart_t: 'Keranjang', cf_t: 'Data Pemesan', cf_nama: 'Nama',
    ce_t: 'Keranjang masih kosong', ce_s: 'Silakan pilih menu terlebih dahulu', ce_btn: 'Lihat Menu',
    promo_t: 'Kode Promo', promo_btn: 'Pakai',
    cb_total: 'Total', cb_detail: 'Rincian', cb_checkout: 'Checkout',
    h_sub: 'Subtotal', h_disc: 'Diskon', h_total: 'Total Bayar',
    pay_t: 'Metode Pembayaran', pay_total: 'Total Tagihan',
    pay_back: '← Kembali', pay_cd: 'Selesaikan pembayaran dalam',
    pay_confirm: 'Saya Sudah Bayar',
    inv_t: 'Pembayaran Berhasil', inv_s: 'Invoice telah dikirim melalui WhatsApp & email Anda',
    inv_print: 'Unduh', inv_wa: 'WhatsApp', inv_mail: 'Email', inv_done: 'Selesai',
    fsm_tag: 'Kamu menemukan rahasia kami', fsm_name: 'Di Balik SELA',
    fsm_bio: 'SELA lahir dari keresahan sederhana: sulitnya menemukan tempat menyelesaikan tugas dengan kopi terjangkau dan WiFi yang andal. Ruang ini dibangun untukmu yang sedang berjuang.',
    special_tag: 'Spesial Hari Ini', special_btn: 'Ambil',
    p1_quote: '"Kopi terbaik lahir dari biji pilihan, diseduh perlahan — seperti waktu yang layak kamu ambil jeda."',
    p1_sub: 'Diseduh fresh setiap hari · Biji dari petani lokal',
    p2_quote: '"Buka 24 jam. Karena deadline nggak peduli jam berapa."',
    p2_sub: 'Malam sampai subuh, SELA selalu terang',
  },
  en: {
    hero_eyebrow: 'Open 24 hours · Sleman, Yogyakarta',
    hero_t1: 'Every day you need', hero_t2: 'a place to pause.',
    hero_sub: 'A warm space in Sleman for working, studying, and stepping away from the noise — with coffee made with care.',
    cta_menu: 'View Menu', cta_lokasi: 'Visit Us',
    founder_btn: 'Meet the Founder', founder_tag: 'About Us',
    founder_t1: 'Built by the', founder_t2: 'founder',
    founder_bio: 'SELA was born from a simple frustration: it was hard to find a place to work with affordable coffee, reliable WiFi, and outlets everywhere. More than a café — SELA is a calm space for deadlines, conversations, and everything in between.',
    fm_1: 'Hours Open', fm_2: 'Menu Items', fm_3: 'Zones',
    menu_tag: 'Menu', menu_t1: 'Choose your', menu_t2: 'favorite',
    f_semua: 'All', f_minuman: 'Drinks', f_makanan: 'Food', f_cemilan: 'Snacks', f_paket: 'Bundles',
    ruang_tag: 'Spaces & Facilities', ruang_t1: 'Three zones,', ruang_t2: 'one place',
    r1_t: 'Study Zone', r1_d: 'Long tables, individual desk lamps, and a quiet atmosphere. The right place to work through the night.',
    r2_t: 'Discussion Room', r2_d: 'Designed for groups — equipped with a whiteboard and screen for presentations of up to ten people.',
    r3_t: 'Quiet Corner', r3_d: 'The calmest spot with soft lighting and a soothing playlist. For time with yourself.',
    testi_tag: 'Testimonials', testi_t1: 'What', testi_t2: 'they say',
    t1: '“This heavy semester, SELA saved me. Eight-thousand coffee, stable WiFi, deadlines no longer feel scary.”',
    t2: '“After a heavy week, I wrote three thousand words in the Quiet Corner. Heart at peace, thesis done. Highly recommended.”',
    t3: '“Perfect for remote workers. The most comfortable place for online meetings — and the coffee holds its own.”',
    t1_r: 'Engineering Student', t2_r: 'Literature Student', t3_r: 'Product Designer',
    lokasi_tag: 'Location & Contact', lokasi_t1: 'Feel free to', lokasi_t2: 'drop by',
    k_wa: 'WhatsApp / Phone', k_jam: 'Opening Hours', k_jam_v: '24 Hours, Every Day', k_maps: 'Open in Google Maps',
    order_tag: 'Order Now', order_t1: 'Coffee craving?', order_t3: ' then.',
    order_sub: 'Pick your favorites — pay via QRIS, e-wallet, or directly at the counter.',
    order_cta: 'View Menu',
    fb_tag: 'Feedback', fb_t1: 'Help us', fb_t2: 'become better',
    fb_desc: 'We truly value every piece of feedback from our customers. Please share your suggestions, critiques, or collaboration ideas directly with us — every input matters for SELA\'s growth.',
    fb_btn: 'Send Feedback',
    fb1_t: 'Critique & Suggestions', fb1_d: 'Your input helps us continuously improve our service quality.',
    fb2_t: 'Report an Issue', fb2_d: 'Found a problem during your visit? We will handle it promptly.',
    fb3_t: 'Collaboration', fb3_d: 'Interested in discussing or working together? We are open to collaboration.',
    f_tag: 'A space to pause, finish your work,\nunwind, and enjoy coffee.',
    f_nav: 'Explore', f_sos: 'Social', f_kontak: 'Contact',
    cart_t: 'Cart', cf_t: 'Customer Details', cf_nama: 'Name',
    ce_t: 'Your cart is empty', ce_s: 'Please select a menu first', ce_btn: 'View Menu',
    promo_t: 'Promo Code', promo_btn: 'Apply',
    cb_total: 'Total', cb_detail: 'Details', cb_checkout: 'Checkout',
    h_sub: 'Subtotal', h_disc: 'Discount', h_total: 'Total Due',
    pay_t: 'Payment Method', pay_total: 'Total Due',
    pay_back: '← Back', pay_cd: 'Complete your payment within',
    pay_confirm: 'I Have Paid',
    inv_t: 'Payment Successful', inv_s: 'The invoice has been sent via WhatsApp & email',
    inv_print: 'Download', inv_wa: 'WhatsApp', inv_mail: 'Email', inv_done: 'Done',
    fsm_tag: 'You found our secret', fsm_name: 'Behind SELA',
    fsm_bio: 'SELA was born from a simple frustration: difficulty finding a place to work with affordable coffee and reliable WiFi. This space was built for you who are doing your best.',
    special_tag: "Today's Special", special_btn: 'Grab It',
    p1_quote: '"The best coffee is born from chosen beans, brewed slowly — like the time you deserve to pause."',
    p1_sub: 'Freshly brewed daily · Beans from local farmers',
    p2_quote: '"Open 24 hours. Because deadlines do not care what time it is."',
    p2_sub: 'Into the early morning, SELA is always bright',
  }
};

let currentLang = localStorage.getItem('sela-lang') || 'id';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sela-lang', lang);
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18]').forEach(node => {
    const key = node.dataset.i18;
    if (t[key]) node.textContent = t[key];
  });
  const langLabel = el('langLabel');
  if (langLabel) langLabel.textContent = lang === 'id' ? 'ID' : 'EN';
}
document.getElementById('langToggle')?.addEventListener('click', () => applyLanguage(currentLang === 'id' ? 'en' : 'id'));

// ===== FOUNDER SECRET (klik "Tentang Kami" di footer, atau klik logo 5x) =====
function openFounder() {
  el('founderOverlay')?.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeFounder() {
  el('founderOverlay')?.classList.remove('show');
  document.body.style.overflow = '';
}
document.getElementById('aboutLink')?.addEventListener('click', e => {
  e.preventDefault();
  openFounder();
});
let logoClicks = 0;
let logoTimer = null;
document.querySelector('.nav-logo')?.addEventListener('click', e => {
  logoClicks++;
  clearTimeout(logoTimer);
  logoTimer = setTimeout(() => logoClicks = 0, 1600);
  if (logoClicks >= 10) {
    // 10x = admin panel (cara buka di HP, karena Ctrl+Shift+A nggak ada di touchscreen)
    // (modal founder tetap bisa dibuka lewat link "Tentang Kami" di footer)
    logoClicks = 0;
    clearTimeout(logoTimer);
    e.preventDefault();
    openAdmin();
  }
});
document.getElementById('founderOverlay')?.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeFounder();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeFounder(); });

// ===== TOGGLE: TAMPILAN MENU (Kotak ↔ Lebar) — 1 tombol cycle, hemat tempat =====
const gridToggle = el('gridToggle');
const MENU_VIEWS = [
  { key: 'grid', label: 'Kotak', icon: '.icon-grid' },
  { key: 'list', label: 'Lebar', icon: '.icon-list' },
];
let menuViewIdx = localStorage.getItem('sela-menu-view') === 'list' ? 1 : 0;
function applyMenuView() {
  const view = MENU_VIEWS[menuViewIdx];
  document.body.classList.toggle('menu-list', view.key === 'list');
  localStorage.setItem('sela-menu-view', view.key);
  if (gridToggle) gridToggle.title = `Tampilan: ${view.label} (klik untuk ganti)`;
}
if (gridToggle) {
  applyMenuView();
  gridToggle.addEventListener('click', () => {
    menuViewIdx = (menuViewIdx + 1) % MENU_VIEWS.length;
    applyMenuView();
    showToast('info', `Tampilan menu: ${MENU_VIEWS[menuViewIdx].label}`);
  });
}

// ===== TOGGLE: SEMBUNYIKAN HARGA =====
const priceToggle = el('priceToggle');
if (priceToggle) {
  if (localStorage.getItem('sela-hide-prices') === '1') document.body.classList.add('hide-prices');
  priceToggle.addEventListener('click', () => {
    document.body.classList.toggle('hide-prices');
    localStorage.setItem('sela-hide-prices', document.body.classList.contains('hide-prices') ? '1' : '0');
  });
}

// ===== TOGGLE: UKURAN FONT =====
const fontSizes = ['', 'font-large', 'font-xlarge'];
const fontLabels = { '': 'A', 'font-large': 'A+', 'font-xlarge': 'A++' };
const fontToggle = el('fontToggle');
let fontIdx = parseInt(localStorage.getItem('sela-font') || '0');
function applyFont() {
  document.body.classList.remove('font-large', 'font-xlarge');
  if (fontSizes[fontIdx]) document.body.classList.add(fontSizes[fontIdx]);
  if (el('fontLabel')) el('fontLabel').textContent = fontLabels[fontSizes[fontIdx]];
  localStorage.setItem('sela-font', fontIdx);
}
if (fontToggle) {
  applyFont();
  fontToggle.addEventListener('click', () => {
    fontIdx = (fontIdx + 1) % fontSizes.length;
    applyFont();
  });
}

// ===== HERO SLIDESHOW =====
function setupHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 6000);
}

// ===== ADMIN PANEL — no visible trigger, Ctrl+Shift+A to open =====
const ADMIN_PASS = 'SELA2026'; // ganti sesuai kebutuhan
let adminKonamiIdx = 0;
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

document.addEventListener('keydown', e => {
  // --- KONAMI CODE (up up down down left right left right b a)
  if (e.key === KONAMI[adminKonamiIdx]) {
    adminKonamiIdx++;
    if (adminKonamiIdx === KONAMI.length) {
      adminKonamiIdx = 0;
      openAdmin();
    }
  } else if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'A') {
    e.preventDefault();
    openAdmin();
  } else {
    adminKonamiIdx = 0;
  }
});

function openAdmin() {
  el('adminOverlay')?.classList.add('show');
  document.body.style.overflow = 'hidden';
  el('adminLogin').style.display = '';
  el('adminDash').style.display = 'none';
  el('adminPass').value = '';
  el('adminErr').textContent = '';
  el('adminPass').focus();
}

function closeAdmin() {
  el('adminOverlay')?.classList.remove('show');
  document.body.style.overflow = '';
}

function doAdminLogin() {
  const pass = el('adminPass')?.value.trim();
  if (pass === ADMIN_PASS) {
    el('adminLogin').style.display = 'none';
    el('adminDash').style.display = '';
    renderAdminDash();
  } else {
    el('adminErr').textContent = 'Password salah. Coba lagi.';
    el('adminPass').value = '';
    // shake animation
    el('adminPass').animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' },
      { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' },
      { transform: 'translateX(0)' }
    ], { duration: 350 });
  }
}

document.getElementById('adminLoginBtn')?.addEventListener('click', doAdminLogin);
document.getElementById('adminPass')?.addEventListener('keydown', e => { if (e.key === 'Enter') doAdminLogin(); });
document.getElementById('adminOverlay')?.addEventListener('click', e => { if (e.target === e.currentTarget) closeAdmin(); });

el('adminClearBtn')?.addEventListener('click', () => {
  if (confirm('Hapus semua data log? Tindakan ini tidak bisa diundo.')) {
    localStorage.removeItem('sela_visits');
    localStorage.removeItem('sela_orders');
    renderAdminDash();
  }
});

function renderAdminDash() {
  const visits = JSON.parse(localStorage.getItem('sela_visits') || '[]');
  const orders = JSON.parse(localStorage.getItem('sela_orders') || '[]');
  const unique = new Set(visits.map(v => v.ua)).size;
  const revenue = orders.reduce((s, o) => s + o.total, 0);

  el('statVisits').textContent = visits.length;
  el('statUnique').textContent = unique;
  el('statOrders').textContent = orders.length;
  el('statRevenue').textContent = `Rp ${revenue.toLocaleString('id-ID')}`;

  // Visit log
  const vList = el('visitList');
  if (!vList) return;
  if (!visits.length) {
    vList.innerHTML = '<div class="admin-empty">Belum ada kunjungan tercatat.</div>';
  } else {
    vList.innerHTML = visits.slice(-20).reverse().map(v => `
      <div class="admin-row">
        <div>
          <div class="ar-main">${v.page || 'Halaman Utama'}</div>
          <div class="ar-sub">${v.time} · ${v.ua}</div>
        </div>
        <div class="ar-right">${v.lang}</div>
      </div>`).join('');
  }

  // Order log
  const oList = el('orderList');
  if (!oList) return;
  if (!orders.length) {
    oList.innerHTML = '<div class="admin-empty">Belum ada pesanan tercatat.</div>';
  } else {
    oList.innerHTML = orders.slice(-15).reverse().map(o => `
      <div class="admin-row">
        <div>
          <div class="ar-main">${o.nama}</div>
          <div class="ar-sub">${o.time} · ${o.method}</div>
        </div>
        <div class="ar-right">${rp(o.total)}</div>
      </div>`).join('');
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderPayMethods();
  setupReveal();
  setupHeroSlideshow();
  if (currentLang !== 'id') applyLanguage(currentLang);

  // ===== LIVE STATUS (jam buka + indicator ramai) =====
  (function liveStatus() {
    function update() {
      const dot = el('statusDot');
      const text = el('statusText');
      if (!dot || !text) return;
      const now = new Date();
      const hour = now.getHours();
      const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
      const day = days[now.getDay()];
      const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
      const dotEl = document.getElementById('statusDot');
      dotEl.className = 'status-dot';

      let busy = '';
      if ((hour >= 7 && hour <= 9) || (hour >= 12 && hour <= 14) || (hour >= 18 && hour <= 21)) {
        dotEl.classList.add('busy');
        busy = ` · <b>Sedang ramai</b>`;
      }
      text.innerHTML = `${day}, ${time} WIB${busy}`;
    }
    update();
    setInterval(update, 30000);
  })();

  // ===== TOAST NOTIFICATION =====
  window.showToast = function(type = 'info', msg) {
    const container = el('toastContainer');
    if (!container) return;
    const icons = { success: '✓', promo: '★', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<div class="toast-icon">${icons[type] || 'ℹ'}</div><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('toast-leaving'); setTimeout(() => toast.remove(), 420); }, 3100);
  };

  // ===== CONFETTI BURST (optimized: batched, cached dims, fewer particles) =====
  window.triggerConfetti = function() {
    const canvas = el('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const colors = ['#9C6B3F','#C99B6A','#B99B7C','#F3EBDF','#4E7A54','#2A1E17'];
    const pieces = Array.from({ length: 65 }, () => ({
      x: Math.random() * W, y: -10 - Math.random() * H * 0.25,
      w: 5 + Math.random() * 7, h: 3 + Math.random() * 4,
      color: colors[Math.random() * colors.length | 0],
      vx: (Math.random() - 0.5) * 6, vy: 3 + Math.random() * 3.5,
      angle: Math.random() * 360, spin: (Math.random() - 0.5) * 8,
      g: 0.22 + Math.random() * 0.1, life: 1,
    }));
    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of pieces) {
        p.vy += p.g; p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        p.life -= 0.016;
        if (p.life <= 0) continue;
        ctx.save(); ctx.globalAlpha = Math.max(0, p.life);
        ctx.translate(p.x, p.y); ctx.rotate(p.angle * 0.01745);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w >> 1, -p.h >> 1, p.w, p.h);
        ctx.restore();
      }
      if (++frame < 105) { requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H); canvas.style.display = 'none';
    }
    canvas.style.display = ''; draw();
  };

  // ===== TRACKING PENGUNJUNG =====
  (function trackVisit() {
    try {
      const visits = JSON.parse(localStorage.getItem('sela_visits') || '[]');
      visits.push({
        time: new Date().toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }),
        page: location.pathname,
        lang: currentLang,
        ua: navigator.userAgent.split(' ').slice(-2).join(' ').substring(0, 40),
      });
      localStorage.setItem('sela_visits', JSON.stringify(visits.slice(-200)));
    } catch(e) {}
  })();

  // ===== TODAY'S SPECIAL ROTATING MENU =====
  (function setupSpecial() {
    const specials = menuItems.filter(m => ['Best Seller','Signature','Hero','Trending','Limited','Khas SELA'].includes(m.tag));
    if (!specials.length) return;
    let idx = Math.floor(Math.random() * specials.length);
    function setSpecial() {
      const m = specials[idx % specials.length];
      const nameEl = el('specialName');
      const priceEl = el('specialPrice');
      const btn = el('specialBtn');
      if (nameEl) nameEl.textContent = m.name;
      if (priceEl) priceEl.textContent = rp(m.price);
      if (btn) btn.onclick = () => addToCart(m.id);
    }
    setSpecial();
    setInterval(() => { idx = (idx + 1) % specials.length; setSpecial(); }, 8000);
  })();

  // ===== MOBILE ORDER BAR =====
  (function setupMobileBar() {
    const bar = el('mobileOrderBar');
    const btn = el('mobOrderBtn');
    if (!bar || !btn) return;
    // tampilkan saat scroll > 200px
    function toggleBar() {
      bar.classList.toggle('show', window.scrollY > 200);
    }
    toggleBar();
    window.addEventListener('scroll', toggleBar, { passive: true });
    btn.addEventListener('click', () => { document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' }); });
  })();

  // ===== SCROLL INTO MENU AFTER FILTER CLICK =====
  document.getElementById('menu')?.addEventListener('click', e => {
    if (e.target.closest('.mcat')) {
      setTimeout(() => document.getElementById('menuGrid')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
  });
});
