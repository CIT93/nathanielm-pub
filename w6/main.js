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

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
  console.log(cfpData);
}

function displayOutput() {
  for (obj of cfpData) {
    console.log(obj);

    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon footprint ${obj.cfpTotal}`;
    OUTPUT.appendChild(newH2);

    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;
    OUTPUT.appendChild(newH3);

    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;
    newP.textContent += ` and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;
    OUTPUT.appendChild(newP);
  }
}

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.householdmembers.value, 10);
  const houseSize = FORM.houses.value;

  start(houseMembers, houseSize);
  OUTPUT.innerHTML = ""; // This line clears the content of the HTML element with the ID "output." It removes any previous results that might have been displayed.
  displayOutput(); // This line calls the displayOutput() function, which iterates over the cfpData array and displays the updated results in the HTML element with the ID "output."
  FORM.reset(); // This line resets the form fields to their initial state, clearing the user-input values. It effectively prepares the form for the next submission.
});

// No the apartment score is not correct because the string names do not match, "apt" and "apartment". We would need to change the <select> value to match the string value in the function determineHouseSizePts.

// We do this work so we know that all options work and can be used as intended which gives us accurate data according to the user input.
