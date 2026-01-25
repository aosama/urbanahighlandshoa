var $ = jQuery.noConflict();
var $window_width = $(window).width();
var stickyNavTop = $('header#header').offset().top;
var codelessSlider, msnry_blog, msnry_portfolio;
// Load dynamic scripts
var _loadedDependencies = [];
var _inQueue = {};
$(document).ready(function () {
	"use strict";
	var $ = jQuery.noConflict();

	/* ToolTip Activate */
	if( $('[rel=tooltip]').length > 0 ){
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'tooltip.js'], function(){ 
			$('[rel=tooltip]').tooltip();
		} );
	}
	

	/* PlaceHolder fix for IE */
	if( $('input', 'textarea').length > 0 ){
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.placeholder.min.js'], function(){ 
			$('input, textarea').placeholder();
		} );
	}
	$('#mc_mv_EMAIL').attr('placeholder', 'Type your email address');

	/* Page Header */
	pageHeader();

	/* Set Icon for list elements. (1 icon for all list) */
	codelessSetIconList();

	

	/* Styling VC section */
	codelessSectionStyle();

	/* Initialize Navigation JS Part */
	if(!$('body').hasClass('header_5'))
	codelessNavigation();

	/* Fullwidth Google Map */
	codelessFullwidthMap();

	/* IFRAME height in grid blog */
	codelessIFrameHeight();

	/* Search Button in Header */
	codelessSearchButton();

	/* Scroll Up Binding */
	scrollUpBinding();

	/* Accordion Toggle Binding */
	accordionBinding();

	/* Top Navigation Widget */
	codelessTopNavWidget();

	/* LightBox */
	codelessLightBoxInit();

	setTimeout( function(){ codelessLightBoxInit() }, 100 );

	/* Twitter Footer Carousel */
	twitterFooterCarousel();

	/* Clients Carousel Init */
	if($('.clients_caro').length > 0)
    	clientsCarousel();

    /* Testimonials Carousel Init */
    if($('.testimonial_carousel').length > 0)
		testimonialsCarousel();
		
	if( $('.left_testimonial_carousel').length > 0 )
		leftTestimonialsCarousel();

    /* Testimonial Cycle */
    if($('.testimonial_cycle').length > 0)
    	testimonialsCycle();


    /* Flexslider Init */
	if($('.flexslider').length > 0)
    	flexsliderInit();

    /* Portfolio Page Isotope Filter */
    codelessPortfolioPageIsotope();

    /* FAQ filter */
    codelessFaqFilter();

    /* Staff Carousel */
    codelessStaffCarousel();

    /* Portfolio Carousel */
    codelessPortfolioCarousel();

    /* Blog Latest Post */
    codelessLatestBlogCarousel();

    /* Codeless Slider Init */
    if($('.codeless_slider').length > 0)
		$('.codeless_slider').codelessSliderInit();  

	/* Left Navigation */
	codelessLeftNavtion();

	/* Smoothscroll */
	if( $("body").hasClass('nicescroll') )
		codeless_smoothScroll();

	if($('#blogmasonry').length > 0)
		codeless_blogmasonry();

	if($('#fullpage').length > 0)
		codeless_fullscreen_section();

	codeless_backgroundcheck(); 

	/*if($('.fixed_sidebar').length > 0)
		codeless_single_portfolio_floating();*/

	codelessExtraNav();

	//codelessCustomSelect();

	codelessTabsactive();

	codelessMobileMenu();

	codelessOverallButton();

	if($('body').hasClass('header_5'))
		codelessMenuOverlay(); 

	codelessLayoutChanges();

	codelessOnlineFunctions();

	if($('body').hasClass('one_page'))
	codelessOnePage();

	if( ($('body').hasClass('sticky_active') && $window_width >= 980 ) || ( $('body').hasClass('sticky_active') && $('body').hasClass('sticky_on_mobile') ) ) 
		codelessStickyNav();
    
    codelessGalleryCarouselInit();	

    codelessPostShares();
    
    if( $(".he-wrap").length > 0 ){
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.hoverex.js'], function(){ } );
	}
});



$(window).load(function () { 
	codelessInitParallax();	
	codelessLightBoxInit();
});



$(window).scroll(function(){ 
	"use strict";

	
});



$(window).resize(function(){
	"use strict";	
	/*var width = 1100;
	if($('.swiper_slider').length > 0){
		var slide_per_view = $('.swiper_slider').data('slidenr');

		if ($(".container").css("max-width") == "940px" ){
			slide_per_view = 4;
		}else if ($(".container").css("max-width") == "420px" ){
			slide_per_view = 1;
		}else if ($(".container").css("width") == "724px" ){
			slide_per_view = 2;
		}else if ($(".container").css("max-width") == "300px" ){
			slide_per_view = 1;
		}
		var swiperParent = new Swiper('.swiper_slider',{
		    slidesPerView: slide_per_view,
		    paginationClickable: true,
		    pagination: '.pagination'
		});
		
	}	*/
	//codelessPortfolioPageIsotope();


	codelessLayoutChanges();
	testimonialsCycle();
	codelessInitParallax();
	codelessPortfolioCarousel();

});




/*-------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------ FUNCTIONS BEGIN --------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/

/*------------------------------ Page Header ------------------------- */

function pageHeader(){
	"use strict";
	var $ = jQuery.noConflict();
	var self = $('.header_page.centered');
	if(self.length == 0)
		return false;
	var height = self.height();
		self.height(0);

	setTimeout(function(){
		self.animate({
			opacity: 1,
			height: height+'px'
		}, 800); 
	}, 600);
				
	var top = self.offset().top;
	var bottom = self.offset().top + height;
	var op_test = 1;

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
					
		if($('.fixed_header').length > 0)
			scrollTop += $('.fixed_header').height();
		if (jQuery('#wpadminbar').length > 0)
			scrollTop += 32;
		if($(window).scrollTop() == 0)
			scrollTop = 0;
		var opacity1 = 1 - ( scrollTop / bottom );
		op_test = opacity1;
		var new_height = height;
		if(scrollTop > top){
			new_height = bottom - scrollTop;
		}
		//self.css({opacity: opacity1});
		if(!self.hasClass('with_subtitle'))
			self.find('h1').css('line-height', new_height+'px').css('height', new_height+'px').css('padding-top', (height-new_height)+'px').css('opacity', opacity1);
		else{
			self.find('.titles').css('opacity', opacity1).css('padding-top', (height-new_height)+'px');
		}

	});


}



/*------------------------------ Lists ----------------------------- */

function codelessSetIconList(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.list').length > 0){
		$('.list').each(function(){
			var icon = $(this).find('ul').data('icon');
			$('i', $(this)).addClass(icon);
		});
	}
}

/* Parallax Init */

function codelessInitParallax(){
	var $ = jQuery.noConflict();
	if($('.section-style.parallax_section').length || $(".header_page:not('.no_parallax')").length){
		$(".section-style.parallax_section, .header_page:not('.no_parallax')").each(function(){
			var self = $(this); 
			loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.parallax.js'], function(){
				self.parallax("50%", 0.4); 
			})
		});
	}
}


