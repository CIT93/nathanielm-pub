const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  // const headingTextArr = [ // creates array containing the text for the table headers
  //   "Name",
  //   "Household",
  //   "HouseSize",
  //   "Footprint",
  //   "Actions",
  // ];

  const headingTextArr = [
    // creates array containing the text for the table headers

    "Name",
    "Household",
    "HouseSize",
    "Footprint",
    "Actions"
  ];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text; // sets the text content of the th element to the text in the array
    tr.appendChild(th); // appends th element into tr element
  });
  thead.appendChild(tr); // appends tr element into thead element
  table.appendChild(thead); // appends the thead element into the table element
  return table; // returns the table we created
}

function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button"); // creates button to edit
  const btnDel = document.createElement("button"); // creates button to delete
  btnEdit.textContent = "Edit"; // changes text of button to edit
  btnDel.textContent = "Delete"; // changes text of button to delete

  td.appendChild(btnEdit); // appends edit button into td element
  td.appendChild(btnDel); // appends delete button into td element


  btnDel.addEventListener("click", function(e) {
    console.log(e)
    data.splice(index, 1)
    renderTbl(data)
  })
  btnEdit.addEventListener("click", function(e) {


    
  })
  return td;
}








function renderTblBody(data) {
  const tbody = document.createElement("tbody")
  data.forEach(function (obj, index) {
    console.log(index)
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    
    const td = renderTblBtn(index, data)

    tr.appendChild(td); // appends td element into tr element

    tbody.appendChild(tr);
  });
  return tbody

}




function renderTbl(data) {
  const table = renderTblHeading(); // calls the function that creates the table header
  const tbody = renderTblBody(data)
  
  //const tbody = document.createElement("tbody"); // creates new tbody element

  TBL.innerHTML = ""; // clears the existing table content
  table.appendChild(tbody); // appends tbody element into table
  TBL.appendChild(table); // appends the table element into the table id tab-data
}
export { renderTbl }; // exports functions into main.js



//   const tableData = [obj.firstName, obj.houseM, obj.houseS, obj.cfpTotal]; // creates an array that contains the data for each table cell in the current row
//   tableData.forEach(function (text) { // iterates through each element in the tableData array

//     const td = document.createElement("td"); // creates new td element
//     td.textContent = text; // changes the text in the td element to the text
//     tr.appendChild(td); // appends the td element into the tr element
//   });
