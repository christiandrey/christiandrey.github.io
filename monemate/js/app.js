$(document).ready(function(){
	$('.l-nav .hamburger').on("click", function(e) {
		$('.nav-items-wrapper').toggleClass('open');
		if($('.nav-items-wrapper').hasClass('open')) {
			$('.l-nav .hamburger').css('backgroundImage','url(img/icon.hamburger-close.png)');
		} else {
			$('.l-nav .hamburger').css('background-image','url(img/icon.hamburger.png)');
		}
	})

	$('.office .hamburger').on("click", function(e) {
		$('.office-toolbar').toggleClass('open');
		if($('.office-toolbar').hasClass('open')) {
			$('.office .hamburger').attr('src','../img/icon.hamburger-close.png');
		} else {
			$('.office .hamburger').attr('src','../img/icon.hamburger.png');
		}
	})

	$('.user-item-scroller').liMarquee();

	$('.office .member-tool-link.is-collapsible a').on("click", function(e) {
		e.preventDefault();
		$(this).siblings('.tool-menu').slideToggle();
	})
})