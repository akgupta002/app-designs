/*!
 * Perfect Pay UI Frame Work v1.0.0
 */

// LISTS
// =====

$(function() {

    $('.list').on('click', '.expandable-list-item', expandListItem);

});

function expandListItem(e) {
    var $listItem = $(this);
    var $this = $(e.target);

    if ($listItem.hasClass('current-game') && $this.closest('.expandable-list-content').length !== 0) return;

    $listItem.find('.expandable-list-content.hidden').removeClass('hidden').hide()
        .end().find('.expandable-list-content').slideToggle()
        .end().find('.caret').toggleClass('caret-right');
}
