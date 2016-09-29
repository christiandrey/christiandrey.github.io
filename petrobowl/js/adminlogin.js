$(document).ready(function(e) {
    $('#loginform').submit(function(e) {
        e.preventDefault();
		$userid = $('#userid').val();
		$seckey = $('#seckey').val();
		$.post('php/veradmin.php',{userid:$userid,seckey:$seckey,admin:"admin"},function(data){if(data == '0'){window.location="adminpage.php";};if(data =='1'){ alert('Invalid Login Parameters.')};if(data =='2'){ alert('Admin username not found.')};});
    });
});
