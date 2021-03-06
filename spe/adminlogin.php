<!doctype html>
<html>
<head>
<?php
session_start();
if (isset($_SESSION['user']) && ($_SESSION['user']='administrator')){
	session_unset();
};
?>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPE UI Decides | Admin Login</title>
  <link href="http://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/adminlogin-grid.css">
  <link rel="stylesheet" href="css/adminlogin.css">
    <script src="js/jquery-min.js"></script>
  	<script src="js/jquery-ui.min.js"></script>
  <script>
  $(document).ready(function(e) {
    $("#sec_eye").mousedown(function(e) {
		$("#sec_input").clone().attr('type','text').insertAfter("#sec_input").prev().remove();
    });

	$("#sec_eye").mouseup(function(e) {
		$("#sec_input").clone().attr('type','password').insertAfter("#sec_input").prev().remove();
    });

	$('.spelogo').click(function(e) {
        window.location="index.html";
    });

	$('.login').click(function(e) {
		$uname = $('#adm_input').val();
		$seckey = $('#sec_input').val();
		$user = "administrator";
		$.post('veradmin.php',{uname:$uname,seckey:$seckey,user:$user},function(data){if(data == '0'){window.location="adminpage.php";};if(data =='1'){ alert('Invalid Login Parameters')};});
    });

	$('.loginwrapper').keypress(function(e) {
        if (e.which == 13) {
			$('.login').click();
		};
    });
});
  </script>
</head>
<body class="body page-adminlogin clearfix">
  <div class="element loginwrapper">
    <div id="sec_eye" class="element sec_eye"></div>
    <div class="element login"></div>
    <div class="element adm_inp">
      <input id="adm_input" class="adm_input" name="mat_input" placeholder="Admin Username" type="text">
    </div>
    <div class="element mat_bg"></div>
    <div class="element sec_inp">
      <input id="sec_input" class="sec_input" name="sec_input" placeholder="Security Key" type="password">
    </div>
    <div class="element sec_bg"></div>
    <div class="element bgwhite"></div>
    <div class="element decide"></div>
    <div class="element spelogo"></div>
    <div class="element loginbg"></div>
  </div>
  <div class="element loginshadow"></div>
</body>
</html>
