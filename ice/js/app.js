$(document).ready(function(e) {
	// var isNavOpen = true;
	// $('.nav-trigger>img').click(function(e) {
	// 	if(isNavOpen) {
	// 		$(this).attr('src','img/icon.hamburger-close.png');
	// 		$('body').css('overflow', 'hidden');
	// 		$('.nav-drawer .nav-item').dreyanim({
	// 			animationType: 'slideInFromDown',
	// 			animationTime: 450
	// 		})

	// 		isNavOpen = false;
	// 	} else {
	// 		$(this).attr('src','img/icon.hamburger.png');
	// 		$('body').css('overflow', 'auto');
	// 		$('.nav-drawer .nav-item').addClass('hidden');
	// 		isNavOpen = true;
	// 	}
	// 	$(this).parent().toggleClass('open');

	// 	$('.nav-drawer').toggleClass('hidden');

	// 	$('.section-indicator').toggleClass('hidden');
	// })

	 //whoweare
	  $.easing.custom = function (x, t, b, c, d) {
	    var s = 1.70158;
	    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
	    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	  }

	  $('.navContainer').click(function(){
	    $('.ham').toggleClass("open");
	    $('.navElements').toggleClass("close");
	    $('.navElements').toggleClass("open");
	    $('.navElements *').toggleClass("open");
	  })

	  $('.navElements .home').click(function(){
	    location.href="index.html"
	  })

	  $('.navElements .whoweare').click(function(){
	    location.href="whoweare.html"
	  })

	  $('.navElements .whatwedo').click(function(){
	    location.href="whatwedo.html"
	  })

	  $('.navElements .contact').click(function(){
	    location.href="contact.html"
	  })
	  //--End of Navigation
})