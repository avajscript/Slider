window.onload = () => {
  // CREATE SLIDESHOW
  const slideshowLength = 12;
  const slideshowContainer = document.querySelector(
    ".slideshow-selector-container"
  );
  const path = "./images/art_";
  var animationReady = true;

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

  // Variables
  const imageWidth = 200;
  const images = document.querySelectorAll(".slideshow-image");
  const imageContainer = document.querySelector(
    ".slideshow-selector-container"
  );

  // Functions
  function moveContainer(difference, greaterId) {
    // Calculates the difference to move slideshow container in pixels
    difference = difference * imageWidth;

    // Gets left variable
    let leftValue = getComputedStyle(document.documentElement).getPropertyValue(
      "--left"
    );

    // Gets the number value
    leftValue = parseInt(leftValue.match(/-?[0-9]+/g));

    // If selected image is to the left
    if (!greaterId) {
      // Adds to the left value

      leftValue = JSON.stringify(leftValue + difference);

      // Sets the left value
      document.documentElement.style.setProperty("--left", `${leftValue}px`);
      // If selected image is to the right
    } else {
      leftValue = JSON.stringify(leftValue - difference);

      document.documentElement.style.setProperty("--left", `${leftValue}px`);
    }
  }
  function getSelected() {
    let copyImages = [...images];

    let selected = copyImages.find((image) => {
      return image.classList.contains("selected");
    });
    return selected.id;
  }
  function greaterSmaller(curSelected, prevSelected) {
    if (curSelected > prevSelected) {
      let difference = curSelected - prevSelected;
      moveContainer(difference, true);
    } else if (curSelected < prevSelected) {
      let difference = prevSelected - curSelected;
      moveContainer(difference, false);
    }
  }
  function removeSelected() {
    images.forEach((image) => {
      image.classList.remove("selected");
    });
  }
  function setAnimationReady() {
    animationReady = true;
    console.log("tri");
  }
  // Gets the selected image when it's clicked
  function selected(e) {
    if (!animationReady) {
      return;
    }
    animationReady = false;
    setTimeout(function () {
      setAnimationReady();
    }, 1000);
    let prevSelected = getSelected();
    removeSelected();
    e.classList.add("selected");
    greaterSmaller(e.id, prevSelected);
  }

  // Event listeners

  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      selected(e.target.parentNode);
    });
  });
};
