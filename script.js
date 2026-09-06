/* ===== Product Data ===== */
const PRODUCTS = [
  {
    id: 1,
    name: "Áo thun nam cổ tròn basic cotton 100%",
    price: 99000,
    oldPrice: 159000,
    category: "fashion",
    rating: 4.8,
    sold: 12500,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    desc: "Áo thun nam form regular fit, chất liệu cotton mềm mại, thấm hút mồ hôi tốt. Phù hợp mặc hàng ngày."
  },
  {
    id: 2,
    name: "Tai nghe Bluetooth True Wireless Pro",
    price: 299000,
    oldPrice: 499000,
    category: "electronics",
    rating: 4.7,
    sold: 8300,
    img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    desc: "Tai nghe không dây chống ồn chủ động, pin 30 giờ, kết nối ổn định, âm thanh Hi-Fi."
  },
  {
    id: 3,
    name: "Nồi chiên không dầu 5.5L công nghệ mới",
    price: 890000,
    oldPrice: 1290000,
    category: "home",
    rating: 4.9,
    sold: 4200,
    img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=400&fit=crop",
    desc: "Nồi chiên không dầu dung tích lớn, 8 chế độ nấu, dễ vệ sinh, tiết kiệm dầu."
  },
  {
    id: 4,
    name: "Serum vitamin C dưỡng trắng da 30ml",
    price: 185000,
    oldPrice: 250000,
    category: "beauty",
    rating: 4.6,
    sold: 15600,
    img: "https://images.unsplash.com/photo-1620916563266-6d08e4d1f2f6?w=400&h=400&fit=crop",
    desc: "Serum vitamin C 20% giúp làm sáng da, mờ thâm, chống oxy hóa. Phù hợp mọi loại da."
  },
  {
    id: 5,
    name: "Giày sneaker nam thể thao êm ái",
    price: 349000,
    oldPrice: 499000,
    category: "fashion",
    rating: 4.5,
    sold: 6700,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    desc: "Giày sneaker đế cao su chống trượt, form ôm chân, phù hợp chạy bộ và đi chơi."
  },
  {
    id: 6,
    name: "Đồng hồ thông minh Smart Watch Series 8",
    price: 790000,
    oldPrice: 1190000,
    category: "electronics",
    rating: 4.8,
    sold: 3100,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    desc: "Đồng hồ thông minh đo nhịp tim, SpO2, GPS, pin 7 ngày, chống nước 5ATM."
  },
  {
    id: 7,
    name: "Bộ chăn ga gối cotton 100% cao cấp",
    price: 459000,
    oldPrice: 699000,
    category: "home",
    rating: 4.7,
    sold: 2800,
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop",
    desc: "Bộ chăn ga gối cotton organic, mềm mại, thoáng khí, nhiều màu sắc lựa chọn."
  },
  {
    id: 8,
    name: "Son môi lì lâu trôi không chì",
    price: 129000,
    oldPrice: 189000,
    category: "beauty",
    rating: 4.9,
    sold: 22100,
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    desc: "Son môi texture mịn, lên màu chuẩn, giữ màu 8 giờ, không khô môi."
  },
  {
    id: 9,
    name: "Bánh trung thu nhân thập cẩm hộp 4 cái",
    price: 219000,
    oldPrice: 280000,
    category: "food",
    rating: 4.6,
    sold: 5400,
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop",
    desc: "Bánh trung thu truyền thống, nhân thập cẩm trứng muối, vỏ mỏng, thơm ngon."
  },
  {
    id: 10,
    name: "Balo laptop chống nước 15.6 inch",
    price: 279000,
    oldPrice: 399000,
    category: "fashion",
    rating: 4.7,
    sold: 9100,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    desc: "Balo laptop chống nước, ngăn đựng laptop riêng, nhiều ngăn tiện dụng."
  },
  {
    id: 11,
    name: "Máy sấy tóc ion âm công suất 2000W",
    price: 199000,
    oldPrice: 320000,
    category: "electronics",
    rating: 4.5,
    sold: 7300,
    img: "https://images.unsplash.com/photo-1522338242992-e1a74c57f3c5?w=400&h=400&fit=crop",
    desc: "Máy sấy tóc công nghệ ion âm giúp tóc bóng mượt, 3 mức nhiệt, gấp gọn."
  },
  {
    id: 12,
    name: "Trà sữa trân châu đóng hộp 6 lon",
    price: 89000,
    oldPrice: 120000,
    category: "food",
    rating: 4.4,
    sold: 18900,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
    desc: "Trà sữa trân châu vị truyền thống, đóng lon tiện lợi, ngọt vừa phải."
  },
  {
    id: 13,
    name: "Áo khoác gió nam chống nắng UV",
    price: 249000,
    oldPrice: 399000,
    category: "fashion",
    rating: 4.8,
    sold: 5600,
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    desc: "Áo khoác gió mỏng nhẹ, chống nắng UPF50+, nhiều túi, phù hợp đi phượt."
  },
  {
    id: 14,
    name: "Đèn bàn LED chống cận cảm ứng",
    price: 169000,
    oldPrice: 250000,
    category: "home",
    rating: 4.6,
    sold: 4100,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed557fef46?w=400&h=400&fit=crop",
    desc: "Đèn bàn LED ánh sáng vàng ấm, chống cận, điều chỉnh độ sáng cảm ứng."
  },
  {
    id: 15,
    name: "Kem chống nắng SPF50+ PA++++",
    price: 145000,
    oldPrice: 210000,
    category: "beauty",
    rating: 4.8,
    sold: 14200,
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    desc: "Kem chống nắng phổ rộng, không gây nhờn, thấm nhanh, phù hợp da dầu."
  },
  {
    id: 16,
    name: "Snack rong biển cay Hàn Quốc 10 gói",
    price: 59000,
    oldPrice: 85000,
    category: "food",
    rating: 4.7,
    sold: 26700,
    img: "https://images.unsplash.com/photo-1621939514649-34e4b7c3f0e0?w=400&h=400&fit=crop",
    desc: "Snack rong biển giòn tan, vị cay nhẹ kiểu Hàn, ăn vặt cực ngon."
  }
];

