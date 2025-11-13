const tg = window.Telegram.WebApp;
tg.ready(); 
tg.expand();

const phones = [
    {id:1,fullName:"Samsung Galaxy A17",variant:"4/128 чёрный",img:"./images/samsungA17black.jpg",oldPrice:15999,newPrice:14999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung",rating:4.5,reviews:24,isNew:true},
    {id:2,fullName:"Samsung Galaxy A17",variant:"8/256 чёрный",img:"./images/samsungA17black.jpg",oldPrice:20999,newPrice:19999,specs:["6.5\" PLS","Helio G85","50MP","5000 mAh"],brand:"Samsung",rating:4.7,reviews:18},
    {id:3,fullName:"Samsung Galaxy A26",variant:"6/128 синий",img:"./images/samsungA26blue.jpg",oldPrice:22999,newPrice:21999,specs:["6.6\" AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung",rating:4.3,reviews:31},
    {id:4,fullName:"Samsung Galaxy A26",variant:"8/256 чёрный",img:"./images/samsungA26black.jpg",oldPrice:25999,newPrice:24999,specs:["6.6\" AMOLED","Exynos 1330","48MP","5000 mAh"],brand:"Samsung",rating:4.6,reviews:22},
    {id:5,fullName:"Samsung Galaxy A36",variant:"8/128 белый",img:"./images/samsungA36white.jpg",oldPrice:28999,newPrice:27499,specs:["6.7\" AMOLED","Exynos 1380","50MP","5000 mAh"],brand:"Samsung",rating:4.8,reviews:15,isNew:true},
    {id:6,fullName:"Samsung Galaxy A36",variant:"8/256 чёрный",img:"./images/samsungA36black.jpg",oldPrice:32999,newPrice:31499,specs:["6.7\" AMOLED","Exynos 1380","50MP","5000 mAh"],brand:"Samsung",rating:4.4,reviews:28},
    {id:7,fullName:"Samsung Galaxy A56",variant:"8/128 зелёный",img:"./images/samsungA56green.jpg",oldPrice:35999,newPrice:34499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung",rating:4.9,reviews:12},
    {id:8,fullName:"Samsung Galaxy A56",variant:"8/256 чёрный",img:"./images/samsungA56black.jpg",oldPrice:39999,newPrice:35499,specs:["6.7\" AMOLED 120Hz","Exynos 1480","50MP","5000 mAh"],brand:"Samsung",rating:4.7,reviews:19},
    {id:9,fullName:"Honor X6C",variant:"6/128 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X6C",oldPrice:9999,newPrice:9499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor",rating:4.2,reviews:45,isNew:true},
    {id:10,fullName:"Honor X6C",variant:"6/256 синий",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X6C",oldPrice:11999,newPrice:11499,specs:["6.5\" IPS","Helio G85","50MP","5000 mAh"],brand:"Honor",rating:4.0,reviews:38},
    {id:11,fullName:"Honor X7C",variant:"6/128 белый",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X7C",oldPrice:13999,newPrice:12499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor",rating:4.5,reviews:26},
    {id:12,fullName:"Honor X7C",variant:"8/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X7C",oldPrice:16999,newPrice:15499,specs:["6.6\" AMOLED","Snapdragon 680","64MP","5000 mAh"],brand:"Honor",rating:4.3,reviews:33},
    {id:13,fullName:"Honor X8C",variant:"8/128 серебр.",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X8C",oldPrice:17999,newPrice:16499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor",rating:4.7,reviews:17},
    {id:14,fullName:"Honor X8C",variant:"8/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X8C",oldPrice:19999,newPrice:18499,specs:["6.7\" AMOLED 120Hz","Snapdragon 7 Gen 1","108MP","4500 mAh"],brand:"Honor",rating:4.6,reviews:21},
    {id:15,fullName:"Honor X9C",variant:"8/256 золотой",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=X9C",oldPrice:24999,newPrice:23999,specs:["6.78\" OLED 120Hz","Snapdragon 8 Gen 2","200MP","5000 mAh"],brand:"Honor",rating:4.9,reviews:8,isNew:true},
    {id:16,fullName:"Honor 400 Lite",variant:"8/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=400+Lite",oldPrice:24999,newPrice:21499,specs:["6.7\" AMOLED","Dimensity 6020","108MP","5000 mAh"],brand:"Honor",rating:4.1,reviews:29},
    {id:17,fullName:"Honor 400",variant:"8/256 белый",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=400",oldPrice:36999,newPrice:33999,specs:["6.78\" OLED","Snapdragon 8 Gen 3","50MP","5300 mAh"],brand:"Honor",rating:4.8,reviews:14},
    {id:18,fullName:"Honor 400 Pro",variant:"12/256 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=400+Pro",oldPrice:56999,newPrice:51999,specs:["6.8\" OLED 120Hz","Snapdragon 8 Gen 3","200MP","5500 mAh"],brand:"Honor",rating:5.0,reviews:5},
    {id:19,fullName:"Huawei nova Y63",variant:"4/128 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=Y63",oldPrice:9999,newPrice:8499,specs:["6.52\" IPS","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei",rating:3.9,reviews:52},
    {id:20,fullName:"Huawei nova Y73",variant:"8/256 синий",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=Y73",oldPrice:14999,newPrice:13499,specs:["6.75\" IPS 90Hz","Snapdragon 680","50MP","5000 mAh"],brand:"Huawei",rating:4.2,reviews:37},
    {id:21,fullName:"Huawei nova 14",variant:"12/256 розовый",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=nova+14",oldPrice:33999,newPrice:21999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei",rating:4.6,reviews:23,isNew:true},
    {id:22,fullName:"Huawei nova 14",variant:"12/512 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=nova+14",oldPrice:36999,newPrice:33999,specs:["6.7\" OLED","Kirin 8000","60MP","4500 mAh"],brand:"Huawei",rating:4.4,reviews:27},
    {id:23,fullName:"Huawei nova 14 Pro",variant:"12/512 чёрный",img:"https://via.placeholder.com/150x200/f0f0f0/666?text=nova+14+Pro",oldPrice:46999,newPrice:44999,specs:["6.78\" OLED 120Hz","Kirin 9000","50MP","4500 mAh"],brand:"Huawei",rating:4.7,reviews:16}
];

let cart = [];
let compareList = [];
let favorites = [];
let viewHistory = [];
let currentBrand = 'all';
let currentSort = 'default';
let searchTimeout;
let pressTimer;
const PRESS_DURATION = 500;

// === ТЕМНАЯ ТЕМА ===
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    showNotification(newTheme === 'dark' ? 'Темная тема включена' : 'Светлая тема включена');
}

