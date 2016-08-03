/*!
 * Perfect Pay UI Frame Work v1.0.0
 */

$(function() {


    $('.collapse-Limits').on('click',function(){
        var $this = $(this);
        var $container = $this.closest('.dropdown-nav-link');
        var $parent = $container.closest('.dropdown-nav-item');
        var $body = $parent.closest('.dropdown-nav');
        var $contents = $parent.find('.collapse-Limits-Details');

        var visible = $contents.hasClass('in');

        $body.find('.in').removeClass('in').slideUp(400,function(){
            $(this).css('display','none');
        });

        if(!visible){
            $contents.slideDown(400).addClass('in');
        }else{
            $contents.removeClass('in').slideUp(200);
        };
    });

    // TOOLTIPS
    // ========

    $('[data-toggle=tooltip]').tooltip();
    
    // POPOVERS
    // ========
    $('[data-toggle="popover"]').popover();

    $('#start-time-picker, #stop-time-picker, #roll-time-picker,#roll-time-picker-1').datetimepicker({
        language: 'en',
        pickDate: false,
        pickSeconds: false,
        pick12HourFormat: false
    });

    $('#gaming-day-picker').datetimepicker({
        language: 'en',
        pickTime: false,
        format: "dd-MM-yyyy"
    });

    //
    $("#showRollTime_trigger").on("click", function(e) {
        e.preventDefault();
        $("#modalRollTime").modal("show");
    });

    $("#showPlayerSearch_trigger").on("click", function(e) {
        e.preventDefault();
        $("#modalPlayerSearch").modal("show");
    });

    $('#showRollTime-trigger').on('click', function() {
        $('#modalRollTime').modal('show');
    });

    $('#playerSearch-trigger').on('click', function() {
        $('#modalPlayerSearch').modal('show');
    });
    // show player search side bar on manual rating form
    // by clicking search button
    $('.player-search-btn').on('click', showSearchResult);

    // Select searched player to populate the input box
    $('.show-search-result').on('click', '.list-item', fillInput);


    $('.view-topology-button').on('click',function(){

        var $this = $(this);
        var $target = $('.view-tree-block');
        var isVisible = $target.hasClass('in');

        console.log(isVisible);

        if(isVisible){
            $target.removeClass('in');
        }else{
            $target.addClass('in');
        }
    });

    $('.list-group-item').on('click',showSelected);

    $('.thumbnail').on('click','.icon-fav',function(){
        var $this = $(this);
        var $container = $this.closest('.apps-wrapper');

        $container.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    $('.icon-fav').on('click',function(){
        var $this = $(this);
        var $container = $this.closest('.dropdown-content');

        $container.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    $(document).ready(function() {
        $('#independent-players-carousel').carousel({
    	    interval: 8000
    	})
    });

});

function showSelected(){
    // console.log('chk');
    var $this = $(this);
    var $container = $this.closest('.tab-pane');
    var $target = $this.find('.fade');
    var isVisible = $target.hasClass('in');

    if(isVisible){
        $target.removeClass('in');
    }else{
        $target.addClass('in');
    }
}

// Populate player search input box
function fillInput() {
    console.log('hi');
    // Get the values
    var $this = $(this),
        $container = $this.closest('.modal-dialog'),
        $inputBox = $container.find('#rating-player-id'),
        $playerName = $this.find('.item-data-label').html(),
        $playerId = $this.find('.item-data-label').siblings().html();
    // Set the value
    $inputBox.val($playerName + ", " + $playerId);
}

// Show searched result on manual rating modal by
// expanding the modal and showing up the side bar populated with searched names
function showSearchResult() {
    // initialise the vars
    var $inputBox = $('#rating-player-id'),
        isEmpty = $inputBox.val() ? 0 : 1,
        $errText = $('.error-text'),
        $target = $('.toggle-side-bar'),
        $container = $('.modal-dialog'),
        $sideBar = $('.show-side-bar'),
        $searchContainer = $('.show-search-result'),
        $height = $target.height,
        $newcontainer = $('.modal-dialog.has-sidebar');

    if (isEmpty) {
        //show the error texts
        $errText.addClass('in');
        return;
    }

    $errText.removeClass('in')
        // replace search icon with waiting icon
    showLoader();

    // then show the side bar column
    $target.removeClass('col-xs-12')
        .addClass('col-xs-8')
        .closest($container)
        .addClass('has-sidebar')
        .find($searchContainer)
        .css('height', $height)
        .closest($sideBar)
        .removeClass('hidden')
        .fadeIn(100);
}

// Show
function showLoader() {
    var $this = $(this);
    var $loader = $this.find(".search-loader");
    var $searchIcon = $this.find(".icon-search2");
    var checkVisibility = $loader.hasClass("not-visible");

    if (checkVisibility) {
        $loader.removeClass("not-visible");
        $searchIcon.addClass("not-visible");
    } else {
        $loader.addClass("not-visible");
        $searchIcon.removeClass("not-visible");
    };
}
// Following lines of codes added by akgupta
//To open a HTML page on click event

$(function() {

    $('.clickable').on('click', function() {
        window.document.location = $(this).data("href");
    });

    $("a[data-toggle]").on("click", function() {
        var titleTag = $(this).children().children();
        var footerContent = $(this).siblings('.supervisor-footer-content');
        if (titleTag.hasClass("highlight")) {
            return;
        } else {
            $(this).parent().siblings().find(".highlight").removeClass("highlight");
            $(this).parent().siblings().find(".supervisor-footer-content").removeClass("active");
            titleTag.addClass("highlight");
            footerContent.addClass("active");
        }
    });

    getHeight();

    $("a.dropdown-nav-link").on("click", function(e) {
        e.preventDefault();
        $(".modal").modal("show");
    });

    $("#btn-search-card").click(showPlayerCardView);
    $("#btn-search-name").click(showPlayerNameView);
    $("#btn-search-id").click(showPlayerIdView);

    $(".glyphicon-pencil").on("click", editComments);

    $(".caret.column-sorting").on("click", function() {
        $(this).toggleClass("caret-up");
    })

});

function editComments() {
    var $this = $(this);
    var $container = $this.closest(".list-item");
    var $textarea = $container.find(".textarea");
    $textarea.removeAttr("disabled");
}

function showPlayerCardView() {
    $(".search-form-by-card").css("display", "block");
    $(".search-form-by-name, .search-form-by-id").css("display", "none");
    $("#btn-search-card").removeClass("btn-secondary").addClass("btn-primary").siblings().removeClass("btn-primary").addClass("btn-secondary");
}

function showPlayerNameView() {
    $(".search-form-by-name").css("display", "block");
    $(".search-form-by-card, .search-form-by-id").css("display", "none");
    $("#btn-search-name").removeClass("btn-secondary").addClass("btn-primary").siblings().removeClass("btn-primary").addClass("btn-secondary");
}

function showPlayerIdView() {
    $(".search-form-by-id").css("display", "block");
    $(".search-form-by-card, .search-form-by-name").css("display", "none");
    $("#btn-search-id").removeClass("btn-secondary").addClass("btn-primary").siblings().removeClass("btn-primary").addClass("btn-secondary");
}

$(window).resize(function() {
    getHeight();
});

function getHeight() {

    var cardFrontHeight = $(".game-player-card-content.card-front").outerHeight();
    var cardBackHeight = $(".game-player-card-content.card-back").outerHeight();

    if (cardFrontHeight > cardBackHeight) {
        $(".game-player-card-container.max-player").css("height", cardFrontHeight);
    } else {
        $(".game-player-card-container.max-player").css("height", cardBackHeight);
    }
}
