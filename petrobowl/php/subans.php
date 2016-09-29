<?php
session_start();
$conn = new MySQLi("mysql7.000webhost.com","a1343179_blaise","loremIPSUM2012","a1343179_petrobo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$user = $_POST['user'];
$curque = $_POST['subcurque'];
$curans = $_POST['subans'];
$anstime = $_POST['anstime'];
//$user = 'contestant';
$_SESSION['user'] = $user;
if (!isset($_SESSION['user'])){
	header("Location: ../index.php");
};

$curans = htmlspecialchars(stripslashes(trim($curans)));
$userid = $_COOKIE['userid'];

$setvalue = $curans.' ['.$anstime.' seconds]';
$sqlc = ("UPDATE petrobowlqueries SET $userid='$setvalue' WHERE ID='$curque'");
if ($conn->query($sqlc) === TRUE) {
	echo('0');
}
else {
	echo('1');
}
?>
