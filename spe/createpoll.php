<?php
ini_set('max_execution_time',300);
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};

$conn = new MySQLi("localhost","root","loremIPSUM2012","speadmins");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$pollname = $_POST['pollname'];
$pollname = trim($pollname);
$pollname = stripslashes($pollname);
$pollname = htmlspecialchars($pollname);

$_SESSION["pollname"] = $pollname;

$sql = "INSERT INTO polllist (POLLNAME) VALUES ('$pollname')";
$sqlb = "SELECT POLLNAME FROM polllist";
$sqlp = $conn->query($sqlb);
$row = $sqlp->fetch_assoc();
$count = count($row);

if ($count == "0"){
	if ($conn->query($sql) === TRUE) {
		if (list($respc,$resp) = doProcess($pollname)){
			$data = array("respcode"=>"$respc", "resp"=>"$resp");
			echo json_encode($data);
		};
	}
	else {
	$data = array("respcode"=>"1", "resp"=>"$conn->connect_error");
	echo json_encode($data);
	};
}
elseif ($count !== "0"){
	if (in_array($pollname, $row)) {
	$data = array("respcode"=>"1", "resp"=>"Poll name already exists");
	echo json_encode($data);
	} else {
		if ($conn->query($sql) === TRUE) {
		if (list($respc,$resp) = doProcess($pollname)){
			$data = array("respcode"=>"$respc", "resp"=>"$resp");
			echo json_encode($data);
		};
	}
	else {
	$data = array("respcode"=>"1", "resp"=>"$conn->connect_error");
	echo json_encode($data);
	};
	};
};

function doProcess($pollname) {
	$connc = new MySQLi("localhost","root","loremIPSUM2012");
	if ($connc->connect_error) {
		die("Connection failed: " . $connc->connect_error);
}
try {
	$stat = "Successful";
	$code = "0";

	$sqlc = "CREATE DATABASE $pollname";
	$connc->query($sqlc);
	$connc = new MySQLi("localhost","root","loremIPSUM2012", "$pollname");
	if ($connc->connect_error) {
		die("Connection failed: " . $connc->connect_error);
}
	$sqlc = "CREATE TABLE contname (ID VARCHAR(50) NOT NULL, PRESIDENT VARCHAR(50) NOT NULL, VICE_PRESIDENT VARCHAR(50) NOT NULL, GEN_SEC VARCHAR(50) NOT NULL, AGS VARCHAR(50) NOT NULL, APRO VARCHAR(50) NOT NULL, TREASURER VARCHAR(50) NOT NULL)";
	$connc->query($sqlc);
	$sqlc = "INSERT INTO contname (ID) VALUES ('CONT1'),('CONT2'),('CONT3'),('CONT4'),('CONT5'),('CONT6')";
	$connc->query($sqlc);
	mkdir("images/$pollname") or die("");
	$sqlc = "CREATE TABLE pollvote (ID VARCHAR(50) NOT NULL, PRESIDENT INT(8) NOT NULL, VICE_PRESIDENT INT(8) NOT NULL, GEN_SEC INT(8) NOT NULL, AGS INT(8) NOT NULL, APRO INT(8) NOT NULL, TREASURER INT(8) NOT NULL)";
	$connc->query($sqlc);
	$sqlc = "INSERT INTO pollvote (ID) VALUES ('CONT1'),('CONT2'),('CONT3'),('CONT4'),('CONT5'),('CONT6')";
	$connc->query($sqlc);
	$sqlc = "CREATE TABLE voters (ID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, LEVEL VARCHAR(4) NOT NULL, FIRSTNAME VARCHAR(50) NOT NULL, LASTNAME VARCHAR(50) NOT NULL, MATNO VARCHAR(6) NOT NULL, PASSWORD VARCHAR(6) NOT NULL, HASH VARCHAR(60) NOT NULL, STATUS INT(1) NOT NULL)";
	$connc->query($sqlc);
	for ($x = 0; $x <= 249; $x++) {
		$seckey = randString(6);
		$hash = password_hash($seckey, PASSWORD_BCRYPT);
		$sqlc = "INSERT INTO voters (PASSWORD, HASH) VALUES ('$seckey','$hash')";
		$connc->query($sqlc);
	};
}
catch(Exception $e) {
	$stat = "$e->getMessage()";
	$code = "1";
}

return array($code, $stat);

};

function randString($length, $charset='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'){
	$str = '';
	$count = strlen($charset);
	while ($length--){
		$str .= $charset[mt_rand(0,$count-1)];
	}
	return $str;
};
