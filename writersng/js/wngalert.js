function wngalert(status, title, body, callback) {
	$("<div/>", {
      class: "m-alert hidden",
      id: "alert"
    }).prependTo('.l-main');

    $("<div/>", {
      class: "alert-overlay"
    }).appendTo('.m-alert');

    $("<div/>", {
      class: "alert-content hidden"
    }).appendTo('.m-alert');

    $("<div/>", {
      class: "alert-icon"
    }).appendTo('.m-alert .alert-content');

    $("<p/>", {
      class: "alert-title",
      text: title
    }).appendTo('.m-alert .alert-content');

    $("<p/>", {
      class: "alert-body",
      text: body
    }).appendTo('.m-alert .alert-content');

    $("<div/>", {
      class: "alert-footer"
    }).appendTo('.m-alert .alert-content');

    $("<button/>", {
      class: "btn btn-aqua",
      text: "Close"
    }).appendTo('.m-alert .alert-content .alert-footer');

	$selector = $('#alert');
	$classList = "success failure";
	if (status == "success") {
		$selector.find('.alert-content .alert-icon').removeClass($classList).addClass("success");
	}
	if (status == "failure") {
		$selector.find('.alert-content .alert-icon').removeClass($classList).addClass("failure")
	}

	$selector.removeClass("hidden");
	$('body').css('overflow', 'hidden');
	$selector.find('.alert-content').dreyanim({
		animationType: "fallInAlternate",
		animationTime: 450,
	})
	$selector.find('.alert-content .alert-footer button').click(function(e) {
    eval(callback);
		$selector.find('.alert-content').dreyanim({
			animationType: "fallOutAlternate",
			animationTime: 450,
		})
		setTimeout(function() {
			$selector.remove();
			$('body').css('overflow', 'auto');
		}, 450)			
	})
}