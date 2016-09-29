<?php
session_start();
$conn = new MySQLi("localhost","root","loremIPSUM2012","speadmins");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$uname = $_POST['uname'];
$seckey = $_POST['seckey'];
$user = $_POST['user'];
$_SESSION['user'] = $user;
if (!isset($_SESSION['user'])){
	header("Location: index.html");
};

$seckey = trim($seckey);
$seckey = stripslashes($seckey);
$seckey = htmlspecialchars($seckey);
$sql = "SELECT KEYHASH FROM speadminslogins WHERE USERNAME='$uname'";
$seckeyhash = $conn->query($sql);
$row = $seckeyhash->fetch_assoc();

if (password_verify($seckey, $row["KEYHASH"])) {
	setcookie("a_uname",$uname);

	echo('0');
}
else {
	echo('1');
}
?>
