var $j = jQuery.noConflict();

$j( document ).ready(function() {
    
});


function typeSwitch(){
    var $jbody = $j('body'),
        $jsetElem = $j('.switch'),
        pcName = '_pc',
        spName = '_sp',
        replaceWidth = 641,
        r;

    function doSwitch(){
        var windowWidth = parseInt($j(window).width());
        if(windowWidth >= replaceWidth){
            if(!$jbody.hasClass('pc')) {
                $jbody.removeClass('sp').addClass('pc');
                $jsetElem.each(function(){
                    var $jthis = $j(this);
                    $jthis.attr('src',$jthis.attr('src').replace(spName,pcName)).css({visibility:'visible'});
                });
                addElm($jbody);
            }
        }else{
            if(!$jbody.hasClass('sp')) {
                $jbody.removeClass('pc').addClass('sp');
                $jsetElem.each(function(){
                    var $jthis = $j(this);
                    $jthis.attr('src',$jthis.attr('src').replace(pcName,spName)).css({visibility:'visible'});
                });
                addElm($jbody);
            }
        }
    }

    if(!$j('html').hasClass('ie8')){
        $j(window).resize(function(){doSwitch();});
        doSwitch();
    }else{
        $jbody.addClass('pc');
        addElm($jbody);
    }

}

$j(function() { /* Wait for page to finish loading. */
    if(navigator != undefined && navigator.userAgent != undefined) {
        user_agent = navigator.userAgent.toLowerCase();
        if(user_agent.indexOf('android') > -1) { /*Is Android.*/
            $j(document.body).addClass('android');
        }
    }
});

function addElm($jbody){
    if(!$jbody.hasClass('addPcElm')){
        $jbody.addClass('addPcElm');
    }
    if(!$jbody.hasClass('addSpElm') && !$j('html').hasClass('ie8')){
        $jbody.addClass('addSpElm');
    }
}

/*Equalize Heights of Divs Start Here*/
    $j.fn.equalizeHeights = function(){
      return this.height( Math.max.apply(this, $j(this).map(function(i,e){ return $j(e).height() }).get() ) )
    }
/*Equalize Heights of Divs End Here*/

$j(function(){
    typeSwitch();

  $j(document).ready(function($j){
    var contentHeight = $j(window).height()-($j('header').height()+$j('#glovalNav').height()+$j('footer').height()+65);
    $j('#contents').css('min-height', contentHeight+'px');
        $j(window).scroll(function(){
            if ($j(this).scrollTop() > 50) {
                $j('#pagetop').fadeIn('slow');
            } else {
                $j('#pagetop').fadeOut('slow');
            }
        });
        $j('#pagetop').click(function(){
            $j("html, body").animate({ scrollTop: 0 }, 500);
            return false;
        });

        $j('.set-max-height').equalizeHeights(); /*equalize heights function called here*/
    });

});

/* Display the initial setting */
$j(function () { 
    $j("body").css("opacity", 0);     
    $j("body").animate({opacity: "1"}, 1000); 
});
