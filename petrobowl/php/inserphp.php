<?php
session_start();
$conn = new MySQLi("mysql7.000webhost.com","a1343179_blaise","loremIPSUM2012","a1343179_petrobo");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sqlc = "INSERT INTO petrobowlqueries (QUESTION) VALUES ('QUESTION1'),('QUESTION2'),('QUESTION3'),('QUESTION4'),('QUESTION5'),('QUESTION6'),('QUESTION7'),('QUESTION8'),('QUESTION9'),('QUESTION10'),('QUESTION11'),('QUESTION12'),('QUESTION13'),('QUESTION14'),('QUESTION15')";
if ($conn->query($sqlc) === TRUE) {
	echo "Successful <br/>";
} else {
	echo "Error updating record: " . $conn->error;
	echo "<br/>";
}
