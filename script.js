const tg = window.Telegram.WebApp;
tg.ready(); tg.expand();

const phones = [
    {id:1,fullName:"Samsung Galaxy A17",variant:"4Gb/128Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:2,fullName:"Samsung Galaxy A56",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg",oldPrice:39999,newPrice:35499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:3,fullName:"Honor 400 Pro",variant:"12Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-2.jpg",oldPrice:56999,newPrice:51999,specs:["6.8\" OLED 120Hz","Snapdragon 8 Gen 3","200MP","5500 mAh"],brand:"Honor"},
    {id:4,fullName:"Huawei nova 14 Pro",variant:"12Gb/512Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-2.jpg",oldPrice:46999,newPrice:44999,specs:["6.78\" OLED 120Hz","Kirin 9000","50MP переменная","4500 mAh"],brand:"Huawei"}
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
                <img src="${p.img}" alt="${p.fullName}">
                <img src="${p.img2}" alt="${p.fullName}">
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
    document.getElementById('detail-img').src = p.img;
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

// === ОПЛАТА В TON НА ТВОЙ КОШЕЛЁК ===
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
