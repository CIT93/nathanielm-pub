const saveLS = cfpData => { // Define a function named saveLS that takes cfpData as input
    const serializedArr = JSON.stringify(cfpData); // Serialize the cfpData array into a JSON string
    localStorage.setItem("cfp", serializedArr); // Store the serialized cfpData array in the localStorage with key "cfp"
}

const getLS = () => { // Define a function named getLS with no input parameters
    const retrievedArry = localStorage.getItem("cfp"); // Retrieve the serialized cfpData array from localStorage with key "cfp"
    if (retrievedArry !== null) { // Check if the retrieved array is not null
        return JSON.parse(retrievedArry); // Parse the retrieved JSON string back into an array and return it
    } else {
        return []; // If the retrieved array is null, return an empty array
    }
}

const cfpData = getLS(); // Call the getLS function to retrieve the cfpData from localStorage

export { cfpData, saveLS, getLS }; // Export the cfpData array, saveLS function, and getLS function for use in other files
