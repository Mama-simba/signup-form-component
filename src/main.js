
/*

Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*/

let name = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");


function signUp(event) {
    event.preventDefault();
    

    if (name.value == "") {
        let errorNameMessage = document.querySelector("#name-error");
        errorNameMessage.innerHTML = "First Name cannot be empty";

        let errorLastNameMessage = document.querySelector("#lastname-error");
        errorLastNameMessage.innerHTML = "Last Name cannot be empty";

        let errorEmailMessage = document.querySelector("#email-error");
        errorEmailMessage.innerHTML = "Looks like this is not an email";


        let errorPasswordMessage = document.querySelector("#password-error");
        errorPasswordMessage.innerHTML = "Password cannot be empty";

        /*Icon error*/

        let iconError = document.querySelector("#icon-error");
        iconError.innerHTML = "img";
    
        
      
    } else {
        return null;
    }

   

}

let button = document.querySelector("#button");
button.addEventListener("click", signUp);






  

  