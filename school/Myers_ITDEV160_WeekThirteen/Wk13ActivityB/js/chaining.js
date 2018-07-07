$('li[id!="one"]').hide();// semi-colon indicates end of chaining - can be writen on separate lines
$('li[id!="one"]').delay(500);
$('li[id!="one"]').fadeIn(1400);
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');