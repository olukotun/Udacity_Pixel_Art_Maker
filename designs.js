// Get default color
let color = document.getElementById("colorPicker").value;

// Get default size
let height = document.getElementById("inputWidth").value;
let width = document.getElementById("inputWidth").value;

//ADD EVENT LISTENER FOR HEIGHT CHANGE
const heightInput = document.querySelector("#inputHeight");
heightInput.addEventListener("change", function (e) {
  height = e.target.value;
});

//HANDLE EVENT LISTENER FOR WIDTH CHANGE
const widthInput = document.querySelector("#inputWidth");
widthInput.addEventListener("change", function (e) {
  width = e.target.value;
});

//HANDLE EVENT LISTENER FOR COLOR PICKER CHANGE
const colorPicked = document.querySelector("#colorPicker");
colorPicked.addEventListener("change", function (e) {
  color = e.target.value;
});

function setTableProperties() {
  //GET THE TABLE BY ID
  let table = document.querySelector("#pixelCanvas");
  //CREATE A TABLE BODY
  tableBody = document.createElement("TBODY");

  //APPEND THE BODY TO THE TABLE
  table.appendChild(tableBody);

  //LOOP TO CREATE THE ROW AND CELL
  for (let row = 0; row < height; row++) {
    //CREATE THE ROWS
    let tableRow = document.createElement("TR");

    //APPEND THE ROW TO THE BODY
    tableBody.appendChild(tableRow);

    //FOR EACH OF THE ROW CREATE A CELL
    for (let column = 0; column < width; column++) {
      let tableData = document.createElement("TD");
      //APPEND EACH DATA TO ROW
      tableRow.appendChild(tableData);
    }
  }
}

//ADD EVENT LISTENER TO SELECT COLOR
function addEventListenerToTableDataAndSetColor() {
  document.querySelectorAll("td").forEach((tableData) => {
    tableData.addEventListener("click", function () {
      tableData.style.backgroundColor = color;
    });
  });
}

function makeGrid(e) {
  // Your code goes here!
  let tableBody = document.getElementsByTagName("TBODY");
  //CHECK IF THE TABLE ALREADY HAS A BODY
  if (tableBody.length === 0) {
    setTableProperties();
    addEventListenerToTableDataAndSetColor();
  } else {
    //IF USER CLICK SUBMIT AND GRID IS ALREADY PRESENT REMOVE THE GRID
    table.removeChild(tableBody);
  }
  e.preventDefault();
}

const submit = document.querySelector("#sizePicker");
submit.addEventListener("submit", makeGrid);
