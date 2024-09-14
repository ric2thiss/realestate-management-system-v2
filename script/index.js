
let error;

function validate(event) {
    event.preventDefault();
    
    const fname = document.form.firstname.value;

    console.log(fname)
    if(fname == ""){
        alert("Please enter your first name");
    }else if(fname === null){
        alert("Please enter your first name");
    }else if(fname =="  "){
        alert("Please remove the space");
    }
    
    // if (!filterInput(fname)) {
    //     console.log(error);
    //     document.myForm.fname.style.border = "1px solid red";
    // }else{
    //     document.myForm.fname.style.border = "";
    // }
    
    // return false;
}

// function filterInput(str) {
//     if (str == null || str.trim() === "") {
//         error = "Name must not be empty!";
//         return false;
//     }

//     if (/\d/.test(str)) {
//         error = "Name must not contain numbers!";
//         return false;
//     }

//     return true;
// }

