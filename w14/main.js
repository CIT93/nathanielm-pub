const output = document.getElementById("output");
const url = 'https://jsonplaceholder.typicode.com/photos'
//const url = "https://x";

function renderPhotos(photos) {
  photos.forEach((img) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", img.thumbnailUrl);
    //output.appendChild(imgEl)
    onSuccess(imgEl);

  });
}

const getPhotos = async () => {
  try {
    const data = await fetch(url);
    const result = await data.json();
    renderPhotos(result);
  } catch (e) {
    onError(e);
  }
}

function onSuccess(imgEl) {
  output.appendChild(imgEl);
}

function onError(e) {
  output.textContent = `ERROR: ${e}`;
}

getPhotos();
