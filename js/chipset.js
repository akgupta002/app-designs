/*!
 * Perfect Pay UI Frame Work v1.0.0
 */

$(function() {

    $('#selectedChipset').change(function() {
        var $thisValue = parseInt($(this).val());

        showChipsetDetails($thisValue);
    });

    //CREATE NEW CHIPSET
    //REMOVE CHIP DENOM FROM EXISTING CHIPSET
    // $('.chip-denom-row').on('click',removeSelectedDenom);

    $('.chipset-denom-block').on('click', removeSelectedDenom);

    $('.new-chipset-table').on('click', 'tr', removeTableRow);

});

function removeTableRow() {
    var $this = $(this);
    var $table = $('.new-chipset-table');
    var $tableBody = $table.find('tbody');
    var hasRow = $tableBody.find('tr').length;
    var isEmpty = $tableBody.find('.empty');
    var emptyRow = "<tr class=empty><td colspan=5 class=instruction-text>Select the denom(s) from the above table.</td></tr>";

    $this.not('.empty').remove();

    //check number of rows in this table
    if (hasRow > 1) return;

    $tableBody.html(emptyRow);

}

function removeSelectedDenom() {
    var $this = $(this);
    // Get the modal body cotaining all these stuffs
    var $container = $this.closest('.modal-body');
    // Get table containing the chip denoms
    // var $inventoryTable = $this.closest('.table-inventory');
    var $denom = $this.closest('.chipset-denom-block');
    // Get innerHTML of the selected row
    // var $selectedDenomRowData = $this.closest('tr').html();
    var $denomData = $denom.html();

    // console.log($this+"  "+$denom+"  "+$denomData);
    // $this.closest('tr').addClass('selected');
    // $denom.addClass('selected');
    // var $dropTarget = $('.modal-new-chipset').find('.chip-denom-drop-target');
    // var $targetTable = $dropTarget.find('.table-inventory');
    // var $appendToBody= $targetTable.find('tbody');

    // New inventory table that to Populate
    var $newTableBody = $container.find('.new-chipset-table').find('tbody');
    // append selected company id to new table
    // find the active chipset details in existing table
    var $visibleChipset = $container.find('.fade.in');
    var $itemDataValue = $visibleChipset.find('.item-data-value ');
    // create an array to store the chipset details
    var arrVal = [];

    $itemDataValue.each(function(index, el) {
        arrVal[index] = $(el).text();
    });

    var $newRow = "<tr class=remove-denom-row>";
    $newRow += "<td>" + arrVal[0] + "</td>";
    $newRow += "<td>" + arrVal[1] + "</td>";
    $newRow += "<td>" + arrVal[2] + "</td>";
    $newRow += "<td class=narrow><div class=table-inventory-box>";
    // $newRow += $selectedDenomRowData;
    $newRow += $denomData;
    $newRow += "</div><span class='glyphicon glyphicon-remove fade in'></span></td></tr>";

    // Append the selected row to this new table body
    $newTableBody.find('.empty').remove();
    $newTableBody.append($newRow);

}

function showChipsetDetails(value) {
    var chipsetId = parseInt(value);

    var $chipsetDetailsView = $('.chipset-details-' + chipsetId);
    var $container = $chipsetDetailsView.closest('.item-view-row');
    var fooVisible = $chipsetDetailsView.hasClass('in');

    if (fooVisible) return;

    // Hide all chipset details
    $container.find('.fade').addClass('hide').removeClass('in');
    // Show the chipset details for the selected chipset
    $chipsetDetailsView.removeClass('hide').addClass('in')

}
