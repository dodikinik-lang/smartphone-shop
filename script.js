const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const phones = {
    Samsung: [
        { id: 1, name: "Galaxy A17 4/128GB", desc: "Бюджетный смартфон с 4 ГБ ОЗУ", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg", oldPrice: 15999, newPrice: 14999, specs: ["6.5\" PLS", "Helio G85", "50MP", "5000 mAh"] },
        { id: 2, name: "Galaxy A17 8/256GB", desc: "Расширенная память и ОЗУ", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg", oldPrice: 20999, newPrice: 19999, specs: ["6.5\" PLS", "Helio G85", "50MP", "5000 mAh"] },
        { id: 3, name: "Galaxy A26 6/128GB", desc: "Средний сегмент с AMOLED", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-1.jpg", oldPrice: 22999, newPrice: 21999, specs: ["6.6\" Super AMOLED", "Exynos 1330", "48MP", "5000 mAh"] },
        { id: 4, name: "Galaxy A26 8/256GB", desc: "Больше памяти и ОЗУ", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-2.jpg", oldPrice: 25999, newPrice: 24999, specs: ["6.6\" Super AMOLED", "Exynos 1330", "48MP", "5000 mAh"] },
        { id: 5, name: "Galaxy A36 8/128GB", desc: "Премиум A-серия", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-1.jpg", oldPrice: 28999, newPrice: 27499, specs: ["6.7\" Super AMOLED", "Exynos 1380", "50MP OIS", "5000 mAh"] },
        { id: 6, name: "Galaxy A36 8/256GB", desc: "Максимум памяти", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-2.jpg", oldPrice: 32999, newPrice: 31499, specs: ["6.7\" Super AMOLED", "Exynos 1380", "50MP OIS", "5000 mAh"] },
        { id: 7, name: "Galaxy A56 8/128GB", desc: "Флагманский A-серии", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-1.jpg", oldPrice: 35999, newPrice: 34499, specs: ["6.7\" AMOLED 120Hz", "Exynos 1480", "50MP", "5000 mAh"] },
        { id: 8, name: "Galaxy A56 8/256GB", desc: "Топовая конфигурация", img: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg", oldPrice: 39999, newPrice: 35499, specs: ["6.7\" AMOLED 120Hz", "Exynos 1480", "50MP", "5000 mAh"] }
    ],
    Honor: [
        { id: 9, name: "X6C/128GB", desc: "Базовый X-серия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg", oldPrice: 999, newPrice: 900, specs: ["6.5\" IPS", "Helio G85", "50MP", "5000 mAh"] },
        { id: 10, name: "X6C/256GB", desc: "Расширенная версия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-2.jpg", oldPrice: 1199, newPrice: 1100, specs: ["6.5\" IPS", "Helio G85", "50MP", "5000 mAh"] },
        { id: 11, name: "X7C/128GB", desc: "Улучшенная камера", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-1.jpg", oldPrice: 1499, newPrice: 1400, specs: ["6.6\" AMOLED", "Snapdragon 680", "64MP", "5000 mAh"] },
        { id: 12, name: "X7C/256GB", desc: "Больше памяти", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-2.jpg", oldPrice: 1799, newPrice: 1700, specs: ["6.6\" AMOLED", "Snapdragon 680", "64MP", "5000 mAh"] },
        { id: 13, name: "X8C/128GB", desc: "120Hz экран", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-1.jpg", oldPrice: 1699, newPrice: 1600, specs: ["6.7\" AMOLED 120Hz", "Snapdragon 7 Gen 1", "108MP", "4500 mAh"] },
        { id: 14, name: "X8C/256GB", desc: "Высокая производительность", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-2.jpg", oldPrice: 1999, newPrice: 1900, specs: ["6.7\" AMOLED 120Hz", "Snapdragon 7 Gen 1", "108MP", "4500 mAh"] },
        { id: 15, name: "X9C/256GB", desc: "Премиум X-серия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-1.jpg", oldPrice: 2799, newPrice: 2700, specs: ["6.78\" OLED 120Hz", "Snapdragon 8 Gen 2", "200MP", "5000 mAh"] },
        { id: 16, name: "400 Lite/256GB", desc: "Лёгкая версия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-1.jpg", oldPrice: 2499, newPrice: 2400, specs: ["6.7\" AMOLED", "Dimensity 6020", "108MP", "5000 mAh"] },
        { id: 17, name: "400/256GB", desc: "Стандартная модель", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-1.jpg", oldPrice: 3699, newPrice: 3600, specs: ["6.78\" OLED", "Snapdragon 8 Gen 3", "50MP", "5300 mAh"] },
        { id: 18, name: "400 Pro/256GB", desc: "Профессиональная версия", img: "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-1.jpg", oldPrice: 5999, newPrice: 5900, specs: ["6.8\" OLED 120Hz", "Snapdragon 8 Gen 3", "200MP", "5500 mAh"] }
    ],
    Huawei: [
        { id: 19, name: "nova Y63/128GB", desc: "Бюджетный nova", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-1.jpg", oldPrice: 999, newPrice: 900, specs: ["6.52\" IPS", "Snapdragon 680", "50MP", "5000 mAh"] },
        { id: 20, name: "nova Y73/256GB", desc: "Расширенная Y-серия", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-1.jpg", oldPrice: 1499, newPrice: 1400, specs: ["6.75\" IPS 90Hz", "Snapdragon 680", "50MP", "5000 mAh"] },
        { id: 21, name: "nova 14/256GB", desc: "Стильный дизайн", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-1.jpg", oldPrice: 3399, newPrice: 3300, specs: ["6.7\" OLED", "Kirin 8000", "60MP", "4500 mAh"] },
        { id: 22, name: "nova 14/512GB", desc: "Максимум памяти", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-2.jpg", oldPrice: 3699, newPrice: 3600, specs: ["6.7\" OLED", "Kirin 8000", "60MP", "4500 mAh"] },
        { id: 23, name: "nova 14 Pro/512GB", desc: "Про-версия с камерой", img: "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-1.jpg", oldPrice: 4699, newPrice: 4600, specs: ["6.78\" OLED 120Hz", "Kirin 9000", "50MP переменная", "4500 mAh"] }
    ]
};

