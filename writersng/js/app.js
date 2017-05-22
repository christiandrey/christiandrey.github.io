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

	//Set progress bar Script
	var _ = $('.m-progress .progress-level');
	// for (var i = 0; i < _.length; i++) {
	// 	console.log(_[i])
	// }
	$.each(_, function(i,v) {
		_ = $(v);
		var rand = (Math.random() * 0.5).toFixed(3);
		var __ = _.attr("data-progress-level");
		_.css("transition", "width " + rand + "s")
		if(__ == 0) {
			_.css('background-color',"#777777");
		} else if (__ > 0 && __ <= 30) {
			_.css('background-color',"#f4c737");
		} else if (__ > 30 && __ <= 60) {
			_.css('background-color',"#f2a42f");
		} else if (__ > 60 && __ <= 99) {
			_.css('background-color',"#32a2bd");
		} else if (__ == 100) {
			_.css('background-color',"#128a4b");
		}
		_.css('width',_.attr("data-progress-level") + "%");
	})
	//End of set progress bar Script

	//Nav hamburger
	$('.l-nav .nav-hamburger').click(function(e) {
		$('.l-nav .right-aligned-items').addClass('open')
	})

	$('.l-nav .right-aligned-items .close-btn').click(function(e) {
		$('.l-nav .right-aligned-items').removeClass('open')
	})
	//End of nav hamburger

	//Left column mobile animation
	$('.two-column-layout .right-column .filter-icon').click(function(e) {
		$('.two-column-layout .left-column').css('top','30px')
	})

	$('.two-column-layout .left-column #cancel-filter').click(function(e) {
		e.preventDefault();
		$('.two-column-layout .left-column').css('top','100%')
	})
	//End of left column mobile animation

	//Create new job animation
	$('.two-column-layout.user-dashboard .right-column div.job-list .m-job-item-new').click(function(e) {
		$('.two-column-layout.user-dashboard .right-column div.job-list').dreyanim({
			animationType: "fallOutAlternate",
			animationTime: 450
		})
		$('.two-column-layout.user-dashboard .right-column').scrollTop(0);
		$('.two-column-layout.user-dashboard .right-column div.new-job').dreyanim({
			animationType: "fallInAlternate",
			animationTime: 450,
			animationDelay: 100
		})
		
		$('.two-column-layout.user-dashboard .left-column div.job-list, .two-column-layout.user-dashboard .left-column div.view-job').addClass('hidden')
		$('.two-column-layout.user-dashboard .left-column div.new-job').removeClass('hidden')
	})

	$('.two-column-layout.user-dashboard .left-column div.new-job a.job-list, .two-column-layout.user-dashboard .right-column div.new-job .col-header .col-action').click(function(e) {
		e.preventDefault();
		$('.two-column-layout.user-dashboard .right-column div.new-job').dreyanim({
			animationType: "fallOut",
			animationTime: 450
		})

		$('.two-column-layout.user-dashboard .right-column div.new-job .col-header .col-title').html("Add a new job");

		$('.two-column-layout.user-dashboard .right-column').scrollTop(0);
		$('.two-column-layout.user-dashboard .right-column div.job-list').dreyanim({
			animationType: "fallIn",
			animationTime: 450,
			animationDelay: 100
		})

		$('.two-column-layout.user-dashboard .left-column div.new-job, .two-column-layout.user-dashboard .left-column div.view-job').addClass('hidden')
		$('.two-column-layout.user-dashboard .left-column div.job-list').removeClass('hidden')
	})
	//End of create new job animation

	//View job animation
	$('.two-column-layout.user-dashboard .right-column div.job-list .m-job-item').click(function(e) {
		$('.two-column-layout.user-dashboard .right-column div.job-list').dreyanim({
			animationType: "fallOutAlternate",
			animationTime: 450
		})

		$('.two-column-layout.user-dashboard .right-column').scrollTop(0);
		$('.two-column-layout.user-dashboard .right-column div.view-job').dreyanim({
			animationType: "fallInAlternate",
			animationTime: 450,
			animationDelay: 100
		})

		$('.two-column-layout.user-dashboard .left-column div.job-list, .two-column-layout.user-dashboard .left-column div.new-job').addClass('hidden')
		$('.two-column-layout.user-dashboard .left-column div.view-job').removeClass('hidden')
	})

	$('.two-column-layout.user-dashboard .left-column div.view-job a.job-list, .two-column-layout.user-dashboard .right-column div.view-job .col-action#job-list').click(function(e) {
		e.preventDefault();
		$('.two-column-layout.user-dashboard .right-column div.view-job').dreyanim({
			animationType: "fallOut",
			animationTime: 450
		})
		$('.two-column-layout.user-dashboard .right-column').scrollTop(0);

		$('.two-column-layout.user-dashboard .right-column div.job-list').dreyanim({
			animationType: "fallIn",
			animationTime: 450,
			animationDelay: 100
		})

		$('.two-column-layout.user-dashboard .left-column div.new-job, .two-column-layout.user-dashboard .left-column div.view-job').addClass('hidden')
		$('.two-column-layout.user-dashboard .left-column div.job-list').removeClass('hidden')
	})
	//End of View job animation

	//Edit job animation
	$('.two-column-layout.user-dashboard .left-column div.view-job a.edit-job, .two-column-layout.user-dashboard .right-column div.view-job .col-action#edit-job').click(function(e) {
		e.preventDefault();
		$('.two-column-layout.user-dashboard .right-column div.view-job').dreyanim({
			animationType: "fallOut",
			animationTime: 450
		})
		$('.two-column-layout.user-dashboard .right-column').scrollTop(0);

		$('.two-column-layout.user-dashboard .right-column div.new-job').dreyanim({
			animationType: "fallIn",
			animationTime: 450,
			animationDelay: 100
		})

		$('.two-column-layout.user-dashboard .right-column div.new-job .col-header .col-title').html("Edit job");

		$('.two-column-layout.user-dashboard .left-column div.job-list, .two-column-layout.user-dashboard .left-column div.view-job').addClass('hidden')
		$('.two-column-layout.user-dashboard .left-column div.new-job').removeClass('hidden')
	})
	//End of edit job animation
})