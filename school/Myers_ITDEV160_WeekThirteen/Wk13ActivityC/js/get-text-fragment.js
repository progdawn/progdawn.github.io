$(function() {
  var $listText = $('ul').text();
  $('ul').append('<p>' + $listText  + '</p>');  
  $('li:last').after('<li>' + $listText  + '</li>');
});