// === УПРАВЛЕНИЕ МОДАЛЬНЫМИ ОКНАМИ ===
function openCartModal() {
    document.getElementById('cart-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
    document.getElementById('modal-overlay').classList.add('hidden');
}

// === БЫСТРЫЙ ПРОСМОТР ===
function startPressTimer(id) {
    pressTimer = setTimeout(() => {
        showQuickView(id);
    }, PRESS_DURATION);
}

function cancelPressTimer() {
    clearTimeout(pressTimer);
}

function showQuickView(id) {
    const p = phones.find(x => x.id === id);
    tg.showPopup({
        title: p.fullName,
        message: `${p.variant}\n${p.specs.join(' • ')}\n\n💰 ${p.newPrice.toLocaleString()} ₽`,
        buttons: [
            {type: 'default', text: 'В корзину', id: 'add'},
            {type: 'default', text: 'Подробнее', id: 'details'},
            {type: 'cancel', text: 'Закрыть'}
        ]
    }, (btnId) => {
        if (btnId === 'add') addToCart(id);
        if (btnId === 'details') showPhone(id);
    });
}

// === УЛУЧШЕННАЯ КОРЗИНА ===
function getCartTotal() {
    return cart.reduce((total, item) => total + item.newPrice, 0);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.getElementById('notifications-container').appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// === УЛУЧШЕННОЕ ДОБАВЛЕНИЕ В КОРЗИНУ ===
function addToCart(id) {
    const p = phones.find(x => x.id === id);
    cart.push(p);
    updateCart();
    
    // Анимация кнопки
    const button = event?.target;
    if (button) {
        button.classList.add('added-to-cart');
        setTimeout(() => button.classList.remove('added-to-cart'), 400);
    }
    
    // Вибро-отклик (если доступно)
    if (window.navigator.vibrate) {
        window.navigator.vibrate(50);
    }
    
    showNotification('Товар добавлен в корзину!');
}

// === СОРТИРОВКА ===
function applySort() {
    currentSort = document.getElementById('sort-select').value;
    applyFilters();
}

function sortProducts(products, sortType) {
    const sorted = [...products];
    switch(sortType) {
        case 'price_asc':
            return sorted.sort((a, b) => a.newPrice - b.newPrice);
        case 'price_desc':
            return sorted.sort((a, b) => b.newPrice - a.newPrice);
        case 'name_asc':
            return sorted.sort((a, b) => a.fullName.localeCompare(b.fullName));
        case 'name_desc':
            return sorted.sort((a, b) => b.fullName.localeCompare(a.fullName));
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        case 'popular':
            return sorted.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
        default:
            return products;
    }
}

// === РЕЙТИНГ ===
function renderRating(rating, reviews = 0) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHtml += '★';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHtml += '½';
        } else {
            starsHtml += '☆';
        }
    }
    
    return `<div class="rating">
        <span class="stars">${starsHtml}</span>
        <span class="rating-value">${rating}</span>
        ${reviews > 0 ? `<span class="reviews">(${reviews})</span>` : ''}
    </div>`;
}

