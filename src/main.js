
/*

Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*/

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let iconName = document.querySelector("#icon-error-name");
let iconLastName = document.querySelector("#icon-error-lastname");
let iconEmail = document.querySelector("#icon-error-email");
let iconPassword = document.querySelector("#icon-error-password");


function signUp(event) {
    event.preventDefault();
    

    if (firstName.value == "") {
        let errorNameMessage = document.querySelector("#name-error");
        errorNameMessage.innerHTML = "First Name cannot be empty";
        iconName.style.visibility = "visible";
    } else {
        null;


    } if (lastName.value == ""){
        let errorLastNameMessage = document.querySelector("#lastname-error");
        errorLastNameMessage.innerHTML = "Last Name cannot be empty";
        iconLastName.style.visibility = "visible";
    } else {
        null;
     

    } if (email.value == "") {
        let errorEmailMessage = document.querySelector("#email-error");
        errorEmailMessage.innerHTML = "Looks like this is not an email";
        iconEmail.style.visibility = "visible";

    } else {
        null;
       

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






  

  