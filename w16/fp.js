class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    dishwasherUsage,
    washingMachineUsage,
    purchases
  ) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.dishwasherUsage = dishwasherUsage;
    this.washingMachineUsage = washingMachineUsage;
    this.purchases = purchases;
    this.calHouseHoldPoints();
    this.calHouseSizePoints();
    this.calFoodChoicePoints();
    this.calFoodSourcePoints();
    this.calWaterPoints();
    this.calPurchases();
    this.calTotal();
  }

  calHouseHoldPoints() {
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

  calHouseSizePoints() {
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

  calFoodChoicePoints() {
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

  calFoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balance") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    } else {
      this.foodSourcePoints = 0;
    }
  }

  calWaterPoints() {
    if (this.dishwasherUsage === "moreThan9") {
      this.washingPoints = 3;
    } else if (this.dishwasherUsage === "4To9") {
      this.washingPoints = 2;
    } else if (this.dishwasherUsage === "1To3") {
      this.washingPoints = 1;
    } else {
      this.washingPoints = 0;
    }

    if (this.washingMachineUsage === "moreThan9") {
      this.washingPoints = this.washingPoints + 3;
    } else if (this.washingMachineUsage === "4To9") {
      this.washingPoints = this.washingPoints + 2;
    } else if (this.washingMachineUsage === "1To3") {
      this.washingPoints = this.washingPoints + 1;
    }
  }

  calPurchases() {
    if (this.purchases === "moreThan7") {
      this.purchasesPoints = 10;
    } else if (this.purchases === "5To7") {
      this.purchasesPoints = 8;
    } else if (this.purchases === "3To4") {
      this.purchasesPoints = 6;
    } else if (this.purchases === "1To2") {
      this.purchasesPoints = 4;
    } else {
      this.purchasesPoints = 2;
    }
  }

  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodPoints +
      this.foodSourcePoints +
      this.washingPoints +
      this.purchasesPoints;
  }
}

export { FP };
