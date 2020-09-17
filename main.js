//grab the butons
const clear = document.querySelector("#clear");
const submit = document.querySelector("#submit");
//grab the input fields
const form = document.querySelector("form");

//event handler for clear
function clearForms() {
  //.reset() is a built in form method
  form.reset();
}

//event handler  for submit
function submitForms() {}

//listen for clicks on clear and submit
clear.addEventListener("click", clearForms, false);
submit.addEventListener("click", submitForms, false);