/*------------------------------ Sections ----------------------------- */
function codelessSectionStyle(){
	"use strict";
	 var $ = jQuery.noConflict();
	$('.section-style').each(function(){
		if($(this).prev().hasClass('section-style')){
			$(this).css('margin-top', '0px');
			$(this).prev().css('margin-bottom', '0px');
		}

		if($(this).is(':last-child') && ( $(this).parent().hasClass('composer_content') || $(this).parent().hasClass('content_portfolio') )){
			$(this).parent().css('padding-bottom', '0px');
		}
		if($(this).is(':first-child') && ( $(this).parent().hasClass('composer_content') || $(this).parent().hasClass('content_portfolio') ) ){
			var style = $(this).parent().attr('style');
			if(typeof style == "undefined")
				style = ''; 
			$(this).parent().attr('style', style+'padding-top:0px !important');
		}
	});

	$('.transparency_section').each(function(){
		var height = $(this).outerHeight();
		$(this).css('margin-top', '-'+height+'px');
	});

	

	if($window_width > 979){
		$('.full-width-content.section-style ').each(function(){
			var max_height = 0;
			var full_width_section = $(this);
			full_width_section.imagesLoaded(function(){
				if($('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).length > 1){ 
					$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).each(function(){
						var this_ = $(this);
						if(this_.innerHeight() > max_height)
							max_height = this_.innerHeight(); 
					});
					$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).innerHeight(max_height+'px');
				}
			});
			
			
		});
	}else{
		$('.full-width-content.section-style .wpb_column:not(.wpb_column .wpb_column)').height('auto');
	}

	$('.section-style').each(function(){
		var self = $(this);
		if(self.css('padding-bottom') == '0px'){
			var pad = $('.wpb_column', self).last().css('padding-bottom');
			if($window_width < 768){
				$('.wpb_column', self).last().css('padding-bottom', '40px');
			}else{
				$('.wpb_column', self).last().css('padding-bottom', pad);
			}
		}
	});

	$(window).resize(function(){
		$window_width = $(this).width();
		$('.full-width-content.section-style .wpb_column:not(.wpb_column .wpb_column)').height('auto');
		if($window_width > 979){
			$('.full-width-content.section-style ').each(function(){
				var max_height = 0;
				var full_width_section = $(this);
				if($('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).length > 1){ 
					$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).each(function(){
						var this_ = $(this);
						if(this_.innerHeight() > max_height)
							max_height = this_.innerHeight(); 
					}); 
					$('.wpb_column:not(.wpb_column .wpb_column)', full_width_section).innerHeight(max_height+'px');
				}
				
			});
		}else{
			$('.full-width-content.section-style .wpb_column:not(.wpb_column .wpb_column)').height('auto');
		}

		$('.section-style').each(function(){
			var self = $(this);
			if(self.css('padding-bottom') == '0px'){
				var pad = $('.wpb_column', self).last().css('padding-bottom');
				
				if($window_width < 768){
					$('.wpb_column', self).last().css('padding-bottom', '40px');
				}else{
					$('.wpb_column', self).last().css('padding-bottom', pad);
				}
			}
		});

	});
	

}
		
/*------------------------------ Navigation -------------------------- */
function codelessNavigation(){
	"use strict";
	var $ = jQuery.noConflict();
	$('nav .menu li').each(function(){
		var self = $(this);
		if($('.codeless_mega4', self).length > 0){
			self.css('position', 'static');
		}

		if($('.codeless_mega5', self).length > 0){
			self.css('position', 'static');
		}
	});

	$('nav .menu li .sub-menu').each(function(){
		$(this).parent().first().addClass('hasSubMenu');
	});


	$('nav .menu, .sticky_menu .menu').mouseleave(function(event) {
		$(this).find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').fadeOut(400).css('display', 'none');
		$(this).find('.codeless_custom_menu_mega_menu').fadeOut(400).css('display', 'none');
	});

	$('nav .menu li ul .hasSubMenu, .sticky_menu .menu li ul .hasSubMenu').mouseleave(function(event) {
		$(this).find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').fadeOut(400).css('display', 'none');
		$(this).find('.codeless_custom_menu_mega_menu').fadeOut(400).css('display', 'none');
	});

	$('nav .menu > li, .sticky_menu .menu > li').mouseenter(function() {
		$(this).parent().find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').fadeOut(400).css('display', 'none');
		$('header#header .cart .content').fadeOut(400).css('display', 'none');

		$(this).find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').first().fadeIn(400).css('display', 'block');

		$(this).parent().find('.codeless_custom_menu_mega_menu').fadeOut(400).css('display', 'none');
		$(this).find('.codeless_custom_menu_mega_menu').first().fadeIn(400).css('display', 'block');
	});

	$('nav .menu > li ul > li, .sticky_menu .menu > li ul > li').mouseenter(function() {
		

		$(this).find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').first().fadeIn(400).css('display', 'block');

		$(this).parent().find('.codeless_custom_menu_mega_menu').fadeOut(400).css('display', 'none');
		$(this).find('.codeless_custom_menu_mega_menu').first().fadeIn(400).css('display', 'block');
	});

	$('.codeless_custom_menu_mega_menu').each(function(){
		var bg = $(this).parent('li').data('bg');
		$(this).css('background-image', 'url('+bg+')');
	});

	$('header#header .container').live('mouseleave', function(event) {
		$(this).find('.cart .content').stop().fadeOut(400).css('display', 'none');
	}); 

	$('header#header .cart_icon').live('mouseenter', function() {
		$(this).parents('header#header').first().find('.sub-menu').not('.codeless_custom_menu_mega_menu .sub-menu').stop().fadeOut(400).css('display', 'none');
		$(this).parent().find('.content').first().stop().fadeIn(400).css('display', 'block'); 
	});

	$('header#header .vert_mid > a').live('mouseenter', function() {
		$(this).parent().find('.cart .content').first().stop().fadeOut(400).css('display', 'none'); 
	});


	if($('.header_10').length > 0){
		var container_left = $('.full_nav_menu').offset().left;
		var nav = $('.full_nav_menu nav').offset().left;
		$('.codeless_custom_menu_mega_menu').each(function(){
			var minus = nav - container_left; 
			$(this).css('left', '-'+minus+'px');
		});
	}

	$(window).resize(function(){
		if($('.header_10').length > 0){
			var container_left = $('.full_nav_menu').offset().left;
			var nav = $('.full_nav_menu nav').offset().left;
			$('.codeless_custom_menu_mega_menu').each(function(){
				var minus = nav - container_left; 
				$(this).css('left', '-'+minus+'px');
			});
		}


	});
$(window).resize(function(){

	if($('.header_8').length > 0 && $('.full_nav_menu').length > 0){
		var container_left = $('.full_nav_menu').offset().left;
		var nav = $('.full_nav_menu nav').offset().left;
		$('.codeless_custom_menu_mega_menu').each(function(){
			var minus = nav - container_left;
			$(this).css('left', '-'+minus+'px');
		});
	}

});

	if($('#slider-fullwidth > .default').length > 0 && $('.header_wrapper').hasClass('header_wrapper')){
		$('.header_wrapper').removeClass('background--dark').addClass('background--light');
	}
}
		

/*------------------------------ Fullwidth Google MAP ----------------------------- */	

function codelessFullwidthMap(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.googlemap.fullwidth_map').length > 0){
		$('.googlemap.fullwidth_map').each(function(){
			var $parent = $(this).parents('.row-dynamic-el').first();
			if($parent.next().hasClass('section-style'))
				$parent.css('margin-bottom', '0px');
		}); 
		$('.row-google-map').each(function(){
			if($('.fullwidth_map', $(this)).length > 0){
				var $parent = $(this).parents('.row-dynamic-el').first();
				$parent.css('margin-top', '0px');
			}
				
		});
	}
}

 
/*------------------------------ Change IFRAME GRID height -------------------------- */   

function codelessIFrameHeight(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.blog-article.grid .media img').first().imagesLoaded(function(){
		var first_height = $('.blog-article.grid .media img').first().height();
			
		$('.blog-article.grid iframe').each(function(){
			$(this).css('height', first_height+'px');
			$(this).parent('.media').css('height', first_height+'px');
		});
	});
}

 
/*------------------------------ HEader Search Button ------------------------------ */  

function codelessSearchButton(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.open_search_button').on( 'click', function(){
		if($('body').hasClass('open_search')){
			$('body').removeClass('open_search');
		}else
			$('body').addClass('open_search');

	});

}

/*------------------------------ Side navigation --------------------------- */  

function codelessExtraNav(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.extra_navigation_button').on( 'click', function(){
		if($('body').hasClass('open_extra_nav')){
			$('body').removeClass('open_extra_nav');
		}else
			$('body').addClass('open_extra_nav');

	});

	$('.extra_navigation .close').on( 'click', function(){
		$('body').removeClass('open_extra_nav');
	});

	/*$(window).scroll(function() {
		if($('body').hasClass('open_extra_nav')){
			$('body').removeClass('open_extra_nav');
		}
	});*/

}
		

