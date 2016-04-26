/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });

/*----------------------------------------------------*/
/*  Portfolio Slider
------------------------------------------------------*/
  
  //$('#slidercheckbox').val($(this).is(':checked'));

  var slideCount = $('#portslider ul li').length;
  var slideWidth = $('#portslider ul li').width();
  var slideHeight = $('#portslider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  var myVar = 0
  $('#portslider').css({ width: slideWidth, height: slideHeight });
  
  $('#portslider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
  $('#portslider ul li:last-child').prependTo('#portslider ul');

  $('#slidercheckbox').change(function() {
      var $this = $(this);

      // $this will contain a reference to the checkbox   
      if ($this.is(':checked')) {
          // the checkbox was checked 
          myVar = setInterval(function () {
            moveRight();
          }, 3000);
      } else {
          stopMoving(myVar);
      }
    });

    function moveLeft() {
        $('#portslider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#portslider ul li:last-child').prependTo('#portslider ul');
            $('#portslider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#portslider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#portslider ul li:first-child').appendTo('#portslider ul');
            $('#portslider ul').css('left', '');
        });
    };

    function stopMoving(myVar) {
      clearInterval(myVar);
      // $('#portslider ul').stop()
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });


  // Portslider1
  var slideCount1 = $('#portslider1 ul li').length;
  var slideWidth1 = $('#portslider1 ul li').width();
  var slideHeight1 = $('#portslider1 ul li').height();
  var sliderUlWidth1 = slideCount1 * slideWidth1;
  var myVar1 = 0
  $('#portslider1').css({ width: slideWidth1, height: slideHeight1 });
  
  $('#portslider1 ul').css({ width: sliderUlWidth1, marginLeft: - slideWidth1 });
  
  $('#portslider1 ul li:last-child').prependTo('#portslider1 ul');

  $('#slidercheckbox1').change(function() {
      var $this = $(this);

      // $this will contain a reference to the checkbox   
      if ($this.is(':checked')) {
          // the checkbox was checked 
          myVar = setInterval(function () {
            moveRight1();
          }, 3000);
      } else {
          stopMoving1(myVar);
      }
    });

    function moveLeft1() {
        $('#portslider1 ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#portslider1 ul li:last-child').prependTo('#portslider1 ul');
            $('#portslider1 ul').css('left', '');
        });
    };

    function moveRight1() {
        $('#portslider1 ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#portslider1 ul li:first-child').appendTo('#portslider1 ul');
            $('#portslider1 ul').css('left', '');
        });
    };

    function stopMoving1(myVar) {
      clearInterval(myVar);
      // $('#portslider ul').stop()
    };

    $('a.control_prev').click(function () {
        moveLeft1();
    });

    $('a.control_next').click(function () {
        moveRight1();
    });

  // Portslider2
  var slideCount2 = $('#portslider2 ul li').length;
  var slideWidth2 = $('#portslider2 ul li').width();
  var slideHeight2 = $('#portslider2 ul li').height();
  var sliderUlWidth2 = slideCount2 * slideWidth2;
  var myVar = 0
  $('#portslider2').css({ width: slideWidth2, height: slideHeight2 });
  
  $('#portslider2 ul').css({ width: sliderUlWidth2, marginLeft: - slideWidth2 });
  
  $('#portslider2 ul li:last-child').prependTo('#portslider2 ul');

  $('#slidercheckbox2').change(function() {
      var $this = $(this);

      // $this will contain a reference to the checkbox   
      if ($this.is(':checked')) {
          // the checkbox was checked 
          myVar = setInterval(function () {
            moveRight2();
          }, 3000);
      } else {
          stopMoving2(myVar);
      }
    });

    function moveLeft2() {
        $('#portslider2 ul').animate({
            left: + slideWidth2
        }, 200, function () {
            $('#portslider2 ul li:last-child').prependTo('#portslider2 ul');
            $('#portslider2 ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#portslider2 ul').animate({
            left: - slideWidth2
        }, 200, function () {
            $('#portslider2 ul li:first-child').appendTo('#portslider2 ul');
            $('#portslider2 ul').css('left', '');
        });
    };

    function stopMoving2(myVar) {
      clearInterval(myVar);
      // $('#portslider ul').stop()
    };

    $('a.control_prev').click(function () {
        moveLeft2();
    });

    $('a.control_next').click(function () {
        moveRight2();
    });

});








