let cancelBtn = document.querySelector('.cancelbtn');

let getHome = function() {
    window.location = 'index.html';
}

cancelBtn.addEventListener('click', getHome);