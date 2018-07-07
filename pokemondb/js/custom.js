$(document).ready(function(){
	setHeight($('#pksprite'), $('#pokewell'));
	
$(window).on(resize, function() {
	setHeight($('#pksprite'), $('#pokewell'));
	});

});

function setHeight(image, stat){
	var height = stat.height();
	image.height(height);
	// image.css('height', height);
}

function setWidth(image, stat){
	var width = stat.width();
	image.width(width);
}

function lengthConverter(valNum){
	document.getElementById("#outputHeight").innerHTML=(valNum/10)*39.370;
}

