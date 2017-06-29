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
})