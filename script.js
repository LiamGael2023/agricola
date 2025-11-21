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

    // Fruits
    {
        id: 6,
        name: 'Manzanas Rojas',
        description: 'Manzanas dulces y jugosas',
        price: 4.00,
        unit: 'kg',
        category: 'fruits',
        icon: '🍎'
    },
    {
        id: 7,
        name: 'Fresas Orgánicas',
        description: 'Fresas frescas del campo',
        price: 5.50,
        unit: 'kg',
        category: 'fruits',
        icon: '🍓'
    },
    {
        id: 8,
        name: 'Sandías Dulces',
        description: 'Sandías jugosas y refrescantes',
        price: 3.00,
        unit: 'kg',
        category: 'fruits',
        icon: '🍉'
    },
    {
        id: 9,
        name: 'Aguacates Hass',
        description: 'Aguacates cremosos premium',
        price: 6.00,
        unit: 'kg',
        category: 'fruits',
        icon: '🥑'
    },
    {
        id: 10,
        name: 'Plátanos',
        description: 'Plátanos maduros perfectos',
        price: 2.50,
        unit: 'kg',
        category: 'fruits',
        icon: '🍌'
    },

    // Grains
    {
        id: 11,
        name: 'Arroz Integral',
        description: 'Arroz integral de grano largo',
        price: 3.80,
        unit: 'kg',
        category: 'grains',
        icon: '🌾'
    },
    {
        id: 12,
        name: 'Quinua Orgánica',
        description: 'Quinua de alta calidad nutricional',
        price: 8.50,
        unit: 'kg',
        category: 'grains',
        icon: '🌾'
    },
    {
        id: 13,
        name: 'Maíz Dulce',
        description: 'Mazorcas de maíz fresco',
        price: 1.50,
        unit: 'unidad',
        category: 'grains',
        icon: '🌽'
    },
    {
        id: 14,
        name: 'Frijoles Negros',
        description: 'Frijoles secos de primera',
        price: 4.20,
        unit: 'kg',
        category: 'grains',
        icon: '🫘'
    },

    // Herbs
    {
        id: 15,
        name: 'Albahaca Fresca',
        description: 'Albahaca aromática recién cortada',
        price: 2.00,
        unit: 'manojo',
        category: 'herbs',
        icon: '🌿'
    },
    {
        id: 16,
        name: 'Cilantro Orgánico',
        description: 'Cilantro fresco para tus platillos',
        price: 1.50,
        unit: 'manojo',
        category: 'herbs',
        icon: '🌿'
    },
    {
        id: 17,
        name: 'Perejil',
        description: 'Perejil fresco y aromático',
        price: 1.50,
        unit: 'manojo',
        category: 'herbs',
        icon: '🌿'
    },
    {
        id: 18,
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

// ===== DOM Elements =====
const productsGrid = document.getElementById('productsGrid');
const cartToggle = document.getElementById('cartToggle');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const totalAmount = document.getElementById('totalAmount');
const checkoutBtn = document.getElementById('checkoutBtn');
const filterButtons = document.querySelectorAll('.filter-btn');

// ===== Initialize App =====
function init() {
    loadCartFromStorage();
    renderProducts();
    updateCartUI();
    setupEventListeners();
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Cart toggle
    cartToggle.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            renderProducts(filter);
        });
    });

    // Checkout button
    checkoutBtn.addEventListener('click', handleCheckout);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== Render Products =====
function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// ===== Create Product Card =====
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const categoryNames = {
        vegetables: 'Vegetales',
        fruits: 'Frutas',
        grains: 'Granos',
        herbs: 'Hierbas'
    };

    card.innerHTML = `
        <div class="product-image">${product.icon}</div>
        <div class="product-info">
            <span class="product-category">${categoryNames[product.category]}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-unit">por ${product.unit}</div>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}">
                    Agregar
                </button>
            </div>
        </div>
    `;

    const addBtn = card.querySelector('.add-to-cart-btn');
    addBtn.addEventListener('click', () => addToCart(product.id));

    return card;
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

    saveCartToStorage();
    updateCartUI();
    showCartNotification();
}

// ===== Remove from Cart =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
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
        saveCartToStorage();
        updateCartUI();
    }
}

// ===== Update Cart UI =====
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartEmpty.classList.add('active');
        cartItems.innerHTML = '';
        cartFooter.style.display = 'none';
    } else {
        cartEmpty.classList.remove('active');
        cartFooter.style.display = 'block';
        renderCartItems();
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = `$${total.toFixed(2)}`;
}

// ===== Render Cart Items =====
function renderCartItems() {
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} / ${item.unit}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                    <button class="remove-btn" data-id="${item.id}">Eliminar</button>
                </div>
            </div>
        `;

        // Add event listeners
        const decreaseBtn = cartItem.querySelector('[data-action="decrease"]');
        const increaseBtn = cartItem.querySelector('[data-action="increase"]');
        const removeBtn = cartItem.querySelector('.remove-btn');

        decreaseBtn.addEventListener('click', () => updateQuantity(item.id, -1));
        increaseBtn.addEventListener('click', () => updateQuantity(item.id, 1));
        removeBtn.addEventListener('click', () => removeFromCart(item.id));

        cartItems.appendChild(cartItem);
    });
}

// ===== Cart Open/Close =====
function openCart() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Cart Notification =====
function showCartNotification() {
    const originalText = cartToggle.textContent;
    cartToggle.style.transform = 'scale(1.2)';

    setTimeout(() => {
        cartToggle.style.transform = '';
    }, 300);
}

// ===== Local Storage =====
function saveCartToStorage() {
    localStorage.setItem('agricola-cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
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
function handleCheckout() {
    if (cart.length === 0) return;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    alert(`¡Gracias por tu compra! 🌾

Resumen:
- ${itemCount} producto(s)
- Total: $${total.toFixed(2)}

En una aplicación real, aquí se procesaría el pago y se enviaría el pedido.`);

    // Clear cart
    cart = [];
    saveCartToStorage();
    updateCartUI();
    closeCart();
}

// ===== Close cart with Escape key =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
        closeCart();
    }
});

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', init);