/*------------------------------ Scroll Up binding ------------------------------ */  

function scrollUpBinding(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.scrollup').on( 'click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
}
        
		
/*------------------------------ Accordion Toggle Binding ------------------------------ */  

function accordionBinding(){
	"use strict";
	var $ = jQuery.noConflict();
	$(".accordion-group .accordion-toggle").live('click', function(){
		var $self = $(this).parent().parent();
		if($self.find('.accordion-heading').hasClass('in_head')){
			$self.parent().find('.accordion-heading').removeClass('in_head');
		}else{  
			$self.parent().find('.accordion-heading').removeClass('in_head');
			$self.find('.accordion-heading').addClass('in_head');
		}
	});
}

/*------------------------------ Top Navtion Widget ------------------------------ */ 
function codelessTopNavWidget(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.small_widget a').not('.aaaa a').toggle(function(e){
		$('.small_widget').removeClass('active'); 
              e.preventDefault();
		var box = $(this).data('box');
		$('.top_nav_sub').hide();
		$('.top_nav_sub.'+box).fadeIn("400");
              $(this).parent().addClass('active'); 

	}, function(e){
		e.preventDefault();
		var box = $(this).data('box');
              $('.small_widget').removeClass('active');  
		$('.top_nav_sub').fadeOut('400');
		$('.top_nav_sub.'+box).fadeOut('slow');
            
              
	});
}	

	
/*------------------------------ LightBox -------------------------------------- */ 

function codelessLightBoxInit(){
	"use strict";
	var $ = jQuery.noConflict();
	if( $('.lightbox-gallery').length > 0 || $('.show_review_form').length > 0 || $('.lightbox-media').length > 0 || $('.video_lightbox_button .lightbox').length > 0){
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.fancybox.min.js'], function(){
			$(".lightbox-gallery").fancybox();
			$('.show_review_form').fancybox();

			
			$('.lightbox-media').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',
				helpers : {
					media : {}
				}
			});


			$('.video_lightbox_button .lightbox').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',
				helpers : {
					media : {}
				}
			});
		});
	}
	
}


/*------------------------------ Tweeter Footer Carousel ------------------------ */ 

function twitterFooterCarousel(){
	"use strict";
	var $ = jQuery.noConflict();
	$("#tweet_footer").each(function(){
		var $self = $(this);
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.carouFredSel-6.1.0-packed.js'], function(){
			$self.carouFredSel({
				circular : true,
				infinite : true,
				auto : false,
				scroll : {
					items : 1,
					fx : "fade"
				},
				prev : {
					button : $self.parent().parent().find('.back')
				},

				next : {
					button : $self.parent().parent().find('.next')
				}
		
			});
		});
	});
}


/*------------------------------ Blog Carousel ------------------------ */ 

function codelessBlogCarousel(){
	"use strict";
	var $ = jQuery.noConflict();
	$(".carousel_blog").each(function(){
	    var $self = $(this);
	    if( $('li img', $self).size() ) {
	  		$('li img', $self).one("load", function(){
				loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.carouFredSel-6.1.0-packed.js'], function(){
					$self.carouFredSel( {		
						circular: true,
						infinite: true,
						auto 	: false,

						scroll  : {
							items : 1
						},

						prev : {
							button : $self.parents('.latest_blog').find('.prev')
						},

						next : {
							button : $self.parents('.latest_blog').find('.next')
						}
				
					});
				});
			}).each(function() {
	  		    if(this.complete) $(this).trigger("load");
	  		});
		}else{
			loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.carouFredSel-6.1.0-packed.js'], function(){
				$self.carouFredSel( {		
					circular: true,
					infinite: true,
					auto 	: false,

					scroll  : {
						items : 1
					},

					prev : {
						button : $self.parents('.latest_blog').find('.prev')
					},

					next : {
						button : $self.parents('.latest_blog').find('.next')
					}
				
				});
			});
		}  	         
	});		
}

     
/*------------------------------ Clients Carousel ------------------------ */ 

function clientsCarousel(){
	"use strict";
    var $ = jQuery.noConflict();
	var $self = $('.clients_caro');
	if($self.length){
		$self.css('display', 'none');
		$self.imagesLoaded(function(){
			$self.css('display', 'block');
			loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.carouFredSel-6.1.0-packed.js'], function(){
				$self.carouFredSel( 
				{
							items:4,
							auto: false, 
							scroll: { items : 1 },
							prev : {
								button : $self.parents('.clients_el').first().find('.prev')
							},

							next : {
								button : $self.parents('.clients_el').first().find('.next')
							}
				});
			});
		})
	}
	
	

}


/*------------------------------ Testimonials Carousel ------------------------ */ 
    	
function testimonialsCarousel(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.testimonial_carousel').each(function(){
		var $self = $(this);
		var c_duration = $self.data('duration');
		if(c_duration == 'undefined')
			c_duration = 500;
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.carouFredSel-6.1.0-packed.js'], function(){
			$self.carouFredSel({
							
				auto: true,

				scroll: { items : 1, fx: 'fade', duration: c_duration },
				prev : {
					button : $self.parent('.testimonial_carousel_element').find('.prev')
				},

				next : {
					button : $self.parent('.testimonial_carousel_element').find('.next')
				}

			});
		});
	

			var max_height = 0;
			$('.item', $self).each(function(){
				if($(this).height() > max_height)
					max_height = $(this).height() + 25;
			});
	        
			$('.item', $self).height(max_height+'px');

	
			

	});


}


function leftTestimonialsCarousel(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.left_testimonial_carousel').each(function(){
		var $self = $(this);
		var c_duration = $self.data('duration');
		if(c_duration == 'undefined')
			c_duration = 500;

		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'owl.carousel.min.js'], function(){
			$self.imagesLoaded( function() {
				var owl = $self.owlCarousel({
					items: 1,
					dots: true
				});
				
			});
		});

	});


}

/* ---------------------------- Testimonial Cycle ----------------------------- */

function testimonialsCycle(){
	"use strict";
    var $ = jQuery.noConflict();
	$('.testimonial_cycle').each(function(){
		var $self = $(this);
		var container_width = $self.parents('.wpb_wrapper').first().width();
		$('.item', $self).width(container_width+'px');

		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.carouFredSel-6.1.0-packed.js'], function(){
			$self.carouFredSel({
							
				auto: true,
				scroll: { items : 1, fx: 'fade' },

			});
		});

	});
}


/*------------------------------ Flexslider Init ------------------------ */ 
function flexsliderInit(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.flexslider').each(function(){ 
		var $s = $(this);

		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.flexslider-min.js'], function(){
			$s.flexslider({
				slideshowSpeed: 6000,
				animationSpeed: 800,
						
				controlNav: true,
				pauseOnAction: true,
				pauseOnHover: false,
				start: function(slider) {

					$s.find(" .slides > li .flex-caption").each(function(){
						var effect_in = $(this).attr("data-effect-in");
						var effect_out = $(this).attr("data-effect-out");
						$(this).addClass("animated " + effect_in);
						

					});
				},
				before: function(slider) {
					var current_slide = $s.find(".slides > li").eq(slider.currentSlide);
					$s.find(".slides > li .flex-caption").removeClass('animated');				
					$(".flex-caption", current_slide).each(function(){
						var effect_in = $(this).attr("data-effect-in");
						var effect_out = $(this).attr("data-effect-out");

						$(this).removeClass("animated "+effect_in).addClass("animated " + effect_out);
					});
				},
				after: function(slider) {
					var current_slide = $s.find(".slides > li").eq(slider.currentSlide);
					$s.find(".slides > li .flex-caption").removeClass('animated');				
					$(".flex-caption", current_slide).each(function(){
						var effect_in = $(this).attr("data-effect-in");
						var effect_out = $(this).attr("data-effect-out");

						$(this).removeClass("animated "+effect_out).addClass("animated " + effect_in);
					});
				}		
			});
		});
	});
}


