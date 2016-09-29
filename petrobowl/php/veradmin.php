<?php
session_start();
$conn = new MySQLi("mysql7.000webhost.com","a1343179_blaise","loremIPSUM2012","a1343179_petrobo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$userid = $_POST['userid'];
$seckey = $_POST['seckey'];
$user = $_POST['admin'];
//$userid = 'bowladmin';
//$seckey = 'ii86mQhE';
//$user = 'voter';
$_SESSION['admin'] = $user;
if (!isset($_SESSION['admin'])){
	header("Location: ../adminlogin.php");
};

$seckey = htmlspecialchars(stripslashes(trim($seckey)));
$userid = htmlspecialchars(stripslashes(trim($userid)));


$sql = "SELECT USERNAME FROM adminusernames";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['USERNAME'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }

	if (in_array($userid, $count)){
		$sql = "SELECT SECKEY FROM adminusernames WHERE USERNAME='$userid'";
		$seckeyhash = $conn->query($sql);
		$row = $seckeyhash->fetch_assoc();

		$sqla = "SELECT * FROM adminusernames WHERE USERNAME='$userid'";
		$names = $conn->query($sqla);
		$rown = $names->fetch_assoc();
		$userid = $rown['USERNAME'];
		$lastlogin = $rown['LASTLOGIN'];

			if (password_verify($seckey, $row["SECKEY"])) {
				$now = date("Y-m-d")." " .date("h-i-sa");
				setcookie("lastlogin",$lastlogin, time() + (86400 * 1), "/");
				$sqlc = ("UPDATE adminusernames SET LASTLOGIN='$now' WHERE USERNAME='$userid'");
				$conn->query($sqlc) ;
				setcookie("userid",$userid, time() + (86400 * 1), "/");
				echo('0');
			}
			else {
				echo('1');
			}
	} else {
				echo ("2");
			};
};
