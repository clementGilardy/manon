$(document).ready(function () {
	$('.nav-wrapper ul li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	function setActive() {
		var aObj = $('nav ul li');
		$.each(aObj, function (index, link) {
			if (document.location.href.indexOf(link.firstChild.href) >= 0) {
				link.className = 'active';
			}
		});
	}
	
	window.onload = setActive();
	$(".button-collapse").sideNav();
});




