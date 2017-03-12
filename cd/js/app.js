//Scripts dependent on page loaded
$(document).ready(function(){
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
          // console.log($element.offset().top)
        }
      });
      break;

      case false:
      break;
    }
    $(document).scroll(function(){
      if ($(document).scrollTop() >= $element.offset().top && $(document).scrollTop() <= $element.offset().top + $element.height()) {
        eval(action)
        // console.log($element.offset().top)
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


})
//--End of Scripts dependent on page loaded
