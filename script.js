// Get the elements from the document
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("noButton"); // Changed to 'noButton'
const container = document.getElementById("container");

// Add event listener to the Yes button
yesButton.addEventListener("click", function() {
  image.src = "images/love.gif";
  yesButton.style.backgroundColor = "red"; // Change button color to red
});

function moveButton() {
  var button = document.getElementById('noButton'); // Changed to 'noButton'
  var containerRect = container.getBoundingClientRect();
  
  var randomX = Math.floor(Math.random() * (containerRect.width - button.offsetWidth));
  var randomY = Math.floor(Math.random() * (containerRect.height - button.offsetHeight));
  
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
}

// Call moveButton function initially to move the button to a random position
moveButton();

// Add hover event listener to the container
container.addEventListener("mouseenter", function() {
  moveButton();
});

// Add click event listener to the "no" button
noButton.addEventListener("click", function() {
  container.removeEventListener("mouseenter", moveButton);
});
