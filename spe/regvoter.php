<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};
$pollname = $_SESSION["pollname"];
$conn = new MySQLi("localhost","root","loremIPSUM2012",$pollname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$matno = $_POST['matno'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$level = $_POST['level'];

$fname = ucwords(htmlspecialchars(stripslashes(trim($fname))));
$lname = ucwords(htmlspecialchars(stripslashes(trim($lname))));

switch($level) {
	case "1":
	$level = "100L";
	break;
	case "2":
	$level = "200L";
	break;
	case "3":
	$level = "300L";
	break;
	case "4":
	$level = "400L";
	break;
	case "5":
	$level = "500L";
	break;
};

$sqlb = "SELECT MATNO FROM voters";
$sqlp = $conn->query($sqlb);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['MATNO'];
		if ($dat !== "") {
		array_unshift($count, $dat);
		};
    }
$counta = count($count) + 1;
};
$sqla = ("UPDATE voters SET MATNO='$matno', LEVEL='$level', FIRSTNAME='$fname', LASTNAME='$lname' WHERE ID='$counta'");
$conn->query($sqla) or die("");

?>
