<?php
require_once("dompdf/dompdf_config.inc.php");
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};

$latest = $_COOKIE['latest'];
$conn = new MySQLi("localhost","root","loremIPSUM2012","$latest");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$posit = "";
$html = "";
//$html = $html."<div style='width:100%; height:200px; background-image:url(images/Spe-bg-blur.jpg)' id='header'><div id='logo' style='width:150px; height: 150px; background-image:url(images/SPE-Logo-1.png); float:right; margin-right:25px; position: absolute; top: 25px; right: 25px; background-size: cover; background-position: center center'></div></div>";
//$html = $html."<br/>";
$html = $html."<b>Name of poll:</b>		".$latest;
$html = $html."<br>";
$mydate=getdate(date("U"));
setlocale(LC_ALL,"");
$html = $html."<b'>Date of generation:</b>	$mydate[weekday], $mydate[month] $mydate[mday], $mydate[year]";
$html = $html."<br>";
$html = $html."<b>Time of generation:</b>	".gmstrftime("%X %Z");
$html = $html."<br><br>";
for ($i=0; $i<6; $i++){
	switch($i){
		case "0":
			$posit = "PRESIDENT";
			break;
		case "1":
			$posit = "VICE_PRESIDENT";
			break;
		case "2":
			$posit = "GEN_SEC";
			break;
		case "3":
			$posit = "AGS";
			break;
		case "4":
			$posit = "APRO";
			break;
		case "5":
			$posit = "TREASURER";
			break;
	};
	$sql = "SELECT $posit FROM pollvote";
	$sqlp = $conn->query($sql);
	$count = array();
	$county = array();
	$counto = array();
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
	};
	$html = $html."<b>Position</b>: &ensp;&ensp;&ensp;".$posit;
	$html = $html."<br>";
	$html = $html."<b>Winner</b>: &ensp;&ensp;&ensp;".$win." with ".$lead." out of ".$sum." total votes.";
	$html = $html."<br>";
	$html = $html."<table style='border:1px solid black; border-collapse: collapse'>";
	$html = $html."<tr><th style='border:1px solid black; font-family: Montserrat; width:120px; color:#ffffff; background-color:#1086BF'>CONTESTANT</th><th style='border:1px solid black; font-family: Montserrat; width:120px; color:#ffffff; background-color:#1086BF'>VOTES</th></tr>";
	$sql = "SELECT $posit FROM contname";
	$sqlp = $conn->query($sql);
	$row = $sqlp->fetch_assoc();
	if ($sqlp->num_rows > 0) {
		while($row = $sqlp->fetch_assoc()) {
			$dat = $row[$posit];
			if ($dat !== "") {
				array_push($county,$dat);
			};
    	}
	};
	$html = $html."<br>";
	$max = count($county)+1;

	for ($j=0; $j<$max; $j++) {

		$now = $j+1;

		$sql = "SELECT $posit FROM contname WHERE ID = 'CONT$now'";
		$sqlp = $conn->query($sql);
		$row = $sqlp->fetch_assoc();
		$html = $html."<tr><td style='border:1px solid black; font-family: Montserrat; font-size:12px; text-align: center'>".$row[$posit]."</td>";

		$sql = "SELECT $posit FROM pollvote WHERE ID = 'CONT$now'";
		$sqlp = $conn->query($sql);
		$row = $sqlp->fetch_assoc();
		if ($sqlp->num_rows > 0) {
			while($row = $sqlp->fetch_assoc()) {
				$dat = $row[$posit];
				if ($dat !== "") {
					array_push($count,$dat);
				};
	    	};
		$html = $html."<td style='border:1px solid black; font-family: Montserrat; font-size:12px; text-align: center'>".$count[$j]."</td></tr>";
		};

	};
	$html = $html."</table>";
	$html = $html."<br><br>";
};
//echo $html;
$dompdf = new DOMPDF();
$dompdf->load_html($html);
$dompdf->render();
$filename = $latest."result";
$dompdf->stream($filename.'.pdf');
