$(function() {
    var $demo1 = $('table.sticky-table-header');
    $demo1.floatThead({
        scrollContainer: function($table) {
            return $table.closest('.table-content-wrapper');
        }
    });

});
