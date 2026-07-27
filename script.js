// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // 1. Contador de "Curtidas" nos Projetos
    const botoesCurtir = document.querySelectorAll('.btn-curtir');

    botoesCurtir.forEach((botao) => {
        let contador = 0;
        botao.addEventListener('click', () => {
            contador++;
            botao.textContent = `❤️ ${contador} ${contador === 1 ? 'Curtida' : 'Curtidas'}`;
            botao.classList.add('curtido');
        });
    });

    // 2. Rolagem suave ao clicar nos links do menu
    const linksMenu = document.querySelectorAll('.nav-links a[href^="#"]');

    linksMenu.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o salto brusco padrão
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Notificação interativa ao clicar em "Enviar E-mail"
    const btnEmail = document.querySelector('.btn-email');
    if (btnEmail) {
        btnEmail.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Obrigado pelo contato! Redirecionando para o seu cliente de e-mail...');
            window.location.href = btnEmail.getAttribute('href');
        });
    }

});