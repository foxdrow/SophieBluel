if (localStorage.getItem("token")) {
  document.querySelector("nav ul li:nth-child(3)").style.display = "none";
  document.querySelector("nav ul li:nth-child(4)").style.display = "block";
}
document
  .querySelector("nav ul li:nth-child(4)")
  .addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    location.reload();
  });
