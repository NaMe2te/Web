(() => {
    let navigation = document.querySelector('.header-bar__navigation');
    let navigationItems = navigation.querySelectorAll('li');

    navigationItems.forEach(item => {
        let link = item.querySelector('a');

        if (link.classList.contains('choose-page')) {
            link.classList.remove('choose-page');
        }
    });

    console.log(window.location.pathname);

    switch (window.location.pathname) {
        case '/':
            let home = document.getElementById('home');
            home.classList.add('choose-page');
            break; 
        case '/':
            let faq = document.getElementById('faq');
            faq.classList.add('choose-page');
            break; 
        default:
            break;
    }
})();
