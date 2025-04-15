// Theme Toggle Logic
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

function setTheme(isLight) {
    document.body.classList.toggle('light-mode', isLight);
    themeIcon.textContent = isLight ? '🌞' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function toggleTheme() {
    const isLight = !document.body.classList.contains('light-mode');
    setTheme(isLight);
}

// Initialize Theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme === 'light');
    
    // Add event listener
    themeToggle.addEventListener('click', toggleTheme);
    
    // Add keyboard support
    themeToggle.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') toggleTheme();
    });
}

// Initialize when loaded
document.addEventListener('DOMContentLoaded', initTheme);
