
let error;

class DataFromForm{
    constructor(firstname, lastname, middleinitial, extensionname, email, sex, purok, barangay, province, country, zip, username, password, reenterpassword){
        this.firstname = firstname;
        this.lastname = lastname;
        this.middleinitial = middleinitial;
        this.extensionname = extensionname;
        this.email = email;
        this.sex = sex;
        this.purok = purok;
        this.barangay = barangay;
        this.province = province;
        this.country = country;
        this.zip = zip;
        this.username = username;
        this.password = password;
        this.reenterpassword = reenterpassword;
    }
}


function check_consecutive_input_letter(data){
    let consecutiveCount = 1;
    data = data.toLowerCase();
    for (let i = 1; i < data.length; i++) {
        if (data[i] === data[i - 1]) {
            consecutiveCount++;
            if (consecutiveCount === 3) {
                alert("Three consecutive duplicate characters found");
                return true;
            }
        } else {
            consecutiveCount = 1; 
            return false
        }
    }
}

function hasAnumber(str) {
    return /\d/.test(str);
}

function capitalizeFirstLetters(str) {
    return str
        .split(' ')              // Split the string into words
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()  // Capitalize the first letter and lower case the rest
        )
        .join(' ');              // Join the words back into a single string
}

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

function validatePassword(password, reEnteredPassword) {
    if (password !== reEnteredPassword) {
        return "Passwords do not match";
    }

    const strength = checkPasswordStrength(password);

    if (strength === "invalid") {
        return "Password does not meet the criteria";
    }

    return `Password is ${strength}`;
}

// Example usage
// const password = "Password123!";
// const reEnteredPassword = "Password123!";

// console.log(validatePassword(password, reEnteredPassword));  // Output: "Password is strong"




function minmax(str){
    if(str.length < 1) {
        alert("Name must be alteast 2 characters")
        return false
    }else if(str.length > 50){
        alert("Name must be less than 50 characters")
        return false
    }else{
        alert("Name is valid");
        return true;
    }
}



function validate(event) {
    event.preventDefault();


    const fname = document.form.firstname.value;
    const lname = document.form.lastname.value;
    const middleInitial = document.form.middleinitial.value;
    const extensionname = document.form.extensionname.value;
    const email = document.form.email.value;
    const sex = document.form.sex.value;
    const purok = document.form.purok.value;
    const barangay = document.form.barangay.value;
    const city = document.form.city.value;
    const province = document.form.city.value;
    const zip = document.form.zip.value;
    const username = document.form.username.value;
    const password = document.form.password.value;
    const reenteredPassword = document.form.reenteredPassword.value;


    // Minimum and Maximum
    if(minmax(fname)){
        console.log(`First name must be atleast 2 characters`);
    }else if(minmax(lname)){
        console.log(`Last name must be atleast 2 characters`)
    }else{
        console.log(`First name and Last name are valid`)
    }
}


// document.getElementById('zip').addEventListener('keyup', function(event) {
//     // console.log(event.target.value);
//     const zip = document.getElementById("zip").value;
//     if(zip.length >= 4){
//         fetch(`http://api.zippopotam.us/ph/${event.target.value}`)
//         .then(res => res.json())
//         .then(data =>{
//             console.log(data.places[0]['place name'])
//             document.getElementById('city').value = data.places[0]['place name'];
//         })
//     }
// });

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



