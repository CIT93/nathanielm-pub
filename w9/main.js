import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseholdPts } from "./carbonFP.js";
import { FORM } from "./global.js";
import { saveLS, cfpData, getLS} from "./storage.js";

function start(first, last, houseHoldMembers, houseSize) {
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

const validateField = event => {
  const field = event.target.value  
  const fieldId = event.target.id
  const fieldError = document.getElementById(`${fieldId}Error`)
  if (field === '') {
    fieldError.textContent = `${fieldId} is required`
    event.target.classList.add('invalid')
  } else {
    fieldError.textContent = ''
    event.target.classList.remove('invalid')
  }
    
  
  }




 // Attach blur event listeners
document.getElementById('firstName').addEventListener('blur', validateField);
document.getElementById('lastName').addEventListener('blur', validateField);
 





/////Start Here///////

renderTbl(cfpData)



FORM.addEventListener("submit", function (e) {

  e.preventDefault();
  const firstNameIsValid = document.getElementById('firstName').value !== '';
  const lastNameIsValid = document.getElementById('lastName').value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.householdmembers.value, 10);
    const houseSize = FORM.houses.value;
    start(firstName, lastName, houseMembers, houseSize);
  
    saveLS(cfpData)
    renderTbl(cfpData);
  
    FORM.reset(); // This line resets the form fields to their initial state, clearing the user-input values. It effectively prepares the form for the next submission.
  
  } else if(firstNameIsValid === false) {
    const fNameRequiredTxt = document.getElementById("firstNameError")
    fNameRequiredTxt.textContent = "**First Name is required**"

    console.log("no first name")

   } else {
    const lNameRequiredTxt = document.getElementById("lastNameError")
    lNameRequiredTxt.textContent = "**Last Name is required**"

    console.log("no last name")
  }
});