/*------------------------------ Portfolio Page Isotope filter ------------------------ */ 

function codelessPortfolioPageIsotope(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('#portfolio-preview-items > .row').length > 0){
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'isotope.js'], function(){
			var $container = $('#portfolio-preview-items > .row');
			var masonry = false;
			var column_width = '.portfolio-item';


			if( $container.hasClass('masonry') ){
				masonry = true;
				column_width = '.grid-size'
			}


			$container.imagesLoaded(function(){
				$container.isotope({
						itemSelector: '.portfolio-item',
						percentPosition: true,
						masonry: {
						  // use outer width of grid-sizer for columnWidth
						  columnWidth: column_width
						}
				});
				if($('.infinite_scroll_pag').length > 0 && $('#portfolio-preview-items').length > 0)
					codelessPortfolioInfiniteScroll();

			});


			
			if( $( '#portfolio-filter' ).length > 0 ){
				$('#portfolio-filter li a').on( 'click', function(e){
					e.preventDefault();
	
					var filterValue = $(this).attr('data-filter');
					console.log(filterValue);
					if( filterValue != 'all' )
						$container.isotope({
							filter: filterValue,
							sortBy: 'random'
						}); 
					else
						$container.isotope({
								filter: '*',
								sortBy: 'original-order'
						}); 
					
					$container.isotope('arrange');
	
					$(this).closest('ul').find('li.active').removeClass('active');
					$(this).parent().addClass('active');
					
				});
			}
		});

		
	}
}


function codelessPortfolioInfiniteScroll(){
	"use strict";
	var $ = jQuery.noConflict();
	var container = '#portfolio-preview-items > .row';
	var behavior = '';
	
	loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.infinitescroll.min.js'], function(){
		var iso = $(container).data('isotope');
		console.log(iso);
		$(container).infiniteScroll({
	

			path : ".p_pagination a.next_link",    
						// selector for the NEXT link (to page 2)
			append : "#portfolio-preview-items > .row .portfolio-item",          
						// selector for all items you'll retrieve
			loadOnScroll: true,
			outlayer: iso,
			status: '.p_pagination .page-load-status'
		});


		$(container).on( 'append.infiniteScroll', function( event, response, path, items ) {
           
            setTimeout(function(){
                $(container).isotope('arrange');
        	}, 50);
                        
        });
	});
}
	
    
/*------------------------------ FAQ Isotope filter ------------------------ */ 

function codelessFaqFilter(){
	"use strict";
	var $ = jQuery.noConflict();
	$('nav#faq-filter li a').on( 'click', function(e){
		e.preventDefault();

		var selector = $(this).attr('data-filter');

		$('.faq .accordion-group').fadeOut();
		$('.faq .accordion-group'+selector).fadeIn();

		$(this).parents('ul').find('li').removeClass('active');
		$(this).parent().addClass('active');
	});
}	


/*------------------------------ Staff Carousel ------------------------------ */ 

function codelessStaffCarousel(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.staff_slider').length > 0){
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'swiper.min.js'], function(){
				$('.staff_slider').parents('.span_12').first().css('display', 'block');
			
				var slide_per_view = $('.staff_slider').data('slidenr');


				if ($window_width >= 979 && $window_width < 1100 ){
					slide_per_view = 3;
				}else if ($window_width >= 421 && $window_width < 768 ){ 
					slide_per_view = 2;
				}else if ($window_width <= 420){
					slide_per_view = 1;
				}else if ($window_width >= 768 && $window_width < 979 ){
					slide_per_view = 2;
				}else if($window_width > 1100){
					slide_per_view = $('.staff_slider').data('slidenr');
				} 

			
			var staff_slider = new Swiper('.staff_slider',{
				slidesPerView: slide_per_view, 
				paginationAsRange: false,
			});
			var $pag_wrapper = $('.staff_carousel').parents('.vc_row').first().prev();
			if($('.staff_carousel').length > 0){
					if($('.staff_carousel .swiper_pagination').length > 0){
						$pag_wrapper.find('.wpb_wrapper .block_title').append( '<div class="swiper_pagination nav-fillpath">' + $('.staff_carousel .swiper_pagination').html() + '</div>' );
						$('.staff_carousel .swiper_pagination').remove();
					}
					

					var height = $('.staff_carousel .single_staff').height();
					$('.staff_carousel .swiper-wrapper').css({height: height+'px'});
			}
			
			if($pag_wrapper.find('.swiper_pagination').length > 0){
				$('.swiper_pagination .next', $pag_wrapper ).on('click', function(e){
						e.preventDefault();
						staff_slider.slideNext();
				});

				$('.swiper_pagination .prev', $pag_wrapper).on('click', function(e){
						e.preventDefault();
						staff_slider.slidePrev();
				});
			}

			$(window).resize(function(){
				$window_width = $(window).width();
				if ($window_width >= 979 && $window_width < 1100 ){
					slide_per_view = 3;
				}else if ($window_width >= 421 && $window_width < 768 ){ 
					slide_per_view = 2;
				}else if ($window_width <= 420){
					slide_per_view = 1;
				}else if ($window_width >= 768 && $window_width < 979 ){
					slide_per_view = 2;
				}else if($window_width > 1100){
					slide_per_view = $('.staff_slider').data('slidenr');
				} 

				var staff_slider = new Swiper('.staff_slider',{
					slidesPerView: slide_per_view, 
					paginationAsRange: false,
				});
				var height = $('.staff_carousel .single_staff').height();
				$('.staff_carousel .swiper-wrapper').css({height: height+'px'});
			});
		});
	}
}


/*------------------------------ Portfolio Carousel ------------------------------ */ 

function codelessPortfolioCarousel(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.portfolio_slider').length > 0){
	    loadDependencies( [ codeless_global.FRONT_LIB_JS + 'swiper.min.js'], function(){
			var slide_per_view = $('.portfolio_slider').data('slidenr');

			if ($(".container").css("max-width") == "940px" ){
				slide_per_view = 4;
			}else if ($(".container").css("max-width") == "420px" ){
				slide_per_view = 1;
			}else if ($(".container").css("width") == "724px" ){
				slide_per_view = 2;
			}else if ($(".container").css("max-width") == "300px" ){
				slide_per_view = 1;
			}

			
				var portfolio_slider = new Swiper('.portfolio_slider',{ 
					slidesPerView: slide_per_view, 
					paginationAsRange: false, 
				});
				var $pag_wrapper = $('.recent_portfolio').parents('.vc_row').first().prev();
				if($('.portfolio_slider').length > 0){
						$pag_wrapper.find('.wpb_wrapper .block_title').append( '<div class="swiper_pagination nav-fillpath">' + $('.recent_portfolio .swiper_pagination').html() + '</div>' );
						
						setTimeout(function(){
							$('.recent_portfolio .swiper_pagination').remove();
						}, 30)
						

						
							if( $('.recent_portfolio .portfolio-item img').size() ) {
								

								$('.recent_portfolio .portfolio-item img').one("load", function(){
									
									var height = $(this).height();
									$('.portfolio_slider .swiper-wrapper').css({height: height+'px'});  
									portfolio_slider.update();

								});
							}
					
						
						
				}
				

				$('.swiper_pagination .next', $pag_wrapper ).live('click', function(e){ 
						e.preventDefault();
						portfolio_slider.slideNext();
				});

				$('.swiper_pagination .prev', $pag_wrapper).live('click', function(e){
						e.preventDefault();
						portfolio_slider.slidePrev();
				});
			
				if($(".container").css("max-width") == "420px" ) {
						portfolio_slider.update();
						
				}
		
		});
	}
}


/*------------------------------ Portfolio Carousel ------------------------------ */ 

