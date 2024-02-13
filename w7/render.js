const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [ // creates array containing the text for the table headers
    "Name",
    "Household",
    "HouseSize",
    "Footprint",
    "Actions",
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

function renderTbl(data) {
  const table = renderTblHeading(); // calls the function that creates the table header
  const tbody = document.createElement("tbody"); // creates new tbody element

  data.forEach(function (obj) { // iterate through each object in the cpfData(data) array
    
    const tr = document.createElement("tr"); // create a new <tr> element for each object
    const tableData = [obj.firstName, obj.houseM, obj.houseS, obj.cfpTotal]; // creates an array that contains the data for each table cell in the current row
    tableData.forEach(function (text) { // iterates through each element in the tableData array
      
      const td = document.createElement("td"); // creates new td element
      td.textContent = text; // changes the text in the td element to the text
      tr.appendChild(td); // appends the td element into the tr element
    });

    const td = document.createElement("td");
    const btnEdit = document.createElement("button"); // creates button to edit
    const btnDel = document.createElement("button"); // creates button to delete
    btnEdit.textContent = "Edit"; // changes text of button to edit
    btnDel.textContent = "Delete"; // changes text of button to delete

    td.appendChild(btnEdit); // appends edit button into td element
    td.appendChild(btnDel); // appends delete button into td element
    tr.appendChild(td); // appends td element into tr element
    tbody.appendChild(tr); // appends tr element into tbody element
  });

  table.appendChild(tbody); // appends tbody element into table
  TBL.innerHTML = ""; // clears the existing table content
  TBL.appendChild(table); // appends the table element into the table id tab-data
}

export { renderTbl, renderTblHeading }; // exports functions into main.js
