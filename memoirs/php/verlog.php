<?php
session_start();
$conn = new MySQLi("andrebla.5gbfree.com","andrebla_blaise","loremIPSUM2012","andrebla_yearbook");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$matno = $_POST['matno'];
$surname = $_POST['surname'];
$logged = $_POST['logged'];

$_SESSION['logged'] = '$logged';

if (!isset($_SESSION['logged'])){
	header("Location: ../index.php");
};
$matno = trim(stripslashes(htmlspecialchars($matno)));
$surname = strtoupper(trim(stripslashes(htmlspecialchars($surname))));

$sql = "SELECT * FROM yrbookdetails WHERE MATRIC='$matno'";
$verconn = $conn->query($sql);
$row = $verconn->fetch_assoc();

if ($surname == $row["SURNAME"]) {
	if ($row["DONE"] == '1') {
		echo('2');
	}
	else {
	setcookie("matno",$matno, time() + (86400 * 1), "/");
	if(!is_dir("../images/$matno")){
	mkdir("../images/$matno") or die("");
	}
	$_SESSION['matno'] = $matno;
	echo('0');
	}
}
else {
	echo('1');
}

?>
