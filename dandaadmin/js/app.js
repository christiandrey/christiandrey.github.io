//Global variables
//--End of Global variables

//Global scripts

////Scripts Dependent on document ready
$(document).ready(function(){
  //Side Navigation
  $('.sideNav .home').click(function(){
    location.href = "dashboard.html"
  })
  $('.sideNav .jobMgmt').click(function(){
    location.href = "jobmgmt.html"
  })
  $('.sideNav .userMgmt').click(function(){
    location.href = "usermgmt.html"
  })
  $('.sideNav .cashMgmt').click(function(){
    location.href = "cashmgmt.html"
  })
  //--End of Side Navigation

  //Page Subheader Linking
  $('.jobMgmtPage .subHeaderLink').click(function(){
    _ = $(this);
    $('.pendingProjectsBody, .ongoingProjectsBody, .singleProjectView').addClass("hidden");
    eval("$('." + $(this).data("isLinkTo") + "').dreyanim({animationType: 'slideInFromDown', animationTime: 300})");
    // setTimeout(function(){
    //   if (_.data("isLinkTo") == "ongoingProjectsBody"){
    //     $temp = $('.ongoingProjectsBody').find('.progressCurrent');
    //     $.each($temp, function($key, $value){
    //       console.log($value.css("width"));
    //     })
    //   }
    // }, 300)
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  })

  $('.userMgmtPage .subHeaderLink').click(function(){
    $('.clientList, .designerList').addClass("hidden");
    eval("$('." + $(this).data("isLinkTo") + "').dreyanim({animationType: 'slideInFromDown', animationTime: 300})");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  })

  $('.cashMgmtPage .subHeaderLink').click(function(){
    $('.mainCashMgmtView, .requestsView').addClass("hidden");
    eval("$('." + $(this).data("isLinkTo") + "').dreyanim({animationType: 'slideInFromDown', animationTime: 300})");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  })
  //--End of Page Subheader Linking

  //Navigation Hamburger Menu
  $('.navDivision .menuTrigger').click(function(event){
    $('.navDivision .menuBox').dreyanim({
      animationType: "slideInFromRight",
      animationTime: 300
    })
  })

  $(':not(.menuBox)').click(function(){
    $('.menuBox').addClass("hidden")
  })

  $('.navDivision .menuBox li').click(function(){
    event.stopPropagation();
    $('.modalsDivision').dreyanim({
      animationType : "fadeIn",
      animationTime : 300
    })
    switch($(this).prop("class")){
      case ("changeAdminEmail"):
      $('.modalsDivision .changeEmailModal').dreyanim({
        animationType : "fallInAlternate",
        animationTime : 300,
        animationDelay : 100
      })
      break;

      case ("changeAdminPassword"):
      $('.modalsDivision .changePasswordModal').dreyanim({
        animationType : "fallInAlternate",
        animationTime : 300,
        animationDelay : 100
      })
      break;

      case ("logout"):
      location.href = "index.html";
      break;
    }
  })
  //--End of Navigation Hamburger Menu

  //Modals and their scripts
  $('.modalsDivision .userViewModal .closeBtn, .modalsDivision .changeEmailModal .closeBtn, .modalsDivision .changePasswordModal .closeBtn').click(function(){
    $(this).parent().siblings().addClass("hidden");
    // $('.modalsDivision').dreyanim({
    //   animationType : "fadeOut",
    //   animationTime : 300
    // })
    $('.modalsDivision').addClass("hidden");
  })

  $('.modalsDivision').keyup(function(event){
    console.log("INtro");
    if (event.which == 27){
      // console.log("Hello");
      $('.modalsDivision .userViewModal .closeBtn').click();
    }
  })
  //--End of Modals and their scripts

  //Others
  $(':not(.menuBox)').click(function(){
    $('.menuBox').addClass("hidden")
  })
  //--End of Others
})
////--End of Scripts Dependent on document ready

////Scripts not dependent on document ready
////--End of Scripts not dependent on document ready

