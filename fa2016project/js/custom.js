$('.carousel').carousel({
	interval: 3000
})

/* $('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});
 */
 
$(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#myModal').modal('show');   
		});		
});
$('#myModal').on('show.bs.modal', function () {
    $(this).find('.modal-dialog').css({width:'auto',
									   height:'auto', 
									  'max-height':'100%',
									  'max-width': '100%'});
});
$('#myModal').on('show.bs.modal', function () {
    $(this).find('.imagepreview').css({width:'auto',
									   height:'auto', 
									  'max-height':'100%',
									  'max-width': '100%'});
});



