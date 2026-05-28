const informacion=[
  { imagen: "./assets/img/team/1.png",
    titulo: "TU EQUIPO",
    descripcion: "Hola, sea siempre bienvenido! a su segunda casa. Estamos listos y predispuesto a ser parte de su agenda para ser mas simplificado, seguro y comodo. Nos enorgullese ser parte de sus planes."
  },
  { imagen: "./assets/img/team/2.png",
    titulo: "CASA DE HUESPEDES",
    descripcion: "mas hallá de ser una estancia. Nos encargamos de que sea una experiencia inolvidable y que tenga el deseo de volber otravez."
  },
  { imagen: "./assets/img/team/3.png",
    titulo: "ESTANCIA A TU NIVEL",
    descripcion: "La Casa de Huespedes se encarga de tu comodidad, Nosotros nos encargamos de esos detalles que nunca deverian faltar. en su estancia"    
  }
];

const marco = document.getElementById("marcoMainID")
informacion.forEach(propiedad => {
  const tarjeta = document.createElement("article")
  tarjeta.classList.add("targetaN-DisplayFlex")

  tarjeta.innerHTML = `
    <figure class="marcoIMG">
      <img src="${propiedad.imagen}">
    </figure>
    <div class="bloqueINFO">
      <h2>${propiedad.titulo}</h2>
      <p>${propiedad.descripcion}</p>
    </div>
  `;
  marco.appendChild(tarjeta);
});

ScrollReveal({
  reset: true,
  distance: '200px',
  duration: 2000,
  delay: 0
});

ScrollReveal().reveal('.bloqueINFO', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.bloqueINFO h2', { delay: 700, origin: 'top' });