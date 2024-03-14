// Scrolling events
let lastKnownScrollPosition = 0; // Variable to store the last known scroll position
let debounceTimeout; // Variable to store the timeout ID for debounce
let sectionN = '01'; // Variable to store the current section number

// Get all sections on the page
const sections = document.querySelectorAll('section');
const sectionObj = document.getElementById('current-section');
const header = document.getElementById("header");

// Function to update the header based on scroll position
function updateScrollText(scrollPos) {
  // Add or remove class from header based on scroll position
  if (lastKnownScrollPosition > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Function to update the current section based on scroll position
function updateSection(sections) {
  // Loop through each section
  sections.forEach(section => {
    // Get distance from the top of the viewport
    const topDistance = section.getBoundingClientRect().top;
    let id = section.getAttribute('id');
    // If the distance to the top is between -100px and 150px
    if (topDistance >= -100 && topDistance < 150) {
      // Update section number based on section ID
      switch (id) {
        case 'home':
          sectionN = '01';
          break;
        case 'about':
          sectionN = '02';
          break;
        case 'skills':
          sectionN = '03';
          break;
        case 'education':
          sectionN = '04';
          break;
        case 'projects':
          sectionN = '05';
          break;
        case 'contact':
          sectionN = '06';
          break;
        default:
          sectionN = '01';
      }
      // Display the section number
      sectionObj.innerHTML = sectionN;
    }
  });
}

// Event listener for scroll events
document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  // If there's a debounce timeout set, clear it
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }

  // Set a new debounce timeout to limit function calls
  debounceTimeout = setTimeout(() => {
    updateScrollText(lastKnownScrollPosition);
    updateSection(sections);
    console.log("called");
  }, 100); // Adjust the debounce delay (in milliseconds) as needed
});
