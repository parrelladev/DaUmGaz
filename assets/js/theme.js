// Função para alternar o tema
export function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle i');
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Função para detectar o tema do sistema
export function detectSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Função para aplicar o tema
export function applyTheme(theme) {
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle i');
    html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
}

// Inicialização do tema
export function initTheme() {
    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const systemTheme = detectSystemTheme();
        applyTheme(systemTheme);
        localStorage.setItem('theme', systemTheme);
    }
    // Adiciona o listener para mudanças no tema do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        }
    });
    // Adiciona evento de clique ao botão
    document.querySelector('.theme-toggle').addEventListener('click', () => {
        toggleTheme();
        localStorage.removeItem('theme');
    });
}

document.addEventListener('DOMContentLoaded', initTheme); 