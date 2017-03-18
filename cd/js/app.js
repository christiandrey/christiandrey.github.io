//Scripts dependent on page loaded
$(document).ready(function(){
  //Test Scripts
  //--End of Test Scripts

  //Global variables

  ////GalleryItems
  one = {
    title: "SPE, UI Day Banners",
    description: "Display banners at the University of Ibadan, Society of Petroleum Engineers Day, 2015.",
    softwares: ["ps","ai"],
    tags: ["Graphics Design"],
    liveLink: "",
    behanceLink: "https://www.behance.net",
    imageCount: 2
  };
  two = {
    title: "Skilli Mobile and Web UI/UX",
    description: "User interfaces for the VMLearn Skilli Mobile App, and the Promotion website.",
    softwares: ["xd","ai","ps"],
    tags: ["UI/UX"],
    liveLink: "https://www.myskilli.com",
    behanceLink: "https://www.behance.net/gallery/48823043/Skilli-Mobile-UI",
    imageCount: 16
  };
  three = {
    title: "VMLearn Branding, UI/UX",
    description: "Branding of the VMLearn Organization and User interfaces for the company website.",
    softwares: ["ai","ps"],
    tags: ["UI/UX", "Branding","Graphics Design"],
    liveLink: "https://www.vmlearn.com",
    behanceLink: "https://www.behance.net/gallery/48824537/VMLearn-Branding",
    imageCount: 4
  };
  four = {
    title: "Splendidouse Projects",
    description: "Various publicity media for Splendidouse.",
    softwares: ["ai","ps","cdr"],
    tags: ["Graphics Design"],
    liveLink: "",
    behanceLink: "https://www.behance.net/gallery/48821447/Splendid-House",
    imageCount: 3
  };
  five = {
    title: "Quizac Mobile App UI/UX",
    description: "User interfaces for the Quizac mobile app. Interface animations were also supplied to the client.",
    softwares: ["ai","ps","ae","xd"],
    tags: ["UI/UX"],
    liveLink: "",
    behanceLink: "https://www.behance.net/gallery/48815361/Quizac",
    imageCount: 17
  };
  six = {
    title: "Random 3D Projects",
    description: "A collection of renders from 3D projects done in my spare time. Ideas usually are drawn from experience and other peoples' works.",
    softwares: ["ps","c4d"],
    tags: ["3D"],
    liveLink: "",
    behanceLink: "",
    imageCount: 11
  };
  seven = {
    title: "Solace Stores Publicity",
    description: "Publicity media for Solace Stores, an online food stuff store.",
    softwares: ["ps","ai"],
    tags: ["Graphics Design"],
    liveLink: "",
    behanceLink: "",
    imageCount: 1
  };
  eight = {
    title: "LoadAm FrontEnd Development",
    description: "Front end development for the LoadAm website to be bound to a Django based backend. Technologies used include HTML5, CSS3, Javascript and SASS",
    softwares: ["html5","css3","javascript","sass"],
    tags: ["Web Development"],
    liveLink: "https://christiandrey.bitbucket.io/loadam",
    behanceLink: "https://www.behance.net/gallery/48818101/LoadAm-Branding-and-UIUX",
    imageCount: 9
  };
  nine = {
    title: "D & A Admin FrontEnd Development",
    description: "Front end development for the D & A admin web app. Technologies used include HTML5, CSS3, Javascript and SASS, and my dreyanim plugin",
    softwares: ["html5","css3","javascript","sass"],
    tags: ["Web Development"],
    liveLink: "https://christiandrey.github.io/dandaadmin",
    behanceLink: "https://www.behance.net/gallery/49000711/D-A-Mobile-App",
    imageCount: 1
  };
  ////--End of GalleryItems
  //--End of Global variables
  //Navigation
  $.easing.custom = function (x, t, b, c, d) {
    var s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  }

  $('.navContainer').click(function(){
    $('.ham').toggleClass("open");
    $('.navElements').toggleClass("close");
    $('.navElements').toggleClass("open");
    $('.navElements *').toggleClass("open");
  })

  $('.navElements .home').click(function(){
    $.scrollTo('.sectionBlock.hero',800,{easing:'custom'})
  })

  $('.navElements .bio').click(function(){
    $.scrollTo('.sectionBlock.bio',800,{easing:'custom'})
  })

  $('.navElements .gallery').click(function(){
    $.scrollTo('.sectionBlock.gallery',800,{easing:'custom'})
  })

  $('.navElements .contact').click(function(){
    $.scrollTo('.sectionBlock.contact',800,{easing:'custom'})
  })
  //--End of Navigation

  //Section Indicators
  function detectScroll(element,action,initial){
    var $element = $(element);
    switch(initial) {
      case true:
      $(document).ready(function(){
        if ($(document).scrollTop() >= $element.offset().top && $(document).scrollTop() <= $element.offset().top + $element.height()) {
          eval(action)
        }
      });
      break;

      case false:
      break;
    }
    $(document).scroll(function(){
      if ($(document).scrollTop() >= $element.offset().top && $(document).scrollTop() <= $element.offset().top + $element.height()) {
        eval(action)
      }
    })
  }
  detectScroll(".sectionBlock.hero","$('.sectionIndicator .indicator').removeClass('typeA typeB typeC active'); $('.sectionIndicator .indicator').addClass('typeA'); $('.sectionIndicator .indicator:first-of-type').addClass('active')",true);
  detectScroll(".sectionBlock.bio","$('.sectionIndicator .indicator').removeClass('typeA typeB typeC active'); $('.sectionIndicator .indicator').addClass('typeB'); $('.sectionIndicator .indicator:nth-of-type(2)').addClass('active')",true);
  detectScroll(".sectionBlock.gallery","$('.sectionIndicator .indicator').removeClass('typeA typeB typeC active')");
  detectScroll(".sectionBlock.contact","$('.sectionIndicator .indicator').removeClass('typeA typeB typeC active'); $('.sectionIndicator .indicator').addClass('typeC'); $('.sectionIndicator .indicator:last-of-type').addClass('active')"),true;
  //--End of Section Indicators

  //Parallax Effects
  $('.hero').parallax({
    imageSrc: 'cd/img/bg.jpg',
    speed: 0.4
  })

  $('.bioImage').parallax({
    imageSrc: 'cd/img/profileImg.jpg',
    speed: 0.2
  })
  //--End of Parallax Effects

  //Gallery Scripts
  var _;
  var currentImageGlobal;
  $('.galleryItem').mouseenter(function(){
    $(this).find('.imageDescription').dreyanim({
      animationType: "slideInFromUp",
      animationTime: 600
    })
  })

  $('.galleryItem').mouseleave(function(){
    $(this).find('.imageDescription').dreyanim({
      animationType: "fadeOut",
      animationTime: 100
    })
  })

  $('.viewProjectBtn').click(function(event){
    event.stopImmediatePropagation();
    _ = $(this);
    __ = $(this).data("itemId");

    slider.create(window[__].imageCount,__);
    $('.lightBox').removeClass("hidden");
    $('.lightBoxContainer').dreyanim({
      animationType: "fadeIn",
      animationTime: 600
    });
    $('.lightBox .projectDetails .projectTitle').html(window[__].title);
    $('.lightBox .projectDetails .projectDescription').html(window[__].description);
    $('.lightBox .projectDetails .projectSoftwares').html("");
    window[__].softwares.forEach(function(software){
      $("<span/>", {
        class: "software " + software
      }).appendTo('.lightBox .projectDetails .projectSoftwares')
    });
    $('.lightBox .projectDetails .projectTags').html("");
    window[__].tags.forEach(function(tag){
      $("<span/>", {
        class: "tag",
        text: tag
      }).appendTo('.lightBox .projectDetails .projectTags')
    });
    $('.lightBox .projectDetails .liveLink').attr('href',window[__].liveLink);
    $('.lightBox .projectDetails .behanceLink').attr('href',window[__].behanceLink);

    // $('.sectionBlock').addClass("blur");
    $('body').css("overflow","hidden")
  })

  $('.imageDescription').click(function(){
    $(this).find('.viewProjectBtn').click();
  })

  ////LightBox Scripts
  $('.lightBox .closeLightBox').click(function(){
    $('.lightBox').addClass("hidden");
    $('.lightBoxContainer').addClass("hidden");
    $('.sectionBlock').removeClass("blur");
    $('body').css("overflow","");
    slider.destroy();
  })

  $('.lightBox .imageCtrlContainer .prev').on("click", function(event){
    event.stopImmediatePropagation();
    slider.moveTo(window[__].imageCount,currentImageGlobal,"previous");
  });

  $('.lightBox .imageCtrlContainer .next').on("click", function(event){
    event.stopImmediatePropagation();
    slider.moveTo(window[__].imageCount,currentImageGlobal,"next");
  });

  var lightBoxTouchHandler = new Hammer(document.querySelector('.lightBox .imageWrapper'));
  lightBoxTouchHandler.on('swipeleft', function(event) {
    $('.lightBox .imageCtrlContainer .next').click();
  });
  lightBoxTouchHandler.on('swiperight', function(event) {
    $('.lightBox .imageCtrlContainer .prev').click();
  });

  $(window).on("resize", function(event){
    slider.destroy();
    slider.create(window[__].imageCount,__);
  })
  ////--LightBox Scripts
  ////Slider Scripts
  var slider = {
    create: function(imageCount, galleryItemId) {
      $('.lightBox .projectImages .imageWrapper').css("width",imageCount * 100 + "%");
      $('.lightBox .projectImages .imageIndicator').html("");
      for (var i = 1; i <= imageCount; i++){
        $("<div/>", {
          class: "indicator"
        }).appendTo('.lightBox .projectImages .imageIndicator')
      }
      $('.lightBox .projectImages .imageIndicator').children('.indicator:nth-of-type(1)').addClass("active");
      $('.lightBox .projectImages .imageWrapper').html("");
      for (var i = 1; i <= imageCount; i++){
        if (i < 10) {
          $("<img/>", {
            class: "imageItem",
            src: "cd/img/gallery/" + galleryItemId + "/0" + i + ".jpg"
          }).appendTo('.lightBox .projectImages .imageWrapper')
        } else {
          $("<img/>", {
            class: "imageItem",
            src: "cd/img/gallery/" + galleryItemId + "/" + i + ".jpg"
          }).appendTo('.lightBox .projectImages .imageWrapper')
        }
      }
      $('.lightBox .projectImages .imageWrapper .imageItem').css("width","calc(100% / " + imageCount + ")");
      currentImageGlobal = 1;
    },
    moveTo: function(imageCount, currentImage, direction) {
      var transitionAmount = $('.lightBox .projectImages .imageWrapper .imageItem').width();
      switch(direction) {
        case "previous":
        if (currentImage == 1) {
          //
        } else {
          $('.lightBox .projectImages .imageWrapper').css({"transform":"translateX(" + (transitionAmount * (currentImage - 2) * -1) + "px)"});
          currentImageGlobal -= 1;
          $('.lightBox .projectImages .imageIndicator').children().removeClass("active");
          $('.lightBox .projectImages .imageIndicator').children('.indicator:nth-of-type(' + currentImageGlobal + ')').addClass("active");

        }
        break;

        case "next":
        if (currentImage == imageCount) {
          //
        } else {
          $('.lightBox .projectImages .imageWrapper').css({"transform":"translateX(" + (transitionAmount * currentImage * -1) + "px)"});
          currentImageGlobal += 1;
          $('.lightBox .projectImages .imageIndicator').children().removeClass("active");
          $('.lightBox .projectImages .imageIndicator').children('.indicator:nth-of-type(' + currentImageGlobal + ')').addClass("active");
        }
        break;
      }
    },
    destroy: function(){
      $('.lightBox .projectImages .imageWrapper').css("transform","");
      currentImageGlobal = undefined;
    },
  }
  ////--End of Slider Scripts
  //--End of Gallery Scripts


})
//--End of Scripts dependent on page loaded
