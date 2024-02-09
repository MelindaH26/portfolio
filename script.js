// SVG animations

const tween1 = KUTE.fromTo(
    '#blob-front-1',
    { path: '#blob-front-1' },
    { path: '#blob-front-2' },
    { repeat: 999, duration: 6000, yoyo: true}
);

const tween2 = KUTE.fromTo(
    '#blob-back-1',
    { path: '#blob-back-1' },
    { path: '#blob-back-2' },
    { repeat: 999, duration: 7800, yoyo: true}
);

tween1.start();
tween2.start();


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