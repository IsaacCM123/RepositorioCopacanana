// Lista de videos
const listaDeVideos=[
  { titulo:'PREMIUM',
    poster:'./../img/habitaciones/1.png',
    video:'https://res.cloudinary.com/dt6e5g260/video/upload/c_fill,w_340,h_400/v1779580078/2_yg8xfq.mp4'},

  { titulo:'DELUXE',
    poster:'./../img/habitaciones/2.png',
    video:'https://res.cloudinary.com/dt6e5g260/video/upload/c_fill,w_340,h_400/v1779580078/2_yg8xfq.mp4'},

  { titulo:'SUITE',
    poster:'./../img/habitaciones/3.png',
    video:'https://res.cloudinary.com/dt6e5g260/video/upload/c_fill,w_340,h_400/v1779580078/2_yg8xfq.mp4'},

  { titulo:'STANDARD',
    poster:'./../img/habitaciones/4.png',
    video:'https://res.cloudinary.com/dt6e5g260/video/upload/c_fill,w_340,h_400/v1779580078/2_yg8xfq.mp4'}
]

const instanciaDeDeslizarVideos=document.getElementById('deslizarVideos')
listaDeVideos.forEach(item => {
  const targeta=document.createElement('div')
  targeta.className='targeta'

  targeta.innerHTML=`
      <h4>${item.titulo}</h4>
      <video preload="none" width="340" height="400" poster="${item.poster}" controls>
         <source src="${item.video}" type="video/mp4">
       </video>`

  instanciaDeDeslizarVideos.appendChild(targeta)
})

// Scroll animado con IntersectionObserver Lazy Load . . .
const cards = document.querySelectorAll('.targeta')
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.2 }
);
cards.forEach(targeta => observer.observe(targeta))

// Flechas dslizables Desplazamientos de targetas de video
const desplazamiento = document.getElementById('deslizarVideos')
const btnIzq = document.getElementById('izquierda')
const btnDer = document.getElementById('derecha')
const mediaQuery = window.matchMedia('(max-width: 800px)')

if (mediaQuery.matches){ // Si pantalla menor o igual a 800px
// Cantidad de desplazamiento (una tarjeta aprox)
  const scrollAmount=373//ajusta según el ancho de tu tarjeta

  btnIzq.addEventListener('click', () => {
    desplazamiento.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  })

  btnDer.addEventListener('click', () => {
    desplazamiento.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  })
}
else{ // Caso contrario si pantalla mayor a 800px
  // Cantidad de desplazamiento (una tarjeta aprox)
  const scrollAmount=100//ajusta según el ancho de tu tarjeta

  btnIzq.addEventListener('click', () => {
    desplazamiento.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  })

  btnDer.addEventListener('click', () => {
    desplazamiento.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  })
}