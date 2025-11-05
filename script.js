const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const phones = [
    { id: 1, name: "Galaxy A17 4/128GB", desc: "Бюджетный смартфон с 4 ГБ ОЗУ", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg", oldPrice: 15999, newPrice: 14999, specs: ["6.5\" PLS", "Helio G85", "50MP", "5000 mAh"] },
    { id: 2, name: "Galaxy A17 8/256GB", desc: "Расширенная память и ОЗУ", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg", oldPrice: 20999, newPrice: 19999, specs: ["6.5\" PLS", "Helio G85", "50MP", "5000 mAh"] },
    { id: 3, name: "Galaxy A26 6/128GB", desc: "Средний сегмент с AMOLED", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-1.jpg", oldPrice: 22999, newPrice: 21999, specs: ["6.6\" Super AMOLED", "Exynos 1330", "48MP", "5000 mAh"] },
    { id: 4, name: "Galaxy A26 8/256GB", desc: "Больше памяти и ОЗУ", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-2.jpg", oldPrice: 25999, newPrice: 24999, specs: ["6.6\" Super AMOLED", "Exynos 1330", "48MP", "5000 mAh"] },
    { id: 5, name: "Galaxy A36 8/128GB", desc: "Премиум A-серия", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-1.jpg", oldPrice: 28999, newPrice: 27499, specs: ["6.7\" Super AMOLED", "Exynos 1380", "50MP OIS", "5000 mAh"] },
    { id: 6, name: "Galaxy A36 8/256GB", desc: "Максимум памяти", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-2.jpg", oldPrice: 32999, newPrice: 31499, specs: ["6.7\" Super AMOLED", "Exynos 1380", "50MP OIS", "5000 mAh"] },
    { id: 7, name: "Galaxy A56 8/128GB", desc: "Флагманский A-серии", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-1.jpg", oldPrice: 35999, newPrice: 34499, specs: ["6.7\" AMOLED 120Hz", "Exynos 1480", "50MP", "5000 mAh"] },
    { id: 8, name: "Galaxy A56 8/256GB", desc: "Топовая конфигурация", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg", oldPrice: 39999, newPrice: 35499, specs: ["6.7\" AMOLED 120Hz", "Exynos 1480", "50MP", "5000 mAh"] },
    { id: 9, name: "Honor X6C 6/128GB", desc: "Базовый X-серия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg", oldPrice: 9999, newPrice: 9499, specs: ["6.5\" IPS", "Helio G85", "50MP", "5000 mAh"] },
    { id: 10, name: "Honor X6C 6/256GB", desc: "Расширенная версия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-2.jpg", oldPrice: 11999, newPrice: 11499, specs: ["6.5\" IPS", "Helio G85", "50MP", "5000 mAh"] },
    { id: 11, name: "Honor X7C 6/128GB", desc: "Улучшенная камера", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-1.jpg", oldPrice: 13999, newPrice: 12499, specs: ["6.6\" AMOLED", "Snapdragon 680", "64MP", "5000 mAh"] },
    { id: 12, name: "Honor X7C 8/256GB", desc: "Больше памяти", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-2.jpg", oldPrice: 16999, newPrice: 15499, specs: ["6.6\" AMOLED", "Snapdragon 680", "64MP", "5000 mAh"] },
    { id: 13, name: "Honor X8C 8/128GB", desc: "120Hz экран", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-1.jpg", oldPrice: 17999, newPrice: 16499, specs: ["6.7\" AMOLED 120Hz", "Snapdragon 7 Gen 1", "108MP", "4500 mAh"] },
    { id: 14, name: "Honor X8C 8/256GB", desc: "Высокая производительность", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-2.jpg", oldPrice: 19999, newPrice: 18499, specs: ["6.7\" AMOLED 120Hz", "Snapdragon 7 Gen 1", "108MP", "4500 mAh"] },
    { id: 15, name: "Honor X9C 8/256GB", desc: "Премиум X-серия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-1.jpg", oldPrice: 24999, newPrice: 23999, specs: ["6.78\" OLED 120Hz", "Snapdragon 8 Gen 2", "200MP", "5000 mAh"] },
    { id: 16, name: "Honor 400 Lite 8/256GB", desc: "Лёгкая версия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-1.jpg", oldPrice: 24999, newPrice: 21499, specs: ["6.7\" AMOLED", "Dimensity 6020", "108MP", "5000 mAh"] },
    { id: 17, name: "Honor 400 8/256GB", desc: "Стандартная модель", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-1.jpg", oldPrice: 36999, newPrice: 33999, specs: ["6.78\" OLED", "Snapdragon 8 Gen 3", "50MP", "5300 mAh"] },
    { id: 18, name: "Honor 400 Pro 12/256GB", desc: "Профессиональная версия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-1.jpg", oldPrice: 56999, newPrice: 51999, specs: ["6.8\" OLED 120Hz", "Snapdragon 8 Gen 3", "200MP", "5500 mAh"] },
    { id: 19, name: "Huawei nova Y63 4/128GB", desc: "Бюджетный nova", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-1.jpg", oldPrice: 9999, newPrice: 8499, specs: ["6.52\" IPS", "Snapdragon 680", "50MP", "5000 mAh"] },
    { id: 20, name: "Huawei nova Y73 8/256GB", desc: "Расширенная Y-серия", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-1.jpg", oldPrice: 14999, newPrice: 13499, specs: ["6.75\" IPS 90Hz", "Snapdragon 680", "50MP", "5000 mAh"] },
    { id: 21, name: "Huawei nova 14 12/256GB", desc: "Стильный дизайн", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-1.jpg", oldPrice: 33999, newPrice: 21999, specs: ["6.7\" OLED", "Kirin 8000", "60MP", "4500 mAh"] },
    { id: 22, name: "Huawei nova 14 12/512GB", desc: "Максимум памяти", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-2.jpg", oldPrice: 36999, newPrice: 33999, specs: ["6.7\" OLED", "Kirin 8000", "60MP", "4500 mAh"] },
    { id: 23, name: "Huawei nova 14 Pro 12/512GB", desc: "Про-версия с камерой", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-1.jpg", oldPrice: 46999, newPrice: 44999, specs: ["6.78\" OLED 120Hz", "Kirin 9000", "50MP переменная", "4500 mAh"] }
];

