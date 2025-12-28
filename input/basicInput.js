//This program introduces basic input with prompt

document.getElementById("prompt").addEventListener("click", runBasicInput);

function runBasicInput() 
    {
    let usr_letter =prompt("Please enter a letter: ");
    alert(`You entered: ${usr_letter}.`);
    }
