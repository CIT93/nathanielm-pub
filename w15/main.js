import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseholdPts } from "./carbonFP.js";
import { FORM, FNAME, LNAME, SUBMIT, FOOD } from "./global.js";
import { saveLS, cfpData, getLS } from "./storage.js";
import { FP } from "./fp.js";
import { calcAverage } from "./average.js";
//import {} from "./fp.js"
// const firstNameEl = document.getElementById('firstName');
// const lastNameEl = document.getElementById('lastName');
// const submitEl = document.getElementById("submitError");

function start(first, last, houseHoldMembers, houseSize) { // Define a function called start that takes four parameters: first name, last name, number of household members, and house size.
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers); // Calculate household points based on the number of household members.
  const houseSizePTS = determineHouseSizePts(houseSize); // Calculate house size points based on the size of the house.
  const total = houseHoldPTS + houseSizePTS; // Calculate the total carbon footprint points by adding household points and house size points.
  cfpData.push({ // Add a new object to the cfpData array containing details about the individual's carbon footprint.
    firstName: first, // Store the first name in the object.
    lastName: last, // Store the last name in the object.
    houseM: houseHoldMembers, // Store the number of household members in the object.
    houseS: houseSize, // Store the house size in the object.
    houseMPTS: houseHoldPTS, // Store the household points in the object.
    houseSPTS: houseSizePTS, // Store the house size points in the object.
    cfpTotal: total, // Store the total carbon footprint points in the object.
  });
}

/////Start Here///////

renderTbl(cfpData); // Render the table with the initial data.

// Function to validate a single field

const validateField = (event) => { // Define a function called validateField that takes an event parameter.
  const field = event.target.value; // Get the value of the field that triggered the event.
  const fieldId = event.target.id; // Get the id of the field that triggered the event.
  const fieldError = document.getElementById(`${fieldId}Error`); // Find the error element associated with the field.
  //console.log(event); // Output the event object to the console.
  if (field === "") { // Check if the field value is empty.
    fieldError.textContent = `${fieldId} is required`; // Display an error message indicating that the field is required.
    event.target.classList.add("invalid"); // Add the "invalid" class to the field to indicate an error.
  } else {
    fieldError.textContent = ""; // Clear any existing error message for the field.
    event.target.classList.remove("invalid"); // Remove the "invalid" class from the field.
  }
};

// Attach blur event listeners
FNAME.addEventListener("blur", validateField); // Attach the validateField function to the blur event of the first name field.
LNAME.addEventListener("blur", validateField); // Attach the validateField function to the blur event of the last name field.

FORM.addEventListener("submit", (e) => { // Add an event listener for form submission.
  e.preventDefault(); // Prevent the default form submission behavior.
  if (FNAME.value !== "" && LNAME.value !== "") { // Check if the first name and last name fields are not empty.
    SUBMIT.textContent = ""; // Clear any existing submission error message.
    const fpObj = new FP( // Create a new instance of the FP class with the form input values.
      FNAME.value, // Pass the value of the first name field.
      LNAME.value, // Pass the value of the last name field.
      parseInt(FORM.housem.value, 10), // Parse and pass the value of the household members field as an integer.
      FORM.houses.value, // Pass the value of the house size field.
      FORM.food.value, // Pass the value of the food choice field.
      //console.log(FORM.food.value) // Log the value of the food choice field to the console.
    );
    cfpData.push(fpObj); // Add the new carbon footprint object to the data array.
    saveLS(cfpData); // Save the updated data array to local storage.
    renderTbl(cfpData); // Render the table with the updated data.
    FORM.reset(); // Reset the form fields.
  } else {
    SUBMIT.textContent = "Form requires first name and last name"; // Display an error message if the first name or last name fields are empty.
  }
})



//console.log(cfpData[1].total)

//console.log(totalArr)


// function getPizza() {
//   return '🍕'
// }

// const pizza = getPizza()
// console.log(`${pizza}`)

// let pizza 

// function orderPizza() {
//   console.log('Order pizza')
//   setTimeout(() => {
//     pizza = `🍕`
//     console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log('Pizza was ordered')
// }
// orderPizza()
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`)

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = `🍕`
//     callback(pizza)
//   }, 2000)
// }
// function pizzaReady(pizza) {
//   console.log(`Eat the ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log(`Call Qoli`)

// window.addEventListener('click', callback)
//   function callback() {

  
//   console.log('Clicked')
//   }

// function thing1 (callback) {
//   callback()
// }
// function thing2 (callback) {
//   callback()
// }
// function thing3 (callback) {
//   callback()
// }


// thing1(() => {
//   thing2(() => {
//     thing3() 
//     })
// })