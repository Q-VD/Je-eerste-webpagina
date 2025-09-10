document.getElementById("berichtje").textContent = "Hallo wereld vanuit Javascript!";
// begroeting
function begroet() {
  let naam = document.getElementById("naamInput").value;
    document.getElementById("groet").textContent = "Hallo " + naam + "!";
}
// mini rekenmachine
function bereken() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  document.getElementById("resultaat").textContent = "Resultaat: " + (a + b);
}
//todo list
let taken = [];

function voegtoe() {
  let taak = document.getElementById("taak").value;
  taken.push(taak);
  document.getElementById("lijst").innerHTML = taken.map(t => "<li>" + t + "<li>").join("");
}
