$(document).ready(function(e) {
    $('#loginform').submit(function(e) {
        e.preventDefault();
		$userid = $('#userid').val().toUpperCase();
		$seckey = $('#seckey').val();
		$.post('php/vercont.php',{userid:$userid,seckey:$seckey,user:"contestant"},function(data){if(data == '0'){window.location="instruction.php";};if(data =='1'){ alert('Invalid Login Parameters.')};if(data =='2'){ alert('This user has already completed the test successfully.')};if(data =='3'){ alert('User ID not found.')};});
    });
});
