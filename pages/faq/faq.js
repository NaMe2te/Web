let faqSummary = document.querySelector('.faq__summary');
let answer = document.querySelector('.answer');
let faqDetails = document.querySelector('.faq__details');
let loader = document.querySelector('.lds-dual-ring');

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
                const errorEl = document.createElement('li');
                errorEl.textContent = "⚠ Что-то пошло не так";
                errorEl.classList.add('error');
                answer.appendChild(errorEl);
            });
        }, 2000);
    }
});