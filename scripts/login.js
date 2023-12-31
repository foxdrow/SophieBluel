document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
});

let login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("error").innerHTML =
      "Email et mot de passe obligatoire";
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("error").innerHTML = "Email invalide";
    return;
  }
  const body = { email: email, password: password };
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  try {
    let response = await fetch(
      "http://localhost:5678/api/users/login",
      request
    );
    let data = await response.json();
    if (data.message === "user not found" || data.error) {
      document.getElementById("error").innerHTML =
        "Erreur dans l'identifiant ou le mot de passe";
      return;
    }
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);

    window.location.href = "/";
  } catch (error) {
    document.getElementById("error").innerHTML =
      "Erreur dans l'identifiant ou le mot de passe";
  }
};
document.getElementById("loginButton").addEventListener("click", login);
