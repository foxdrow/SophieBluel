const fileZone = document.querySelector(".add-file-zone");
const fileInput = document.getElementById("add-file");
const titleInput = document.getElementById("file-title");
const categorieInput = document.getElementById("file-categorie");
const form = document.forms.namedItem("add-form");

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
// reset the image zone and the input when the user click on the file zone
fileZone.addEventListener("click", () => {
  fileZone.querySelector("img").remove();
  fileZone.querySelector("i").style.display = "block";
  fileZone.querySelector("label").style.display = "block";
  fileZone.querySelector("p").style.display = "block";
  fileInput.value = "";
});
