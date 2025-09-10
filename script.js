document.getElementById("berichtje").textContent = "Hallo wereld vanuit Javascript!";

function begroet() {
  let naam = document.getElementById("naamInput").value;
    document.getElementById("groet").textContent = "Hallo " + naam + "!";
}

function bereken() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  document.getElementById("resultaat").textContent = "Resultaat: " (a + b);
}
