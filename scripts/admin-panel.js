if (localStorage.getItem("token")) {
  document.querySelector(".admin-panel-bar").style.display = "flex";
  document.querySelector(".admin-panel-bar").addEventListener("click", () => {
    document.querySelector(".modal-container").style.display = "block";
  });
}
