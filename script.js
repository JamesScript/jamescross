function menu(show) {
    if (show) {
        $("#hamburger").toggleClass("spinHide");
        $("#closeHamburger").toggleClass("spinShow");
        $("#darkenScreen").toggleClass("darken");
        $("#mainMenu")
            .toggleClass("slideOn")
            .css({pointerEvents: "auto"});
    } else {

    }
}