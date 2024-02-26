import { FORM, TBL } from "./global.js"
import { cfpData, getLS, saveLS } from "./storage.js";

function renderTblHeading(data) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
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
  

  return table;
}


function renderTblBtn(obj, index, data) {
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
    //localStorage.setItem('cfp', JSON.stringify(data)); // update localStorage with updated data
    saveLS(cfpData)

    renderTbl(data); // update table 


  });
  btnEdit.addEventListener("click", function (e) {
    FORM[1].value = obj.firstName
    FORM[2].value = obj.lastName
    FORM[3].value = obj.houseM
    FORM[4].value = obj.houseS


    data.splice(index, 1);

    //localStorage.setItem('cfp', JSON.stringify(data)); // update localStorage with updated data
    saveLS(cfpData)

    renderTbl(data); // update table
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

    const td = renderTblBtn(obj, index, data);

    tr.appendChild(td); // appends td element into tr element

    tbody.appendChild(tr);
  });
  return tbody;
}




function renderTbl(data) {
  TBL.innerHTML = ""; // clears the existing table content
  if (data.length !== 0) {
    console.log("clear the existing table")
    const table = renderTblHeading(data); // calls the function that creates the table header
    const tbody = renderTblBody(data);
  
    table.appendChild(tbody); // appends tbody element into table
    TBL.appendChild(table); // appends the table element into the table id tab-data
  }


}
export { renderTbl }; // exports functions into main.js



// how do i render what is in local storage when page refreshes 