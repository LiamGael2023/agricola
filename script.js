// ===== Product Catalog =====
const products = [
    // Vegetables
    {
        id: 1,
        name: 'Tomates Orgánicos',
        description: 'Tomates frescos cultivados sin pesticidas',
        price: 3.50,
        unit: 'kg',
        category: 'vegetables',
        icon: '🍅'
    },
    {
        id: 2,
        name: 'Lechugas Hidropónicas',
        description: 'Lechugas crujientes cultivadas en invernadero',
        price: 2.00,
        unit: 'unidad',
        category: 'vegetables',
        icon: '🥬'
    },
    {
        id: 3,
        name: 'Zanahorias Premium',
        description: 'Zanahorias dulces y nutritivas',
        price: 2.75,
        unit: 'kg',
        category: 'vegetables',
        icon: '🥕'
    },
    {
        id: 4,
        name: 'Papas Amarillas',
        description: 'Papas de primera calidad para cocinar',
        price: 1.80,
        unit: 'kg',
        category: 'vegetables',
        icon: '🥔'
    },
    {
        id: 5,
        name: 'Brócoli Fresco',
        description: 'Brócoli verde rico en vitaminas',
        price: 3.20,
        unit: 'kg',
        category: 'vegetables',
        icon: '🥦'
    },
    {
        id: 6,
        name: 'Pimientos Rojos',
        description: 'Pimientos dulces y jugosos',
        price: 4.00,
        unit: 'kg',
        category: 'vegetables',
        icon: '🫑'
    },

    // Fruits
    {
        id: 7,
        name: 'Manzanas Rojas',
        description: 'Manzanas dulces y jugosas',
        price: 4.00,
        unit: 'kg',
        category: 'fruits',
        icon: '🍎'
    },
    {
        id: 8,
        name: 'Fresas Orgánicas',
        description: 'Fresas frescas del campo',
        price: 5.50,
        unit: 'kg',
        category: 'fruits',
        icon: '🍓'
    },
    {
        id: 9,
        name: 'Sandías Dulces',
        description: 'Sandías jugosas y refrescantes',
        price: 3.00,
        unit: 'kg',
        category: 'fruits',
        icon: '🍉'
    },
    {
        id: 10,
        name: 'Aguacates Hass',
        description: 'Aguacates cremosos premium',
        price: 6.00,
        unit: 'kg',
        category: 'fruits',
        icon: '🥑'
    },
    {
        id: 11,
        name: 'Plátanos',
        description: 'Plátanos maduros perfectos',
        price: 2.50,
        unit: 'kg',
        category: 'fruits',
        icon: '🍌'
    },
    {
        id: 12,
        name: 'Naranjas Frescas',
        description: 'Naranjas jugosas para jugo',
        price: 3.80,
        unit: 'kg',
        category: 'fruits',
        icon: '🍊'
    },

    // Grains
    {
        id: 13,
        name: 'Arroz Integral',
        description: 'Arroz integral de grano largo',
        price: 3.80,
        unit: 'kg',
        category: 'grains',
        icon: '🌾'
    },
    {
        id: 14,
        name: 'Quinua Orgánica',
        description: 'Quinua de alta calidad nutricional',
        price: 8.50,
        unit: 'kg',
        category: 'grains',
        icon: '🌾'
    },
    {
        id: 15,
        name: 'Maíz Dulce',
        description: 'Mazorcas de maíz fresco',
        price: 1.50,
        unit: 'unidad',
        category: 'grains',
        icon: '🌽'
    },
    {
        id: 16,
        name: 'Frijoles Negros',
        description: 'Frijoles secos de primera',
        price: 4.20,
        unit: 'kg',
        category: 'grains',
        icon: '🫘'
    },

    // Herbs
    {
        id: 17,
        name: 'Albahaca Fresca',
        description: 'Albahaca aromática recién cortada',
        price: 2.00,
        unit: 'manojo',
        category: 'herbs',
        icon: '🌿'
    },
    {
        id: 18,
        name: 'Cilantro Orgánico',
        description: 'Cilantro fresco para tus platillos',
        price: 1.50,
        unit: 'manojo',
        category: 'herbs',
        icon: '🌿'
    },
    {
        id: 19,
        name: 'Perejil',
        description: 'Perejil fresco y aromático',
        price: 1.50,
        unit: 'manojo',
        category: 'herbs',
        icon: '🌿'
    },
    {
        id: 20,
        name: 'Menta Fresca',
        description: 'Menta refrescante para infusiones',
        price: 1.80,
        unit: 'manojo',
        category: 'herbs',
        icon: '🌿'
    }
];

