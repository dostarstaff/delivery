// Темная/светлая тема
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (root.getAttribute('data-theme') === 'light') {
        root.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙'; // Темная тема
    } else {
        root.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌞'; // Светлая тема
    }
});

// Фильтрация объявлений
const searchInput = document.getElementById('search');
const adsContainer = document.getElementById('ads');
const priceFilter = document.getElementById('price-filter');
const cityFilter = document.getElementById('city-filter');

let ads = [
    { title: "Телефон", price: 5000, city: "city1", photo: "path/to/photo.jpg" },
    { title: "Футболка", price: 1000, city: "city2", photo: "path/to/photo.jpg" },
    // другие объявления
];

function renderAds() {
    adsContainer.innerHTML = '';
    const filteredAds = ads.filter(ad => {
        const searchMatch = ad.title.toLowerCase().includes(searchInput.value.toLowerCase());
        const priceMatch = priceFilter.value === 'all' || (priceFilter.value === 'low' && ad.price < 5000) || (priceFilter.value === 'high' && ad.price >= 5000);
        const cityMatch = cityFilter.value === 'all' || ad.city === cityFilter.value;
        return searchMatch && priceMatch && cityMatch;
    });

    filteredAds.forEach(ad => {
        const adElement = document.createElement('div');
        adElement.className = 'announcement-card';
        adElement.innerHTML = `
            <img src="${ad.photo}" alt="Фото товара">
            <div class="announcement-info">
                <h2>${ad.title}</h2>
                <p class="price">Цена: ${ad.price} ₽</p>
            </div>
        `;
        adsContainer.appendChild(adElement);
    });
}

searchInput.addEventListener('input', renderAds);
priceFilter.addEventListener('change', renderAds);
cityFilter.addEventListener('change', renderAds);

// Удаление объявления
function deleteAnnouncement() {
    alert('Объявление удалено');
    // Логика удаления
}

// Изначальная отрисовка
renderAds();
