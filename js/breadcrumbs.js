/*!
 * Perfect Pay UI Frame Work v1.0.0
 */
// Update breadcrumbs on Table dashboard
$(function() {
    // update breadcrumbs and Table dash by default
    updateBreadcrumbs(breadLast);
    //
    var breadTable = '<li class="breadcrumb-item"><a href="#tab-default" data-toggle="tab" class="breadcrumb-item-link">MB001</a></li>';
    // Now, find the footer item that has been clicked
    $(".footer").find("a").on("click", function() {
        breadLast = '<li class="breadcrumb-item"><span class="breadcrumb-item-link">MB001</span></li>';
        // update breadcrumbs as per footer active item
        updateBreadcrumbs(breadLast);
    });
    //
    // add drill-in child breadcrumb to parent breadcrumb on Table dash
    $(".table-default").find("tr").on("click", function() {
        //get target id name e.g. #tab-default-game-details
        var dataHref = $(this).attr("href");
        //
        if (dataHref == undefined) {
            return;
        }
        // udpate breadcrumb as per the footer clicked item
        // Footer button - Game History
        if (dataHref == "#tab-default-game-details") {
            breadLast = breadTable + '<li class="breadcrumb-item"><span class="breadcrumb-item-link">Game Id 8759685</span></li>';
            //updateBreadcrumbs(breadLast);
            //return;
        }
        // Footer button - Shoe
        if (dataHref == "#tab-shoe-inner") {
            breadLast = breadTable + '<li class="breadcrumb-item"><span class="breadcrumb-item-link">Shoe 1</span></li>';
            //updateBreadcrumbs(breadLast);
            //return;
        }
        // Footer button - Shoe -> Game -> players
        if (dataHref == "#tab-shoe-game-players") {
            breadLast = breadTable + '<li class="breadcrumb-item"><a href="#tab-shoe-inner" data-toggle="tab" class="breadcrumb-item-link">Shoe 1</a></li><li class="breadcrumb-item"><span class="breadcrumb-item-link">Game Id 8759992</span></li>';
            //updateBreadcrumbs(breadLast);
            // return;
        }
        // Footer button - Shoe -> Session
        if (dataHref == "#tab-shoe-sessions") {
            var breadLastName = 'Session Id 1';
            breadLast = breadTable + '<li class="breadcrumb-item"><a href="#tab-shoe-inner" data-toggle="tab" class="breadcrumb-item-link">Shoe 1</a></li><li class="breadcrumb-item"><span class="breadcrumb-item-link">' + breadLastName + '</span></li>';
            // updateBreadcrumbs(breadLast);
            // return;
        }
        // Footer button - Shoe -> Session -> Game
        if (dataHref == "#tab-shoe-session-games") {
            var breadLastName = 'Game Id # 8759685';
            breadLast = breadTable + '<li class="breadcrumb-item"><a href="#tab-shoe-inner" data-toggle="tab" class="breadcrumb-item-link">Shoe 1</a></li><li class="breadcrumb-item"><a href="#tab-shoe-session-games" data-toggle="tab" class="breadcrumb-item-link">Session Id 1</a></li><li class="breadcrumb-item"><span class="breadcrumb-item-link">' + breadLastName + '</span></li>';
            // updateBreadcrumbs(breadLast);
            // return;
        }
        // Footer button - Chip Tray
        if (dataHref == "#tab-chip-denom") {
            breadLast = breadTable + '<li class="breadcrumb-item"><span class="breadcrumb-item-link">Chip Tray Id #</span></li>';
            // updateBreadcrumbs(breadLast);
            // return;
        }
        // Footer button - Sessions
        if (dataHref == "#tab-session-games") {
            breadLast = breadTable + '<li class="breadcrumb-item"><span class="breadcrumb-item-link">Session Id # 1</span></li>';
            // updateBreadcrumbs(breadLast);
            // return;
        }
        // Footer button - Fills
        if (dataHref == "#tab-fills-chips") {
            breadLast = breadTable + '<li class="breadcrumb-item"><span class="breadcrumb-item-link">Fill Id # 1233</span></li>';
            // updateBreadcrumbs(breadLast);
            // return;
        }
        // Footer button - Credits
        if (dataHref == "#tab-credits-chips") {
            breadLast = breadTable + '<li class="breadcrumb-item"><span class="breadcrumb-item-link">Credit Id # 3233</span></li>';
            // updateBreadcrumbs(breadLast);
            // return;
        }
        // Footer button - Credits
        if (dataHref == "#tab-buyins-chips") {
            breadLast = breadTable + '<li class="breadcrumb-item"><span class="breadcrumb-item-link">Buy In Id # 5233</span></li>';
            // updateBreadcrumbs(breadLast);
            // return;
        }
        updateBreadcrumbs(breadLast);
    });

    //
    $(".breadcrumbs").on("click", "a.breadcrumb-item-link", function() {
        var dataHref = $(this).attr("href");
        if (dataHref == undefined) {
            return;
        }
        if (dataHref == "#tab-default") {
            updateDefaultTabDash();
        }
    });

});

