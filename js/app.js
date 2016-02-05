var main = function() {
	$('.nav li').click(function(){
		var category = $(this).attr('class');
			if(category ==="private"){
				$('.box').removeClass('selected');
				$('.Private').addClass('selected');
			}
	});
};

$(document).ready(main);