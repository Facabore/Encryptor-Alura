/* Rules to encrypt

 "e" is convert to "enter"
 "i" is convert to "imes"
 "a" is convert to "ai"
 "o" is convert to "ober"
 "u" is convert to "ufat"

*/
const emptyInputValidate = (phrase) =>{
    if(phrase == ""){
    swal("Empty imput", "Please write something", "warning");
    return false;
    }
    return true;
}
// Validate input to "Only lowercase letters and no accents"
const validateInput = () => {
    let inputField = document.getElementById("phrase");
    let inputValue = inputField.value;
    
    // Filtrar caracteres permitidos (solo letras minúsculas y espacios)
    let filteredValue = inputValue.toLowerCase().replace(/[^a-z\s]/g, "");

    if (inputValue !== filteredValue) {
        // Show warning
        swal("Invalid input", "Only lowercase letters and spaces are allowed.", "warning");
        inputField.value = filteredValue;
    }
}


// Encrypt text
const encrypt = () => {
    let phrase = document.getElementById("phrase").value;

    if (!emptyInputValidate(phrase)) {
        return; // Exit the function if validation fails
    }
    let encryptedPhrase = phrase
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayMessage(encryptedPhrase);
}

// Decrypt text
const decrypt = () => {
    let phrase = document.getElementById("phrase").value;

    if (!emptyInputValidate(phrase)) {
        return; // Exit the function if validation fails
    }
    
    let decryptedPhrase = phrase
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayMessage(decryptedPhrase);
}

// Show message in HTML
const displayMessage = (text) => {
    document.getElementById("title").innerText = "Decrypt message";
    document.getElementById("paragraph").innerText = text;
    document.getElementById("doll").style.display = "none";
    document.getElementById("copyButton").style.display = "show";
}

// Copy Clipboard fuction
const copyToClipboard = () => {
    let text = document.getElementById("paragraph").innerText;
    navigator.clipboard.writeText(text).then(() => {
        swal("Copied!", "The text has been copied to your clipboard.", "success");
    }, (err) => {
        swal("Error", "Failed to copy text.", "error");
    });
}

const updateCharacterCount = () => {
    let textarea = document.getElementById("phrase");
    let charCountContainer = document.querySelector(".character-count");
    let charCount = document.getElementById("charCount");

    charCount.textContent = textarea.value.length;

    if (textarea.value.length === 500) {
        charCountContainer.style.color = "red";
    } else {
        charCountContainer.style.color = "#0a3871"; // Restaurar color original
    }
}
// In real time "Only lowercase letters and no accents"
document.getElementById("phrase").addEventListener("input", validateInput);
