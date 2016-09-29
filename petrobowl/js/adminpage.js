$(document).ready(function(e) {
    $('.contname').css('display','none');
    $('.contresult').css('display','none');

	function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
	}

	$('.lastlogin').html('Last Login: ' + getCookie('lastlogin').replace('+',' '));

	$('#continput').submit(function(e) {
        e.preventDefault();
		$contid = $('#contusername').val();
		$.post('php/loadanswer.php',{contid:$contid,admin:'administrator'},function(data){
			$('.contname').html('Name : '+(getCookie('contname').replace('+',' ')));
			$('.contresult').html(data);
			$('.contname').css('display','block');
			$('.contresult').css('display','block');
		});
    });
});
