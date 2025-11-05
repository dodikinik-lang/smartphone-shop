const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const phones = {
    Samsung: [
        { id: 1, name: "Galaxy A17 4/128GB", desc: "Бюджетный смартфон с 4 ГБ ОЗУ", oldPrice: 15999, newPrice: 14999, specs: ["6.5\" PLS", "Helio G85", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-5.jpg"
        ] },
        { id: 2, name: "Galaxy A17 8/256GB", desc: "Расширенная память и ОЗУ", oldPrice: 20999, newPrice: 19999, specs: ["6.5\" PLS", "Helio G85", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-5.jpg"
        ] },
        { id: 3, name: "Galaxy A26 6/128GB", desc: "Средний сегмент с AMOLED", oldPrice: 22999, newPrice: 21999, specs: ["6.6\" Super AMOLED", "Exynos 1330", "48MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-5.jpg"
        ] },
        { id: 4, name: "Galaxy A26 8/256GB", desc: "Больше памяти и ОЗУ", oldPrice: 25999, newPrice: 24999, specs: ["6.6\" Super AMOLED", "Exynos 1330", "48MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-5.jpg"
        ] },
        { id: 5, name: "Galaxy A36 8/128GB", desc: "Премиум A-серия", oldPrice: 28999, newPrice: 27499, specs: ["6.7\" Super AMOLED", "Exynos 1380", "50MP OIS", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-5.jpg"
        ] },
        { id: 6, name: "Galaxy A36 8/256GB", desc: "Максимум памяти", oldPrice: 32999, newPrice: 31499, specs: ["6.7\" Super AMOLED", "Exynos 1380", "50MP OIS", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a36-5.jpg"
        ] },
        { id: 7, name: "Galaxy A56 8/128GB", desc: "Флагманский A-серии", oldPrice: 35999, newPrice: 34499, specs: ["6.7\" AMOLED 120Hz", "Exynos 1480", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-5.jpg"
        ] },
        { id: 8, name: "Galaxy A56 8/256GB", desc: "Топовая конфигурация", oldPrice: 39999, newPrice: 35499, specs: ["6.7\" AMOLED 120Hz", "Exynos 1480", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a56-5.jpg"
        ] }
    ],
    Honor: [
        { id: 9, name: "X6C 6/128GB", desc: "Базовый X-серия", oldPrice: 9999, newPrice: 9499, specs: ["6.5\" IPS", "Helio G85", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-5.jpg"
        ] },
        { id: 10, name: "X6C 6/256GB", desc: "Расширенная версия", oldPrice: 11999, newPrice: 11499, specs: ["6.5\" IPS", "Helio G85", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-5.jpg"
        ] },
        { id: 11, name: "X7C 6/128GB", desc: "Улучшенная камера", oldPrice: 13999, newPrice: 12499, specs: ["6.6\" AMOLED", "Snapdragon 680", "64MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-5.jpg"
        ] },
        { id: 12, name: "X7C 8/256GB", desc: "Больше памяти", oldPrice: 16999, newPrice: 15499, specs: ["6.6\" AMOLED", "Snapdragon 680", "64MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x7c-5.jpg"
        ] },
        { id: 13, name: "X8C 8/128GB", desc: "120Hz экран", oldPrice: 17999, newPrice: 16499, specs: ["6.7\" AMOLED 120Hz", "Snapdragon 7 Gen 1", "108MP", "4500 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-5.jpg"
        ] },
        { id: 14, name: "X8C 8/256GB", desc: "Высокая производительность", oldPrice: 19999, newPrice: 18499, specs: ["6.7\" AMOLED 120Hz", "Snapdragon 7 Gen 1", "108MP", "4500 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x8c-5.jpg"
        ] },
        { id: 15, name: "X9C 8/256GB", desc: "Премиум X-серия", oldPrice: 24999, newPrice: 23999, specs: ["6.78\" OLED 120Hz", "Snapdragon 8 Gen 2", "200MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-x9c-5.jpg"
        ] },
        { id: 16, name: "400 Lite 8/256GB", desc: "Лёгкая версия", oldPrice: 24999, newPrice: 21499, specs: ["6.7\" AMOLED", "Dimensity 6020", "108MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-lite-5.jpg"
        ] },
        { id: 17, name: "400 8/256GB", desc: "Стандартная модель", oldPrice: 36999, newPrice: 33999, specs: ["6.78\" OLED", "Snapdragon 8 Gen 3", "50MP", "5300 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-5.jpg"
        ] },
        { id: 18, name: "400 Pro 12/256GB", desc: "Профессиональная версия", oldPrice: 56999, newPrice: 51999, specs: ["6.8\" OLED 120Hz", "Snapdragon 8 Gen 3", "200MP", "5500 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/honor/honor-400-pro-5.jpg"
        ] }
    ],
    Huawei: [
        { id: 19, name: "nova Y63 4/128GB", desc: "Бюджетный nova", oldPrice: 9999, newPrice: 8499, specs: ["6.52\" IPS", "Snapdragon 680", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-5.jpg"
        ] },
        { id: 20, name: "nova Y73 8/256GB", desc: "Расширенная Y-серия", oldPrice: 14999, newPrice: 13499, specs: ["6.75\" IPS 90Hz", "Snapdragon 680", "50MP", "5000 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y73-5.jpg"
        ] },
        { id: 21, name: "nova 14 12/256GB", desc: "Стильный дизайн", oldPrice: 33999, newPrice: 21999, specs: ["6.7\" OLED", "Kirin 8000", "60MP", "4500 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-5.jpg"
        ] },
        { id: 22, name: "nova 14 12/512GB", desc: "Максимум памяти", oldPrice: 36999, newPrice: 33999, specs: ["6.7\" OLED", "Kirin 8000", "60MP", "4500 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-5.jpg"
        ] },
        { id: 23, name: "nova 14 Pro 12/512GB", desc: "Про-версия с камерой", oldPrice: 46999, newPrice: 44999, specs: ["6.78\" OLED 120Hz", "Kirin 9000", "50MP переменная", "4500 mAh"], images: [
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-1.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-2.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-3.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-4.jpg",
            "https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-14-pro-5.jpg"
        ] }
    ]
};

