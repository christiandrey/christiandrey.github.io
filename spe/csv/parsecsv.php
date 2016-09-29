<?php
$csv = array_map('str_getcsv',file('test.csv'));
$count=count($csv);
for($i=0; $i<$count; $i++){
	for($j=0; $j<4; $j++){
		echo $csv[$i][$j]." ";
	};
	echo "<br/><br/>";
};
?>
