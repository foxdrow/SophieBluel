let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let modalGallery = document.querySelector(".modal-gallery");
let modalCloseX = document.querySelector(".modal-close i");

modalCloseX.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

let fetchWorks = () => {
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((work) => {
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let trash = document.createElement("i");
        trash.classList.add("fas", "fa-trash", "fa-xs");
        trash.addEventListener("click", () => {
          fetch(`http://localhost:5678/api/works/${work.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then((response) => {
            if (response.ok) {
              figure.remove();
            }
          });
        });
        img.src = work.imageUrl;
        img.alt = work.title;
        figure.appendChild(img);
        figure.appendChild(trash);
        modalGallery.appendChild(figure);
      });
    });
};
fetchWorks();
console.log("test");
