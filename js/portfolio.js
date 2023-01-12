$(document).ready(function(){
	
	//alert('포트폴리오 계속 업데이트 중 입니다\n참고 부탁드립니다.');
	
	
	//상단메뉴 배경색 조절
	//휴대폰에서는 배경색 보임
	if($(window).width() <= 600 ){
		$("nav").addClass('act');
	}
	//휴대폰보다 큰 화면일때는 스크롤 높이에 따라 배경색을 조절함
	else {
		const change = $("#top").height()-100;
		$(window).scroll(function(){
			if( $(window).scrollTop() >= change ){
				$("nav").addClass('act');
			} else {
				$("nav").removeClass('act');
			}
		});
	}
	
	//타자치는 효과
	const $typing = "Welcome\n 안지애 포트폴리오";
	//console.log( $typing[7]  );
	const tyLen  = $typing.length;
	//console.log( tyLen ); //21개
	let i = 0;
	let txt = "";
	function type(){
		if( i < tyLen ){
			txt += $typing[i];
			//$("#typing").html(  txt );
			document.querySelector("#typing").innerText = txt;
			i++;
			setTimeout( type, 100);
		}
	}
	type();	
	
	////////////////////////////
	//상단 메뉴 호버 활성화 유지
	$("#menu a").click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});
	
	
	
	
	//콘텐츠의 top값을 절대값으로 얻어온다. /상대값은 position().top
	//절대값은 기준이 윈도우 / 상대값은 기준이 부모
	const homeTop = $("body").offset().top;
	const aboutTop = $("#about").offset().top;
	const port1Top = $("#port1").offset().top - 400;
	const port2Top = $("#port2").offset().top - 400;
	const port3Top = $("#port3").offset().top - 400;
	const eventTop = $("#event").offset().top - 400;
	const contactTop=$("#contact").offset().top - 200;
	
	let st = 0;
	let pos = 0;
	//스크롤바를 내렸을때의 효과 (스크롤이벤트 감지!)
	$(window).scroll(function(){
		st = $(window).scrollTop();
		console.log(st);		
		if(st>= homeTop && st < aboutTop){
			pos = 0;
		}
		if( st>= port1Top ){
			$("#port1").addClass("act");
			pos = 2;
		}
		if( st>= port2Top ){
			$("#port2").addClass("act");			
		}
		if( st>= port3Top ){
			$("#port3").addClass("act");					
		}
		if( st>= eventTop && st<contactTop ){
			pos = 3;
		}
		if( st>= contactTop ){
			pos = 4;
		}
		$("#menu a").eq(pos).addClass('act').siblings().removeClass('act');
	});
	
	
	//이벤트이미지를 클릭하면 큰이미지가 나타난다
	$("#event>div>div").click(function(){
			//클릭한 썸네일이미지 주소를 가져온다
			const thumb = $(this).children("img").attr("src");
			
			//가져온 주소를 큰이미지주소로 변경한다.
			const change = thumb.replace('.', '_big.');
			
			//변경한 이미지주소를 큰이미지에 대입한다.
			$("#popup img").attr("src" ,  change);		
			
			//클릭한 썸네일이미지에서 alt 값을 가져온다.
			const alt = $(this).children("img").attr("alt");			
			//검정팝업 상단에 작품 제목을 대입한다.
			$("#popup h3").text( alt );
			
			$("#popup").fadeIn();
	});
	
	//큰 팝업창 닫기
	$("#popup").click(function(){
		$(this).fadeOut();
	});
	
	// 스크롤 내리면 전체 보이는것..
	
	$(document).scroll(function(){
		const rc = $(document).scrollTop();
		
		if (rc >= 900 ){
			$("#about").removeClass("hide");
			
		}
		
		
	});
	
	
	
		
});//////////////all end