let cart = [];
let currentPhone = null;
let currentBrand = '';

// Баннер смена
setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    let active = document.querySelector('.slide.active');
    let next = active.nextElementSibling || slides[0];
    active.classList.remove('active');
    next.classList.add('active');
}, 4000);

// Показать бренды
function showBrands() {
    document.getElementById('brands').classList.remove('hidden');
    document.getElementById('phones-list').classList.add('hidden');
    document.getElementById('phone-detail').classList.add('hidden');
    document.getElementById('search-input').value = '';
}
showBrands();

// Показать смартфоны бренда
function showBrand(brand) {
    currentBrand = brand;
    document.getElementById('brands').classList.add('hidden');
    const list = document.getElementById('phones-list');
    list.classList.remove('hidden');
    renderPhones(phones[brand]);
}

// Поиск
function searchPhones() {
    const query = document.getElementById('search-input').value.toLowerCase();
    if (!query) {
        if (currentBrand) showBrand(currentBrand);
        else showBrands();
        return;
    }
    document.getElementById('brands').classList.add('hidden');
    const list = document.getElementById('phones-list');
    list.classList.remove('hidden');
    const all = Object.values(phones).flat();
    const filtered = all.filter(p => p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query));
    renderPhones(filtered);
}

function renderPhones(phoneList) {
    const list = document.getElementById('phones-list');
    list.innerHTML = phoneList.map(p => `
        <div class="phone-card" onclick="showPhone(${p.id})">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">
                <span class="old-price">${p.oldPrice.toLocaleString()} ₽</span>
                <span class="new-price">${p.newPrice.toLocaleString()} ₽</span>
            </div>
            <button onclick="event.stopPropagation(); addToCart(${p.id})" class="buy-btn-card">Купить</button>
        </div>
    `).join('');
}

// Детали
function showPhone(id) {
    currentPhone = Object.values(phones).flat().find(p => p.id === id);
    document.getElementById('phones-list').classList.add('hidden');
    document.getElementById('phone-detail').classList.remove('hidden');
    document.getElementById('phone-img').src = currentPhone.img;
    document.getElementById('phone-img').alt = currentPhone.name;
    document.getElementById('phone-name').textContent = currentPhone.name;
    document.getElementById('phone-desc').textContent = currentPhone.desc;
    document.getElementById('old-price').textContent = `${currentPhone.oldPrice.toLocaleString()} ₽`;
    document.getElementById('new-price').textContent = `${currentPhone.newPrice.toLocaleString()} ₽`;
    document.getElementById('phone-specs').innerHTML = currentPhone.specs.map(s => `<li>${s}</li>`).join('');
}

function backToBrands() {
    document.getElementById('phone-detail').classList.add('hidden');
    if (document.getElementById('search-input').value) {
        searchPhones();
    } else {
        showBrands();
    }
}

// Корзина
function addToCart(phone) {
    const p = typeof phone === 'object' ? phone : Object.values(phones).flat().find(x => x.id === phone);
    cart.push(p);
    updateCart();
    tg.showAlert('Добавлено в корзину!');
}

document.getElementById('cart-icon').onclick = () => {
    document.getElementById('cart-modal').classList.toggle('hidden');
};

document.getElementById('checkout-btn').onclick = () => {
    const order = cart.map(p => `${p.name} — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    tg.sendData(`Заказ:\n${order}`);
    tg.close();
};

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-items').innerHTML = cart.map(p => `<li>${p.name} — ${p.newPrice.toLocaleString()} ₽</li>`).join('');
}
updateCart();
