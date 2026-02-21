// ===== Product Data =====
const products = [
    {
        id: '1',
        name: 'Elegant Floral Print Kurti',
        description: 'Beautiful floral print kurti with comfortable fit. Perfect for casual and office wear.',
        price: 899,
        originalPrice: 1999,
        category: 'women',
        rating: 4.5,
        reviewCount: 2341,
        image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500',
        images: [
            'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500',
            'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500',
        ],
        prime: true,
        inStock: true,
        discount: 55,
        seller: 'Pavan Fashion'
    },
    {
        id: '2',
        name: 'Classic Formal Shirt',
        description: 'Premium cotton formal shirt with perfect fit. Ideal for office and formal occasions.',
        price: 749,
        originalPrice: 1499,
        category: 'men',
        rating: 4.3,
        reviewCount: 1892,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
        prime: true,
        inStock: true,
        discount: 50,
        seller: 'Pavan Fashion'
    },
    {
        id: '3',
        name: 'Designer Silk Saree',
        description: 'Beautiful silk saree with elegant design. Perfect for weddings and festivals.',
        price: 2499,
        originalPrice: 5999,
        category: 'women',
        rating: 4.8,
        reviewCount: 892,
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500',
        prime: true,
        inStock: true,
        discount: 58,
        seller: 'Pavan Fashion'
    },
    {
        id: '4',
        name: 'Premium Kids Wear Set',
        description: 'Comfortable and stylish kids wear set. Soft cotton material for sensitive skin.',
        price: 599,
        originalPrice: 1299,
        category: 'kids',
        rating: 4.6,
        reviewCount: 3456,
        image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500',
        prime: true,
        inStock: true,
        discount: 54,
        seller: 'Pavan Fashion'
    },
    {
        id: '5',
        name: 'Wireless Bluetooth Headphones',
        description: 'High-quality wireless headphones with noise cancellation. 30-hour battery life.',
        price: 1999,
        originalPrice: 4999,
        category: 'electronics',
        rating: 4.4,
        reviewCount: 5621,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        prime: true,
        inStock: true,
        discount: 60,
        seller: 'Tech World'
    },
    {
        id: '6',
        name: 'Smartphone Pro Max',
        description: 'Latest smartphone with amazing camera and performance. 256GB storage.',
        price: 45999,
        originalPrice: 79999,
        category: 'electronics',
        rating: 4.7,
        reviewCount: 2341,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
        prime: true,
        inStock: true,
        discount: 42,
        seller: 'Tech World'
    },
    {
        id: '7',
        name: 'Designer Handbag',
        description: 'Elegant designer handbag with premium quality. Perfect for parties and office.',
        price: 1299,
        originalPrice: 3499,
        category: 'women',
        rating: 4.5,
        reviewCount: 1234,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
        prime: true,
        inStock: true,
        discount: 63,
        seller: 'Pavan Fashion'
    },
    {
        id: '8',
        name: 'Sports Running Shoes',
        description: 'Comfortable running shoes with superior cushioning. Perfect for athletes.',
        price: 1899,
        originalPrice: 3999,
        category: 'sports',
        rating: 4.6,
        reviewCount: 4521,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        prime: true,
        inStock: true,
        discount: 52,
        seller: 'Sports Hub'
    },
    {
        id: '9',
        name: 'Makeup Kit Professional',
        description: 'Complete makeup kit with all essentials. Professional quality products.',
        price: 1499,
        originalPrice: 3999,
        category: 'beauty',
        rating: 4.4,
        reviewCount: 2891,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
        prime: true,
        inStock: true,
        discount: 62,
        seller: 'Beauty Box'
    },
    {
        id: '10',
        name: 'Home Decor Vases Set',
        description: 'Beautiful decorative vases set. Perfect for home decoration.',
        price: 799,
        originalPrice: 1999,
        category: 'home',
        rating: 4.3,
        reviewCount: 892,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500',
        prime: true,
        inStock: true,
        discount: 60,
        seller: 'Home Style'
    },
    {
        id: '11',
        name: 'Casual Denim Jeans',
        description: 'Comfortable denim jeans with modern fit. Perfect for daily wear.',
        price: 999,
        originalPrice: 2499,
        category: 'men',
        rating: 4.5,
        reviewCount: 6721,
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
        prime: true,
        inStock: true,
        discount: 60,
        seller: 'Pavan Fashion'
    },
    {
        id: '12',
        name: 'Premium Watch',
        description: 'Elegant premium watch with leather strap. Water resistant.',
        price: 2499,
        originalPrice: 5999,
        category: 'men',
        rating: 4.7,
        reviewCount: 1923,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        prime: true,
        inStock: true,
        discount: 58,
        seller: 'Time Palace'
    },
];

