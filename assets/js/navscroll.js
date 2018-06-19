// Caching? the variables
let win = $(window);
let nav = $('nav');
let cov = $('.landing');
let jump = $('#jump');
let jumpicon = $('#jumpicon');
let down = $('#down');
let hero_overlay = $('.hero-overlay');


let change = (cov.height() - nav.height()) * 0.8;
let shiftY = (cov.height()) - nav.height();

// To make sure the JS is optimal, i.e. There's no performance issue
// Accomplished by making the scrollThing wait
let scrollHandler = {
  allow: true,
  reallow: function() {
    scrollHandler.allow = true;
  },
  delay: 100
}

// To disable, set allow = false;
let smoothScroll = {
  allow: false,
  reallow: function() {
    smoothScroll.allow = true;
  },
  delay: 20
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

  if(win.scrollTop() > shiftY/2) {
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

    if(smoothScroll.allow) {
      console.log('looking at smoothScroll');
      if(win.scrollTop() < change) {
        hero_overlay.css({
          opacity: function() {
            let opacity = 0.5 + 0.5 * (1 - (change - win.scrollTop())/change);

            return opacity;
          }
        });
      }

      smoothScroll.allow = false;

      setTimeout(smoothScroll.reallow, smoothScroll.delay);
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
