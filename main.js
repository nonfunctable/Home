lucide.createIcons();

function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1) || 'home';
    navigateTo(hash);
});

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1) || 'home';
    navigateTo(hash);
});

function openUpdate(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    card.classList.add('opening');

    setTimeout(() => {
        card.classList.remove('opening');
        navigateTo('update-details');
    }, 800);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const hash = this.getAttribute('href').substring(1);
        if (hash) {
            e.preventDefault();
            window.location.hash = hash;
            navigateTo(hash);
        }
    });
});
