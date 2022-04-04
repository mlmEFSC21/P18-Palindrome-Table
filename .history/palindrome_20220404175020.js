let stringsArray = [];
let index = 0;
const form = document.querySelector("#palindromeForm");
const stringInput = document.getElementById("stringInput");
const td_Yes_No = document.querySelectorAll("td.yes-no");
const td_String = document.querySelectorAll("td.string");
form.addEventListener("submit", populateStringArray);

function populateStringArray(e) {
    e.preventDefault();
    stringsArray.push(stringInput.value);
    addStringToTable(index);
    if (index >= 4) {
        testForPalindromes();
    } else {
        stringInput.value = "";
        index++;
    }
}
function addStringToTable(index) {
    td_String[index].innerText = stringsArray[index];
}
function testForPalindromes() {
    let counter = 0;
    while (counter < stringsArray.length) {
        testString = stringsArray[counter];
        testString = testString.toLowerCase();
        let reverseString = testString.split("").reverse().join("");
        if (testString === reverseString) {
            td_Yes_No[counter].innerText = "Yes";
        } else {
            td_Yes_No[counter].innerText = "No";
        }
        counter++;
    }
}
