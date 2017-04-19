$(document).ready(function(e) {
	var sliderVariable = new Number;
	sliderVariable = 0;
	$('.slide-control .next').on("click", function(e) {
		sliderVariable -= 100;
		switch(sliderVariable<-300) {
			case false:
			$('.l-header').css('left',sliderVariable+"%");
			break;
			case true:
			sliderVariable = 0;
			$('.l-header').css('left',sliderVariable+"%");			
			break;
		}
	})

	$('.slide-control .prev').on("click", function(e) {
		sliderVariable += 100;
		switch(sliderVariable>0) {
			case false:
			$('.l-header').css('left',sliderVariable+"%");
			break;
			case true:
			sliderVariable = 0;			
			break;
		}
	})
})