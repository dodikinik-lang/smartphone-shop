const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Авто-тема Telegram
if (tg.colorScheme === 'dark') document.body.classList.add('dark');

const phones = [
    { id:1, fullName:"Samsung Galaxy A17 4Gb/128Gb чёрный", img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg", oldPrice:15999, newPrice:14999 },
    { id:2, fullName:"Honor X6C 6Gb/128Gb чёрный", img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg", oldPrice:9999, newPrice:9499 },
    { id:3, fullName:"Huawei nova Y63 4Gb/128Gb чёрный", img:"https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-y63-1.jpg", oldPrice:9999, newPrice:8499 }
    // Добавь остальные телефоны сюда по аналогии
];

let cart = [];

// Рендер телефонов
function renderPhones() {
    const list = document.getElementById('phones-list');
    const query = document.getElementById('search-input').value.toLowerCase();
    list.innerHTML = phones
        .filter(p => p.fullName.toLowerCase().includes(query))
        .map(p => `
        <div class="phone-card" onclick="showPhone(${p.id})">
            <img src="${p.img}" alt="${p.fullName}">
            <h3>${p.fullName}</h3>
            <div class="price">
                <span class="old-price">${p.oldPrice.toLocaleString()} ₽</span>
                <span class="new-price">${p.newPrice.toLocaleString()} ₽</span>
            </div>
            <button onclick="event.stopPropagation(); addToCart(${p.id})" class="buy-btn">В корзину</button>
        </div>
    `).join('');
}
renderPhones();

// Поиск
function searchPhones() { renderPhones(); }

// Добавление в корзину
function addToCart(id) {
    const phone = phones.find(p => p.id===id);
    cart.push(phone);
    updateCart();
    tg.showAlert('Добавлено в корзину!');
}

// Обновление корзины
function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-items').innerHTML = cart.map(p => `<li>${p.fullName} — ${p.newPrice.toLocaleString()} ₽</li>`).join('');
}

// Вкладки
const tabs = { catalog: document.getElementById('tab-catalog'), cart: document.getElementById('tab-cart'), profile: document.getElementById('tab-profile') };
const btns = document.querySelectorAll('.tab-btn');
btns.forEach(btn => btn.onclick = () => {
    const tab = btn.dataset.tab;
    Object.values(tabs).forEach(t=>t.classList.remove('active'));
    Object.values(btns).forEach(b=>b.classList.remove('active'));
    tabs[tab].classList.add('active');
    btn.classList.add('active');
});

// Оформление заказа
document.getElementById('checkout-btn').onclick = () => {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    if(!name || !phone) return tg.showAlert('Введите имя и телефон!');
    if(cart.length===0) return tg.showAlert('Корзина пуста!');
    const order = cart.map(p => `${p.fullName} — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    tg.sendData(`Новый заказ:\n${order}\n\nИмя: ${name}\nТелефон: ${phone}\nИП Голиков Никита Сергеевич\nИНН: 253502067548`);
    cart = [];
    updateCart();
    tg.showAlert('Заказ отправлен!');
};
