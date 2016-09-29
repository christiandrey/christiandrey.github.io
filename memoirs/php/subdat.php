<?php
session_start();
$conn = new MySQLi("andrebla.5gbfree.com","andrebla_blaise","loremIPSUM2012","andrebla_yearbook");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (!isset($_SESSION['logged'])){
	header("Location: ../index.php");
};

$matno = $_COOKIE['matno'];
$q1 = htmlspecialchars(stripslashes(trim($_POST['q1'])));
$q2 = htmlspecialchars(stripslashes(trim($_POST['q2'])));
$q3 = htmlspecialchars(stripslashes(trim($_POST['q3'])));
$q4 = htmlspecialchars(stripslashes(trim($_POST['q4'])));
$q5 = htmlspecialchars(stripslashes(trim($_POST['q5'])));
$q6 = htmlspecialchars(stripslashes(trim($_POST['q6'])));
$q7 = htmlspecialchars(stripslashes(trim($_POST['q7'])));
$q8 = htmlspecialchars(stripslashes(trim($_POST['q8'])));
$q9 = htmlspecialchars(stripslashes(trim($_POST['q9'])));
$q10 = htmlspecialchars(stripslashes(trim($_POST['q10'])));
$q11 = htmlspecialchars(stripslashes(trim($_POST['q11'])));
$q12 = htmlspecialchars(stripslashes(trim($_POST['q12'])));
$q13 = htmlspecialchars(stripslashes(trim($_POST['q13'])));
$q14 = htmlspecialchars(stripslashes(trim($_POST['q14'])));
$q15 = htmlspecialchars(stripslashes(trim($_POST['q15'])));
$q16 = htmlspecialchars(stripslashes(trim($_POST['q16'])));
$q17 = htmlspecialchars(stripslashes(trim($_POST['q17'])));
$q18 = htmlspecialchars(stripslashes(trim($_POST['q18'])));
$q19 = htmlspecialchars(stripslashes(trim($_POST['q19'])));
$q20 = htmlspecialchars(stripslashes(trim($_POST['q20'])));
$q21 = htmlspecialchars(stripslashes(trim($_POST['q21'])));
$q22 = htmlspecialchars(stripslashes(trim($_POST['q22'])));
$q23 = htmlspecialchars(stripslashes(trim($_POST['q23'])));
$q24 = htmlspecialchars(stripslashes(trim($_POST['q24'])));
$q25 = htmlspecialchars(stripslashes(trim($_POST['q25'])));
$q26 = htmlspecialchars(stripslashes(trim($_POST['q26'])));
$q27 = htmlspecialchars(stripslashes(trim($_POST['q27'])));
$q28 = htmlspecialchars(stripslashes(trim($_POST['q28'])));
$q29 = htmlspecialchars(stripslashes(trim($_POST['q29'])));
$q30 = htmlspecialchars(stripslashes(trim($_POST['q30'])));
$q31 = htmlspecialchars(stripslashes(trim($_POST['q31'])));
$q32 = htmlspecialchars(stripslashes(trim($_POST['q32'])));

$sql = ("UPDATE yrbookdetails SET NAME='$q1',NICKNAMES='$q2',PHONE='$q3',EMAIL='$q4',FACEBOOK='$q5',TWITTER='$q6',INSTAGRAM='$q7',BBM='$q8',SNAPCHAT='$q9',LINKEDIN='$q10',SPE='$q11',DOB='$q12',STATE='$q13',SCHOOLS='$q14',HOBBIES='$q15',FAITH='$q16',BESTLECTURER='$q17',WONDERFUL='$q18',WORST='$q19',RIDEORDIE='$q20',BESTYEAR='$q21',PHILOSOPHY='$q22',PRACTICE='$q23',HELMET='$q24',LIFEPETENGR='$q25',OFFER='$q26',LCP='$q27',CCP='$q28',CRUSH='$q29',ADMIRE='$q30',EXPERIENCE='$q31',PARTING='$q32',DONE='1' WHERE MATRIC='$matno'");
if ($conn->query($sql) === TRUE){
	echo('0');
}
else {
	echo('1');
};
?>
