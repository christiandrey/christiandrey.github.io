(function() {
  $('.overlay').css('height','100%');
  $(document).ready(function(e) {
	  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
$('#candidate').html((getCookie('contestant').replace('+',' ')));
	  var curqueindex;
	  $curque = 1;
	  $totalque = 0;
	  $curquetext='';
	  $anstime = 0;
	  $totaltime = 0;
	  var tick = '';
	  var questionsindex = [];
	  var init;
	  $.post('php/initcall.php',{user:"contestant"},function(data){
		  $totalque=data;
		  for(init=0; init<$totalque;init++){
			  questionsindex.push(init+1);
		  }
		  $.post('php/secondcall.php',{user:"contestant"},function(data){
			  $obj = data;
			  $obj = data.split(",");
			  $obj.pop();
			  loadquery($totalque);
			  timer(12);
		  });
		  });
	  function timer(totaltime){
	  $anstime = 0;
	  function tickertimer(){
		  $curtime = totaltime;
		  $totaltime = $curtime;
		  $('#timercolor').css('border-color','#26D765');
		  $('#timercolor').velocity({borderColor:'#f03939'},{duration:totaltime*1000});
		  $('#curquestion').html($curque+'/'+$totalque);
		  if ($curtime < 10){
			  $('#timer').html('00:0'+$curtime);
		}
		else {
			 $('#timer').html('00:'+$curtime);
		}
		  tick = setInterval(function(){
			  $curtime = $curtime - 1;
			  $anstime = (totaltime - $curtime)-1;
			  $('#timercolor').css('opacity','0.5');
			  setTimeout(function(){$('#timercolor').css('opacity','1');},100);
			  if ($curtime > 0 || $curtime == 0){
				  if ($curtime < 10){
					  $('#timer').html('00:0'+$curtime);
				  }
				  else {
				  $('#timer').html('00:'+$curtime);
				  }
			  }
			  else {
				  clearInterval(tick);
				  $curtime = totaltime;
				  if ($curque == $totalque){
					  var subver = submitans(curqueindex);
					  switch(subver){
						  case 0:
						  $('.overlay').css('display','block');
						  $('.overlay').css('visibility','visible');
						  setTimeout(function(){
							  window.location = 'index.php';
						  },3000);
						  break;
						  case 1:
						  $('#answer').prop('disabled',true);
						  alert('Submit was unsuccessful.\nPlease click on the \'Submit Answer\' to retry.');
						  break;
					  }

				  }
				  else{
				  var subver = submitans(curqueindex);
				  switch(subver){
					  case 0:
					  tickertimer();
					  $('#answer').prop('disabled',false);
		  			  $('#answer').val('');
					  $curque = $curque + 1;
					  $('#curquestion').html($curque+'/'+$totalque);
					  loadquery($totalque);
					  break;
					  case 1:
					  clearInterval(tick);
					  $('#answer').prop('disabled',true);
					  alert('Submit was unsuccessful.\nPlease click on the \'Submit Answer\' to retry.');
					  break;
				  }
				  }
			  }
		  },1000);
	  }
	  tickertimer();
	  }
	  function loadquery(totalque){
		  questionsindex.sort(function(){return 0.5 - Math.random();});
		  curqueindex = questionsindex[0];
		  $curquetext = $obj[curqueindex-1];
		  $('.question').html($curquetext);
		  questionsindex.shift();
	  }
	  function submitans(subcurque){
		  $result = 0;
		  $subcurque = subcurque;
		  $subans = $('#answer').val();
		  $.post('php/subans.php',{user:"contestant",subcurque:$subcurque,subans:$subans,anstime:$anstime},function(data){
			  $result = data;
		  });
		  return $result;
	  }

	$('#resultform').submit(function(e) {
		e.preventDefault();
		var subver = submitans(curqueindex);
		  switch(subver){
			  case 0:
			  $curtime = $totaltime;
			  clearInterval(tick);
			  $('#answer').val('');
			  if($curque == $totalque){
				   $('.overlay').css('display','block');
				   $('.overlay').css('visibility','visible');
				   setTimeout(function(){
					   window.location = 'index.php';
					   },3000);
			  }
			  else{
			  $curque = $curque + 1;
			  $('#curquestion').html($curque+'/'+$totalque);
			  timer($curtime);
			  loadquery($totalque);
			  tickertimer();
			  }
			  break;
			  case 1:
			  clearInterval(tick);
			  $('#answer').prop('disabled',true);
			  alert('Submit was unsuccessful.\nPlease click on the \'Submit Answer\' to retry.');
			  break;
		  }
    });
});
})();
