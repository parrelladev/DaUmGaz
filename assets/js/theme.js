// Função para alternar o tema
function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle i');
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    themeToggle.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', newTheme);
}

// Função para aplicar o tema salvo
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle i');
    
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        themeToggle.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Aplica o tema salvo
    applySavedTheme();
    
    // Adiciona o evento de clique ao botão
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}); 