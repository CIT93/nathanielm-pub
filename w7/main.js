import { renderTbl } from "./render.js";
const FORM = document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apartment") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseholdPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

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

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.householdmembers.value, 10);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  
  OUTPUT.innerHTML = ""; // This line clears the content of the HTML element with the ID "output." It removes any previous results that might have been displayed.

//  displayOutput(); // This line calls the displayOutput() function, which iterates over the cfpData array and displays the updated results in the HTML element with the ID "output."

  renderTbl(cfpData);

  FORM.reset(); // This line resets the form fields to their initial state, clearing the user-input values. It effectively prepares the form for the next submission.
});


// we got the error because the td variable has not been declared in the main renderTbl function scope. I got this same error when I was troubleshooting my code to add the 2 buttons inside a td. I ended up creating a new variable called td in the function scope to create the td element. then I changed the text to "Edit" and "Delete" for each button using document.textContent. Appended the buttons into the td and then appended the td into the tr after the loop.

// the data parameter is the cfpData array of objects. 