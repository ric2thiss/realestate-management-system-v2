// Validation Functions

// Validate minimum and maximum length
function validateLength(value, min, max) {
    if (value.length < min) {
        return `Must be at least ${min} characters`;
    } else if (value.length > max) {
        return `Must be less than ${max} characters`;
    }
    return null;
}

// Check for double spaces
function hasDoubleSpace(value) {
    return /\s{2,}/.test(value);
}

// Check for three consecutive identical characters
function hasConsecutiveChars(value) {
    let consecutiveLetterCount = 1;
    value = value.toLowerCase();
    for (let i = 1; i < value.length; i++) {
        if (value[i] === value[i - 1]) {
            consecutiveLetterCount++;
            if (consecutiveLetterCount === 3) {
                return true;
            }
        } else {
            consecutiveLetterCount = 1; 
        }
    }
    return false;
}

// Check if a string contains a number
function hasANumber(value) {
    return /\d/.test(value);
}

// Capitalize the first letter of each word
function capitalizeFirstLetters(value) {
    return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Validate password strength
function checkPasswordStrength(password) {
    const strength = {
        weak: /^(?=.{6,})(?!.*[a-zA-Z0-9]).*$/,
        medium: /^(?=.*[a-zA-Z])(?=.*\d)(?=.{8,}).*$/,
        strong: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`]).{12,}$/,
    };

    if (strength.strong.test(password)) {
        return "strong";
    } else if (strength.medium.test(password)) {
        return "medium";
    } else if (strength.weak.test(password)) {
        return "weak";
    } else {
        return "invalid";
    }
}

// function checkPasswordStrength(password) {
//     const length = password.length;

//     // Check for strong password
//     const hasLetter = /[a-zA-Z]/.test(password);
//     const hasDigit = /\d/.test(password);
//     const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`]/.test(password);

//     if (length >= 12 && hasLetter && hasDigit && hasSpecialChar) {
//         return "strong";
//     } 
//     // Check for medium password
//     else if (length >= 8 && hasLetter && hasDigit) {
//         return "medium";
//     } 
//     // Check for weak password
//     else if (length >= 6) {
//         return "weak";
//     } 
//     // If it doesn't meet any criteria
//     else {
//         return "invalid";
//     }
// }


// Validate passwords match
function validatePasswordMatch(password, reEnteredPassword) {
    if (password !== reEnteredPassword) {
        return "Passwords do not match";
    }

    return null;
}

// Simulate username availability check (placeholder)
function checkUsernameAvailability(username) {
    // Simulate an API call or database check
    const existingUsernames = ['existingUser']; // Example array of existing usernames
    return existingUsernames.includes(username);
}

// Validate optional name extension
function validateNameExtension(extension) {
    const validExtensions = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    return extension === '' || validExtensions.includes(extension);
}

// Validate address
function validateAddress(purok, barangay, city, province, country, zip) {
    if (!purok || !barangay || !city || !province || !country || !zip) {
        return "All address fields are required";
    }

    if (hasDoubleSpace(purok) || hasDoubleSpace(barangay) || hasDoubleSpace(city) ||
        hasDoubleSpace(province) || hasDoubleSpace(country)) {
        return "No double spaces allowed in address fields";
    }

    if(validateLength(zip, 3, 6) !== null){
        return alert('Invalid Zip Code')
    }
    // if (!/^\d{5}$/.test(zip)) {
    //     return "Zip code must be exactly 5 digits";
    // }

    return null;
}

// Validate form
function validateForm(event) {
    event.preventDefault();

    const form = document.forms['form'];
    const fname = form['firstname'].value;
    const lname = form['lastname'].value;
    const middleInitial = form['middleinitial'].value;
    const extensionname = form['extensionname'].value;
    const email = form['email'].value;
    const sex = form['sex'].value;
    const purok = form['purok'].value;
    const barangay = form['barangay'].value;
    const city = form['city'].value;
    const province = form['province'].value;
    const country = form['country'].value;
    const zip = form['zip'].value;
    const username = form['username'].value;
    const password = form['password'].value;
    const reenteredPassword = form['reenterpassword'].value;



    // Validate first name and last name
    const fnameValidation = validateLength(fname, 2, 50);
    const lnameValidation = validateLength(lname, 2, 50);

    if (fnameValidation) {
        alert(`First name: ${fnameValidation}`);
    } else if (lnameValidation) {
        alert(`Last name: ${lnameValidation}`);
    } else {
        const capitalizedFname = capitalizeFirstLetters(fname);
        const capitalizedLname = capitalizeFirstLetters(lname);
        if (fname !== capitalizedFname) {
            alert("First letter of your name must start with a capital");
        }
        if (lname !== capitalizedLname) {
            alert("First letter of your last name must start with a capital");
        }
    }

    // Validate middle initial and name extension
    if (middleInitial && hasConsecutiveChars(middleInitial)) {
        alert("Middle Initial cannot have three consecutive identical characters");
    }
    if (extensionname && !validateNameExtension(extensionname)) {
        alert("Invalid name extension");
    }

    // Validate username
    if (checkUsernameAvailability(username)) {
        alert("Username is already taken");
    }

    // Validate password
    const passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === "invalid") {
        alert("Password does not meet the criteria");
    } else {
        alert(`Password strength: ${passwordStrength}`);
    }

    const passwordMatchError = validatePasswordMatch(password, reenteredPassword);
    if (passwordMatchError) {
        alert(passwordMatchError);
    }

    // Validate address
    const addressError = validateAddress(purok, barangay, city, province, country, zip);
    if (addressError) {
        alert(addressError);
    }
}

// Event listener for zip code
document.getElementById('zip').addEventListener('keyup', function(event) {
    const zip = event.target.value;

    if (zip.length > 3) { 
        fetch(`http://api.zippopotam.us/ph/${zip}`)
            .then(res => res.json())
            .then(data => {
                if (data.places && data.places.length > 0) {
                    document.getElementById('city').value = data.places[0]['place name'];
                }
            })
            .catch(err => {
                console.error('Error:', err);
                document.getElementById('city').value = '';
            });
    }
});
