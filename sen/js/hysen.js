(function() {
	slideInUp('.whitebutton-2',0.2);
	slideInUp('.whitebutton-1',0.4);
	$simmethod = 0; //1 is pressure and 2 is temperature
	$simmodel = 0;
	$calcval = 0;
	$curview = 0;
	$graphtitle = '';
	var xaxisdata=[0,0,0,0,0,0,0,0,0];
	var yaxisdata=[0,0,0,0,0,0,0,0,0];
    var pressureerr=[0.156869369,0.295833333,0,0.324774775,0,0,0];
    var temperatureerr=[0.069738,0.047323,0.095268,0.587796,0.051681,0,0,0.049191,0.055417,0.043587];
	var tablehead=[];
	var pressurearray=['Pressure: Ostergaard et al','Pressure: Wilcox et al','Pressure: Hammerschmidt','Pressure: Makogon (Modified)','Pressure: Safamirzael','Pressure: Baiilie-Wilchert','Pressure: Mann et al'];
    var psimaccuracy=[1,2,3,4,5,6,7,8];
	var psimarray=['siposte','sipwil','siphamm','sipmak','sipsafa','sipbail','sipmann'];
	var tsimarray=['sitberg','sitwil','sithamm','sitkob','sitsafa','sitbail','sitmann','sitsun','sittow','sitmot'];
    var tsimaccuracy=[1,2,3,4,5,6,7,8,9,10];
	var temparray=['Temperature: Berge et al','Temperature: Wilcox et al','Temperature: Hammerschmidt','Temperature: Kobayashi et al','Temperature: Safamirzael','Temperature: Baillie-Wilchert','Temperature: Mann et al','Temperature: Sun at al','Temperature: Towler et al','Temperature: Motiee'];
	$('#retotal').prop('readonly',true);

  $(document).ready(function(e){
      $('.msgcounter, .simsgcounter').click(function(){
          alert('No new notifications\nYou\'re good to go!')
      })
	  function licensever(){
		  var end = new Date(2016,11,31);
		  var licend = (new Date(end.getFullYear(), end.getMonth(), end.getDate())).getTime();
		  var today = (new Date()).getTime();
		  var days = Math.round((licend - today)/(1000*60*60*24));
		  $('.dayscounter, .sidayscounter').html(days+' days');
	  }
	  licensever();
	  function log10(val){
		  return Math.log(val)/Math.LN10;
	  }
	  //declare countUp options
	  var countupoptions = {
  useEasing : true,
  useGrouping : true,
  separator : '',
  decimal : '.',
  prefix : '',
  suffix : ''
	  };
	  //end declare countUp options

	  //begin draw table
	  function drawtable(){
	  switch ($simmethod){
		  case 1:
		  $initialT = $tempdata - 36;
		  tablehead.length=0;
		  tablehead.push('Data point','Temp (K)','Press (psia)','Press (bar)','Press (kPa)','Press (atm)');
		  $graphtitle = pressurearray[$simmodel-1];
		  for ($z=0;$z<=8;$z++){
			  xaxisdata[$z] = $initialT.toFixed(2);//Temperature scale
			  yaxisdata[$z] = processsim(1,$simmodel,$pressdata,$initialT,$ggravv,$fm);//Pressure scale
			  if (xaxisdata[$z] == 'NaN' || xaxisdata[$z] == 'Infinity'){
				  xaxisdata[$z] = 0;
			  }
			  if (yaxisdata[$z] == 'NaN' || yaxisdata[$z] == 'Infinity'){
				  yaxisdata[$z] = 0;
			  }
			  $initialT = $initialT+9;
		  }
		  break;
		  case 2:
		  $initialP = $pressdata/256;
		  tablehead.length=0;
		  tablehead.push('Data point','Press (psia)','Temp (K)','Temp (<sup>o</sup>C)','Temp (<sup>o</sup>F)','Temp (R)');
		  $graphtitle = temparray[$simmodel-1];
		  for ($z=0;$z<=8;$z++){
			  xaxisdata[$z] = processsim(2,$simmodel,$initialP,$tempdata,$ggravv,$fm);//Temperature scale
			  yaxisdata[$z] = $initialP.toFixed(2);//Pressure scale
			  if (xaxisdata[$z] == 'NaN' || xaxisdata[$z] == 'Infinity'){
				  xaxisdata[$z] = 0;
			  }
			  if (yaxisdata[$z] == 'NaN' || yaxisdata[$z] == 'Infinity'){
				  yaxisdata[$z] = 0;
			  }
			  $initialP = $initialP * 4;
		  }
		  break;
	  }

	  var table = $('<table />');
	  table[0].border = '1';
	  table[0].id = 'sentable';

	  var row = $(table[0].insertRow(-1));
	  var headerCellone = $("<th />");
	  headerCellone.attr('colspan','6');
	  headerCellone.html($graphtitle);
	  headerCellone.attr('class','headone');
	  row.append(headerCellone);

	  row = $(table[0].insertRow(-1));
	  for (var i = 0; i<6; i++){
		  var headerCell = $("<th />");
		  headerCell.html(tablehead[i]);
		  headerCell.attr('class','headtwo');
		  row.append(headerCell);
	  }

	  for (var i = 0; i<9; i++){
		  row = $(table[0].insertRow(-1));
		  for (var j = 0;j<6; j++){
			  var cell = $("<td />");
			  cell.attr('class','cells');
			  if ($simmethod == 1){
			  switch(j){
				  case 0:
				  cell.html(i+1);
				  break;
				  case 1:
				  cell.html(xaxisdata[i]);
				  break;
				  case 2:
				  cell.html(yaxisdata[i]);
				  break;
				  case 3:
				  cell.html(senunit(1,3,yaxisdata[i]).toFixed(2));
				  break;
				  case 4:
				  cell.html(senunit(1,1,yaxisdata[i]).toFixed(2));
				  break;
				  case 5:
				  cell.html(senunit(1,2,yaxisdata[i]).toFixed(2));
				  break;
			  }
			  }
			  if ($simmethod == 2){
			  switch(j){
				  case 0:
				  cell.html(i+1);
				  break;
				  case 1:
				  cell.html(yaxisdata[i]);
				  break;
				  case 2:
				  cell.html(xaxisdata[i]);
				  break;
				  case 3:
				  cell.html(senunit(2,10,xaxisdata[i]).toFixed(2));
				  break;
				  case 4:
				  cell.html(senunit(2,12,xaxisdata[i]).toFixed(2));
				  break;
				  case 5:
				  cell.html(senunit(2,11,xaxisdata[i]).toFixed(2));
				  break;
			  }
			  }
			  row.append(cell);
		  }
		  }
		  $('.tablemaindiv').html("");
		  $('.tablemaindiv').append(table);
		  $('#sentable').trigger('create');
	  };
	  //end draw table

	  //begin charting function
	  function drawchart(){
	  switch ($simmethod){
		  case 1:
		  $initialT = $tempdata - 36;
		  $graphtitle = pressurearray[$simmodel-1];
		  for ($z=0;$z<=8;$z++){
			  xaxisdata[$z] = $initialT.toFixed(2);//Temperature scale
			  yaxisdata[$z] = processsim(1,$simmodel,$pressdata,$initialT,$ggravv,$fm);//Pressure scale
			  if (xaxisdata[$z] == 'NaN' || xaxisdata[$z] == 'Infinity'){
				  xaxisdata[$z] = 0;
			  }
			  if (yaxisdata[$z] == 'NaN' || yaxisdata[$z] == 'Infinity'){
				  yaxisdata[$z] = 0;
			  }
			  $initialT = $initialT+9;
		  }
		  break;
		  case 2:
		  $initialP = $pressdata/256;
		  $graphtitle = temparray[$simmodel-1];
		  for ($z=0;$z<=8;$z++){
			  xaxisdata[$z] = processsim(2,$simmodel,$initialP,$tempdata,$ggravv,$fm);//Temperature scale
			  yaxisdata[$z] = $initialP.toFixed(2);//Pressure scale
			  if (xaxisdata[$z] == 'NaN' || xaxisdata[$z] == 'Infinity'){
				  xaxisdata[$z] = 0;
			  }
			  if (yaxisdata[$z] == 'NaN' || yaxisdata[$z] == 'Infinity'){
				  yaxisdata[$z] = 0;
			  }
			  $initialP = $initialP * 4;
		  }
		  break;
	  }

	  var lineChartData = {
		  labels: [xaxisdata[0],xaxisdata[1],xaxisdata[2],xaxisdata[3],xaxisdata[4],xaxisdata[5],xaxisdata[6],xaxisdata[7],xaxisdata[8]],
		  datasets: [
		  {
			  label: $graphtitle,
			  fillColor : gradientColor,
			  gradientColors:["#620709","#f03939"],
			  strokeColor : "rgba(0,0,0,0)",
			  pointColor : "rgba(48,48,48,1)",
			  pointStrokeColor : "rgba(48,48,48,1)",
			  pointDotRadius: 2,
			  pointHighlightFill : "#fff",
			  pointHighlightStroke : "rgba(220,220,220,1)",
			  data : [yaxisdata[0],yaxisdata[1],yaxisdata[2],yaxisdata[3],yaxisdata[4],yaxisdata[5],yaxisdata[6],yaxisdata[7],yaxisdata[8]]
		  },]};

		  var ctx = document.getElementById("canvas").getContext("2d");

		  window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true,
			xAxisLabel:"Temperature (K)",
			yAxisLabel:"Pressure (psia)",
			annotateDisplay:true,
			graphTitle:$graphtitle,
			annotateFontSize:9,
			savePng:true,
			savePngBackgroundColor:"white",
			savePngName:$graphtitle+'-simulationchart',
			graphTitleFontFamily:'Lato Regular',
			inGraphDataFontFamily:'Lato Regular',
			animationLeftToRight:true,
			savePngOutput:  "Save",
			savePngFunction: "mousedown left",
			responsiveMinHeight:$('.chartdiv').height(),
			xAxisFontFamily:'Lato Regular',
			yAxisFontFamily:'Lato Regular',
			xAxisFontSize:13,
			yAxisFontSize:13,
			scaleLineColor:'rgba(124,124,124,1)',
			scaleFontFamily:'Lato Regular',
			scaleTickSizeBottom:3,
			scaleTickSizeLeft:3,
			graphTitleFontSize:16
		});
	  }
	  //end charting function

	  //begin simresult function
	  function simresult(){
		  switch ($simmethod){
			  case 1:
			  $('.calcunit').html('psia');
			  $calcval = processsim(1,$simmodel,$pressdata,$tempdata,$ggravv,$fm);
			  var startcount = new CountUp("calcval", 0, $calcval, 2, 2, countupoptions);
			  startcount.start();
			  $('#unitonelabel').html('Pressure (bar)');
			  $('.softlabel-27').html('P');
			  $('#unitone').html(senunit(1,3,$calcval).toFixed(2));
			  $('#unittwolabel').html('Pressure (kPa)');
			  $('.softlabel-26').html('P');
			  $('#unittwo').html(senunit(1,1,$calcval).toFixed(2));
			  $('#unitthreelabel').html('Pressure (atm)');
			  $('.softlabel-25').html('P');
			  $('#unitthree').html(senunit(1,2,$calcval).toFixed(2));
			  break;
			  case 2:
			  $('.calcunit').html('Kelvin');
			  $calcval = processsim(2,$simmodel,$pressdata,$tempdata,$ggravv,$fm);
			  var startcount = new CountUp("calcval", 0, $calcval, 2, 2, countupoptions);
			  startcount.start();
			  $('#unitonelabel').html('Temperature (<sup>o</sup>C)');
			  $('.softlabel-27').html('T');
			  $('#unitone').html(senunit(2,10,$calcval).toFixed(2));
			  $('#unittwolabel').html('Temperature (<sup>o</sup>F)');
			  $('.softlabel-26').html('T');
			  $('#unittwo').html(senunit(2,12,$calcval).toFixed(2));
			  $('#unitthreelabel').html('Temperature (R)');
			  $('.softlabel-25').html('T');
			  $('#unitthree').html(senunit(2,11,$calcval).toFixed(2));
			  break;
		  };
	  };
	  //end simresult function

      //begin weighted average function
      function weightavg(){
          switch($simmethod){
              case 1:
                  $weightavg = 0;
                  for ($i=1; $i<=6; $i++) {
                      $weightavg = $weightavg + (processsim(1,$i,$pressdata,$tempdata,$ggravv,$fm)*pressureerr[$i-1]);
                  };
                  $text = 'The weighted average pressure has been calculated to be '+$weightavg+'psia \n\n' + 'This pressure equals ' + (senunit(1,3,$weightavg).toFixed(2)) + 'bar or ' + (senunit(1,1,$weightavg).toFixed(2)) + 'kPa or ' + (senunit(1,2,$weightavg).toFixed(2)) + 'atm.';
                  alert($text);
                  break;
              case 2:
                  $weightavg = 0;
                  for ($i=1; $i<=10; $i++) {
                      $weightavg = $weightavg + (processsim(2,$i,$pressdata,$tempdata,$ggravv,$fm)*temperatureerr[$i-1]);
                  };
                  $text = 'The weighted average temperature has been calculated to be '+$weightavg+'Kelvin \n\n' + 'This temperature equals ' + (senunit(2,10,$weightavg).toFixed(2)) + 'degrees C or ' + (senunit(2,12,$weightavg).toFixed(2)) + 'degrees F or ' + (senunit(2,11,$weightavg).toFixed(2)) + 'R.';
                  alert($text);
                  break;
          }
      }
      //end weighted average function

	  //begin processsim function
	  function processsim(simmethod,simmodel,Pv,Tv,ggrav,fm){
		  switch (simmethod){
			  case 1:
			  switch (simmodel){
				  case 1://
				  return ostergaard(fm,Tv,ggrav);
				  case 2://wilcox
				  return wilcoxa(Tv);
				  case 3://hammerschmidt
				  return hammerschmidt2(Tv);
				  case 4://makogon
				  return makogan(Tv,ggrav);
				  case 5://safamirzael
				  return safab(Tv,ggrav);
				  case 6://baillie-wilchert
				  return 0;
				  case 7://mann
				  return 0;
			  }
			  break;
			  case 2:
			  switch (simmodel){
				  case 1://berge
				  return berge(Pv,ggrav);
				  case 2://wilcox
				  return wilcoxb(Pv);
				  case 3://hammerschmidt
				  return hammerschmidt(Pv);
				  case 4://kobayashi
				  return kobayashi(Pv,ggrav);
				  case 5://safamirzael
				  return safaa(Pv,ggrav);
				  case 6://baillie-wilchert
				  return 0;
				  case 7://mann
				  return 0;
				  case 8://sun
				  return sun(Pv,ggrav);
				  case 9://towler
				  return towler(Pv,ggrav);
				  case 10://motiee
				  return motiee(Pv,ggrav);
			  }
			  break;
		  };
	  };
	  //end processsim function
	  //begin calculation functions
	  //pressure models
	  function ostergaard(fm,Tv,ggrav){
		$A = $oc1*(1/(Math.pow((ggrav+$oc2),3)));
		$B = $oc3*fm;
		$C = $oc4*fm*fm;
		$D = $oc5;
		$E = $oc6*(1/(Math.pow((ggrav+$oc7),3)));
		$F = $oc8*fm;
		$G = $oc9*fm*fm;
		$H = $oc10;
		$p = (Tv*($A+$B+$C+$D))+$E+$F+$G+$H;
		$p = Math.exp($p);
		return senunit(1,7,$p).toFixed(2);
	  }

		function wilcoxa(Tv){
		Tv = senunit(2,11,Tv);
		$A = 51.667820;
		$B = -23.424368;
		$p = $A+((1000*$B)/Tv);
		$p = Math.exp($p);
		return ($p.toFixed(2));
	}

	function hammerschmidt2(Tv){
		Tv = senunit(2,12,Tv);
		return (Math.pow((Tv/8.9),1/0.285)).toFixed(2);
	}

	function makogan(Tv,ggrav){
		Tv = senunit(2,10,Tv);
		$beta = 2.681-(3.811*ggrav)+(1.679*ggrav*ggrav);
		$k = -0.006+(0.011*ggrav)+(0.011*ggrav*ggrav);
		$p = (Math.pow(10,($beta+0.0497*(Tv+($k*Tv*Tv)) -1)))*1000;
		return (senunit(1,7,$p).toFixed(2));
	}

	function safab(Tv,ggrav){
		return (senunit(1,7,(Math.exp(Math.pow(Tv/($safaA*Math.pow(ggrav,$safaB)),1/$safaC))))).toFixed(2);
	}
	//end pressure models

	//temperature models
	function berge(Pv,ggrav){
		Pv = senunit(1,1,Pv);
		if (0.555 <= ggrav && ggrav < 0.58){
			$t = -96.03 + 25.37*Math.log(Pv) - 0.64*(Math.Pow(Math.log(Pv),2)) + ((ggrav - 0.555)/0.025)*(80.61*Pv + ((1.16*10000)/(Pv+596.16)) - (-96.03 + 25.37*(Math.log(Pv)) - 0.64*(Math.Pow(Math.log(Pv),2))));
		} else if(0.58 <= ggrav && ggrav < 1){
			$t = ((80.61*Pv) - 21000 - (1220/(ggrav-0.535)) - (12300 + (1710/ggrav-0.509)))/(Pv - (-260.42 - (15.18/ggrav-0.535)));
		}
		return (senunit(2,9,$t).toFixed(2));
	}

	function wilcoxb(Pv){
		$A = 0;
		$B = 0;
		if (Pv >= 180 && Pv < 600){
			$A = 42.694907;
			$B = -18.841542;
		} else if (Pv >= 600 && Pv < 1400){
			$A = 55.855342;
			$B = -25.714757;
		} else if (Pv >= 1400 && Pv <= 4000){
			$A = 80.912574;
			$B = -38.987619;
		}

		$t = (1000*($B))/((Math.log(Pv))-$A);
		return senunit(2,6,$t).toFixed(2);
	}

	function hammerschmidt(Pv){
		return senunit(2,9,(8.9*Math.pow(Pv,0.285))).toFixed(2);
	}

	function kobayashi(Pv,ggrav){
		$t = 1/($kc1 + $kc2*Math.log(Pv) + $kc3*Math.log(ggrav) + $kc4*Math.pow(Math.log(Pv),2) + $kc5*Math.log(Pv)*Math.log(ggrav) + $kc6*Math.pow(Math.log(ggrav),2) + $kc7*Math.pow(Math.log(Pv),3) + $kc8*Math.log(ggrav)*Math.pow(Math.log(Pv),2) + $kc9*Math.log(Pv)*Math.pow(Math.log(ggrav),2) + $kc10*Math.pow(Math.log(ggrav),3) + $kc11*Math.pow(Math.log(Pv),4) + $kc12*Math.log(ggrav)*Math.pow(Math.log(Pv),3) + $kc13*Math.pow(Math.log(ggrav),2)*Math.pow(Math.log(Pv),2) + $kc14*Math.log(Pv)*Math.pow(Math.log(ggrav),3) + $kc15*Math.pow((Math.log(ggrav)),4));
		return (senunit(2,9,$t).toFixed(2));
	}

	function safaa(Pv,ggrav){
		Pv = senunit(1,1,Pv);
		return ($safaA*Math.pow(ggrav,$safaB)*Math.pow(Math.log(Pv),$safaC)).toFixed(2);
	}

	function sun(Pv,ggrav){
		Pv = (senunit(1,1,Pv)/1000);
		$t = 1000/(4.343295 + 0.00107340*Pv - 0.0919840*Math.log(Pv) - 1.071989*ggrav);
		return($t.toFixed(2));
	}

	function motiee(Pv,ggrav){
		$t = -238.24469 + (78.99667*log10(Pv)) - (5.35244*log10(Pv)*log10(Pv)) + (349.473877*ggrav) - (150.854675*ggrav*ggrav) - (27.604065*ggrav*log10(Pv));
		return (senunit(2,9,$t)).toFixed(2);
	}

	function towler(Pv,ggrav){
		$t = 13.47*Math.log(Pv) + 34.27*Math.log(ggrav) - 1.675*Math.log(Pv)*Math.log(ggrav) - 20.35;
		return (senunit(2,9,$t).toFixed(2));
	}
	//end temperature models
	  //end calculation functions

	  //begin senunit function
	  function senunit(parameter,path,from){
		switch(parameter){
			case 1:
			switch(path){
				case 1:
				//psia to kPa
				return (from*6.894745);
				case 2:
				//psia to atm
				return (from*0.068046);
				case 3:
				//psia to bar
				return (from*0.0689475728);
				case 4:
				//atm to psia
				return (from*14.695950254);
				case 5:
				//atm to bar
				return (from*1.0132501);
				case 6:
				//atm to kPa
				return (from*101.32501);
				case 7:
				//kPa to psia
				return (from*0.145037738007);
				case 8:
				//kPa to atm
				return (from*0.00986923169314);
				case 9:
				//kPa to bar
				return (from*0.01);
				case 10:
				//bar to psia
				return (from*14.5037738001);
				case 11:
				//bar to kPa
				return (from*100);
				case 12:
				//bar to atm
				return (from*0.986923169314);
			}
			break;
			case 2:
			switch(path){
				case 1:
				//C to R
				return (459.67 + (32 + (from * 9/5)));
				case 2:
				//C to F
				return ((32 + (from * 9/5)));
				case 3:
				//C to K
				return (from + 273.15);
				case 4:
				//R to C
				return (((from - 459.67) - 32)*(5/9));
				case 5:
				//R to F
				return (from - 459.67);
				case 6:
				//R to K
				return (273.15+(((from-459.67)-32)*(5/9)));
				case 7:
				//F to C
				return ((from - 32)*(5/9));
				case 8:
				//F to R
				return (from + 459.67);
				case 9:
				//F to K
				return (273.15+((from - 32)*(5/9)));
				case 10:
				//K to C
				return (from - 273.15);
				case 11:
				//K to R
				return ((((from - 273.15)*(9/5))+32)+459.67);
				case 12:
				//K to F
				return ((((from - 273.15)*(9/5))+32));
			}
			break;
	}}
	  //end senunit function
	  //copied intro from original SenEngine
	  $tempdata = 0;
	  $pressdata = 0;
	  $conedata = 0;
	  $ctwodata = 0;
	  $cthreedata = 0;
	  $nc4data = 0;
	  $ic4data = 0;
	  $cotwodata = 0;
	  $ntwodata = 0;
	  $h2sdata = 0;
	  $gravdata = 0;
	  $molsum = 0;
	  $molweight = 0;
	  $mc1 = 16.04246;
	  $mc2 = 30.06904;
	  $mc3 = 44.09562;
	  $mnc4 = 58.1222;
	  $mic4 = 58.1222;
	  $mco2 = 44.0095;
	  $mn2 = 28.0134;
	  $mh2s = 34.08088;
	  $wc1 = 0;
	  $wc2 = 0;
	  $wc3 = 0;
	  $wnc4 = 0;
	  $wic4 = 0;
	  $wco2 = 0;
	  $wn2 = 0;
	  $wh2s = 0;
	  $gg= 0;
	  $fm = 0;
	  $oc1 = 0.0045134;
	  $oc2 = 0.46852;
	  $oc3 = 0.0218636;
	  $oc4 = -0.0008417;
	  $oc5 = 0.129622;
	  $oc6 = 0.00036625;
	  $oc7 = -0.485054;
	  $oc8 = -5.44376;
	  $oc9 = 0.00389;
	  $oc10 = -29.9351;
	  $safaA = 194.681789;
	  $safaB = 0.044232;
	  $safaC = 0.189829;
	  $kc1 = 0.0027707715;
	  $kc2 = -0.002782238;
	  $kc3 = -0.0005649288;
	  $kc4 = -0.001298593;
	  $kc5 = 0.001407119;
	  $kc6 = 0.0001785744;
	  $kc7 = 0.001130284;
	  $kc8 = 0.00059728235;
	  $kc9 = -0.00023279181;
	  $kc10 = -0.000026840758;
	  $kc11 = 0.0046610555;
	  $kc12 = 0.00055542412;
	  $kc13 = -0.000014727765;
	  $kc14 = 0.000013938082;
	  $kc15 = 0.000014885010;


	  $("#inmethane,#inethane,#inpropane,#innbutane,#inibutane,#inco2,#inn2,#inh2s").keyup(function(e) {
		  if ($('#inmethane').val() !== ""){
		  $conedata = parseFloat($('#inmethane').val());
		  };
		  if ($('#inethane').val() !== ""){
		  $ctwodata = parseFloat($('#inethane').val());
		  };
		  if ($('#inpropane').val() !== ""){
		  $cthreedata = parseFloat($('#inpropane').val());
		  };
		  if ($('#innbutane').val() !== ""){
		  $nc4data = parseFloat($('#innbutane').val());
		  };
		  if ($('#inibutane').val() !== ""){
		  $ic4data = parseFloat($('#inibutane').val());
		  };
		  if ($('#inco2').val() !== ""){
		  $cotwodata = parseFloat($('#inco2').val());
		  };
		  if ($('#inn2').val() !== ""){
		  $ntwodata = parseFloat($('#inn2').val());
		  };
		  if ($('#inh2s').val() !== ""){
		  $h2sdata = parseFloat($('#inh2s').val());
		  };
		  $molsum = ($conedata+$ctwodata+$cthreedata+$nc4data+$ic4data+$cotwodata+$ntwodata+$h2sdata).toFixed(2);
		  $("#retotal").val($molsum);

		  if ($molsum > 0){
			  $wc1 = ($conedata/100)*$mc1;
			  $wc2 = ($ctwodata/100)*$mc2;
			  $wc3 = ($cthreedata/100)*$mc3;
			  $wnc4 = ($nc4data/100)*$mnc4;
			  $wic4 = ($ic4data/100)*$mic4;
			  $wco2 = ($cotwodata/100)*$mco2;
			  $wn2 = ($ntwodata/100)*$mn2;
			  $wh2s = ($h2sdata/100)*$mh2s;
			  $molweight = ($wc1+$wc2+$wc3+$wnc4+$wic4+$wco2+$wn2+$wh2s).toFixed(2);
			  $gg = $molweight/28.966;
			  $("#reggrav").val($gg.toFixed(3));
			  $fm = (($h2sdata)/($conedata+$ctwodata+$cthreedata+$nc4data+$ic4data).toFixed(3));
		  };
    });
	  //end of copied intro
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
		function checkCookiea(name){
			var cval = getCookie(name);
			if (cval != ""){
				//
			}else{
				document.cookie=name+'=; expires=Thu, 23 Nov 2023 23:11:11 UTC;';
			}
		}
		function checkCookieb(name){
			var cval = getCookie(name);
			if (cval != ""){
				//
			}else{
				document.cookie=name+'=; expires=Thu, 23 Nov 2023 23:11:11 UTC;';
			}
		}
		function setCookie(name,value){
			document.cookie = name + "=" + value + "; " + 'expires=Thu, 23 Nov 2023 23:11:11 UTC;';
		}
		checkCookiea('pressure');
		checkCookiea('temperature');
		checkCookieb('methane');
		checkCookieb('ethane');
		checkCookieb('propane');
		checkCookieb('nbutane');
		checkCookieb('ibutane');
		checkCookieb('cotwo');
		checkCookieb('ntwo');
		checkCookieb('htwos');
		checkCookiea('total');
		checkCookieb('molwt');
		$('#inpress').val(getCookie('pressure'));
		$('#intemp').val(getCookie('temperature'));
		$('#inmethane').val(getCookie('methane'));
		$('#inethane').val(getCookie('ethane'));
		$('#inpropane').val(getCookie('propane'));
		$('#innbutane').val(getCookie('nbutane'));
		$('#inibutane').val(getCookie('ibutane'));
		$('#inco2').val(getCookie('cotwo'));
		$('#inn2').val(getCookie('ntwo'));
		$('#inh2s').val(getCookie('htwos'));
		$('#retotal').val(getCookie('total'));
		$('#reggrav').val(getCookie('ggrav'));
    $(".headerbg").css('height','calc(100% - 65px)');
    $(".databg").css('height','calc(100% - 100px)');
	$('.datainslide').css('height','100%');
	$('.chartbg').css('height','100%');
	$('.tablebg').css('height','100%');
	$('.sidebar').css('height','100%');
	$('.sipmodelswrap').css('top','185px');
	$('.sitmodelswrap').css('top','185px');
	$('.sicexport').css('top','185px');
	$('.sidenavwrap').css('height','calc(100% - 65px)');

	$('.expandnavbtn').click(function(e){
      $('.sidenavwrap').velocity({'left':'0px'},400);
    });
    $('.closebtn').click(function(e){
      $('.sidenavwrap').velocity({'left':'-266px'},400);
    });

	$('.whitebutton-2,.whitebutton-1').click(function(e) {
		velfadeOut('.hysenlog',300);
        slideOutDown('.whitebutton-1',0);
		slideOutDown('.whitebutton-2',0.2);
    });
	$('.whitebutton-2').click(function(e) {
		$simmethod = 1;
		velfadeIn('.pmodelswrap',300);
		slideInUp('#poste',0.1);
		slideInUp('#pwil',0.2);
		slideInUp('#phamm',0.3);
		slideInUp('#pmak',0.4);
		slideInUp('#psafa',0.5);
		slideInUp('#pbail',0.6);
		slideInUp('#pmann',0.7);
		slideInUp('#pstartsim',0.8);
    });

	$('#poste,#pwil,#phamm,#pmak,#psafa,#pbail,#pmann').click(function(e){
		switch($(this).attr('id')) {
			case 'poste':
			$simmodel = 1;
			break;
			case 'pwil':
			$simmodel = 2;
			break;
			case 'phamm':
			$simmodel = 3;
			break;
			case 'pmak':
			$simmodel = 4;
			break;
			case 'psafa':
			$simmodel = 5;
			break;
			case 'pbail':
			$simmodel = 6;
			break;
			case 'pmann':
			$simmodel = 7;
			break;
		};
		$('#poste,#pwil,#phamm,#pmak,#psafa,#pbail,#pmann').removeClass('checked');
		$('#poste,#pwil,#phamm,#pmak,#psafa,#pbail,#pmann').parent().find('.softlabeltext').removeClass('whitetext');
        $(this).toggleClass('checked');
		$(this).find('.softlabeltext').toggleClass('whitetext');
	});

	$('.pmodelswrap .backbtn').click(function(e){
		velfadeOut('.pmodelswrap',300);
		velfadeIn('.hysenlog',300);
		slideInUp('.whitebutton-2',0.2);
		slideInUp('.whitebutton-1',0.4);
	});
	$('.whitebutton-1').click(function(e) {
		$simmethod = 2;
        velfadeIn('.tmodelswrap',300);
		slideInUp('#tberge',0.1);
		slideInUp('#twil',0.2);
		slideInUp('#thamm',0.3);
		slideInUp('#tkob',0.4);
		slideInUp('#tsafa',0.5);
		slideInUp('#tbail',0.6);
		slideInUp('#tmann',0.7);
		slideInUp('#tsun',0.8);
		slideInUp('#ttow',0.9);
		slideInUp('#tmot',1);
		slideInUp('#tstartsim',1.1);
    });

	$('#tberge,#twil,#thamm,#tkob,#tsafa,#tbail,#tmann,#tsun,#ttow,#tmot').click(function(e){
		switch($(this).attr('id')) {
			case 'tberge':
			$simmodel = 1;
			break;
			case 'twil':
			$simmodel = 2;
			break;
			case 'thamm':
			$simmodel = 3;
			break;
			case 'tkob':
			$simmodel = 4;
			break;
			case 'tsafa':
			$simmodel = 5;
			break;
			case 'tbail':
			$simmodel = 6;
			break;
			case 'tmann':
			$simmodel = 7;
			break;
			case 'tsun':
			$simmodel = 8;
			break;
			case 'ttow':
			$simmodel = 9;
			break;
			case 'tmot':
			$simmodel = 10;
			break;
		};
		$('#tberge,#twil,#thamm,#tkob,#tsafa,#tbail,#tmann,#tsun,#ttow,#tmot').removeClass('checked');
		$('#tberge,#twil,#thamm,#tkob,#tsafa,#tbail,#tmann,#tsun,#ttow,#tmot').parent().find('.softlabeltext').removeClass('whitetext');
        $(this).toggleClass('checked');
		$(this).find('.softlabeltext').toggleClass('whitetext');
	});


	$('.tmodelswrap .backbtn').click(function(e) {
		$simmethod = 0;
        velfadeOut('.tmodelswrap',300);
		velfadeIn('.hysenlog',300);
		slideInUp('.whitebutton-2',0.2);
		slideInUp('.whitebutton-1',0.4);
    });

	$('.startsim').click(function(e) {
		if ($simmodel == 0){
			alert('HySen says: \n \nPlease select a simulation method to use.');
		}else{
			switch($simmethod){
				case 1:
				$('.modelused').html(pressurearray[$simmodel-1] + ' <span class=\'label label-success\'>' + psimaccuracy[$simmodel-1] + '</span>');
				$('.dataincont-1').children().prop('disabled',true);
				$('.dataincont-1').children().css('opacity','0.2');
				break;
				case 2:
				$('.modelused').html(temparray[$simmodel-1] + ' <span class=\'label label-success\'>' + tsimaccuracy[$simmodel-1] + '</span>');
				$('.dataincont-2').children().prop('disabled',true);
				$('.dataincont-2').children().css('opacity','0.2');
				break;
			};
		$('.headerbg').css('overflow','hidden');
		$('.headerbg').css('top','65px');
		$('.navbar-2').css('top','7px');
		$('.pmodelswrap, .tmodelswrap').hide();
		$('.navbar2').css('display','block');
		$('.databg').css('display','block');
		$('.databg').css('top','100px');
		$('.databg').css('height','calc(100% - 100px)');
		}
    });

	$('.expandbtn').click(function(e) {
        $('.sidebar').css('display','block');
		$('.sidebar').velocity({'right':'0px'},400);
		$('.datainslide, .chartbg, .tablebg').velocity({'left':'-266px'},400);
		$('.sicexport').hide();
		$('.siexport').hide();
		$('.simodel').show();
		switch($simmethod){
			case 1:
			$('.sipmodelswrap').css('display','block');
			break;
			case 2:
			$('.sitmodelswrap').css('display','block');
			break;
		};
    });
	$('.sibackbtn').click(function(e){
		$('.sidebar').velocity({'right':'-266px'},400);
		$('.datainslide, .chartbg, .tablebg').velocity({'left':'0px'},400);
		setTimeout(function(){$('.sidebar').css('display','none');},400);
	});

	$('.homebtn').click(function(e){
		window.location = 'hysen.html';
	});

	$('.beginsolve').click(function(e) {
		$ggravv = parseFloat($("#reggrav").val());
		if ($("#intemp").val() == ""){
			$tempdata = 0;
		}
		else{
			$tempdata = parseFloat($("#intemp").val());
		}

		if ($("#inpress").val() == ""){
			$pressdata = 0;
		}
		else{
			$pressdata = parseFloat($("#inpress").val());
		}

		if ($("#reggrav").val() == "" || $("#reggrav").val() == 0){
			alert('HySen says: \n\nIncomplete data. Please, recheck data entered.');
		}else{
			setCookie('pressure',$('#inpress').val());
			setCookie('temperature',$('#intemp').val());
			setCookie('methane',$('#inmethane').val());
			setCookie('ethane',$('#inethane').val());
			setCookie('propane',$('#inpropane').val());
			setCookie('nbutane',$('#innbutane').val());
			setCookie('ibutane',$('#inibutane').val());
			setCookie('cotwo',$('#inco2').val());
			setCookie('ntwo',$('#inn2').val());
			setCookie('htwos',$('#inh2s').val());
			setCookie('total',$('#retotal').val());
			setCookie('ggrav',$('#reggrav').val());
			$('.datainslide').hide();
			$('.tablebg').hide();
			$('.chartbg').show();
			simresult();
			drawchart();
			$curview = 2;
		};
    });

	$('#datainputbtn1, #datainputbtn2').click(function(e){
		$('.datainslide').show();
		$('.tablebg').hide();
		$('.chartbg').hide();
		$curview = 1;
	});

	$('#siword').click(function(e) {
        $('#sentable').tableExport({type:'doc', escape:'false', htmlContent:'true'});
    });

	$('#siexcel').click(function(e) {
        $('#sentable').tableExport({type:'excel', escape:'false', htmlContent:'true'});
    });

	$('#sipower').click(function(e) {
        $('#sentable').tableExport({type:'powerpoint', escape:'false', htmlContent:'true'});
    });

	$('#sitext').click(function(e) {
        $('#sentable').tableExport({type:'txt', escape:'false', htmlContent:'true'});
    });

	$('#sicsv').click(function(e) {
        $('#sentable').tableExport({type:'csv', escape:'false', htmlContent:'true'});
    });

	$('#sipdf').click(function(e) {
        $('#sentable').tableExport({type:'pdf', escape:'false', htmlContent:'true', pdfFontSize:'7'});
    });

	$('#sipng').click(function(e) {
        $('#sentable').tableExport({type:'png', escape:'false', htmlContent:'true'});
    });

	$('#pttablebtn1').click(function(e){
		$('.datainslide').hide();
		$('.tablebg').show();
		$('.chartbg').hide();
		drawtable();
		$curview = 3;
	});

	$('#ptcurvebtn').click(function(e) {
        $('.datainslide').hide();
		$('.tablebg').hide();
		$('.chartbg').show();
		drawchart();
		$curview = 2;
    });

	$('.exportbtn').click(function(){
		switch($curview){
			case 1:
			break;
			case 2:
			$('#canvas').click();
			break;
			case 3:
			$('.sidebar').css('display','block');
			$('.sidebar').velocity({'right':'0px'},400);
			$('.datainslide, .chartbg, .tablebg').velocity({'left':'-266px'},400);
			$('.simodel').hide();
			$('.sipmodelswrap').hide();
			$('.sitmodelswrap').hide();
			$('.sicexport').show();
			$('.siexport').show();
			break;
		}
	});

      $('.weightavg').click(function(){
          weightavg();
      })

	$('#siposte,#sipwil,#siphamm,#sipmak,#sipsafa,#sipbail,#sipmann').click(function(e){
		$simmodel = psimarray.indexOf($(this).attr('id')) + 1;
		$('.sibackbtn').click();
		$('.modelused').html(pressurearray[$simmodel - 1] + ' <span class=\'label label-success\'>' + psimaccuracy[$simmodel-1] + '</span>');
		if ($curview == 2){
			simresult();
			drawchart();
		};
		if ($curview == 3){
			drawtable();
		};
	});

	$('.logout').click(function(e) {
        window.location='index.html';
    });
	$('#sitberg,#sitwil,#sithamm,#sitkob,#sitsafa,#sitbail,#sitmann,#sitsun,#sittow,#sitmot').click(function(e){
		$simmodel = tsimarray.indexOf($(this).attr('id')) + 1;
		$('.sibackbtn').click();
		$('.modelused').html(temparray[$simmodel - 1] + ' <span class=\'label label-success\'>' + psimaccuracy[$simmodel-1] + '</span>');
		if ($curview == 2){
			simresult();
			drawchart();
		};
		if ($curview == 3){
			drawtable();
		};
	});
  });//end of document ready
})();
