$(document).ready(function(e) {
	$('.col-match').matchHeight();

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
})