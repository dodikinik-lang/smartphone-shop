const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const phones = [
    { id: 1, name:"Galaxy A17", fullName:"Samsung Galaxy A17", variant:"4Gb/128Gb чёрный EAC", img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg", img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg", oldPrice:15999, newPrice:14999, specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"], brand:"Samsung" },
    { id: 2, name:"Galaxy A17", fullName:"Samsung Galaxy A17", variant:"8Gb/256Gb чёрный EAC", img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg", img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg", oldPrice:20999, newPrice:19999, specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"], brand:"Samsung" },
    // добавь остальные телефоны сюда...
];

let cart = [];
let currentFilter = 'all';

// Вкладки
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.add('hidden'));
    if(tab==='catalog'){ document.querySelector('.tab-btn:nth-child(1)').classList.add('active'); document.getElementById('catalog-tab').classList.remove('hidden'); }
    if(tab==='info'){ document.querySelector('.tab-btn:nth-child(2)').classList.add('active'); document.getElementById('info-tab').classList.remove('hidden'); }
}

// Рендер телефонов
function renderPhones() {
    const list = document.getElementById('phones-list');
    let filtered = phones;
    const query = document.getElementById('search-input').value.toLowerCase();
    if(query) filtered = filtered.filter(p=>p.fullName.toLowerCase().includes(query)||p.variant.toLowerCase().includes(query));
    list.innerHTML = filtered.map(p=>`
        <div class="phone-card" onclick="showPhone(${p.id})">
            <div class="phone-images">
                <img src="${p.img}" alt="${p.fullName}">
                <img src="${p.img2}" alt="${p.fullName} задняя">
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
renderPhones();

// Поиск
function searchPhones() { renderPhones(); }

// Детали
function showPhone(id) {
    const phone = phones.find(p=>p.id===id);
    if(!phone) return;
    document.getElementById('detail-img').src = phone.img;
    document.getElementById('detail-name').textContent = phone.fullName;
    document.getElementById('detail-variant').textContent = phone.variant || '';
    document.getElementById('detail-specs').innerHTML = (phone.specs || []).map(s=>`<li>${s}</li>`).join('');
    document.getElementById('detail-old-price').textContent = phone.oldPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-new-price').textContent = phone.newPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-buy-btn').onclick = ()=>{ addToCart(phone.id); closeModal(); };
    document.getElementById('phone-detail-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModal() { document.getElementById('phone-detail-modal').classList.add('hidden'); document.getElementById('modal-overlay').classList.add('hidden'); }

// Корзина
document.getElementById('cart-icon').onclick = ()=>{
    const cartModal = document.getElementById('cart-modal');
    if(cartModal.classList.contains('hidden')) {
        cartModal.classList.remove('hidden');
    } else {
        cartModal.classList.add('hidden');
    }
};

// Модальное окно деталей телефона
function showPhone(id) {
    const phone = phones.find(p=>p.id===id);
    if(!phone) return;
    document.getElementById('detail-img').src = phone.img;
    document.getElementById('detail-name').textContent = phone.fullName;
    document.getElementById('detail-variant').textContent = phone.variant || '';
    document.getElementById('detail-specs').innerHTML = (phone.specs || []).map(s=>`<li>${s}</li>`).join('');
    document.getElementById('detail-old-price').textContent = phone.oldPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-new-price').textContent = phone.newPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-buy-btn').onclick = ()=>{
        addToCart(phone.id);
        closeModal();
    };
    document.getElementById('phone-detail-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('phone-detail-modal').classList.add('hidden');
    document.getElementById('modal-overlay').classList.add('hidden');
}

