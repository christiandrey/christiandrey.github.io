<?php
session_start();
if (!isset($_SESSION['logged'])){
	header("Location: ../index.php");
};


function uploadprofile($current,$matno,$count){
$target_dir = "../images/".$matno."/";
$target_file = $target_dir . basename($_FILES["$current"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

$target_file = $target_dir .$count.".".$imageFileType;

if (file_exists($target_file)) {
    $count = $count + 1;
	$target_file = $target_dir .$count.".".$imageFileType;
};

// Check file size
if ($_FILES["$current"]["size"] > 2819200) {
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
    if (move_uploaded_file($_FILES["$current"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["$current"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
}

uploadprofile("profileone",$_COOKIE['matno'],1);
uploadprofile("profiletwo",$_COOKIE['matno'],2);
uploadprofile("profilethree",$_COOKIE['matno'],3);
?>
