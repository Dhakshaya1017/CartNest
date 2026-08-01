const toastStack = document.querySelector('.toast-stack');

function showToast(message, type = 'info') {
  if (!toastStack) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<strong>${type.toUpperCase()}</strong><div>${message}</div>`;
  toastStack.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
}

function toggleWishlist(button) {
  button.classList.toggle('active');
  const label = button.classList.contains('active') ? 'Saved to wishlist' : 'Removed from wishlist';
  showToast(label, 'success');
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('is-open');
}

function initCountdown() {
  const countdown = document.querySelector('[data-countdown]');
  if (!countdown) return;

  const deadline = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 60 * 5 + 1000 * 60 * 20);
  const update = () => {
    const diff = deadline - new Date();
    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
    const mins = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
    const secs = Math.max(0, Math.floor((diff / 1000) % 60));

    document.querySelector('[data-days]').textContent = String(days).padStart(2, '0');
    document.querySelector('[data-hours]').textContent = String(hours).padStart(2, '0');
    document.querySelector('[data-mins]').textContent = String(mins).padStart(2, '0');
    document.querySelector('[data-secs]').textContent = String(secs).padStart(2, '0');
  };

  update();
  setInterval(update, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCountdown();

  document.querySelectorAll('.wishlist-btn').forEach((btn) => {
    btn.addEventListener('click', () => toggleWishlist(btn));
  });

  document.querySelectorAll('[data-toast]').forEach((btn) => {
    btn.addEventListener('click', () => showToast(btn.dataset.toast, 'success'));
  });

  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }
});
