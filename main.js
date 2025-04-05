const GRID_CONTAINER = document.querySelector(".grid-container");

//Grid size squared
let gridSizeSq = 16;


for (i = 0; i < gridSizeSq; i++) {
    for (j = 0; j < gridSizeSq; j++) {
        let newGridUnit = document.createElement("div");
        newGridUnit.classList.add("grid-unit", "debug");
        GRID_CONTAINER.appendChild(newGridUnit);
    }
}

const GRID_UNITS = [...document.querySelectorAll(".grid-unit")];

GRID_UNITS.forEach(unit => {
    unit.addEventListener("mouseover", e => e.target.style.backgroundColor = "#212121");
});