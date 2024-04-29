// import { cfpData } from "./storage.js";

// const totalArr = [];

// const calcAverage = () => {
//   totalArr.length = 0;
//   cfpData.forEach(function (cfpTotal) {
//     totalArr.push(cfpTotal.total);
//   });

//   const total = totalArr.reduce((sum, len) => sum + len, 0);
//   console.log(`total: ${total}`);
//   const avg = total / totalArr.length;
//   console.log(`average: ${avg}`);
//   return avg;
// };

// const newRow = () => {
//   const myTable = document.querySelector("table");

//   let newRow = myTable.insertRow(-1);

//   let newCell = newRow.insertCell(0);
//   let newCell2 = newRow.insertCell(1);
//   let newCell3 = newRow.insertCell(2);
//   let newCell4 = newRow.insertCell(3);
//   let newCell5 = newRow.insertCell(4);

//   let newText = document.createTextNode(`Carbon Footprint Average`);
//   let newText2 = document.createTextNode(`${calcAverage()}`);

//   newCell4.appendChild(newText);
//   newCell5.appendChild(newText2);
// };

// console.log(cfpData);

// export { calcAverage, newRow };
