const tg = window.Telegram.WebApp;
tg.ready(); tg.expand();
const phones = [
    {id:1,fullName:"Samsung Galaxy A17",variant:"4Gb/128Gb чёрный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/ie_en/smartphones/galaxy-a/galaxy-a17-5g-black-128gb-sm-a176bzkaeub?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/ie_en/smartphones/galaxy-a/galaxy-a17-5g-black-128gb-sm-a176bzkaeub/gallery/ie-en-galaxy-a17-5g-sm-a176-sm-a176bzkaeub-549435873?$L174_FB_EC_GMP_L14$",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:2,fullName:"Samsung Galaxy A17",variant:"8Gb/256Gb чёрный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/ie_en/smartphones/galaxy-a/galaxy-a17-5g-black-128gb-sm-a176bzkaeub?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/ie_en/smartphones/galaxy-a/galaxy-a17-5g-black-128gb-sm-a176bzkaeub/gallery/ie-en-galaxy-a17-5g-sm-a176-sm-a176bzkaeub-549435873?$L174_FB_EC_GMP_L14$",oldPrice:20999,newPrice:19999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:3,fullName:"Samsung Galaxy A26",variant:"6Gb/128Gb синий EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/us_en/smartphones/galaxy-a/galaxy-a26-5g-black-128gb-sm-a266uzkaxaa?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/ie_en/smartphones/galaxy-a/galaxy-a26-5g-black-256gb-sm-a266bzkceub/gallery/ie-en-galaxy-a26-5g-sm-a266-sm-a266bzkceub-545435764?$L174_FB_EC_GMP_L14$",oldPrice:22999,newPrice:21999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:4,fullName:"Samsung Galaxy A26",variant:"8Gb/256Gb чёрный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/us_en/smartphones/galaxy-a/galaxy-a26-5g-black-128gb-sm-a266uzkaxaa?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/ie_en/smartphones/galaxy-a/galaxy-a26-5g-black-256gb-sm-a266bzkceub/gallery/ie-en-galaxy-a26-5g-sm-a266-sm-a266bzkceub-545435764?$L174_FB_EC_GMP_L14$",oldPrice:25999,newPrice:24999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:5,fullName:"Samsung Galaxy A36",variant:"8Gb/128Gb белый EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/uk_en/smartphones/galaxy-a/galaxy-a36-5g-awesome-lavender-256gb-sm-a366blvgeub?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/us_en/smartphones/galaxy-a/galaxy-a36-5g-awesome-lavender-128gb-sm-a366uzlavxaa?$L174_FB_EC_GMP_L14$",oldPrice:28999,newPrice:27499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    {id:6,fullName:"Samsung Galaxy A36",variant:"8Gb/256Gb чёрный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/uk_en/smartphones/galaxy-a/galaxy-a36-5g-awesome-lavender-256gb-sm-a366blvgeub?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/us_en/smartphones/galaxy-a/galaxy-a36-5g-awesome-black-128gb-sm-a366uzkbxaaa?$L174_FB_EC_GMP_L14$",oldPrice:32999,newPrice:31499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    {id:7,fullName:"Samsung Galaxy A56",variant:"8Gb/128Gb зелёный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/us_en/smartphones/galaxy-a/galaxy-a56-5g-awesome-graphite-128gb-sm-a566uzkgxaa?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/levant_en/smartphones/galaxy-a/galaxy-a56-5g-awesome-graphite-128gb-sm-a566bzkvmea/gallery/levant-en-galaxy-a56-5g-sm-a566-sm-a566bzkvmea-549435873?$L174_FB_EC_GMP_L14$",oldPrice:35999,newPrice:34499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:8,fullName:"Samsung Galaxy A56",variant:"8Gb/256Gb чёрный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/us_en/smartphones/galaxy-a/galaxy-a56-5g-awesome-graphite-128gb-sm-a566uzkgxaa?$L174_FB_EC_GMP_L14$",img2:"https://images.samsung.com/is/image/samsung/p6pim/levant_en/smartphones/galaxy-a/galaxy-a56-5g-awesome-graphite-128gb-sm-a566bzkvmea/gallery/levant-en-galaxy-a56-5g-sm-a566-sm-a566bzkvmea-549435873?$L174_FB_EC_GMP_L14$",oldPrice:39999,newPrice:35499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:9,fullName:"Honor X6C",variant:"6Gb/128Gb чёрный EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x6c/honor-x6c-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x6c/honor-x6c-gallery-2.png",oldPrice:9999,newPrice:9499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:10,fullName:"Honor X6C",variant:"6Gb/256Gb синий EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x6c/honor-x6c-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x6c/honor-x6c-gallery-2.png",oldPrice:11999,newPrice:11499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:11,fullName:"Honor X7C",variant:"6Gb/128Gb белый EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x7c/honor-x7c-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x7c/honor-x7c-gallery-2.png",oldPrice:13999,newPrice:12499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:12,fullName:"Honor X7C",variant:"8Gb/256Gb чёрный EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x7c/honor-x7c-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x7c/honor-x7c-gallery-2.png",oldPrice:16999,newPrice:15499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:13,fullName:"Honor X8C",variant:"8Gb/128Gb серебристый EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x8c/honor-x8c-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x8c/honor-x8c-gallery-2.png",oldPrice:17999,newPrice:16499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:14,fullName:"Honor X8C",variant:"8Gb/256Gb чёрный EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x8c/honor-x8c-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x8c/honor-x8c-gallery-2.png",oldPrice:19999,newPrice:18499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:15,fullName:"Honor X9C",variant:"8Gb/256Gb золотой EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x9c/honor-x9c-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-x9c/honor-x9c-gallery-2.png",oldPrice:24999,newPrice:23999,specs:["6.78\" OLED 120Hz","Snapdragon 8 Gen 2","200MP","5000 mAh"],brand:"Honor"},
    {id:16,fullName:"Honor 400 Lite",variant:"8Gb/256Gb чёрный EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-400-lite/honor-400-lite-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-400-lite/honor-400-lite-gallery-2.png",oldPrice:24999,newPrice:21499,specs:["6.7\" AMOLED","Dimensity 6020","108MP","5000 mAh"],brand:"Honor"},
    {id:17,fullName:"Honor 400",variant:"8Gb/256Gb белый EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-400/honor-400-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-400/honor-400-gallery-2.png",oldPrice:36999,newPrice:33999,specs:["6.78\" OLED","Snapdragon 8 Gen 3","50MP","5300 mAh"],brand:"Honor"},
    {id:18,fullName:"Honor 400 Pro",variant:"12Gb/256Gb чёрный EAC",img:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-400-pro/honor-400-pro-gallery-1.png",img2:"https://www.honor.com/global/content/dam/honorwww/global/product-image/smartphones/honor-400-pro/honor-400-pro-gallery-2.png",oldPrice:56999,newPrice:51999,specs:["6.8\" OLED 120Hz","Snapdragon 8 Gen 3","200MP","5500 mAh"],brand:"Honor"},
    {id:19,fullName:"Huawei nova Y63",variant:"4Gb/128Gb чёрный EAC",img:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-y63/nova-y63-1.png",img2:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-y63/nova-y63-2.png",oldPrice:9999,newPrice:8499,specs:["6.52\" IPS","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:20,fullName:"Huawei nova Y73",variant:"8Gb/256Gb синий EAC",img:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-y73/nova-y73-1.png",img2:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-y73/nova-y73-2.png",oldPrice:14999,newPrice:13499,specs:["6.75\" IPS 90Hz","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:21,fullName:"Huawei nova 14",variant:"12Gb/256Gb розовый EAC",img:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-14/nova-14-1.png",img2:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-14/nova-14-2.png",oldPrice:33999,newPrice:21999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:22,fullName:"Huawei nova 14",variant:"12Gb/512Gb чёрный EAC",img:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-14/nova-14-1.png",img2:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-14/nova-14-2.png",oldPrice:36999,newPrice:33999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:23,fullName:"Huawei nova 14 Pro",variant:"12Gb/512Gb чёрный EAC",img:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-14-pro/nova-14-pro-1.png",img2:"https://consumer.huawei.com/content/dam/huawei-img/content/dam/huawei/imgsource/global/phone/nova-14-pro/nova-14-pro-2.png",oldPrice:46999,newPrice:44999,specs:["6.78\" OLED 120Hz","Kirin 9000","50MP переменная","4500 mAh"],brand:"Huawei"}
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
