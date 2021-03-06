$(function() {
  var imghero = document.querySelector('.main_inner'),
    flkty, canOpen = true,
    canMoveHeroImage = true,
    isFirefox = typeof InstallTrigger !== 'undefined',
    win = {
      width: window.innerWidth,
      height: window.innerHeight
    };

  // from http://www.sberry.me/articles/javascript-event-throttling-debouncing
  function throttle(fn, delay) {
    var allowSample = true;

    return function(e) {
      if (allowSample) {
        allowSample = false;
        setTimeout(function() {
          allowSample = true;
        }, delay);
        fn(e);
      }
    };
  }

  window.addEventListener('mousemove', throttle(function(ev) {
    if (!canMoveHeroImage) return false;
    var xVal = -1 / (win.height / 2) * ev.clientY + 1,
      yVal = 1 / (win.width / 2) * ev.clientX - 1,
      transX = 20 / (win.width) * ev.clientX - 10,
      transY = 20 / (win.height) * ev.clientY - 10,
      transZ = 100 / (win.height) * ev.clientY - 50;

    imghero.style.WebkitTransform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
    imghero.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,2deg)';
  }, 100));
});
