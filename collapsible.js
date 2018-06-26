$(document).ready(()=>{

$('.main-head').click(function(){
   //$('.para').toggle();
   $(this).parent().next().toggle();
})
$('.main-head').hover(function(){
	$(this).css("color"," #00008B")
},function(){
	$(this).css("color"," #1E90FF")
})


})