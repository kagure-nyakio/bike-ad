/*
* Implement the carousel functionality.
* Modal functionality
*/
const slides = document.getElementsByClassName("bike-carousel")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const specBtn = document.getElementsByClassName("specs")
const closeSpec = document.getElementById("close-modal")
const specEl = document.getElementById("modal")
const totalSlides = slides.length

//  Adding event listener to btns
prevBtn.addEventListener("click", moveToPrevSlide)
nextBtn.addEventListener("click", moveToNextSlide)

// Add functionality to all buttons:
for (let btn of specBtn) {
  btn.addEventListener("click", function() {
    specEl.style.display = "block"
  })
}

closeSpec.addEventListener("click",  function() {
  specEl.style.display = "none"
})

let slidePosition = 0
function moveToNextSlide() {
  hideSlide()

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition++
  }
  slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
  hideSlide()

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition--
  }
  slides[slidePosition].classList.add("carousel-item-visible")
}


// HELPER FNS
function hideSlide() {
  for (let slide of slides) {
    slide.classList.add("carousel-item-hidden")
    slide.classList.remove("carousel-item-visible")
  }
}