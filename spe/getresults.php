<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};

$latest = $_COOKIE['latest'];
$conn = new MySQLi("localhost","root","loremIPSUM2012","$latest");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$posi = $_POST['posi'];
$cat = $_POST['cat'];

//$posi = "1";
//$cat = "3";

if ($cat == "1") {
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
};

if ($cat == "2"){
if ($posi == "1") {
$sql = "SELECT PRESIDENT FROM pollvote";
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
$sql = "SELECT VICE_PRESIDENT FROM pollvote";
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
$sql = "SELECT GEN_SEC FROM pollvote";
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
$sql = "SELECT AGS FROM pollvote";
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
$sql = "SELECT APRO FROM pollvote";
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
$sql = "SELECT TREASURER FROM pollvote";
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
};

if($cat == "3"){
	switch($posi){
		case "1":
			$posit = "PRESIDENT";
			break;
		case "2":
			$posit = "VICE_PRESIDENT";
			break;
		case "3":
			$posit = "GEN_SEC";
			break;
		case "4":
			$posit = "AGS";
			break;
		case "5":
			$posit = "APRO";
			break;
		case "6":
			$posit = "TREASURER";
			break;
	};
$sql = "SELECT $posit FROM pollvote";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row[$posit];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
arsort($count);
$n_count = array();
foreach($count as $a){
	array_push($n_count,$a);
};
$sum = 0;
foreach($count as $a){
	$sum = $sum + $a;
};
$lead = $n_count[0];
$sql = "SELECT ID FROM pollvote WHERE $posit = '$lead'";
$sqlp = $conn->query($sql);
$row = $sqlp->fetch_assoc();
$win = $row['ID'];
$sql = "SELECT $posit FROM contname WHERE ID = '$win'";
$sqlp = $conn->query($sql);
$row = $sqlp->fetch_assoc();
$win = $row[$posit];
$data = array("win"=>$win, "lead"=>$lead, "sum"=>$sum);
echo json_encode($data);
};
};
