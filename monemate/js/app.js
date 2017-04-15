$(document).ready(function(){
	$('.l-nav .hamburger').on("click", function(e) {
		$('.nav-items-wrapper').toggleClass('open')
	})

	$('.user-item-scroller').liMarquee();
})