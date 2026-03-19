// ===========================
// ROLAGEM SUAVE PARA ÂNCORAS
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===========================
// MODO CLARO / ESCURO
// ===========================
const themeToggle = document.querySelector('.toggle-theme');
const body = document.body;

// Verifica tema salvo no localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');  // mesma classe do CSS
    themeToggle.classList.remove('fa-sun'); 
    themeToggle.classList.add('fa-moon');
}

// Alterna tema
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme'); // mesma classe do CSS

    if(body.classList.contains('light-theme')) {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// ===========================
// MENU ATIVO AO ROLAR
// ===========================
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// ANIMAÇÃO DE FADE-IN AO ENTRAR NA TELA
// ===========================
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

console.log("Portfólio de Tiago Simao carregado com sucesso!");