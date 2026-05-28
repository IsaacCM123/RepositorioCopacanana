let slides = document.querySelectorAll(".imgSlider");
let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

// Cambio automático cada 6s
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);