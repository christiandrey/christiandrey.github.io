(function() {
$(document).ready(function(e) {
	var options = {
		  beforeSend: function() {
			  $('._button-1').css('box-shadow','inset 0 0 0 0 rgb(201,99,125)');
		  },
		  uploadProgress: function(event, position, total, percentComplete) {
			  $('._button-1').html('Uploading...')
			  $('._button-1').css('box-shadow','inset '+(percentComplete/100)*180+ 'px 0 0 0 rgb(201,99,125)');
		  },
		  success: function() {
			  $('._button-1').html('Uploaded');
			  window.location = 'form.php';
		  },
		  complete: function() {
			  //
		  },
		  error: function(response) {
			  $('._button-1').css('box-shadow','inset 0 0 0 0 rgb(201,99,125)');
			  $('._button-1').html('Click to retry');
			  alert('Unable to upload image. ' + response)
		  }
	  };

	 $('#profileform').ajaxForm(options);
	 $('#upload').click(function(e) {
        $('#profileform').submit();
    });
	$.uploadPreview({
			input_field: '#profileone',
			preview_box: '#image-preview1',
			no_label: true
		});

		$.uploadPreview({
			input_field: '#profiletwo',
			preview_box: '#image-preview2',
			no_label: true
		});

		$.uploadPreview({
			input_field: '#profilethree',
			preview_box: '#image-preview3',
			no_label: true
		});
    $('#select1').click(function(e) {
        $('#profileone').click();
    });
	$('#profileone').change(function(e) {
		$test = $('#profileone').val();
        $('#select1').html('Change Image');
    });

	$('#select2').click(function(e) {
        $('#profiletwo').click();
    });
	$('#profiletwo').change(function(e) {
		$test = $('#profiletwo').val();
        $('#select2').html('Change Image');
    });

	$('#select3').click(function(e) {
        $('#profilethree').click();
    });
	$('#profilethree').change(function(e) {
		$test = $('#profilethree').val();
        $('#select3').html('Change Image');
    });
});
})();