function codelessLatestBlogCarousel(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.blog_slider').length > 0){
	    loadDependencies( [ codeless_global.FRONT_LIB_JS + 'swiper.min.js'], function(){
				var slide_per_view = $('.blog_slider').data('slidenr');

				if ($(".container").css("max-width") == "940px" ){
					slide_per_view = 4;
				}else if ($(".container").css("max-width") == "420px" ){
					slide_per_view = 1;
				}else if ($(".container").css("width") == "724px" ){
					slide_per_view = 2;
				}else if ($(".container").css("max-width") == "300px" ){
					slide_per_view = 1;
				} 
			
			var blog_slider = new Swiper('.blog_slider',{ 
				slidesPerView: slide_per_view, 
				paginationAsRange: false, 
			});
			var $pag_wrapper = $('.latest_blog').parents('.vc_row').first().prev();
			if($('.blog_slider').length > 0){
					$pag_wrapper.find('.wpb_wrapper .block_title').append( '<div class="swiper_pagination nav-fillpath">' + $('.latest_blog .swiper_pagination').html() + '</div>' );
					$('.latest_blog .swiper_pagination').remove();
			}
			

			$('.swiper_pagination .next', $pag_wrapper ).live('click', function(e){ 
					e.preventDefault();
					portfolio_slider.slideNext();
			});

			$('.swiper_pagination .prev', $pag_wrapper).live('click', function(e){
					e.preventDefault();
					portfolio_slider.slidePrev();
			});
		});
	  
	}
}
	

/*------------------------------ Codeless Slider ------------------------------ */ 

$.fn.codelessSliderInit = function () {
    "use strict";
	var $ = jQuery.noConflict();
	

    var slider = this;
    var parent = this.parents('.codeless_slider_swiper').first();
    var slide_per_view = slider.data('slidenumber');
	var height = slider.data('height');

	loadDependencies( [ codeless_global.FRONT_LIB_JS + 'swiper.min.js'], function(){

		if(height == 'fullscreen')
			height = $(window).height();

		var $loading = $('.loading', parent);

		if($('body').hasClass('header_7')  && $(window).width() > 970 && $('.codeless_slider_wrapper', parent).css('position') == 'fixed' ){
			var pad = $('.header_wrapper').innerWidth();
			var pos = 'left'
			if($('.pos--right').length > 0)
				pos = 'right'
			$('.codeless_slider_wrapper', parent).css('padding-'+pos, pad+'px');
			$('.codeless_slider_wrapper', parent).width( $('#slider-fullwidth').width() +'px' );
		}



		parent.height(height+'px');
		slider.height(height+'px');
		$('.codeless_slider_wrapper', parent).css('min-height', height+'px');
		parent.css('min-height', height+'px');

	/* ----uncomment this if you want a min height for slider on responsive */
	/*
		if($(window).width() < 767){
			var window_width = $(window).width();
			var new_height = (window_width * height) / 767;
			$('.codeless_slider_wrapper', parent).css('min-height', new_height+'px');
			parent.css('min-height', new_height+'px');

			parent.height(new_height+'px');
			slider.height(new_height+'px');
		}
		*/

		$('.codeless_slider').imagesLoaded(function(){
			$loading.css('display', 'none');
			var c_speed = $('.codeless_slider').data('speed');
			if(c_speed == 'undefined')
				c_speed = 800;
		
			var touch = true;
			if( $('.codeless_slider .swiper-slide').length == 1 )
				touch = false;

			codelessSlider = new Swiper('.codeless_slider',{ 
				slidesPerView: slide_per_view,
				paginationAsRange: false,
				loop: false,
				touchRatio: 0.7,
				autoplay: true,
				speed: c_speed,
				simulateTouch: touch,
				
				noSwiping: true,
				updateOnImagesReady:true,
				on:{
					
					/*init: function(swiper){
						console.log(codelessSlider);
						var $h1 = $(swiper.activeSlide()).find('h1');
						var $p =  $(swiper.activeSlide()).find('p');
						var $buttons =  $(swiper.activeSlide()).find('.buttons');
						var slide_color = $(swiper.activeSlide()).data('color');
						$h1.removeClass('with_animation').addClass($h1.data('animation'));
						$p.removeClass('with_animation').addClass($p.data('animation'));
						$buttons.removeClass('with_animation').addClass($buttons.data('animation'));
						if( $('.header_wrapper').hasClass('header_1'))
							$('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--'+slide_color);
					},*/
					slideChangeTransitionEnd: function(swiper){
						var activeSlide = codelessSlider.slides[codelessSlider.activeIndex];
						var $h1 = $(activeSlide).find('h1');
						var $p =  $(activeSlide).find('p');
						var $buttons =  $(activeSlide).find('.buttons');
						var slide_color = $(activeSlide).data('color');
						$h1.removeClass('with_animation').addClass($h1.data('animation'));
						$p.removeClass('with_animation').addClass($p.data('animation'));
						$buttons.removeClass('with_animation').addClass($buttons.data('animation'));

						
						$h1 = $(activeSlide).next().find('h1');
						$p =  $(activeSlide).next().find('p');
						$buttons =  $(activeSlide).next().find('.buttons');
						$h1.addClass('with_animation').removeClass($h1.data('animation'));
						$p.addClass('with_animation').removeClass($p.data('animation'));
						$buttons.addClass('with_animation').removeClass($buttons.data('animation'));

						$h1 = $(activeSlide).prev().find('h1');
						$p =  $(activeSlide).prev().find('p');
						$buttons =  $(activeSlide).prev().find('.buttons');
						$h1.addClass('with_animation').removeClass($h1.data('animation'));
						$p.addClass('with_animation').removeClass($p.data('animation'));
						$buttons.addClass('with_animation').removeClass($buttons.data('animation'));
						if( $('.header_wrapper').hasClass('header_1') && !$('.header_wrapper').hasClass('open'))
							$('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--'+slide_color);
					},
					slideChangeTransitionStart: function(swiper){
						var activeSlide = codelessSlider.slides[codelessSlider.activeIndex];
						var $h1 = $(activeSlide).find('h1');
						var $p =  $(activeSlide).find('p');
						var $buttons =  $(activeSlide).find('.buttons');
						var slide_color = $(activeSlide).data('color');
						$h1.addClass('with_animation').removeClass($h1.data('animation'));
						$p.addClass('with_animation').removeClass($p.data('animation'));
						$buttons.addClass('with_animation').removeClass($buttons.data('animation'));
						if( $('.header_wrapper').hasClass('header_1') && !$('.header_wrapper').hasClass('open'))
							$('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--'+slide_color);
					}
				}
			});

			$('.nav-slider .next', parent ).live('click', function(e){ 
				e.preventDefault();
				codelessSlider.slideNext();
			});

			$('.nav-slider .prev', parent).live('click', function(e){
					e.preventDefault();
					codelessSlider.slidePrev();
			});
		});

		$.browserSelector();

		if(parent.hasClass('parallax_slider') && $('.container').width() > 724 && $window_width != 1024 && !$("html").hasClass("safari") ){
			loadDependencies( [ codeless_global.FRONT_LIB_JS + 'skrollr.min.js'], function(){
				var skrollr_slider = skrollr.init({
					edgeStrategy: 'set', 
					smoothScrolling: true, 
					forceHeight: false 
				}); 
				skrollr_slider.refresh()
			});
		}

		if($("html").hasClass("safari")){
			$('.codeless_slider_wrapper', parent).css('-webkit-perspective', 'none').css('-webkit-transform', 'none');
		}
		

		if($('.swiper-slide', slider).length == 1)
			$('.nav-slider', parent).hide();

		$(window).resize(function(){
			if($('body').hasClass('header_7') && $(window).width() > 970 ){
				var pad = $('.header_wrapper').innerWidth();
				var pos = 'left'
				if($('.pos--right').length > 0)
					pos = 'right'
				$('.codeless_slider_wrapper', parent).css('padding-'+pos, pad+'px');
				$('.codeless_slider_wrapper', parent).width( $('#slider-fullwidth').width() +'px' );
			}else{ 
				var pos = 'left'
				if($('.pos--right').length > 0)
					pos = 'right'
				$('.codeless_slider_wrapper', parent).css('padding-'+pos, 0+'px');
				$('.codeless_slider_wrapper', parent).width( $('#slider-fullwidth').width() +'px' );
			}

			height = slider.data('height');

			if(height == 'fullscreen'){
				height = $(window).height();
				$('.codeless_slider_wrapper', parent).css('min-height', height+'px');
				parent.css('min-height', height+'px');
			}
			parent.height(height+'px');
			slider.height(height+'px');

			if($(window).width() < 767){
				var window_width = $(window).width();
				var new_height = (window_width * height) / 767;
				$('.codeless_slider_wrapper', parent).css('min-height', new_height+'px');
				parent.css('min-height', new_height+'px');

				parent.height(new_height+'px');
				slider.height(new_height+'px');
			}

		});  
	});
};


