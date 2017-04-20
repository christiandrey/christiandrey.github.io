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

	try {
		$('.user-item-scroller').liMarquee();
	} catch(error){
		console.log(error.message)
	}

	$('.office .member-tool-link.is-collapsible .tool-link').on("click", function(e) {
		e.preventDefault();
		$(this).siblings('.tool-menu').slideToggle();
	})

	//Modals
	$('.modal .modal-close-btn').click(function(e) {
		$('.modal').addClass('hidden')
	})

	$('#modal-toggle, #edit').click(function(e) {
		var modalName = $(this).attr("data-modal-toggle");
		$('.modal.' + modalName).toggleClass('hidden');
	})
	//End of Modals

	$('#sign-out').click(function(e) {
		location.href="../login.html"
	})
})