/* ===== State ===== */
let cart = JSON.parse(localStorage.getItem("shopee_cart") || "[]");
let currentCategory = "all";
let currentSort = "default";
let searchQuery = "";

/* ===== Helpers ===== */
const formatPrice = (n) => n.toLocaleString("vi-VN") + "₫";

const calcDiscount = (price, old) => Math.round(((old - price) / old) * 100);

const saveCart = () => localStorage.setItem("shopee_cart", JSON.stringify(cart));

const getCartCount = () => cart.reduce((s, i) => s + i.qty, 0);

const getCartTotal = () => cart.reduce((s, i) => s + i.price * i.qty, 0);

/* ===== Toast ===== */
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ===== Render Products ===== */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (currentCategory !== "all") {
    list = list.filter((p) => p.category === currentCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  switch (currentSort) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "sold":
      list.sort((a, b) => b.sold - a.sold);
      break;
  }

  return list;
}

function createProductCard(p) {
  const discount = p.oldPrice ? calcDiscount(p.price, p.oldPrice) : 0;
  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-img">
        ${discount ? `<span class="badge-sale">-${discount}%</span>` : ""}
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">
          <span class="price-current">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}
        </div>
        <div class="product-meta">
          <span class="rating"><i class="fa-solid fa-star"></i> ${p.rating}</span>
          <span>Đã bán ${p.sold >= 1000 ? (p.sold / 1000).toFixed(1) + "k" : p.sold}</span>
        </div>
        <button class="add-cart-btn" data-id="${p.id}">
          <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
        </button>
      </div>
    </article>
  `;
}

function renderProducts() {
  const list = getFilteredProducts();
  const grid = document.getElementById("productGrid");
  const noResult = document.getElementById("noResult");

  if (list.length === 0) {
    grid.innerHTML = "";
    noResult.classList.remove("hidden");
  } else {
    noResult.classList.add("hidden");
    grid.innerHTML = list.map(createProductCard).join("");
  }
}

function renderFlashSale() {
  // Take top 4 products with highest discount
  const flash = [...PRODUCTS]
    .filter((p) => p.oldPrice)
    .sort((a, b) => calcDiscount(b.price, b.oldPrice) - calcDiscount(a.price, a.oldPrice))
    .slice(0, 4);

  document.getElementById("flashProducts").innerHTML = flash
    .map(createProductCard)
    .join("");
}

/* ===== Cart ===== */
function updateCartUI() {
  const count = getCartCount();
  document.getElementById("cartBadge").textContent = count;
  document.getElementById("cartCountText").textContent = count;
  document.getElementById("cartTotal").textContent = formatPrice(getCartTotal());

  const body = document.getElementById("cartBody");
  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Giỏ hàng trống</p>
      </div>
    `;
    return;
  }

  body.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="qty-control">
          <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" aria-label="Xóa">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `
    )
    .join("");
}

