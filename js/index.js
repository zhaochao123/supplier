$(function(){
	$(".leftBottom dt").click(function(){
		$(".leftBottom .erjiList").slideUp()
		$(".leftBottom dt").find("img").attr("src","images/anniu2.png");
		$(".leftBottom dt").css({"background":"none"});
		$(".erjiList dd").css({"background":"none"});
		$(this).css({"background":"deepskyblue"});
		if($(this).next().get(0).style.display=="none"){
			$(this).find("img").attr("src","images/anniu1.png");
			$(this).next().slideDown()
		}else if($(this).next().get(0).style.display=="block"){
			$(this).find("img").attr("src","images/anniu2.png");
			$(this).next().slideUp()
		}
	})
	$(".erjiList dd").click(function(){
		$(".erjiList dd").css({"background":"none"});
		$(".leftBottom dt").css({"background":"none"});
		$(this).css({"background":"deepskyblue"});
	})	
})
