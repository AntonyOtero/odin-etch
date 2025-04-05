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
            newGridUnit.classList.add("grid-unit");
            newGridContainer.appendChild(newGridUnit);
        }
    }

    const GRID_UNITS = [...document.querySelectorAll(".grid-unit")];

    GRID_UNITS.forEach(unit => {
        unit.addEventListener("mouseover", e => updateUnitColor(e.target, getRandomColor()));
    });
}

const generateNewGrid = () => {
    generateGrid(getGridSize());
}

const updateUnitColor = (unit, color="rgb(33,33,33)") => {
    unit.style.backgroundColor = color;
}

const getRandomColor = () => {
    const red = getRandomInteger(0, 256);
    const green = getRandomInteger(0, 256);
    const blue = getRandomInteger(0, 256);
    return `rgba(${red},${green},${blue},0.10)`;
}

const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}