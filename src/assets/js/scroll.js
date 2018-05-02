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
				$('header nav#home li a').fadeOut(500, function () {
					$(this).css('color', 'white').fadeIn(500);
				});
				
				$('#home').fadeOut(500, function () {
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
			$('header nav#home').fadeOut("fast");
		} else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('header nav#home').fadeIn("slow");
				$('header nav#home li a').css('color', 'black');
				$('#home').css('background', 'white');
			}
		}
		
		lastScrollTop = st;
	}
	
	function resetScroll() {
		$('header nav#home li a').css('color', 'white');
		$('#home').css('background', 'none');
	}
	
	// ANCHOR Scroll
	
	$('a[href^="#"]').click(function () {
		var id     = $(this).attr("href");
		var offset = $(id).offset().top
		$('html, body').animate({scrollTop: offset}, 'slow');
		return false;
	});
});
