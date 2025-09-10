document.getElementById("berichtje").textContent = "Hallo wereld vanuit Javascript!";

function begroet() {
  let naam = document.getElementById("naamInput").value;
    document.getElementById("groet").textContent = "Hallo" + naam + "!";
}
