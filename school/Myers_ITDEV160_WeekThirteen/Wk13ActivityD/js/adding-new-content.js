$(function() {
  $('ul').before('<p class="notice">Just updated</p>');
  $('li:last').after('<li class="hot">Cornflakes</li>');
  //$('li:last').append('<li class="hot">Cornflakes</li>);
  $('li.hot').prepend('+ ');
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
  $('li:last').after($newListItem);
});