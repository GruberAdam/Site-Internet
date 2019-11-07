sideNav = document.getElementById("mySidenav");
main = document.getElementById("main");
var clickCounter = 0;
/*Open / close the menu with adaptations*/
function openNav(classChange) {
    clickCounter++;
    classChange.classList.toggle("change");
    if (clickCounter === 1) {
        sideNav.style.width = "250px";
        main.style.marginLeft = "250px";
        clickCounter = 1;
    }
    else {
        sideNav.style.width = "0";
        main.style.margin = "0px 120px 0px 120px";
        clickCounter = 0;
    }

}
