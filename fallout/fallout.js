var totalPointsAvailable = 21;

$(function () {
    $('.add').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var $qty2=$("#total").closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        var totalVal = parseInt($qty2.val());
        if (!isNaN(currentVal) && currentVal < 10 && totalVal > 0) {
            $qty.val(currentVal + 1);
            $qty2.val(totalVal - 1);
        }
    });
    $('.minus').on('click',function(){
        var $qty=$(this).closest('p').find('.qty');
        var $qty2=$("#total").closest('p').find('.qty');
        var currentVal = parseInt($qty.val());
        var totalVal = parseInt($qty2.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
            $qty2.val(totalVal + 1);
        }
    });
});
