document.addEventListener("DOMContentLoaded", function() {
    let ul = document.querySelector('.header-bar__navigation').children[0];
    let menuItems = ul.children;
    for (let i = 0; i < menuItems.length; i++) {
        let link = menuItems[i].querySelector('a');
        console.log(document.location["href"]);
        if (document.location["href"] === link.href) {
            console.log(1)
            menuItems[i].querySelector('a').classList.add('choose-page');
        }
    }
});