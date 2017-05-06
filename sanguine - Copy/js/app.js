var app = angular.module("sanguine", [])
		.constant('API_URL','http://127.0.0.1:2311/api/v1/');
var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cLzEyNy4wLjAuMToyMzExXC9hcGlcL3YxXC91c2VyXC9zaWduaW4iLCJpYXQiOjE0OTMxMDU5NzgsImV4cCI6MTQ5MzEwOTU3OCwibmJmIjoxNDkzMTA1OTc4LCJqdGkiOiJMeU5Qc3U0UGVHYTU3eHV3In0.CCCTVhDRzw6lqGp-w8HpKsQ3skTp8lKXOqYaI1gxLsw';
app.controller("getTasksController", function($scope, $http, API_URL) {
	$http.get(API_URL + 'task?token=' + token)
	.then(function(response){
		$scope.tasks = response;
	})
})

$(document).ready(function(e) {
	//Global variables
	var hamburgerOpen = false;
	//End of global variables

	//TextArea autosize code
	try {
		autosize($('#new-task-view textarea'));
	} catch(err) {
		console.log(err.message)
	}
	//End of textArea autosize code

	//Side-bar control
	$('.view#task-list-view .hamburger').click(function(e) {
		if (hamburgerOpen) {
			hamburgerOpen = false;
			$(this).attr("src","img/icon.hamburger-white.png");
			$('.side-bar-content').dreyanim({
				animationType: "slideOutToLeft",
				animationTime: 450
			})
			$('.side-bar').dreyanim({
				animationType: "fadeOut",
				animationTime: 450,
				animationDelay: 100
			})
		} else {
			hamburgerOpen = true;
			$(this).attr("src","img/icon.hamburger-close-white.png");
			$('.side-bar').dreyanim({
				animationType: "fadeIn",
				animationTime: 450
			})
			$('.side-bar-content').dreyanim({
				animationType: "slideInFromLeft",
				animationTime: 450,
				animationDelay: 100
			})
		}
	})
	//End of Side-bar control

	//Add new task FAB
	$('.view#task-list-view .add-task#add-task').click(function(e) {
		$('.view#task-list-view').dreyanim({
			animationType: "fallOutAlternate",
			animationTime: 450
		})

		$('.view#new-task-view').dreyanim({
			animationType: "fallInAlternate",
			animationTime: 450,
			animationDelay: 100
		})
	})
	//End of add new task FAB

	//Close add new task modal
	$('.view#new-task-view .view-close-btn').click(function(e) {
		$('.view#new-task-view').dreyanim({
			animationType: "fallOut",
			animationTime: 450
		})

		$('.view#task-list-view').dreyanim({
			animationType: "fallIn",
			animationTime: 450,
			animationDelay: 100
		})
	})
	//End of close add new task modal

	//Add new task form submit
	$('#new-task-form').submit(function(e) {
		e.preventDefault();
		$('.view#new-task-view').dreyanim({
			animationType: "fallOut",
			animationTime: 450
		})

		$('.view#task-list-view').dreyanim({
			animationType: "fallIn",
			animationTime: 450,
			animationDelay: 100
		})
	})
	//End of add new task form submit

	//Task filter controls
	$('.view#task-list-view .task-filter-icon').click(function(e) {
		$('.view#task-list-view').css({"transform":"scale(0.85,0.85)"});
		$('.view#task-list-view').css({"filter":"blur(10px)"});
		$('.filter').dreyanim({
			animationType: "fadeIn",
			animationTime: 450
		})
		$('.filter-content').dreyanim({
			animationType: "slideInFromDown",
			animationTime: 450
		})
	})

	$('.filter .filter-content #cancel-filter').click(function(e) {
		$('.filter-content').dreyanim({
			animationType: "slideOutToDown",
			animationTime: 450,
		})
		$('.view#task-list-view').css({"transform":"scale(1,1)"});
		$('.view#task-list-view').css({"filter":"none"});
		$('.filter').dreyanim({
			animationType: "fadeOut",
			animationTime: 450
		})
	})
	//End of task filter controls

	// Task swipe action
	$('.view#task-list-view .m-task').on("swipe", function(e){
		$(this).dreyanim({
			animationType: "slideOutToLeft",
			animationTime: 450
		})
	})
	// End of task swipe action

	// Subtask swipe action
	$('.view#task-single-view .task-subtask').on("swipe", function(e){
		$(this).dreyanim({
			animationType: "slideOutToLeft",
			animationTime: 450
		})
	})
	// End of subtask swipe action

	//Open task Single view page
	$('.view#task-list-view .m-task').click(function(e) {
		e.stopImmediatePropagation();
		$('.view#task-list-view').dreyanim({
			animationType: "slideOutToRight",
			animationTime: 450
		});

		$('.view#task-single-view').dreyanim({
			animationType: "slideInFromLeft",
			animationTime: 450,
			animationDelay: 100
		})
	})
	//End of open task Single view page

	//Close task Single view page
	$('.view#task-single-view .back-btn').click(function(e) {
		$('.view#task-single-view').dreyanim({
			animationType: "slideOutToLeft",
			animationTime: 450
		})

		$('.view#task-list-view').dreyanim({
			animationType: "slideInFromRight",
			animationTime: 450,
			animationDelay: 100
		})
	})
	//End of close task Single view page

	//Page Scroll Effect
	var lastScrollTop = 0;
	$(document).scroll(function(e){
	   var currentScrollTop = $(this).scrollTop();
	   var title = $('.view#task-single-view .view-header-title.inner');

	   if (currentScrollTop > lastScrollTop) {
		//Downscroll
		if (title.css("font-size") <= "26px" && title.css("font-size") >= "17px") {
			title.css("font-size","-=1px")
		}
	   } else {
	   	//Upscroll
	   	if (title.css("font-size") <= "25px" && title.css("font-size") >= "15px") {
			title.css("font-size","+=1px")
		}
	   }
	   lastScrollTop = currentScrollTop;
	});
	//End of page Scroll Effect
})