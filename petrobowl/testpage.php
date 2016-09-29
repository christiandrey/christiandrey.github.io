<?php
session_start();
if (!isset($_SESSION['user'])){
	header("Location: index.php");
};
if (isset($_SESSION['begintest'])){
	header("Location: index.php");
};
$_SESSION['begintest'] = '1';
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPEUI PetroBowl || TestPage</title>
  <link href="http://fonts.googleapis.com/css?family=Lato:400" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/testpage-grid.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="body page-testpage clearfix">
  <div id="overlay" class="overlay">
    <div id="redirect" class="redirect">
      <p>You have successfully completed the test.</p>
      <p>You will now be logged out automatically.</p>
</div>
    <div id="spelogo2" class="spelogo2"></div>
  </div>
  <div id="spelogo" class="spelogo spelogo-1"></div>
  <p id="question" class="question">Claritatem insitam est usus legentis in iis qui facit eorum claritatem Investigationes demonstraverunt lectores legere. Hendrerit in vulputate velit esse molestie consequat vel illum; dolore eu feugiat nulla.</p>
  <form id="resultform">
  <input id="answer" class="_input _input-1" name="answer" placeholder="Type your answer here" type="text">
  <button id="submitanswer" class="_button _button-1" type="submit">Submit Answer</button>
  </form>
  <div id="spacer" style="background-color:rgba(156,79,80,0.00); height:25px; position:absolute; top:553px; width:100%"></div>
  <p id="candidate" class="candidate">	Candidate Name</p>
  <p id="curquestion" class="curquestion">01/15</p>
  <div id="timerwrap" class="timerwrap">
    <p id="timer" class="timer">00:12</p>
    <div id="timeredge2" class="timeredge2"></div>
    <div id="timeredge" class="timeredge"></div>
    <div id="timercolor" class="timercolor"></div>
  </div>
  <div id="header" class="header header-2"></div>

  <script src="js/jquery-min.js"></script>
  <script src="js/velocity.min.js"></script>
  <script src="js/testpage.js"></script>
</body>
</html>
