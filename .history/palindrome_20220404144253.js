let strings = [];

const form = document.querySelector("#palindromeForm");
const stringInput = document.getElementById("stringInput");
const td = document.querySelectorAll("td.yes-no");
form.addEventListener("submit", populateStringArray);

function populateStringArray(e) {
    e.preventDefault();
}
