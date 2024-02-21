import { determineHouseSizePts, determineHouseholdPts } from "./carbonFP.js";
import { renderTbl } from "./render.js";
const FORM = document.getElementById("form");
const cfpData = [];
const OUTPUT = document.getElementById("output");

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

  renderTbl(cfpData);

  FORM.reset(); // This line resets the form fields to their initial state, clearing the user-input values. It effectively prepares the form for the next submission.
});
