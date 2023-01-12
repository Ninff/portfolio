$(document).ready(function(){
	$("nav a").click(function(){
		const i = $(this).parent().index();
		console.log(i); //0 1 2 3... => m1 m2 m3 m4.. 
		
		$(this).addClass("menuOver m" + (i+1) ).parent().siblings().children().removeClass();
	});
	
	//마우스휠에 따른 왼쪽 메뉴 활성화
	$(document).scroll(function(){
		const h1 = $(window).height();
		console.log(h1); //예_920
			
		const t1 =$(document).scrollTop(); // 스크롤 탑 위치 값 ( 맨 아래 px 값은 적용되지 않는다..)
		console.log(t1); //예_2828
		
		const ht = Math.floor(t1/h1);
		
		$("nav a").removeClass();
		$("nav li").eq(ht).children().addClass("menuOver m" + (ht+1) );
	});

}); ////all end