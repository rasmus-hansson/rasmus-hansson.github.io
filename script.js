// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

 var lastScrollY = 0,
    ticking = false,
    bgElm = document.getElementById('background'),
    speedDivider = 4;

// Update scroll value and request tick
var doScroll = function() {
  lastScrollY = window.pageYOffset;
  requestTick();
};

window.addEventListener('scroll', doScroll, false);

var requestTick = function() {
  if (!ticking) {
    window.requestAnimationFrame(updatePosition);
    ticking = true;
  }
};

var updatePosition = function() {
  var translateValue = lastScrollY / speedDivider;

  // We don't want parallax to happen if scrollpos is below 0
  if (translateValue < 0)
    translateValue = 0;

  translateY3d(bgElm, translateValue);

  // Stop ticking
  ticking = false;
};

// Translates an element on the Y axis using translate3d
// to ensure that the rendering is done by the GPU
var translateY3d = function(elm, value) {
  var translate = 'translate3d(0px,' + value + 'px, 0px)';
  elm.style['-webkit-transform'] = translate;
  elm.style['-moz-transform'] = translate;
  elm.style['-ms-transform'] = translate;
  elm.style['-o-transform'] = translate;
  elm.style.transform = translate;
};



(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-59227113-1', 'auto');
ga('send', 'pageview');



/*
<div class="container">  		
	<img src="logo.svg" style="width: 250px; height: 250px;">
	<div class="logo">HARSHIT EM</div>
	<div class="subtitle">Slaveri och tortyr_</div>
</div>*/