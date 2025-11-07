const tg = window.Telegram.WebApp;

let phones = [
    { id: 1, name: "Samsung Galaxy S24", brand: "Samsung", price: 85000, oldPrice: 95000, desc: "Флагман Samsung 2024 года.", img: "https://via.placeholder.com/300x200/0099ff/ffffff?text=Samsung+S24" },
    { id: 2, name: "Honor 400 Pro", brand: "Honor", price: 56000, oldPrice: 63000, desc: "Современный смартфон Honor.", img: "https://via.placeholder.com/300x200/ff6666/ffffff?text=Honor+400+Pro" },
    { id: 3, name: "Huawei P70", brand: "Huawei", price: 72000, oldPrice: 79000, desc: "Камера и мощность в одном корпусе.", img: "https://via.placeholder.com/300x200/00cc99/ffffff?text=Huawei+P70" },
];

let cart = [];
let currentPhone = null;

const listEl = document.getElementById("phones-list");
const cartCount = document.getElementById("cart-count");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");

// ==== Загрузка товаров ====
function loadPhones() {
    listEl.innerHTML = "";
    document.getElementById("loader").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        phones.forEach(p => {
            const el = document.createElement("div");
            el.className = "phone-card";
            el.innerHTML = `
                <img src="${p.img}" alt="${p.name}">
                <div class="info">
                    <h4>${p.name}</h4>
                    <div class="price">
                        <span class="old-price">${p.oldPrice} ₽</span>
                        <span class="new-price">${p.price} ₽</span>
                    </div>
                </div>
            `;
            el.onclick = () => showPhoneDetail(p);
            listEl.appendChild(el);
        });
    }, 600);
}

// ==== Поиск ====
function searchPhones() {
    const q = document.getElementById("search-input").value.toLowerCase();
    listEl.innerHTML = "";
    phones.filter(p => p.name.toLowerCase().includes(q)).forEach(p => {
        const el = document.createElement("div");
        el.className = "phone-card";
        el.innerHTML = `<img src="${p.img}"><div class="info"><h4>${p.name}</h4></div>`;
        el.onclick = () => showPhoneDetail(p);
        listEl.appendChild(el);
    });
}

// ==== Сортировка ====
function sortPhones() {
    const val = document.getElementById("sort-select").value;
    if (val === "price-asc") phones.sort((a,b)=>a.price-b.price);
    if (val === "price-desc") phones.sort((a,b)=>b.price-a.price);
    if (val === "discount") phones.sort((a,b)=>(b.oldPrice-b.price)-(a.oldPrice-a.price));
    loadPhones();
}

// ==== Категории ====
function showBrand(brand) {
    closeSidebar();
    listEl.innerHTML = "";
    phones.filter(p=>p.brand===brand).forEach(p=>{
        const el=document.createElement("div");
        el.className="phone-card";
        el.innerHTML=`<img src="${p.img}"><div class="info"><h4>${p.name}</h4></div>`;
        el.onclick=()=>showPhoneDetail(p);
        listEl.appendChild(el);
    });
}
function showCategory() { closeSidebar(); loadPhones(); }

// ==== Детали ====
function showPhoneDetail(p) {
    currentPhone = p;
    document.getElementById("phones-container").classList.add("hidden");
    const d = document.getElementById("phone-detail");
    d.classList.remove("hidden");
    document.getElementById("phone-img").src = p.img;
    document.getElementById("phone-name").textContent = p.name;
    document.getElementById("phone-desc").textContent = p.desc;
    document.getElementById("old-price").textContent = p.oldPrice + " ₽";
    document.getElementById("new-price").textContent = p.price + " ₽";

    tg.BackButton.show();
    tg.BackButton.onClick(backToList);
}

function backToList() {
    document.getElementById("phone-detail").classList.add("hidden");
    document.getElementById("phones-container").classList.remove("hidden");
    tg.BackButton.hide();
}

// ==== Корзина ====
function addToCart(p) {
    cart.push(p);
    cartCount.textContent = cart.length;
    showToast("Добавлено в корзину ✅");
}

document.getElementById("cart-icon").onclick = () => {
    const modal = document.getElementById("cart-modal");
    modal.classList.remove("hidden");
    const list = document.getElementById("cart-items");
    list.innerHTML = cart.map(i => `<li>${i.name} — ${i.price} ₽</li>`).join("");
};
function closeCart() {
    document.getElementById("cart-modal").classList.add("hidden");
}

// ==== Сайдбар ====
document.getElementById("catalog-btn").onclick = ()=>{
    sidebar.classList.add("active");
    overlay.classList.remove("hidden");
};
function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.add("hidden");
}

// ==== Toast ====
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(()=>toast.classList.remove("show"), 2000);
}

// ==== Баннер автопрокрутка ====
let bannerIndex = 0;
setInterval(()=>{
    const banners=document.querySelectorAll(".banner");
    banners.forEach(b=>b.classList.remove("active"));
    bannerIndex=(bannerIndex+1)%banners.length;
    banners[bannerIndex].classList.add("active");
},3000);

// ==== Инициализация ====
loadPhones();
