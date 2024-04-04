const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const displayOutput = () => {
  return new Promise((resolve, reject) => {
    const exercise = FORM.exercise.value;
    const reps = FORM.reps.value;
    OUTPUT.innerHTML = '';

 if (reps === '') {
  reject('Reps input is empty'); // the string value is passed into the .catch method as 'error'
    return; 
}

const h1 = document.createElement("h1");
h1.textContent = `Start ${exercise} - Goal reps is ${reps}`;
OUTPUT.appendChild(h1);

setTimeout(() => {
  resolve(exercise); // 'exercise' value is passed into the stopExercise function 
}, 3000);
});
};

const stopExercise = (exercise) => { // exercise is passed in from the 'resolve' (can name it anything)
  const h2 = document.createElement("h2");
  h2.textContent = `Stop ${exercise}`;
  OUTPUT.appendChild(h2);
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  displayOutput()
    .then(stopExercise)
    .catch((error) => { // error is passed in from the 'reject' string value ('Reps input is empty') --- (can name it anything)
      console.log(`ERROR: ${error}`); 
    });
  FORM.reset();
});
