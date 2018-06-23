$(document).ready(function() {
  console.log('materialize initializer on');

  $('.dropdown-trigger').dropdown({ hover: true });

  $('.sidenav').sidenav({
  	edge: 'right',
  	draggable: false,
  	closeOnClick: true
  });

  $('.tabs').tabs();

  $('.modal').modal();

  $('.scrollspy').scrollSpy();
});
/*
The next set of functions are for the timeline page
*/

(function() {

  var items = document.querySelectorAll(".timeline li");

  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
 
})();
// $(document).scroll(function(){
// 	$('.scrollspy').each(function(){
// 	  	if($(this).is(':visible'))
// 	  	{
// 	  		$(this).addClass('active');
// 	  		console.log(this);
// 	  	}
// 	  	else{
//   			$(this).removeClass('active');
//   		}
//   	});
// });
