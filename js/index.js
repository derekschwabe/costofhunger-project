//document.ready to ensure it can't run functions until all elements on the page load.
$(document).ready(function(){
	console.log("ready!");
		$('#menu-button').click(function(){
    	$('.responsive-menu').slideDown();
    	$('#menu-button').hide();
    	$('#menu-arrow').show();
    	$('header').removeClass('masthead');
    	$('header').addClass('solidBG');
		return false;
   });
		$('#menu-arrow').click(function(){
    	$('.responsive-menu').slideUp();
    	$('#menu-arrow').hide();
    	$('#menu-button').show();
    	$('header').removeClass('solidBG');
    	$('header').addClass('masthead');
		return false;
	});

	$(".source-arrow").click(function(){
			if (!$(this).hasClass('hide-sources')){
        $(this).addClass('hide-sources');
				$(".sources").slideDown();
			}
			else { 
				$(this).removeClass("hide-sources");
				$(".sources").slideUp();
			}
        return false;
			});


});