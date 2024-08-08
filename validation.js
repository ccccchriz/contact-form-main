window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstname = document.getElementById("firstname");
    let errorEl = document.getElementById("firstname--error");
    firstname.classList.remove("error--input");
    errorEl.classList.add("hidden");
    if (!firstname.value) {
      const errorEl = document.getElementById("firstname--error");
      firstname.classList.add("error--input");
      errorEl.classList.remove("hidden");
    }

    const lastname = document.getElementById("lastname");
    errorEl = document.getElementById("lastname--error");
    lastname.classList.remove("error--input");
    errorEl.classList.add("hidden");
    if (!lastname.value) {
      const errorEl = document.getElementById("lastname--error");
      lastname.classList.add("error--input");
      errorEl.classList.remove("hidden");
    }
  });
});
