// scrolling events
let lastKnownScrollPosition = 0;
let ticking = false;
let section = 'home'

function doSomething(scrollPos) {
    console.log(scrollPos);
    const target = document.getElementById('scroll-text');
    target.innerHTML = (`portfolio-${section}-${scrollPos}`);
    ticking = false;
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
    });

    ticking = true;
  }
});