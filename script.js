// Get the elements from the document
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const image = document.getElementById("image");

// Add event listeners to the buttons
yesButton.addEventListener("click", function() {
  image.src = "images/love.gif";
});

noButton.addEventListener("click", function() {
  // Change the image source to a different image
  image.src = "images/cry.gif";
});

