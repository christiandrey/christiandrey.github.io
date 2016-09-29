<!doctype html>
<html>
<head>
<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "voter")){
	header("Location: index.html");
};
?>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPE UI Decides | Results of Polls</title>
  <link href="http://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/results-grid.css">
  <link rel="stylesheet" href="css/results.css">
    <script src="js/jquery-min.js"></script>
  	<script src="js/jquery-ui.min.js"></script>
    <script src="js/drepie.js"></script>
  <script>
  $(document).ready(function(e) {
    $("#sec_eye").mousedown(function(e) {
		$("#sec_input").clone().attr('type','text').insertAfter("#sec_input").prev().remove();
    });

	$("#sec_eye").mouseup(function(e) {
		$("#sec_input").clone().attr('type','password').insertAfter("#sec_input").prev().remove();
    });
});
  </script>
</head>
<body class="body page-results clearfix">
  <div onClick="window.location='adminpage.php';" class="element dashbtn"></div>
  <div class="container posi6">
    <div id="prev5" class="element prev"></div>
    <div id="votes_wrapper" class="container votes_wrapper">
      <div id="cont6" class="container cont6">
        <p id="cont_votes" class="text cont_votes text-1">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-2">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-3"></div>
      </div>
      <div id="cont5" class="container cont5">
        <p id="cont_votes" class="text cont_votes text-3">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-4">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-4"></div>
      </div>
      <div id="cont4" class="container cont4">
        <p id="cont_votes" class="text cont_votes text-5">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-6">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-5"></div>
      </div>
      <div id="cont3" class="container cont3">
        <p id="cont_votes" class="text cont_votes text-7">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-8">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-6"></div>
      </div>
      <div id="cont2" class="container cont2">
        <p id="cont_votes" class="text cont_votes text-9">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-10">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-7"></div>
      </div>
      <div id="cont1" class="container cont1">
        <p id="cont_votes" class="text cont_votes text-11">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-12">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-8"></div>
      </div>
    </div>
    <div id="wrapper" class="container wrapper">
      <p id="win_votes" class="text win_votes">45/50 Votes</p>
      <p id="win_name" class="text win_name">Oluwaseun Adedire</p>
      <div id="pie_large" class="element pie_large"></div>
    </div>
    <p id="position" class="text position">Treasurer</p>
  </div>
  <div class="container posi5">
    <div id="next4" class="element next"></div>
    <div id="prev4" class="element prev"></div>
    <div id="votes_wrapper" class="container votes_wrapper">
      <div id="cont6" class="container cont6">
        <p id="cont_votes" class="text cont_votes text-16">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-17">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-12"></div>
      </div>
      <div id="cont5" class="container cont5">
        <p id="cont_votes" class="text cont_votes text-18">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-19">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-13"></div>
      </div>
      <div id="cont4" class="container cont4">
        <p id="cont_votes" class="text cont_votes text-20">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-21">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-14"></div>
      </div>
      <div id="cont3" class="container cont3">
        <p id="cont_votes" class="text cont_votes text-22">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-23">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-15"></div>
      </div>
      <div id="cont2" class="container cont2">
        <p id="cont_votes" class="text cont_votes text-24">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-25">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-16"></div>
      </div>
      <div id="cont1" class="container cont1">
        <p id="cont_votes" class="text cont_votes text-26">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-27">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-17"></div>
      </div>
    </div>
    <div id="wrapper" class="container wrapper">
      <p id="win_votes" class="text win_votes">45/50 Votes</p>
      <p id="win_name" class="text win_name">Oluwaseun Adedire</p>
      <div id="pie_large" class="element pie_large"></div>
    </div>
    <p id="position" class="text position">Assistant P.R.O.</p>
  </div>
  <div class="container posi4">
    <div id="next3" class="element next"></div>
    <div id="prev3" class="element prev"></div>
    <div id="votes_wrapper" class="container votes_wrapper">
      <div id="cont6" class="container cont6">
        <p id="cont_votes" class="text cont_votes text-31">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-32">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-21"></div>
      </div>
      <div id="cont5" class="container cont5">
        <p id="cont_votes" class="text cont_votes text-33">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-34">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-22"></div>
      </div>
      <div id="cont4" class="container cont4">
        <p id="cont_votes" class="text cont_votes text-35">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-36">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-23"></div>
      </div>
      <div id="cont3" class="container cont3">
        <p id="cont_votes" class="text cont_votes text-37">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-38">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-24"></div>
      </div>
      <div id="cont2" class="container cont2">
        <p id="cont_votes" class="text cont_votes text-39">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-40">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-25"></div>
      </div>
      <div id="cont1" class="container cont1">
        <p id="cont_votes" class="text cont_votes text-41">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-42">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-26"></div>
      </div>
    </div>
    <div id="wrapper" class="container wrapper">
      <p id="win_votes" class="text win_votes">45/50 Votes</p>
      <p id="win_name" class="text win_name">Oluwaseun Adedire</p>
      <div id="pie_large" class="element pie_large"></div>
    </div>
    <p id="position" class="text position">Assistant General Secretary</p>
  </div>
  <div class="container posi3">
    <div id="next2" class="element next"></div>
    <div id="prev2" class="element prev"></div>
    <div id="votes_wrapper" class="container votes_wrapper">
      <div id="cont6" class="container cont6">
        <p id="cont_votes" class="text cont_votes text-46">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-47">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-30"></div>
      </div>
      <div id="cont5" class="container cont5">
        <p id="cont_votes" class="text cont_votes text-48">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-49">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-31"></div>
      </div>
      <div id="cont4" class="container cont4">
        <p id="cont_votes" class="text cont_votes text-50">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-51">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-32"></div>
      </div>
      <div id="cont3" class="container cont3">
        <p id="cont_votes" class="text cont_votes text-52">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-53">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-33"></div>
      </div>
      <div id="cont2" class="container cont2">
        <p id="cont_votes" class="text cont_votes text-54">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-55">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-34"></div>
      </div>
      <div id="cont1" class="container cont1">
        <p id="cont_votes" class="text cont_votes text-56">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-57">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-35"></div>
      </div>
    </div>
    <div id="wrapper" class="container wrapper">
      <p id="win_votes" class="text win_votes">45/50 Votes</p>
      <p id="win_name" class="text win_name">Oluwaseun Adedire</p>
      <div id="pie_large" class="element pie_large"></div>
    </div>
    <p id="position" class="text position">General Secretary</p>
  </div>
  <div class="container posi2">
    <div id="next1" class="element next"></div>
    <div id="prev1" class="element prev"></div>
    <div id="votes_wrapper" class="container votes_wrapper">
      <div id="cont6" class="container cont6">
        <p id="cont_votes" class="text cont_votes text-61">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-62">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-39"></div>
      </div>
      <div id="cont5" class="container cont5">
        <p id="cont_votes" class="text cont_votes text-63">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-64">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-40"></div>
      </div>
      <div id="cont4" class="container cont4">
        <p id="cont_votes" class="text cont_votes text-65">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-66">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-41"></div>
      </div>
      <div id="cont3" class="container cont3">
        <p id="cont_votes" class="text cont_votes text-67">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-68">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-42"></div>
      </div>
      <div id="cont2" class="container cont2">
        <p id="cont_votes" class="text cont_votes text-69">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-70">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-43"></div>
      </div>
      <div id="cont1" class="container cont1">
        <p id="cont_votes" class="text cont_votes text-71">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-72">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-44"></div>
      </div>
    </div>
    <div id="wrapper" class="container wrapper">
      <p id="win_votes" class="text win_votes">45/50 Votes</p>
      <p id="win_name" class="text win_name">Oluwaseun Adedire</p>
      <div id="pie_large" class="element pie_large"></div>
    </div>
    <p id="position" class="text position">Vice President</p>
  </div>
  <div class="container posi1">
    <div id="next0" class="element next"></div>
    <div id="votes_wrapper" class="container votes_wrapper">
      <div id="cont6" class="container cont6">
        <p id="cont_votes" class="text cont_votes text-76">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-77">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-47"></div>
      </div>
      <div id="cont5" class="container cont5">
        <p id="cont_votes" class="text cont_votes text-78">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-79">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-48"></div>
      </div>
      <div id="cont4" class="container cont4">
        <p id="cont_votes" class="text cont_votes text-80">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-81">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-49"></div>
      </div>
      <div id="cont3" class="container cont3">
        <p id="cont_votes" class="text cont_votes text-82">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-83">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-50"></div>
      </div>
      <div id="cont2" class="container cont2">
        <p id="cont_votes" class="text cont_votes text-84">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-85">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-51"></div>
      </div>
      <div id="cont1" class="container cont1">
        <p id="cont_votes" class="text cont_votes text-86">10/40 votes</p>
        <p id="cont_name" class="text cont_name text-87">Oluwaseun Adedire</p>
        <div id="pie" class="element pie element-52"></div>
      </div>
    </div>
    <div id="wrapper" class="container wrapper">
      <p id="win_votes" class="text win_votes">45/50 Votes</p>
      <p id="win_name" class="text win_name">Oluwaseun Adedire</p>
      <div id="pie_large" class="element pie_large"></div>
    </div>
    <p id="position" class="text position">President</p>
  </div>
  <div class="element header_bg clearfix">
  	<div id="print" class="element print"></div>
  	<p id="resulttext" class="resulttext">Results of poll</p>
    <div class="container logoprops">
      <div class="element spedecides"></div>
      <div class="element spelogo"></div>
    </div>
  </div>

  <script src="js/results.js"></script>
</body>
</html>
