<!doctype html>
<html>
<head>
<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};
?>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPE UI Decides | Dashboard</title>
  <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700,400" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/adminpage-grid.css">
  <link rel="stylesheet" href="css/adminpage.css">
    <script src="js/jquery-min.js"></script>
  	<script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery.form.min.js"></script>
  <script>
  $(document).ready(function(e) {
	  $('#logout_btn').click(function(e) {
        window.location="adminlogin.php";

    });


    $("#sec_eye").mousedown(function(e) {
		$("#sec_input").clone().attr('type','text').insertAfter("#sec_input").prev().remove();
    });

	$("#sec_eye").mouseup(function(e) {
		$("#sec_input").clone().attr('type','password').insertAfter("#sec_input").prev().remove();
    });

	$year = new Date();
	$('#date').html($year.getFullYear());

});
  </script>
</head>
<body class="body page-adminpage clearfix">
<div id="loading_sign" style="width:0%; height:100%; position:absolute; left:0px; background-color:#494444; opacity: 0.7; z-index:+10000"><p style="position:fixed; top: 42%; left:40%; margin:auto; color:#FFFFFF; font-size:64px" id="loadingtext">Working</p></div>
  <div id="loading_polls" class="element loading_polls">
    <p class="text loading_text">Loading results of polls...</p>
    <div class="element loading_logo"></div>
    <div id="loading" class="element loading"></div>
  </div>
  <form id="picup" action="upload.php" method="post" enctype="multipart/form-data">
  <input id="picture2" class="_input _input-1" name="fileToUpload" type="file">
  </form>

  <form id="csvup" action="parsecsv.php" method="post" enctype="multipart/form-data">
  <input id="csvin" class="csvin" name="csvin" type="file">
  </form>

  <div id="close_btn" class="element close_btn"></div>
  <div id="done" class="element done">
    <p id="successtext" class="text successtext">Success</p>
  </div>
  <div id="nextbtn2" class="element nextbtn2 js-nextbtn2"></div>
  <div id="ch_pass" class="container chg_pass">
    <div id="check3" class="element check element-7"></div>
    <div id="check2" class="element check element-8"></div>
    <div id="check1" class="element check element-9"></div>
    <input id="old_pass" class="_input _input-2 js-old_pass" name="old_pass" placeholder="Old password" type="password">
    <input id="new_pass" class="_input _input-3 js-new_pass" name="new_pass" placeholder="New password" type="password">
    <input id="ver_pass" class="_input _input-4 js-ver_pass" name="ver_pass" placeholder="Verify password" type="password">
    <p class="text user_namehead">Change admin password</p>
  </div>
  <div id="ch_user" class="container chg_user">
    <div id="righthold5" class="element righthold"></div>
    <input id="user_name" class="_input" name="user_name" placeholder="New username goes here" type="text">
    <p class="text user_namehead">Change admin username</p>
  </div>
  <div id="load_poll" class="container load_poll">
    <div class="element downhold js-downhold3"></div>
    <div id="righthold4" class="element righthold"></div>
    <div class="element pollholder js-pollholder">
      <div class="container pollcont js-pollcont">
        <p id="poll6" class="text poll text-5">Empty</p>
        <p id="poll5" class="text poll text-6">Empty</p>
        <p id="poll4" class="text poll text-7">Empty</p>
        <p id="poll3" class="text poll text-8">Empty</p>
        <p id="poll2" class="text poll text-9">Empty</p>
        <p id="poll1" class="text poll text-10">Empty</p>
      </div>
    </div>
    <p class="text poll text-11">Load Polls result</p>
  </div>
  <div id="prevbtn" class="element prevbtn js-prevbtn"></div>
  <div id="nextbtn0" class="element nextbtn0 js-nextbtn0"></div>
  <div id="reg_vot" class="container reg_vot">
	<div id="csv" class="element csv"></div>
    <div class="element matholder js-matholder">
      <div class="container matcont js-matcont">
        <p id="level5" class="text level text-12" data-travelindex = "5">500L</p>
        <p id="level4" class="text level text-13" data-travelindex = "4">400L</p>
        <p id="level3" class="text level text-14" data-travelindex = "3">300L</p>
        <p id="level2" class="text level text-15" data-travelindex = "2">200L</p>
        <p id="level1" class="text level text-16" data-travelindex = "1">100L</p>
      </div>
    </div>
    <input id="voter_name" class="_input _input-6" name="voter_name" placeholder="Voter matric number" type="text">
    <input id="first_name" class="_input _input-7" name="first_name" placeholder="First Name" type="text">
    <input id="last_name" class="_input _input-8" name="last_name" placeholder="Last Name" type="text">
    <p class="text lastname">Last Name</p>
    <p class="text firstname">First Name</p>
    <div class="element downhold js-downhold2"></div>
    <div id="righthold3" class="element righthold"></div>
    <p class="text regvothead">Register Voters</p>
  </div>
  <div id="nextbtn1" class="element nextbtn1 js-nextbtn1"></div>
  <div id="reg_cont" class="container reg_cont">
    <div id="p_bar" class="element p_bar"></div>
    <div class="element posholder js-posholder">
      <div class="container poscont js-poscont">
        <p id="position6" class="text position text-20" data-travelindex = "6">Treasurer</p>
        <p id="position5" class="text position text-21" data-travelindex = "5">Ass. P.R.O.</p>
        <p id="position4" class="text position text-22" data-travelindex = "4">Ass. Gen. Sec.</p>
        <p id="position3" class="text position text-23" data-travelindex = "3">Gen. Secretary</p>
        <p id="position2" class="text position text-24" data-travelindex = "2">Vice President</p>
        <p id="position1" class="text position text-25" data-travelindex = "1">President</p>
      </div>
    </div>
    <p id="pic_link" class="text pic_link js-pic_link">Select Picture</p>
    <div id="upload" class="element upload"></div>
    <p class="text picture">Upload Picture</p>
    <div class="element downhold js-downhold"></div>
    <div id="righthold2" class="element righthold"></div>
    <input id="contname" class="_input" name="cont_name" placeholder="Contestant Name" type="text">
    <p class="text pollnamehead">Register Contestants</p>
  </div>
  <div id="createpoll" class="container createpoll">
    <div id="righthold1" class="element righthold"></div>
    <input id="pollname" class="_input" name="poll_name" placeholder="Name of Poll" type="text">
    <div class="element dateholder">
      <p id="date" class="text date">2015</p>
    </div>
    <p class="text pollnamehead">Create New Poll</p>
  </div>
  <div id="overlay" class="element overlay"></div>
  <div class="container menuhold">
    <div id="ch_pass" class="element ch_pass"></div>
    <div id="ch_user" class="element ch_user"></div>
    <div id="loadpolls" class="element loadpolls"></div>
    <div id="newpolls" class="element newpolls"></div>
  </div>
  <div class="element decide"></div>
  <div class="element logo"></div>
  <div class="element head"></div>
  <div class="element head_bg">
    <div class="container admdetails">
      <p id="adminname" class="text adminname">Admistrator Username</p>
      <div id="logout_btn" class="element logout_btn js-submit"></div>
    </div>
  </div>

  <script src="js/adminpage.js"></script>
  <input type="text" value="1" id="hiddenpost"  style="display:none">
  <input type="text" value="1" id="hiddenpast"  style="display:none">
  <input type="text" value="" id="hiddenpest"  style="display:none">
  <input type="text" value="0" id="hiddenpist"  style="display:none">
</body>
</html>
