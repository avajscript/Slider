// Variables
const slideshowLength = 12;
const slideshowContainer = document.querySelector(
  ".slideshow-selector-container"
);
const path = "./images/art_";

// Functions

// Create slideshow
(function () {
  for (let i = 1; i <= slideshowLength; i++) {
    // Create slide
    let slide = document.createElement("div");
    slide.classList.add("slideshow-image");
    slide.id = i;
    // Add selected class to third image
    if (i == 3) {
      slide.classList.add("selected");
    }
    // Create img

    let img = document.createElement("img");
    img.src = `${path}${i}.jpg`;

    slide.appendChild(img);
    slideshowContainer.appendChild(slide);
  }
})();

// Event listeners
