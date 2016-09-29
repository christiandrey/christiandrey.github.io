<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};

$pollname = $_SESSION["pollname"];
echo $pollname;
$conn = new MySQLi("localhost","root","loremIPSUM2012",$pollname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$cont = $_POST['cont'];
$posi = $_POST['posi'];

$cont = ucwords(htmlspecialchars(stripslashes(trim($cont))));
$_SESSION["posi"] =  $posi;

switch($posi) {
	case "1":
	$position = "PRESIDENT";
	break;
	case "2":
	$position = "VICE_PRESIDENT";
	break;
	case "3":
	$position = "GEN_SEC";
	break;
	case "4":
	$position = "AGS";
	break;
	case "5":
	$position = "APRO";
	break;
	case "6":
	$position = "TREASURER";
	break;
};

$sqlb = "SELECT $position FROM contname";
$sqlp = $conn->query($sqlb);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row[$position];
		if ($dat !== "") {
		array_unshift($count, $dat);
		};
    }
$counta = count($count) + 1;
};
$sqla = ("UPDATE contname SET $position='$cont' WHERE ID='CONT$counta'");
echo $sqla;
$conn->query($sqla) or die("");
