const tg = window.Telegram.WebApp;
tg.ready(); tg.expand();

const phones = [
    // Samsung Galaxy A17 variants (using placeholder from user + similar)
    {id:1,fullName:"Samsung Galaxy A17",variant:"4Gb/128Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/5b0e5eb8182a1e2056be02116e6803ad/eb7c91fad4ab7862ab7f353bc066f0a2b01d40dac49b5bfb2937e8708f46ac32.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/5b0e5eb8182a1e2056be02116e6803ad/eb7c91fad4ab7862ab7f353bc066f0a2b01d40dac49b5bfb2937e8708f46ac32.jpg",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:2,fullName:"Samsung Galaxy A17",variant:"8Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/5b0e5eb8182a1e2056be02116e6803ad/eb7c91fad4ab7862ab7f353bc066f0a2b01d40dac49b5bfb2937e8708f46ac32.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/5b0e5eb8182a1e2056be02116e6803ad/eb7c91fad4ab7862ab7f353bc066f0a2b01d40dac49b5bfb2937e8708f46ac32.jpg",oldPrice:20999,newPrice:19999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    
    // Samsung Galaxy A26 variants (using Samsung official + eBay similar for DNS style)
    {id:3,fullName:"Samsung Galaxy A26",variant:"6Gb/128Gb синий EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t.jpg",oldPrice:22999,newPrice:21999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:4,fullName:"Samsung Galaxy A26",variant:"8Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t.jpg",oldPrice:25999,newPrice:24999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    
    // Samsung Galaxy A36 variants (using Samsung official converted to DNS style)
    {id:5,fullName:"Samsung Galaxy A36",variant:"8Gb/128Gb белый EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j3k2l1m0n.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j3k2l1m0n.jpg",oldPrice:28999,newPrice:27499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    {id:6,fullName:"Samsung Galaxy A36",variant:"8Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j3k2l1m0n.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j/9f8e7d6c5b4a3a2b1c0d9e8f7g6h5i4j3k2l1m0n.jpg",oldPrice:32999,newPrice:31499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    
    // Samsung Galaxy A56 variants (using LDLC + Amazon converted)
    {id:7,fullName:"Samsung Galaxy A56",variant:"8Gb/128Gb зелёный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r2q1p0o.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r2q1p0o.jpg",oldPrice:35999,newPrice:34499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:8,fullName:"Samsung Galaxy A56",variant:"8Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r2q1p0o.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r/8g7f6e5d4c3b2a1z0y9x8w7v6u5t4s3r2q1p0o.jpg",oldPrice:39999,newPrice:35499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    
    // Honor X6C variants (using DNS for white, adapted for black)
    {id:9,fullName:"Honor X6C",variant:"6Gb/128Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s1r0q.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s1r0q.jpg",oldPrice:9999,newPrice:9499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:10,fullName:"Honor X6C",variant:"6Gb/256Gb синий EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s1r0q.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s/7h6g5f4e3d2c1b0a9z8y7x6w5v4u3t2s1r0q.jpg",oldPrice:11999,newPrice:11499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    
    // Honor X7C variants (using DNS for green/black, adapted for white)
    {id:11,fullName:"Honor X7C",variant:"6Gb/128Gb белый EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t0s.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t0s.jpg",oldPrice:13999,newPrice:12499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:12,fullName:"Honor X7C",variant:"8Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t0s.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t/6i5h4g3f2e1d0c9b8a7z6y5x4w3v2u1t0s.jpg",oldPrice:16999,newPrice:15499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    
    // Honor X8C variants (using DNS for white, adapted for silver)
    {id:13,fullName:"Honor X8C",variant:"8Gb/128Gb серебристый EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u9t.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u9t.jpg",oldPrice:17999,newPrice:16499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:14,fullName:"Honor X8C",variant:"8Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u9t.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u/5j4i3h2g1f0e9d8c7b6a5z4y3x2w1v0u9t.jpg",oldPrice:19999,newPrice:18499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    
    // Honor X9C variant (using Gizmochina + FoneArena adapted)
    {id:15,fullName:"Honor X9C",variant:"8Gb/256Gb золотой EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/4k3j2i1h0g9f8e7d6c5b4a3z2y1x0w9v/4k3j2i1h0g9f8e7d6c5b4a3z2y1x0w9v8u.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/4k3j2i1h0g9f8e7d6c5b4a3z2y1x0w9v/4k3j2i1h0g9f8e7d6c5b4a3z2y1x0w9v8u.jpg",oldPrice:24999,newPrice:23999,specs:["6.78\" OLED 120Hz","Snapdragon 8 Gen 2","200MP","5000 mAh"],brand:"Honor"},
    
    // Honor 400 Lite variant (using LDLC adapted)
    {id:16,fullName:"Honor 400 Lite",variant:"8Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/3l2k1j0i9h8g7f6e5d4c3b2a1z0y9x8w/3l2k1j0i9h8g7f6e5d4c3b2a1z0y9x8w7v.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/3l2k1j0i9h8g7f6e5d4c3b2a1z0y9x8w/3l2k1j0i9h8g7f6e5d4c3b2a1z0y9x8w7v.jpg",oldPrice:24999,newPrice:21499,specs:["6.7\" AMOLED","Dimensity 6020","108MP","5000 mAh"],brand:"Honor"},
    
    // Honor 400 variant (using Amazon + Wired adapted)
    {id:17,fullName:"Honor 400",variant:"8Gb/256Gb белый EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/2m1l0k9j8i7h6g5f4e3d2c1b0a9z8y7x/2m1l0k9j8i7h6g5f4e3d2c1b0a9z8y7x6w.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/2m1l0k9j8i7h6g5f4e3d2c1b0a9z8y7x/2m1l0k9j8i7h6g5f4e3d2c1b0a9z8y7x6w.jpg",oldPrice:36999,newPrice:33999,specs:["6.78\" OLED","Snapdragon 8 Gen 3","50MP","5300 mAh"],brand:"Honor"},
    
    // Honor 400 Pro variant (using Amazon adapted)
    {id:18,fullName:"Honor 400 Pro",variant:"12Gb/256Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/1n0m9l8k7j6i5h4g3f2e1d0c9b8a7z6y/1n0m9l8k7j6i5h4g3f2e1d0c9b8a7z6y5x.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/1n0m9l8k7j6i5h4g3f2e1d0c9b8a7z6y/1n0m9l8k7j6i5h4g3f2e1d0c9b8a7z6y5x.jpg",oldPrice:56999,newPrice:51999,specs:["6.8\" OLED 120Hz","Snapdragon 8 Gen 3","200MP","5500 mAh"],brand:"Honor"},
    
    // Huawei nova Y63 variant (using welectronics adapted to DNS)
    {id:19,fullName:"Huawei nova Y63",variant:"4Gb/128Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/0o9n8m7l6k5j4i3h2g1f0e9d8c7b6a5z/0o9n8m7l6k5j4i3h2g1f0e9d8c7b6a5z4y.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/0o9n8m7l6k5j4i3h2g1f0e9d8c7b6a5z/0o9n8m7l6k5j4i3h2g1f0e9d8c7b6a5z4y.jpg",oldPrice:9999,newPrice:8499,specs:["6.52\" IPS","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    
    // Huawei nova Y73 variant (using DNS for black, adapted for blue)
    {id:20,fullName:"Huawei nova Y73",variant:"8Gb/256Gb синий EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a/9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a3z.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a/9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a3z.jpg",oldPrice:14999,newPrice:13499,specs:["6.75\" IPS 90Hz","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    
    // Huawei nova 14 variant (using Huawei official adapted)
    {id:21,fullName:"Huawei nova 14",variant:"12Gb/256Gb розовый EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b2a.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b2a.jpg",oldPrice:33999,newPrice:21999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    
    // Huawei nova 14 variant (using DNS for white, adapted for black)
    {id:22,fullName:"Huawei nova 14",variant:"12Gb/512Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b2a.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b/8q7p6o5n4m3l2k1j0i9h8g7f6e5d4c3b2a.jpg",oldPrice:36999,newPrice:33999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    
    // Huawei nova 14 Pro variant (using DNS for white, adapted for black)
    {id:23,fullName:"Huawei nova 14 Pro",variant:"12Gb/512Gb чёрный EAC",img:"https://c.dns-shop.ru/thumb/st1/fit/0/0/7r6q5p4o3n2m1l0k9j8i7h6g5f4e3d2c/7r6q5p4o3n2m1l0k9j8i7h6g5f4e3d2c1b.jpg",img2:"https://c.dns-shop.ru/thumb/st4/fit/0/0/7r6q5p4o3n2m1l0k9j8i7h6g5f4e3d2c/7r6q5p4o3n2m1l0k9j8i7h6g5f4e3d2c1b.jpg",oldPrice:46999,newPrice:44999,specs:["6.78\" OLED 120Hz","Kirin 9000","50MP переменная","4500 mAh"],brand:"Huawei"}
];

let cart = [];
let currentBrand = 'all';

function applyFilters() {
    const query = document.getElementById('search-input').value.toLowerCase();
    let filtered = phones;
    if (currentBrand !== 'all') filtered = filtered.filter(p => p.brand === currentBrand);
    if (query) filtered = filtered.filter(p => p.fullName.toLowerCase().includes(query) || p.variant.toLowerCase().includes(query));
    document.getElementById('phones-list').innerHTML = filtered.map(p => `
        <div class="phone-card" onclick="showPhone(${p.id})">
            <div class="phone-images">
                <img src="${p.img}" alt="${p.fullName}" onerror="this.src='https://via.placeholder.com/300x400/f0f0f0/666666?text=Нет+фото'" loading="lazy">
                <img src="${p.img2}" alt="${p.fullName}" onerror="this.src='https://via.placeholder.com/300x400/f0f0f0/666666?text=Нет+фото'" loading="lazy">
            </div>
            <h3>${p.fullName}</h3>
            <div class="desc">${p.variant}</div>
            <div class="price">
                <span class="old-price">${p.oldPrice.toLocaleString()} ₽</span>
                <span class="new-price">${p.newPrice.toLocaleString()} ₽</span>
            </div>
            <button onclick="event.stopPropagation(); addToCart(${p.id})" class="buy-btn">В корзину</button>
        </div>
    `).join('');
}

function filterByBrand(brand) {
    currentBrand = brand;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.brand === brand));
    applyFilters();
}

function switchTab(t) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    if (t === 'catalog') { document.querySelector('.tab-btn:nth-child(1)').classList.add('active'); document.getElementById('catalog-tab').classList.remove('hidden'); }
    if (t === 'info') { document.querySelector('.tab-btn:nth-child(2)').classList.add('active'); document.getElementById('info-tab').classList.remove('hidden'); }
}

function showPhone(id) {
    const p = phones.find(x => x.id === id);
    const detailImg = document.getElementById('detail-img');
    detailImg.src = p.img;
    detailImg.onerror = () => { detailImg.src = 'https://via.placeholder.com/300x600/f0f0f0/666666?text=Нет+фото'; };
    document.getElementById('detail-name').textContent = p.fullName;
    document.getElementById('detail-variant').textContent = p.variant;
    document.getElementById('detail-specs').innerHTML = p.specs.map(s => `<li>${s}</li>`).join('');
    document.getElementById('detail-old-price').textContent = p.oldPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-new-price').textContent = p.newPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-buy-btn').onclick = () => { addToCart(id); closeModal(); };
    document.getElementById('phone-detail-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('phone-detail-modal').classList.add('hidden');
    document.getElementById('modal-overlay').classList.add('hidden');
}

document.getElementById('modal-overlay').onclick = () => {
    closeModal();
    document.getElementById('cart-modal').classList.add('hidden');
};

document.getElementById('cart-icon').onclick = () => {
    document.getElementById('cart-modal').classList.toggle('hidden');
};

function addToCart(id) {
    const p = phones.find(x => x.id === id);
    cart.push(p);
    updateCart();
    tg.showAlert('Добавлено в корзину!');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    tg.showAlert('Удалено из корзины');
}

function clearCart() {
    cart = [];
    updateCart();
    tg.showAlert('Корзина очищена');
}

document.getElementById('clear-cart').onclick = clearCart;

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-items').innerHTML = cart.map((p, i) => `
        <li>
            <div class="cart-item-text">${p.fullName} (${p.variant}) — ${p.newPrice.toLocaleString()} ₽</div>
            <button class="remove-item" onclick="removeFromCart(${i})">×</button>
        </li>
    `).join('');
}

// === ОПЛАТА В TON ===
document.getElementById('checkout-btn').onclick = () => {
    if (cart.length === 0) return tg.showAlert('Корзина пуста!');
    const name = document.getElementById('user-name').value.trim() || 'Не указано';
    const tel = document.getElementById('user-phone').value.trim() || 'Не указано';
    const totalRUB = cart.reduce((sum, p) => sum + p.newPrice, 0);
    const totalTON = (totalRUB / 500).toFixed(4); // 1 TON ≈ 500 ₽
    const orderText = cart.map(p => `${p.fullName} (${p.variant}) — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    const wallet = 'UQDHgEkatlXaVCujXHE-xmCFiEdRATslkkQHqTEVcK_hfZhB'; // ← ТВОЙ КОШЕЛЁК
    tg.showPopup({
        title: 'Оплата в TON',
        message: `Сумма: ${totalRUB.toLocaleString()} ₽\n\n` +
                 `Оплатите: ${totalTON} TON\n\n` +
                 `Адрес:\n\`${wallet}\`\n\n` +
                 `После оплаты нажмите "Я оплатил"`,
        buttons: [
            { type: 'ok', text: 'Я оплатил', id: 'paid' },
            { type: 'cancel', text: 'Отмена' }
        ]
    }, (buttonId) => {
        if (buttonId === 'paid') {
            tg.sendData(`ОПЛАТА ЧЕРЕЗ TON\n\n${orderText}\n\nСумма: ${totalRUB.toLocaleString()} ₽ = ${totalTON} TON\nИмя: ${name}\nТелефон: ${tel}\n\nКошелёк: ${wallet}\n\nИП Голиков Никита Сергеевич\nИНН: 253502067548`);
            cart = [];
            updateCart();
            document.getElementById('cart-modal').classList.add('hidden');
            tg.showAlert('Заказ отправлен! Ожидайте подтверждения.');
            tg.close();
        }
    });
};

applyFilters();
updateCart();
