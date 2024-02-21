const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTblHeading(data) {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  if (data.length > 0) {
    // Check if the data array is not empty
    const headingTextArr = [
      "Name",
      "Household",
      "HouseSize",
      "Footprint",
      "Actions",
    ];
    headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
  }

  return table;
}


function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button"); // creates button to edit
  const btnDel = document.createElement("button"); // creates button to delete
  btnEdit.textContent = "Edit"; // changes text of button to edit
  btnDel.textContent = "Delete"; // changes text of button to delete

  td.appendChild(btnEdit); // appends edit button into td element
  td.appendChild(btnDel); // appends delete button into td element

  btnDel.addEventListener("click", function (e) {
    console.log(e);
    data.splice(index, 1);
    renderTbl(data);
  });
  btnEdit.addEventListener("click", function (e) {
    console.log(data[index]);
    const obj = data[index];
    FORM.firstname.value = obj.firstName; // populate the form fields with the values from the data object
    FORM.lastname.value = obj.lastName;
    FORM.householdmembers.value = obj.houseM;
    FORM.houses.value = obj.houseS;
    data.splice(index, 1);
    renderTbl(data);
  });
  return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index);
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }

    const td = renderTblBtn(index, data);

    tr.appendChild(td); // appends td element into tr element

    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTbl(data) {
  const table = renderTblHeading(data); // calls the function that creates the table header
  const tbody = renderTblBody(data);

  TBL.innerHTML = ""; // clears the existing table content
  table.appendChild(tbody); // appends tbody element into table
  TBL.appendChild(table); // appends the table element into the table id tab-data
}
export { renderTbl }; // exports functions into main.js


// when a user submits existing data it gets added to the next row in the table 