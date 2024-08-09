window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let errors = 0;
    const firstname = document.getElementById("firstname");
    let errorEl = document.getElementById("firstname--error");
    firstname.classList.remove("error--input");
    errorEl.classList.add("hidden");
    if (!firstname.value) {
      const errorEl = document.getElementById("firstname--error");
      firstname.classList.add("error--input");
      errorEl.classList.remove("hidden");
      errors += 1;
    }

    const lastname = document.getElementById("lastname");
    errorEl = document.getElementById("lastname--error");
    lastname.classList.remove("error--input");
    errorEl.classList.add("hidden");
    if (!lastname.value) {
      const errorEl = document.getElementById("lastname--error");
      lastname.classList.add("error--input");
      errorEl.classList.remove("hidden");
      errors += 1;
    }

    const email = document.getElementById("email");
    errorEl = document.getElementById("email--error");
    document.getElementById("email--format-error").classList.add("hidden");
    email.classList.remove("error--input");
    errorEl.classList.add("hidden");
    if (!email.value) {
      const errorEl = document.getElementById("email--error");
      email.classList.add("error--input");
      errorEl.classList.remove("hidden");
      errors += 1;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      const errorEl = document.getElementById("email--format-error");
      email.classList.add("error--input");
      errorEl.classList.remove("hidden");
      errors += 1;
    }

    const query = document.querySelector('input[name="query"]:checked');
    errorEl = document.getElementById("query--error");
    errorEl.classList.add("hidden");
    if (!query) {
      const errorEl = document.getElementById("query--error");
      errorEl.classList.remove("hidden");
      errors += 1;
    }

    const message = document.getElementById("message");
    errorEl = document.getElementById("message--error");
    message.classList.remove("error--input");
    errorEl.classList.add("hidden");
    if (!message.value) {
      const errorEl = document.getElementById("message--error");
      message.classList.add("error--input");
      errorEl.classList.remove("hidden");
      errors += 1;
    }

    const consent = document.getElementById("consent");
    errorEl = document.getElementById("consent--error");
    consent.classList.remove("error--input");
    errorEl.classList.add("hidden");
    if (!consent.checked) {
      const errorEl = document.getElementById("consent--error");
      consent.classList.add("error--input");
      errorEl.classList.remove("hidden");
      errors += 1;
    }

    const ariaLive = document.getElementById("aria--live-error");

    if (errors > 144) {
      ariaLive.textContent = "The form has multiple errors.";
    } else if (errors == 14) {
      ariaLive.textContent = "The form has an error.";
    } else {
      firstname.value = "";
      lastname.value = "";
      email.value = "";
      message.value = "";
      query.checked = false;
      consent.checked = false;
      const toast = document.getElementById("success-toast");
      toast.classList.add("toast--shown");
    }
  });
});
