$(function() {

	var menuBtn = $('.menu-btn');
	var menu = $('.menu');
	var menuItem = $('.menu-link');

	menuBtn.on('click', function(){
		event.preventDefault();
		menu.toggleClass('menu__active');
	});

	menuItem.on('click', function(){
		event.preventDefault();
		menu.toggleClass('menu__active');
	});

	

});
