$(document).ready(function(e) {
	// $(".form-item input, .form-item textarea").on(focus, function(e) {
		
	// })

	$(".form-item input, .form-item textarea").focusin(function(e) {
		if ($(this).val() == "" || $(this).val() == null) {
			$(this).siblings(".form-label").addClass("is-focused");
		}
	})

	$(".form-item input, .form-item textarea").focusout(function(e) {
		if ($(this).val() == "" || $(this).val() == null) {
			$(this).siblings(".form-label").removeClass("is-focused");
		}
	})

	var waypoint = new Waypoint({
		element: document.getElementById('home'),
		handler: function() {
			$('.l-nav .indicator').css("left",0);
			$('.l-nav .nav-main .brand-icon').css("margin-left","-84px")
		}
	})

	var waypoint = new Waypoint({
		element: document.getElementById('who-we-are'),
		handler: function() {
			$('.l-nav .indicator').css("left","25%");
			$('.l-nav .nav-main .brand-icon').css("margin-left","0")
		},
		offset: 80
	})

	var waypoint = new Waypoint({
		element: document.getElementById('what-we-do'),
		handler: function() {
			$('.l-nav .indicator').css("left","50%")
		},
		offset: 80
	})

	var waypoint = new Waypoint({
		element: document.getElementById('contact-us'),
		handler: function() {
			$('.l-nav .indicator').css("left","75%")
		},
		offset: 100
	})

	$(".nav-link").click(function(e) {
		var scroll = "#" + $(this).attr("data-href");
		$.scrollTo(scroll, {
			duration: 600,
			offset: -80
		})
	})

	$("a.get-in-touch").click(function(e) {
		e.preventDefault();
		$.scrollTo("#contact-us", {
			duration: 600,
			offset: -80
		})
	})
})