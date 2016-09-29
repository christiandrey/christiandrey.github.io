<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};
$conn = new MySQLi("localhost","root","loremIPSUM2012","speadmins");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$opass = $_POST['opass'];
$npass = $_POST['npass'];
$uname = $_COOKIE['a_uname'];
$opass = htmlspecialchars(stripslashes(trim($opass)));
$npass = htmlspecialchars(stripslashes(trim($npass)));

$sql = "SELECT KEYHASH FROM speadminslogins WHERE USERNAME='$uname'";
$seckeyhash = $conn->query($sql);
$row = $seckeyhash->fetch_assoc();

if (password_verify($opass, $row["KEYHASH"])) {
	$hash = password_hash($npass, PASSWORD_BCRYPT);
	$sql = ("UPDATE speadminslogins SET KEYHASH='$hash' WHERE USERNAME='$uname'");
	if ($conn->query($sql)){
	echo ("0");
	}
	else {
		echo ("1");
	};
}
else {
	echo('1');
}
