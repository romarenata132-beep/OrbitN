// Carregar Tema Salvo e Iniciar Loader
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('orbit-theme') || 'dark';
    setTheme(savedTheme);

    setTimeout(() => {
        const loader = document.getElementById('loader-screen');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1200); 
});

// Alternar Abas
function openTab(evt, tabName) {
    const contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) contents[i].classList.remove("active");
    
    const links = document.getElementsByClassName("nav-link");
    for (let i = 0; i < links.length; i++) links[i].classList.remove("active");
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Dropdown de Temas
function toggleMenu(event) {
    event.stopPropagation();
    document.getElementById("settings-dropdown").classList.toggle("show");
}

// Definir Tema
function setTheme(theme) {
    document.body.className = 'theme-' + theme;
    localStorage.setItem('orbit-theme', theme);
    document.getElementById("settings-dropdown").classList.remove("show");
}

// Fechar dropdown ao clicar fora
window.onclick = function(event) {
    if (!event.target.matches('#menu-btn') && !event.target.closest('#menu-btn')) {
        const dropdown = document.getElementById("settings-dropdown");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}
