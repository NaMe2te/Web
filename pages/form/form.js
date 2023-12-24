let additionForm = document.querySelector('.addition__form');
let additionButton = document.querySelector('.addition__button');
let cancelButton = document.querySelector('.cancelbtn');
let makeAdditionButton = document.getElementById('make_addition__button');

window.addEventListener('load', () => {
    let clientList = JSON.parse(localStorage.getItem("clients")) || [];
    let table = document.getElementById("customer__table")
    let tbody = table.children[1];

    for (let i = 0; i < clientList.length; i++) {
        tbody.appendChild(createNewTableRow(clientList[i].firstName, clientList[i].lastName, clientList[i].address));
    }
})

additionButton.addEventListener('click', () => {
    if (additionForm.classList.contains('addition__form-hidden')) {
        additionForm.classList.remove('addition__form-hidden');
    }

    document.body.classList.add()
});

cancelButton.addEventListener('click', () => {
    if (!additionForm.classList.contains('addition__form-hidden')) {
        additionForm.classList.add('addition__form-hidden');
    }
});

additionForm.addEventListener('submit', (evt) => {
    evt.preventDefault(); 

    document.querySelector('.error_section').textContent = '';

    let first_name_el = document.getElementById("first_name");
    let last_name_el = document.getElementById("last_name");
    let address_el = document.getElementById("address");

    let firstName = first_name_el.value;
    let lastName = last_name_el.value;
    let address = address_el.value;
    
    let table = document.getElementById("customer__table")
    let tbody = table.children[1];
    
    if (!validationTable(firstName, lastName, address)) {
        return;
    }

    tbody.appendChild(createNewTableRow(firstName, lastName, address));

    let client = { firstName, lastName, address };

    let clientList = JSON.parse(localStorage.getItem("clients")) || [];
    clientList.push(client);
    localStorage.setItem("clients", JSON.stringify(clientList));


    first_name_el.value = '';
    last_name_el.value = '';
    address_el.value = '';
});

function createNewTableRow(firstName, lastName, address) {
    let template = document.getElementById('table-template');
    let clone = template.content.cloneNode(true);
    let tdList = clone.querySelectorAll('td');

    tdList[0].textContent = firstName;
    tdList[1].textContent = lastName;
    tdList[2].textContent = address;
    return clone;
}

function validationTable(firstName, lastName, address) {
    let error = document.querySelector('.error_section');
    if (firstName.trim() === '') {
        error.textContent = 'First name cannot be empty';
        return false;
    }

    if (lastName.trim() === '') {
        error.textContent = 'Last name cannot be empty';
        return false;
    }

    if (address.trim() === '') {
        error.textContent = 'Address cannot be empty';
        return false;
    }

    return true;
}