<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};

$pollname = $_SESSION["pollname"];
$posi = $_SESSION["posi"];
$cont = 1;
$err = "";

$target_dir = "images/$pollname/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

$target_file = $target_dir .$posi.$cont.".".$imageFileType;

if (file_exists($target_file)) {
    $cont = $cont + 1;
	$target_file = $target_dir .$posi.$cont.".".$imageFileType;
};

// Check file size
if ($_FILES["fileToUpload"]["size"] > 819200) {
    $err = $err."Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $err = $err."Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "$err";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
