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

    let first_name_el = document.getElementById("first_name");
    let last_name_el = document.getElementById("last_name");
    let address_el = document.getElementById("address")

    let firstName = first_name_el.value;
    let lastName = last_name_el.value;
    let address = address_el.value;
    
    let table = document.getElementById("customer__table")
    let tbody = table.children[1];
    
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
    var clone = template.content.cloneNode(true);
    var cells = clone.querySelectorAll('td');

    cells[0].textContent = firstName;
    cells[1].textContent = lastName;
    cells[2].textContent = address;
    return clone;
}