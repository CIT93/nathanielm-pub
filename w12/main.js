const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

const displayOutput = (callback) => {
  const exercise = FORM.exercise.value;
  const reps = FORM.reps.value;
  const h1 = document.createElement("h1");
  h1.textContent = `Start ${exercise} - Goal reps is ${reps}`;
  OUTPUT.appendChild(h1);

  setTimeout(() => {
    callback(exercise);
  }, 3000);
};

const stopExercise = (exercise) => {
  const h2 = document.createElement("h2");
  h2.textContent = `Stop ${exercise}`;
  OUTPUT.appendChild(h2);
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  displayOutput(stopExercise);
  FORM.reset();
});
