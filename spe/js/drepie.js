/*!	JavaScript Document
	*	Depends on jquery and jquery ui
	*	Created by Adedire Oluwaseun of Dreyworks
	*	Date of creation: 1st May, 2015
	*	Modified Date 1: 7th June, 2015
	*	Modified Date 2: 19th June, 2015
	*	Use for both personal and commercial projects
	*	Thank you!
*/
(function($){
$.fn.drepie = function(options) {
	var settings = $.extend({
		done	:	0,
		size	:	100,
		del		:	0},options);
	return this.each(function() {
	$id = $(this);
	$size = settings.size;
	del = settings.del;
	done = settings.done;
	$size_2 = $size/2;
	$size_3 = $size_2 - (0.12*$size);
	$id.css({width:$size+'px', height:$size+'px'});
	$id.css('display','inline');
	$ci = 'ci' + Math.ceil(Math.random() * 1000);
	$te = 'te' + Math.ceil(Math.random() * 1000);
	$id.html("<svg width=\'"+$size+"px\' height=\'"+$size+"px\'>\n<circle cx=\'"+$size_2+"\' cy=\'"+$size_2+"\' r=\'"+($size_2)+"\' style=\"fill:#ffffff\"/>\n<circle cx=\'"+$size_2+"\' cy=\'"+$size_2+"\' r=\'"+$size_3+"\' style=\"fill:none; stroke:#dcdcdc; stroke-width:"+($size*0.2)+"\"/>\n<circle id=\'" + $ci + "\' cx=\'"+$size_2+"\' cy=\'"+$size_2+"\' r=\'"+$size_3+"\' style=\"fill:none; stroke-width:"+($size*0.17)+"\"/>\n<text id=\'" + $te +"\' x=\'"+($size*0.34)+"\' y=\'"+($size*0.55)+"\' fill=\'#a9a9a9\' style=\"font-family:Segoe UI; font-size:"+($size*0.17)+"px; font-weight:700\">" + done  + "% </text></svg>");

	$ci_x = $('#'+$ci);
	$te_x = $('#'+$te);

	if (done > 99) {
		$te_x.attr('x',($size*0.28));
	};

	if (done < 10) {
		$te_x.attr('x',($size*0.40));
	};

	var rad = $ci_x.attr('r');
	var len = Math.PI * 2 * rad;
	$ci_x.css({'stroke-dasharray':len,'stroke-dashoffset':len});
		if (done <= 10 && done > 0) {
		$ci_x.css({'stroke':'#9F191B'});
		};

		if (done <= 20 && done > 10) {
		$ci_x.css({'stroke':'#962A2F'});
		};

		if (done <= 30 && done > 20) {
		$ci_x.css({'stroke':'#8D3D45'});
		};

		if (done <= 40 && done > 30) {
		$ci_x.css({'stroke':'#844D58'});
		};

		if (done <= 50 && done > 40) {
		$ci_x.css({'stroke':'#7A606E'});
		};

		if (done <= 60 && done > 50) {
		$ci_x.css({'stroke':'#6F7586'});
		};

		if (done <= 70 && done > 60) {
		$ci_x.css({'stroke':'#65899D'});
		};

		if (done <= 80 && done > 70) {
		$ci_x.css({'stroke':'#5B9CB4'});
		};

		if (done <= 90 && done > 80) {
		$ci_x.css({'stroke':'#51B1CC'});
		};

		if (done <= 100 && done > 90) {
		$ci_x.css({'stroke':'#47C6E5'});
		};

	var val = len - (done* 0.01 * len);
	$ci_x.delay(del * 1000).animate({'stroke-dashoffset':val},5000,'easeOutElastic');
	$te_x.html(done + '%');
	});
};
}(jQuery));
