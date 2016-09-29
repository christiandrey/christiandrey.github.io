<?php
session_start();
if (!isset($_SESSION['user'])){
	header("Location: index.php");
};
if (isset($_SESSION['begintest'])){
	header("Location: index.php");
};
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPEUI PetroBowl || Instructions</title>
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/instruction-grid.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="body page-instruction clearfix">
 <a href="testpage.php"> <button id="login" class="_button _button-2">Begin Test</button></a>
  <div id="instruction" class="instruction">
    <p>The test comprises 15 questions.&nbsp;</p>
    <p>In no event should you hit the back or refresh button after you have begun the test.&nbsp;</p>
    <p>You are allowed a maximum of 12 seconds to type in the answer to each question in the box

provided.&nbsp;</p>
    <p>A timer is displayed at the top of the screen.&nbsp;</p>
    <p>After 12 seconds, the inputted answer is automatically submitted.&nbsp;</p>
    <p>You

can also proceed to the next question before the 12 seconds elapses by clicking on the 'Submit Answer' button.
&nbsp;</p>
    <p>Good luck!</p>
</div>
  <div class="header header-1">
    <p id="headtext" class="headtext">Test Instructions</p>
    <div id="spelogo" class="spelogo"></div>
  </div>
</body>
</html>
