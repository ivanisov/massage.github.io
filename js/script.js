$(document).on('click','.navbar-collapse2 li .del', function(){
	var _this = $(this);
	if (_this.hasClass('opened')) {
		_this.removeClass('opened').parent().find('.spoiler_content').slideUp();
	} else {
		$('.navbar-collapse2 li .del').removeClass('opened');
		$('.spoiler_content').slideUp();
		_this.addClass('opened').parent().find('.spoiler_content').slideDown();
	}
	
});