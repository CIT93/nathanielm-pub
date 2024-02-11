const TBL = document.getElementById("tab-data")
function renderTblHeading () {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Household", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
      const th = document.createElement("th")
      th.textContent = text
      tr.appendChild(th)
    }) 
    thead.appendChild(tr)
    table.appendChild(thead)
    return table
  
  }
  
  function renderTbl(data) { // the data parameter is the cfpData array of objects. 
    const table = renderTblHeading()
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const trTextArr = ["Nate", "3", "large", 20];
    trTextArr.forEach(function (text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
    const td = document.createElement("td"); // creates the variable td to create a "td" element when it is used
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit"; // changes name of button to "Edit" on the DOM (what the user sees)
    btnDel.textContent = "Delete"; // changes name of button to "Delete" on the DOM (what the user sees)
  
  
  
    td.appendChild(btnEdit)
    td.appendChild(btnDel)
    tr.appendChild(td)
    tbody.appendChild(tr)
    table.appendChild(tbody)
    console.log(table)
  
  
    // const td = document.createElement("td"); // creates the variable td to create a "td" element when it is used
  
    // td.appendChild(editButton); // places edit button inside of the "td"
    // tr.appendChild(td); // places "td" inside of the "tr"
    // tbody.appendChild(tr); // places "tr" inside of the "tbody"
  
    // td.appendChild(deleteButton); // places delete button inside of the "td"
    // tr.appendChild(td); // places "td" inside of the "tr"
    // tbody.appendChild(tr); // places "tr" inside of "tbody"
  
  
    TBL.appendChild(table);
  
    // TBL.appendChild(tbody);
    // console.log(tbody);
  
  }

  export {renderTbl, renderTblHeading}

  // I dont have any quetions at this point on creating modules. I'm still taking notes on this material, but I'm starting to understand how to export and import modules to help clean up our code.