const GRID_CONTAINER = document.querySelector(".grid-container");

//Grid size will be squared
let gridSizeSq = 16;

const generateGrid = (gridSize) => {
    for (i = 0; i < gridSizeSq; i++) {
        for (j = 0; j < gridSizeSq; j++) {
            let newGridUnit = document.createElement("div");
            newGridUnit.classList.add("grid-unit", "debug");
            GRID_CONTAINER.appendChild(newGridUnit);
        }
    }
}

const updateUnitColor = (unit, color="#212121") => {
    unit.style.backgroundColor = color;
}

generateGrid(16);

const GRID_UNITS = [...document.querySelectorAll(".grid-unit")];

GRID_UNITS.forEach(unit => {
    unit.addEventListener("mouseover", e => updateUnitColor(e.target));
});