<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "administrator")){
	header("Location: index.html");
};

$latest = $_COOKIE['pollname'];
$conn = new MySQLi("localhost","root","loremIPSUM2012","$latest");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = $_POST['senddata'];
$matno = $_COOKIE['matno'];
$data = htmlspecialchars(stripslashes(trim($data)));
$val = str_split($data,2);
$count = count($val);
try {
for ($i=0; $i<$count; $i++){
	switch($i){
		case "0":
			$posi = "PRESIDENT";
			break;
		case "1":
			$posi = "VICE_PRESIDENT";
			break;
		case "2":
			$posi = "GEN_SEC";
			break;
		case "3":
			$posi = "AGS";
			break;
		case "4":
			$posi = "APRO";
			break;
		case "5":
			$posi = "TREASURER";
			break;
	};
	$num = substr($val[$i],1);
	$sql = "SELECT $posi FROM pollvote WHERE ID='CONT$num'";
	$sqlp = $conn->query($sql);
	$row = $sqlp->fetch_assoc();
	$new = $row[$posi]+1;
	$sql = ("UPDATE pollvote SET $posi='$new' WHERE ID='CONT$num'");
	$conn->query($sql);
};
	$sql = ("UPDATE voters SET STATUS='1' WHERE MATNO='$matno'");
	$conn->query($sql);
	echo "0";
}
catch(Exception $e) {
	echo "1";
};
