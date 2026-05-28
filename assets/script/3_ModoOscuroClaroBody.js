const encenderApagarIcon = document.getElementById("iconoSolID")
const pagina = document.body

// cargar estado guardado
pagina.classList.toggle("fondoClaro", localStorage.getItem("brillo") === "on")

// guardar el icono al cargar
if(localStorage.getItem("brillo") === "on"){
  encenderApagarIcon.setAttribute("name","cloudy-night")
}

encenderApagarIcon.addEventListener("click", () => {
  pagina.classList.toggle("fondoClaro")
  // Cambiar icono
  if (pagina.classList.contains("fondoClaro")) {
    encenderApagarIcon.setAttribute("name", "cloudy-night")
    localStorage.setItem("brillo", "on")
  } else {
    encenderApagarIcon.setAttribute("name", "sunny-sharp")
    pagina.style.transition = ".7s"
    localStorage.setItem("brillo", "off")
  }
})