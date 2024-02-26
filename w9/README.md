in main.js we are importing the determineHouseSizePts, determineHouseholdPts, and renderTbl functions from other modules that we have created that contain and export these functions so they can be used in the main.js file. We set a global variable FORM to retrieve the form element by using its ID. We set a global array cfpData to store the carbon footprint data that is pushed in using cfpData.push ({}) from the data input into the form by the user. We set another global variable OUTPUT to retrieve the output element using its ID. We set another global variable TBL to retrieve the tab-data element using its ID as well. This variable is set in the render.js file because that is where it will be used. Our first function on main.js is named start and is passing in the parameters first, last, houseHoldMembers, and houseSize passed in from the data pushed into the cfpData array. The module carbonFP.js contains the 2 functions used to calculate the carbon footprint value based on the number of points given for which situation best fits the user based on a predetermined value using if else statements and returns the carbon footprint value for both functions, determineHouseSizePts and determineHouseholdPts. The start function in main.js calls these 2 functions and adds them together. The added values are stored in a variable named total. These values are then pushed into the cfpData array. The render.js module contains the functions renderTblHeading and renderTbl. renderTblHeading starts by clearing the table content using TBL.innerHTML = "". Then the table is created by first creating its elements such as table, thead, and tr. We created an array called headingTextArr that is used to create the text in the table heading. We use a for loop to loop through the headingTextArr and create a heading for each item in the array and append these headings into the tr (table row) after setting the th text content to the items in the array. Then we append the tr (table row) we created into the thead and append the thead into the table using table.appendChild(thead) and end the function by returning the table. The renderTbl function is called in the main.js module passing in the cfpData array as a parameter in the FORM.addEventListener. This parameter is named data. We create a variable inside this function called table which calls the renderTblHeading function to create the table header. Then the tbody is created using document.createElement("tbody"). We use a for each loop to loop through the objects in the cfpData array and create a table row (tr) for each object. We create table cells for the user name and carbon footprint total and set the text content to the items in the cfpData array using obj.cfpTotal and obj.firstName. Then these cells are appended into table rows, appended into the tbody, then the tbody is appended into the table. The table content is cleared using TBL.innerHTML = "". Finally the table is appended into the TBL element with the ID tab-data. The last thing we created is an event listener that listens for when the user submits the form. After the form is submitted, the default form behavior is prevented using e.preventDefault. Then we are grabbing the user input values using FORM.firstname.value and FORM.lastname.value and parsing the string value returned into an integer using parseInt. Then we call the start function using the arguements firstName, lastName, houseMembers, and houseSize and clear the content of the OUTPUT element using OUTPUT.innerHTML = "". We call the renderTbl function with the cfpData as an arguement being passed in to render these values to the table and finally resetting the form with FORM.reset() to clear the form so another user can enter additional information.


the video was helpful to remind me what each line of code does to get the result we want. Videos explaining code line by line is very helpful to watch because it helps my understanding of what the code does. It's very easy to get lost when reading a lot of code like we have, but this video helps keep that information fresh and serves as a good review. 

edit button heading

we could use FORM.value and place them inside the event listener to edit these fields such as
  
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.householdmembers.value, 10);
  const houseSize = FORM.houses.value; 
/////////////////////////////////

-Week 9-

Manipulating the JSON

local storage is a way to store and access the user input so that it can be accessed even after the webpage is refreshed. We use it to store the user's data so that we can access it at another time even if the page refreshes. Local storage has no expiration time. 

the method localStorage.setItem("myCat", "Tom") is used for setting the data and storing it in the local storage.

the method const cat = localStorage.getItem("myCat") is used for getting the item back from local storage.

the .removeItem method is used to remove an item from the local storage

the .clear() method is used to remove all items from the local storage

serialization is used to transfer data stored on the local storage

the function JSON.stringify() is used to get the data back 

JSON.stringify is used to store data in the local storage

JSON.parse is used to bring the data back to change or manipulate it