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
	//Call the alert with wngalert($status as string, $title as string, $body as string)
	$('#index-page .l-nav').click(function(e) {
		wngalert("success", "Header", "Body conetnt lorem ipsum");
	})
	//--End of Alert Script
})