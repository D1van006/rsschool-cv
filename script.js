function CV () {

 // Burger

    const mobileBurger = document.querySelector('.mobileBurger');
    const menu = document.querySelector('.popup')
    const close = document.querySelector('.closeButton')
    const menuNav = document.querySelectorAll('.nav-item');

    mobileBurger.addEventListener('click', () => {
        menu.classList.add('active');
    
    });
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    menuNav.forEach(element => {
        element.addEventListener('click', () => {
            menu.classList.remove('active');

        })})
    };
CV();

