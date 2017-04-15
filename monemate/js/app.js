$(document).ready(function(){
	$('.l-nav .hamburger').on("click", function(e) {
		$('.nav-items-wrapper').toggleClass('open')
	})

	$('.office .hamburger').on("click", function(e) {
		$('.office-toolbar').toggleClass('open')
	})

	$('.user-item-scroller').liMarquee();
})