// === СРАВНЕНИЕ ===
function addToCompare(id) {
    if (compareList.length >= 3) {
        showNotification('Можно сравнить не более 3 товаров', 'warning');
        return;
    }
    if (compareList.includes(id)) {
        showNotification('Товар уже в списке сравнения', 'warning');
        return;
    }
    compareList.push(id);
    updateCompare();
    showNotification('Товар добавлен к сравнению');
}

function removeFromCompare(id) {
    compareList = compareList.filter(item => item !== id);
    updateCompare();
}

function showCompare() {
    if (compareList.length < 2) {
        showNotification('Добавьте минимум 2 товара для сравнения', 'warning');
        return;
    }
    
    const compareItems = compareList.map(id => phones.find(p => p.id === id));
    document.getElementById('compare-list').innerHTML = compareItems.map(p => `
        <div class="compare-item">
            <img src="${p.img}" alt="${p.fullName}" onerror="this.src='https://via.placeholder.com/50x50/f0f0f0/666?text=Нет'">
            <div style="flex: 1; padding: 0 12px;">
                <strong>${p.fullName}</strong>
                <div>${p.variant}</div>
                <div>${p.newPrice.toLocaleString()} ₽</div>
            </div>
            <button class="remove-item" onclick="removeFromCompare(${p.id})">×</button>
        </div>
    `).join('');
    
    document.getElementById('compare-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function updateCompare() {
    document.getElementById('compare-count').textContent = compareList.length;
    localStorage.setItem('compareList', JSON.stringify(compareList));
}

// === ИЗБРАННОЕ ===
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('Удалено из избранного');
    } else {
        favorites.push(id);
        showNotification('Добавлено в избранное');
    }
    updateFavorites();
    saveToStorage();
}

function updateFavorites() {
    const favoriteItems = favorites.map(id => phones.find(p => p.id === id));
    document.getElementById('favorites-list').innerHTML = favoriteItems.length ? 
        favoriteItems.map(p => `
            <div class="favorite-item" onclick="showPhone(${p.id})">
                <img src="${p.img}" alt="${p.fullName}" onerror="this.src='https://via.placeholder.com/60x60/f0f0f0/666?text=Нет'">
                <div class="favorite-info">
                    <strong>${p.fullName}</strong>
                    <div>${p.variant}</div>
                    <div class="price">
                        <span class="old">${p.oldPrice.toLocaleString()} ₽</span>
                        <span class="new">${p.newPrice.toLocaleString()} ₽</span>
                    </div>
                </div>
                <button class="remove-item" onclick="event.stopPropagation(); toggleFavorite(${p.id})">×</button>
            </div>
        `).join('') : '<p style="text-align: center; color: #666;">Нет избранных товаров</p>';
}

// === ИСТОРИЯ ПРОСМОТРОВ ===
function addToHistory(id) {
    const existingIndex = viewHistory.findIndex(item => item.id === id);
    if (existingIndex > -1) {
        viewHistory.splice(existingIndex, 1);
    }
    viewHistory.unshift({id, timestamp: Date.now()});
    
    if (viewHistory.length > 10) viewHistory = viewHistory.slice(0, 10);
    updateHistory();
    saveToStorage();
}

