(function() {

      var menuToggle = $('#js-mobile-menu').unbind();
      $('#js-navigation-menu').removeClass("show");

      menuToggle.on('click', function(e) {
        e.preventDefault();
        $('#js-navigation-menu').slideToggle(function(){
          if($('#js-navigation-menu').is(':hidden')) {
            $('#js-navigation-menu').removeAttr('style');
          }
        });
      });

      // var hotlinesSidebar = $('#hotlines');
      $('#hotlines .sidebar__header a').click(function(e){
        e.preventDefault();
        $(this).closest('#hotlines').toggleClass('hide');
      })

      $('.topic p img').parent('p').css('text-align', 'center');


})();
