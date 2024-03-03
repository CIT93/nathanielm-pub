import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseholdPts } from "./carbonFP.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData, getLS} from "./storage.js";

// const firstNameEl = document.getElementById('firstName');
// const lastNameEl = document.getElementById('lastName');
// const submitEl = document.getElementById("submitError");


const start = (first, last, houseHoldMembers, houseSize) => {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

/////Start Here///////

renderTbl(cfpData);


// Function to validate a single field

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add("invalid");
  } else {
    fieldError.textContent = "";
    event.target.classList.remove("invalid");
  }
}




 // Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);
 








FORM.addEventListener("submit", e => {

  e.preventDefault();
  // const firstName = FORM.firstname.value;
  // const lastName = FORM.lastname.value;
  // const firstNameIsValid = FNAME.value !== '';
  // const lastNameIsValid = LNAME.value !== '';

  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = "";

    start(FNAME.value, LNAME.value, parseInt(FORM.householdmembers.value, 10), FORM.houses.value);
  
    saveLS(cfpData);
    renderTbl(cfpData);
  
    FORM.reset(); // This line resets the form fields to their initial state, clearing the user-input values. It effectively prepares the form for the next submission.
  
  } else {
    SUBMIT.textContent = "Form requires first name and last name";
    //fNameRequiredTxt.textContent = "**First Name is required**";

    console.log("no first name");
  }
})


// rest operator

// const add2 = function (...a) {
//   return 2 + a[3];
// };

// const result = add2(1, 2, 3, 4);




const add2 = a => 2 + a;
;

const result = add2(100);
// IIFE

// const a = 3

// (function (a) {
//   console.log("inside IIFE");
//   console.log(a);
// })(a);
