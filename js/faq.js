jQuery(document).ready(function($){
	//update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
	var MqM= 768,
		MqL = 1024;

	var faqsSections = $('.cd-faq-group'),
		faqTrigger = $('.cd-faq-trigger'),
		faqsContainer = $('.cd-faq-items'),
		faqsCategoriesContainer = $('.cd-faq-categories'),
		faqsCategories = faqsCategoriesContainer.find('a'),
		closeFaqsContainer = $('.cd-close-panel');
	
	//select a faq section 
//	faqsCategories.on('click', function(event){
//		event.preventDefault();
//		var selectedHref = $(this).attr('href'),
//			target= $(selectedHref);
//		if( $(window).width() < MqM) {
//			faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
//			closeFaqsContainer.addClass('move-left');
//			$('body').addClass('cd-overlay');
//		} else {
//	        $('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200); 
//		}
//	});

	//close faq lateral panel - mobile only
	$('body').bind('click touchstart', function(event){
		if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) { 
			closePanel(event);
		}
	});
//	faqsContainer.on('swiperight', function(event){
//		closePanel(event);
//	});

	//show faq content clicking on faqTrigger
	faqTrigger.on('click', function(event){
		event.preventDefault();
		$(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
	});

	//update category sidebar while scrolling
	$(window).on('scroll', function(){
		if ( $(window).width() > MqL ) {
			(!window.requestAnimationFrame) ? updateCategory() : window.requestAnimationFrame(updateCategory); 
		}
	});

	$(window).on('resize', function(){
		if($(window).width() <= MqL) {
			faqsCategoriesContainer.removeClass('is-fixed').css({
				'-moz-transform': 'translateY(0)',
			    '-webkit-transform': 'translateY(0)',
				'-ms-transform': 'translateY(0)',
				'-o-transform': 'translateY(0)',
				'transform': 'translateY(0)',
			});
		}	
//		if( faqsCategoriesContainer.hasClass('is-fixed') ) {
//			faqsCategoriesContainer.css({
//				'left': faqsContainer.offset().left,
//			});
//		}
	});

//	function closePanel(e) {
//		e.preventDefault();
//		faqsContainer.removeClass('slide-in').find('li').show();
//		closeFaqsContainer.removeClass('move-left');
//		$('body').removeClass('cd-overlay');
//	}

	function updateCategory(){
		updateCategoryPosition();
		updateSelectedCategory();
	}

	function updateCategoryPosition() {
		var top = $('.cd-faq').offset().top,
			height = jQuery('.cd-faq').height() - jQuery('.cd-faq-categories').height(),
			margin = 20;
		if( top - margin <= $(window).scrollTop() && top - margin + height > $(window).scrollTop() ) {
			var leftValue = faqsCategoriesContainer.offset().left,
				widthValue = faqsCategoriesContainer.width();
			faqsCategoriesContainer.addClass('is-fixed').css({
				'left': leftValue,
				'top': margin,
				'-moz-transform': 'translateZ(0)',
			    '-webkit-transform': 'translateZ(0)',
				'-ms-transform': 'translateZ(0)',
				'-o-transform': 'translateZ(0)',
				'transform': 'translateZ(0)',
			});
		} else if( top - margin + height <= $(window).scrollTop()) {
			var delta = top - margin + height - $(window).scrollTop();
			faqsCategoriesContainer.css({
				'-moz-transform': 'translateZ(0) translateY('+delta+'px)',
			    '-webkit-transform': 'translateZ(0) translateY('+delta+'px)',
				'-ms-transform': 'translateZ(0) translateY('+delta+'px)',
				'-o-transform': 'translateZ(0) translateY('+delta+'px)',
				'transform': 'translateZ(0) translateY('+delta+'px)',
			});
		} else { 
			faqsCategoriesContainer.removeClass('is-fixed').css({
				'left': 0,
				'top': 0,
			});
		}
	}

//	function updateSelectedCategory() {
//		faqsSections.each(function(){
//			var actual = $(this),
//				margin = parseInt($('.cd-faq-title').eq(1).css('marginTop').replace('px', '')),
//				activeCategory = $('.cd-faq-categories a[href="#'+actual.attr('id')+'"]'),
//				topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);
//			
//			if ( ( topSection - 20 <= $(window).scrollTop() ) && ( Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop() ) ) {
//				activeCategory.addClass('selected');
//			}else {
//				activeCategory.removeClass('selected');
//			}
//		});
//	}
});


