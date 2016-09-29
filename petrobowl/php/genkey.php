<?php
session_start();
$conn = new MySQLi("mysql7.000webhost.com","a1343179_blaise","loremIPSUM2012","a1343179_petrobo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

for ($x = 1; $x <= 15; $x++) {
		$seckey = randString(8);
		$hash = password_hash($seckey, PASSWORD_BCRYPT);
		$sqlc = ("UPDATE petrobowlcont SET SECKEY='$hash' WHERE ID='$x'");
		if ($conn->query($sqlc) === TRUE) {
			echo $seckey."<br/>".$hash."<br/><br/>";
		} else {
			echo "Error updating record: " . $conn->error;
			echo "<br/>";
		}
	};

function randString($length, $charset='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz0123456789'){
	$str = '';
	$count = strlen($charset);
	while ($length--){
		$str .= $charset[mt_rand(0,$count-1)];
	}
	return $str;
};
