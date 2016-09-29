(function() {
  (function() {
  	$(document).ready(function(e) {
         $("#bgimg").css('height','100%');
		 switch(Math.floor(Math.random() * 11)) {
			 case 0:
			 $('#bgimg').css('background-image','url(images/1.jpg)');
			 break;
			 case 1:
			 $('#bgimg').css('background-image','url(images/2.jpg)');
			 break;
			 case 2:
			 $('#bgimg').css('background-image','url(images/3.jpg)');
			 break;
			 case 3:
			 $('#bgimg').css('background-image','url(images/4.jpg)');
			 break;
			 case 4:
			 $('#bgimg').css('background-image','url(images/5.jpg)');
			 break;
			 case 5:
			 $('#bgimg').css('background-image','url(images/6.jpg)');
			 break;
			 case 6:
			 $('#bgimg').css('background-image','url(images/7.jpg)');
			 break;
			 case 7:
			 $('#bgimg').css('background-image','url(images/8.jpg)');
			 break;
			 case 8:
			 $('#bgimg').css('background-image','url(images/9.jpg)');
			 break;
			 case 9:
			 $('#bgimg').css('background-image','url(images/10.jpg)');
			 break;
			 case 10:
			 $('#bgimg').css('background-image','url(images/11.jpg)');
			 break;
		 };


		 $('#beginbtn').click(function(e) {
            $('#ctn1').css('right','200px');
			$('#ctn1').css('opacity','0');
			$('#ctn2').css('display','block');
			$('#ctn2').delay(1000,function() {
				$('#ctn2').css('right','30px');
				$('#ctn2').css('opacity','1');
			});
			$('#ctn1').delay(1000,function() {
				css('display','none');
			});
        });

		$('#loginbtn').click(function(e) {
			$matno = $('#matno').val();
			$surname = $('#surname').val();
			$logged = "user";
			if ($matno == "" || $surname == ""){
				$('#errtext').css('opacity','1');
				$('#errtext').animate({right:'+=5px'},100);
				$('#errtext').animate({right:'-=5px'},100);
				$('#errtext').animate({right:'+=4px'},100);
				$('#errtext').animate({right:'-=4px'},100);
				$('#errtext').animate({right:'+=3px'},100);
				$('#errtext').animate({right:'-=3px'},100);
				$('#errtext').animate({right:'+=2px'},100);
				$('#errtext').animate({right:'-=2px'},100);
			}
			else {
			$.post('php/verlog.php',{matno:$matno,surname:$surname,logged:$logged},function(data){if(data == '0'){window.location="profile.php";};if(data =='1'){ $('#errtext').css('opacity','1');$('#errtext').animate({right:'+=5px'},100);
				$('#errtext').animate({right:'-=5px'},100);
				$('#errtext').animate({right:'+=4px'},100);
				$('#errtext').animate({right:'-=4px'},100);
				$('#errtext').animate({right:'+=3px'},100);
				$('#errtext').animate({right:'-=3px'},100);
				$('#errtext').animate({right:'+=2px'},100);
				$('#errtext').animate({right:'-=2px'},100);};if(data == '2'){alert('You have already filled in your data. Thank you.')};});
			};
        });

		$('#ctn2').keypress(function(e) {
        if (e.which == 13) {
			$('#loginbtn').click();
		};
    });

      });
  })();
})();