// ===== State =====
let cart = [];
let currentPage = 'home';
let currentProduct = null;
let currentSlide = 0;
let selectedCategory = 'all';

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
    
    renderProducts();
    renderFlashSale();
    startHeroSlider();
    updateCartCount();
    startFlashTimer();
});

// ===== Hero Slider =====
function startHeroSlider() {
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 4;
        const slider = document.getElementById('heroSlider');
        if (slider) {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Update dots
        document.querySelectorAll('.hero-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }, 5000);
}

function goToSlide(index) {
    currentSlide = index;
    const slider = document.getElementById('heroSlider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    document.querySelectorAll('.hero-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// ===== Flash Timer =====
function startFlashTimer() {
    let time = 2 * 60 * 60 + 45 * 60 + 30; // 2:45:30
    
    setInterval(() => {
        time--;
        if (time < 0) time = 3 * 60 * 60; // Reset to 3 hours
        
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        
        document.getElementById('flashTimer').textContent = 
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

// ===== Render Products =====
function renderProducts(filteredProducts = products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// ===== Render Flash Sale =====
function renderFlashSale() {
    const flashGrid = document.getElementById('flashProducts');
    if (!flashGrid) return;
    
    const flashItems = products.slice(0, 6);
    flashGrid.innerHTML = flashItems.map(product => `
        <div class="flash-product" onclick="showProduct('${product.id}')">
            <img src="${product.image}" alt="${product.name}">
            <p class="price">₹${formatPrice(product.price)}</p>
        </div>
    `).join('');
}

// ===== Create Product Card =====
function createProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating));
    
    return `
        <div class="product-card" onclick="showProduct('${product.id}')">
            <button class="wishlist-btn" onclick="event.stopPropagation(); addToWishlist('${product.id}')">
                <i class="far fa-heart"></i>
            </button>
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <span class="discount-tag">${product.discount}% OFF</span>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-count">(${formatCount(product.reviewCount)})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">₹${formatPrice(product.price)}</span>
                    <span class="original-price">₹${formatPrice(product.originalPrice)}</span>
                    <span class="discount">${product.discount}% off</span>
                </div>
                ${product.prime ? '<span class="prime-badge"><i class="fas fa-bolt"></i> Prime</span>' : ''}
            </div>
        </div>
    `;
}

// ===== Format Count =====
function formatCount(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}

// ===== Format Price - Indian Rupees =====
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

// ===== Show Page =====
function showPage(page) {
    document.querySelectorAll('.page').forEach(p => {
        p.style.display = 'none';
    });
    
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.style.display = 'block';
    }
    
    currentPage = page;
    window.scrollTo(0, 0);
    
    if (page === 'cart') {
        renderCart();
    }
}

// ===== Show Product =====
function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    
    document.getElementById('productBreadcrumb').textContent = product.name;
    
    const detail = document.getElementById('productDetail');
    if (!detail) return;
    
    const stars = '★'.repeat(Math.floor(product.rating));
    
    detail.innerHTML = `
        <div class="product-gallery">
            <img src="${product.image}" alt="${product.name}" class="product-gallery-main">
            <div class="product-gallery-thumbs">
                ${product.images ? product.images.map((img, i) => `
                    <img src="${img}" alt="Thumbnail ${i + 1}" class="${i === 0 ? 'active' : ''}" onclick="changeImage(this)">
                `).join('') : ''}
            </div>
        </div>
        <div class="product-info">
            <h1>${product.name}</h1>
            <div class="rating">
                <span class="stars">${stars}</span>
                <span>${product.rating} ratings | ${formatCount(product.reviewCount)} reviews</span>
            </div>
            <div class="price-section">
                <div class="price-row">
                    <span class="current-price">₹${formatPrice(product.price)}</span>
                    <span class="original-price">₹${formatPrice(product.originalPrice)}</span>
                    <span class="discount">${product.discount}% off</span>
                </div>
                ${product.prime ? '<span class="prime-badge-large"><i class="fas fa-bolt"></i> Free Delivery</span>' : ''}
            </div>
            <div class="variants">
                <h4>Size</h4>
                <div class="variant-options">
                    <span class="variant-option active" onclick="selectSize(this)">S</span>
                    <span class="variant-option" onclick="selectSize(this)">M</span>
                    <span class="variant-option" onclick="selectSize(this)">L</span>
                    <span class="variant-option" onclick="selectSize(this)">XL</span>
                    <span class="variant-option" onclick="selectSize(this)">XXL</span>
                </div>
            </div>
            <div class="quantity-selector">
                <h4>Quantity</h4>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <span class="quantity-value" id="quantityValue">1</span>
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            <div class="action-buttons">
                <button class="add-to-cart-btn" onclick="addToCart()">
                    <i class="fas fa-shopping-bag"></i> Add to Bag
                </button>
                <button class="buy-now-btn" onclick="buyNow()">
                    <i class="fas fa-bolt"></i> Buy Now
                </button>
            </div>
            <div class="product-description">
                <h3>Product Details</h3>
                <p>${product.description}</p>
            </div>
            <div class="product-seller">
                <p><strong>Sold by:</strong> <span>${product.seller}</span></p>
                <p><strong>Availability:</strong> ${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
        </div>
        <div class="product-sidebar">
            <div class="price-section">
                <div class="price-row">
                    <span class="current-price">₹${formatPrice(product.price)}</span>
                    <span class="original-price">₹${formatPrice(product.originalPrice)}</span>
                </div>
                <span class="discount">${product.discount}% off</span>
            </div>
            <div class="delivery-options">
                <div class="delivery-option">
                    <i class="fas fa-shipping-fast"></i>
                    <span>Free Delivery by Tomorrow</span>
                </div>
                <div class="delivery-option">
                    <i class="fas fa-undo"></i>
                    <span>Easy 30 Days Return</span>
                </div>
                <div class="delivery-option">
                    <i class="fas fa-shield-alt"></i>
                    <span>100% Secure Payment</span>
                </div>
            </div>
            <div class="product-description">
                <h3>Product Description</h3>
                <p>${product.description}</p>
                <p>Premium quality product from Pavan Fashion. Free shipping on orders above ₹499. Easy returns within 30 days.</p>
            </div>
        </div>
    `;
    
    showPage('product');
}

// ===== Change Image =====
function changeImage(img) {
    document.querySelector('.product-gallery-main').src = img.src;
    document.querySelectorAll('.product-gallery-thumbs img').forEach(i => i.classList.remove('active'));
    img.classList.add('active');
}

// ===== Select Size =====
function selectSize(el) {
    document.querySelectorAll('.variant-option').forEach(o => o.classList.remove('active'));
    el.classList.add('active');
}

// ===== Change Quantity =====
let quantity = 1;

function changeQuantity(delta) {
    quantity = Math.max(1, Math.min(10, quantity + delta));
    document.getElementById('quantityValue').textContent = quantity;
}

// ===== Add to Cart =====
function addToCart() {
    if (!currentProduct) return;
    
    const existingItem = cart.find(item => item.product.id === currentProduct.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ product: currentProduct, quantity });
    }
    
    updateCartCount();
    showToast('Added to bag!');
}

// ===== Buy Now =====
function buyNow() {
    addToCart();
    showPage('cart');
}

// ===== Update Cart Count =====
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// ===== Filter Category =====
function filterCategory(category) {
    selectedCategory = category;
    
    // Update active pill
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
    });
    event.target.closest('.category-pill')?.classList.add('active');
    
    const filtered = category === 'all' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
    
    // Update title
    const title = category === 'all' ? 'Trending Products' : 
                  category.charAt(0).toUpperCase() + category.slice(1) + ' Collection';
    document.getElementById('productsTitle').textContent = title;
    
    showPage('home');
    window.scrollTo(0, 300);
}