function updateHistory() {
    const historyItems = viewHistory.map(item => {
        const phone = phones.find(p => p.id === item.id);
        return {...phone, timestamp: item.timestamp};
    });
    
    document.getElementById('history-list').innerHTML = historyItems.length ? 
        historyItems.map(p => `
            <div class="history-item" onclick="showPhone(${p.id})">
                <img src="${p.img}" alt="${p.fullName}" onerror="this.src='https://via.placeholder.com/60x60/f0f0f0/666?text=Нет'">
                <div class="history-info">
                    <strong>${p.fullName}</strong>
                    <div>${p.variant}</div>
                    <div>${p.newPrice.toLocaleString()} ₽</div>
                    <small>${new Date(p.timestamp).toLocaleDateString()}</small>
                </div>
            </div>
        `).join('') : '<p style="text-align: center; color: #666;">История просмотров пуста</p>';
}

// === РЕКОМЕНДАЦИИ ===
function getRecommendations() {
    // Простая логика рекомендаций на основе популярности и новизны
    return phones
        .filter(p => p.rating >= 4.5 || p.isNew)
        .sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews))
        .slice(0, 4);
}

function updateRecommendations() {
    const recommendations = getRecommendations();
    if (recommendations.length > 0) {
        document.getElementById('recommendations-section').classList.remove('hidden');
        document.getElementById('recommendations-list').innerHTML = recommendations.map(p => `
            <div class="recommendation-card" onclick="showPhone(${p.id})">
                <img src="${p.img}" alt="${p.fullName}" onerror="this.src='https://via.placeholder.com/60x60/f0f0f0/666?text=Нет'">
                <h4>${p.fullName}</h4>
                <div class="price">${p.newPrice.toLocaleString()} ₽</div>
            </div>
        `).join('');
    } else {
        document.getElementById('recommendations-section').classList.add('hidden');
    }
}

// === ПРОМОКОДЫ ===
function applyPromoCode() {
    tg.showPopup({
        title: 'Промокод',
        message: 'Введите промокод для скидки:',
        buttons: [
            {type: 'default', text: 'Применить', id: 'apply'},
            {type: 'cancel', text: 'Отмена'}
        ]
    }, (btnId) => {
        if (btnId === 'apply') {
            const promoCode = prompt('Введите промокод:');
            if (promoCode === 'SALE10') {
                showNotification('Промокод применен! Скидка 10%', 'success');
                // Здесь можно добавить логику применения скидки
            } else if (promoCode === 'WELCOME5') {
                showNotification('Промокод применен! Скидка 5%', 'success');
            } else {
                showNotification('Неверный промокод', 'error');
            }
        }
    });
}

// === LOCALSTORAGE ===
function saveToStorage() {
    localStorage.setItem('smartphoneShopCart', JSON.stringify(cart));
    localStorage.setItem('compareList', JSON.stringify(compareList));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('viewHistory', JSON.stringify(viewHistory));
}

function loadFromStorage() {
    const savedCart = localStorage.getItem('smartphoneShopCart');
    const savedCompare = localStorage.getItem('compareList');
    const savedFavorites = localStorage.getItem('favorites');
    const savedHistory = localStorage.getItem('viewHistory');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedCompare) compareList = JSON.parse(savedCompare);
    if (savedFavorites) favorites = JSON.parse(savedFavorites);
    if (savedHistory) viewHistory = JSON.parse(savedHistory);
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
}

// === УЛУЧШЕННЫЙ ПОИСК ===
function debouncedSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        applyFilters();
    }, 300);
}

// === АНИМАЦИЯ ЗАГРУЗКИ ИЗОБРАЖЕНИЙ ===
function handleImageLoad(img) {
    img.style.opacity = '0';
    setTimeout(() => {
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '1';
    }, 100);
}

