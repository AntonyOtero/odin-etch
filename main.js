const getGridSize = () => {
    let gridSize = 0;

    while (gridSize < 2 || gridSize > 30) {
        gridSize = prompt("Enter a grid size (2-30): ");
    }

    return gridSize;
}

const generateGrid = (gridSize) => {
    const GRID_CONTAINER = document.querySelector(".grid-container");

    if (GRID_CONTAINER) {
        document.body.removeChild(GRID_CONTAINER);
    }

    let newGridContainer = document.createElement("div");
    newGridContainer.classList.add("grid-container");
    newGridContainer.style.width = `calc(20px * ${gridSize})`;
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