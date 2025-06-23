var printText = $('.text').data('text');
let ShowLines = 20;
var contentArray = printText.split('/n');
$.each(contentArray, function(index, newLine) {
    $('.text').append('<span style="display:block;" id="'+index+'"></span>');

    var lineID = index;
    var self = $(this);
    setTimeout(function () {
        $.each(self, function(index, chunk){
            setTimeout(function () {
                $('#'+lineID).append("<span>"+chunk+"</span>");
                if(lineID>ShowLines){
                    let delete_line = lineID - ShowLines;
                    $('#'+delete_line).remove();
                }
            }, index*5);
        });

    }, index*100);
});