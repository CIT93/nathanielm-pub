const myHousehold = 8;
const homeSize = 7;
const myFood = 8;
const waterConsumption = 1;
const myPurchases = 8;
const myGarbage = 40;
const recycleAmount = 16;
const myTransportation = 4;

// Total Carbon Footprint

const carbonFootprint = myHousehold + homeSize + myFood + waterConsumption + myPurchases + myGarbage + recycleAmount + myTransportation;

// Output to webpage

const myHeading = document.querySelector("h2");
myHeading.textContent = carbonFootprint;