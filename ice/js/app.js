$(document).ready(function(e) {
	var isNavOpen = true;
	$('.nav-trigger>img').click(function(e) {
		if(isNavOpen) {
			$(this).attr('src','img/icon.hamburger-close.png');
			$('body').css('overflow', 'hidden');
			$('.nav-drawer .nav-item').dreyanim({
				animationType: 'slideInFromDown',
				animationTime: 450
			})

			isNavOpen = false;
		} else {
			$(this).attr('src','img/icon.hamburger.png');
			$('body').css('overflow', 'auto');
			$('.nav-drawer .nav-item').addClass('hidden');
			isNavOpen = true;
		}
		$(this).parent().toggleClass('open');

		$('.nav-drawer').toggleClass('hidden');

		$('.section-indicator').toggleClass('hidden');
	})
})