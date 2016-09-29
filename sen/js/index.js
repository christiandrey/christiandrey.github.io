// JavaScript Document
$(document).ready(function(e) {
    $(".login").click(function(e) {
        velfadeOut('.loginwrap',300)
		setTimeout(function(){
			$('.proceedwrap').css('display','block');
			slideInUp('#senlogo2',0.2);
			slideInUp('#userid',0.4);
			slideInUp('#seckey',0.6);
			slideInUp('#proceed',0.8);
			slideInUp('#getnstarted2',1);
			},300);
    });

	$('#proceed').click(function(e) {
        $('#userdetails').submit();
    })

    $('#userdetails').submit(function(){
        return validateForm();
    })

    function validateForm(){
        $fieldOne = $('#userid').val();
        $fieldTwo = $('#seckey').val();
        $errorText = '';
        if ($fieldOne == '' || $fieldOne == null || $fieldTwo == '' || $fieldTwo == null){
            if ($fieldOne == '' || $fieldOne == null){
                $errorText += 'Please enter a valid User ID \n';
            }
            if ($fieldTwo == '' || $fieldTwo == null){
                $errorText += 'Please enter a valid Security Key \n';
            }
            alert($errorText);
            return false;
        }

    }
});
