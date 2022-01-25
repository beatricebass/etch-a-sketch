let mainGrid = document.querySelector('#mainGrid');


rowNum = 16;

function createGrid() {
    for (i=0; i < rowNum; i++) {
        let rowBox = document.createElement('div');
        rowBox.setAttribute("id", "square");
        mainGrid.appendChild(rowBox);
        for (j=1; j < rowNum; j++) {
          let box = document.createElement('div');
       
          box.setAttribute("id", "column");
          rowBox.appendChild(box);
        };
      };
    
}

createGrid();


let coloured = Array.from(document.querySelectorAll("#column"));
coloured.forEach(color => color.addEventListener("mouseenter", color.classList.add("coloured")));

console.log(coloured);
