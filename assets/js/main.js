/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);




$('.navTrigger').click(function () {
	$(this).toggleClass('active');
	console.log("Clicked menu");
	$("#mainListDiv").toggleClass("show_list");
	$("#mainListDiv").fadeIn();

});



$(document).ready(function() {

	/* Every time the window is scrolled ... */
	$(window).scroll( function(){

		/* Check the location of each desired element */
		$('.hideme').each( function(i){

			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if( bottom_of_window > bottom_of_object ){

				$(this).animate({'opacity':'1'},500);

			}

		});

	});

});



const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
	threshold: 1,
	rootMargin: "0px 0px -200px 0px"
};
const appearOnScroll = new IntersectionObserver
(function(
	entries,
	appearOnScroll
	) {
	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});