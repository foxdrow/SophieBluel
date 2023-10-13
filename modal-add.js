let modalCloseX2 = document.querySelector(".modal-close .x2");
let backArrow = document.querySelector(".fa-arrow-left");

const form = document.forms.namedItem("add-form");
const fileZone = document.querySelector(".add-file-zone");
const fileInput = document.getElementById("add-file");
const titleInput = document.getElementById("file-title");
const categorieInput = document.getElementById("file-categorie");

modalCloseX2.addEventListener("click", () => {
  modalContainerAdd.style.display = "none";
});

modalContainerAdd.addEventListener("click", (event) => {
  if (event.target === modalContainerAdd) {
    modalContainerAdd.style.display = "none";
  }
});

backArrow.addEventListener("click", () => {
  modalContainerAdd.style.display = "none";
  modalContainerMain.style.display = "block";
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    let imageElement = document.createElement("img");
    imageElement.src = reader.result;
    imageElement.alt = file.name;
    imageElement.classList.add("uploaded-image");

    fileZone.querySelector("i").style.display = "none";
    fileZone.querySelector("label").style.display = "none";
    fileZone.querySelector("p").style.display = "none";
    fileZone.prepend(imageElement);
  };
});
fileZone.addEventListener("click", () => {
  fileZone.querySelector("img").remove();
  fileZone.querySelector("i").style.display = "block";
  fileZone.querySelector("label").style.display = "block";
  fileZone.querySelector("p").style.display = "block";
  fileInput.value = "";
});



form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit");

  const formData = new FormData(form);

  if (fileInput.value === "" || titleInput.value === "" || categorieInput.value === "") {
    alert("Please select a file");
    return;
  }

  let request = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: formData,
  };

  fetch("http://localhost:5678/api/works", request)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      modalContainerAdd.style.display = "none";
      modalContainerMain.style.display = "block";
      document.querySelector(".gallery").innerHTML = "";
      getWorks();
      document.querySelector(".modal-gallery").innerHTML = "";
      fetchWorks();
      form.reset();
    });
});
