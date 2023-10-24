let getWorks = async (category = 0) => {
  if (isNaN(category)) {
    category = 0;
  }
  try {
    let response = await fetch("http://localhost:5678/api/works");
    let data = await response.json();
    data.forEach((work) => {
      if ((category !== 0 && work.category.id === category) || category === 0) {
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
  } catch (error) {
    console.error(error);
  }
};
getWorks();
document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", (event) => {
    document.querySelectorAll(".filter").forEach((filter) => {
      filter.classList.remove("selected-filter");
    });
    event.target.classList.add("selected-filter");
    document.querySelector(".gallery").innerHTML = "";
    getWorks(parseInt(event.target.dataset.category));
  });
});
