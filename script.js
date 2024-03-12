// scrolling events
let lastKnownScrollPosition = 0;
let ticking = false;
let section = 'home'

function updateScrollText(scrollPos) {
  //Update text in CLI
  const target = document.getElementById('scroll-text');
  target.innerHTML = (`portfolio-${section}-${scrollPos}`);
  ticking = false;
  // Add or remove class from header
  var header = document.getElementById("header");
  if (lastKnownScrollPosition > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollText(lastKnownScrollPosition);
    });

    ticking = true;
  }
});