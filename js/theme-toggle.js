const themeToggle = document.querySelector('.theme-toggle');
const themes = ['light', 'dark'];
// const themes = ['light', 'dark', 'high-contrast'];
let currentThemeIndex = 0;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
currentThemeIndex = themes.indexOf(savedTheme);
if (currentThemeIndex === -1) currentThemeIndex = 0;
document.documentElement.setAttribute('data-theme', savedTheme === 'light' ? '' : savedTheme);

themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    document.documentElement.setAttribute('data-theme', newTheme === 'light' ? '' : newTheme);
    localStorage.setItem('theme', newTheme);
});


const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}