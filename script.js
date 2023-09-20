// Função para rolar suavemente
function scrollToSection(id) {
    const section = document.querySelector(id);
    const headerHeight = document.getElementById('main-header').offsetHeight; // Obtém a altura do cabeçalho
    if (section) {
        window.scrollTo({
            top: section.offsetTop - headerHeight, // Subtrai a altura do cabeçalho
            behavior: 'smooth'
        });

        // Remove a classe "active" de todos os itens de navegação
        const navItems = document.querySelectorAll('.news-section-nav-item');
        navItems.forEach(item => item.classList.remove('active'));

        // Adiciona a classe "active" ao item de navegação correspondente
        const navItem = document.querySelector(`a[href="${id}"]`);
        if (navItem) {
            navItem.parentElement.classList.add('active');
        }
    }
}

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const headerHeight = document.getElementById('main-header').offsetHeight;

    const tecnologiaSection = document.getElementById('tecnologia');
    const saudeSection = document.getElementById('saude');
    const culturaPopSection = document.getElementById('cultura-pop'); // Nova categoria
    const jogosSection = document.getElementById('jogos'); // Nova categoria
    const culinariaSection = document.getElementById('culinaria'); // Nova categoria
    const maisSection = document.getElementById('mais'); // Nova categoria

    const tecnologiaNavItem = document.querySelector('a[href="#tecnologia"]').parentElement;
    const saudeNavItem = document.querySelector('a[href="#saude"]').parentElement;
    const culturaPopNavItem = document.querySelector('a[href="#cultura-pop"]').parentElement; // Nova categoria
    const jogosNavItem = document.querySelector('a[href="#jogos"]').parentElement; // Nova categoria
    const culinariaNavItem = document.querySelector('a[href="#culinaria"]').parentElement; // Nova categoria
    const maisNavItem = document.querySelector('a[href="#mais"]').parentElement; // Nova categoria

    if (
        scrollPosition >= tecnologiaSection.offsetTop - headerHeight &&
        scrollPosition < saudeSection.offsetTop - headerHeight
    ) {
        tecnologiaNavItem.classList.add('active');
        saudeNavItem.classList.remove('active');
        culturaPopNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Cultura POP"
        jogosNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Jogos"
        culinariaNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Culinária"
        maisNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Mais"
    } else if (scrollPosition >= saudeSection.offsetTop - headerHeight && scrollPosition < culturaPopSection.offsetTop - headerHeight) {
        saudeNavItem.classList.add('active');
        tecnologiaNavItem.classList.remove('active');
        culturaPopNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Cultura POP"
        jogosNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Jogos"
        culinariaNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Culinária"
        maisNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Mais"
    } else if (scrollPosition >= culturaPopSection.offsetTop - headerHeight && scrollPosition < jogosSection.offsetTop - headerHeight) { // Nova categoria
        culturaPopNavItem.classList.add('active'); // Adiciona a classe 'active' à categoria "Cultura POP"
        tecnologiaNavItem.classList.remove('active');
        saudeNavItem.classList.remove('active');
        jogosNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Jogos"
        culinariaNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Culinária"
        maisNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Mais"
    } else if (scrollPosition >= jogosSection.offsetTop - headerHeight && scrollPosition < culinariaSection.offsetTop - headerHeight) { // Nova categoria
        jogosNavItem.classList.add('active'); // Adiciona a classe 'active' à categoria "Jogos"
        tecnologiaNavItem.classList.remove('active');
        saudeNavItem.classList.remove('active');
        culturaPopNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Cultura POP"
        culinariaNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Culinária"
        maisNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Mais"
    } else if (scrollPosition >= culinariaSection.offsetTop - headerHeight && scrollPosition < maisSection.offsetTop - headerHeight) { // Nova categoria
        culinariaNavItem.classList.add('active'); // Adiciona a classe 'active' à categoria "Culinária"
        tecnologiaNavItem.classList.remove('active');
        saudeNavItem.classList.remove('active');
        culturaPopNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Cultura POP"
        jogosNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Jogos"
        maisNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Mais"
    } else if (scrollPosition >= maisSection.offsetTop - headerHeight) { // Nova categoria
        maisNavItem.classList.add('active'); // Adiciona a classe 'active' à categoria "Mais"
        tecnologiaNavItem.classList.remove('active');
        saudeNavItem.classList.remove('active');
        culturaPopNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Cultura POP"
        jogosNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Jogos"
        culinariaNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Culinária"
    } else {
        tecnologiaNavItem.classList.remove('active');
        saudeNavItem.classList.remove('active');
        culturaPopNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Cultura POP"
        jogosNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Jogos"
        culinariaNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Culinária"
        maisNavItem.classList.remove('active'); // Remove a classe 'active' da categoria "Mais"
    }
});

// Adicione um evento de clique para os links de navegação
document.addEventListener('DOMContentLoaded', function () {
    const tecnologiaLink = document.querySelector('a[href="#tecnologia"]');
    const saudeLink = document.querySelector('a[href="#saude"]');
    const culturaPopLink = document.querySelector('a[href="#cultura-pop"]'); // Nova categoria
    const jogosLink = document.querySelector('a[href="#jogos"]'); // Nova categoria
    const culinariaLink = document.querySelector('a[href="#culinaria"]'); // Nova categoria
    const maisLink = document.querySelector('a[href="#mais"]'); // Nova categoria

    if (tecnologiaLink) {
        tecnologiaLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection('#tecnologia');
        });
    }

    if (saudeLink) {
        saudeLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection('#saude');
        });
    }

    if (culturaPopLink) { // Nova categoria
        culturaPopLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection('#cultura-pop');
        });
    }

    if (jogosLink) { // Nova categoria
        jogosLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection('#jogos');
        });
    }

    if (culinariaLink) { // Nova categoria
        culinariaLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection('#culinaria');
        });
    }

    if (maisLink) { // Nova categoria
        maisLink.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection('#mais');
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.news-section-nav-item'); // Seleciona todas as categorias

    categories.forEach(function (category) {
        category.addEventListener('mouseover', function () {
            // Adiciona a classe 'active' ao passar o mouse sobre a categoria
            category.classList.add('active');
        });

        category.addEventListener('mouseout', function () {
            // Remove a classe 'active' ao tirar o mouse da categoria, exceto se for a categoria 'current'
            if (!category.classList.contains('current')) {
                category.classList.remove('active');
            }
        });

        category.addEventListener('click', function () {
            // Remove a classe 'active' de todas as categorias e adiciona à categoria clicada
            categories.forEach(function (c) {
                c.classList.remove('active');
            });
            category.classList.add('active');

            // Marca a categoria atual como 'current'
            categories.forEach(function (c) {
                c.classList.remove('current');
            });
            category.classList.add('current');
        });
    });
});
