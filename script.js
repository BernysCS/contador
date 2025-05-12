const btn = document.getElementById('btn');
const contador = document.getElementById('contador');

let clicks = 0;

btn.addEventListener("click", () => {
  clicks++;
  contador.innerText = clicks;
})