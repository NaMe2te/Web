let home = document.getElementById('home');
let cancelBtn = document.querySelector('.cancelbtn');

let getHome = function() {
    window.location = '../../index.html';
}

home.addEventListener('click', getHome);
cancelBtn.addEventListener('click', getHome);