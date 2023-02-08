

function ValidateEmail() {
    var emailForm = document.getElementById("form");
    var emailInput = document.getElementById("input-email");
    var emailError = document.getElementById("error-msg");
    var validRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    
if(emailInput.value.match(validRegex)){
    emailForm.classList.add("valid");
    emailForm.classList.remove("invalid");
    emailError.innerHTML = "Your email address is valid";
    emailError.style.cssText = "color:green; font-size:12px; display:flex; padding-left: 17px;"
    emailInput.style.borderColor = "green";
}
else{
    emailForm.classList.remove("valid");
    emailForm.classList.add("invalid");
    emailError.innerHTML = "Please provide a valid email address";
    emailError.style.cssText = "color:red; font-size:12px; display:flex; padding-left: 17px;"
    emailInput.style.border = "1px solid";
    emailInput.style.borderColor = "red";
}
}

submitButton.addEventListener('submit', e => {
    e.preventDefault();
    emailValidation();
});