// Tree structure
// ===============

$(function() {

    $(".collapse-tree").on("show.bs.collapse", expandTree);

    $(".collapse-tree").on("hide.bs.collapse", collapseTree);

    $('.table-collapse').on('click', '.table-action-checkbox', toggleCheckboxActions);

})


function toggleCheckboxActions() {
    var $this = $(this);
    // var $thisTable              = $this.closest('table');
    // var $thisChildrenCheckboxes = $thisContainer.find('.table-action-checkbox');
    // var $thisAllCheckbox = $thisTable.find('.toggle-all-checkbox');
    // var $thisChildContainer = $thisContainer.find(".collapse-tree");

    // var $thisChildrenCheckboxes = $thisContainer.find('.table-action-checkbox');

    //if ( $this.hasClass('toggle-all-checkbox') ) {
    //  $thisChildrenCheckboxes.prop('checked', this.checked);
    // }
    // if ( $thisChildrenCheckboxes.is(':checked') ) {
    //   $thisAllCheckbox.attr('data-checked', 'partially');
    //   $('.table-action-option.not-visible').removeClass('not-visible');
    // } else {
    //   $thisAllCheckbox.removeAttr('data-checked');
    //   $('.table-action-option.hideable').addClass('not-visible');
    // }

    var $thisContainer = $this.closest("tr").find(".collapse-tree");
    var $thisContainerAllCheckboxes = $thisContainer.find('.table-action-checkbox');
    // var $thisContainerCheckbox = $thisContainer.closest(".table-collapse").find('.toggle-all-checkbox');
    var $allParentCheckboxes = $(".table-collapse").find('.toggle-all-checkbox');

    if ($this.hasClass('toggle-all-checkbox')) {
        $thisContainerAllCheckboxes.prop('checked', this.checked);
    }

    if ($thisContainerAllCheckboxes.is(':checked')) {
        $allParentCheckboxes.attr('data-checked', 'partially');
        console.log($thisContainerAllCheckboxes.is(':checked'));
    } else {
        $allParentCheckboxes.removeAttr('data-checked');
        console.log($thisContainerAllCheckboxes.is(':checked'));
    }



}

function expandTree() {
    var $this = $(this);
    var $thisCollapseRoot = $this.closest(".collapse-tree");
    var collapseIcon = $thisCollapseRoot.find(".glyphicon:first");
    // var $thisCollapsedItems = $thisCollapseRoot.find(".collapse");
    // var hasCollapsed = $thisCollapseRoot.find(".collapsed");
    collapseIcon.removeClass("glyphicon-plus").addClass("glyphicon-minus");

    // $thisCollapseRoot.addClass("in");
}

function collapseTree() {
    var $this = $(this);
    var $thisCollapseRoot = $this.closest(".collapse-tree");
    var collapseIcon = $thisCollapseRoot.find(".glyphicon:first");
    collapseIcon.addClass("glyphicon-plus").removeClass("glyphicon-minus");
    // var $thisExpandedItems = $thisCollapseRoot.find(".collapse.in");
    // $thisCollapseRoot.removeClass("in");
}
