const getGridSize = () => {
    const gridSize = prompt("Enter a grid size (0-100): ");

    return gridSize;
}

const generateGrid = (gridSize) => {
    const GRID_CONTAINER = document.querySelector(".grid-container");

    if (GRID_CONTAINER) {
        document.body.removeChild(GRID_CONTAINER);
    }

    let newGridContainer = document.createElement("div");
    newGridContainer.classList.add("grid-container");
    document.body.appendChild(newGridContainer);

    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            let newGridUnit = document.createElement("div");
            newGridUnit.classList.add("grid-unit", "debug");
            newGridContainer.appendChild(newGridUnit);
        }
    }

    const GRID_UNITS = [...document.querySelectorAll(".grid-unit")];

    GRID_UNITS.forEach(unit => {
        unit.addEventListener("mouseover", e => updateUnitColor(e.target));
    });
}

const generateNewGrid = () => {
    generateGrid(getGridSize());
}

const updateUnitColor = (unit, color="#212121") => {
    unit.style.backgroundColor = color;
}