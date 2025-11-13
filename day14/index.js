document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');
  const productGrid = document.getElementById('productGrid');
  const cartCountEl = document.getElementById('cartCount');

  // simple cart counter
  let cartCount = 0;
  function updateCart(n=0){
    cartCount += n;
    cartCountEl.textContent = cartCount;
  }

  // add-to-cart handlers
  productGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.addBtn');
    if(!btn) return;
    updateCart(1);
    btn.textContent = 'Added';
    btn.disabled = true;
    setTimeout(()=>{ btn.textContent = 'Add to cart'; btn.disabled = false; }, 1000);
  });

  // search filter by data-title
  searchForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const q = (searchInput.value || '').trim().toLowerCase();
    filterProducts(q);
  });

  // live search
  searchInput.addEventListener('input', () => {
    filterProducts(searchInput.value.trim().toLowerCase());
  });

  function filterProducts(query){
    const cards = productGrid.querySelectorAll('.card');
    cards.forEach(card => {
      const title = (card.dataset.title || '').toLowerCase();
      card.style.display = (!query || title.includes(query)) ? '' : 'none';
    });
  }

  // small helper: keyboard shortcut "/" focuses search
  window.addEventListener('keydown', (e) => {
    if(e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      searchInput.focus();
    }
  });
});