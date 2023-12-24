let person_account = document.getElementById('person-account');
let buttonFooter = document.querySelector('.button__footer');

person_account.addEventListener('click', () => {
    window.location = 'pages/login/login.html';
});

buttonFooter.addEventListener('click', () => {
    window.location = 'pages/form/form.html';
});

