let modalCloseX = document.querySelector(".modal-close .x1");

let modalContainerMain = document.querySelector(".modal-container-main");
let modalGallery = document.querySelector(".modal-gallery");
let modalButtonAdd = document.querySelector(".modal-container-main-btn");

let modalContainerAdd = document.querySelector(".modal-container-add");

modalCloseX.addEventListener("click", () => {
  modalContainerMain.style.display = "none";
});

modalContainerMain.addEventListener("click", (event) => {
  if (event.target === modalContainerMain) {
    modalContainerMain.style.display = "none";
  }
});

modalButtonAdd.addEventListener("click", () => {
  modalContainerMain.style.display = "none";
  modalContainerAdd.style.display = "block";
});

let fetchWorks = async () => {
  try {
    let response = await fetch("http://localhost:5678/api/works");
    let data = await response.json();
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
        })
          .then((response) => {
            if (response.ok) {
              figure.remove();
              document.querySelector(".gallery").innerHTML = "";
              getWorks();
              document.querySelectorAll(".filter").forEach((filter) => {
                filter.classList.remove("selected-filter");
              });
              document
                .querySelector(".filter")
                .classList.add("selected-filter");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });
      img.src = work.imageUrl;
      img.alt = work.title;
      figure.appendChild(img);
      figure.appendChild(trash);
      modalGallery.appendChild(figure);
    });
  } catch (error) {
    console.error(error);
  }
};
fetchWorks();
