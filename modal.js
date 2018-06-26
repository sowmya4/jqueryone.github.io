$(document).ready(()=>{
$('#image').hover(function(){	
	$('#image').css("width","5vh");
},function(){	
	$('#image').css("width","auto");
});
$('#image').click(function(){

$('.contain').hide();
});

$('#close').click(function(){

$('.contain').hide();
});
})