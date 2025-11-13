const tg = window.Telegram.WebApp;
tg.ready(); 
tg.expand();

const phones = [
    {id:1,fullName:"Samsung Galaxy A17",variant:"4/128 чёрный",img:"./images/samsungA17black.jpg",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:2,fullName:"Samsung Galaxy A17",variant:"8/256 чёрный",img:"./images/samsungA17black.jpg",oldPrice:20999,newPrice:19999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    {id:3,fullName:"Samsung Galaxy A26",variant:"6/128 синий",img:"./images/samsungA26blue.jpg",oldPrice:22999,newPrice:21999,specs:["6.6\" AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:4,fullName:"Samsung Galaxy A26",variant:"8/256 чёрный",img:"./images/samsungA26black.jpg",oldPrice:25999,newPrice:24999,specs:["6.6\" AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    {id:5,fullName:"Samsung Galaxy A36",variant:"8/128 белый",img:"./images/samsungA36white.jpg",oldPrice:28999,newPrice:27499,specs:["6.7\" AMOLED","Exynos 1380","50MP","5000 mAh"],brand:"Samsung"},
    {id:6,fullName:"Samsung Galaxy A36",variant:"8/256 чёрный",img:"./images/samsungA36black.jpg",oldPrice:32999,newPrice:31499,specs:["6.7\" AMOLED","Exynos 1380","50MP","5000 mAh"],brand:"Samsung"},
    {id:7,fullName:"Samsung Galaxy A56",variant:"8/128 зелёный",img:"./images/samsungA56green.jpg",oldPrice:35999,newPrice:34499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:8,fullName:"Samsung Galaxy A56",variant:"8/256 чёрный",img:"./images/samsungA56black.jpg",oldPrice:39999,newPrice:35499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung"},
    {id:9,fullName:"Honor X6C",variant:"6/128 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X6C",oldPrice:9999,newPrice:9499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:10,fullName:"Honor X6C",variant:"6/256 синий",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X6C",oldPrice:11999,newPrice:11499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    {id:11,fullName:"Honor X7C",variant:"6/128 белый",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X7C",oldPrice:13999,newPrice:12499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:12,fullName:"Honor X7C",variant:"8/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X7C",oldPrice:16999,newPrice:15499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor"},
    {id:13,fullName:"Honor X8C",variant:"8/128 серебр.",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X8C",oldPrice:17999,newPrice:16499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:14,fullName:"Honor X8C",variant:"8/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X8C",oldPrice:19999,newPrice:18499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor"},
    {id:15,fullName:"Honor X9C",variant:"8/256 золотой",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X9C",oldPrice:24999,newPrice:23999,specs:["6.78\" OLED 120Hz","Snapdragon 8 Gen 2","200MP","5000 mAh"],brand:"Honor"},
    {id:16,fullName:"Honor 400 Lite",variant:"8/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=400+Lite",oldPrice:24999,newPrice:21499,specs:["6.7\" AMOLED","Dimensity 6020","108MP","5000 mAh"],brand:"Honor"},
    {id:17,fullName:"Honor 400",variant:"8/256 белый",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=400",oldPrice:36999,newPrice:33999,specs:["6.78\" OLED","Snapdragon 8 Gen 3","50MP","5300 mAh"],brand:"Honor"},
    {id:18,fullName:"Honor 400 Pro",variant:"12/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=400+Pro",oldPrice:56999,newPrice:51999,specs:["6.8\" OLED 120Hz","Snapdragon 8 Gen 3","200MP","5500 mAh"],brand:"Honor"},
    {id:19,fullName:"Huawei nova Y63",variant:"4/128 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=Y63",oldPrice:9999,newPrice:8499,specs:["6.52\" IPS","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:20,fullName:"Huawei nova Y73",variant:"8/256 синий",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=Y73",oldPrice:14999,newPrice:13499,specs:["6.75\" IPS 90Hz","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei"},
    {id:21,fullName:"Huawei nova 14",variant:"12/256 розовый",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=nova+14",oldPrice:33999,newPrice:21999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:22,fullName:"Huawei nova 14",variant:"12/512 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=nova+14",oldPrice:36999,newPrice:33999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei"},
    {id:23,fullName:"Huawei nova 14 Pro",variant:"12/512 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=nova+14+Pro",oldPrice:46999,newPrice:44999,specs:["6.78\" OLED 120Hz","Kirin 9000","50MP","4500 mAh"],brand:"Huawei"}
];

let cart = [];
let currentBrand = 'all';

// === УПРАВЛЕНИЕ МОДАЛЬНЫМИ ОКНАМИ ===
function openCartModal() {
    document.getElementById('cart-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeAllModals() {
    document.getElementById('phone-detail-modal').classList.add('hidden');
    document.getElementById('cart-modal').classList.add('hidden');
    document.getElementById('modal-overlay').classList.add('hidden');
}

// === РЕНДЕР КАРТОЧЕК ===
function applyFilters() {
    const query = document.getElementById('search-input').value.toLowerCase();
    let filtered = phones;
    if (currentBrand !== 'all') filtered = filtered.filter(p => p.brand === currentBrand);
    if (query) filtered = filtered.filter(p => p.fullName.toLowerCase().includes(query) || p.variant.toLowerCase().includes(query));
    
    document.getElementById('phones-list').innerHTML = filtered.map(p => `
        <div class="phone-card-mini" onclick="showPhone(${p.id})">
            <img src="${p.img}" alt="${p.fullName}" onerror="this.src='https://via.placeholder.com/150x200/f0f0f0/666?text=Нет+фото'" loading="lazy">
            <div class="info">
                <h4>${p.fullName}</h4>
                <div class="variant">${p.variant}</div>
                <div class="price">
                    <span class="old">${p.oldPrice.toLocaleString()} ₽</span>
                    <span class="new">${p.newPrice.toLocaleString()} ₽</span>
                </div>
                <button onclick="event.stopPropagation(); addToCart(${p.id})" class="buy-mini">В корзину</button>
            </div>
        </div>
    `).join('');
}

// === ФИЛЬТРЫ ===
function filterByBrand(brand) {
    currentBrand = brand;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.brand === brand));
    applyFilters();
}

// === ТАБЫ ===
function switchTab(t) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    if (t === 'catalog') { 
        document.querySelector('.tab-btn:nth-child(1)').classList.add('active'); 
        document.getElementById('catalog-tab').classList.remove('hidden'); 
    }
    if (t === 'info') { 
        document.querySelector('.tab-btn:nth-child(2)').classList.add('active'); 
        document.getElementById('info-tab').classList.remove('hidden'); 
    }
}

// === ДЕТАЛИ ТОВАРА ===
function showPhone(id) {
    const p = phones.find(x => x.id === id);
    const img = document.getElementById('detail-img');
    img.src = p.img;
    img.onerror = () => { img.src = 'https://via.placeholder.com/300x400/f0f0f0/666?text=Нет+фото'; };
    document.getElementById('detail-name').textContent = p.fullName;
    document.getElementById('detail-variant').textContent = p.variant;
    document.getElementById('detail-specs').innerHTML = p.specs.map(s => `<li>${s}</li>`).join('');
    document.getElementById('detail-old-price').textContent = p.oldPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-new-price').textContent = p.newPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-buy-btn').onclick = () => { addToCart(id); closeAllModals(); };
    document.getElementById('phone-detail-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}

// === КОРЗИНА ===
function addToCart(id) {
    const p = phones.find(x => x.id === id);
    cart.push(p);
    updateCart();
    tg.showAlert('Добавлено в корзину!');
}

function removeFromCart(i) { 
    cart.splice(i,1); 
    updateCart(); 
    tg.showAlert('Товар удален из корзины'); 
}

function clearCart() { 
    cart = []; 
    updateCart(); 
    tg.showAlert('Корзина очищена'); 
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-items').innerHTML = cart.map((p,i) => `
        <li>
            <div class="cart-item-text">${p.fullName} (${p.variant})</div>
            <div class="cart-item-price">${p.newPrice.toLocaleString()} ₽</div>
            <button class="remove-item" onclick="event.stopPropagation(); removeFromCart(${i})">×</button>
        </li>
    `).join('');
}

// === ОПЛАТА В TON ===
function checkout() {
    if (!cart.length) return tg.showAlert('Корзина пуста!');
    
    const name = document.getElementById('user-name').value.trim();
    const tel = document.getElementById('user-phone').value.trim();
    
    // Проверка данных пользователя
    if (!name || !tel) {
        tg.showAlert('Пожалуйста, заполните ваши данные во вкладке "Ваши данные"');
        switchTab('info');
        closeAllModals();
        return;
    }
    
    const totalRUB = cart.reduce((s,p) => s + p.newPrice, 0);
    const totalTON = (totalRUB / 500).toFixed(4);
    const orderText = cart.map(p => `${p.fullName} (${p.variant}) — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    const wallet = 'UQDHgEkatlXaVCujXHE-xmCFiEdRATslkkQHqTEVcK_hfZhB';

    tg.showPopup({
        title: 'Оплата в TON',
        message: `Сумма: ${totalRUB.toLocaleString()} ₽\nК оплате: ${totalTON} TON\n\nАдрес кошелька:\n\`${wallet}\``,
        buttons: [{type:'ok',text:'Я оплатил',id:'paid'},{type:'cancel',text:'Отмена'}]
    }, (btn) => {
        if (btn === 'paid') {
            const orderData = {
                products: cart.map(p => `${p.fullName} (${p.variant}) - ${p.newPrice} ₽`),
                total: totalRUB,
                totalTON: totalTON,
                customer: { name, tel },
                wallet: wallet
            };
            
            tg.sendData(JSON.stringify(orderData));
            cart = []; 
            updateCart(); 
            closeAllModals();
            tg.showAlert('Заказ отправлен! Ожидайте подтверждения.'); 
            setTimeout(() => tg.close(), 2000);
        }
    });
}

// === ИНИЦИАЛИЗАЦИЯ ===
document.addEventListener('DOMContentLoaded', function() {
    // Назначаем обработчики событий
    document.getElementById('cart-icon').onclick = openCartModal;
    document.getElementById('clear-cart').onclick = clearCart;
    document.getElementById('checkout-btn').onclick = checkout;
    
    // Гарантируем, что корзина закрыта при загрузке
    closeAllModals();
    
    // Автозаполнение данных пользователя из Telegram, если доступно
    const user = tg.initDataUnsafe.user;
    if (user) {
        const userName = user.first_name + (user.last_name ? ' ' + user.last_name : '');
        document.getElementById('user-name').value = userName;
        if (user.username) {
            document.getElementById('user-phone').value = `@${user.username}`;
        }
    }

    applyFilters();
    updateCart();
});
