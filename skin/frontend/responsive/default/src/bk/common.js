
/*My Js start here*/

var $j = jQuery.noConflict();

function typeSwitch(){
	var $body = $('body'),
		$setElem = $('.switch'),
		pcName = '_pc',
		spName = '_sp',
		replaceWidth = 641,
		r;

	function doSwitch(){
		var windowWidth = parseInt($(window).width());
		if(windowWidth >= replaceWidth){
			if(!$body.hasClass('pc')) {
				$body.removeClass('sp').addClass('pc');
				$setElem.each(function(){
					var $this = $(this);
					$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
				});
				addElm($body);
			}
		}else{
			if(!$body.hasClass('sp')) {
				$body.removeClass('pc').addClass('sp');
				$setElem.each(function(){
					var $this = $(this);
					$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
				});
				addElm($body);
			}
		}
	}

	if(!$('html').hasClass('ie8')){
		$(window).resize(function(){doSwitch();});
		doSwitch();
	}else{
		$body.addClass('pc');
		addElm($body);
	}

}

function addElm($body){
	if(!$body.hasClass('addPcElm')){
		$body.addClass('addPcElm');
	}
	if(!$body.hasClass('addSpElm') && !$('html').hasClass('ie8')){
		$body.addClass('addSpElm');
	}
}

$(function() { /* Wait for page to finish loading. */
    if(navigator !== undefined && navigator.userAgent !== undefined) {
        user_agent = navigator.userAgent.toLowerCase();
        if(user_agent.indexOf('android') > -1) { /*Is Android.*/
            $(document.body).addClass('android');
        }
    }
});


/*Equalize Heights of Divs Start Here*/
    $j.fn.equalizeHeights = function(){
      return this.height( Math.max.apply(this, $j(this).map(function(i,e){ return $j(e).height() }).get() ) )
    }
/*Equalize Heights of Divs End Here*/


$(function(){
	typeSwitch();
	 

  $('.jq-placeholder').ahPlaceholder({
      placeholderColor : 'red',
      placeholderAttr  : 'placeholder',
      likeApple        : true
  });

  $(document).ready(function($){
	var contentHeight = $(window).height()-($('header').height()+$('#glovalNav').height()+$('footer').height()+65);
	$('#contents').css('min-height', contentHeight+'px');
	    $(window).scroll(function(){
	        if ($(this).scrollTop() > 50) {
	            $('#pagetop').fadeIn('slow');
	        } else {
	            $('#pagetop').fadeOut('slow');
	        }
	    });
	    $('#pagetop').click(function(){
	        $("html, body").animate({ scrollTop: 0 }, 500);
	        return false;
	    });

	    $('.set-max-height').equalizeHeights(); /*equalize heights function called here*/

	});

});

/* Display the initial setting */
$(function () { 
	$("body").css("opacity", 0);     
	$("body").animate({opacity: "1"}, 1000); 
});


/*My Js start here*/