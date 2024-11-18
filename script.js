document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const ageInput = document.getElementById("age");
  const nameInput = document.getElementById("name");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const age = parseInt(ageInput.value, 10);
    const name = nameInput.value.trim();

    if (!name || isNaN(age)) {
      alert("Please fill out both fields.");
      return;
    }

    const agePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });

    agePromise
      .then((message) => {
        alert(message);
      })
      .catch((error) => {
        alert(error);
      });
  });
});