//--End of Global scripts

//Dashboard Page Specific Scripts
$(document).ready(function(){
  //Dashboard Linking
  $('.task .jobMgmt').click(function(){
    location.href = "jobmgmt.html"
  })
  $('.task .userMgmt').click(function(){
    location.href = "usermgmt.html"
  })
  $('.task .cashMgmt').click(function(){
    location.href = "cashmgmt.html"
  })
  //--End of Dashboard Linking
})
//--End of Dashboard Page Specific Scripts

//Job Management Page Specific Scripts
$(document).ready(function(){
  var jobType;
  var clickedUserItem;


  $('.jobMgmtPage .row.tableBody .clientColumn .clientImage, .jobMgmtPage .row.tableBody .clientColumn .client').click(function(event){
    event.stopPropagation();
    $('.modalsDivision').dreyanim({
      animationType : "fadeIn",
      animationTime : 300
    })
    $('.modalsDivision .userViewModal').dreyanim({
      animationType : "fallInAlternate",
      animationTime : 300,
      animationDelay : 100
    })
  })

  $('.jobMgmtPage .row.tableBody').click(function(){
    jobType = $(this).data("jobType");
    console.log($(this).data("jobId"));
    console.log($(this).data("jobType"));
    $(this).parent().parent().addClass("hidden");
    $('.jobMgmtPage .singleProjectView').dreyanim({
      animationType : "fallIn",
      animationTime : 300
    })
    $('.jobMgmtPage .singleProjectView .projectDetailsWrapper').scrollTop(0);
  })

  $('.jobMgmtPage .deleteButton').click(function(event){
    event.stopPropagation();
    var deletable = $(this).parent().parent();
    console.log(deletable.data("jobId"));
    console.log(deletable.data("jobType"));
    deletable.dreyanim({
      animationType : "slideOutToLeft",
      animationTime : 300
    })
  })

  $('.jobMgmtPage .singleProjectView .backButton').click(function(){
    $('.singleProjectView').addClass("hidden");
    eval("$('.jobMgmtPage .subHeaderLink." + jobType + "Projects').click();")
  })

  $('.jobMgmtPage .singleProjectView .userItem .menuTrigger').click(function(event){
    event.stopPropagation();
    $(this).siblings('.menuBox').dreyanim({
      animationType: "slideInFromRight",
      animationTime: 300
    })
  })

  $('.jobMgmtPage .singleProjectView .userItem .menuBox li').click(function(){
    event.stopPropagation();
  })

  $('.jobMgmtPage .singleProjectView .userItem').click(function(){
    var $this = $(this);
    clickedUserItem = {
      userType: $this.data("userType"),
      userId: $this.data("userId")
    }

    console.log(clickedUserItem.userType);
    console.log(clickedUserItem.userId);

    switch(clickedUserItem.userType){
      case "client":
      $('.jobMgmtPage .profileViewerColumn .bottom').removeClass("bgAccent").addClass("bgSuccess");
      $('.jobMgmtPage .profileViewerColumn .top .profileType').removeClass("designerType").html("Client").addClass("clientType");
      break;

      case "designer":
      $('.jobMgmtPage .profileViewerColumn .bottom').removeClass("bgSuccess").addClass("bgAccent");
      $('.jobMgmtPage .profileViewerColumn .top .profileType').removeClass("clientType").html("Designer").addClass("designerType");
      break;
    }

    $('.jobMgmtPage .profileViewerColumn').siblings().addClass("hidden");
    $('.jobMgmtPage .profileViewerColumn').removeClass("hidden");

  })

  $('.jobMgmtPage .singleProjectView .viewConversation').click(function(){
    $('.jobMgmtPage .conversationsColumn').siblings().addClass("hidden");
    $('.jobMgmtPage .conversationsColumn').removeClass("hidden");
  })

  $('.jobMgmtPage .singleProjectView .imageItem').click(function(event){
    $('.jobMgmtPage .imageViewerColumn').siblings().addClass("hidden");
    $('.jobMgmtPage .imageViewerColumn').removeClass("hidden");
  })
})
//--End of Job Management Page Specific Scripts

