<?php
session_start();
$conn = new MySQLi("localhost","root","loremIPSUM2012","speadmins");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$matno = $_POST['matno'];
$seckey = $_POST['seckey'];
$user = $_POST['user'];
$_SESSION['user'] = $user;
if (!isset($_SESSION['user'])){
	header("Location: index.html");
};

$seckey = htmlspecialchars(stripslashes(trim($seckey)));
$matno = htmlspecialchars(stripslashes(trim($matno)));

$sqla = "SELECT ID FROM polllist";
$sqlp = $conn->query($sqla);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['ID'];
		if ($dat !== "") {
		array_unshift($count, $dat);
		};
    }
$counta = count($count);
$sqla = "SELECT POLLNAME FROM polllist WHERE ID='$counta'";
$sqlp = $conn->query($sqla) or die("Nig dead");
$row = $sqlp->fetch_assoc();
$latest = $row['POLLNAME'];
$conn->close();

$conn = new MySQLi("localhost","root","loremIPSUM2012","$latest");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT MATNO FROM voters";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['MATNO'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }

	if (in_array($matno, $count)){
		$sql = "SELECT HASH FROM voters WHERE MATNO='$matno'";
		$seckeyhash = $conn->query($sql);
		$row = $seckeyhash->fetch_assoc();

		$sqla = "SELECT * FROM voters WHERE MATNO='$matno'";
		$names = $conn->query($sqla);
		$rown = $names->fetch_assoc();
		$fname = $rown['FIRSTNAME'];
		$lname = $rown['LASTNAME'];
		$level = $rown['LEVEL'];
		$matno = $rown['MATNO'];
		$status = $rown['STATUS'];

		if ($status == "0"){
			if (password_verify($seckey, $row["HASH"])) {
				setcookie("fname",trim($fname));
				setcookie("lname",$lname);
				setcookie("pollname",$latest);
				setcookie("level",$level);
				setcookie("matno",$matno);
				echo('0');
			}
			else {
				echo('1');
			}
		};

		if ($status == "1"){
			echo('2');
		};
	} else {
				echo ("3");
			};
};

};
