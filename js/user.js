//User.js
$(function(){
    $('.left-wrapper').on('click','.list-group-item',showSelected);
    $('.right-wrapper').on('click','.list-group-item',removeSelected);

    // $('#user-next-btn').on('click',updateNavButtons);

    $('.caret').on('click',function(){
        var $this = $(this);
        var $container = $this.closest('a').data('toggle','collapse');
        var $allArrow = $container.find('.caret');

        if($this.hasClass('caret-right')){
            $allArrow.removeClass('caret-right');
        }else{
            $allArrow.addClass('caret-right');
        }
    });

    $('.access-group-label').on('click',addAccessGroup);
    // $('.access-group-label.assigned').on('click',removeAccessGroup);

    // $('.section-access-group').on('click','.input-radio',toggleCheckBox);
    // $('.section-access-group').on('click','.assigned',removeAccessGroup)
});

function removeAccessGroup(){
    var $this = $(this);
    var $thisContainer = $this.closest('.access-groups-target-container .row');
    var isEmpty = $thisContainer.length;

    if(isEmpty < 2){
        $thisContainer.html('<span class="col-xs-12 instruction-text">Click on Access Groups shown above to get assigned here.</span>')
    }
    $this.parent().remove();
}

function toggleCheckBox(){
    var $this = $(this);

    // console.log($this.is(':checked'));
}

function addAccessGroup(){
    var $this = $(this),
        $thisContainer = $this.closest('.access-groups-container'),
        $thisLabel = $thisContainer.find('.access-group-label');

    var $targetWrapper = $this.closest('.tab-pane').find('.wrapper-access-groups'),
        $targetApp = $targetWrapper.find('.section-access-group'),
        // $checkedApp = $targetApp.find('.input-checkbox').prop('checked'),
        $checkedApp = $targetApp.find('.input-radio').is(':checked')?1:0,
        $targetContainer = $targetApp.find('.access-groups-target-container .row'),
        isEmpty = $targetContainer.find('.instruction-text').hasClass('instruction-text'),
        hasChild = $thisLabel.length;
        // hasAssigned = $targetContainer.find('.access-group-label').hasClass('assigned');

    // if($checkedApp == undefined || $checkedApp == ''){
    //     console.log('No App is selected.');
    //     return;
    // };

    var iconRemove = '<a class=pull-right><span class="glyphicon glyphicon-remove"></span></a>';

    if($checkedApp){

        if(isEmpty){
            $targetContainer.empty();
            $targetContainer.append('<div class="col-xs-6">'+$this.parent().html()+'</div>')
                            .find('.access-group-label').not('.assigned').append(iconRemove).addClass('assigned');
        }else{
            $targetContainer.append('<div class="col-xs-6">'+$this.parent().html()+'</div>')
                            .find('.access-group-label').not('.assigned').append(iconRemove).addClass('assigned');
        };
    }else{
        console.log('not selected');
    }
    // console.log($checkApp.is(':checked').closest('.wrapper-access-groups').find('.section-access-group').eq());

    // if(hasAssigned){
    //     console.log('yes');
    // }else{
    //     console.log('no');
    // }
    // $this.parent().remove();

    if(hasChild < 2){
        $thisContainer.html('<div class=row><div class=col-xs-12><span class=instruction-text>All Access Groups have been assigned.</span></div></div>')
    };
}

function removeSelected(){
    var $this = $(this),
        $container = $this.closest('.list-group'),
        $parent = $this.closest('.right-wrapper'),
        $totalItems = $container.children().length,
        checkListItem = $container.has('.list-group-item') ? 1 : 0;

        //Check for no item remaining
        if($totalItems <= 1) {
            // when container is empty
            $container.append('<li class=instruction-text>No role assigned to this user.</li>');
        };

        //Get the target list group
        var $targetContainer = $this.closest('.tab-pane').find('.left-wrapper .list-group');

        //remove Remove icon
        $this.find('.pull-right').remove();
        $this.attr('title','Click to assign this role.');

        var checkInstruction = $targetContainer.find('.instruction-text') ? 1 : 0;

        if(checkInstruction){
            $targetContainer.find('.instruction-text').remove();
        };

        /*
        Append the clicked list-item to the target list-group
        after removing the instructions  and then add a remove Icon
        */
        $targetContainer.append($this);

        updateNavButtons();
}

function showSelected(){
    var $this = $(this),
        $container = $this.closest('.list-group'),
        $parent = $this.closest('.left-wrapper'),
        $totalItems = $container.children().length,
        checkListItem = $container.has('.list-group-item') ? 1 : 0;

    //Check for no item remaining
    if($totalItems <= 1) {
        // when container is empty
        console.log("All assigned!")
        $container.append('<li class=instruction-text>All roles assigned.</li>');
    };

    //Get the target list group
    var $targetContainer = $this.closest('.tab-pane').find('.right-wrapper .list-group');

    //Add remove icon
    var eleRemoveIcon = '<span class=pull-right><span class="glyphicon glyphicon-remove"></span></span>';

    // Update the list-item by appending remove Icon to this
    $this.append(eleRemoveIcon);

    // Update the list-item by replacing title content
    $this.attr('title','Click to remove this role.');

    var checkInstruction = $targetContainer.find('.instruction-text') ? 1 : 0;

    if(checkInstruction){
        $targetContainer.find('.instruction-text').remove();
    };

    /*
    Append the clicked list-item to the target list-group
    after removing the instructions  and then add a remove Icon
    */
    $targetContainer.append($this);

    updateNavButtons();

}
