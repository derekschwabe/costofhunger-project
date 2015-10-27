$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .hide('slide', {direction: 'right'}, 1000)
    .next()
    .show('slide', {direction: 'left'}, 1000)
    .end()
    .appendTo('#slideshow');
},  3000);
