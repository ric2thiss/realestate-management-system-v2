
// document.querySelector('body').style.backgroundSize = "cover";
// document.querySelector('body').style.backgroundRepeat = "no-repeat";

// let bg = 1;

// setInterval(() => {
//     console.log(bg)
//     document.querySelector('body').style.backgroundImage = `url('assets/${bg}.png')`;
//     bg++;
//     if(bg > 3){
//         bg = 1;
//     }
// }, 3000);



let error;

function validate(event) {
    event.preventDefault();
    
    const fname = document.myForm.fname.value;
    
    if (!filterInput(fname)) {
        console.log(error);
        document.myForm.fname.style.border = "1px solid red";
    }else{
        document.myForm.fname.style.border = "";
    }
    
    return false;
}

function filterInput(str) {
    if (str == null || str.trim() === "") {
        error = "Name must not be empty!";
        return false;
    }

    if (/\d/.test(str)) {
        error = "Name must not contain numbers!";
        return false;
    }

    return true;
}

