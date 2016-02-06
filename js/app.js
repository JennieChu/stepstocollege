var main = function() {
	$('.nav li').click(function(){
		var category = $(this).attr('class');
			if(category ==="private"){
				$('.box').removeClass('selected');
				$('.Private').addClass('selected');
				$('.All').addClass('selected');
			}else if(category ==="uc"){
				$('.box').removeClass('selected');
				$('.UC').addClass('selected');
				$('.All').addClass('selected');
			}else if(category ==="csu"){
				$('.box').removeClass('selected');
				$('.CSU').addClass('selected');
				$('.All').addClass('selected');
			}else if(category==="community"){
				$('.box').removeClass('selected');
				$('.CC').addClass('selected');
				$('.All').addClass('selected');
			}else if (category==="undo"){
				$('.box').removeClass('selected');
			}
	});
};

$(document).ready(main);