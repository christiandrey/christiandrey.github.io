<!doctype html>
<html>
<head>
<?php
session_start();
if (isset($_SESSION['logged']) && ($_SESSION['logged']='user')){
	session_unset();
};
?>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPE UI Class of '15 Yearbook</title>
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/index-grid.css">
  <link rel="stylesheet" href="css/index.css">
</head>
<body class="body page-index clearfix">
  <div id="footerdiv" class="element footerdiv clearfix">
    <div id="ctn2" class="container ctn2">
      <p id="hdtext2" class="text hdtext2">Memoirs of a 5 year journey</p>
      <p id="errtext" class="text errtext">Invalid login details. Retry</p>
      <input id="matno" class="matno" name="matno" placeholder="Matric number" type="text" required>
      <input id="surname" class="surname" name="surname" placeholder="Surname" type="text" required>
      <button id="loginbtn" class="login">Login</button>
    </div>
    <div id="ctn1" class="container ctn1 container-2">
      <button id="beginbtn" class="begin">Begin</button>
      <div id="hdtext" class="text hdtext">
        <p>Memoirs</p>
        <p>of a</p>
        <p>5 year journey</p>
</div>
    </div>
  </div>
  <div id="bgimg" class="element bgimg"></div>

  <script src="js/jquery-min.js"></script>
  <script src="js/index.js"></script>
</body>
</html>
