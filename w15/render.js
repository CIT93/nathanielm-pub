import { FORM, TBL } from "./global.js"; // import the FORM and TBL constants from the global.js module
import { cfpData, getLS, saveLS } from "./storage.js"; // import the cfpData, getLS, and saveLS functions from the storage.js module
import { calcAverage, newRow } from "./average.js";
// function to render the table heading
const renderTblHeading = () => {
  const table = document.createElement("table"); // create a table element
  const thead = document.createElement("thead"); // create a table header element
  const tr = document.createElement("tr"); // create a table row element
  const headingTextArr = [
    // array containing the text for the table headings
    "Name",
    "Household",
    "HouseSize",
    "Food Choice",
    "Footprint",
    "Actions",
  ];
  headingTextArr.forEach((text) => {
    // iterate through the array of heading text
    const th = document.createElement("th"); // create a table header cell element
    th.textContent = text; // set the text content of the table header cell
    tr.appendChild(th); // append the table header cell to the table row
  });
  thead.appendChild(tr); // append the table row to the table header
  table.appendChild(thead); // append the table header to the table element

  return table; // return the created table element
};

// function to handle update action
const onUpdate = (index, data) => {
  data.splice(index, 1); // remove the object at the specified index from the data array
  saveLS(data); // save the updated data array to local storage
  renderTbl(data); // render the table with the updated data
};

// function to render the buttons in the table
const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td"); // create a table data cell element
  const btnEdit = document.createElement("button"); // create a button element for editing
  const btnDel = document.createElement("button"); // create a button element for deleting
  btnEdit.textContent = "Edit"; // set the text content of the edit button
  btnDel.textContent = "Delete"; // set the text content of the delete button

  td.appendChild(btnEdit); // append the edit button to the table data cell
  td.appendChild(btnDel); // append the delete button to the table data cell

  // event listener for the delete button
  btnDel.addEventListener("click", (e) => {
    onUpdate(index, data); // call the onUpdate function with the index and data as arguments
  });

  // event listener for the edit button
  btnEdit.addEventListener("click", (e) => {
    FORM.firstName.value = obj.first; // set the value of the first name input field in the form
    FORM.lastName.value = obj.last; // set the value of the last name input field in the form
    FORM.housem.value = obj.houseMembers; // set the value of the household members input field in the form
    FORM.houses.value = obj.houseSize; // set the value of the house size input field in the form
    FORM.food.value = obj.foodChoice; // set the value of the food choice input field in the form

    onUpdate(index, data); // call the onUpdate function with the index and data as arguments
  });
  return td; // return the created table data cell
};

// function to render the table body
const renderTblBody = (data) => {
  const tbody = document.createElement("tbody"); // create a table body element
  //console.log(data[0].total); // ****log the first object in the data array to the console

  data.forEach((obj, index) => {
    // iterate through each object in the data array
    const tr = document.createElement("tr"); // create a table row element
    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "total"];

    keys.forEach((key) => {
      // iterate through each key
      const td = document.createElement("td"); // create a table data cell element
      td.textContent = obj[key]; // set the text content of the table data cell to the value
      tr.appendChild(td); // append the table data cell to the table row
    });

    const td = renderTblBtn(obj, index, data); // call the function to render the buttons and pass relevant data
    tr.appendChild(td); // append the buttons table data cell to the table row
    tbody.appendChild(tr); // append the table row to the table body
  });

  return tbody; // return the created table body element
};

// function to render the entire table
const renderTbl = (data) => {
  TBL.innerHTML = ""; // clear the existing table content
  if (data.length !== 0) {    // check if the data array is not empty
    const table = renderTblHeading(data); // call the function to render the table heading
    const tbody = renderTblBody(data); // call the function to render the table body
    table.appendChild(tbody); // append the table body to the table
    TBL.appendChild(table); // append the table to the table element in the HTML
    newRow(TBL);
  }
};
export { renderTbl }; // export the renderTbl function to be used in other modules
