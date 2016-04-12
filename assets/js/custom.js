$(document).ready(function(){
	$('#sidebar_affix').affix({
		offset: {
			top: 350,
			// top: $('.nav.nav-pills').offset().top,
			bottom: function () {
				return (this.bottom = $('.footer').outerHeight(true))
			}
		}
	})
});