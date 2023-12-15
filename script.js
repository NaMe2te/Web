let person_account = document.getElementById('person-account');
let buttonFooter = document.querySelector('.button__footer');
let faqPage = document.getElementById('faq-page');

person_account.addEventListener('click', () => {
    window.location = '/pages/login/login.html';
});

buttonFooter.addEventListener('click', () => {
    window.location = '/pages/form/form.html';
});

faqPage.addEventListener('click', () => {
    window.location = '/pages/faq/faq.html';
});
