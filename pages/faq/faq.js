let faqSummary = document.querySelector('.faq__summary');
let answer = document.querySelector('.answer');
let faqDetails = document.querySelector('.faq__details');
let loader = document.querySelector('.lds-dual-ring');
let person_account = document.getElementById('person-account');

person_account.addEventListener('click', () => {
    window.location = '../login/login.html';
});

faqSummary.addEventListener('click', () => {
    if (!faqDetails.open) {
        if (answer.children.length > 1) {
            while (answer.firstChild) {
                if (answer.children.length === 1) {
                    break;
                }

                console.log(answer.lastChild.nodeName);
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
                    let template = document.querySelector('#provider');
                    let clone = template.content.cloneNode(true);
                    let providerElement = clone.children[0];
                    providerElement.children[0].textContent = provider.name
                    providerElement.children[1].textContent = provider.email;
                    
                    answer.appendChild(clone);
                })
            })
            .catch(error => {
                loader.style.display = 'none'
                const errorEl = document.createElement('div');
                errorEl.textContent = "⚠ Что-то пошло не так";
                errorEl.classList.add('error');
                answer.appendChild(errorEl);
            });
        }, 2000);
    }
});