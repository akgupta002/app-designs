/*!
 * Perfect Pay UI Frame Work v1.0.0
 */

// TABLES
// ======

$(function() {

    // STICKY TABLE HEADERS
    // ====================

    // $('.sticky-table-header').each(stickyTableHeader);


    // ALERTS TABLE
    // ============

    $('.table-alerts').on('click', '.table-action-checkbox', toggleCheckboxActions);

    // $(".table-header-fixed").each(tableHeaderFixed);
});

$(function () {
    // $("table").stickyTableHeaders();
});

function stickyTableHeader() {
    var $this = $(this);
    var insideModal = $this.closest('.modal').length;
    var $container = insideModal ? $this.closest('.modal-content') : $this.closest('.main-content');
    var mainContentBaseTop = insideModal ? 0 : 25;
    var topOffset = parseInt($container.css('padding-top'), 10) - mainContentBaseTop;
    topOffset = topOffset < 0 ? 0 : topOffset;

    if (insideModal) {
        $this.stickyTableHeaders({
            fixedOffset: topOffset,
            marginTop: -10,
            scrollableArea: $container
        });
    } else {
        $this.stickyTableHeaders({
            fixedOffset: topOffset
        });
    }
}

function toggleCheckboxActions() {
    var $this = $(this);
    var $thisTable = $this.closest('table');
    var $thisCheckboxes = $thisTable.find('.table-action-checkbox');
    var $thisAllCheckbox = $thisTable.find('.toggle-all-checkbox');

    if ($this.hasClass('toggle-all-checkbox')) {
        $thisCheckboxes.prop('checked', this.checked);
        console.log('hi')
    }

    if ($thisCheckboxes.is(':checked')) {
        $thisAllCheckbox.attr('data-checked', 'partially');
        $('.table-action-option.not-visible').removeClass('not-visible');
        // new lines
        $('.btn-change-roll-time').removeClass('btn-secondary').addClass('btn-primary');
    } else {
        $thisAllCheckbox.removeAttr('data-checked');
        $('.table-action-option.hideable').addClass('not-visible');
        // new lines
        $('.btn-change-roll-time').removeClass('btn-primary').addClass('btn-secondary');
    }
}

var $originalHeader, $clonedHeader;

function tableHeaderFixed(){
    var $this = $(this);
    var tableOffset = $this.offset().top;

    $originalHeader = $this.find('thead');
    $clonedHeader = $originalHeader.clone();

    $clonedHeader
        .css('position', 'absolute')
        .css('top', 0);

    setFloatingHeaderSize();

    $this.prepend($clonedHeader);

    $(window).scroll(function(){
        var windowTop = $(window).scrollTop();

        if(windowTop > tableOffset){
            $clonedHeader.css('top', windowTop - tableOffset);
        } else {
            $clonedHeader.css('top', 0);
        }
    });

    $(window).resize(setFloatingHeaderSize);

}

function setFloatingHeaderSize(){
    var originalHeaderCol = $originalHeader.find('th');
    var clonedHeaderCol = $clonedHeader.find('th');

    for(var i=0; i < originalHeaderCol.length; i++){
        clonedHeaderCol.eq(i)
            .css('width',originalHeaderCol.eq(i).width())
            .css('height',originalHeaderCol.eq(i).height());
    }
}
