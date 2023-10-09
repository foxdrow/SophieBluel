document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const body = {
    email: email,
    password: password,
  };

  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch("http://localhost:5678/api/users/login", request)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);

      window.location.href = "/";
    })
    .catch((error) => {
      document.getElementById("error").innerHTML = "Invalid email or password";
    });
}
document.getElementById("loginButton").addEventListener("click", login);
