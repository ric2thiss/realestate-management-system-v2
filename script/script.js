"use strict"
// Reusable Functions
function validateLength(label, value, min, max){
    if(value < min ){
        return `${label} must be at least ${min} characters`;
    }else if(value > max){
        return `${label} must be no more than ${max} characters`
    }
    return false;
}

// Boolean result using regex or regular expression
function hasDoubleSpace(str) {
    return /\s{2,}/.test(str);
}


// Login Validation

// Registration Validation

function validateRegForm(event){
    event.preventDefault();

    // Get the form using the name attribute
    // Alternatives : getElementBy
    const form = document.forms["form"]

    // Get the input values
    // Personal Details
    const firstname = form["firstname"].value;
    const lastname = form["lastname"].value;
    const email = form["email"].value;
    const sex = form["sex"].value;
    const purok = form["purok"].value;
    const barangay = form["barangay"].value
    const city = form["city"].value
    const province = form["province"].value
    const country = form["country"].value
    const zip = form["zip"].value

    // Account
    const username = form["username"].value
    const password = form["password"].value;
    const confirm_password = form["confirm_password"].value;


    // This inputs are optional but needs to be validate
    const middleinitial = form["middleinitial"].value;
    const extensionname = form["extensionname"].value;

    
}