<?php
session_start();
$conn = new MySQLi("mysql7.000webhost.com","a1343179_blaise","loremIPSUM2012","a1343179_petrobo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$userid = $_POST['userid'];
$seckey = $_POST['seckey'];
$user = $_POST['user'];
//$userid = 'CONTESTANTONE';
//$seckey = 'ii86mQhE';
//$user = 'voter';
$_SESSION['user'] = $user;
if (!isset($_SESSION['user'])){
	header("Location: ../index.php");
};

$seckey = htmlspecialchars(stripslashes(trim($seckey)));
$userid = htmlspecialchars(stripslashes(trim($userid)));

$sql = "SELECT USERID FROM petrobowlcont";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['USERID'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }

	if (in_array($userid, $count)){
		$sql = "SELECT SECKEY FROM petrobowlcont WHERE USERID='$userid'";
		$seckeyhash = $conn->query($sql);
		$row = $seckeyhash->fetch_assoc();

		$sqla = "SELECT * FROM petrobowlcont WHERE USERID='$userid'";
		$names = $conn->query($sqla);
		$rown = $names->fetch_assoc();
		$contestant = $rown['CONTESTANT'];
		$userid = $rown['USERID'];
		$status = $rown['STATUS'];

		if ($status == "0"){
			if (password_verify($seckey, $row["SECKEY"])) {
				$now = date("h:i:sa");
				setcookie("logintime",'$now', time() + (86400 * 1), "/");
				$sqlc = ("UPDATE petrobowlcont SET LOGINTIME='$now', STATUS='1' WHERE USERID='$userid'");
				$conn->query($sqlc) ;
				setcookie("contestant",$contestant, time() + (86400 * 1), "/");
				setcookie("userid",$userid, time() + (86400 * 1), "/");
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