// === РЕНДЕР КАРТОЧЕК ===
function applyFilters() {
    const query = document.getElementById('search-input').value.toLowerCase();
    let filtered = phones;
    
    if (currentBrand !== 'all') filtered = filtered.filter(p => p.brand === currentBrand);
    if (query) filtered = filtered.filter(p => 
        p.fullName.toLowerCase().includes(query) || 
        p.variant.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
    );
    
    // Применяем сортировку
    filtered = sortProducts(filtered, currentSort);
    
    document.getElementById('phones-list').innerHTML = filtered.map(p => `
        <div class="phone-card-mini" 
             onclick="showPhone(${p.id})"
             onmousedown="startPressTimer(${p.id})" 
             onmouseup="cancelPressTimer()"
             onmouseleave="cancelPressTimer()"
             ontouchstart="startPressTimer(${p.id})" 
             ontouchend="cancelPressTimer()">
            ${p.isNew ? '<div class="new-badge">NEW</div>' : ''}
            <div class="quick-actions">
                <button class="compare-btn-small" onclick="event.stopPropagation(); addToCompare(${p.id})">⚖️</button>
                <button class="favorite-btn ${favorites.includes(p.id) ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleFavorite(${p.id})">❤️</button>
            </div>
            <img src="${p.img}" alt="${p.fullName}" 
                 onerror="this.src='https://via.placeholder.com/150x200/f0f0f0/666?text=Нет+фото'" 
                 loading="lazy"
                 onload="handleImageLoad(this)">
            <div class="info">
                <h4>${p.fullName}</h4>
                <div class="variant">${p.variant}</div>
                ${p.rating ? renderRating(p.rating, p.reviews) : ''}
                <div class="price">
                    <span class="old">${p.oldPrice.toLocaleString()} ₽</span>
                    <span class="new">${p.newPrice.toLocaleString()} ₽</span>
                </div>
                <button onclick="event.stopPropagation(); addToCart(${p.id})" class="buy-mini">
                    В корзину
                </button>
            </div>
        </div>
    `).join('');
}

// === ФИЛЬТРЫ ===
function filterByBrand(brand) {
    currentBrand = brand;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.brand === brand));
    applyFilters();
}

// === ТАБЫ ===
function switchTab(t) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    
    if (t === 'catalog') { 
        document.querySelector('.tab-btn:nth-child(1)').classList.add('active'); 
        document.getElementById('catalog-tab').classList.remove('hidden'); 
    } else if (t === 'info') { 
        document.querySelector('.tab-btn:nth-child(2)').classList.add('active'); 
        document.getElementById('info-tab').classList.remove('hidden'); 
    } else if (t === 'history') { 
        document.querySelector('.tab-btn:nth-child(3)').classList.add('active'); 
        document.getElementById('history-tab').classList.remove('hidden'); 
        updateHistory();
        updateFavorites();
    }
}

// === ДЕТАЛИ ТОВАРА ===
function showPhone(id) {
    const p = phones.find(x => x.id === id);
    const img = document.getElementById('detail-img');
    img.src = p.img;
    img.onerror = () => { img.src = 'https://via.placeholder.com/300x400/f0f0f0/666?text=Нет+фото'; };
    document.getElementById('detail-name').textContent = p.fullName;
    document.getElementById('detail-variant').textContent = p.variant;
    document.getElementById('detail-specs').innerHTML = p.specs.map(s => `<li>${s}</li>`).join('');
    document.getElementById('detail-old-price').textContent = p.oldPrice.toLocaleString() + ' ₽';
    document.getElementById('detail-new-price').textContent = p.newPrice.toLocaleString() + ' ₽';
    
    // Рейтинг
    if (p.rating) {
        document.getElementById('detail-rating').innerHTML = renderRating(p.rating, p.reviews);
    } else {
        document.getElementById('detail-rating').innerHTML = '';
    }
    
    // Кнопки действий
    document.getElementById('detail-buy-btn').onclick = () => { addToCart(id); closeAllModals(); };
    document.getElementById('detail-compare-btn').onclick = () => { addToCompare(id); };
    document.getElementById('detail-favorite-btn').onclick = () => { 
        toggleFavorite(id); 
        document.getElementById('detail-favorite-btn').classList.toggle('active', favorites.includes(id));
    };
    document.getElementById('detail-favorite-btn').className = `favorite-btn ${favorites.includes(id) ? 'active' : ''}`;
    
    document.getElementById('phone-detail-modal').classList.remove('hidden');
    document.getElementById('modal-overlay').classList.remove('hidden');
    
    // Добавляем в историю
    addToHistory(id);
}

// === КОРЗИНА ===
function removeFromCart(i) { 
    tg.showPopup({
        title: "Удалить товар?",
        message: "Вы уверены, что хотите удалить товар из корзины?",
        buttons: [
            {type: 'destructive', text: 'Удалить', id: 'delete'},
            {type: 'cancel', text: 'Отмена', id: 'cancel'}
        ]
    }, (btnId) => {
        if (btnId === 'delete') {
            cart.splice(i, 1);
            updateCart();
            showNotification('Товар удален из корзины', 'warning');
        }
    });
}

