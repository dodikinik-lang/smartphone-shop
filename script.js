const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const phones = [
    { id:1,name:"Galaxy A17",fullName:"Samsung Galaxy A17",variant:"4Gb/128Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a17-5g-2.jpg",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung"},
    { id:2,name:"Galaxy A26",fullName:"Samsung Galaxy A26",variant:"6Gb/128Gb синий EAC",img:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a26-2.jpg",oldPrice:22999,newPrice:21999,specs:["6.6\" Super AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung"},
    { id:3,name:"Honor X6C",fullName:"Honor X6C",variant:"6Gb/128Gb чёрный EAC",img:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-1.jpg",img2:"https://fdn2.gsmarena.com/vv/pics/honor/honor-x6c-2.jpg",oldPrice:9999,newPrice:9499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor"},
    // добавь остальные телефоны...
];

let cart = [];

// Вкладки
function switchTab(tab){
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c=>c.classList.add('hidden'));
    if(tab==='catalog'){ document.querySelector('.tab-btn:nth-child(1)').classList.add('active'); document.getElementById('catalog-tab').classList.remove('hidden'); }
    if(tab==='info'){ document.querySelector('.tab-btn:nth-child(2)').classList.add('active'); document.getElementById('info-tab').classList.remove('hidden'); }
}

// Рендер телефонов
function renderPhones(){
    const list=document.getElementById('phones-list');
    const query=document.getElementById('search-input').value.toLowerCase();
    let filtered=phones;
    if(query) filtered=filtered.filter(p=>p.fullName.toLowerCase().includes(query)||p.variant.toLowerCase().includes(query));
    list.innerHTML=filtered.map(p=>`
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
function searchPhones(){ renderPhones(); }

// Детали
function showPhone(id){
    const phone=phones.find(p=>p.id===id);
    if(!phone) return;
    document.getElementById('detail-img').src=phone.img;
    document.getElementById('detail-name').textContent=phone.fullName;
    document.getElementById('detail-variant').textContent=phone.variant||'';
    document.getElementById('detail-specs').innerHTML=(phone.specs||[]).map(s=>`<li>${s}</li>`).join('');
    document.getElementById('detail-old-price').textContent=phone.oldPrice.toLocaleString()+' ₽';
    document.getElementById('detail-new-price').textContent=phone.newPrice.toLocaleString()+' ₽';
    document.getElementById('detail-buy-btn').onclick=()=>{ addToCart(phone.id); closeModal(); };
    document.getElementById('phone-detail-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}
function closeModal(){
    document.getElementById('phone-detail-modal').classList.add('hidden');
    document.getElementById('modal-overlay').classList.add('hidden');
}

// Корзина
document.getElementById('cart-icon').onclick=()=>{
    const cartModal=document.getElementById('cart-modal');
    cartModal.classList.toggle('hidden');
};

function addToCart(id){
    const phone=phones.find(p=>p.id===id);
    cart.push(phone);
    updateCart();
    tg.showAlert('Добавлено в корзину!');
}

document.getElementById('checkout-btn').onclick=()=>{
    if(cart.length===0) return tg.showAlert('Корзина пуста!');
    const name=document.getElementById('user-name').value||"не указано";
    const phoneNumber=document.getElementById('user-phone').value||"не указано";
    const order=cart.map(p=>`${p.fullName} (${p.variant}) — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    tg.sendData(`Новый заказ:\n${order}\n\nИмя: ${name}\nТелефон: ${phoneNumber}\nИП Голиков Никита Сергеевич\nИНН: 253502067548`);
    cart=[];
    updateCart();
    document.getElementById('cart-modal').classList.add('hidden');
    tg.close();
};

function updateCart(){
    document.getElementById('cart-count').textContent=cart.length;
    document.getElementById('cart-items').innerHTML=cart.map(p=>`<li>${p.fullName} (${p.variant}) — ${p.newPrice.toLocaleString()} ₽</li>`).join('');
}
updateCart();