// ===== Shopping Cart State =====
let cart = [];
let currentFilter = 'all';
let isLoggedIn = false; // Track user login status

// ===== Gallery Images =====
const galleryImages = [
    { src: 'https://images.unsplash.com/photo-500382017468-9049fed747ef?w=1200', caption: 'Campo de trigo dorado' },
    { src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200', caption: 'Cultivo de hortalizas frescas' },
    { src: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=1200', caption: 'Tomates cherry maduros' },
    { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200', caption: 'Invernadero moderno' },
    { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200', caption: 'Tiempo de cosecha' },
    { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200', caption: 'Tractor trabajando el campo' },
    { src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200', caption: 'Plantas jóvenes creciendo' },
    { src: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=1200', caption: 'Zanahorias frescas orgánicas' }
];

// Hero content for each slide
const heroContent = [
    {
        title: 'Productos Agrícolas de Calidad',
        description: 'Directamente del campo a tu mesa. Productos frescos y naturales.'
    },
    {
        title: 'Cosechas Abundantes Todo el Año',
        description: 'Maximiza tu producción agrícola con nuestros productos premium.'
    },
    {
        title: 'Frescura Garantizada',
        description: 'Productos de primera calidad seleccionados cuidadosamente para ti.'
    }
];

// ===== Carousel State =====
let currentGallerySlide = 0;
let currentHeroSlide = 0;
let currentImageIndex = 0;
const totalGallerySlides = 2;
const totalHeroSlides = 3;

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    updateCartUI();

    // Start hero slideshow
    startHeroSlideshow();

    // Start gallery carousel auto-play
    startGalleryAutoPlay();

    // Keyboard events for lightbox
    document.addEventListener('keydown', handleKeyboard);
});

// ===== Render Products =====
function renderProducts(filter = 'all') {
    const grid = document.getElementById('productGrid');
    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                ${product.icon}
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="product-unit">por ${product.unit}</div>
                    </div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Get Category Name =====
function getCategoryName(category) {
    const names = {
        vegetables: 'Vegetales',
        fruits: 'Frutas',
        grains: 'Granos',
        herbs: 'Hierbas',
        dairy: 'Lácteos',
        meat: 'Carnes',
        organic: 'Orgánicos'
    };
    return names[category] || category;
}

// ===== Filter Products =====
function filterProducts(category) {
    currentFilter = category;
    renderProducts(category);
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// ===== Search Products =====
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

    if (searchTerm === '') {
        renderProducts(currentFilter);
        return;
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    const grid = document.getElementById('productGrid');
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);">No se encontraron productos</p>';
        showNotification('No se encontraron productos');
    } else {
        grid.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <div class="product-image">
                    ${product.icon}
                </div>
                <div class="product-info">
                    <span class="product-category">${getCategoryName(product.category)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <div>
                            <div class="product-price">$${product.price.toFixed(2)}</div>
                            <div class="product-unit">por ${product.unit}</div>
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Agregar
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        showNotification(`Se encontraron ${filteredProducts.length} producto(s)`);
    }

    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// ===== Category Carousel =====
function scrollCategories(direction) {
    const carousel = document.getElementById('categoryCarousel');
    const scrollAmount = 200;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// ===== Add to Cart =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} agregado al carrito`);
}

// ===== Remove from Cart =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// ===== Update Quantity =====
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// ===== Update Cart UI =====
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} / ${item.unit}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ===== Toggle Cart =====
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.querySelector('.cart-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// ===== Show Notification =====
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    notificationText.textContent = message;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
}

// ===== Local Storage =====
function saveCart() {
    localStorage.setItem('agricola-cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('agricola-cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }
    }
}

// ===== Checkout =====
function checkout() {
    // Check if user is logged in
    if (!isLoggedIn) {
        openLoginModal();
        showNotification('Debes iniciar sesión para proceder al pago');
        return;
    }

    if (cart.length === 0) {
        showNotification('Tu carrito está vacío');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    alert(`¡Gracias por tu compra! 🌾

Resumen:
- ${itemCount} producto(s)
- Total: $${total.toFixed(2)}

En una aplicación real, aquí se procesaría el pago y se enviaría el pedido.`);

    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

// ===== Hero Slideshow =====
function goToHeroSlide(index) {
    currentHeroSlide = index;
    updateHeroSlideshow();
}

function updateHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    const heroTitle = document.getElementById('heroTitle');
    const heroDescription = document.getElementById('heroDescription');

    // Update slides
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentHeroSlide);
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentHeroSlide);
    });

    // Update text content
    if (heroContent[currentHeroSlide]) {
        heroTitle.textContent = heroContent[currentHeroSlide].title;
        heroDescription.textContent = heroContent[currentHeroSlide].description;
    }
}

function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
    updateHeroSlideshow();
}

function startHeroSlideshow() {
    setInterval(nextHeroSlide, 4000);
}

// ===== Gallery Carousel =====
function moveCarousel(direction) {
    currentGallerySlide += direction;
    if (currentGallerySlide < 0) currentGallerySlide = totalGallerySlides - 1;
    if (currentGallerySlide >= totalGallerySlides) currentGallerySlide = 0;
    updateGalleryCarousel();
}

function goToSlide(index) {
    currentGallerySlide = index;
    updateGalleryCarousel();
}

function updateGalleryCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.style.transform = `translateX(-${currentGallerySlide * 100}%)`;

    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentGallerySlide);
    });
}

