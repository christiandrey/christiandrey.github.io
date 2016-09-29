<?php
session_start();
$conn = new MySQLi("mysql7.000webhost.com","a1343179_blaise","loremIPSUM2012","a1343179_petrobo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$user = $_POST['user'];
//$user = 'contestant';
$_SESSION['user'] = $user;
if (!isset($_SESSION['user'])){
	header("Location: ../index.php");
};


$sql = "SELECT QUESTION FROM petrobowlqueries";
$sqlp = $conn->query($sql);
$count = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['QUESTION'];
		if ($dat !== "") {
			array_push($count,$dat);
		};
    }
}
echo count($count);
?>
