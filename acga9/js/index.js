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

    $('.loginTypeIndicator').addClass("bgAccentTrans").dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 0
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

    $('.loginTypeIndicator').addClass("bgPrimaryTrans").dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 0
    });

    $('.landingWrapper').addClass("landingWrapperModded");
  })
  $('.backLink').click(function(){
    $formID = $(this).parent().attr("data-formID");
    eval("$formType = $('."+$formID+"FormWrapper')");
    $formType.dreyanim({
      animationType : "slideOutToUp",
      animationTime : 450
    })
    $('.adminLogin').dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 450
    })
    $('.userLogin').dreyanim({
      animationType : "slideInFromDown",
      animationTime : 450,
      animationDelay : 550
    })
    $('.loginTypeIndicator').removeClass("bgPrimaryTrans, bgAccentTrans").dreyanim({
      animationType : "slideOutToUp",
      animationTime : 450,
      animationDelay : 550
    })
    $('.landingWrapper').removeClass("landingWrapperModded");
  })
})
