
let error;

function validate(event) {
    event.preventDefault();
    
    const fname = document.form.firstname.value;
    // const zip = document.form.zip.value;

    // for(let i = 0; i < fname.length - 2; i++) {
    //     if(fname[i] == fname[i+1] && fname[i] == fname[i+2]) {
    //         alert("Three consecutive duplicate characters found");
    //         return false;
    //     }
    // }


    // Minimum and Maximum
    if(fname.length < 1) {
        alert("Name must be alteast 2 characters")
    }else if(fname.length > 50){
        alert("Name must be less than 50 characters")
    }else{
        alert("Name is valid");
    }

    console.log(fname.search(/\d/));    
    // Contain a number
    // if(fname.search(/\d/) == -1) {
    //     alert("Name must contain a number");
    // }

    // Three consecutive duplicate characters found
    let consecutiveCount = 1;

    for (let i = 1; i < fname.length; i++) {
        if (fname[i] === fname[i - 1]) {
            consecutiveCount++;
            if (consecutiveCount === 3) {
                alert("Three consecutive duplicate characters found");
                return false;
            }
        } else {
            consecutiveCount = 1; 
        }
    }

    
    // console.log(fname)
    // if(fname == ""){
    //     alert("Please enter your first name");
    // }else if(fname === null){
    //     alert("Please enter your first name");
    // }else if(fname =="  "){
    //     alert("Please remove the space");
    // }else{
    //     alert("First name is valid");
    // }
    
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

// function onkeyup(event){
//     console.log(event.target.value)
    // const zip = document.getElementById("zip").value;
    // fetch(`http://api.zippopotam.us/ph/${zip}`)
    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data.places[0]['place name'])

    // })
// }

document.getElementById('zip').addEventListener('keyup', function(event) {
    // console.log(event.target.value);
    const zip = document.getElementById("zip").value;
    if(zip.length >= 4){
        fetch(`http://api.zippopotam.us/ph/${event.target.value}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.places[0]['place name'])
            document.getElementById('city').value = data.places[0]['place name'];
        })
    }
});

// document.getElementById('zip').addEventListener('keyup', function(event) {
//     const zip = event.target.value;

//     if (zip.length >= 4) {  // Adjust length based on your requirements
//         fetch(`http://api.zippopotam.us/ph/${zip}`)
//         .then(res => res.json())
//         .then(data => {
//             if (data.places && data.places.length > 0) {
//                 document.getElementById('city').value = data.places[0]['place name'];
//             }
//         })
//         .catch(err => {
//             console.error('Error:', err);
//             document.getElementById('city').value = '';
//         });
//     }
// });



