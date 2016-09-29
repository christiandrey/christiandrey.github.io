<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};

$conn = new MySQLi("localhost","root","loremIPSUM2012","speadmins");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT POLLNAME FROM polllist";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['POLLNAME'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
krsort($count);
$n_count = array();
foreach($count as $a){
	array_push($n_count,$a);
};
foreach($n_count as $a){
	echo $a.",";
};
};
