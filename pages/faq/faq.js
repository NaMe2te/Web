

let faqSummary = document.querySelector('.faq__summary');
let answer = document.querySelector('.answer');
let faqDetails = document.querySelector('.faq__details');
let loader = document.querySelector('.lds-dual-ring');

let home = document.getElementById('home');

let getHome = function() {
    window.location = '../../index.html';
}
home.addEventListener('click', getHome);

faqSummary.addEventListener('click', () => {
    if (!faqDetails.open){
        if (answer.children.length != 0) {
            while (answer.firstChild) {
                if (answer.children.length == 0) {
                    break;
                }
                answer.removeChild(answer.lastChild);
            }
        }
    
        loader.style.display = 'inline-block'
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users?_start=1&_limit=${Math.floor(Math.random() * (8 - 4 + 1) + 4)}`)
            .then(response => response.json()) 
            .then(data => {
                loader.style.display = 'none'
                data.forEach(provider => {
                    const providerEl = document.createElement('li');
                    providerEl.textContent = provider.name + " - " + provider.email;
                    answer.appendChild(providerEl);
                })
            })
            .catch(error => {
                loader.style.display = 'none'
                Toastify({
                    text: "⚠ Что-то пошло не так",
                    duration: 3000,
                    destination: "",
                    newWindow: true,
                    close: true,
                    gravity: "bottom",
                    position: "right",
                    stopOnFocus: true,
                    style: {
                        background: "#ff0000",
                    },
                    onClick: function() {}
                }).showToast();
            });
        }, 2000);
    }
});