/*------------------------------ Woocommerce Functions ------------------------------ */ 
	
function codelessWoocommerceInit(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.add_to_cart_button').length > 0){
		
		$('body').on('adding_to_cart', function(event, param1, param2){
			var $thisbutton = param1;
			var $product = $thisbutton.parents('.product').first();
			var $load = $product.find('.loading_ef');
			$load.css('opacity', 1);
			$('body').on('added_to_cart', function(event, param1, param2){
				
				$load.css('opacity', 0);
				
				setTimeout(function(){$load.html('<i class="moon-checkmark"></i>'); $load.css('opacity', 1);}, 500);
				setTimeout(function(){$load.css('opacity', 1);}, 400);
				setTimeout(function(){$load.css('opacity', 0);}, 2000);
				$product.addClass('product_added_to_cart');
			});
		});
	}
}


/*------------------------------ Left Navigation ------------------------------ */ 

function codelessLeftNavtion(){
	"use strict";
	var $ = jQuery.noConflict();
	$(".page_item_has_children").each(function(){
    	$(this).on( 'click',function(){
	        $(this).find('.children').toggle(400);
	        $(this).toggleClass('open-child');
       
    	});
  	});

   $('li.current_page_item').parents('.children').css({ display: 'block' });
   $('.current_page_ancestor').addClass('open-child');
}
    

/*------------------------------ Mobile Menu ---------------------------- */ 

function codelessMobileMenu(){
	"use strict";
	var $ = jQuery.noConflict();
	var height = $('header#header .row-fluid:first-child .span12, .header_wrapper').height();
	var padding = $('.top_wrapper').css('padding-top');

	$('.mobile_small_menu').on( 'click', function(){
		
		if($(this).hasClass('open')){
			$('.header_wrapper').height('auto');
			$('header#header .row-fluid:first-child .span12').css('position', 'relative');

			$('header#header .row-fluid:first-child .span12').height(height);
			$('.menu-small').slideDown(400);
			if(!$('body').hasClass('header_3')) 
				$('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

			if($('body').hasClass('header_4'))
				$('.top_wrapper').css('padding-top', '0'); 
			$('.tparrows').hide();
			
			$(this).removeClass('open').addClass('close');
		}else if($(this).hasClass('close')){

			$('.menu-small').slideUp(400);
			$('.tparrows').show();
			if(!$('body').hasClass('header_3'))
				$('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

			if($('body').hasClass('header_4'))
				$('.top_wrapper').css('padding-top', padding);
			$(this).removeClass('close').addClass('open'); 
			$('.header_wrapper').height('auto');
		}
	});

	$('#mobile-menu li').each(function(){
		var id = $(this).attr('id');
		$(this).attr('id', 'responsive-'+id);
	});

	$(window).resize(function(){
		var height = $('header#header .row-fluid:first-child .span12, .header_wrapper').height();
		var padding = $('.top_wrapper').css('padding-top');
		if($(window).width() > 980){
			$('.header_7 .header_wrapper').height('100%');
			$('.menu-small').slideUp(400);
			$('.tparrows').show();
			if(!$('body').hasClass('header_3'))
				$('.top_wrapper').css('float', 'none').css('width', 'inherit').css('display', 'block');

			if($('body').hasClass('header_4'))
				$('.top_wrapper').css('padding-top', padding);
			$('.mobile_small_menu').removeClass('close').addClass('open'); 
			$('.header_wrapper').height('auto');
		}
	});
}
	



/*-------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------ FUNCTIONS END ----------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------*/



    
      
/*------------------------------ Switcher Toggle Button ------------------------ */ 
    
function codelessSwitcherToggle(){
	"use strict";
	var $ = jQuery.noConflict();
	$("#switcher-head .button").toggle(function(){
		$("#style-switcher").animate({
			left: 0
		}, 500);
	}, function(){
		$("#style-switcher").animate({
			left: -263
		}, 500);
	});
}  


/* ----------------------------- SmoothScroll ---------------------------- */

function codeless_smoothScroll(){
	"use strict";
	var $ = jQuery.noConflict();
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}
}

/* ----------------------------- End SmoothScroll ------------------------ */


/* ----------------------------- BLOG Masonry ---------------------------- */

function codeless_blogmasonry(){
	"use strict";
	var $ = jQuery.noConflict();
	loadDependencies( [ codeless_global.FRONT_LIB_JS + 'isotope.js'], function(){
		var container = $('#blogmasonry .filterable');
			container.imagesLoaded(function(){

					container.isotope({
						itemSelector: '.blog-article',
						percentPosition: true,
						masonry: {
						  // use outer width of grid-sizer for columnWidth
						  columnWidth: '.grid-size'
						}
					});
					if($('.infinite_scroll_pag').length > 0 && $('#posts_container').length > 0)
						codelessBlogInfiniteScroll();
					
				});
	});
}

/* ----------------------------- End BLOG Masonry ------------------------ */


/* ----------------------------- Codeless Post Share --------------------- */
function codelessPostShares(){
	"use strict";
	var $ = jQuery.noConflict();
	$('.blog-article .share_link').each(function(){
		var link = $(this);
		link.live('click',function(){
			var cont = $(this).parents('.blog-article').find('.shares');
			var parent = $(this).parents('.blog-article').parent();
			if(link.hasClass('opened')){
				cont.css('opacity', 0).css('visibility', 'hidden');
				link.removeClass('opened');
			}else{
				parent.find('.share_link').removeClass('opened');
				parent.find('.shares').css('opacity', 0).css('visibility', 'hidden');
				link.addClass('opened');
				cont.css('visibility', 'visible').css('opacity', 1);
				
			}
		});

	});
	
}
/* ----------------------------- End Codeless Post Share ----------------- */


/* ----------------------------- Background Check ------------------------ */

function codeless_backgroundcheck(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.header_1').length > 0 || $('.header_4').length > 0){
		if($('.page_header_centered').length > 0 && $('.auto_color_check').length > 0){
			$('.header_wrapper').addClass('background--dark');
			BackgroundCheck.init({
				targets: '.header_wrapper',
				images: '.header_page',
				classes: { dark: 'background--dark', light: 'background--light', complex: 'background--dark' }
			});
			setTimeout(function(){ BackgroundCheck.refresh(); }, 400);
		}

		if($('#fullpage').length > 0 && $('.auto_color_check').length > 0){
			$('.header_wrapper').addClass('background--dark');
			BackgroundCheck.init({
				targets: '.header_wrapper', 
				images: '.section'
			});
			setTimeout(function(){
				if($('.header_wrapper').hasClass('background--light'))
					$('.section:first-child .content').addClass('background--light');
				else if($('.header_wrapper').hasClass('background--dark'))
					$('.section:first-child .content').addClass('background--dark');
			}, 800);
		}

		if($('.fullscreen-single').length > 0 && $('.auto_color_check').length > 0){
			$('.header_wrapper').addClass('background--dark');
			var ca = Array.prototype.slice.call(document.querySelectorAll(".header_wrapper")).concat(Array.prototype.slice.call(document.querySelectorAll(".fullscreen-single")));
			BackgroundCheck.init({
				targets: ca, 
				images: '.header_fullscreen_single img',
				windowEvents: false
			});
		}
			
			 		
	}
} 

/* ----------------------------- End Background Check -------------------- */

/* ----------------------------- Fullscreen Section ---------------------- */

