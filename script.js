const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const phones = [
    { id: 1, name: "Samsung Galaxy S24", img: "https://images.unsplash.com/photo-1592899679516-9c8a283e104a?w=600", oldPrice: 800, newPrice: 640, specs: ["6.2\" AMOLED", "Snapdragon 8 Gen 3", "50MP камера", "4000 mAh"] },
    { id: 2, name: "Honor Magic 6 Pro", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", oldPrice: 720, newPrice: 648, specs: ["6.8\" OLED", "Snapdragon 8 Gen 3", "50MP тройная", "5600 mAh"] },
    { id: 3, name: "Huawei Pura 70 Ultra", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", oldPrice: 1381, newPrice: 1243, specs: ["6.8\" OLED", "Kirin 9010", "50MP переменная", "5200 mAh"] },
    { id: 4, name: "Realme GT 6", img: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600", oldPrice: 427, newPrice: 385, specs: ["6.78\" AMOLED 120Hz", "Snapdragon 8s Gen 3", "50MP Sony", "5500 mAh"] },
    { id: 5, name: "Tecno Camon 30", img: "https://images.unsplash.com/photo-1590716156355-9ca3c2209db4?w=600", oldPrice: 421, newPrice: 379, specs: ["6.77\" AMOLED", "Dimensity 8200", "50MP OIS", "5000 mAh"] }
];

let cart = [];
let currentPhone = null;

// Показать каталог
function showCatalog() {
    document.getElementById('catalog').classList.remove('hidden');
    document.getElementById('phone-detail').classList.add('hidden');
    const list = document.getElementById('phones-list');
    list.innerHTML = phones.map(p => `
        <div class="phone-card" onclick="showPhone(${p.id})">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <div class="price">
                <span class="old-price">$${p.oldPrice}</span>
                <span class="new-price">$${p.newPrice}</span>
            </div>
        </div>
    `).join('');
}
showCatalog();

// Детали
function showPhone(id) {
    currentPhone = phones.find(p => p.id === id);
    document.getElementById('catalog').classList.add('hidden');
    document.getElementById('phone-detail').classList.remove('hidden');
    document.getElementById('phone-img').src = currentPhone.img;
    document.getElementById('phone-name').textContent = currentPhone.name;
    document.getElementById('old-price').textContent = `$${currentPhone.oldPrice}`;
    document.getElementById('new-price').textContent = `$${currentPhone.newPrice}`;
    document.getElementById('phone-specs').innerHTML = currentPhone.specs.map(s => `<li>${s}</li>`).join('');
}

function backToCatalog() {
    document.getElementById('phone-detail').classList.add('hidden');
    document.getElementById('catalog').classList.remove('hidden');
}

// Корзина
document.getElementById('cart-icon').onclick = () => {
    document.getElementById('cart-modal').classList.toggle('hidden');
};

document.getElementById('add-to-cart').onclick = () => {
    cart.push(currentPhone);
    updateCart();
    tg.showAlert('Добавлено!');
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
