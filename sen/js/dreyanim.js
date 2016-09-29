/*!	JavaScript Document
	*	Depends on jquery
	*	Created by Adedire Oluwaseun of Dreyworks
	*	Date of creation: 5th January 2016
	*	Use for both personal and commercial projects
	*	Thank you!
*/

function slideInUp(el_id,del) {
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.top;
	$id.css('top',$pos.top+$id.height()/2+'px');
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','0');
	$id.css('display','block');
	$id.css('visibility','visible');
	$id.delay(del*1000).velocity({top:$oldpos+'px',opacity:'1'},300);
};

function slideOutUp(el_id,del) {
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.top;
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','1');
	$id.delay(del*1000).velocity({top:$pos.top-$id.height()/2+'px',opacity:'0'},300);
	$id.velocity({top:$oldpos+'px'},1);
	$id.css('visibility','hidden');
};

function slideInDown(el_id,del){
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.top;
	$id.css('top',$pos.top-$id.height()/2+'px');
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','0');
	$id.css('display','block');
	$id.css('visibility','visible');
	$id.delay(del*1000).velocity({top:$oldpos+'px',opacity:'1'},300);
};

function slideOutDown(el_id,del) {
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.top;
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','1');
	$id.delay(del*1000).velocity({top:$pos.top+$id.height()/2+'px',opacity:'0'},300);
	$id.velocity({top:$oldpos+'px'},1);
	$id.css('visibility','hidden');
};

function slideInLeft(el_id,del){
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.left;
	$id.css('left',$pos.left-$id.width()/2+'px');
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','0');
	$id.css('display','block');
	$id.css('visibility','visible');
	$id.delay(del*1000).velocity({left:$oldpos+'px',opacity:'1'},300);
};

function slideOutLeft(el_id,del) {
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.left;
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','1');
	$id.delay(del*1000).velocity({left:$pos.left-$id.width()/2+'px',opacity:'0'},300);
	$id.velocity({left:$oldpos+'px'},1);
	$id.css('visibility','hidden');
};

function slideInRight(el_id,del){
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.left;
	$id.css('left',$pos.left-$id.width()/2+'px');
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','0');
	$id.css('display','block');
	$id.css('visibility','visible');
	$id.delay(del*1000).velocity({left:$oldpos+'px',opacity:'1'},300);
};

function slideOutRight(el_id,del) {
	$id = $(el_id);
	$pos = $id.position();
	$oldpos = $pos.left;
	$id.css('-webkit-transform','translateZ(0)');
	$id.css('opacity','1');
	$id.delay(del*1000).velocity({left:$pos.left+$id.width()/2+'px',opacity:'0'},300);
	$id.velocity({left:$oldpos+'px'},1);
	$id.css('visibility','hidden');
};

function velfadeOut(el_id,duration){
	$id = $(el_id);
	if (duration == "" || duration == 0){
		duration = 300;
	}
	$id.fadeOut(duration);
};

function velfadeIn(el_id,duration){
	$id = $(el_id);
	if (duration == "" || duration == 0){
		duration = 300;
	}
	$id.fadeIn(duration);
};
