let submit = document.querySelector("#submit");

const userData = {
  FirstName: "",
  middleName: "",
  lastName: "",
  Email: "",
  Password: "",
};


function reset() {
    form.reset();
  }

let FirstName = document.querySelector("#FirstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#Email");
let password = document.querySelector("#Password");
let confirmPassword = document.querySelector("#confirmPassword");


function errorMessage(field, message) {
    clearMessage(field);
    let errorM = document.createElement("span");
    errorM.classList.add("ErrorM");
    errorM.textContent = `${field.name} ${message}`;

    field.parentElement.appendChild(errorM);
}

function clearMessage(field) {
    let count = field.parentElement.childElementCount;
    if (count > 1) {
        field.parentElement.removeChild(field.parentElement.lastElementChild);
    }
}


function register(e) {
    e.preventDefault();

    if (FirstName.value.length <= 0) {
        errorMessage(FirstName, "Cannot be empty.");
    } else {
        clearMessage(FirstName)
    }
    if (lastName.value.length <= 0) {
        errorMessage(lastName, "Cannot be empty.");
    } else {
        clearMessage(lastName)
    }
    if (email.value.length <= 0) {
        errorMessage(email, "Cannot be empty.");
    } else {
        clearMessage(email)
    }

    if (password.value.length <= 0) {
        errorMessage(password, "Cannot be empty.");
    } else if (password.value.length < 8) {
        errorMessage(password, "Cannot be less than 8 characters.");
    } else {
        clearMessage(password);
    }

    if (password.value !== confirmPassword.value) {
        errorMessage(confirmPassword, "do not match.");
    } else {
        clearMessage(confirmPassword);
    }



}
