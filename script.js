
// get div where grid will be contained
const mainGrid = document.querySelector(".mainGrid");
rowNum = 16;

// create grid
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

let squareHandler = function(square){
    square.addEventListener("mouseover", mouseoverHandler);

    if (square.document.getAttribute("class") = "coloured") {
        square.removeEventListener("")
    }
}


let mouseoverHandler = (event) => {
    // here, we don't know about square... but we have
    // the event object. So event.currentTarget is
    //  the same reference as square in the other function!
    event.currentTarget.setAttribute("class", "coloured")
    console.log(event)
}
  
function addEventListeners() {
    let squares = document.querySelectorAll(".square");
  
    squares.forEach( squareHandler );
}

function removeEventListeners() {
    let squares = document.querySelectorAll(".square");
  
    squares.forEach( squareHandler );
}
createGrid();
addEventListeners();

function resetGrid() {
    removeEventListeners();
}

// // when mouse hovers over the square, its class is changed to .coloured and CSS implements a colour change
// function addEventListeners() {
//     let squares = document.querySelectorAll(".square");
//         squares.forEach(square => {square.addEventListener("mouseover", () => {
//                 square.setAttribute("class", "coloured");
//             });
//     })
// }




// // in order to have the `forEach` *see* the handler, we
// // need to define it. 
// const mouseoverHandler = (event)=>{
//     event.currentTarget.setAttribute("class", "colored")
//   }
  
//   function addEventListeners() {
//     let squares = document.querySelectorAll(".square");
  
//     // we can inline this function, if we like. And
//     //  either a ()=>{} style function or a traditional
//     //  one will work.
//     squares.forEach(function(square){
//        square.addEventListener("mouseover", mouseoverHandler);
//     });
//   }


