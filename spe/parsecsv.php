<?php
session_start();
ini_set('max_execution_time',400);
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};

$pollname = $_SESSION["pollname"];
$conn = new MySQLi("localhost","root","loremIPSUM2012",$pollname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$cont = 1;
$col = "";
$target_dir = "csv/";
$target_file = $target_dir . basename($_FILES["csvin"]["name"]);

$csvFileType = pathinfo($target_file,PATHINFO_EXTENSION);

$target_file = $target_dir .$cont.".".$csvFileType;

if($csvFileType != "csv") {
    $uploadOk = 0;
};

while (file_exists($target_file)) {
	$cont = $cont + 1;
	$target_file = $target_dir .$cont.".".$csvFileType;
};

if ($uploadOk = 0) {
    echo "1";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["csvin"]["tmp_name"], $target_file)) {
        $csv = array_map('str_getcsv',file($target_file));
		$counti=count($csv);
		for($i=0; $i<$counti; $i++){
			$sqlb = "SELECT MATNO FROM voters";
			$sqlp = $conn->query($sqlb);
			$count = array();
			if ($sqlp->num_rows > 0) {
				while($row = $sqlp->fetch_assoc()) {
					$dat = $row['MATNO'];
					if ($dat !== "") {
						array_unshift($count, $dat);
					};
    			}
			$counta = count($count) + 1;
			};
			for($j=0; $j<4; $j++){
				switch($j) {
					case "0":
						$col = "LEVEL";
					break;
					case "1":
						$col = "FIRSTNAME";
					break;
					case "2":
						$col = "LASTNAME";
					break;
					case "3":
						$col = "MATNO";
					break;
				};
				$data = $csv[$i][$j];
				$sqla = ("UPDATE voters SET $col='$data' WHERE ID='$counta'");
				$conn->query($sqla) or die("");
			};
		echo "0";
		};
    } else {
        echo "1";
    }
}
