$(document).ready(function () {
		$( ".menu" ).click(function() {
			$( ".navsect" ).toggleClass( "hide1" );
			$( this ).toggleClass( "close" );
			$('.navsect a').on('click', function(){
			    $('.menu').trigger('click');
			});
		});
	});