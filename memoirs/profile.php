<?php
session_start();
if (!isset($_SESSION['logged'])){
	header("Location: index.php");
};
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>Memoirs || Upload profile pictures</title>
  <link href="http://fonts.googleapis.com/css?family=Raleway:700,400,400" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/profile-grid.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body class="body page-profile clearfix">
<form id="profileform" enctype="multipart/form-data" method="post" action="php/uploadprofile.php">
<input id="profileone" type="file" name="profileone" hidden>
<input id="profiletwo" type="file" name="profiletwo" hidden>
<input id="profilethree" type="file" name="profilethree" hidden>
</form>
  <div class="spacer"></div>
  <button id="upload" class="_button _button-1" type="button">Upload Images</button>
  <div id="box3" class="uploadbox uploadbox-1">
    <button id="select3" class="_button _button-2">Select Image</button>
    <div id="image-preview3" class="image-preview image-preview-1"></div>
  </div>
  <div id="box2" class="uploadbox uploadbox-2">
    <button id="select2" class="_button _button-3">Select Image</button>
    <div id="image-preview2" class="image-preview image-preview-2"></div>
  </div>
  <div id="box1" class="uploadbox uploadbox-3">
    <button id="select1" class="_button _button-4">Select Image</button>
    <div id="image-preview1" class="image-preview image-preview-3"></div>
  </div>
  <p class="subsubheadertext">(Select up to 3 images)</p>
  <p class="subheadertext">Select profile pictures</p>
  <p class="headertext">Memoirs of a Five year Journey</p>

  <script src="js/jquery-min.js"></script>
  <script src="js/jquery.animate-shadow-min.js"></script>
  <script src="js/jquery.uploadPreview.js"></script>
  <script  src="js/jquery.form.min.js"></script>
  <script src="js/profile.js"></script>
</body>
</html>
