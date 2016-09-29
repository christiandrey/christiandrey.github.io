<!doctype html>
<html>
<head>
<?php
session_start();
if (!isset($_SESSION['user']) || ($_SESSION['user'] == "administrator")){
	header("Location: index.html");
};
?>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1.0">
  <title>SPE UI Decides | Vote</title>
  <link href="http://fonts.googleapis.com/css?family=Montserrat:700,400" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="css/standardize.css">
  <link rel="stylesheet" href="css/elect-grid.css">
  <link rel="stylesheet" href="css/elect.css">
    <script src="js/jquery-min.js"></script>
  	<script src="js/jquery-ui.min.js"></script>
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
<body class="body page-elect clearfix">
  <div id="confwrap" class="container_confwrap js-confwrap">
    <div class="container btnwrap">
      <div id="submit_fin" class="element submit js-submit_fin"></div>
      <div class="element review js-review"></div>
    </div>
    <p class="text conftext js-conftext">Do you want to submit your votes?</p>
    <div class="element logo"></div>
    <div class="element loading"></div>
    <div class="element conf js-conf"></div>
  </div>
  <div id="next" class="element next js-next"></div>
  <div id="prev" class="element prev js-prev"></div>
  <div id="votehold" class="container votehold">
    <div id="cont_screen" class="container cont_screen js-cont_screen">
      <div id="posi6" class="container posi6">
      	<input type="text" id="pos6val" class="posval" style="display:none">
        <div id="contwrap" class="container contwrap">
          <div id="cont6" class="element cont6" data-traveldata="66">
            <div id="name_hold" class="element name_hold element-9">
              <p id="cont_name" class="text cont_name text-2">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont5" class="element cont5" data-traveldata="65">
            <div id="name_hold" class="element name_hold element-11">
              <p id="cont_name" class="text cont_name text-3">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont4" class="element cont4" data-traveldata="64">
            <div id="name_hold" class="element name_hold element-13">
              <p id="cont_name" class="text cont_name text-4">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont3" class="element cont3" data-traveldata="63">
            <div id="name_hold" class="element name_hold element-15">
              <p id="cont_name" class="text cont_name text-5">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont2" class="element cont2" data-traveldata="62">
            <div id="name_hold" class="element name_hold element-17">
              <p id="cont_name" class="text cont_name text-6">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont1" class="element cont1" data-traveldata="61">
            <div id="name_hold" class="element name_hold element-19">
              <p id="cont_name" class="text cont_name text-7">Oluwaseun Adedire</p>
            </div>
          </div>
        </div>
        <p id="position" class="text position">Treasurer</p>
      </div>
      <div id="posi5" class="container posi5">
      	<input type="text" id="pos5val" class="posval" style="display:none">
        <div id="contwrap" class="container contwrap">
          <div id="cont6" class="element cont6" data-traveldata="56">
            <div id="name_hold" class="element name_hold element-21">
              <p id="cont_name" class="text cont_name text-9">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont5" class="element cont5" data-traveldata="55">
            <div id="name_hold" class="element name_hold element-23">
              <p id="cont_name" class="text cont_name text-10">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont4" class="element cont4" data-traveldata="54">
            <div id="name_hold" class="element name_hold element-25">
              <p id="cont_name" class="text cont_name text-11">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont3" class="element cont3" data-traveldata="53">
            <div id="name_hold" class="element name_hold element-27">
              <p id="cont_name" class="text cont_name text-12">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont2" class="element cont2" data-traveldata="52">
            <div id="name_hold" class="element name_hold element-29">
              <p id="cont_name" class="text cont_name text-13">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont1" class="element cont1" data-traveldata="51">
            <div id="name_hold" class="element name_hold element-31">
              <p id="cont_name" class="text cont_name text-14">Oluwaseun Adedire</p>
            </div>
          </div>
        </div>
        <p id="position" class="text position">Assistant P.R.O.</p>
      </div>
      <div id="posi4" class="container posi4">
      <input type="text" id="pos4val" class="posval" style="display:none">
        <div id="contwrap" class="container contwrap">
          <div id="cont6" class="element cont6" data-traveldata="46">
            <div id="name_hold" class="element name_hold element-33">
              <p id="cont_name" class="text cont_name text-16">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont5" class="element cont5" data-traveldata="45">
            <div id="name_hold" class="element name_hold element-35">
              <p id="cont_name" class="text cont_name text-17">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont4" class="element cont4" data-traveldata="44">
            <div id="name_hold" class="element name_hold element-37">
              <p id="cont_name" class="text cont_name text-18">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont3" class="element cont3" data-traveldata="43">
            <div id="name_hold" class="element name_hold element-39">
              <p id="cont_name" class="text cont_name text-19">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont2" class="element cont2" data-traveldata="42">
            <div id="name_hold" class="element name_hold element-41">
              <p id="cont_name" class="text cont_name text-20">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont1" class="element cont1" data-traveldata="41">
            <div id="name_hold" class="element name_hold element-43">
              <p id="cont_name" class="text cont_name text-21">Oluwaseun Adedire</p>
            </div>
          </div>
        </div>
        <p id="position" class="text position">Assistant General Secretary</p>
      </div>
      <div id="posi3" class="container posi3">
      	<input type="text" id="pos3val" class="posval" style="display:none">
        <div id="contwrap" class="container contwrap">
          <div id="cont6" class="element cont6" data-traveldata="36">
            <div id="name_hold" class="element name_hold element-45">
              <p id="cont_name" class="text cont_name text-23">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont5" class="element cont5" data-traveldata="35">
            <div id="name_hold" class="element name_hold element-47">
              <p id="cont_name" class="text cont_name text-24">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont4" class="element cont4" data-traveldata="34">
            <div id="name_hold" class="element name_hold element-49">
              <p id="cont_name" class="text cont_name text-25">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont3" class="element cont3" data-traveldata="33">
            <div id="name_hold" class="element name_hold element-51">
              <p id="cont_name" class="text cont_name text-26">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont2" class="element cont2" data-traveldata="32">
            <div id="name_hold" class="element name_hold element-53">
              <p id="cont_name" class="text cont_name text-27">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont1" class="element cont1" data-traveldata="31">
            <div id="name_hold" class="element name_hold element-55">
              <p id="cont_name" class="text cont_name text-28">Oluwaseun Adedire</p>
            </div>
          </div>
        </div>
        <p id="position" class="text position">General Secretary</p>
      </div>
      <div id="posi2" class="container posi2">
      	<input type="text" id="pos2val" class="posval" style="display:none">
        <div id="contwrap" class="container contwrap">
          <div id="cont6" class="element cont6" data-traveldata="26">
            <div id="name_hold" class="element name_hold element-57">
              <p id="cont_name" class="text cont_name text-30">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont5" class="element cont5" data-traveldata="25">
            <div id="name_hold" class="element name_hold element-59">
              <p id="cont_name" class="text cont_name text-31">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont4" class="element cont4" data-traveldata="24">
            <div id="name_hold" class="element name_hold element-61">
              <p id="cont_name" class="text cont_name text-32">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont3" class="element cont3" data-traveldata="23">
            <div id="name_hold" class="element name_hold element-63">
              <p id="cont_name" class="text cont_name text-33">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont2" class="element cont2" data-traveldata="22">
            <div id="name_hold" class="element name_hold element-65">
              <p id="cont_name" class="text cont_name text-34">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont1" class="element cont1" data-traveldata="21">
            <div id="name_hold" class="element name_hold element-67">
              <p id="cont_name" class="text cont_name text-35">Oluwaseun Adedire</p>
            </div>
          </div>
        </div>
        <p id="position" class="text position">Vice President</p>
      </div>
      <div id="posi1" class="container posi1">
      	<input type="text" id="pos1val" class="posval" style="display:none">
        <div id="contwrap" class="container contwrap">
          <div id="cont6" class="element cont6" data-traveldata="16">
            <div id="name_hold" class="element name_hold element-69">
              <p id="cont_name" class="text cont_name text-37">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont5" class="element cont5" data-traveldata="15">
            <div id="name_hold" class="element name_hold element-71">
              <p id="cont_name" class="text cont_name text-38">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont4" class="element cont4" data-traveldata="14">
            <div id="name_hold" class="element name_hold element-73">
              <p id="cont_name" class="text cont_name text-39">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont3" class="element cont3" data-traveldata="13">
            <div id="name_hold" class="element name_hold element-75">
              <p id="cont_name" class="text cont_name text-40">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont2" class="element cont2" data-traveldata="12">
            <div id="name_hold" class="element name_hold element-77">
              <p id="cont_name" class="text cont_name text-41">Oluwaseun Adedire</p>
            </div>
          </div>
          <div id="cont1" class="element cont1" data-traveldata="11">
            <div id="name_hold" class="element name_hold element-79">
              <p id="cont_name" class="text cont_name text-42">Oluwaseun Adedire</p>
            </div>
          </div>
        </div>
        <p id="position" class="text position">President</p>
      </div>
    </div>
  </div>
  <div class="element decide"></div>
  <div class="element logo element-81"></div>
  <div class="element head"></div>
  <div class="element head_bg">
    <div class="container votdetails">
      <p id="voterlevel" class="text voterlevel">500L</p>
      <p id="votermat" class="text votermat">158003</p>
      <p id="votername" class="text votername">Oluwaseun Adedire</p>
      <div id="submit_btn" class="element submit_btn js-submit"></div>
    </div>
  </div>

  <script src="js/elect.js"></script>
</body>
</html>
