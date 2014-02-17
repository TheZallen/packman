$(document).ready(function(){

	var $container = $('#group_container');
	// init
	$container.isotope({
	  // options
	  itemSelector: '.item',
	  transitionDuration: '1s',
	  layoutMode: 'fitRows'
	});
	// filter items on button click
	$('#filters').on( 'click', 'button', function( event ) {
	  var filterValue = $(this).attr('data-filter-value');
	  $container.isotope({ filter: filterValue });
	});
});