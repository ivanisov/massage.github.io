$(document).on('click','.item_gallery_ar.right', function(){
$('.item_gallery_cont_inner').find('.item_gallery_photo:first-child').appendTo('.item_gallery_cont_inner');
});
$(document).on('click','.item_gallery_ar.left', function(){
$('.item_gallery_cont_inner').find('.item_gallery_photo:last-child').prependTo('.item_gallery_cont_inner');
});