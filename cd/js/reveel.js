(function(window, $){
  var Reveel = function(reveelElement, options){
    this.reveelElement = reveelElement;
    this.$reveelElement = $(reveelElement);
    this.options = options;
    this.reveelWidth = null;
    this.reveelHeight = null;
    this.reveelMargin = null;
    this.styleConfig = null;
  }

  Reveel.prototype = {
    defaults : {
      reveelTime : 1000,
      reveelDelay : 0,
      reveelColor : "#000",
      reveelDirection : "fromLeft",
      reveelPadding : 10
    },

    reveel : function(){
      this.config = $.extend({}, this.defaults, this.options);
      this.regularize();
      buildReveel.call(this);

      $('.' + this.reveelClassName + '-reveelOverlay').delay(this.config.reveelDelay).animate({"width":this.reveelWidth+"px"}, (this.config.reveelTime / 2));

      var _ = this;
      setTimeout(function(){
        $('.' + _.reveelClassName).css("opacity","1");
        $('.' + _.reveelClassName + '-reveelOverlay').animate({"width":"0px"}, (_.config.reveelTime / 2));
      }, (_.config.reveelTime / 2) + _.config.reveelDelay);
    },

    regularize : function(){
      this.reveelClassName = this.$reveelElement.attr("class");
    }
  }

  function buildReveel(){
    $('.' + this.reveelClassName).clone().addClass('reveelClone').appendTo("body");
    $('.' + this.reveelClassName + '.reveelClone').css("display","inline");
    this.reveelWidth = $('.' + this.reveelClassName + '.reveelClone').innerWidth() + this.config.reveelPadding;
    this.reveelHeight = $('.' + this.reveelClassName + '.reveelClone').innerHeight() + this.config.reveelPadding;
    this.reveelMargin = $('.' + this.reveelClassName + '.reveelClone').css("margin");
    $('.' + this.reveelClassName).css("opacity","0");
    $('.' + this.reveelClassName + '.reveelClone').remove();

    $('.' + this.reveelClassName).wrap("<div style='position: relative; margin: " + this.reveelMargin + "'></div>");
    $('.' + this.reveelClassName).css("margin","0px");

    switch(this.config.reveelDirection){
      case "fromLeft":
      this.styleConfig = "background-color: " + this.config.reveelColor + "; width: 0px; height: " + this.reveelHeight + "px; top: -"+ (this.config.reveelPadding / 2) + "px; left: -"+ (this.config.reveelPadding / 2) + "px; z-index: +1; position: absolute";
      break;

      case "fromRight":
      this.styleConfig = "background-color: " + this.config.reveelColor + "; width: 0px; height: " + this.reveelHeight + "px; top: -"+ (this.config.reveelPadding / 2) + "px; left: -"+ (this.config.reveelPadding / 2) + "px; z-index: +1; position: absolute";
      break;

      case "fromTop":
      this.styleConfig = "background-color: " + this.config.reveelColor + "; width: 0px; height: " + this.reveelHeight + "px; top: -"+ (this.config.reveelPadding / 2) + "px; left: -"+ (this.config.reveelPadding / 2) + "px; z-index: +1; position: absolute";
      break;

      case "fromBottom":
      this.styleConfig = "background-color: " + this.config.reveelColor + "; width: 0px; height: " + this.reveelHeight + "px; top: -"+ (this.config.reveelPadding / 2) + "px; left: -"+ (this.config.reveelPadding / 2) + "px; z-index: +1; position: absolute";
      break;
    }

    $("<div/>", {
      class: this.reveelClassName + "-reveelOverlay",
      style: this.styleConfig,
    }).prependTo($('.' + this.reveelClassName).parent());
  }

  Reveel.defaults = Reveel.prototype.defaults;

  $.fn.reveel = function(options){
    return this.each(function(){
      new Reveel(this, options).reveel();
    })
  }

  window.Reveel = Reveel;
})(window, jQuery)
