const danceArray = [
  "funky.webp",
  "donkey.webp",
  "bowser.webp",
];

function ranDance() {
  return danceArray[Math.floor(Math.random() * danceArray.length)];
}

const img = document.getElementById("img");

const rutaBase = "/resources/";

dance.src = rutaBase + ranDance();

dance.addEventListener("click", () => {
  location.reload();
});
