const form = document.querySelector("#form");
const msg = document.querySelector("span");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const img = document.querySelector("img");

form.addEventListener("submit", e => {
  e.preventDefault();

  const firstName = firstNameInput.value.charAt(0).toUpperCase() + firstNameInput.value.slice(1) || "Chuck";
  const lastName = lastNameInput.value.charAt(0).toUpperCase() + lastNameInput.value.slice(1) || "Norris";

  const url = `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.classList.toggle("rotated");
      msg.innerHTML = data.value.joke;
    });
});
