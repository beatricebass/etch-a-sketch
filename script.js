// create the grid

// get div where grid will be contained
const mainGrid = document.querySelector(".mainGrid");
rowNum = 16;

function createGrid() {
    for (i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");
        for (j = 0; j < rowNum; j++) {
            let column = document.createElement("div");
            column.setAttribute("class", "square");
            row.appendChild(column);
        }
        mainGrid.appendChild(row);
    };
}

createGrid();
addEventListeners();

function addColour() {
    let squares = document.querySelectorAll(".square");
    for (i = squares.length - 1; i >= 0; i--)
    sqaures.item(s).setAttribute("class", "coloured");
}



function addEventListeners() {
    let squares = document.querySelectorAll(".square");
    console.log(squares);
        for (x = 0; x < squares.length; x++) {
            squares.item(x).addEventListener("mouseover", addColour);
    }
}