//User Management Page Specific Scripts
$(document).ready(function(){
  $('.userMgmtPage .userListWrapper .userItem').click(function(){
    var $this = $(this);
    clickedUserItem = {
      userType: $this.data("userType"),
      userId: $this.data("userId")
    }

    console.log(clickedUserItem.userType);
    console.log(clickedUserItem.userId);

    switch(clickedUserItem.userType){
      case "client":
      $('.userMgmtPage .profileViewerColumn .bottom').removeClass("bgAccent").addClass("bgSuccess");
      $('.userMgmtPage .profileViewerColumn .top .profileType').removeClass("designerType").html("Client").addClass("clientType");
      break;

      case "designer":
      $('.userMgmtPage .profileViewerColumn .bottom').removeClass("bgSuccess").addClass("bgAccent");
      $('.userMgmtPage .profileViewerColumn .top .profileType').removeClass("clientType").html("Designer").addClass("designerType");
      break;
    }

    $('.userMgmtPage .profileViewerColumn').siblings().addClass("hidden");
    $('.userMgmtPage .profileViewerColumn').removeClass("hidden");

  })

  $('.userMgmtPage .userListWrapper .userItem .menuTrigger').click(function(event){
    event.stopPropagation();
    $(this).siblings('.menuBox').dreyanim({
      animationType: "slideInFromRight",
      animationTime: 300
    })
  })

  $('.userMgmtPage .userListWrapper .userItem .menuBox li').click(function(){
    event.stopPropagation();
  })
})
//--End of User Management Page Specific Scripts

//Cash Management Page Specific Scripts
$(document).ready(function(){
  var requestAction, clickedRequestItem;
  $('.cashMgmtPage .row.tableBody .userColumn .userImage, .cashMgmtPage .row.tableBody .userColumn .user').click(function(event){
    event.stopPropagation();
    $('.modalsDivision').dreyanim({
      animationType : "fadeIn",
      animationTime : 300
    })
    $('.modalsDivision .userViewModal').dreyanim({
      animationType : "fallInAlternate",
      animationTime : 300,
      animationDelay : 100
    })
  })

  $('.cashMgmtPage .row.tableBody .approveButton, .cashMgmtPage .row.tableBody .rejectButton').click(function(event){
    event.stopPropagation();
    clickedRequestItem = $(this).parent().parent();

    $('.modalsDivision').dreyanim({
      animationType : "fadeIn",
      animationTime : 300
    })

    if ($(this).hasClass("approveButton")){
      $('.modalsDivision .confirmModal .modalTitle').html("Are you sure you want to approve this request?");
      requestAction = "approve";
    }

    if ($(this).hasClass("rejectButton")){
      $('.modalsDivision .confirmModal .modalTitle').html("Are you sure you want to reject this request?");
      requestAction = "reject";
    }

    $('.modalsDivision .confirmModal').dreyanim({
      animationType : "fallIn",
      animationTime : 300,
      animationDelay : 100
    })

    $('.cashMgmtPage .modalsDivision .confirmModal .button').click(function(){
      $(this).parent().siblings().addClass("hidden");

      switch($(this).data("confirmAction")){
        case ("cancel"):
        console.log("cancel");
        break;

        case ("confirm"):
        switch(requestAction){
          case ("approve"):
          clickedRequestItem.dreyanim({
            animationType: "slideOutToLeft",
            animationTime: 300
          })
          break;

          case ("reject"):
          clickedRequestItem.css("opacity",0.2);
          clickedRequestItem.find(".rejectButton").remove();
          break;
        }
        break;
      }
      $('.modalsDivision').dreyanim({
        animationType : "fadeOut",
        animationTime : 300
      })
    })
  })


})
//--End of Cash Management Page Specific Scripts
