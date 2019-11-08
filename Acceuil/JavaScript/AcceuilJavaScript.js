sideNav = document.getElementById("mySidenav");
var clickCounter = 0;
/* Open / Close menu  */
function openNav(classChange) {
    clickCounter++;
    classChange.classList.toggle("change");
    if (clickCounter === 1) {
        sideNav.style.width = "250px";
        clickCounter = 1;
    }
    else {
        sideNav.style.width = "0";
        clickCounter = 0;
    }

}
