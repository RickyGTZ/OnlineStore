document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartButton = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
  
    addToCartButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const cartCountElement = document.getElementById('cart-count');
        const currentCartCount = parseInt(cartCountElement.textContent, 10);
        cartCountElement.textContent = currentCartCount + 1;
  
        const productTitle = this.parentElement.querySelector('h3').textContent;
        const listItem = document.createElement('li');
        listItem.textContent = productTitle;
        cartItems.appendChild(listItem);
  
        cartOverlay.classList.remove('hidden');
      });
    });
  
    closeCartButton.addEventListener('click', function () {
      cartOverlay.classList.add('hidden');
    });
  });
  const categoryFilter = document.getElementById('category-filter');

categoryFilter.addEventListener('change', function () {
  const selectedCategory = this.value;
  const products = document.querySelectorAll('.product');

  products.forEach(function (product) {
    if (selectedCategory === 'all') {
      product.style.display = 'block';
    } else if (product.dataset.category === selectedCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
