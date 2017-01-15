$(document).ready(function(){
  $('.adminLogin').click(function(){
    $('.adminLogin').dreyanim({
      animationType : "slideOutToUp",
      animationTime : 450
    })

    $('.userLogin').dreyanim({
      animationType : "slideOutToUp",
      animationTime : 450,
      animationDelay : 100
    })

    $('.adminFormWrapper').dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 550
    })

    $('.loginTypeIndicator').addClass("bgAccent").dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 550
    });

    $('.landingWrapper').addClass("landingWrapperModded");
  })

  $('.userLogin').click(function(){
    $('.adminLogin').dreyanim({
      animationType : "slideOutToUp",
      animationTime : 450
    })

    $('.userLogin').dreyanim({
      animationType : "slideOutToUp",
      animationTime : 450,
      animationDelay : 100
    })

    $('.userFormWrapper').dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 550
    })

    $('.loginTypeIndicator').addClass("bgPrimary").dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 550
    });

    $('.landingWrapper').addClass("landingWrapperModded");
  })
})
