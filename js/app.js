  $(document).ready(function() {
     // Stuff to do as soon as the DOM is ready

     var headerSummary = ["young","View Forecasting low September fares","King's","Study","NZBLOOD","How do you ETA Salad","Laptop","King's","Lifepod","Mac's","Smirnoff Snapchat Scavenger Hunt at R&V"];
     var rndm = Math.floor((Math.random() * 10) + 1);
     $(".header-overlay").css('background-image', 'url(images/bg'+ rndm +'.jpg)');
     $(".emp-btn a").html("View "+headerSummary[rndm]);

     $(".mobile-navi").on('click', function(event) {
       event.preventDefault();
       /* Act on the event */
       $('.top-head').toggleClass('grey-back');
       $('.navbar-collapse').slideToggle(300).css({'display':'block','visibility':'visible','position':'inherit'});

        if ($('ul.navbar-collapse li').hasClass('top-head-bgcolor')) {
            $('ul.navbar-collapse li').removeClass('top-head-bgcolor').addClass('grey-back');
        }
        else {
          $('ul.navbar-collapse li').removeClass('grey-back').addClass('top-head-bgcolor');
        }
     });
     $(".emp-btn").mouseenter(function(event) {
       /* Act on the event */
       $('.header-overlay>.slide').css('opacity', '0.5');
     });
     $(".emp-btn").mouseleave(function(event) {
       /* Act on the event */
       $('.header-overlay>.slide').css('opacity', '0.8');
     });
    $(document).scroll(function(event) {
      /* Act on the event */
      if ($(this).scrollTop()>450) {
        $('.top-head').addClass('top-head-bgcolor');
      }
      else if ($(this).scrollTop()<450){
        $('.top-head').removeClass('top-head-bgcolor');
      }
    });
    /*$('.work-button').on('click', function(event) {
      event.preventDefault();
      /* Act on the event */
      /*$('html,body').animate({scrollTop:565});
    });*/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top -75
            }, 1000);
            return false;
          }
        }
      });
    });
  });
