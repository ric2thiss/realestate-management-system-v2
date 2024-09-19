function hasDoubleSpace(str) {
    // Check if the input starts with a space
    if (str.startsWith(" ")) {
        return true;
    }
    // Check for two or more consecutive spaces
    return /\s{2,}/.test(str);
}

const fname = "  Ric";


if(hasDoubleSpace(fname)){
    console.log("true")
}else{
    console.log("false")
}