function codeless_fullscreen_section(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.fullscreen-blog-article').length > 0){
		$('#fullpage .section .content').each(function(){
			var height = $(this).height();
			$(this).css('margin-top', '-'+(height/2)+'px' );	
		});
	}
	loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.fullPage.js'], function(){
		$('#fullpage').fullpage({
			verticalCentered: false,
			navigation: true,
			navigationPosition: 'right',
			resize: false,
			afterLoad: function(anchorLink, index){
				if($('.auto_color_check').length > 0){
					BackgroundCheck.refresh();
					if($('.header_wrapper').hasClass('background--light'))
						$('.section:nth-child('+index+') .content').addClass('background--light');
					else if($('.header_wrapper').hasClass('background--dark'))
						$('.section:nth-child('+index+') .content').addClass('background--dark');
				}
				$('#fullpage .section .with_animation').animate_on_appear();
				


			},
			afterRender: function(){
				$('#fullpage .section .with_animation').animate_on_appear();
			}
			/*onLeave: function(index, nextIndex){
				var current = $('#fullpage .section:nth-child('+index+') .content') ;
				var next = $('#fullpage .section:nth-child('+nextIndex+') .content');
				current.removeClass('with_animation').removeClass(current.data('animation'));
				next.addClass('with_animation').delay(current.data('delay')).queue( function() {
					$(this).addClass(current.data('animation'));
				});
			}*/

		});	
	});
}

/* ----------------------------- End Fullscreen Section ------------------- */

/* ----------------------------- SINGLE PORTFOLIO FLOATING----------------- */

function codeless_single_portfolio_floating(){
	"use strict";
	var $ = jQuery.noConflict();
	var $sidebar   = $(".fixed_sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15;

    if( $('.container').width() > 420 && $sidebar.length > 0){
    	$window.scroll(function() {
	        if ($window.scrollTop() > offset.top) {
	            $sidebar.stop().animate({
	                marginTop: $window.scrollTop() - offset.top + topPadding
	            });
	        } else {
	            $sidebar.stop().animate({
	                marginTop: 0
	            });
	        }
	    });
    }else{
    	$(window).unbind('scroll');
    }
}


/* ----------------------------- END SINGLE PORTFOLIO FLOATING------------ */

/* ----------------------------- Custom Select --------------------------- */

function codelessCustomSelect(){
	"use strict";
	var $ = jQuery.noConflict();
	if( $('.woocommerce-ordering .orderby').length > 0 )
	loadDependencies( [ codeless_global.FRONT_LIB_JS + 'select2.min.js'], function(){
		$('.woocommerce-ordering .orderby').select2();
	});
}

/* ----------------------------- End Custom Select ----------------------- */

/* ----------------------------- Codeless gallery carousel --------------- */

function codelessGalleryCarouselInit(){
	"use strict";
	var $ = jQuery.noConflict();
	var gallery = $('.codeless_gallery_carousel');
	
	var slider = gallery.find('.codeless_swiper_gallery');
	
	if(gallery.length > 0){
		loadDependencies( [ codeless_global.FRONT_LIB_JS + 'swiper.min.js'], function(){
			var height = gallery.data('height');

			if(height == 'fullscreen')
				height = $(window).height();

			var $loading = $('.loading', gallery);

			gallery.height(height+'px');
			slider.height(height+'px');

			var centeredSlides = false;
			var slidesPerView = 'auto';
			
				if( gallery.hasClass('opacity') ){
					centeredSlides = true;
					slidesPerView = 'auto';
				}
				
				
				
					codelessSlider = new Swiper('.codeless_swiper_gallery',{ 
							slidesPerView:slidesPerView,
							//paginationAsRange: false,
							loop: true,
							touchRatio: 0.7,
							autoplay: 5000, 
							centeredSlides: centeredSlides,
							speed: 800,
							preloadImages:true,
							updateOnImagesReady:true,
							
							breakpoints:{
								767:{
									loop:true,
									slidesPerView:1,
									centeredSlides:false,
									autoHeight:true
								}
							},
							navigation: {
								nextEl: '.next',
								prevEl: '.prev',
							},
							on:{
								init:function(){
									$loading.css('display', 'none');
									slider.css('opacity', 1);
								}
							}

						});
					
					

				
				

			if($('.swiper-slide', slider).length == 1)
				$('.nav-slider', gallery).hide();

			$(window).resize(function(){

				if($('body').hasClass('header_7') && $(window).width() > 970 ){
					var pad = $('.header_wrapper').innerWidth();
					var pos = 'left'
					if($('.pos--right').length > 0)
						pos = 'right'
					$('.codeless_slider_wrapper', gallery).css('padding-'+pos, pad+'px');
					$('.codeless_slider_wrapper', gallery).width( $('#slider-fullwidth').width() +'px' );
				}else{ 
					var pos = 'left'
					if($('.pos--right').length > 0)
						pos = 'right'
					$('.codeless_slider_wrapper', gallery).css('padding-'+pos, 0+'px');
					$('.codeless_slider_wrapper', gallery).width( $('#slider-fullwidth').width() +'px' );
					
				}

			});

		});

	}
}

/* ----------------------------- End Codeless gallery carousel ----------- */



/* ----------------------------- Tabs ------------------------------------ */

function codelessTabsactive(){
	"use strict";
	var $ = jQuery.noConflict();
	if($('.tabbable').length > 0){
		$('.tabbable').each(function(){
			var id = $(this).find('.nav-tabs li.active a').attr('href');
			$(this).find(id).addClass('active');
		});
	}
}

/* ----------------------------- End Tabs -------------------------------- */

/* ----------------------------- Buttons Style --------------------------- */

function codelessOverallButton(){
	"use strict";
	var $ = jQuery.noConflict();
	var extra = codeless_global.button_style;

	if($('.wpcf7-form p input[type="submit"]').length > 0){
		$('.wpcf7-form p input[type="submit"]').addClass('btn-bt').addClass(extra);
	}
	if($('#respond input[type="submit"]').length > 0){
		$('#respond input[type="submit"]').addClass('btn-bt').addClass(extra);
	}

	if($('.woocommerce .button, #woocommerce .button, #place_order').length > 0){
		$('.woocommerce .button, #woocommerce .button, #place_order').addClass('btn-bt').addClass(extra);
	}

	if($('.not_found .search_field').length > 0){
		$('.not_found .search_field button').addClass('btn-bt').addClass(extra);
	}

	if($('.post-password-form input[type="submit"]').length > 0){
		$('.post-password-form input[type="submit"]').addClass('btn-bt').addClass(extra);
	}

	if($('.mc_signup_submit input').length > 0){
		$('.mc_signup_submit input').addClass('btn-bt').addClass(extra);
	}

	$("body").on("added_to_cart", function() {
		$('.added_to_cart').addClass('btn-bt').addClass(extra);
	});
}

/* ----------------------------- End Buttons Style ----------------------- */

/* ----------------------------- Header5 Overlay ------------------------- */

	function codelessMenuOverlay(){
		var $ = jQuery.noConflict();
		
			var triggerBttn = document.getElementById( 'trigger-overlay' ),
				overlay = document.querySelector( 'div.overlay_menu' ),
				closeBttn = overlay.querySelector( 'button.overlay-close' );
				transEndEventNames = {
					'WebkitTransition': 'webkitTransitionEnd',
					'MozTransition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'msTransition': 'MSTransitionEnd',
					'transition': 'transitionend'
				},
				transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
				support = { transitions : Modernizr.csstransitions };

				triggerBttn.addEventListener( 'click', toggleOverlay ); 
				closeBttn.addEventListener( 'click', toggleOverlay );

				function toggleOverlay(){
					if( classie.has( overlay, 'open' ) ) {
						classie.remove( overlay, 'open' );
						classie.add( overlay, 'close' );

						var onEndTransitionFn = function( ev ) {
							if( support.transitions ) {
								if( ev.propertyName !== 'visibility' ) return;
								this.removeEventListener( transEndEventName, onEndTransitionFn );
							}
							classie.remove( overlay, 'close' );
						};
						if( support.transitions ) {
							overlay.addEventListener( transEndEventName, onEndTransitionFn );
						}
						else {
							onEndTransitionFn();
						}
					}
					else if( !classie.has( overlay, 'close' ) ) {
						classie.add( overlay, 'open' );
					}
				}

				$('.overlay_menu .menu-item-has-children').on({ 
					
					mouseenter:	function(){

						var height = $(this).find('.sub-menu li').height();
						height *= $(this).find('.sub-menu li').length;
						$(this).find('.sub-menu').height(height+'px');

					}, 
					
					mouseleave: function(){
						$(this).find('.sub-menu').height(0);
					}
				});
	}


/* ----------------------------- End Header 5 Overlay -------------------- */


/* ----------------------------- Layout Changes -------------------------- */

function codelessLayoutChanges(){
	"use strict";
	var $ = jQuery.noConflict();
	var container = $('.container').width();
	$('.testimonial_carousel .item').each(function(){

		var self = $(this);
		var vc_column = self.parents('.wpb_column').first().width();
		self.innerWidth(vc_column+'px');
		self.height(self.height()+'px');
		self.parents('.caroufredsel_wrapper').first().height(self.height()+'px');
		self.parents('.testimonial_carousel').first().height(self.height()+'px');
		
	});

	$('.clients_caro .item').each(function(){
		var self = $(this);
		var vc_column = self.parents('.wpb_column').first().width();
		if(container > 420 && container <= 724)
			self.innerWidth( (vc_column/3)+'px');
		if(container > 724 && container < 940)
			self.innerWidth( (vc_column/4)+'px');
		if(container > 940) 
			self.innerWidth( (vc_column/5)+'px'); 
	});

	clientsCarousel();
}

/* ----------------------------- End Layout Changes ---------------------- */


/* ----------------------------- One Page -------------------------------- */

function codelessOnePage(){
	"use strict";
	var $ = jQuery.noConflict();
	console.log(window.location.hash);
	if(window.location.hash) {
		
	  	$('nav .menu li a:not([href="'+window.location+'"])').parent().removeClass('current-menu-item');
	} else {
	  // Fragment doesn't exist
	}

	loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.onepage.js'], function(){

		$('nav .menu').onePageNav({
			currentClass: 'current-menu-item',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
		});
	
	});
}

