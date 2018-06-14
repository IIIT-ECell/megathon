// Caching? the variables
let win = $(window);
let nav = $('nav');
let cov = $('.landing');
let jump = $('#jump');
let jumpicon = $('#jumpicon');
let down = $('#down')

let shiftY = (cov.height())/2 - nav.height();

// To make sure the JS is optimal, i.e. There's no performance issue
// Accomplished by making the scrollThing wait
let scrollHandler = {
  allow: true,
  reallow: function() {
    scrollHandler.allow = true;
  },
  delay: 200
}

// Function executing on detecting a scroll
function checkScroll() {
  console.log("Detected scroll, checking to see if classes should change")
  if(win.scrollTop() > shiftY) {
    nav.addClass('grey');
    nav.addClass('darken-4');
    nav.removeClass('transparent');
  }
  else {
    nav.removeClass('grey');
    nav.removeClass('darken-4');
    nav.addClass('transparent');
  }

  if(win.scrollTop() > shiftY) {
    jump.removeClass('transparent');
    jumpicon.removeClass('transparent');
  }
  else {
    jump.addClass('transparent');
    jumpicon.addClass('transparent');
  }

}


checkScroll();
// only executes if on the home page or somewhere with a landing
if(cov.length > 0) {
  win.on("scroll load resize", function(){
    if(scrollHandler.allow) {
      checkScroll();
      scrollHandler.allow = false;
      setTimeout(scrollHandler.reallow, scrollHandler.delay);
    }
  });
}


jump.click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0 // Scroll to top of body
    }, 600);
});

down.click(function() { // On clicking the down arrow
  $('body,html').animate({
      scrollTop : cov.height() // go down just past the cover
  }, 600);
});
