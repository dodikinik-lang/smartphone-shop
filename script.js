const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Данные смартфонов (реальные specs, цены в USD, скидки)
const phones = {
    samsung: [
        {
            id: 1,
            name: 'Samsung Galaxy S24',
            img: 'https://images.unsplash.com/photo-1592899679516-9c8a283e104a?w=300',
            desc: 'Флагманский смартфон с AI-функциями и отличной камерой.',
            specs: ['Дисплей: 6.2" Dynamic AMOLED 2X', 'Процессор: Snapdragon 8 Gen 3', 'Камера: 50MP основная', 'Батарея: 4000 mAh', 'RAM: 8GB', 'Хранение: 256GB'],
            oldPrice: 800,
            newPrice: 640  // 20% скидка
        }
    ],
    honor: [
        {
            id: 2,
            name: 'Honor Magic 6 Pro',
            img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300',
            desc: 'Премиум-модель с суперкамерой и быстрой зарядкой.',
            specs: ['Дисплей: 6.8" OLED', 'Процессор: Snapdragon 8 Gen 3', 'Камера: 50MP тройная', 'Батарея: 5600 mAh', 'RAM: 12GB', 'Хранение: 512GB'],
            oldPrice: 720,
            newPrice: 648
        }
    ],
    huawei: [
        {
            id: 3,
            name: 'Huawei Pura 70 Ultra',
            img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
            desc: 'Инновационная камера с выдвижным объективом и HarmonyOS.',
            specs: ['Дисплей: 6.8" OLED', 'Процессор: Kirin 9010', 'Камера: 50MP переменная апертура', 'Батарея: 5200 mAh', 'RAM: 16GB', 'Хранение: 512GB'],
            oldPrice: 1381,
            newPrice: 1243
        }
    ],
    realme: [
        {
            id: 4,
            name: 'Realme GT 6',
            img: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=300',
            desc: 'Игровой смартфон с мощным чипом и ярким экраном.',
            specs: ['Дисплей: 6.78" AMOLED 120Hz', 'Процессор: Snapdragon 8s Gen 3', 'Камера: 50MP Sony LYT-808', 'Батарея: 5500 mAh', 'RAM: 8GB', 'Хранение: 256GB'],
            oldPrice: 427,
            newPrice: 385
        }
    ],
    tecno: [
        {
            id: 5,
            name: 'Tecno Camon 30 Premier',
            img: 'https://images.unsplash.com/photo-1590716156355-9ca3c2209db4?w=300',
            desc: 'Камерофон с AI-функциями по доступной цене.',
            specs: ['Дисплей: 6.77" AMOLED', 'Процессор: Dimensity 8200 Ultimate', 'Камера: 50MP с OIS', 'Батарея: 5000 mAh', 'RAM: 12GB', 'Хранение: 512GB'],
            oldPrice: 421,
            newPrice: 379
        }
    ]
};

// Корзина
let cart = [];
function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    const itemsList = document.getElementById('cart-items');
    itemsList.innerHTML = cart.map(item => `<li>${item.name} - $${item.newPrice}</li>`).join('');
}

// Баннер смена
setInterval(() => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => slide.classList.toggle('active', (i + 1) * 5 < Date.now() % 15 + 5));
}, 5000);

// Навигация
function showBrand(brand) {
    document.getElementById('catalog').classList.add('hidden');
    document.getElementById('brand-page').classList.remove('hidden');
    document.getElementById('brand-title').textContent = brand.toUpperCase();
    const list = document.getElementById('phones-list');
    list.innerHTML = phones[brand].map(phone => `
        <div class="phone-card">
            <img src="${phone.img}" alt="${phone.name}">
            <h3>${phone.name}</h3>
            <p>${phone.desc.split('.')[0]}</p>
            <span class="old-price">$${phone.oldPrice}</span><br>
            <span class="new-price">$${phone.newPrice}</span>
            <button onclick="showPhone(${phone.id})">Подробнее</button>
        </div>
    `).join('');
}

function backToCatalog() {
    document.getElementById('brand-page').classList.add('hidden');
    document.getElementById('catalog').classList.remove('hidden');
    document.getElementById('phone-detail').classList.add('hidden');
}

let currentBrand = '';
let currentPhone = null;
function showPhone(id) {
    currentBrand = Object.keys(phones).find(key => phones[key].some(p => p.id === id));
    currentPhone = phones[currentBrand].find(p => p.id === id);
    document.getElementById('brand-page').classList.add('hidden');
    document.getElementById('phone-detail').classList.remove('hidden');
    document.getElementById('phone-name').textContent = currentPhone.name;
    document.getElementById('phone-img').src = currentPhone.img;
    document.getElementById('phone-desc').textContent = currentPhone.desc;
    document.getElementById('phone-specs').innerHTML = currentPhone.specs.map(spec => `<li>${spec}</li>`).join('');
    document.getElementById('old-price').textContent = `$${currentPhone.oldPrice}`;
    document.getElementById('new-price').textContent = `$${currentPhone.newPrice}`;
}

function backToBrand() {
    document.getElementById('phone-detail').classList.add('hidden');
    document.getElementById('brand-page').classList.remove('hidden');
}

// Корзина
document.getElementById('cart-icon').onclick = () => {
    document.getElementById('cart-modal').classList.toggle('hidden');
};
document.getElementById('add-to-cart').onclick = () => {
    cart.push(currentPhone);
    updateCart();
    tg.showAlert('Добавлено в корзину!');
};
document.getElementById('checkout-btn').onclick = () => {
    const order = cart.map(item => `${item.name} - $${item.newPrice}`).join('\n');
    tg.sendData(`Заказ: ${order}`);
    tg.close();
    cart = [];
    updateCart();
};

updateCart();