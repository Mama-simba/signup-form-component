
/*

Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*/

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");

let email = document.querySelector("#email");
const validRegex = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

let password = document.querySelector("#password");
let iconName = document.querySelector("#icon-error-name");
let iconLastName = document.querySelector("#icon-error-lastname");
let iconEmail = document.querySelector("#icon-error-email");
let iconPassword = document.querySelector("#icon-error-password");



function signUp(event) {
    event.preventDefault();
    
    //Fist Name input value check
    if (firstName.value == "") {
        let errorNameMessage = document.querySelector("#name-error");
        errorNameMessage.innerHTML = "First Name cannot be empty";
        iconName.style.visibility = "visible";
    } else {
        null;

    //Last Name input value check
    } if (lastName.value == ""){
        let errorLastNameMessage = document.querySelector("#lastname-error");
        errorLastNameMessage.innerHTML = "Last Name cannot be empty";
        iconLastName.style.visibility = "visible";
    } else {
        null;
     
    //Email input value check
    } if (email.value == "") {
        let errorEmailMessage = document.querySelector("#email-error");
        errorEmailMessage.innerHTML = "Email cannot be empty";
        iconEmail.style.visibility = "visible";

    //Incorrect email format    
    } else if (!email.value.match(validRegex)){
        let errorEmailMessage = document.querySelector("#email-error");
        errorEmailMessage.innerHTML = "Looks like this is not an email";
        email.style.color = "hsl(0, 100%, 74%)";

    } else {
        null;
       
    //Password input value check
    } if (password.value == ""){
        let errorPasswordMessage = document.querySelector("#password-error");
        errorPasswordMessage.innerHTML = "Password cannot be empty";
        iconPassword.style.visibility = "visible";
      
    } else {
        return null;
    }

}

   



let button = document.querySelector("#button");
button.addEventListener("click", signUp);






  

  