//  change li background when click  //
$('.cd-faq-question').on('click', function(){
	if($(this).hasClass('focused')) {
		$(this).removeClass('focused')
	} else {
		$(this).addClass('focused')
	}
});
//$('.trigger2').on('click', function(){
//	if($('.question2').hasClass('focused')) {
//		$('.question2').removeClass('focused')
//	} else {
//		$('.question2').addClass('focused')
//	}
//});
//$('.trigger3').on('click', function(){
//	if($('.question3').hasClass('focused')) {
//		$('.question3').removeClass('focused')
//	} else {
//		$('.question3').addClass('focused')
//	}
//});
//$('.trigger4').on('click', function(){
//	if($('.question4').hasClass('focused')) {
//		$('.question4').removeClass('focused')
//	} else {
//		$('.question4').addClass('focused')
//	}
//});
//$('.trigger5').on('click', function(){
//	if($('.question5').hasClass('focused')) {
//		$('.question5').removeClass('focused')
//	} else {
//		$('.question5').addClass('focused')
//	}
//});
//$('.trigger6').on('click', function(){
//	if($('.question6').hasClass('focused')) {
//		$('.question6').removeClass('focused')
//	} else {
//		$('.question6').addClass('focused')
//	}
//});
//$('.trigger7').on('click', function(){
//	if($('.question7').hasClass('focused')) {
//		$('.question7').removeClass('focused')
//	} else {
//		$('.question7').addClass('focused')
//	}
//});
//$('.trigger8').on('click', function(){
//	if($('.question8').hasClass('focused')) {
//		$('.question8').removeClass('focused')
//	} else {
//		$('.question8').addClass('focused')
//	}
//});
//$('.trigger9').on('click', function(){
//	if($('.question9').hasClass('focused')) {
//		$('.question9').removeClass('focused')
//	} else {
//		$('.question9').addClass('focused')
//	}
//});
//$('.trigger10').on('click', function(){
//	if($('.question10').hasClass('focused')) {
//		$('.question10').removeClass('focused')
//	} else {
//		$('.question10').addClass('focused')
//	}
//});
//$('.trigger11').on('click', function(){
//	if($('.question11').hasClass('focused')) {
//		$('.question11').removeClass('focused')
//	} else {
//		$('.question11').addClass('focused')
//	}
//});
//$('.trigger12').on('click', function(){
//	if($('.question12').hasClass('focused')) {
//		$('.question12').removeClass('focused')
//	} else {
//		$('.question12').addClass('focused')
//	}
//});
//$('.trigger13').on('click', function(){
//	if($('.question13').hasClass('focused')) {
//		$('.question13').removeClass('focused')
//	} else {
//		$('.question13').addClass('focused')
//	}
//});
//$('.trigger14').on('click', function(){
//	if($('.question14').hasClass('focused')) {
//		$('.question14').removeClass('focused')
//	} else {
//		$('.question14').addClass('focused')
//	}
//});
//$('.trigger15').on('click', function(){
//	if($('.question15').hasClass('focused')) {
//		$('.question15').removeClass('focused')
//	} else {
//		$('.question15').addClass('focused')
//	}
//});
//$('.trigger16').on('click', function(){
//	if($('.question16').hasClass('focused')) {
//		$('.question16').removeClass('focused')
//	} else {
//		$('.question16').addClass('focused')
//	}
//});
//$('.trigger17').on('click', function(){
//	if($('.question17').hasClass('focused')) {
//		$('.question17').removeClass('focused')
//	} else {
//		$('.question17').addClass('focused')
//	}
//});
//$('.trigger18').on('click', function(){
//	if($('.question18').hasClass('focused')) {
//		$('.question18').removeClass('focused')
//	} else {
//		$('.question18').addClass('focused')
//	}
//});
//$('.trigger19').on('click', function(){
//	if($('.question19').hasClass('focused')) {
//		$('.question19').removeClass('focused')
//	} else {
//		$('.question19').addClass('focused')
//	}
//});
//$('.trigger20').on('click', function(){
//	if($('.question20').hasClass('focused')) {
//		$('.question20').removeClass('focused')
//	} else {
//		$('.question20').addClass('focused')
//	}
//});
//$('.trigger21').on('click', function(){
//	if($('.question21').hasClass('focused')) {
//		$('.question21').removeClass('focused')
//	} else {
//		$('.question21').addClass('focused')
//	}
//});
//$('.trigger22').on('click', function(){
//	if($('.question22').hasClass('focused')) {
//		$('.question22').removeClass('focused')
//	} else {
//		$('.question22').addClass('focused')
//	}
//});
//$('.trigger23').on('click', function(){
//	if($('.question23').hasClass('focused')) {
//		$('.question23').removeClass('focused')
//	} else {
//		$('.question23').addClass('focused')
//	}
//});
//$('.trigger24').on('click', function(){
//	if($('.question24').hasClass('focused')) {
//		$('.question24').removeClass('focused')
//	} else {
//		$('.question24').addClass('focused')
//	}
//});
//$('.trigger25').on('click', function(){
//	if($('.question25').hasClass('focused')) {
//		$('.question25').removeClass('focused')
//	} else {
//		$('.question25').addClass('focused')
//	}
//});
//$('.trigger26').on('click', function(){
//	if($('.question26').hasClass('focused')) {
//		$('.question26').removeClass('focused')
//	} else {
//		$('.question26').addClass('focused')
//	}
//});
//$('.trigger27').on('click', function(){
//	if($('.question27').hasClass('focused')) {
//		$('.question27').removeClass('focused')
//	} else {
//		$('.question27').addClass('focused')
//	}
//});
//$('.trigger28').on('click', function(){
//	if($('.question28').hasClass('focused')) {
//		$('.question28').removeClass('focused')
//	} else {
//		$('.question28').addClass('focused')
//	}
//});
//$('.trigger29').on('click', function(){
//	if($('.question29').hasClass('focused')) {
//		$('.question29').removeClass('focused')
//	} else {
//		$('.question29').addClass('focused')
//	}
//});
//$('.trigger30').on('click', function(){
//	if($('.question30').hasClass('focused')) {
//		$('.question30').removeClass('focused')
//	} else {
//		$('.question30').addClass('focused')
//	}
//});
//$('.trigger31').on('click', function(){
//	if($('.question31').hasClass('focused')) {
//		$('.question31').removeClass('focused')
//	} else {
//		$('.question31').addClass('focused')
//	}
//});
//$('.trigger32').on('click', function(){
//	if($('.question32').hasClass('focused')) {
//		$('.question32').removeClass('focused')
//	} else {
//		$('.question32').addClass('focused')
//	}
//});
//$('.trigger33').on('click', function(){
//	if($('.question33').hasClass('focused')) {
//		$('.question33').removeClass('focused')
//	} else {
//		$('.question33').addClass('focused')
//	}
//});
//$('.trigger34').on('click', function(){
//	if($('.question34').hasClass('focused')) {
//		$('.question34').removeClass('focused')
//	} else {
//		$('.question34').addClass('focused')
//	}
//});
//$('.trigger35').on('click', function(){
//	if($('.question35').hasClass('focused')) {
//		$('.question35').removeClass('focused')
//	} else {
//		$('.question35').addClass('focused')
//	}
//});
//$('.trigger36').on('click', function(){
//	if($('.question36').hasClass('focused')) {
//		$('.question36').removeClass('focused')
//	} else {
//		$('.question36').addClass('focused')
//	}
//});
//$('.trigger37').on('click', function(){
//	if($('.question37').hasClass('focused')) {
//		$('.question37').removeClass('focused')
//	} else {
//		$('.question37').addClass('focused')
//	}
//});
//$('.trigger38').on('click', function(){
//	if($('.question38').hasClass('focused')) {
//		$('.question38').removeClass('focused')
//	} else {
//		$('.question38').addClass('focused')
//	}
//});
//$('.trigger39').on('click', function(){
//	if($('.question39').hasClass('focused')) {
//		$('.question39').removeClass('focused')
//	} else {
//		$('.question39').addClass('focused')
//	}
//});



$('.cd-faq-trigger').on('click', function(){
	if($(this).hasClass('efad-color')) {
		$(this).removeClass('efad-color')
	} else {
		$(this).addClass('efad-color')
	}
});