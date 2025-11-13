const tg = window.Telegram.WebApp;
tg.ready(); tg.expand();
const phones = [
    {id:1,fullName:"Samsung Galaxy A17",variant:"4Gb/128Gb чёрный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/latin_en/feature/166545971/latin_en-feature-sleek-and-stylish-549000609?$FB_TYPE_A_MO_JPG$",img2:"https://images.samsung.com/is/image/samsung/p6pim/ph/sm-a175fzknphl/gallery/ph-galaxy-a17-sm-a175-sm-a175fzknphl-549435873?$624_468_PNG$",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:2,fullName:"Samsung Galaxy A17",variant:"8Gb/256Gb чёрный EAC",img:"https://i.ebayimg.com/images/g/~IkAAeSw9Z5ouAix/s-l1200.jpg",img2:"https://i.ebayimg.com/images/g/ecQAAeSwy6xorhti/s-l1200.jpg",oldPrice:20999,newPrice:19999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:3,fullName:"Samsung Galaxy A26",variant:"6Gb/128Gb синий EAC",img:"https://i.ytimg.com/vi/Y4j5Yd9dEKM/maxresdefault.jpg",img2:"https://i.ytimg.com/vi/pKTtfOJLi4Y/maxresdefault.jpg",oldPrice:22999,newPrice:21999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:4,fullName:"Samsung Galaxy A26",variant:"8Gb/256Gb чёрный EAC",img:"https://images.samsung.com/is/image/samsung/p6pim/uz_ru/sm-a266bzkhsoz/gallery/uz-ru-galaxy-a26-5g-sm-a266-sm-a266bzkhsoz-545435764?$624_468_PNG$",img2:"https://www.dateks.lv/images/pic/1200/630/719/1906.jpg",oldPrice:25999,newPrice:24999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:5,fullName:"Samsung Galaxy A36",variant:"8Gb/128Gb белый EAC",img:"https://lv2.pigugroup.eu/colours/878/413/58/87841358/samsung-galaxy-a36-5g-8256gb-awesome-white-2fb24_reference.jpg",img2:"https://telemarket24.ru/upload/resizer2/1/680/6807f9aa93302512809cd15e4a52df3e.JPG",oldPrice:28999,newPrice:27499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    {id:6,fullName:"Samsung Galaxy A36",variant:"8Gb/256Gb чёрный EAC",img:"https://i.ytimg.com/vi/L9kc22FYf2w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPRfYb21ssbogpHPoD2czvlTdEJA",img2:"https://s3.e2e4.ru/imgproxy/3772606",oldPrice:32999,newPrice:31499,specs:["6.7\" Super AMOLED","Exynos 1380","50MP OIS","5000 mAh"],brand:"Samsung"},
    {id:7,fullName:"Samsung Galaxy A56",variant:"8Gb/128Gb зелёный EAC",img:"https://i.ytimg.com/vi/xwSf0Q8xmzA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6VYbkrowCOMpn4hpJa6_Eez1DDA",img2:"https://www.dateks.lv/images/pic/1200/630/922/1900.jpg",oldPrice:35999,newPrice:34499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:8,fullName:"Samsung Galaxy A56",variant:"8Gb/256Gb чёрный EAC",img:"https://s3.e2e4.ru/imgproxy/3819259",img2:"https://s3.e2e4.ru/imgproxy/3819261",oldPrice:39999,newPrice:35499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:9,fullName:"Honor X6C",variant:"6Gb/128Gb чёрный EAC",img:"https://i.ebayimg.com/images/g/cgEAAOSweCNoKkrh/s-l500.jpg",img2:"https://texnohome.az/image/cache/catalog/02.08.2025/a18a8136-c03c-45d8-8ea1-b4dbeb255293-1200x630.jpeg",oldPrice:9999,newPrice:9499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:10,fullName:"Honor X6C",variant:"6Gb/256Gb синий EAC",img:"https://redstore.am/uploads/shop/products/medium/b71ad18e48a3abf3f9fa536eec04cb66.jpg",img2:"https://i.ytimg.com/vi/BtGFn452kZQ/maxresdefault.jpg",oldPrice:11999,newPrice:11499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:11,fullName:"Honor X7C",variant:"6Gb/128Gb белый EAC",img:"https://cdn.rbt.ru/images/gen/item_image/image/11038/23/1103741_r3944.jpg",img2:"https://i.ytimg.com/vi/diSzIDA-vf8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCh8XQLdg9YVZs_i_JZP6xdXgfOAw",oldPrice:13999,newPrice:12499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:12,fullName:"Honor X7C",variant:"8Gb/256Gb чёрный EAC",img:"https://i.ytimg.com/vi/MTnKE40Yg1M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC4WKbXokVQh031PseVSIKaA8LIbg",img2:"https://avatars.mds.yandex.net/get-mpic/11658417/2a000001959f0e9b134d8d4a55a0e1c7f0b6/orig",oldPrice:16999,newPrice:15499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:13,fullName:"Honor X8C",variant:"8Gb/128Gb серебристый EAC",img:"https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3712827439957725845",img2:"https://static.eldorado.ru/promo/src/obzor-smartfona-honor-x8c/img/img21.webp",oldPrice:17999,newPrice:16499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:14,fullName:"Honor X8C",variant:"8Gb/256Gb чёрный EAC",img:"https://www.dateks.lv/images/pic/1200/630/405/1892.jpg",img2:"https://7745.by/img/imagecache/card_medium_image_for_product/uploads/products/890971/tsz-0000786144_No._01.jpg",oldPrice:19999,newPrice:18499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:15,fullName:"Honor X9C",variant:"8Gb/256Gb золотой EAC",img:"https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3762791720690038802",img2:"https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3762791719834369993",oldPrice:24999,newPrice:23999,specs:["6.78\" OLED 120Hz","Snapdragon 8 Gen 2","200MP","5000 mAh"],brand:"Honor"},
    {id:16,fullName:"Honor 400 Lite",variant:"8Gb/256Gb чёрный EAC",img:"https://megamir.by/image/cache/catalog/huawei/111/honor400lite/honor_400_lite_01-1200x800.jpg",img2:"https://telemarket24.ru/upload/resizer2/1/8ed/8edf237bd0c541e90422c7003043762b.JPG",oldPrice:24999,newPrice:21499,specs:["6.7\" AMOLED","Dimensity 6020","108MP","5000 mAh"],brand:"Honor"},
    {id:17,fullName:"Honor 400",variant:"8Gb/256Gb белый EAC",img:"https://mobilguru.by/image/cache/catalog/1Huawai/Honor%20400/HONOR_400_3-500x400.jpg",img2:"https://i.ytimg.com/vi/V_7UYolxh6U/maxresdefault.jpg",oldPrice:36999,newPrice:33999,specs:["6.78\" OLED","Snapdragon 8 Gen 3","50MP","5300 mAh"],brand:"Honor"},
    {id:18,fullName:"Honor 400 Pro",variant:"12Gb/256Gb чёрный EAC",img:"https://i.ytimg.com/vi/3TxiROjko10/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVNDliujo52nbfHF_5i5kqiUEdYA",img2:"https://www.smartbox.am/webroot/myfiles/images/400.1.jpg",oldPrice:56999,newPrice:51999,specs:["6.8\" OLED 120Hz","Snapdragon 8 Gen 3","200MP","5500 mAh"],brand:"Honor"},
    {id:19,fullName:"Huawei nova Y63",variant:"4Gb/128Gb чёрный EAC",img:"https://i.ytimg.com/vi/3NYg-jGz8UE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4R2EypOjtPnNS_Iqkb26JkqdwNA",img2:"https://pic.belkagomel.by/2025/05/3huawei-nova-y63.jpg",oldPrice:9999,newPrice:8499,specs:["6.52\" IPS","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:20,fullName:"Huawei nova Y73",variant:"8Gb/256Gb синий EAC",img:"https://i.ytimg.com/vi/D7jpbyhflzI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA0JgSlTxAqgrx-bhAGCFvuM63h0Q",img2:"https://i.ytimg.com/vi/5f5C_mLYQPA/sddefault.jpg",oldPrice:14999,newPrice:13499,specs:["6.75\" IPS 90Hz","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:21,fullName:"Huawei nova 14",variant:"12Gb/256Gb розовый EAC",img:"https://i.ytimg.com/vi/Afr1q2hFtmk/mqdefault.jpg",img2:"https://resizer.mail.ru/p/06fdc38b-b4d3-597a-b4bf-77b023dbf0fb/AQAKT_JurJbCxeBqI7_kKlA7-uYarPIfRNYoGo141M_UE-BP7kKUdJXF-zkDCYgDItL-FpRwyj5v3Yxc5o40PUMMQY4.jpg",oldPrice:33999,newPrice:21999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:22,fullName:"Huawei nova 14",variant:"12Gb/512Gb чёрный EAC",img:"https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3757617089960108497",img2:"https://i.ytimg.com/vi/ZGWDp9atBHI/maxresdefault.jpg",oldPrice:36999,newPrice:33999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:23,fullName:"Huawei nova 14 Pro",variant:"12Gb/512Gb чёрный EAC",img:"https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3757617089960108497",img2:"https://i.ytimg.com/vi/ZGWDp9atBHI/maxresdefault.jpg",oldPrice:46999,newPrice:44999,specs:["6.78\" OLED 120Hz","Kirin 9000","50MP переменная","4500 mAh"],brand:"Huawei"}
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
