const tg = window.Telegram.WebApp;
tg.ready(); tg.expand();

const phones = [
    {id:1,fullName:"Samsung Galaxy A17",variant:"4Gb/128Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:2,fullName:"Samsung Galaxy A17",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg",oldPrice:20999,newPrice:19999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:3,fullName:"Samsung Galaxy A26",variant:"6Gb/128Gb синий EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-2.jpg",oldPrice:22999,newPrice:21999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:4,fullName:"Samsung Galaxy A26",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-2.jpg",oldPrice:25999,newPrice:24999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:5,fullName:"Samsung Galaxy A36",variant:"8Gb/128Gb белый EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-2.jpg",oldPrice:28999,newPrice:27499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    {id:6,fullName:"Samsung Galaxy A36",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-2.jpg",oldPrice:32999,newPrice:31499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    {id:7,fullName:"Samsung Galaxy A56",variant:"8Gb/128Gb зелёный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg",oldPrice:35999,newPrice:34499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:8,fullName:"Samsung Galaxy A56",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg",oldPrice:39999,newPrice:35499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:9,fullName:"Honor X6C",variant:"6Gb/128Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-2.jpg",oldPrice:9999,newPrice:9499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:10,fullName:"Honor X6C",variant:"6Gb/256Gb синий EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-2.jpg",oldPrice:11999,newPrice:11499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:11,fullName:"Honor X7C",variant:"6Gb/128Gb белый EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-2.jpg",oldPrice:13999,newPrice:12499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:12,fullName:"Honor X7C",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-2.jpg",oldPrice:16999,newPrice:15499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:13,fullName:"Honor X8C",variant:"8Gb/128Gb серебристый EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-2.jpg",oldPrice:17999,newPrice:16499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:14,fullName:"Honor X8C",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-2.jpg",oldPrice:19999,newPrice:18499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:15,fullName:"Honor X9C",variant:"8Gb/256Gb золотой EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-2.jpg",oldPrice:24999,newPrice:23999,specs:["6.78\" OLED 120Hz","Snapdragon 8 Gen 2","200MP","5000 mAh"],brand:"Honor"},
    {id:16,fullName:"Honor 400 Lite",variant:"8Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-2.jpg",oldPrice:24999,newPrice:21499,specs:["6.7\" AMOLED","Dimensity 6020","108MP","5000 mAh"],brand:"Honor"},
    {id:17,fullName:"Honor 400",variant:"8Gb/256Gb белый EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-2.jpg",oldPrice:36999,newPrice:33999,specs:["6.78\" OLED","Snapdragon 8 Gen 3","50MP","5300 mAh"],brand:"Honor"},
    {id:18,fullName:"Honor 400 Pro",variant:"12Gb/256Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-2.jpg",oldPrice:56999,newPrice:51999,specs:["6.8\" OLED 120Hz","Snapdragon 8 Gen 3","200MP","5500 mAh"],brand:"Honor"},
    {id:19,fullName:"Huawei nova Y63",variant:"4Gb/128Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-2.jpg",oldPrice:9999,newPrice:8499,specs:["6.52\" IPS","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:20,fullName:"Huawei nova Y73",variant:"8Gb/256Gb синий EAC",img:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-2.jpg",oldPrice:14999,newPrice:13499,specs:["6.75\" IPS 90Hz","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:21,fullName:"Huawei nova 14",variant:"12Gb/256Gb розовый EAC",img:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-2.jpg",oldPrice:33999,newPrice:21999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:22,fullName:"Huawei nova 14",variant:"12Gb/512Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-2.jpg",oldPrice:36999,newPrice:33999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:23,fullName:"Huawei nova 14 Pro",variant:"12Gb/512Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-2.jpg",oldPrice:46999,newPrice:44999,specs:["6.78\" OLED 120Hz","Kirin 9000","50MP переменная","4500 mAh"],brand:"Huawei"}
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

document.getElementById('checkout-btn').onclick = () => {
    if (cart.length === 0) return tg.showAlert('Корзина пуста!');
    const name = document.getElementById('user-name').value.trim() || 'не указано';
    const tel = document.getElementById('user-phone').value.trim() || 'не указано';
    const order = cart.map(p => `${p.fullName} (${p.variant}) — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    tg.sendData(`Новый заказ:\n${order}\n\nИмя: ${name}\nТелефон: ${tel}\n\nИП Голиков Никита Сергеевич\nИНН: 253502067548`);
    cart = [];
    updateCart();
    document.getElementById('cart-modal').classList.add('hidden');
    tg.close();
};

applyFilters();
updateCart();
