(function() {
  var $submit = $('.js-submit');
  var $downhold = $('.js-downhold');
  var $pic_link = $('.js-pic_link');
  var $poscont = $('.js-poscont');
  var $posholder = $('.js-posholder');
  var $nextbtn1 = $('.js-nextbtn1');
  var $downhold2 = $('.js-downhold2');
  var $matcont = $('.js-matcont');
  var $matholder = $('.js-matholder');
  var $nextbtn0 = $('.js-nextbtn0');
  var $prevbtn = $('.js-prevbtn');
  var $pollcont = $('.js-pollcont');
  var $pollholder = $('.js-pollholder');
  var $downhold3 = $('.js-downhold3');
  var $ver_pass = $('.js-ver_pass');
  var $new_pass = $('.js-new_pass');
  var $old_pass = $('.js-old_pass');
  var $nextbtn2 = $('.js-nextbtn2');

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

  $(document).ready(function(e) {

	  $('#adminname').html(getCookie("a_uname"));
	  var options = {
		  beforeSend: function() {
			  $('.p_bar').css('width','0%');
			  $('.p_bar').fadeIn();
		  },
		  uploadProgress: function(event, position, total, percentComplete) {
			  $('.p_bar').css('width',percentComplete+'%');
		  },
		  success: function() {
			  $('.p_bar').fadeOut();
			  $('.p_bar').css('width','0%');
		  },
		  complete: function() {
			  $('.p_bar').css('width','100%');
			  $('.pic_link').html('Select Picture');
		  },
		  error: function(response) {
			  alert('Unable to upload image. ' + response)
		  }
	  };

	  $("#picup").ajaxForm(options);
	  $("#csvup").ajaxForm(function(){alert('Contents of the csv file have been uploaded');$('#hiddenpist').val("0");$('#csv').css('background-image','url(images/csv.png)');});

    $(".loading").html("<svg width=\'300px\' height=\'300px\'>\n<circle id=\'loader\' cx=\'150\' cy=\'150\' r=\'140\' style=\"fill:none; stroke:#236bad; stroke-width:20\"/></svg>");
  	$ci_x = $("#loader");
	$('#loading_sign').hide();
	$('#hiddenpost').val("1");
  	var rad = $ci_x.attr('r');
  	var len = Math.PI * 2 * rad;
  	$(".loading").css('transform','rotate(-90deg)');
  	$ci_x.css({'stroke-dasharray':len,'stroke-dashoffset':len});

  $('#picture2').hide();
  $(".overlay").css('height','100%');
  $(".overlay,.close_btn,.load_poll,.createpoll,.chg_user,.chg_pass,.nextbtn2,.reg_cont,.reg_vot,.nextbtn0,.nextbtn1,.nextbtn2,.prevbtn,.done,.loading_polls").hide();
  $nextbtn0.css('height','100%');
  $('.loading_polls').css('height','100%');
  $nextbtn1.css('height','100%');
  $prevbtn.css('height','100%');
  $nextbtn2.css('height','100%');
  $nextbtn2.css('opacity','0');

    function anim() {
  	$ci_x.css({'stroke-dasharray':len,'stroke-dashoffset':len});
  	$ci_x.animate({'stroke-dashoffset':0},2000,'easeInOutBack');
  	$ci_x.animate({'stroke-dashoffset':len},2000,'easeInOutBack');
  	};

	$('#righthold5').click(function(e) {
        $uname = $('#user_name').val();
		if ($uname !== "") {
			$.post('change.php',{uname:$uname},function(data){if (data == "0"){$('.chg_user').fadeOut(); $('.done').fadeIn(); setTimeout(function(){$('#close_btn').click()},2000); $('#adminname').html(getCookie("a_uname"))}; if (data == "1"){alert("Username change failed")}})};
			if ($uname = ""){
				alert("Username field cannot be left empty");
			};
    });

	$('#nextbtn2').click(function(e) {
		$opass = $('#old_pass').val();
        $npass = $('#ver_pass').val();
		if ($opass !== "" && $npass !== "") {
			$.post('changesec.php',{opass:$opass, npass:$npass},function(data){if (data == "0"){$('.chg_pass').fadeOut(); $('.done').fadeIn(); setTimeout(function(){$('#close_btn').click()},2000); $('#adminname').html(getCookie("a_uname"))}; if (data == "1"){alert("Password change failed")}})};
			if ($npass = ""){
				alert("Incomplete details. Please recheck.");
			};
    });

	$('#user_name').keypress(function(e) {
        if (e.which == 13) {
			$('#righthold5').click();
		};
    });

	$('#ver_pass').keypress(function(e) {
        if (e.which == 13) {
			$('#nextbtn2').click();
		};
    });

    $('#righthold4').click(function(e) {
	  $poll = $('#hiddenpest').val();
	  if($poll !== "Empty" && $poll  !== "") {
	  $('.loading_polls').fadeIn();
	  	document.cookie="latest="+$poll;
  	  	anim();
  	  	$int = setInterval(function(){anim()},4000);
      	$tim = setTimeout(function(){window.location = 'results.php'},2000);
	  };

	  if($poll == "Empty" || $poll  == "") {
		  alert('Please pick a valid poll name');
	  };

  	});

	$('#position1,#position2,#position3,#position4,#position5,#position6').click(function(e) {
		$posi = $(this).attr('data-travelindex');
        $('#hiddenpost').val($posi);
    });

	$('#level1,#level2,#level3,#level4,#level5,#level').click(function(e) {
		$posi = $(this).attr('data-travelindex');
        $('#hiddenpast').val($posi);
    });

	$('#righthold2').click(function(e) {
        $cont = $('#contname').val();
		$posi = $('#hiddenpost').val();
		if ($cont != "") {
			$.post('insertcont.php',{posi:$posi,cont:$cont},function(){$('#contname').val("")});
		};
		if ($cont == "") {
			alert('Please enter a valid contestant name');
		};
	});

	$('#righthold3').click(function(e) {
		$matno = $('#voter_name').val();
		$fname = $('#first_name').val();
		$lname = $('#last_name').val();
		$level = $('#hiddenpast').val();
		if ($matno != "" && $fname != "" && $lname != "" && $level != "") {
			$.post('regvoter.php',{matno:$matno,fname:$fname,lname:$lname,level:$level},function(){$('#voter_name,#first_name,#last_name').val("")});
		};
		if ($matno == "" || $fname == "" || $lname == "" || $level == "") {
			alert('Details incomplete. Please recheck');
		};
	});

  	$('.upload').click(function(e){
		$('#picup').submit();
  	});

  	$('.pic_link').click(function(e){
    	$('#picture2').click();
    });

    $('#picture2').change(function(e){
  		$test = $('#picture2').val();
  		$('.pic_link').html($test);
    });

	$('#csv').click(function(e) {
		if ($('#hiddenpist').val() == "0"){
			$('#csvin').click();
		};
		if ($('#hiddenpist').val() == "1"){
			$('#csvup').submit();
		};
    });

	$('#csvin').change(function(e) {
        if ($('#csvin').val() !== ""){
			$('#hiddenpist').val("1");
			$('#csv').css('background-image','url(images/csvup.png)');
		};
		if ($('#csvin').val() == ""){
			$('#hiddenpist').val("0");
			$('#csv').css('background-image','url(images/csv.png)');
		};
    });

    $(".newpolls").click(function(e) {
      $('.overlay').fadeIn();
      $('.close_btn').delay(200).show('slow');
      $('.createpoll').delay(200).show(1);
    });

    $('.close_btn').click(function(e)  {
      $('.close_btn').hide('fast');
      $('.overlay').fadeOut();
    	$('.createpoll,.load_poll,.chg_user,.chg_pass,.nextbtn2,.reg_vot,.reg_cont,.nextbtn0,.nextbtn1,.nextbtn2,.prevbtn,.done').hide(1);
    });

      $(".loadpolls").click(function(e) {
		   $.post('getpolllist.php',function(data){
	  $obj = data;
	  $obj = data.split(",");
	  $obj.pop();
	  $len = $obj.length;
	  for(i=0; i<$len; i++){
		$iden = '#poll'+(i + 1);
		$($iden).html($obj[i]);
		$('#hiddenpest').val($('#poll1').html());
	  };
  });
      $('.overlay').fadeIn();
      $('.close_btn').delay(200).show('slow');
      $('.load_poll').delay(200).show(1);
    });

      $(".ch_user").click(function(e) {
      $('.overlay').fadeIn();
      $('.close_btn').delay(200).show('slow');
      $('.chg_user').delay(200).show(1);
    });

      $(".ch_pass").click(function(e) {
      $('.overlay').fadeIn();
      $('.close_btn').delay(200).show('slow');
      $('.chg_pass').delay(200).show(1);
      $('.nextbtn2').delay(200).show(1);
    });

    $('#righthold1').click(function(e) {
		if ($('#pollname').val() == "") {
			alert('Please enter a valid poll name');
		};
		if ($('#pollname').val() != "") {
			loadanim();
			$pollname = $('#pollname').val();
			$year = new Date();
			$date = $year.getFullYear();
			$fin_pollname = $date + $pollname;
			$.post('createpoll.php',{pollname:$fin_pollname},function(data){$obj = data; if($obj.respcode =='0'){ stoploadanim(); proceed()};if($obj.respcode =='1'){ alert($obj.resp); stoploadanim();};},'JSON');
		};
    });

	$('#contname').keypress(function(e) {
        if (e.which == 13) {
			$('#righthold2').click();
		};
    });

	$('#pollname').keypress(function(e) {
        if (e.which == 13) {
			$('#righthold1').click();
		};
    });

	$('#voter_name,#first_name,#last_name').keypress(function(e) {
        if (e.which == 13) {
			$('#righthold3').click();
		};
    });
    $inter = ""
	function loadanim() {
		$('#loading_sign').show();
		$('#loadingtext').html("Working.");
		$('#loading_sign').animate({width:'100%'},20000);
	$inter = setInterval(function(){
			setTimeout(function(){$('#loadingtext').html("Working.");},1000);
			setTimeout(function(){$('#loadingtext').html("Working..");},2000);
			setTimeout(function(){$('#loadingtext').html("Working...");},3000);
		},3000);
	};
	function stoploadanim() {
		clearInterval($inter);
		$('#loading_sign').hide();
		$('#loading_sign').animate({width:'0%'},10);
	};

	function proceed() {
		$('.createpoll').fadeOut();
		$('.reg_cont').fadeIn();
		$('.nextbtn1').fadeIn();
	};

    $('.nextbtn1').click(function(e) {
      $('.reg_cont').fadeOut();
      $('.nextbtn1').fadeOut();
      $('.reg_vot').fadeIn();
      $('.nextbtn0').fadeIn();
      $('.prevbtn').fadeIn();
    });

    $('.nextbtn0').click(function(e) {
      $('.nextbtn0').fadeOut();
      $('.prevbtn').fadeOut();
      $('.reg_vot').fadeOut();
      $('.done').fadeIn();
	  window.location="createpdf.php";
	  setTimeout(function(){$('#close_btn').click()},3000);
    });

      $('.prevbtn').click(function(e){
        $('.nextbtn0').fadeOut();
        $('.nextbtn1').fadeIn();
        $('.prevbtn').fadeOut();
        $('.reg_vot').fadeOut();
        $('.reg_cont').fadeIn();
      });

    $downhold.click(function(e) {
      $posholder.css('overflow','visible');
      $posholder.css('height','312px');
      });

    $downhold2.click(function(e) {
      $matholder.css('overflow','visible');
      $matholder.css('height','260px');
      });

    $downhold3.click(function(e) {
      $pollholder.css('overflow','visible');
      $pollholder.css('height','312px');
      });

    function shift(indice) {
      $top = (((52 * indice)-52)*-1) + "px";
      $posholder.css('overflow','hidden');
      $poscont.css('top',$top);
      $posholder.css('height','52px');
    };

    function shaft(indice) {
      $top2 = (((52 * indice)-52)*-1) + "px";
      $matholder.css('overflow','hidden');
      $matcont.css('top',$top2);
      $matholder.css('height','52px');
    };

    function sheft(indice) {
      $top3 = (((52 * indice)-52)*-1) + "px";
      $pollholder.css('overflow','hidden');
      $pollcont.css('top',$top3);
      $pollholder.css('height','52px');
    };

    $("#position1").click(function(e) {
      	shift(1);
    });
    $("#position2").click(function(e) {
      	shift(2);
    });
    $("#position3").click(function(e) {
      	shift(3);
    });
    $("#position4").click(function(e) {
      	shift(4);
    });
    $("#position5").click(function(e) {
      	shift(5);
    });
    $("#position6").click(function(e) {
      	shift(6);
    });

    $("#level1").click(function(e) {
      	shaft(1);
    });
    $("#level2").click(function(e) {
      	shaft(2);
    });
    $("#level3").click(function(e) {
      	shaft(3);
    });
    $("#level4").click(function(e) {
      	shaft(4);
    });
    $("#level5").click(function(e) {
      	shaft(5);
    });

    $("#poll1").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(1);
    });
    $("#poll2").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(2);
    });
    $("#poll3").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(3);
    });
    $("#poll4").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(4);
    });
    $("#poll5").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(5);
    });
    $("#poll6").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(6);
    });
    $("#poll7").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(7);
    });
    $("#poll8").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(8);
    });
    $("#poll9").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(9);
    });
    $("#poll10").click(function(e) {
		$val = $(this).html();
		$('#hiddenpest').val($val);
      	sheft(10);
    });
  });

    $new_pass.keyup(function(e) {
        if ($(this).val() != "") {
    			$("#check2").css('opacity','1');
    		};
    		if ($(this).val() == "") {
    			$("#check2").css('opacity','0');
          $("#check3").css('opacity','0');
          $nextbtn2.css('opacity','0');
    		};
    });

    $ver_pass.keyup(function(e) {
  	  $value = $new_pass.val();
        if ($(this).val() != $value) {
    			$("#check3").css('opacity','0');
          $nextbtn2.css('opacity','0');
    		};
    		if ($(this).val() == $value) {
    			$("#check3").css('opacity','1');
          $nextbtn2.css('opacity','1');
    		};
      	if ($(this).val() == "") {
    			$("#check3").css('opacity','0');
          $nextbtn2.css('opacity','0');
    		};
      });
})();
