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
$posi = $_POST['posi'];

if ($posi == "1") {
$sql = "SELECT PRESIDENT FROM contname";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['PRESIDENT'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
foreach($count as $a){
	echo $a.",";
};
};
};

if ($posi == "2") {
$sql = "SELECT VICE_PRESIDENT FROM contname";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['VICE_PRESIDENT'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
foreach($count as $a){
	echo $a.",";
};
};
};

if ($posi == "3") {
$sql = "SELECT GEN_SEC FROM contname";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['GEN_SEC'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
foreach($count as $a){
	echo $a.",";
};
};
};

if ($posi == "4") {
$sql = "SELECT AGS FROM contname";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['AGS'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
foreach($count as $a){
	echo $a.",";
};
};
};

if ($posi == "5") {
$sql = "SELECT APRO FROM contname";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['APRO'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
foreach($count as $a){
	echo $a.",";
};
};
};

if ($posi == "6") {
$sql = "SELECT TREASURER FROM contname";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['TREASURER'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
foreach($count as $a){
	echo $a.",";
};
};
};