function addToCart(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((i) => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      qty: 1
    });
  }
  saveCart();
  updateCartUI();
  showToast("Đã thêm vào giỏ hàng");
}

function changeQty(id, action) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;

  if (action === "inc") {
    item.qty += 1;
  } else if (action === "dec") {
    item.qty -= 1;
    if (item.qty <= 0) {
      cart = cart.filter((i) => i.id !== id);
    }
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  updateCartUI();
  showToast("Đã xóa sản phẩm");
}

/* ===== Product Modal ===== */
function openProductModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;

  const discount = p.oldPrice ? calcDiscount(p.price, p.oldPrice) : 0;
  const body = document.getElementById("modalBody");
  body.innerHTML = `
    <div class="modal-img">
      <img src="${p.img}" alt="${p.name}" />
    </div>
    <div class="modal-info">
      <h2>${p.name}</h2>
      <div class="modal-price">
        <span class="price-current">${formatPrice(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}
        ${discount ? `<span class="badge-sale">-${discount}%</span>` : ""}
      </div>
      <div class="modal-rating">
        <span class="rating"><i class="fa-solid fa-star"></i> ${p.rating}</span>
        <span>|</span>
        <span>Đã bán ${p.sold >= 1000 ? (p.sold / 1000).toFixed(1) + "k" : p.sold}</span>
      </div>
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-actions">
        <button class="btn-outline" id="modalAddCart" data-id="${p.id}">
          <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ
        </button>
        <button class="btn-primary" id="modalBuyNow" data-id="${p.id}">Mua ngay</button>
      </div>
    </div>
  `;
  document.getElementById("productModal").classList.add("show");
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("show");
}

/* ===== Cart Drawer ===== */
function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

/* ===== Checkout ===== */
function openCheckout() {
  if (cart.length === 0) {
    showToast("Giỏ hàng đang trống");
    return;
  }

  closeCart();
  const total = getCartTotal();
  const body = document.getElementById("checkoutBody");
  body.innerHTML = `
    <div class="checkout-success">
      <i class="fa-solid fa-circle-check"></i>
      <h2>Đặt hàng thành công!</h2>
      <p style="color:#666;margin-top:8px">Cảm ơn bạn đã mua sắm (demo)</p>
    </div>
    <div class="checkout-summary">
      <div class="checkout-summary-row">
        <span>Số sản phẩm</span>
        <span>${getCartCount()}</span>
      </div>
      <div class="checkout-summary-row">
        <span>Tạm tính</span>
        <span>${formatPrice(total)}</span>
      </div>
      <div class="checkout-summary-row">
        <span>Phí vận chuyển</span>
        <span style="color:#22c55e">Miễn phí</span>
      </div>
      <div class="checkout-summary-row total">
        <span>Tổng thanh toán</span>
        <span>${formatPrice(total)}</span>
      </div>
    </div>
    <button class="btn-primary btn-block" id="finishCheckout">Tiếp tục mua sắm</button>
  `;
  document.getElementById("checkoutModal").classList.add("show");

  // Clear cart after "order"
  cart = [];
  saveCart();
  updateCartUI();
}

