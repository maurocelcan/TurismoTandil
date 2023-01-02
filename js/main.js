let btnAlojamiento = document.querySelector("#btn-alojamiento").addEventListener('click', showAlojamientos);
let btnGastronomia = document.querySelector("#btn-gastronomia").addEventListener('click', showGastronomia);
let btnActividades = document.querySelector("#btn-actividades").addEventListener('click', showActividades);

function showAlojamientos() {
  document.getElementById("alojamientos").style.display = "block";
  document.getElementById("gastronomia").style.display = "none";
  document.getElementById("actividades").style.display = "none";
  document.getElementById('alojamientos').scrollIntoView({behavior: 'smooth'});
}

function showGastronomia() {
  document.getElementById("alojamientos").style.display = "none";
  document.getElementById("gastronomia").style.display = "block";
  document.getElementById("actividades").style.display = "none";
  document.getElementById('gastronomia').scrollIntoView({behavior: 'smooth'});
}

function showActividades() {
  document.getElementById("alojamientos").style.display = "none";
  document.getElementById("gastronomia").style.display = "none";
  document.getElementById("actividades").style.display = "block";
  document.getElementById('actividades').scrollIntoView({behavior: 'smooth'});
}


