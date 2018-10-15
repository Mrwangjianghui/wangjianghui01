$(function(){
	var num=0;
	var timer=null;
	$('.screen1').removeClass('no');
	
	
	
	
	$(document).mousewheel(function(e,d){
	clearTimeout(timer);
	timer=setTimeout(function(){
		num-=d;
		if( num>6 ){ num=6 }
		if( num<0 ){ num=0 }
		
		$('.list-group ul li').eq(num).addClass('current').siblings().removeClass();
		$('.container').stop().animate({ top:-num*100+'%' },500);
		$('.container>div').eq(num).removeClass('no').siblings().addClass('no');
	},300)
	});
	
	
	
	$(".list-group ul li").click(function(event){
		$(this).addClass('current').siblings().removeClass('current');
		num=$(this).index();
		$('.container').stop().animate({top:-num*100+'%'},500);
		$('.container>div').eq(num).removeClass('no').siblings().addClass('no');
		
		$(".container .screen").eq(num).removeClass('active');
		$(".container .screen").siblings().addClass('active');
	});
	
	
	
	
	$(".music").click(function(){
		$(this).toggleClass('play');
		if($(this).hasClass('play')){
			$('audio').get(0).play();
		}else{
			$('audio').get(0).pause();
		}
	})
})
