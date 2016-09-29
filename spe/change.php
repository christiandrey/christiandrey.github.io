<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};
$conn = new MySQLi("localhost","root","loremIPSUM2012","speadmins");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$uname = $_POST['uname'];
$o_name = $_COOKIE['a_uname'];
$uname = htmlspecialchars(stripslashes(trim($uname)));
$sql = ("UPDATE speadminslogins SET USERNAME='$uname' WHERE USERNAME='$o_name'");
if ($conn->query($sql)){
	setcookie("a_uname",$uname);
	echo ("0");
}
else {
	echo ("1");
};
