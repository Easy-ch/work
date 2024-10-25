document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвращаем переход по ссылке

        // Находим целевой элемент по ID из href
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Плавный скроллинг к цели
        targetElement.scrollIntoView({
            behavior: 'smooth', // Плавная прокрутка
            block: 'start' // Прокручиваем к началу секции
        });
    });
});