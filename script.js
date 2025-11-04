const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const phones = {
    Samsung: [
        { id: 1, name: "Galaxy S24", desc: "Флагман 2024", img: "https://images.unsplash.com/photo-1592899679516-9c8a283e104a?w=600", oldPrice: 800, newPrice: 640, specs: ["6.2\" AMOLED", "Snapdragon 8 Gen 3", "50MP", "4000 mAh"] },
        { id: 2, name: "Galaxy A55", desc: "Бюджетный хит", img: "https://images.unsplash.com/photo-1590716156355-9ca3c2209db4?w=600", oldPrice: 450, newPrice: 399, specs: ["6.6\" AMOLED", "Exynos 1480", "50MP OIS", "5000 mAh"] },
        { id: 3, name: "Galaxy Z Fold 6", desc: "Складной флагман", img: "https://images.unsplash.com/photo-1592750477365-2d0c5d0e52b9?w=600", oldPrice: 1800, newPrice: 1599, specs: ["7.6\" + 6.2\"", "Snapdragon 8 Gen 3", "50MP", "4400 mAh"] },
        { id: 4, name: "Galaxy S23 FE", desc: "Баланс цены и качества", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", oldPrice: 600, newPrice: 529, specs: ["6.4\" AMOLED", "Exynos 2200", "50MP", "4500 mAh"] },
        { id: 5, name: "Galaxy M34", desc: "Долгая батарея", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", oldPrice: 300, newPrice: 259, specs: ["6.5\" PLS", "Exynos 1280", "50MP", "6000 mAh"] }
    ],
    Realme: [
        { id: 6, name: "GT 6", desc: "Игровой флагман", img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600", oldPrice: 427, newPrice: 385, specs: ["6.78\" 120Hz", "Snapdragon 8s Gen 3", "50MP", "5500 mAh"] },
        { id: 7, name: "12 Pro", desc: "120W зарядка", img: "https://images.unsplash.com/photo-1592899679516-9c8a283e104a?w=600", oldPrice: 350, newPrice: 319, specs: ["6.7\" AMOLED", "Dimensity 7050", "108MP", "5000 mAh"] },
        { id: 8, name: "C65", desc: "Бюджетник", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", oldPrice: 180, newPrice: 159, specs: ["6.72\" 90Hz", "Helio G85", "50MP", "5000 mAh"] },
        { id: 9, name: "Narzo 70", desc: "Для молодёжи", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", oldPrice: 280, newPrice: 249, specs: ["6.67\" 120Hz", "Dimensity 6020", "64MP", "5000 mAh"] },
        { id: 10, name: "11 Pro+", desc: "200MP камера", img: "https://images.unsplash.com/photo-1590716156355-9ca3c2209db4?w=600", oldPrice: 400, newPrice: 369, specs: ["6.7\" AMOLED", "Dimensity 7050", "200MP", "5000 mAh"] }
    ],
    Honor: [
        { id: 11, name: "Magic 6 Pro", desc: "Премиум флагман", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", oldPrice: 720, newPrice: 648, specs: ["6.8\" OLED", "Snapdragon 8 Gen 3", "50MP", "5600 mAh"] },
        { id: 12, name: "200", desc: "Тонкий дизайн", img: "https://images.unsplash.com/photo-1592899679516-9c8a283e104a?w=600", oldPrice: 650, newPrice: 599, specs: ["6.7\" OLED", "Snapdragon 8 Gen 2", "50MP", "5000 mAh"] },
        { id: 13, name: "X9b", desc: "Прочный корпус", img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600", oldPrice: 320, newPrice: 289, specs: ["6.78\" 120Hz", "Snapdragon 6 Gen 1", "108MP", "5800 mAh"] },
        { id: 14, name: "90", desc: "Баланс", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", oldPrice: 500, newPrice: 459, specs: ["6.7\" AMOLED", "Snapdragon 7 Gen 1", "200MP", "5000 mAh"] },
        { id: 15, name: "Play 40", desc: "Для игр", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", oldPrice: 250, newPrice: 219, specs: ["6.56\" 90Hz", "Dimensity 6020", "50MP", "5200 mAh"] }
    ],
    Huawei: [
        { id: 16, name: "Pura 70 Ultra", desc: "Камера 1\"", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", oldPrice: 1381, newPrice: 1243, specs: ["6.8\" OLED", "Kirin 9010", "50MP", "5200 mAh"] },
        { id: 17, name: "Mate 60 Pro", desc: "Флагман", img: "https://images.unsplash.com/photo-1592899679516-9c8a283e104a?w=600", oldPrice: 1200, newPrice: 1099, specs: ["6.82\" OLED", "Kirin 9000S", "50MP", "5000 mAh"] },
        { id: 18, name: "Nova 12", desc: "Стильный", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", oldPrice: 450, newPrice: 409, specs: ["6.7\" OLED", "Snapdragon 778G", "60MP", "4000 mAh"] },
        { id: 19, name: "Enjoy 70", desc: "Бюджет", img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600", oldPrice: 220, newPrice: 199, specs: ["6.75\" 90Hz", "Kirin 710A", "48MP", "6000 mAh"] },
        { id: 20, name: "P60 Pro", desc: "Камера", img: "https://images.unsplash.com/photo-1590716156355-9ca3c2209db4?w=600", oldPrice: 900, newPrice: 829, specs: ["6.67\" OLED", "Snapdragon 8+ Gen 1", "48MP", "4815 mAh"] }
    ],
    Tecno: [
        { id: 21, name: "Camon 30 Premier", desc: "Камера 50MP", img: "https://images.unsplash.com/photo-1590716156355-9ca3c2209db4?w=600", oldPrice: 421, newPrice: 379, specs: ["6.77\" AMOLED", "Dimensity 8200", "50MP", "5000 mAh"] },
        { id: 22, name: "Phantom V Fold", desc: "Складной", img: "https://images.unsplash.com/photo-1592750477365-2d0c5d0e52b9?w=600", oldPrice: 1100, newPrice: 999, specs: ["7.85\" + 6.42\"", "Dimensity 9000+", "50MP", "5000 mAh"] },
        { id: 23, name: "Spark 20 Pro", desc: "Бюджет", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", oldPrice: 200, newPrice: 179, specs: ["6.78\" 120Hz", "Helio G99", "108MP", "5000 mAh"] },
        { id: 24, name: "Pova 6", desc: "Игровой", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", oldPrice: 280, newPrice: 249, specs: ["6.78\" 120Hz", "Dimensity 6080", "108MP", "6000 mAh"] },
        { id: 25, name: "Pop 8", desc: "Супер бюджет", img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600", oldPrice: 130, newPrice: 109, specs: ["6.6\" 90Hz", "Unisoc T606", "13MP", "5000 mAh"] }
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
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">
                <span class="old-price">$${p.oldPrice}</span>
                <span class="new-price">$${p.newPrice}</span>
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
    document.getElementById('phone-name').textContent = currentPhone.name;
    document.getElementById('phone-desc').textContent = currentPhone.desc;
    document.getElementById('old-price').textContent = `$${currentPhone.oldPrice}`;
    document.getElementById('new-price').textContent = `$${currentPhone.newPrice}`;
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
    const order = cart.map(p => `${p.name} — $${p.newPrice}`).join('\n');
    tg.sendData(`Заказ:\n${order}`);
    tg.close();
};

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-items').innerHTML = cart.map(p => `<li>${p.name} — $${p.newPrice}</li>`).join('');
}
updateCart();
