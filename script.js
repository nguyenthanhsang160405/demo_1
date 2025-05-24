let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;

  // Hiệu ứng rung nhẹ
  const cartIcon = document.querySelector('.cart');
  cartIcon.classList.add('shake');
  setTimeout(() => {
    cartIcon.classList.remove('shake');
  }, 500);
}
