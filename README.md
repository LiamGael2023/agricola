# 🌾 Chavimochic Marketplace

Plataforma web completa para la comercialización de productos agrícolas en el marco del Proyecto Especial Chavimochic en La Libertad, Perú.

## 📑 Estructura del Proyecto

El proyecto consta de **dos páginas principales** que trabajan juntas:

### 1. **Página Principal** (`home.html`)
Página de presentación institucional con información sobre el Proyecto Chavimochic

### 2. **Tienda Virtual** (`index.html`)
E-commerce completo para la compra de productos agrícolas frescos

## 🚀 Características Generales

### Diseño y Estilo
- ✨ **Diseño Moderno** - Interfaz elegante con las últimas tendencias en diseño web
- 📱 **Totalmente Responsivo** - Optimizado para móvil, tablet y desktop
- 🎨 **Paleta Agrícola** - Colores verdes y tierra que evocan naturaleza y agricultura
- 🔄 **Navegación Integrada** - Transición fluida entre páginas
- 💬 **Botones Flotantes** - WhatsApp y Facebook para contacto rápido

### Funcionalidades Compartidas
- 🔍 **Búsqueda** - Sistema de búsqueda en ambas páginas
- 🔔 **Notificaciones** - Feedback visual para acciones del usuario
- 🎭 **Hero Slideshow** - Banner animado reducido (250px) con 3 slides
- 📊 **Responsive Design** - Adaptación perfecta a todos los dispositivos

## 🏠 Página Principal (home.html)

### Secciones Principales

#### 1. **Top Bar**
- Información de contacto (teléfono, horarios)
- Enlaces rápidos (Nosotros, Proyecto Chavimochic, Beneficios)

#### 2. **Navegación**
- **Inicio** - Página principal
- **Tienda Virtual** - Enlace a index.html
- **Pagos** - Información de métodos de pago
- **Iniciar Sesión** - Modal de autenticación

#### 3. **Hero Slideshow**
- 3 slides rotativos con transición automática (4 segundos)
- Contenido dinámico sobre Chavimochic
- Botón CTA hacia la tienda virtual

#### 4. **Proyecto Chavimochic**
- Información sobre irrigación moderna
- Desarrollo agrícola sostenible
- Impacto en la comunidad
- 4 tarjetas informativas con iconos

#### 5. **Estadísticas**
- 144,000+ Hectáreas Irrigadas
- 50,000+ Familias Beneficiadas
- 300+ Productos Agrícolas
- Atención 24/7

#### 6. **Servicios**
- Tienda Virtual (con enlace a index.html)
- Pagos Seguros
- Logística y Entregas
- Asesoría Técnica

#### 7. **Beneficios del Proyecto**
- Incremento de productividad
- Generación de empleo
- Desarrollo económico
- Seguridad alimentaria
- Tecnología agrícola
- Imagen ilustrativa

#### 8. **Métodos de Pago**
- Tarjetas (Visa, Mastercard, AmEx)
- Transferencias bancarias
- Billeteras digitales (Yape, Plin, PayPal)
- Efectivo contra entrega

#### 9. **Call to Action**
- Sección destacada para ir a la tienda
- Diseño llamativo con gradiente verde

#### 10. **Newsletter**
- Formulario de suscripción
- Captura de emails

#### 11. **Modal de Inicio de Sesión**
- Formulario de login
- Opciones de Google y Facebook
- Diseño moderno y profesional

## 🛒 Tienda Virtual (index.html)

### Características de la Tienda

#### 1. **Catálogo de Productos**
- **20 productos agrícolas** organizados por categorías:
  - 6 Vegetales (tomates, lechugas, zanahorias, papas, brócoli, pimientos)
  - 6 Frutas (manzanas, fresas, sandías, aguacates, plátanos, naranjas)
  - 4 Granos (arroz, quinua, maíz, frijoles)
  - 4 Hierbas (albahaca, cilantro, perejil, menta)

#### 2. **Sistema de Filtrado**
- Filtros por categoría (8 categorías disponibles)
- Carrusel de categorías con navegación
- Búsqueda en tiempo real

#### 3. **Carrito de Compras**
- Sidebar deslizante elegante
- Agregar/eliminar productos
- Ajustar cantidades (+/-)
- Cálculo automático del total
- **Persistencia con localStorage** - El carrito se mantiene entre sesiones
- Diseño intuitivo y moderno

#### 4. **Galería de Imágenes**
- Carrusel con 8 imágenes agrícolas
- 2 slides de 4 imágenes cada uno
- **Lightbox** para vista ampliada
- Navegación con teclado (flechas, ESC)
- Autoplay cada 5 segundos

#### 5. **Características Destacadas**
- Envío rápido (24-48 horas)
- Calidad garantizada
- Soporte 24/7
- Política de devoluciones (30 días)

#### 6. **Barra de Contacto**
- Llamada a la acción
- Diseño destacado con fondo verde claro
- Enlace a WhatsApp

## 🎨 Paleta de Colores

```css
--primary-green: #2d5016    /* Verde Agrícola Profundo */
--secondary-green: #4a7c23  /* Verde Campo */
--light-green: #8bc34a      /* Verde Hoja */
--accent-green: #c5e1a5     /* Verde Claro Suave */
--earth-brown: #5d4e37      /* Color Tierra */
--light-brown: #8b7355      /* Marrón Claro */
--cream: #f5f1eb            /* Fondo Natural */
--wheat: #f9a825            /* Acento Trigo/Dorado */
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica y moderna
- **CSS3** - Estilos avanzados:
  - Variables CSS
  - Grid Layout
  - Flexbox
  - Animaciones y Transiciones
  - Media Queries para responsive
- **JavaScript (Vanilla)** - Sin frameworks, código optimizado:
  - Gestión de estado del carrito
  - LocalStorage API
  - Carruseles y slideshows
  - Modales y overlays
  - Animaciones de scroll

### Librerías Externas
- **Font Awesome 6.4.0** - Iconos profesionales
- **Google Fonts (Poppins)** - Tipografía moderna y legible

## 📦 Instalación y Uso

### Requisitos Previos
- Ninguno. Solo necesitas un navegador web moderno.

### Instalación
```bash
# 1. Clona el repositorio
git clone [URL_DEL_REPOSITORIO]

