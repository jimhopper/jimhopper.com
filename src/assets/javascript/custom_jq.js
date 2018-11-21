
// ********hotline ********

$('#help_line .help_toggle').click(function(){
    $("#f").removeClass("fa-volume-control-phone");
         $("#f").addClass("fa-times");
			var div = $('#help_line');
			if (div.css('right') === '-265px') {
				$('#help_line').animate({
					right: '0'
				});
				$(this).toggleClass('active');
				$('#help_line .help_toggle').animate({
				top: "-104px",
				left: "0px"
				});
	$('#help_line .help_toggle').css({
    '-webkit-transform': 'rotate(0deg)',
    '-moz-transform':    'rotate(0deg)',
    '-o-transform':      'rotate(0deg)',
    '-ms-transform':     'rotate(0deg)'
});
 $("body").css("background-color", "rgba(0,0,0,0.4)");
			}
			else {
				$('#help_line').animate({
					right: '-265px'

				});
				$('#help_line .help_toggle').animate({
				top: "276px",
				left: "-26px"
				});

	$('#help_line .help_toggle').css({
    '-webkit-transform': 'rotate(-90deg)',
    '-moz-transform':    'rotate(-90deg)',
    '-o-transform':      'rotate(-90deg)',
    '-ms-transform':     'rotate(-90deg)'
});

			 $("body").css("background-color", "white");


			  $("#f").addClass("fa-volume-control-phone");
				$(this).toggleClass('active');
			}
			return false;
		});
// ******** end hotline ******

//   mobile site/size hide side bar
$(window).resize(function(){
	if ($(window).width() <= 1026){
    $(".sidebar" ).hide();
	}
	else{
location.reload();
}

});

//main sidebar animation up/down
    $(function() {
    var footer_offset = $(".suggested").offset(); //footer offset
    var sidebar_offset = $("#sid").offset();//sidebaroff set
     var footer_position = footer_offset.top - $("#sid").outerHeight() - 30;//footer position
    var topPadding = 15;

            $(window).scroll(function() {
                if ($(window).scrollTop() > sidebar_offset.top) {
                    if(  $(window).scrollTop() < footer_position ) {
                    $("#sid").stop().animate({
                        marginTop: $(window).scrollTop() - sidebar_offset.top + topPadding
                    });

                }
                }
                else {
                    $("#sid").stop().animate({
                        marginTop: 0
                    });
                };
            });
        });

// ***** sidebar end ***********





function mobileNav() {
  var nav = document.getElementById("mobile_links");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {

    nav.style.display = "block";
  }
//   **** toggle icons ****
 var tog = document.getElementById("f-icon");
 tog.classList.toggle("fa-chevron-circle-up");
}


// ***** sticky nave *****
$(function(){

 var sticky =  $('#mobile_sticky').offset().top+600;
  $(window).scroll(function(){
var pagoffset = $(window).scrollTop();
var x_space = $(".article h2, .article h3");

 if( pagoffset >=sticky){
  $('#mobile_sticky').addClass('sticky_nav');
  $('#mv').css('top', "47px");
  x_space.addClass('');
 }
else{
  $('#mobile_sticky').removeClass('sticky_nav');
  x_space.removeClass('');
  $('#mv').css('top', "16px");
  $("#mv").css("margin-bottom", "23px");

}





});
});


 var go_to = 0; //
function goTop(move_up) {
    if (move_up.matches) {
       // ************header space ****************8
        $(".onpage a").click(function() {
        var headerT = $(this).attr("href");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(headerT).offset().top -56
    }, 100);
});
    //end ************header space ****************8

        // document.body.style.backgroundColor = "yellow";
      go_to = document.getElementById("n_m");
        // document.getElementById("sc_button").style.left = "10px";

    } else {
    go_to = document.getElementById("gotop");
    }
}

var move_up = window.matchMedia("(max-width: 1026px)")
goTop(move_up)
move_up.addListener(goTop)
         var off_set = go_to.offsetTop;
  //   document.getElementById("test").innerHTML = s;


//  **** got to top function 
window.onscroll = function() {
goTosc_topFunction()};

function goTosc_topFunction(){
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("sc_button").style.display = "block";
    } else {
        document.getElementById("sc_button").style.display = "none";
    }

//     find the end of the page then position the goto top button
   var pageHeight= document.documentElement.offsetHeight,
        windowHeight= window.innerHeight,
        scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

//         document.getElementById("sadik").innerHTML= "Height " +pageHeight+' Windows width  :'+windowHeight+'  Scrolling possing : '+scrollPosition;

        if (pageHeight <= windowHeight+scrollPosition +240) {
               document.getElementById("sc_button").style.bottom = "494px";
        }
        else {
              document.getElementById("sc_button").style.bottom = "21px";
        }
}
function sc_topFunction(){
    document.body.scrollTop = off_set;
    document.documentElement.scrollTop = off_set;
}





//function 1 position go to top button when the screen is 1200
function viewPortsFunction1(mediaPorts1) {
    if (mediaPorts1.matches) {
//         document.body.style.backgroundColor = "red";
         document.getElementById("sc_button").style.left = '12px';

      }
    else{
          document.getElementById("sc_button").style.left = '818px';
//              document.body.style.backgroundColor = "teal";
    }
  }

var mediaPorts1 = window.matchMedia("(max-device-width: 1200px)") //windows size
viewPortsFunction1(mediaPorts1) // Call listener function at run time
mediaPorts1.addListener(viewPortsFunction1)


