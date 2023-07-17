let users = [];


const form = document.getElementById("myForm");
const tableBody = document.getElementById("userTableBody");


function createUser(fullName, rollNo, city, phoneNumber) {
    const user = { fullName, rollNo, city, phoneNumber };
    users.push(user);
}


// Function to display users in the table
function renderUsers() {
    // Clear the existing table rows
    tableBody.innerHTML = "";

    // Iterate through users and create table rows
    users.forEach((user, index) => {
        const row = tableBody.insertRow();

        const nameCell = row.insertCell();
        nameCell.textContent = user.fullName;

        
        const rollNoCell = row.insertCell();
        rollNoCell.textContent = user.rollNo;

        const cityCell = row.insertCell();
        cityCell.textContent = user.city;

        const phoneCell = row.insertCell();
        phoneCell.textContent = user.phoneNumber;

    });
}


// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("validationDefault01").value;
    const lastName = document.getElementById("validationDefault02").value;
    const rollNo = document.getElementById("validationDefault06").value;
    const city = document.getElementById("validationDefault03").value;
    const phoneNumber = document.getElementById("validationDefault04").value;

    const fullName = firstName + " " + lastName;


   createUser(fullName, rollNo, city, phoneNumber);
    


    // Render users in the table
    renderUsers();

    // Reset the form
    form.reset();
}

// Attach event listener to form submit
form.addEventListener("submit", handleSubmit);