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

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseholdPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([
    houseHoldMembers,
    houseSize,
    houseHoldPTS,
    houseSizePTS,
    total,
  ]);
}

function displayOutput() {
  for (arr of cfpData) {
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `The total amount of household members is ${arr[0]}. The carbon footprint score for the total amount of household members is ${arr[2]}. The size of the house is ${arr[1]}. The score for the size of the house is ${arr[3]}. The carbon footprint total is ${arr[4]}`;
    output.appendChild(newP);
  }
}

start(1, "apt");
start(2, "large");
start(3, "medium");
start(1, "large");
start(1, "medium");
start(1, "small");
start(2, "medium");
start(2, "small");
start(2, "apt");
start(3, "large");
start(3, "small");
start(3, "apt");
start(4, "large");
start(4, "medium");
start(4, "small");
start(4, "apt");
start(5, "large");
start(5, "medium");
start(5, "small");
start(5, "apt");
start(6, "large");
start(6, "medium");
start(6, "small");
start(6, "apt");
start(7, "large");
start(7, "medium");
start(7, "small");
start(7, "apt");

displayOutput();

// figure out a way to update template string to update to reference other data, members of house, size of the house,




























///////////My functions//////////////////////////////

// function determineHouseholdPts(numberInHousehold) {
//   let carbonFootprintPoints = 0;
//   if (numberInHousehold === 1) {
//     carbonFootprintPoints = carbonFootprintPoints + 14;
//   } else if (numberInHousehold === 2) {
//     carbonFootprintPoints = carbonFootprintPoints + 12;
//   } else if (numberInHousehold === 3) {
//     carbonFootprintPoints = carbonFootprintPoints + 10;
//   } else if (numberInHousehold === 4) {
//     carbonFootprintPoints = carbonFootprintPoints + 8;
//   } else if (numberInHousehold === 5) {
//     carbonFootprintPoints = carbonFootprintPoints + 6;
//   } else if (numberInHousehold === 6) {
//     carbonFootprintPoints = carbonFootprintPoints + 4;
//   } else if (numberInHousehold >= 7) {
//     carbonFootprintPoints = carbonFootprintPoints + 2;
//   }
//   console.log(
//     `Based on the number of members in a household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`
//   );
//   myHeading.textContent = `Based on the number of members in a household of ${numberInHousehold}, the points would be ${carbonFootprintPoints}.`;
//   return carbonFootprintPoints;
// }
// // // const numberInHousehold = 12;

// // // global scope

// // determineHouseholdPts(3);
// // determineHouseholdPts(4);

// // If you have a large house, then add 10 points to your score.
// // If you have a medium-sized house, then add 7 points.
// // If you have a small house, then add 4 points.
// // If you live in an apartment, then add 2 points.

// // write a function for considering the size of your home
// // write the code first, then tryto put in a function
// // instead of using a numeric value use a string value
// // example: a = largeHouse

// // My Function to determine house size

// function determineHouseSize(houseSize) {
//   let carbonFootprintPoints = 0;
//   switch (
//     houseSize // Switch statement inside of function
//   ) {
//     case "Large House":
//     case "large house":
//       carbonFootprintPoints = 10;
//       console.log(
//         `Based on the size of your home, your points would be ${carbonFootprintPoints}.`
//       );
//       myHeading2.textContent = `Based on the size of your home, your points would be ${carbonFootprintPoints}.`;
//       break;

//     case "Medium House":
//     case "medium house":
//       carbonFootprintPoints = 7;
//       console.log(
//         `Based on the size of your home, your points would be ${carbonFootprintPoints}.`
//       );
//       myHeading2.textContent = `Based on the size of your home, your points would be ${carbonFootprintPoints}.`;
//       break;

//     case "Small House":
//     case "small house":
//       carbonFootprintPoints = 4;
//       console.log(
//         `Based on the size of your home, your points would be ${carbonFootprintPoints}.`
//       );
//       myHeading2.textContent = `Based on the size of your home, your points would be ${carbonFootprintPoints}.`;
//       break;

//     case "Apartment":
//     case "apartment":
//       carbonFootprintPoints = 2;
//       console.log(
//         `Based on the size of your home, your points would be ${carbonFootprintPoints}.`
//       );
//       myHeading2.textContent = `Based on the size of your home, your points would be ${carbonFootprintPoints}.`;
//       break;

//     default:
//       myHeading2.textContent =
//         "You must choose either a large house, medium house, small house, or apartment.";
//       myHeading3.textContent = `Your total carbon footprint points are ${carbonFootprintPoints}.`;
//       console.log(
//         "You must choose either a large house, medium house, small house, or apartment."
//       );
//   }
//   return carbonFootprintPoints; // Return the value of carbonfootprintpoints *must be returned outside of switch statement*
// }
// const myHeading = document.querySelector("h1"); // assigning myHeading to h1
// const myHeading2 = document.querySelector("h2"); // assigning myHeading2 to h2
// const myHeading3 = document.querySelector("h3"); // assigning myHeading3 to h3

// let carbonFootprintPoints = 0;

// // Calling functions and giving them a variable name to add them together

// let householdPtsResult = determineHouseholdPts(2); // Calling Number of household members function

// let houseSizeResult = determineHouseSize("smal house"); // Calling House size function

// let result = houseSizeResult + householdPtsResult; // Adding the points returned after calling each function and storing the total value of points in a variable named "result"

// // Outputting the result of the total points to the webpage and the console
// myHeading3.textContent = `Your total carbon footprint points are ${result}.`;
// console.log(`Your total carbon footprint points are ${result}.`);
