// Hero content for each slide
const heroContent = [
    {
        title: 'Chavimochic Marketplace',
        description: 'Conectando productores agrícolas con el mercado. Desarrollo sostenible del agro peruano.'
    },
    {
        title: 'Productos Frescos del Campo',
        description: 'Apoyamos a los agricultores locales y promovemos la agricultura sostenible en La Libertad.'
    },
    {
        title: 'Tecnología al Servicio del Agro',
        description: 'Plataforma digital que facilita la comercialización de productos agrícolas de calidad.'
    }
];

// ===== State =====
let currentHeroSlide = 0;
const totalHeroSlides = 3;
let isLoggedIn = false; // Track user login status
let redirectToPagos = false; // Track if we should redirect to pagos after login

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    startHeroSlideshow();
});

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

// ===== Login Modal =====
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

        // Redirect to pagos if needed
        if (redirectToPagos) {
            redirectToPagos = false;
            window.location.href = 'pagos.html';
        }
    }, 1500);
}

// ===== Handle Newsletter =====
function handleNewsletter(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    const email = emailInput.value;

    showNotification('¡Gracias por suscribirte! Recibirás nuestras novedades en ' + email);
    emailInput.value = '';
}

// ===== Show Notification =====
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ===== Search Functionality =====
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    if (searchTerm) {
        showNotification('Buscando: ' + searchTerm);
        // En una aplicación real, aquí se realizaría la búsqueda
    }
}

// Search on Enter key
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// ===== Smooth Scroll for Internal Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Check if clicking on Pagos link
        if (href === '#pagos') {
            e.preventDefault();
            if (!isLoggedIn) {
                redirectToPagos = true;
                openLoginModal();
                showNotification('Debes iniciar sesión para ver información de pagos');
                return;
            }
            // If already logged in, redirect directly
            window.location.href = 'pagos.html';
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Mobile Menu Toggle (for future implementation) =====
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Implementar menú móvil aquí
        showNotification('Menú móvil - próximamente');
    });
}

// ===== Scroll Animation for Elements =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.about-card, .service-card, .stat-card, .payment-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