function startGalleryAutoPlay() {
    setInterval(() => {
        moveCarousel(1);
    }, 5000);
}

// ===== Lightbox =====
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = galleryImages[index].src;
    lightboxImage.alt = galleryImages[index].caption;
    lightboxCaption.textContent = galleryImages[index].caption;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;

    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = galleryImages[currentImageIndex].src;
    lightboxImage.alt = galleryImages[currentImageIndex].caption;
    lightboxCaption.textContent = galleryImages[currentImageIndex].caption;
}

// ===== Keyboard Events =====
function handleKeyboard(e) {
    const lightbox = document.getElementById('lightbox');
    const cartSidebar = document.getElementById('cartSidebar');

    if (e.key === 'Escape') {
        if (lightbox.classList.contains('active')) {
            closeLightbox();
        } else if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }

    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    }

    if (e.key === 'Enter' && document.activeElement.id === 'searchInput') {
        performSearch();
    }
}

// ===== Close Lightbox on Background Click =====
document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// ===== Login Modal Functions =====
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('loginModal');
    if (e.target === modal) {
        closeLoginModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('loginModal');
        if (modal && modal.classList.contains('active')) {
            closeLoginModal();
        }
    }
});

// ===== Handle Login =====
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulación de login
    showNotification('Iniciando sesión...');

    setTimeout(() => {
        isLoggedIn = true;
        showNotification('¡Bienvenido! Inicio de sesión exitoso.');
        closeLoginModal();
        // In a real application, here you would verify credentials
        // and update user state
    }, 1500);
}

// ===== Handle Pagos Link Click =====
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for Pagos link
    const pagosLink = document.querySelector('a[href="home.html#pagos"]');
    if (pagosLink) {
        pagosLink.addEventListener('click', (e) => {
            if (!isLoggedIn) {
                e.preventDefault();
                openLoginModal();
                showNotification('Debes iniciar sesión para ver información de pagos');
            }
        });
    }
});
