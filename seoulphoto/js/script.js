$ (document).ready(function (){
	
	//setInterval(leftMove, 2000);
	function leftMove (){
		$("#mainimg").stop().animate({left:"-2000px"}, 1000, function(){
		$(this).append($(this).children().first());
		$(this).css("left", '-1000px');	
		});
	}
	
		$("#rightb").click(function(){
					leftMove ();
		});
		
		
		$("#leftb").click(function(){
				$("#mainimg").stop().animate({left: 0 }, 1000 , function(){
					$(this).prepend( $(this).children().last() );
					$(this).css("left" , "-1000px");
				
				});
			});
	
});////end