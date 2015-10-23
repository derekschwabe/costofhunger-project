//document.ready to ensure it can't run functions until all elements on the page load.
$(document).ready(function(){
	console.log("ready!");
		$('#menu-button').click(function(){
    	$('.responsive-menu').slideDown();
    	$('#menu-button').hide();
    	$('#menu-arrow').show();
		return false;
   });
		$('#menu-arrow').click(function(){
    	$('.responsive-menu').slideUp();
    	$('#menu-arrow').hide();
    	$('#menu-button').show();
		return false;
	});

		$("#source-click").click(
			function(){
				$(".sources").slideDown();
				$("#hide-sources").css("display", "block");
				$("#hide-sources").show();
				return false;
			});

		$("#hide-sources").click(
			function(){
				$(".sources").slideUp();
				$("#hide-sources").hide();
				return false;
			});


// 	var projectsContainer = $('.content-container'),
// 		navigation = $('.responsive-menu'),
// 		triggerNav = $('#menu-button');

// 	triggerNav.on('click', function(){
// 		triggerNav.add(projectsContainer).add(navigation).toggleClass('nav-open');


// });


});