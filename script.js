const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const image = document.getElementById("image");

yesButton.addEventListener("click", function() {
  image.src = "images/love.gif";
  yesButton.style.backgroundColor = "red"; 
  
});


noButton.addEventListener("click", function() {
  image.src = "images/cry.gif";
});




const div = document.querySelector('#no');

div.addEventListener('mouseenter', () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const randomX = Math.random() * (viewportWidth - div.offsetWidth);
  const randomY = Math.random() * (viewportHeight - div.offsetHeight);

  div.style.position = 'absolute'; 
  div.style.left = `${randomX}px`;
  div.style.top = `${randomY}px`;
});

