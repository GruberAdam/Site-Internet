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
function addRowsOnloadMain() {
    console.log("load");
//there is a test if
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../../DBA/userData.json', true);
    ourRequest.onload = function () {
        if (ourRequest.responseText == "") {
        } else {
            console.log("something");
            var ourData = JSON.parse(ourRequest.responseText);
            addRowsOnHTMLOnloadMain(ourData);
        }
    };
    ourRequest.send();
}
function addRowsOnHTMLOnloadMain(data) {
    var numberOfRows = data.length;
    console.log(numberOfRows);

    for (var i = 0; i < numberOfRows; i++) {
        //takes the name and the firstname
        var nameOfUserAdded = data[i].nom;
        var firstNameOfUserAdded = data[i].prenom;
        //Creates a link for intranet
        var linkFirstName = document.createElement('a');
        linkFirstName.setAttribute('href', 'http://intranet.cpnv.ch/etudiants/' + firstNameOfUserAdded + '_' + nameOfUserAdded);
        var linkLastName = document.createElement('a');
        linkLastName.setAttribute('href', 'http://intranet.cpnv.ch/etudiants/' + firstNameOfUserAdded + '_' + nameOfUserAdded);
        console.log(linkFirstName);
        // Get a reference to the table
        var tableRef = document.getElementById('user-table');

        // Insert a row at the end of the table
        var newRow = tableRef.insertRow(-1);

        // Insert a cell in the row at index 0
        var newCell5 = newRow.insertCell(0);
        var newCell6 = newRow.insertCell(0);
        var newCell7 = newRow.insertCell(0);

        // Append a text node to the cell
        var newText5 = document.createTextNode(data[i].classe);
        var newText6 = document.createTextNode(data[i].prenom);
        var newText7 = document.createTextNode(data[i].nom);

        linkFirstName.appendChild(newText6);
        linkLastName.appendChild(newText7);
        newCell5.appendChild(newText5);
        newCell6.appendChild(linkFirstName);
        newCell7.appendChild(linkLastName);
    }
}
