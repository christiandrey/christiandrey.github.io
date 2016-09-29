(function() {
  var $submit = $('.js-submit');
  var $cont_screen = $('.js-cont_screen');
  var $prev = $('.js-prev');
  var $next = $('.js-next');
  var $conf = $('.js-conf');
  var $conftext = $('.js-conftext');
  var $review = $('.js-review');
  var $submit_fin = $('.js-submit_fin');
  var $confwrap = $('.js-confwrap');

	function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
	};
$('.cont1,.cont2,.cont3,.cont4,.cont5,.cont6').hide();
$senddata = "";$roll="";

	$.post('retrievecont.php',{posi:"1"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('#posi1').find($iden).show();
		$('#posi1').find($iden).find('#name_hold').find('#cont_name').html($obj[i]);
	}
	});

	$.post('retrievecont.php',{posi:"2"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('#posi2').find($iden).show();
		$('#posi2').find($iden).find('#name_hold').find('#cont_name').html($obj[i]);
	}
	});

	$.post('retrievecont.php',{posi:"3"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('#posi3').find($iden).show();
		$('#posi3').find($iden).find('#name_hold').find('#cont_name').html($obj[i]);
	}
	});

	$.post('retrievecont.php',{posi:"4"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('#posi4').find($iden).show();
		$('#posi4').find($iden).find('#name_hold').find('#cont_name').html($obj[i]);
	}
	});

	$.post('retrievecont.php',{posi:"5"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('#posi5').find($iden).show();
		$('#posi5').find($iden).find('#name_hold').find('#cont_name').html($obj[i]);
	}
	});

	$.post('retrievecont.php',{posi:"6"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('#posi6').find($iden).show();
		$('#posi6').find($iden).find('#name_hold').find('#cont_name').html($obj[i]);
	}
	});

  $(document).ready(function(event) {
	  $pollname = getCookie("pollname");
	  $fname = getCookie("fname");
	  $lname = getCookie("lname");
	  $matno = getCookie("matno");
	  $level = getCookie("level");
	  $('#votername').html($fname + " " + $lname);
	  $('#voterlevel').html($level);
	  $('#votermat').html($matno);

	  $strr = 'url(\"images/'+$pollname+'/11.jpg\") no-repeat scroll center center / cover';
	  $('#posi1').find('#contwrap').find('.cont1').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/12.jpg\") no-repeat scroll center center / cover';
	  $('#posi1').find('#contwrap').find('.cont2').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/13.jpg\") no-repeat scroll center center / cover';
	  $('#posi1').find('#contwrap').find('.cont3').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/14.jpg\") no-repeat scroll center center / cover';
	  $('#posi1').find('#contwrap').find('.cont4').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/15.jpg\") no-repeat scroll center center / cover';
	  $('#posi1').find('#contwrap').find('.cont5').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/16.jpg\") no-repeat scroll center center / cover';
	  $('#posi1').find('#contwrap').find('.cont6').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/21.jpg\") no-repeat scroll center center / cover';
	  $('#posi2').find('#contwrap').find('.cont1').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/22.jpg\") no-repeat scroll center center / cover';
	  $('#posi2').find('#contwrap').find('.cont2').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/23.jpg\") no-repeat scroll center center / cover';
	  $('#posi2').find('#contwrap').find('.cont3').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/24.jpg\") no-repeat scroll center center / cover';
	  $('#posi2').find('#contwrap').find('.cont4').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/25.jpg\") no-repeat scroll center center / cover';
	  $('#posi2').find('#contwrap').find('.cont5').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/26.jpg\") no-repeat scroll center center / cover';
	  $('#posi2').find('#contwrap').find('.cont6').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/31.jpg\") no-repeat scroll center center / cover';
	  $('#posi3').find('#contwrap').find('.cont1').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/32.jpg\") no-repeat scroll center center / cover';
	  $('#posi3').find('#contwrap').find('.cont2').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/33.jpg\") no-repeat scroll center center / cover';
	  $('#posi3').find('#contwrap').find('.cont3').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/34.jpg\") no-repeat scroll center center / cover';
	  $('#posi3').find('#contwrap').find('.cont4').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/35.jpg\") no-repeat scroll center center / cover';
	  $('#posi3').find('#contwrap').find('.cont5').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/36.jpg\") no-repeat scroll center center / cover';
	  $('#posi3').find('#contwrap').find('.cont6').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/41.jpg\") no-repeat scroll center center / cover';
	  $('#posi4').find('#contwrap').find('.cont1').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/42.jpg\") no-repeat scroll center center / cover';
	  $('#posi4').find('#contwrap').find('.cont2').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/43.jpg\") no-repeat scroll center center / cover';
	  $('#posi4').find('#contwrap').find('.cont3').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/44.jpg\") no-repeat scroll center center / cover';
	  $('#posi4').find('#contwrap').find('.cont4').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/45.jpg\") no-repeat scroll center center / cover';
	  $('#posi4').find('#contwrap').find('.cont5').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/46.jpg\") no-repeat scroll center center / cover';
	  $('#posi4').find('#contwrap').find('.cont6').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/51.jpg\") no-repeat scroll center center / cover';
	  $('#posi5').find('#contwrap').find('.cont1').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/52.jpg\") no-repeat scroll center center / cover';
	  $('#posi5').find('#contwrap').find('.cont2').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/53.jpg\") no-repeat scroll center center / cover';
	  $('#posi5').find('#contwrap').find('.cont3').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/54.jpg\") no-repeat scroll center center / cover';
	  $('#posi5').find('#contwrap').find('.cont4').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/55.jpg\") no-repeat scroll center center / cover';
	  $('#posi5').find('#contwrap').find('.cont5').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/56.jpg\") no-repeat scroll center center / cover';
	  $('#posi5').find('#contwrap').find('.cont6').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/61.jpg\") no-repeat scroll center center / cover';
	  $('#posi6').find('#contwrap').find('.cont1').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/62.jpg\") no-repeat scroll center center / cover';
	  $('#posi6').find('#contwrap').find('.cont2').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/63.jpg\") no-repeat scroll center center / cover';
	  $('#posi6').find('#contwrap').find('.cont3').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/64.jpg\") no-repeat scroll center center / cover';
	  $('#posi6').find('#contwrap').find('.cont4').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/65.jpg\") no-repeat scroll center center / cover';
	  $('#posi6').find('#contwrap').find('.cont5').css('background',$strr);

	  $strr = 'url(\"images/'+$pollname+'/66.jpg\") no-repeat scroll center center / cover';
	  $('#posi6').find('#contwrap').find('.cont6').css('background',$strr);

  	  $(".loading").html("<svg width=\'300px\' height=\'300px\'>\n<circle id=\'loader\' cx=\'150\' cy=\'150\' r=\'140\' style=\"fill:none; stroke:#236bad; stroke-width:20\"/></svg>");
  	$ci_x = $("#loader");
  	var rad = $ci_x.attr('r');
  	var len = Math.PI * 2 * rad;
  	$(".loading").css('transform','rotate(-90deg)');
  	$ci_x.css({'stroke-dasharray':len,'stroke-dashoffset':len});

	$('.cont1,.cont2,.cont3,.cont4,.cont5,.cont6').click(function(e){
		$send = $(this);
		$ajaxdata = $(this).attr('data-traveldata');
		$(this).parent().find('.cont1,.cont2,.cont3,.cont4,.cont5,.cont6').find('.cont_name').removeClass('clicked');
		$(this).parent().parent().find($send).find('.cont_name').addClass('clicked');
		$(this).parent().parent().find('.posval').val($ajaxdata);
    });

  	function anim() {
		$ci_x.show();
  	$ci_x.css({'stroke-dasharray':len,'stroke-dashoffset':len});
  	$ci_x.animate({'stroke-dashoffset':0},2000,'easeInOutBack');
  	$ci_x.animate({'stroke-dashoffset':len},2000,'easeInOutBack');
  	};

      $confwrap.hide();
      $conf.css('height','100%');
      $confwrap.css('height','100%');

      	$prev.click(function(e) {
		$prev.hide();
         $leftvall = $cont_screen.position();
    		  $leftval = $leftvall.left;
      		$val = $cont_screen.width()/6;
          $val_m = $val * 5;
          $now = ((Math.abs($leftval) - $val + 1)*-1)+"px";
    	$leftvall = Math.abs($leftval);
      		if ($leftvall > 20) {
      			$cont_screen.css("left",$now);
      		};
    		if($leftvall < 20) {
    			$cont_screen.css("left","0px");
      		};
			setTimeout(function(){$prev.show();},300);
          });

      $review.click(function(e) {
        $confwrap.hide();
      });

	  $('.logo').click(function(e) {
        window.location="voterlogin.php";
    });

      $submit.click(function(e) {
		  if (($('#pos1val').val()) == "" || ($('#pos2val').val()) == "" || ($('#pos3val').val()) == "" || ($('#pos4val').val()) == "" || ($('#pos5val').val()) == "" || ($('#pos6val').val()) == ""){
			  alert('Voting incomplete. Please recheck.');
		  };

		  if (($('#pos1val').val()) !== "" && ($('#pos2val').val()) !== "" && ($('#pos3val').val()) !== "" && ($('#pos4val').val()) !== "" && ($('#pos5val').val()) !== "" && ($('#pos6val').val()) !== ""){
        $confwrap.show();
		$senddata = $('#pos1val').val()+$('#pos2val').val()+$('#pos3val').val()+$('#pos4val').val()+$('#pos5val').val()+$('#pos6val').val();
		  };
      });

      $submit_fin.click(function(e) {
        $conftext.html("Submitting votes...");
        $review.hide();
        $submit_fin.hide();
  	  anim();
  	  $roll = setInterval(function(){anim()},4000);
	  $.post('submitvote.php',{senddata:$senddata},function(data){if (data == "0"){$ci_x.hide();clearInterval($roll);$conftext.html("Votes successfully submitted"); setTimeout(function(){window.location="voterlogin.php"},3000);}; if (data == "1"){clearInterval($roll); $conftext.html("Votes not submitted successfully");$submit_fin.show(); $review.show();};});
      });

      	$next.click(function(e) {
			$next.hide();
              $leftvall = $cont_screen.position();
    		  $leftval = $leftvall.left;
      		$val = $cont_screen.width()/6;
          $val_m = $val * 5;
          $now = ((Math.abs($leftval) + $val - 1)*-1)+"px";
      		if ($leftval != $val_m) {
      			$cont_screen.css("left",$now);
      		};
    		$vall = $val * 4;
    		$leftvall = Math.abs($leftval);
    		$now = ((Math.abs($leftval))*-1)+"px";
    		if($leftvall > $vall) {
      			$cont_screen.css("left",$now);
      		};
			setTimeout(function(){$next.show();},300);
          });
      });
})();
