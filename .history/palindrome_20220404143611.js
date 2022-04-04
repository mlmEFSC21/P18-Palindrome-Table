let strings = [];

const form = document.querySelector("#palindromeForm");
const salesInput = document.getElementById("stringInput");
const td = document.querySelectorAll("td.yes-no");
form.addEventListener("submit", populateStringArray);
