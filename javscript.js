// Array of image URLs
var images = [
  'https://th.bing.com/th/id/R.5c6bd1c31d48eeaa3ec2e55951f08e58?rik=WKxv7LskuT49Cw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f35800000%2fPuppy-dogs-35894603-1920-1200.jpg&ehk=2b0h3p5A8qcSr%2ftB6EGud0cO2SLHMhOGl0z%2bd%2bmf2F8%3d&risl=&pid=ImgRaw&r=0', // Replace with your image URL
  'https://th.bing.com/th/id/OIP.3IX6FJ6QF3H1CgQSoCIOOQHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain', // Replace with your image URL
  'https://th.bing.com/th/id/OIP.TYmmucT032bQe9C5TWzIygHaE8?w=2560&h=1707&rs=1&pid=ImgDetMain'  // Replace with your image URL
];

// Function to change background image
function changeBackground() {
  var i = 0;
  setInterval(function() {
    document.body.style.backgroundImage = 'url(' + images[i] + ')';
    i = (i + 1) % images.length;  // Increment i, and reset to 0 when it reaches the length of the images array
  }, 10000); // Set interval to 2000 milliseconds (2 seconds)
}

// Call the function to start changing background images
changeBackground();
