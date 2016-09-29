<?php
session_start();
setcookie("logintime", "", time() - 3600);
setcookie("contestant", "", time() - 3600);
setcookie("userid", "", time() - 3600);
session_unset();
session_destroy();
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPEUI PetroBowl || Log In</title>
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/index-grid.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/jquery-min.js"></script>
  <script src="js/index.js"></script>
</head>
<body class="body page-index clearfix">
<form id="loginform" method="post" action="php/vercont.php">
  <input id="userid" class="_input _input-2" name="userid" placeholder="UserID" type="text">
  <input id="seckey" class="_input _input-3" name="seckey" placeholder="Security key" type="password">
  <button id="login" class="_button _button-3" type="submit">Log In</button>
  </form>
  <div id="sublogo" class="sublogo"></div>
  <div id="spelogo" class="spelogo spelogo-2"></div>
</body>
</html>
