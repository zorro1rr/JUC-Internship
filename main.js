//grab the butons
const clear = document.querySelector("#clear");
const submit = document.querySelector("#submit");
//grab the form
const form = document.querySelector("#contactForm");
//grab the message div
const message = document.querySelector("#message");

//event handler for clear
function clearForms() {
  //.reset() is a built in form method
  form.reset();
}

function submitForm(e) {
  e.preventDefault();
  message.innerHTML = "<p>Sending...</p>";
  // calling new with FormData method, this returns the inputs values as an objects
  // this is a reference to the form
  const formData = new FormData(this);
  //make the checkbox return a boolean
  //this actually didn't seem to actually make it a boolean, but does set it to the string "true"
  formData.set("emailConsent", true);

  fetch(
    "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users",
    {
      method: "POST",
      body: formData,
    }
  )
    .then(function (response) {
      // The API call was successful!
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    })
    .then(function (data) {
      // This is the JSON from our response
      message.innerHTML = "<p>Form Sent!</p>";
    })
    .catch(function (err) {
      // There was an error
      message.innerHTML = "<p>Something went wrong.</p>";
      console.warn("Something went wrong.", err);
    });

  //clear the form
  form.reset();
}

//listen for clicks on clear and submit
clear.addEventListener("click", clearForms, false);
form.addEventListener("submit", submitForm, false);
