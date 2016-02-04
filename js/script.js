var main = function(){
	$('.events').click(function(){
		$(this).next().toggle();
	});
}

$(document).ready(main);