let cart = [];
let currentPhone = null;

// Показать каталог
function showCatalog() {
    document.getElementById('catalog').classList.remove('hidden');
    document.getElementById('phone-detail').classList.add('hidden');
    const list = document.getElementById('phones-list');
    list.innerHTML = phones.map(phone => `
        <div class="phone-card" onclick="showPhone(${phone.id})">
            <img src="${phone.img}" alt="${phone.name}" loading="lazy">
            <h3>${phone.name}</h3>
            <p>${phone.desc}</p>
            <div class="price-section">
                <span class="old-price">${phone.oldPrice.toLocaleString()} ₽</span>
                <span class="new-price">${phone.newPrice.toLocaleString()} ₽</span>
            </div>
            <button onclick="event.stopPropagation(); addToCart(${phone.id})" class="buy-btn">Купить</button>
        </div>
    `).join('');
}
showCatalog();

// Показать деталь
function showPhone(id) {
    currentPhone = phones.find(p => p.id === id);
    document.getElementById('catalog').classList.add('hidden');
    document.getElementById('phone-detail').classList.remove('hidden');
    document.getElementById('phone-img').src = currentPhone.img;
    document.getElementById('phone-name').textContent = currentPhone.name;
    document.getElementById('phone-desc').textContent = currentPhone.desc;
    document.getElementById('old-price').textContent = currentPhone.oldPrice.toLocaleString() + ' ₽';
    document.getElementById('new-price').textContent = currentPhone.newPrice.toLocaleString() + ' ₽';
    document.getElementById('phone-specs').innerHTML = currentPhone.specs.map(s => `<li>${s}</li>`).join('');
}

function backToCatalog() {
    document.getElementById('phone-detail').classList.add('hidden');
    showCatalog();
}

// Корзина
document.getElementById('cart-icon').onclick = () => {
    document.getElementById('cart-modal').classList.toggle('hidden');
};

function addToCart(id) {
    const phone = phones.find(p => p.id === id);
    cart.push(phone);
    updateCart();
    tg.showAlert('Добавлено в корзину!');
}

document.getElementById('checkout-btn').onclick = () => {
    if (cart.length === 0) {
        tg.showAlert('Корзина пуста!');
        return;
    }
    const order = cart.map(p => `${p.name} — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    tg.sendData(`Новый заказ:\n${order}\n\nИП Голиков Никита Сергеевич\nИНН: 253502067548`);
    cart = [];
    updateCart();
    document.getElementById('cart-modal').classList.add('hidden');
    tg.close();
};

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-items').innerHTML = cart.map(p => `<li>${p.name} — ${p.newPrice.toLocaleString()} ₽</li>`).join('');
}
updateCart();
