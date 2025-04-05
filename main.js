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