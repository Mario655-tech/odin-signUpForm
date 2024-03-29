const passoriginal = document.querySelector("#pass");
const passnew = document.querySelector("#passc");
const button = document.querySelector("#btn");


function checkPasswords() {
    if (passoriginal.value !== passnew.value) {
        passoriginal.style.border = "3px solid red";
        passnew.style.border = "3px solid red";
    } else {
        passoriginal.style.border = "3px solid green";
        passnew.style.border = "3px solid green";
    }
}

passoriginal.addEventListener("input", checkPasswords);
passnew.addEventListener("input", checkPasswords);