function clearCart() { 
    tg.showPopup({
        title: "Очистить корзину?",
        message: "Вы уверены, что хотите очистить всю корзину?",
        buttons: [
            {type: 'destructive', text: 'Очистить', id: 'clear'},
            {type: 'cancel', text: 'Отмена', id: 'cancel'}
        ]
    }, (btnId) => {
        if (btnId === 'clear') {
            cart = []; 
            updateCart(); 
            showNotification('Корзина очищена', 'warning');
        }
    });
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    
    const total = getCartTotal();
    document.getElementById('cart-items').innerHTML = cart.length === 0 ? 
        '<li style="text-align: center; padding: 20px; color: #666;">Корзина пуста</li>' :
        cart.map((p,i) => `
            <li>
                <div class="cart-item-text">
                    <strong>${p.fullName}</strong>
                    <div style="font-size: 12px; color: #666;">${p.variant}</div>
                </div>
                <div class="cart-item-price">${p.newPrice.toLocaleString()} ₽</div>
                <button class="remove-item" onclick="event.stopPropagation(); removeFromCart(${i})">×</button>
            </li>
        `).join('');
    
    document.getElementById('cart-total-price').textContent = total.toLocaleString();
    saveToStorage();
}

// === ОПЛАТА В TON ===
function checkout() {
    if (!cart.length) return showNotification('Корзина пуста!', 'error');
    
    const name = document.getElementById('user-name').value.trim();
    const tel = document.getElementById('user-phone').value.trim();
    
    // Проверка данных пользователя
    if (!name || !tel) {
        showNotification('Пожалуйста, заполните ваши данные во вкладке "Ваши данные"', 'error');
        switchTab('info');
        closeAllModals();
        return;
    }
    
    const totalRUB = cart.reduce((s,p) => s + p.newPrice, 0);
    const totalTON = (totalRUB / 500).toFixed(4);
    const orderText = cart.map(p => `${p.fullName} (${p.variant}) — ${p.newPrice.toLocaleString()} ₽`).join('\n');
    const wallet = 'UQDHgEkatlXaVCujXHE-xmCFiEdRATslkkQHqTEVcK_hfZhB';

    tg.showPopup({
        title: 'Оплата в TON',
        message: `Сумма: ${totalRUB.toLocaleString()} ₽\nК оплате: ${totalTON} TON\n\nАдрес кошелька:\n\`${wallet}\``,
        buttons: [{type:'ok',text:'Я оплатил',id:'paid'},{type:'cancel',text:'Отмена'}]
    }, (btnId) => {
        if (btnId === 'paid') {
            const orderData = {
                products: cart.map(p => `${p.fullName} (${p.variant}) - ${p.newPrice} ₽`),
                total: totalRUB,
                totalTON: totalTON,
                customer: { name, tel },
                wallet: wallet
            };
            
            tg.sendData(JSON.stringify(orderData));
            cart = []; 
            updateCart(); 
            closeAllModals();
            showNotification('Заказ отправлен! Ожидайте подтверждения.'); 
            setTimeout(() => tg.close(), 2000);
        }
    });
}

// === ИНИЦИАЛИЗАЦИЯ ===
function initApp() {
    // Назначаем обработчики событий
    document.getElementById('cart-icon').onclick = openCartModal;
    document.getElementById('clear-cart').onclick = clearCart;
    document.getElementById('checkout-btn').onclick = checkout;
    
    // Загружаем данные из localStorage
    loadFromStorage();
    
    // Гарантируем, что корзина закрыта при загрузке
    closeAllModals();
    
    // Автозаполнение данных пользователя из Telegram
    const user = tg.initDataUnsafe.user;
    if (user) {
        const userName = user.first_name + (user.last_name ? ' ' + user.last_name : '');
        document.getElementById('user-name').value = userName || '';
        if (user.username) {
            document.getElementById('user-phone').value = `@${user.username}`;
        }
    }

    applyFilters();
    updateCart();
    updateCompare();
    updateRecommendations();
}

// Запускаем приложение после полной загрузки DOM
document.addEventListener('DOMContentLoaded', initApp);
