$(document).ready(function () {
  $('.infinity-scroll').infiniteScroll({
    path: '.pagination__next',
    append: '.infinity-block',
    hideNav: '.pagination',
    history: false,
  }).on('append.infiniteScroll', function (event, response, path, items) {
    var $result = $(items);
    var $sliders = $result.find('.additionally-slider__slider');

    if ($sliders.length) {
      $sliders.each(function () {
        var swiper = new Swiper(this, {
          slidesPerView: 'auto',
          spaceBetween: 32,
          freeMode: true,
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          // breakpoints: {
          //   991: {
          //     slidesPerView: 3,
          //   },
          //   768: {
          //     slidesPerView: 2,
          //   },
          //   575: {
          //     slidesPerView: 1,
          //   },
          // }
        });
      });
    }
  });
  // var heightPage = $(window).height(),
  //     heihgtInfinityScroll = $('.infinity-scroll').height();

  // $(document).bind('mousewheel', function (e) {
  //   if (e.originalEvent.wheelDelta / 120 > 0) {
  //     console.log('scrolling up !');

  //   } else {
  //     $(function (heihgtChild) {
  //       var s = $(".infinity-block"),
  //         arr = [];
  //       s.each(function (indx, element) {
  //         arr[indx] = $(this).height()
  //       });
  //       console.log('\n'+arr);
  //     });
  //     console.log('scrolling down !');
  //     console.log(heightPage);
  //     console.log(heihgtInfinityScroll);
  //   }
  // });

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function () {
    $('.infinity-block').each(function () {
      var activeBlock = $(this);
      if ($(this).isInViewport()) {
        $(activeBlock).addClass('infinity-block--active');
      } else {
        $(activeBlock).removeClass('infinity-block--active');
      }
    });
  });

  // $(window).scroll(function () {
  //   if (checkVisible($('.infinity-block--active'))) {
  //     $(this).css("background-color", "#4f4");
  //   } else {
  //     $(this).css("background-color", "#f44");
  //   }
  // });

  // function checkVisible(elm, eval) {
  //   eval = eval || "visible";
  //   var vpH = $(window).height(), // Viewport Height
  //     st = $(window).scrollTop(), // Scroll Top
  //     y = $(elm).offset().top,
  //     elementHeight = $(elm).height();

  //   if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  //   if (eval == "above") return ((y < (vpH + st)));
  // }

  // var
  //   $target = $('.infinity-block--active');
  // $target.append('<div class="bg-shadow" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 1;background: rgba(0,0,0,1);"></div>');

  // $(window).scroll(function (e) {
  //   var
  //     scrollTop = $(window).scrollTop() + window.innerHeight,

  //     $target = $('.infinity-block--active'),
  //     $rel = $('.bg-shadow'),

  //     targetPos = $target.offset().top,
  //     viewport = targetPos + window.innerHeight,

  //     //percent = targetPos - viewport


  //     percent = (viewport - scrollTop) / window.innerHeight;;

  //   //console.log('percent', percent, t);
  //   // console.log(viewport - scrollTop, t);
  //   if (percent <= 1) {
  //     $rel.css({
  //       'opacity': percent
  //     });
  //   } else if (percent > 1) {
  //     $rel.css({
  //       'opacity': 1
  //     });
  //   }

  //   console.log(scrollTop, viewport, percent);
  //   //console.log(scrollTop, targetPos, viewport);
  // });

  $(window).scroll(function (e) {
    var
      scrollTop = $(window).scrollTop() + window.innerHeight,
      $target = $('.infinity-block');

    $target.find('.bg-shadow').css('background-color: rgba(0, 0, 0, 0.3)');

    if ($target.length) {
      $target.each(function () {
        var
          $this = $(this),
          $rel = $this.find('.bg-shadow'),
          targetPos = $this.offset().top,
          viewport = targetPos + window.innerHeight,
          percent = (viewport - scrollTop) / window.innerHeight;

        if ($rel.length) {
          if (percent <= 1) {
            $rel.css({
              'background-color': 'rgba(0, 0, 0,' + percent + ');'
            });
          } else if (percent > 1) {
            $rel.css({
              'background-color': 'rgba(0, 0, 0, 0.3);'
            });
          };
        };
      });
    };
  });

});