// ===== Search Products =====
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
        renderProducts();
        showPage('home');
        return;
    }
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    
    renderProducts(filtered);
    document.getElementById('productsTitle').textContent = 'Search Results';
    showPage('home');
    window.scrollTo(0, 300);
}

// ===== Render Cart =====
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        if (cartItems) cartItems.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        return;
    }
    
    if (cartItems) cartItems.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    
    let subtotal = 0;
    
    cartItems.innerHTML = cart.map((item, index) => {
        const price = formatPrice(item.product.price * item.quantity);
        subtotal += item.product.price * item.quantity;
        
        return `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.product.name}</h3>
                    <p class="price">₹${price}</p>
                    <p class="stock"><i class="fas fa-check-circle"></i> In Stock</p>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <select onchange="updateCartQuantity(${index}, this.value)">
                                ${[1,2,3,4,5,6,7,8,9,10].map(n => `<option value="${n}" ${n === item.quantity ? 'selected' : ''}>Qty: ${n}</option>`).join('')}
                            </select>
                        </div>
                        <span class="delete-btn" onclick="removeFromCart(${index})">Remove</span>
                        <span class="save-for-later" onclick="showToast('Saved for later!')">Save for later</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('cartItemCount').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('cartTotal').textContent = formatPrice(subtotal);
}

// ===== Update Cart Quantity =====
function updateCartQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    updateCartCount();
    renderCart();
}

// ===== Remove from Cart =====
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
    showToast('Removed from bag');
}

// ===== Proceed to Checkout =====
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your bag is empty!');
        return;
    }
    renderCheckout();
    showPage('checkout');
}

// ===== Render Checkout =====
function renderCheckout() {
    const checkoutItems = document.getElementById('checkoutItems');
    let subtotal = 0;
    
    checkoutItems.innerHTML = cart.map(item => {
        const price = formatPrice(item.product.price * item.quantity);
        subtotal += item.product.price * item.quantity;
        
        return `
            <div class="checkout-item">
                <img src="${item.product.image}" alt="${item.product.name}">
                <div class="checkout-item-details">
                    <p class="title">${item.product.name}</p>
                    <p class="price">₹${price}</p>
                    <p>Qty: ${item.quantity}</p>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('checkoutSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('checkoutTotal').textContent = formatPrice(subtotal);
}

// ===== Place Order =====
function placeOrder() {
    const orderId = 'PF-2024-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById('orderId').textContent = orderId;
    
    // Clear cart
    cart = [];
    updateCartCount();
    
    showPage('success');
    showToast('Order placed successfully!');
}

// ===== Handle Sign In =====
function handleSignIn(e) {
    e.preventDefault();
    showToast('Welcome back!');
    showPage('home');
}

// ===== Handle Sign Up =====
function handleSignUp(e) {
    e.preventDefault();
    showToast('Account created successfully!');
    showPage('home');
}

// ===== Add to Wishlist =====
function addToWishlist(productId) {
    showToast('Added to wishlist!');
}

// ===== Show Toast =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Search on Enter =====
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchProducts();
    }
});
