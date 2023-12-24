let faqSummary = document.querySelector('.faq__summary');
let answer = document.querySelector('.answer');
let faqDetails = document.querySelector('.faq__details');
let loader = document.querySelector('.lds-dual-ring');

faqSummary.addEventListener('click', () => {
    if (!faqDetails.open){
        if (answer.children.length != 1) {
            while (answer.firstChild) {
                if (answer.children.length == 1) {
                    break;
                }
                answer.removeChild(answer.lastChild);
            }
        }
    
        loader.style.display = 'inline-block'
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com`)
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
                    text: "Что-то пошло не так",
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