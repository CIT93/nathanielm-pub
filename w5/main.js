const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
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

function displayOutObj(obj) {       // 2. The {displayOutObj} function receives the {cfpObj} object from the {start} function below as a parameter that we named 'obj'

  console.log(obj);
  const output = document.getElementById("output");

  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon footprint is ${obj.cfpTotal}`; // 3. This means that within the displayOutObj function we can access and manipulate the properties of the cfpObj object using the 'obj' parameter.
  output.appendChild(newH2);

  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on number in and size of home`;
  output.appendChild(newH3);

  const newP = document.createElement("p");
  newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;
  newP.textContent += ` and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;
  output.appendChild(newP);
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
    cfpTotal: total
  });
  console.log(cfpData)



}


function displayOutput() {
  //for (i = 0; i < cfpData.length; i++) {
    for (obj of cfpData) {
    console.log(obj)
       
    const output = document.getElementById("output");

    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);

    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;
    output.appendChild(newH3);


    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;
    // newP.textContent += ` and a ${arr[1]} size of home (score: ${arr[2]}).`;
    output.appendChild(newP);
  }
}
start(2, "small");               // 4. start(2, "small"); calls the {start} function with arguments 2 and "small"

//                               //    Inside the start function, the {cfpObj} object is created with the necessary data

//                               //    displayOutObj(cfpObj); calls the {displayOutObj} function and passes the {cfpObj} object as an argument.

//                               //    In the {displayOutObj} function, the {cfpObj} object is received as the obj parameter, allowing you to work with its properties within the {displayOutObj} function.

start(1, "apt");
start(2, "large");
start(3, "medium");

displayOutput()



// start(1, "large");
// start(1, "medium");
// start(1, "small");
// start(2, "medium");
// start(2, "small");
// start(2, "apt");
// start(3, "large");
// start(3, "small");
// start(3, "apt");
// start(4, "large");
// start(4, "medium");
// start(4, "small");
// start(4, "apt");
// start(5, "large");
// start(5, "medium");
// start(5, "small");
// start(5, "apt");
// start(6, "large");
// start(6, "medium");
// start(6, "small");
// start(6, "apt");
// start(7, "large");
// start(7, "medium");
// start(7, "small");
// start(7, "apt");



