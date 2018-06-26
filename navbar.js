$(document).ready(()=>{
 
 $('#dropdwn').click(()=>{
 	$('.dropdown-elements').toggle();

 })
 $('.drop-ref').hover(function(){
 	
 	$(this).css("background-color","rgb(33, 37, 41)");
 	},
 	function(){$(this).css("background-color","#FDFEFE")})		
 $('.mySearch').focus(function(){
 	
 	$('.mySearch').css({'border-style': 'solid','border-color': 'blue'});
 	})
 $('.mySearch').focusout(function(){
 	
 	$('.mySearch').css({'border-style': 'solid','border-color': 'grey'});
 	})

  $('a:not(.isDisabled,.drop-ref)').hover(function(){
 	
 	$(this).css("color","#000000");
 	},
 	function(){$(this).css("color","#808080")})

  $('.myImg').click(()=>{
 	$('.setDisp').show();
  })

  })







//css({ 'background-color':'green';'color':'white'})