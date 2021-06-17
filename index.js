console.log("Hello Oscar Platoon")

const header = document.getElementsByTagName('header')[0]

// Header Transition
window.addEventListener("scroll", function(){
  const scrollPosition = window.scrollY;
  const headerToTop = header.offsetTop

  // ---- Image and Text slide in
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top < window.innerHeight/1.5) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  })

  // ---- Creates Sticky Nav Bar
  if (scrollPosition > headerToTop+75) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
})

// ---- Creates Carousel Images
let currentImageIndex = 0;
const carouselImages = document.querySelectorAll(".carousel-image");

setInterval(() => {
  carouselImages[currentImageIndex].setAttribute('class', 'carousel-image hidden')
    if (currentImageIndex === carouselImages.length-1 ) {
      currentImageIndex = 0
    } else {
      currentImageIndex += 1
    }
  carouselImages[currentImageIndex].setAttribute('class', 'carousel-image')
}, 2500)
