if (localStorage.getItem("token")) {
  document.querySelector(".admin-panel-bar").style.display = "flex";
  document.querySelector(".admin-panel-bar").addEventListener("click", () => {
    document.querySelector(".modal-container").style.display = "block";
  });
  document.querySelector(".filters").style.display = "none";
  const MarginSeparator = document.createElement("div");
  MarginSeparator.style.height = "80px";
  document
    .querySelector("#portfolio")
    .insertBefore(
      MarginSeparator,
      document.querySelector("#portfolio").childNodes[3]
    );

  document.querySelector(".edit-button").style.display = "flex";
  document.querySelector(".edit-button").addEventListener("click", () => {
    document.querySelector(".modal-container").style.display = "block";
  });
}
