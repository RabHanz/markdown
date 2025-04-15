function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  localStorage.setItem('lightMode', isLight);
  document.querySelector('.dark-mode-toggle').textContent = isLight ? '🌙' : '🌞';
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedLightMode = localStorage.getItem('lightMode') === 'true';
  if (savedLightMode) {
    document.body.classList.add('light-mode');
    document.querySelector('.dark-mode-toggle').textContent = '🌙';
  }
});