function closeCheckout() {
  document.getElementById("checkoutModal").classList.remove("show");
}

/* ===== Countdown ===== */
function startCountdown() {
  // Fake countdown to end of day
  function update() {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    let diff = Math.max(0, end - now);

    const h = Math.floor(diff / 3600000);
    diff %= 3600000;
    const m = Math.floor(diff / 60000);
    diff %= 60000;
    const s = Math.floor(diff / 1000);

    document.getElementById("cdHours").textContent = String(h).padStart(2, "0");
    document.getElementById("cdMins").textContent = String(m).padStart(2, "0");
    document.getElementById("cdSecs").textContent = String(s).padStart(2, "0");
  }
  update();
  setInterval(update, 1000);
}

/* ===== Event Listeners ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderFlashSale();
  updateCartUI();
  startCountdown();

  // Category filter
  document.getElementById("categoryList").addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-btn");
    if (!btn) return;
    document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderProducts();
  });

  // Sort
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  // Search
  const doSearch = () => {
    searchQuery = document.getElementById("searchInput").value.trim();
    renderProducts();
  };
  document.getElementById("searchBtn").addEventListener("click", doSearch);
  document.getElementById("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") doSearch();
  });
  // Live search (debounced)
  let searchTimer;
  document.getElementById("searchInput").addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(doSearch, 300);
  });

  // Product grid clicks (delegation)
  document.getElementById("productGrid").addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-cart-btn");
    if (addBtn) {
      e.stopPropagation();
      addToCart(+addBtn.dataset.id);
      return;
    }
    const card = e.target.closest(".product-card");
    if (card) openProductModal(+card.dataset.id);
  });

  // Flash sale grid
  document.getElementById("flashProducts").addEventListener("click", (e) => {
    const addBtn = e.target.closest(".add-cart-btn");
    if (addBtn) {
      e.stopPropagation();
      addToCart(+addBtn.dataset.id);
      return;
    }
    const card = e.target.closest(".product-card");
    if (card) openProductModal(+card.dataset.id);
  });

  // Cart drawer
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("closeCart").addEventListener("click", closeCart);
  document.getElementById("overlay").addEventListener("click", closeCart);

  // Cart body actions
  document.getElementById("cartBody").addEventListener("click", (e) => {
    const qtyBtn = e.target.closest(".qty-btn");
    if (qtyBtn) {
      changeQty(+qtyBtn.dataset.id, qtyBtn.dataset.action);
      return;
    }
    const removeBtn = e.target.closest(".cart-item-remove");
    if (removeBtn) removeFromCart(+removeBtn.dataset.id);
  });

  // Checkout
  document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
  document.getElementById("closeCheckout").addEventListener("click", closeCheckout);
  document.getElementById("checkoutBody").addEventListener("click", (e) => {
    if (e.target.id === "finishCheckout") closeCheckout();
  });

  // Product modal
  document.getElementById("closeModal").addEventListener("click", closeProductModal);
  document.getElementById("productModal").addEventListener("click", (e) => {
    if (e.target.id === "productModal") closeProductModal();
  });
  document.getElementById("modalBody").addEventListener("click", (e) => {
    const addBtn = e.target.closest("#modalAddCart");
    if (addBtn) {
      addToCart(+addBtn.dataset.id);
      return;
    }
    const buyBtn = e.target.closest("#modalBuyNow");
    if (buyBtn) {
      addToCart(+buyBtn.dataset.id);
      closeProductModal();
      openCart();
    }
  });

  // Logo click → reset
  document.getElementById("logo").addEventListener("click", (e) => {
    e.preventDefault();
    currentCategory = "all";
    currentSort = "default";
    searchQuery = "";
    document.getElementById("searchInput").value = "";
    document.getElementById("sortSelect").value = "default";
    document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
    document.querySelector('.cat-btn[data-cat="all"]').classList.add("active");
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // User button (demo)
  document.getElementById("userBtn").addEventListener("click", () => {
    showToast("Tính năng đăng nhập (demo)");
  });
});
