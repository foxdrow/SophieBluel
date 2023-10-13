let getWorks = (category = 0) => {
  fetch("http://localhost:5678/api/works")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((work) => {
        if (
          (category !== 0 && work.category.id === category) ||
          category === 0
        ) {
          const figure = document.createElement("figure");
          figure.dataset.id = work.id;
          const img = document.createElement("img");
          img.src = work.imageUrl;
          img.alt = work.title;
          const figcaption = document.createElement("figcaption");
          figcaption.textContent = work.title;
          figure.appendChild(img);
          figure.appendChild(figcaption);
          document.querySelector(".gallery").appendChild(figure);
        }
      });
    });
};
getWorks();
document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", (event) => {
    document.querySelector(".gallery").innerHTML = "";
    getWorks(parseInt(event.target.dataset.category));
  });
});