/* ----------------------------- End One Page ---------------------------- */

/* ----------------------------- Sticky Nav ------------------------------ */

function codelessStickyNav(){
	"use strict";
	var $ = jQuery.noConflict();
	var opened = false;
	var position = $('.header_wrapper').css('position'); 
	var bool_test = false;
	$('.logo_only_sticky .header_wrapper #logo').css('opacity', 0).css('visibility', 'hidden'); 
	$(window).scroll(function(){
		var top = $(this).scrollTop(); 

		if(top > stickyNavTop + 300 && !opened){
			$('body').addClass('sticky_header'); 

			setTimeout(function(){
				if($('.header_wrapper').hasClass('background--dark')){
					$('.header_wrapper').removeClass('background--dark');
					bool_test = true;
				}
				$('.header_wrapper').css('position', 'fixed').css('visibility', 'visible').addClass('open');
				opened = true; 

			}, 200);

			$('.logo_only_sticky .header_wrapper #logo').css('visibility', 'visible').css('opacity', 1); 
			
		}else if(top == 0){ 
			if( ($('.header_wrapper').hasClass('header_1') || $('.header_wrapper').hasClass('header_4') || $('.header_wrapper').hasClass('header_9') ) && bool_test){
				$('.header_wrapper').addClass('background--dark');
			}

			$('body').removeClass('sticky_header');
			$('.header_wrapper').removeClass('open').css('position', position); 
			
			if(codelessSlider){
				var slide_color = $(codelessSlider.slides[codelessSlider.activeIndex]).data('color');
				if( $('.header_wrapper').hasClass('header_1') && !$('.header_wrapper').hasClass('open'))
			    	$('.header_wrapper').removeClass('background--light').removeClass('background--dark').addClass('background--'+slide_color);
			}
			opened = false;
			$('.logo_only_sticky .header_wrapper #logo').css('opacity', 0).css('visibility', 'hidden'); 
			
		}


		
			
	});

	$(window).resize(function(){
		$window_width = $(this).width();
		if($window_width < 980){ 
			$('body').removeClass('sticky_header');
			$('.header_wrapper').removeClass('open').css('position', position); 
			opened = false;
		}
	});
}

/* ----------------------------- End Sticky Nav -------------------------- */

/* ----------------------------- Blog Infinite Scroll -------------------- */
function codelessBlogInfiniteScroll(){
	"use strict";
	var $ = jQuery.noConflict();
	var container = '#posts_container';
	var behavior = '';
	if($('#blogmasonry').length > 0){
		container = '#blogmasonry .filterable';
		behavior = 'masonry_blog';
	}else
		container = '#posts_container';
	
	loadDependencies( [ codeless_global.FRONT_LIB_JS + 'jquery.infinitescroll.min.js'], function(){
		var iso = $(container).data('isotope');
		console.log(iso);
		$(container).infiniteScroll({
	

			path : ".p_pagination a.next_link",    
						// selector for the NEXT link (to page 2)
			append : "#posts_container article.post",          
						// selector for all items you'll retrieve
			loadOnScroll: true,
			outlayer: iso,
			status: '.p_pagination .page-load-status'
		});


		$(container).on( 'append.infiniteScroll', function( event, response, path, items ) {
           
            setTimeout(function(){
                $(container).isotope('arrange');
        	}, 50);
                        
        });
	});
}
/* ----------------------------- End Blog Infinite Scroll ---------------- */



/*------------------------------ Online Functions ------------------------ */ 
function codelessOnlineFunctions(){
	"use strict";
    var $ = jQuery.noConflict();
	if($('.sidebar_right #blogmasonry').hasClass('cols3') )
		$('.sidebar_right #blogmasonry').removeClass('cols3').addClass('cols2');
}


	

/*------------------------------ Load Dependency ------------------------ */ 
function loadDependencies( dependencies, callback ) {
	"use strict";
	var $ = jQuery.noConflict();
	var _callback = callback || function() {};
	if ( !dependencies )
		return void _callback();

	var newDeps = dependencies.map( function( dep ) {
		return -1 === _loadedDependencies.indexOf( dep ) ? "undefined" == typeof _inQueue[ dep ] ? dep : ( _inQueue[ dep ].push( _callback ), !0 ) : !1
	} );

	if ( newDeps[ 0 ] !== !0 ) {
		if ( newDeps[ 0 ] === !1 )
			return void _callback();
		var queue = newDeps.map( function( script ) {
			_inQueue[ script ] = [ _callback ];
			return $.getCachedScript( script );
		} );

		var onLoad = function() {
			newDeps.map( function( loaded ) {
				_inQueue[ loaded ].forEach( function( callback ) {
					callback()
				} );
				delete _inQueue[ loaded ];
				_loadedDependencies.push( loaded )
			} );
		};

		$.when.apply( null, queue ).done( onLoad )
	}
}

		



/*
Plugin Name: 	BrowserSelector
Written by: 	Crivos - (http://www.crivos.com)
Version: 		0.1
*/

(function($) {
	$.extend({

		browserSelector: function() {

			var u = navigator.userAgent,
				ua = u.toLowerCase(),
				is = function (t) {
					return ua.indexOf(t) > -1;
				},
				g = 'gecko',
				w = 'webkit',
				s = 'safari',
				o = 'opera',
				h = document.documentElement,
				b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

			c = b.join(' ');
			h.className += ' ' + c;

		}

	});
})(jQuery);



(function($) {
	$.extend({

		getCachedScript : function( url, callback ) {
	
			url = url.replace( /.*?:\/\//g, "" );
	
			if ( location.protocol === 'https:' )
				url = 'https://' + url;
			else
				url = 'http://' + url;
	
			var options = {
				dataType: "script",
				cache: false,
				url: url
			};
	
			return $.ajax( options ).done( callback );
		}

	});
})(jQuery);


