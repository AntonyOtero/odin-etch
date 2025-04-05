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
        unit.addEventListener("mouseover", e => {
            if (!e.target.style.backgroundColor) {
                updateUnitColor(e.target, getRandomColor())
            } else {
                updateUnitOpacity(e.target, 0.1);
            }
        });
    });
}

const generateNewGrid = () => {
    generateGrid(getGridSize());
}

const updateUnitColor = (unit, color="rgb(33,33,33)") => {
    unit.style.backgroundColor = color;
}

const updateUnitOpacity = (unit, value) => {
    let unitColor = unit.style.backgroundColor;
    let unitColorArr = unitColor.substring(5, unitColor.length - 1).split(", ");
    let unitColorAlpha = Number.parseFloat(unitColorArr[3]);
    let newColorAlpha;

    if (unitColorAlpha + value <= 1) {
        newColorAlpha = unitColorAlpha + value;
        unitColorArr[3] = newColorAlpha;
        unit.style.backgroundColor = "rgba(" + unitColorArr.join(", ") + ")";
    }
}

const getRandomColor = () => {
    const red = getRandomInteger(0, 256);
    const green = getRandomInteger(0, 256);
    const blue = getRandomInteger(0, 256);
    return `rgba(${red},${green},${blue}, 0.1)`;
}

const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}