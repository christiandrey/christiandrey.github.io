<?php
require_once("dompdf/dompdf_config.inc.php");
session_start();
ini_set('max_execution_time',500);
//if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
//	header("Location: index.html");
//};
$pollname = $_SESSION['pollname'];
$pollname = htmlspecialchars(stripslashes(trim($pollname)));
$conn = new MySQLi("localhost","root","loremIPSUM2012",$pollname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$html = '';
$sql = "SELECT * FROM voters";
$sqlp = $conn->query($sql);
$matno = array();
$seckey = array();
$fn = array();
$ln = array();
$lev = array();
if ($sqlp->num_rows > 0) {
	while($row = $sqlp->fetch_assoc()) {
		$dat = $row['MATNO'];
		$dot = $row['LEVEL'];
		$det = $row['FIRSTNAME'];
		$dit = $row['LASTNAME'];
		if ($dat !== "") {
			array_push($matno,$dat);
			array_push($lev,$dot);
			array_push($fn,$det);
			array_push($ln,$dit);
			$sqlr = "SELECT PASSWORD FROM voters WHERE MATNO='$dat'";
			$sqls = $conn->query($sqlr);
			$raw = $sqls->fetch_assoc();
			$pass = $raw['PASSWORD'];
			array_push($seckey,$pass);
		};
    }
	$count = count($matno);
	$html = $html ."<b>Name of poll:</b>		".$pollname;
	$html = $html ."<br>";
	$mydate=getdate(date("U"));
	setlocale(LC_ALL,"");
	$html = $html ."<b>Date of generation:</b>	$mydate[weekday], $mydate[month] $mydate[mday], $mydate[year]";
	$html = $html ."<br>";
	$html = $html ."<b>Time of generation:</b>	".gmstrftime("%X %Z");
	$html = $html ."<br>";
	$html = $html ."<b>Number of generated security keys:</b>		".$count;
	$html = $html ."<br><br>";
	$html = $html ."<table style='border:1px solid black; border-collapse: collapse'>";
	$html = $html ."<tr><th style='border:1px solid black'>LEVEL</th><th style='border:1px solid black'>MATRIC NUMBER</th><th style='border:1px solid black'>FIRST NAME</th><th style='border:1px solid black'>LAST NAME</th><th style='border:1px solid black'>SECURITY KEY</th></tr>";
	for ($i=0; $i<$count; $i++){
		$html = $html ."<tr><td style='border:1px solid black'>".$lev[$i]."</td>"."<td style='border:1px solid black'>".$matno[$i]."</td>"."</td>"."<td style='border:1px solid black'>".$fn[$i]."</td>"."</td>"."<td style='border:1px solid black'>".$ln[$i]."</td>"."<td style='border:1px solid black'>".$seckey[$i]."</td></tr>";
	};
	$html = $html ."</table>";
};
$dompdf = new DOMPDF();
$dompdf->load_html($html);
$dompdf->render();
$dompdf->stream($pollname.'.pdf');