//
// default breadcrumbs till Pit level
var defaultBread = '<li class="breadcrumb-item"><a href="../mgm-index.html" class="breadcrumb-item-link"><img class="logo" src="../assets/img/logo-test.png" alt="MGM-Macau"></a></li><li class="breadcrumb-item"><a href="../casino/casino-overview.html" class="breadcrumb-item-link small" title="Casino">Casino</a></li><li class="breadcrumb-item"><a href="casino-vip.html" class="breadcrumb-item-link small" title="VIP">VIP</a></li><li class="breadcrumb-item"><a href="casino-vip-pit.html" class="breadcrumb-item-link small">Pit 1</a></li>';
//
var breadLast = "";
//
function updateBreadcrumbs(lastBreadcrumb) {
    breadLast = lastBreadcrumb;
    if (breadLast === undefined || breadLast === "") {
        breadLast = '<li class="breadcrumb-item"><span class="breadcrumb-item-link">MB001</span></li>';
        tableDashBreads = defaultBread + breadLast;
        $(".breadcrumbs.table-dashboard").html(tableDashBreads);
        return;
    } else if (breadLast === "default-games") {
        breadLast = '<li class="breadcrumb-item"><a href="casino-vip-table-dashboard.html" class="breadcrumb-item-link" title="MB001">MB001</a></li><li class="breadcrumb-item"><span class="breadcrumb-item-link">GAME ID #8759685</span></li>';
        tableDashBreads = defaultBread + breadLast;
        $(".breadcrumbs.table-dashboard").html(tableDashBreads);
        return;
    } else {
        tableDashBreads = defaultBread + breadLast;
        $(".breadcrumbs.table-dashboard").html(tableDashBreads);
    }
    //
}

function updatePlayerDashBreadcrumbs(lastBreadcrumb) {
    var breadLast = lastBreadcrumb;
    // default breadcrumbs till Pit level
    var defaultBread = '<li class="breadcrumb-item"><a href="../mgm-index.html" class="breadcrumb-item-link"><img class="logo" src="../assets/img/logo-test.png" alt="MGM-Macau"></a></li><li class="breadcrumb-item"><a href="../casino/casino-overview.html" class="breadcrumb-item-link" title="Casino">Casino</a></li><li class="breadcrumb-item"><a href="../manager/casino-vip.html" class="breadcrumb-item-link" title="VIP">VIP</a></li><li class="breadcrumb-item"><a href="../manager/casino-vip-pit.html" class="breadcrumb-item-link" title="Pit 1">Pit 1</a></li><li class="breadcrumb-item"><a href="../manager/casino-vip-table-dashboard.html" class="breadcrumb-item-link">MB001</a></li>';

    var playerDashBreads = defaultBread + breadLast;

    $(".breadcrumbs.player-dashboard").html(playerDashBreads);
}
//Activate the footer item by default
function updateFooter(target) {
    var activeFooterItem = target;
    //
    if (activeFooterItem == undefined) {
        $(".col-1").find(".supervisor-footer-header").children("h3").removeClass("highlight");
        $(".col-1").find(".supervisor-footer-content").children(".row").removeClass("highlight");
        $(".col-1:first-child").find(".supervisor-footer-header").children("h3").addClass("highlight");
        $(".col-1:first-child").find(".supervisor-footer-content").children(".row").addClass("highlight");
    }
}
//
//
function updateDefaultTabDash() {
    updateBreadcrumbs();
    updateFooter();
}
