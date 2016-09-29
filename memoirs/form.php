<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
    <?php
	session_start();
	if (!isset($_SESSION['logged'])){
		header("Location: index.php");
	};
?>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>SPE UI Class of '15 Yearbook</title>
		<meta name="description" content="SPE UI Class of 15 Data Collection" />
		<meta name="keywords" content="spe,ui,class,of,15,data,collection,year,book" />
		<meta name="author" content="Studyo2311" />
		<link rel="shortcut icon" href="../favicon.ico">
		<link rel="stylesheet" type="text/css" href="css/normalize.css" />
		<link rel="stylesheet" type="text/css" href="css/demo.css" />
		<link rel="stylesheet" type="text/css" href="css/component.css" />
		<link rel="stylesheet" type="text/css" href="css/cs-select.css" />
		<link rel="stylesheet" type="text/css" href="css/cs-skin-boxes.css" />
		<script src="js/modernizr.custom.js"></script>
        <script src="js/jquery-min.js"></script>
        <script>
		$(document).ready(function(e) {
			$('#myform').submit(function(e) {
                e.preventDefault();
				$q1 = $('#q1').val();
				$q2 = $('#q2').val();
				$q3 = $('#q3').val();
				$q4 = $('#q4').val();
				$q5 = $('#q5').val();
				$q6 = $('#q6').val();
				$q7 = $('#q7').val();
				$q8 = $('#q8').val();
				$q9 = $('#q9').val();
				$q10 = $('#q10').val();
				$q11 = $('#q11').val();
				$q12 = $('#q12').val();
				$q13 = $('#q13').val();
				$q14 = $('#q14').val();
				$q15 = $('#q15').val();
				$q16 = $('#q16').val();
				$q17 = $('#q17').val();
				$q18 = $('#q18').val();
				$q19 = $('#q19').val();
				$q20 = $('#q20').val();
				$q21 = $('#q21').val();
				$q22 = $('#q22').val();
				$q23 = $('#q23').val();
				$q24 = $('#q24').val();
				$q25 = $('#q25').val();
				$q26 = $('#q26').val();
				$q27 = $('#q27').val();
				$q28 = $('#q28').val();
				$q29 = $('#q29').val();
				$q30 = $('#q30').val();
				$q31 = $('#q31').val();
				$q32 = $('#q32').val();
				$('#overlay').css('display','block');
				$('#progress').animate({width:'100%'},45000);
				$.post('php/subdat.php',{q1:$q1,q2:$q2,q3:$q3,q4:$q4,q5:$q5,q6:$q6,q7:$q7,q8:$q8,q9:$q9,q10:$q10,q11:$q11,q12:$q12,q13:$q13,q14:$q14,q15:$q15,q16:$q16,q17:$q17,q18:$q18,q19:$q19,q20:$q20,q21:$q21,q22:$q22,q23:$q23,q24:$q24,q25:$q25,q26:$q26,q27:$q27,q28:$q28,q29:$q29,q30:$q30,q31:$q31,q32:$q32},function (data){if (data=='0'){$('#progress').hide(); $('#ltext').html("Submitted!"); setTimeout(function(){window.location='index.php'},2000);}; if (data=='1'){$('#progress').hide(); $('#ltext').html("Submit error :-("); setTimeout(function(){$('#overlay').css('display','none');},1000);};});
            });
        });
		</script>
	</head>
	<body>
    <div id="overlay" style="display:none; width:100%; height:100%; background-color:rgba(0,0,0,0.9); margin:auto; z-index:+1000; position:fixed; top:0px;left:0px"><p id="ltext" style="width:100%; height:100%; margin:auto; text-align:center; position:absolute; top:32%; font-size:10em; font-family:Raleway; font-weight:bold">Submitting...</p>
    <div id="progress"; style="position:absolute; background-color:rgba(255,255,255,1); width:0%; height:10px; top:0%"></div></div>
		<div class="container">
			<div class="fs-form-wrap" id="fs-form-wrap">
				<div class="fs-title">
					<h1>Memoirs of a Five year Journey</h1>
					<div class="codrops-top">
						<a class="codrops-icon codrops-icon-prev" href="index.php"><span>Logout</span></a>
						<a class="codrops-icon codrops-icon-drop" href="http://www.facebook.com/dreyworks"><span>Go to Studio 2311</span></a>
						<a class="codrops-icon codrops-icon-info" href="#"><span>Please fill in the following information.</span></a>
					</div>
				</div>
				<form id="myform" class="fs-form fs-form-full" autocomplete="off">
					<ol class="fs-fields">
						<li>
							<label class="fs-field-label fs-anim-upper" for="q1">What's your name?</label>
							<input class="fs-anim-lower" id="q1" name="q1" type="text" placeholder="Christian Dréy" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q2">What are your nicknames?</label>
							<input class="fs-anim-lower" id="q2" name="q2" type="text" placeholder="Type nicknames here" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q3" data-info="Separate multiple phone numbers with a comma, please...">What are your phone numbers?</label>
							<input class="fs-anim-lower" id="q3" name="q3" type="text" placeholder="234-----" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q4" data-info="No one will send you spam. Christian Dréy promises.">What's your email address?</label>
							<input class="fs-anim-lower" id="q4" name="q4" type="email" placeholder="christian@drey.works" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q5">What's your Facebook name?</label>
							<input class="fs-anim-lower" id="q5" name="q5" type="text" placeholder="Christian Dréy"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q6">Your Twitter handle...please...</label>
							<input class="fs-anim-lower" id="q6" name="q6" type="text" placeholder="@chrdrey"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q7">Can we have your Instagram handle?</label>
							<input class="fs-anim-lower" id="q7" name="q7" type="text" placeholder="@chrdrey"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q8">and your BBM Pin too...</label>
							<input class="fs-anim-lower" id="q8" name="q8" type="text" placeholder="3357F51F"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q9">What's your Snapchat handle?</label>
							<input class="fs-anim-lower" id="q9" name="q9" type="text" placeholder="@chrdrey"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q10">What's your LinkedIn profile name?</label>
							<input class="fs-anim-lower" id="q10" name="q10" type="text" placeholder="Christian Dréy"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q11">What's your SPE number?</label>
							<input class="fs-anim-lower" id="q11" name="q11" type="text" placeholder="4094844"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q12" data-info="In the format dd/mm/yyyy">What's your date of birth?</label>
							<input class="fs-anim-lower" id="q12" name="q12" type="text" placeholder="dd/mm/yyyy" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q13">What state are you from?</label>
							<input class="fs-anim-lower" id="q13" name="q13" type="text" placeholder="Osun" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q14" data-info="All schools, including primary and secondary schools">What other schools have you attended before?</label>
							<textarea class="fs-anim-lower" id="q14" name="q14" placeholder="Harvard, Stanford" required></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q15" data-info="Just tell us what you waste your spare time doing">What are your interests/hobbies/passion?</label>
							<textarea class="fs-anim-lower" id="q15" name="q15" placeholder="Being a demi-god...lol" required></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q16">What's your faith...religion?</label>
							<input class="fs-anim-lower" id="q16" name="q16" type="text" placeholder="Dreyism"/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q17">Who was your best lecturer and why?</label>
							<textarea class="fs-anim-lower" id="q17" name="q17" placeholder="Dr. Dréy, because he's just awesome." required></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q18">What were your most wonderful experiences in UI?</label>
							<textarea class="fs-anim-lower" id="q18" name="q18" placeholder="Meeting Dréy..."></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q19">What were your worst experiences in UI?</label>
							<textarea class="fs-anim-lower" id="q19" name="q19" placeholder="Well..just type something"></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q20">Who are your ride or die friends?</label>
							<textarea class="fs-anim-lower" id="q20" name="q20" placeholder="Well..their names..." required></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q21">What was your best year?...why??</label>
							<textarea class="fs-anim-lower" id="q21" name="q21" placeholder="2010...because I met Dréy" required></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q22">What is your philosophy of life/Life statement?</label>
							<textarea class="fs-anim-lower" id="q22" name="q22" placeholder="Rule your world...or whatever"></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q23">What are your likely areas of practice?</label>
							<textarea class="fs-anim-lower" id="q23" name="q23" placeholder="Medicine and Surgery, Art, whatever" required></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q24">What's next after the helmet?</label>
							<textarea class="fs-anim-lower" id="q24" name="q24" placeholder="The hammer...lol..." required></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q25">Life as a Pet. Engr. student in 3 words?</label>
							<input class="fs-anim-lower" id="q25" name="q25" type="text" placeholder="Word1...Word2...Word3" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q26">If you hadn't offered Pet. Engr...?</label>
							<input class="fs-anim-lower" id="q26" name="q26" type="text" placeholder="Yoruba, I guess...lol" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q27" data-info="Tell us as many as you can remember, separated with commas...">Lecturers' catch-phrases</label>
							<textarea class="fs-anim-lower" id="q27" name="q27" placeholder="Go straight to what you did-Alawode"></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q28" data-info="Tell us as many as you can remember, separated with commas...">Classmates' catch-phrases</label>
							<textarea class="fs-anim-lower" id="q28" name="q28" placeholder="Ibeee ohhh, Ibeere ofo"></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q29" data-info="Don't worry, your secret is safe with  Dréy...or not...**grins**">Secret class crush</label>
							<input class="fs-anim-lower" id="q29" name="q29" type="text" placeholder="Christian Dréy" required/>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q30">Classmates you admire and why</label>
							<textarea class="fs-anim-lower" id="q30" name="q30" placeholder="Dréy...because he's amazing"></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q31">Experiences you'll never forget</label>
							<textarea class="fs-anim-lower" id="q31" name="q31" placeholder="Meeting Dréy, Talking to Dréy"></textarea>
						</li>
                        <li>
							<label class="fs-field-label fs-anim-upper" for="q32">Parting words</label>
							<textarea class="fs-anim-lower" id="q32" name="q32" placeholder="Parting words...not parting biography..."></textarea>
						</li>
					</ol><!-- /fs-fields -->
					<button class="fs-submit" type="submit">Send answers</button>
				</form><!-- /fs-form -->
			</div><!-- /fs-form-wrap -->



		</div><!-- /container -->
		<script src="js/classie.js"></script>
		<script src="js/selectFx.js"></script>
		<script src="js/fullscreenForm.js"></script>
		<script>
			(function() {
				var formWrap = document.getElementById( 'fs-form-wrap' );

				[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
					new SelectFx( el, {
						stickyPlaceholder: false,
						onChange: function(val){
							document.querySelector('span.cs-placeholder').style.backgroundColor = val;
						}
					});
				} );

				new FForm( formWrap, {
					onReview : function() {
						classie.add( document.body, 'overview' ); // for demo purposes only
					}
				} );
			})();
		</script>
	</body>
</html>
