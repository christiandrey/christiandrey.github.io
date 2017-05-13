$(document).ready(function(e) {

	//Column match script
	$('.col-match').matchHeight();
	//Column match script

	//Slider script
	var sliderVariable = new Number;
	sliderVariable = 0;
	$('#index-page .rarr').on("click", function(e) {
		sliderVariable -= 100;
		switch(sliderVariable<-100) {
			case false:
			$('#index-page .l-section.testimony .col-content-stage').css('left',sliderVariable+"%");
			break;
			case true:
			sliderVariable = 0;
			$('#index-page .l-section.testimony .col-content-stage').css('left',sliderVariable+"%");			
			break;
		}
	})

	$('#index-page .larr').on("click", function(e) {
		sliderVariable += 100;
		switch(sliderVariable>0) {
			case false:
			$('#index-page .l-section.testimony .col-content-stage').css('left',sliderVariable+"%");
			break;
			case true:
			sliderVariable = 0;			
			break;
		}
	})

	$('#index-page .larr').mouseenter(function(e) {
		$(this).attr('src','img/icon.left--hover.png')
	})

	$('#index-page .larr').mouseleave(function(e) {
		$(this).attr('src','img/icon.left.png')
	})

	$('#index-page .rarr').mouseenter(function(e) {
		$(this).attr('src','img/icon.right--hover.png')
	})

	$('#index-page .rarr').mouseleave(function(e) {
		$(this).attr('src','img/icon.right.png')
	})
	//--End of slider script

	//--Alert Script
	function wngalert(status, title, body) {
		$selector = $('#alert');
		$classList = "success failure";
		if (status == "success") {
			$selector.find('.alert-content .alert-icon').removeClass($classList).addClass("success");
		}
		if (status == "failure") {
			$selector.find('.alert-content .alert-icon').removeClass($classList).addClass("failure")
		}

		$selector.find('.alert-content .alert-title').html(title);
		$selector.find('.alert-content .alert-body').html(body);
		$selector.removeClass("hidden");
		$(body).css('overflow', 'hidden');
		$selector.find('.alert-content').dreyanim({
			animationType: "fallInAlternate",
			animationTime: 450,
		})
		$selector.find('.alert-content .alert-footer button').click(function(e) {
			$selector.find('.alert-content').dreyanim({
				animationType: "fallOutAlternate",
				animationTime: 450,
			})
			setTimeout(function() {
				$selector.addClass("hidden");
				$(body).css('overflow', 'auto');
				$selector.find('.alert-content').addClass("hidden");
			}, 450)			
		})
	}

	//Call the alert with wngalert($status as string, $title as string, $body as string)

	//--End of Alert Script
<<<<<<< HEAD
=======

	$('#index-page .l-nav').click(function(e) {
		wngalert("success", "Heading", "Body")		
	})
>>>>>>> b550ba8d1a14fbd54abb4514cd79d5f87b4930ad
})