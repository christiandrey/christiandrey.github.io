<?php
session_start();
$conn = new MySQLi("mysql7.000webhost.com","a1343179_blaise","loremIPSUM2012","a1343179_petrobo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$contid = $_POST['contid'];
$user = $_POST['admin'];
//$contid = 'contone';
//$user = 'admin';
$_SESSION['admin'] = $user;
if (!isset($_SESSION['admin'])){
	header("Location: ../adminlogin.php");
};

$contid = strtoupper(htmlspecialchars(stripslashes(trim($contid))));


$sql = "SELECT CONTESTANT FROM petrobowlcont WHERE USERID='$contid'";
$contname = $conn->query($sql);
$rowq = $contname->fetch_assoc();
setcookie("contname",$rowq['CONTESTANT'], time() + (86400 * 1), "/");


$sql = "SELECT ID, QUESTION, $contid FROM petrobowlqueries";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["ID"]. ". " . $row["QUESTION"]. "<br/>";
		echo "<b>Answer: </b>".$row[$contid]."<br/><br/>";
    }
} else {
    echo "Invalid Query.";
}
