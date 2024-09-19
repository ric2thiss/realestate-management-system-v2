




// Reusable Functions

// Validate length of input
function validateLength(label, value, min, max) {
    if (value.length < min) {
        return `${label} must be at least ${min} characters.`;
    } else if (value.length > max) {
        return `${label} must be no more than ${max} characters.`;
    }
    return false;
}

// Check for double spaces or more
function hasDoubleSpace(str) {
    // Check if the input starts with a space in case if the trim doesnt work 
    // This shoud be like a call back
    if (str.startsWith(" ")) {
        return true;
    }
    // Check for two or more consecutive spaces
    return /\s{2,}/.test(str);
}

// Check for three consecutive uppercase or lowercase letters
function hasConsecutiveChars(value) {
    let consecutiveCount = 1;
    value = value.toLowerCase(); // To handle both upper and lower case
    for (let i = 1; i < value.length; i++) {
        if (value[i] === value[i - 1]) {
            consecutiveCount++;
            if (consecutiveCount === 3) {
                return true;
            }
        } else {
            consecutiveCount = 1;
        }
    }
    return false;
}

// Check if each word starts with a capital letter and others are lowercase
function validateNameCapitalization(name) {
    const regex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    if (!regex.test(name)) {
        return "First letter of each word must start with a capital letter (e.g., Juan Carlo).";
    }
    return false;
}

// Check password strength
function checkPasswordStrength(password) {
    const length = password.length;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`]/.test(password);

    if (length >= 8 && hasLetter && hasDigit && hasSpecialChar) {
        return "strong";
    } else if (length >= 8 && hasLetter && hasDigit) {
        return "medium";
    } else if (length >= 8 && hasLetter) {
        return "weak";
    } else {
        return "invalid";
    }
}

// Validate if passwords match
function validatePasswordMatch(password, reEnteredPassword) {
    if (password !== reEnteredPassword) {
        return "Passwords do not match.";
    }
    return null;
}

// Validate name extension
function validateNameExtension(extension) {
    const validExtensions = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return extension === '' || validExtensions.includes(extension) ? false : "Invalid extension name.";
}

// Validate address fields
function validateAddress(purok, barangay, city, province, country, zip) {
    if (!purok || !barangay || !city || !province || !country || !zip) {
        return "All address fields are required.";
    }

    if (hasDoubleSpace(purok) || hasDoubleSpace(barangay) || hasDoubleSpace(city) || hasDoubleSpace(province) || hasDoubleSpace(country)) {
        return "No double spaces allowed in address fields.";
    }

    const zipValidation = validateLength("Zip Code", zip, 4, 6);
    if (zipValidation) {
        return zipValidation;
    }

    return null;
}

// Validate email
function validateEmail(email) {
    const atSymbolIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    if (atSymbolIndex === -1 || dotIndex === -1 || atSymbolIndex > dotIndex || atSymbolIndex < 1 || dotIndex - atSymbolIndex < 2) {
        return "Invalid email address.";
    }
    return false;
}

// Validate middle initial (optional field)
function validateMiddleInitial(middleInitial) {
    if (middleInitial === "") {
        return false;
    } else if (middleInitial === middleInitial.toLowerCase()) {
        return "Middle initial must be capitalized.";
    } else if (middleInitial.length > 2) {
        return "Middle initial must not be greater than 2 characters.";
    }
    return false;
}

// Empty function to check if the username already exists
// function checkUsernameExists(username) {
    // Logic to check if the username exists in the database
    // return false; Placeholder return statement
// }

// Validate sex input
function validateSex(sex) {
    if (!sex) {
        return "Please select a valid gender.";
    }
    return false;
}

// Registration form validation
function validateRegForm(event) {
    event.preventDefault();
    const form = document.forms['form'];

    // Get input values
    const firstname = form["firstname"].value.trim();
    const lastname = form["lastname"].value.trim();
    const email = form["email"].value.trim();
    const sex = form["sex"].value;
    const purok = form["purok"].value.trim();
    const barangay = form["barangay"].value.trim();
    const city = form["city"].value.trim();
    const province = form["province"].value.trim();
    const country = form["country"].value.trim();
    const zip = form["zip"].value.trim();
    const username = form["username"].value.trim();
    const password = form["password"].value.trim();
    const reenterpassword = form["reenterpassword"].value.trim();
    const middleinitial = form["middleinitial"].value.trim();
    const extensionname = form["extensionname"].value.trim();

    // Check double spaces
    if (hasDoubleSpace(firstname) || hasDoubleSpace(lastname) || hasDoubleSpace(username)) {
        alert("No double spaces allowed in names or username.");
        return;
    }

    // Check three consecutive characters
    const fieldsToCheck = [firstname, lastname, username, password];
    for (let field of fieldsToCheck) {
        if (hasConsecutiveChars(field)) {
            alert("No three consecutive identical characters allowed.");
            return;
        }
    }

    // Validate fields
    const firstnameValidation = validateLength("First Name", firstname, 3, 50) || validateNameCapitalization(firstname);
    const lastnameValidation = validateLength("Last Name", lastname, 3, 70) || validateNameCapitalization(lastname);
    const middleinitialValidation = validateMiddleInitial(middleinitial);
    const emailValidation = validateEmail(email);
    const sexValidation = validateSex(sex);
    const addressValidation = validateAddress(purok, barangay, city, province, country, zip);
    const usernameValidation = validateLength("Username", username, 3, 50);
    // const usernameExists = checkUsernameExists(username); // Placeholder for checking username existence Add logic to the actual method
    const passwordValidation = checkPasswordStrength(password);
    const passwordMatchValidation = validatePasswordMatch(password, reenterpassword);
    const extensionnameValidation = validateNameExtension(extensionname);

    

    // Display validation errors
    if (firstnameValidation) {
        alert(firstnameValidation);
        return;
    }

    if (lastnameValidation) {
        alert(lastnameValidation);
        return;
    }

    if (middleinitialValidation) {
        alert(middleinitialValidation);
        return;
    }
    if(extensionnameValidation){
        alert(extensionnameValidation);
        return;
    }

    if (emailValidation) {
        alert(emailValidation);
        return;
    }

    if (sexValidation) {
        alert(sexValidation);
        return;
    }

    if (addressValidation) {
        alert(addressValidation);
        return;
    }

    if (usernameValidation) {
        alert(usernameValidation);
        return;
    }

    // if (usernameExists) {
    //     alert("Username already exists. Please choose a different one.");
    //     return;
    // }

    if (passwordValidation === "invalid") {
        alert("Password must be at least 8 characters long and contain letters and numbers.");
        return;
    }else{
        alert(passwordValidation)
    }

    if (passwordMatchValidation) {
        alert(passwordMatchValidation);
        return;
    }

    if (extensionnameValidation) {
        alert(extensionnameValidation);
        return;
    }


    // Add your logic for successful registration
    // ----- -_- -------
    alert("Registration is successful!");
    
}

