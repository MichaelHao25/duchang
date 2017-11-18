
$(function(){
	
	function currentTime(){
var d = new Date(),str = '';
 str += d.getFullYear()+'年';
 str  += d.getMonth() + 1+'月';
 str  += d.getDate()+'日';
 str += d.getHours()+':';
 str  += d.getMinutes()+':';
str+= d.getSeconds();
return str;
}
setInterval(function(){$('.top .top-t h6 strong').text(currentTime)},1000);


$('.rts').hover(function(){
	$(this).stop().animate({"right":0+"px"},300)
},function(){
	$(this).stop().animate({"right":-150+"px"},300)
})


$('.les').hover(function(){
	$(this).stop().animate({"left":0+"px"},300)
},function(){
	$(this).stop().animate({"left":-150+"px"},300)
})
})
