# 2. Navega al directorio
cd agricola

# 3. Abre home.html en tu navegador
# No se requiere servidor ni instalación adicional
```

### Archivos del Proyecto
```
agricola/
├── home.html              # Página principal
├── home-styles.css        # Estilos de la página principal
├── home-script.js         # JavaScript de la página principal
├── index.html             # Tienda virtual
├── styles.css             # Estilos de la tienda
├── script.js              # JavaScript de la tienda
└── README.md              # Este archivo
```

## 🔗 Navegación Entre Páginas

### Desde la Página Principal (home.html):
- **Logo** → Recarga home.html
- **Tienda Virtual** (menú) → Va a index.html
- **Botón Hero** → Va a index.html
- **Tarjeta de Servicio** → Va a index.html
- **CTA Section** → Va a index.html
- **Enlaces del Footer** → Navegación interna y a index.html

### Desde la Tienda Virtual (index.html):
- **Logo** → Regresa a home.html
- **Inicio** (menú) → Va a home.html
- **Pagos** (menú) → Va a home.html#pagos
- **Enlaces del Footer** → Navegación a home.html y secciones internas

## 📱 Diseño Responsive

### Desktop (>968px)
- **Página Principal**:
  - Hero: 250px de altura
  - Layout completo con navegación horizontal
  - Galería de beneficios con imagen lateral

- **Tienda Virtual**:
  - Grid de productos: 4 columnas
  - Carrito lateral: 450px
  - Navegación completa visible

### Tablet (768px - 968px)
- Menú hamburguesa
- Hero: 200-250px
- Grid adaptativo de 2-3 columnas
- Galería: 2 columnas

### Móvil (<768px)
- **Página Principal**:
  - Hero: 200px
  - Layout de una columna
  - Beneficios apilados

- **Tienda Virtual**:
  - Hero: 200px
  - Grid de 1 columna
  - Carrito: Pantalla completa
  - Botones táctiles grandes

## ✨ Funcionalidades Interactivas

### Página Principal
- ✅ Hero slideshow automático (4s)
- ✅ Modal de inicio de sesión
- ✅ Animaciones al hacer scroll
- ✅ Formulario de newsletter
- ✅ Botones flotantes de redes sociales
- ✅ Smooth scroll en navegación interna

### Tienda Virtual
- ✅ Carrito con persistencia (localStorage)
- ✅ Búsqueda de productos en tiempo real
- ✅ Filtrado por categorías
- ✅ Galería con lightbox
- ✅ Carrusel de categorías
- ✅ Notificaciones de acciones
- ✅ Navegación con teclado en lightbox

## 🎯 Próximas Mejoras Sugeridas

### Backend
- [ ] API REST para productos
- [ ] Base de datos (MySQL/PostgreSQL)
- [ ] Sistema de autenticación real
- [ ] Procesamiento de pagos (Stripe, PayPal, Culqi)
- [ ] Panel de administración

### Funcionalidades
- [ ] Sistema de usuarios/perfiles
- [ ] Historial de pedidos
- [ ] Tracking de envíos en tiempo real
- [ ] Reseñas y calificaciones
- [ ] Sistema de favoritos/wishlist
- [ ] Cupones y descuentos
- [ ] Chat en vivo con vendedores
- [ ] Comparador de productos

### Optimización
- [ ] Lazy loading de imágenes
- [ ] Service Workers (PWA)
- [ ] Compresión de assets
- [ ] CDN para recursos estáticos

## 📊 Información del Proyecto Chavimochic

### Sobre el Proyecto
Chavimochic es un proyecto especial de irrigación ubicado en la región La Libertad, Perú. Su objetivo principal es irrigar tierras eriazas mediante el aprovechamiento de las aguas del río Santa, generando desarrollo agrícola, económico y social en la zona.

### Impacto
- **Hectáreas**: Más de 144,000 hectáreas bajo riego
- **Familias**: Beneficia a más de 50,000 familias
- **Empleo**: Genera miles de empleos directos e indirectos
- **Agricultura**: Producción de frutas, hortalizas, granos y más
- **Exportación**: Impulsa las exportaciones agrícolas del Perú

## 👥 Contacto

### Información de Contacto
- **Ubicación**: Av. Chavimochic 123, Trujillo - La Libertad, Perú
- **Teléfono**: +51 123 456 789
- **Email**: info@chavimochic-marketplace.pe
- **Horario**: Atención 24/7

### Redes Sociales
- Facebook: [Chavimochic Marketplace]
- Instagram: [@chavimochic_marketplace]
- WhatsApp: +51 123 456 789
- Twitter: [@chavimochic_pe]
- YouTube: [Chavimochic Marketplace]

## 📄 Licencia

MIT License - Uso libre para proyectos personales y comerciales

## 👨‍💻 Desarrollo

Desarrollado con ❤️ para promover el desarrollo agrícola sostenible en La Libertad, Perú.

---

**Proyecto Especial Chavimochic - Gobierno Regional La Libertad**

*Transformando el desierto en tierras productivas 🌾*
