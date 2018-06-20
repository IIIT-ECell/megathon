$(document).ready(function() {
  console.log('materialize initializer on');

  $('.dropdown-trigger').dropdown({ hover: true });

  $('.sidenav').sidenav({
  	edge: 'right',
  	draggable: false,
  	closeOnClick: true
  });

  $('.modal').modal();

  $('.scrollspy').scrollSpy();
});

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
