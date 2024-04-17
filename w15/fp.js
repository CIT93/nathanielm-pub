class FP { // Define a class named FP
  constructor(first, last, houseMembers, houseSize, foodChoice) { // Constructor function that initializes object properties
    this.first = first; // Set the 'first' property of the object to the provided value
    this.last = last; // Set the 'last' property of the object to the provided value
    this.houseMembers = houseMembers; // Set the 'houseMembers' property of the object to the provided value
    this.houseSize = houseSize; // Set the 'houseSize' property of the object to the provided value
    this.foodChoice = foodChoice; // Set the 'foodChoice' property of the object to the provided value
    this.houseHoldPoints(); // Call the 'houseHoldPoints' method to calculate household points
    this.houseSizePoints(); // Call the 'houseSizePoints' method to calculate house size points
    this.foodChoicePoints(); // Call the 'foodPoints' method to calculate food points
    this.total(); // Call the 'total' method to calculate the total points
  }
  houseHoldPoints() { // Define a method named 'houseHoldPoints' to calculate household points
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }
  houseSizePoints() { // Define a method named 'houseSizePoints' to calculate house size points
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePoints = 2;
    }
  }
  foodChoicePoints() { // Define a method named 'foodPoints' to calculate food choice points
    if (this.foodChoice === "meatDaily") {
      this.foodPoints = 10;
    } else if (this.foodChoice === "meatWeekly") {
      this.foodPoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodPoints = 4;
    } else if (this.foodChoice === "veganOrWild") {
      this.foodPoints = 2;
    }
  }
  total() { // Define a method named 'total' to calculate the total points
    this.total = this.houseHoldPoints + this.houseSizePoints + this.foodPoints
  }
}

export { FP };

// CHALLENGE: setup a method that would calculate household points
