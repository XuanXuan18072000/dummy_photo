(function($) {
    スクロールの位置で要素を表示
      $(window).on('load', function(){
        var scroller = window;
        var topBtn = $('.totop-button');
        topBtn.hide();
        var floatMenus = function () {
          if ($(scroller).scrollTop() > 100) {
            topBtn.fadeIn();
          } else {
            topBtn.fadeOut();
          }
        }
        $(scroller).scroll(floatMenus);
      });
    })(jQuery);
