(function() {
$('.cont1,.cont2,.cont3,.cont4,.cont5,.cont6').hide();

	function posi1() {$.post('getresults.php',{cat:"1",posi:"1"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$left = (i*(100/$len))+'%';
		$wrap_width = ((80.75/6)*$len)+"%";
		$('.posi1').find($iden).show();
		$('.posi1').find('#votes_wrapper').css('width',$wrap_width);
		$('.posi1').find($iden).css('left',$left);
		$('.posi1').find($iden).find('#cont_name').html($obj[i]);
	}
	});

	$.post('getresults.php',{cat:"2",posi:"1"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	$sum = 0;
	for (j=0; j < $len; j++){
		$sum = $sum + parseInt($obj[j]);
	};
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('.posi1').find($iden).find('#cont_votes').html($obj[i]+"/"+$sum+" votes");
		$val = parseInt((parseInt($obj[i],10)/parseInt($sum,10))*100);
		$del = (i + 1)*0.2;
		$('.posi1').find('#votes_wrapper').find($iden).find('#pie').drepie({done:$val, size:100, del:$del});
	}
	});

	$.post('getresults.php',{cat:"3",posi:"1"},function(data){
	$obj = data;
	$('.posi1').find('#wrapper').find('#win_name').html($obj.win);
	$val = parseInt((parseInt($obj.lead,10)/parseInt($obj.sum,10))*100);
	$('.posi1').find('#wrapper').find('#pie_large').drepie({done:$val, size:300});
	$('.posi1').find('#wrapper').find('#win_votes').html($obj.lead+"/"+$obj.sum+" votes");
	},'JSON');
	};

	posi1();

	function posi2() {$.post('getresults.php',{cat:"1",posi:"2"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$left = (i*(100/$len))+'%';
		$wrap_width = ((80.75/6)*$len)+"%";
		$('.posi2').find($iden).show();
		$('.posi2').find('#votes_wrapper').css('width',$wrap_width);
		$('.posi2').find($iden).css('left',$left);
		$('.posi2').find($iden).find('#cont_name').html($obj[i]);
	}
	});

	$.post('getresults.php',{cat:"2",posi:"2"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	$sum = 0;
	for (j=0; j < $len; j++){
		$sum = $sum + parseInt($obj[j]);
	};
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('.posi2').find($iden).find('#cont_votes').html($obj[i]+"/"+$sum+" votes");
		$val = parseInt((parseInt($obj[i],10)/parseInt($sum,10))*100);
		$del = (i + 1)*0.2;
		$('.posi2').find('#votes_wrapper').find($iden).find('#pie').drepie({done:$val, size:100, del:$del});
	}
	});

	$.post('getresults.php',{cat:"3",posi:"2"},function(data){
	$obj = data;
	$('.posi2').find('#wrapper').find('#win_name').html($obj.win);
	$val = parseInt((parseInt($obj.lead,10)/parseInt($obj.sum,10))*100);
	$('.posi2').find('#wrapper').find('#pie_large').drepie({done:$val, size:300});
	$('.posi2').find('#wrapper').find('#win_votes').html($obj.lead+"/"+$obj.sum+" votes");
	},'JSON');
	};

	function posi3() {$.post('getresults.php',{cat:"1",posi:"3"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$left = (i*(100/$len))+'%';
		$wrap_width = ((80.75/6)*$len)+"%";
		$('.posi3').find($iden).show();
		$('.posi3').find('#votes_wrapper').css('width',$wrap_width);
		$('.posi3').find($iden).css('left',$left);
		$('.posi3').find($iden).find('#cont_name').html($obj[i]);
	}
	});

	$.post('getresults.php',{cat:"2",posi:"3"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	$sum = 0;
	for (j=0; j < $len; j++){
		$sum = $sum + parseInt($obj[j]);
	};
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('.posi3').find($iden).find('#cont_votes').html($obj[i]+"/"+$sum+" votes");
		$val = parseInt((parseInt($obj[i],10)/parseInt($sum,10))*100);
		$del = (i + 1)*0.2;
		$('.posi3').find('#votes_wrapper').find($iden).find('#pie').drepie({done:$val, size:100, del:$del});
	}
	});

	$.post('getresults.php',{cat:"3",posi:"3"},function(data){
	$obj = data;
	$('.posi3').find('#wrapper').find('#win_name').html($obj.win);
	$val = parseInt((parseInt($obj.lead,10)/parseInt($obj.sum,10))*100);
	$('.posi3').find('#wrapper').find('#pie_large').drepie({done:$val, size:300});
	$('.posi3').find('#wrapper').find('#win_votes').html($obj.lead+"/"+$obj.sum+" votes");
	},'JSON');
	};

	function posi4() {$.post('getresults.php',{cat:"1",posi:"4"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$left = (i*(100/$len))+'%';
		$wrap_width = ((80.75/6)*$len)+"%";
		$('.posi4').find($iden).show();
		$('.posi4').find('#votes_wrapper').css('width',$wrap_width);
		$('.posi4').find($iden).css('left',$left);
		$('.posi4').find($iden).find('#cont_name').html($obj[i]);
	}
	});

	$.post('getresults.php',{cat:"2",posi:"4"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	$sum = 0;
	for (j=0; j < $len; j++){
		$sum = $sum + parseInt($obj[j]);
	};
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('.posi4').find($iden).find('#cont_votes').html($obj[i]+"/"+$sum+" votes");
		$val = parseInt((parseInt($obj[i],10)/parseInt($sum,10))*100);
		$del = (i + 1)*0.2;
		$('.posi4').find('#votes_wrapper').find($iden).find('#pie').drepie({done:$val, size:100, del:$del});
	}
	});

	$.post('getresults.php',{cat:"3",posi:"4"},function(data){
	$obj = data;
	$('.posi4').find('#wrapper').find('#win_name').html($obj.win);
	$val = parseInt((parseInt($obj.lead,10)/parseInt($obj.sum,10))*100);
	$('.posi4').find('#wrapper').find('#pie_large').drepie({done:$val, size:300});
	$('.posi4').find('#wrapper').find('#win_votes').html($obj.lead+"/"+$obj.sum+" votes");
	},'JSON');
	};

	function posi5(){$.post('getresults.php',{cat:"1",posi:"5"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$left = (i*(100/$len))+'%';
		$wrap_width = ((80.75/6)*$len)+"%";
		$('.posi5').find($iden).show();
		$('.posi5').find('#votes_wrapper').css('width',$wrap_width);
		$('.posi5').find($iden).css('left',$left);
		$('.posi5').find($iden).find('#cont_name').html($obj[i]);
	}
	});

	$.post('getresults.php',{cat:"2",posi:"5"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	$sum = 0;
	for (j=0; j < $len; j++){
		$sum = $sum + parseInt($obj[j]);
	};
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('.posi5').find($iden).find('#cont_votes').html($obj[i]+"/"+$sum+" votes");
		$val = parseInt((parseInt($obj[i],10)/parseInt($sum,10))*100);
		$del = (i + 1)*0.2;
		$('.posi5').find('#votes_wrapper').find($iden).find('#pie').drepie({done:$val, size:100, del:$del});
	}
	});

	$.post('getresults.php',{cat:"3",posi:"5"},function(data){
	$obj = data;
	$('.posi5').find('#wrapper').find('#win_name').html($obj.win);
	$val = parseInt((parseInt($obj.lead,10)/parseInt($obj.sum,10))*100);
	$('.posi5').find('#wrapper').find('#pie_large').drepie({done:$val, size:300});
	$('.posi5').find('#wrapper').find('#win_votes').html($obj.lead+"/"+$obj.sum+" votes");
	},'JSON');
	};

	function posi6() {$.post('getresults.php',{cat:"1",posi:"6"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$left = (i*(100/$len))+'%';
		$wrap_width = ((80.75/6)*$len)+"%";
		$('.posi6').find($iden).show();
		$('.posi6').find('#votes_wrapper').css('width',$wrap_width);
		$('.posi6').find($iden).css('left',$left);
		$('.posi6').find($iden).find('#cont_name').html($obj[i]);
	}
	});

	$.post('getresults.php',{cat:"2",posi:"6"},function(data){
	$obj = data.split(",");
	$obj.pop();
	$len = $obj.length;
	$sum = 0;
	for (j=0; j < $len; j++){
		$sum = $sum + parseInt($obj[j]);
	};
	for(i=0; i<$len; i++){
		$iden = '.cont'+(i + 1);
		$('.posi6').find($iden).find('#cont_votes').html($obj[i]+"/"+$sum+" votes");
		$val = parseInt((parseInt($obj[i],10)/parseInt($sum,10))*100);
		$del = (i + 1)*0.2;
		$('.posi6').find('#votes_wrapper').find($iden).find('#pie').drepie({done:$val, size:100, del:$del});
	}
	});

	$.post('getresults.php',{cat:"3",posi:"6"},function(data){
	$obj = data;
	$('.posi6').find('#wrapper').find('#win_name').html($obj.win);
	$val = parseInt((parseInt($obj.lead,10)/parseInt($obj.sum,10))*100);
	$('.posi6').find('#wrapper').find('#pie_large').drepie({done:$val, size:300});
	$('.posi6').find('#wrapper').find('#win_votes').html($obj.lead+"/"+$obj.sum+" votes");
	},'JSON');
	};

  $(document).ready(function(e){

	$('#print').click(function(e) {
		window.location="printpdf.php"
    });

    $('.posi2,.posi3,.posi4,.posi5,.posi6').hide();

    $('#next0').click(function(e){
      $('.posi1,.posi3,.posi4,.posi5,.posi6').fadeOut();
      $('.posi2').fadeIn();
	  posi2();
    });

    $('#next1').click(function(e){
      $('.posi1,.posi2,.posi4,.posi5,.posi6').fadeOut();
      $('.posi3').fadeIn();
	  posi3();
    });

    $('#next2').click(function(e){
      $('.posi1,.posi3,.posi2,.posi5,.posi6').fadeOut();
      $('.posi4').fadeIn();
	  posi4();
    });

    $('#next3').click(function(e){
      $('.posi1,.posi3,.posi4,.posi2,.posi6').fadeOut();
      $('.posi5').fadeIn();
	  posi5();
    });

    $('#next4').click(function(e){
      $('.posi1,.posi2,.posi4,.posi5,.posi3').fadeOut();
      $('.posi6').fadeIn();
	  posi6();
    });

    $('#prev1').click(function(e){
      $('.posi2,.posi3,.posi4,.posi5,.posi6').fadeOut();
      $('.posi1').fadeIn();
	  posi1();
    });

    $('#prev2').click(function(e){
      $('.posi1,.posi3,.posi4,.posi5,.posi6').fadeOut();
      $('.posi2').fadeIn();
	  posi2();
    });

    $('#prev3').click(function(e){
      $('.posi2,.posi1,.posi4,.posi5,.posi6').fadeOut();
      $('.posi3').fadeIn();
	  posi3();
    });

    $('#prev4').click(function(e){
      $('.posi2,.posi3,.posi1,.posi5,.posi6').fadeOut();
      $('.posi4').fadeIn();
	  posi4()
    });

    $('#prev5').click(function(e){
      $('.posi2,.posi3,.posi4,.posi1,.posi6').fadeOut();
      $('.posi5').fadeIn();
	  posi5();
    });
  });
})();