let cart = [];
let currentPhone = null;
let currentBrand = '';
let currentGallerySlide = 0;
let galleryImages = [];

// Баннер
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
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onclick="event.stopPropagation(); openGalleryFromCard(${p.id})">
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
    document.getElementById('phone-img').src = currentPhone.images[0];
    document.getElementById('phone-img').alt = currentPhone.name;
    document.getElementById('phone-name').textContent = currentPhone.name;
    document.getElementById('phone-desc').textContent = currentPhone.desc;
    document.getElementById('old-price').textContent = `${currentPhone.oldPrice.toLocaleString()} ₽`;
    document.getElementById('new-price').textContent = `${currentPhone.newPrice.toLocaleString()} ₽`;
    document.getElementById('phone-specs').innerHTML = currentPhone.specs.map(s => `<li>${s}</li>`).join('');
    renderGallery(currentPhone.images);
}

function backToBrands() {
    document.getElementById('phone-detail').classList.add('hidden');
    if (document.getElementById('search-input').value) {
        searchPhones();
    } else {
        showBrands();
    }
}

// Галерея
function renderGallery(images) {
    galleryImages = images;
    const slides = document.getElementById('gallery-slides');
    slides.innerHTML = images.map((img, i) => `
        <img src="${img}" class="gallery-slide${i === 0 ? ' active' : ''}" alt="Фото ${i + 1}">
    `).join('');
    currentGallerySlide = 0;
}

function openGallery() {
    document.querySelector('.gallery-modal').classList.remove('hidden');
}

function openGalleryFromCard(id) {
    const phone = Object.values(phones).flat().find(p => p.id === id);
    renderGallery(phone.images);
    openGallery();
}

function closeGallery() {
    document.querySelector('.gallery-modal').classList.add('hidden');
}

function showSlide(n) {
    const slides = document.querySelectorAll('.gallery-slide');
    slides.forEach(s => s.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    currentGallerySlide = (currentGallerySlide + 1) % galleryImages.length;
    showSlide(currentGallerySlide);
}

function prevSlide() {
    currentGallerySlide = (currentGallerySlide - 1 + galleryImages.length) % galleryImages.length;
    showSlide(currentGallerySlide);
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
