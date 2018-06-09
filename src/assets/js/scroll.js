$(document).ready(function () {
	var didScroll;
	var lastScrollTop = 0;
	var delta         = 5;
	var navbarHeight  = $('header nav').outerHeight();
	var normal        = true;
	
	
	$(window).scroll(function (event) {
		didScroll = true;
	});
	
	setInterval(function () {
		if ($(this).scrollTop() >= 0 && $(this).scrollTop() <= 100 && !normal) {
			if ($('li.active a').text() === 'ACCUEILACCUEIL') {
				$('header nav#nav-princ li a').fadeOut(500, function () {
					$(this).css('color', 'white').fadeIn(500);
				});
				
				$('#nav-princ').fadeOut(500, function () {
					$(this).css('background', 'none').fadeIn(500);
				});
			}
			normal = true;
		} else {
			resetScroll();
		}
		
		if ($(this).scrollTop() != 0) {
			normal = false;
		}
		
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	
	function hasScrolled() {
		var st = $(this).scrollTop();
		
		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta)
			return;
		
		// If they scrolled down and are past the navbar, add class .nav-up.
		// This is necessary so you never see what is "behind" the navbar.
		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('header nav#nav-princ').fadeOut("fast");
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('header nav#nav-princ').fadeIn("slow");
				$('header nav#nav-princ li a').css('color', 'black');
				$('#nav-princ').css('background', 'white');
			}
		}
		
		lastScrollTop = st;
	}
	
	function resetScroll() {
		if (!_.includes(window.location.href, 'projects')) {
			$('header nav#nav-princ li a').css('color', 'white');
			$('#nav-princ').css('background', 'none');
		}
	}
	
	// ANCHOR Scroll
	
	$('a[href^="#"]').click(function () {
		var id     = $(this).attr("href");
		var offset = $(id).offset().top
		$('html, body').animate({scrollTop: offset}, 'slow');
		return false;
	});
});
