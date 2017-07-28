$(document).ready(function(e) {

	//Column match script
	$('.col-match').matchHeight();
	//Column match script

	//Slider script
	var sliderVariable = new Number;
	sliderVariable = 0;
	$('#index-page .rarr').on("click", function(e) {
		sliderVariable -= 100;
		switch(sliderVariable<-400) {
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

	//Set progress bar Script
	var _ = $('.m-progress .progress-level');
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

    //Fixed Nav scroll appear animation
    $(document).scroll(function(e) {
        if ($(document).scrollTop() >= 400) {
            $('.l-nav.fixed-nav').removeClass("hidden");
        } else {
            $('.l-nav.fixed-nav').addClass("hidden");
        }
    })
    //End of Fixed Nav scroll appear animation

	//Left column mobile animation
	$('.two-column-layout .right-column .filter-icon').click(function(e) {
		$('.two-column-layout .left-column').css('top','30px')
	})

	$('.two-column-layout .left-column #cancel-filter').click(function(e) {
		e.preventDefault();
		$('.two-column-layout .left-column').css('top','100%')
	})
	//End of left column mobile animation

	//Emoji Text Area
	// try {
	// 	$('textarea#emoji-textarea').emojioneArea({
	// 		pickerPosition: "bottom",
	// 	  	filtersPosition: "bottom",
	// 	    tones: false,
	// 	    autocomplete: false,
	// 	    spellcheck: true,
	// 	    hidePickerOnBlur: true

	// 	})
	// } catch(err) {
	// 	console.log(err)
	// }
	//End of Emoji Text Area

	// TinyMCE Text Area
	try {
		tinymce.init({
		    selector: '#project-summary, #project-outline'
		});
	} catch(err) {
		console.log(err)
	}
	// End of TinyMCE Text Area

	//File Viewer
	$('.attachment-item .attachment-preview[data-href]').click(function() {
		try {
			wngviewer($(this));
		} catch(err) {
			console.log(err)
		}
	})

	$('.attachment-item .attachment-remove').click(function() {
		$(this).parents('.attachment-item').remove();
	})
	//End of File Viewer

    //Handle Attachment Selection Click
    $(".attachment-selection .paperclip").click(function() {
        $this = $(this);

        if ($this.hasClass("open")) {
            $this.removeClass("open");
            $this.attr("title", "Select attachment(s)");
            $this.parent().find("input[type='file']").addClass("hidden");
        } else {
            $this.addClass("open");
            $this.attr("title", "Cancel selection");
            $this.parent().find("input[type='file']").removeClass("hidden");
        }
    });
    //End

	//Sticky
	try {
		var sticky = new Sticky('.left-column');
	} catch(err) {
	    console.log(err);
	}
	//End of Sticky

	//User form switch
	$('.user-form-switch div').click(function(e) {
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
		if ($(this).attr("id") == "new") {
			$('.new-job .signup-form').removeClass("hidden")
			$('.new-job .login-form').addClass("hidden")
		} else {
			$('.new-job .login-form').removeClass("hidden")
			$('.new-job .signup-form').addClass("hidden")
		}
	})
	//End of User form switch

	//Payment option selection
	$('.payment-options .option').click(function(e) {
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
		$('.payment-options input#payment-type').val($(this).attr("id"));
	})
	//Payment option selection

	//Bank details view/edit
	$('a.edit-bank-details').click(function(e) {
		e.preventDefault();
		$('.bank-details-view').addClass('hidden');
		$('.bank-details-edit').removeClass('hidden');
		$('.bank-details-edit input[name="account-number"]').focus();
	})
	//End of Bank details view/edit

    //Writer status change
    $('div.edit-icon#status').click(function() {
        var $this = $(this);
        $this.siblings(".job-info-value").addClass("hidden");
        $this.addClass("hidden");
        $this.siblings(".m-form").removeClass("hidden");
    });
    //End of writer status change
})