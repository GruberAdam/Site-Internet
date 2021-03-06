//When page loads take data back from the json file
function addRowsOnload() {
    console.log("load");
//there is a test if
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../../DBA/userData.json', true);
    ourRequest.onload = function () {
        if (ourRequest.responseText == "") {
        } else {
            console.log("something");
            var ourData = JSON.parse(ourRequest.responseText);
            addRowsOnHTMLOnload(ourData);
        }
    };
    ourRequest.send();

}

//Add row in html
function addRowsOnHTMLOnload(data) {
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
        var newCell8 = newRow.insertCell(0);
        var newCell = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(0);
        var newCell3 = newRow.insertCell(0);
        var newCell4 = newRow.insertCell(0);
        var newCell5 = newRow.insertCell(0);
        var newCell6 = newRow.insertCell(0);
        var newCell7 = newRow.insertCell(0);

        // Append a text node to the cell
        var newText8 = document.createTextNode(data[i].acronym);
        var newText = document.createTextNode(data[i].nationalite);
        var newText2 = document.createTextNode(data[i].abonnement);
        var newText3 = document.createTextNode(data[i].maladie);
        var newText4 = document.createTextNode(data[i].role);
        var newText5 = document.createTextNode(data[i].classe);
        var newText6 = document.createTextNode(data[i].prenom);
        var newText7 = document.createTextNode(data[i].nom);

        linkFirstName.appendChild(newText6);
        linkLastName.appendChild(newText7);
        newCell8.appendChild(newText8);
        newCell.appendChild(newText);
        newCell2.appendChild(newText2);
        newCell3.appendChild(newText3);
        newCell4.appendChild(newText4);
        newCell5.appendChild(newText5);
        newCell6.appendChild(linkFirstName);
        newCell7.appendChild(linkLastName);
    }
}
//Send data to php server
$('form.ajax').on('submit', function () {
    event.preventDefault();
    var that = $(this),
        url = that.attr('action'),
        type = that.attr('method'),
        data = {};

    that.find('[name]').each(function (index, value) {
        var that = $(this),
            name = that.attr('name'),
            value = that.val();

        data[name] = value;
    });
    console.log(name);
    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function (response) {
            console.log(data);
            httpRequest();
        }
    })
});

//Open the form and closes it if click again
function openForm() {
    form = document.getElementById("myForm");
    if (form.style.display == "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}

//Get the data from json file
function httpRequest() {
    console.log("in");

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../../DBA/userData.json', true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
}

function renderHTML(data) {
    var numberOfRows = data.length;
    console.log("number of Rows value : " + numberOfRows);

    for (var i = numberOfRows - 1; i < numberOfRows; i++) {
        var nameOfUserAdded = data[i].nom;
        var firstNameOfUserAdded = data[i].prenom;
        //Create a link for intranet
        var linkFirstName = document.createElement('a');
        linkFirstName.setAttribute('href', 'http://intranet.cpnv.ch/etudiants/' + firstNameOfUserAdded + '_' + nameOfUserAdded);
        var linkLastName = document.createElement('a');
        linkLastName.setAttribute('href', 'http://intranet.cpnv.ch/etudiants/' + firstNameOfUserAdded + '_' + nameOfUserAdded);
        console.log("value of i : " + i);
        // Get a reference to the table
        var tableRef = document.getElementById('user-table');

        // Insert a row at the end of the table
        var newRow = tableRef.insertRow(-1);
        // Insert a cell in the row at index 0
        var newCell8 = newRow.insertCell(0);
        var newCell = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(0);
        var newCell3 = newRow.insertCell(0);
        var newCell4 = newRow.insertCell(0);
        var newCell5 = newRow.insertCell(0);
        var newCell6 = newRow.insertCell(0);
        var newCell7 = newRow.insertCell(0);


        // Append a text node to the cell
        var newText8 = document.createTextNode(data[i].acronym);
        var newText = document.createTextNode(data[i].nationalite);
        var newText2 = document.createTextNode(data[i].abonnement);
        var newText3 = document.createTextNode(data[i].maladie);
        var newText4 = document.createTextNode(data[i].role);
        var newText5 = document.createTextNode(data[i].classe);
        var newText6 = document.createTextNode(data[i].prenom);
        var newText7 = document.createTextNode(data[i].nom);


        linkFirstName.appendChild(newText7);
        linkLastName.appendChild(newText6);
        newCell8.appendChild(newText8);
        newCell.appendChild(newText);
        newCell2.appendChild(newText2);
        newCell3.appendChild(newText3);
        newCell4.appendChild(newText4);
        newCell5.appendChild(newText5);
        newCell6.appendChild(linkFirstName);
        newCell7.appendChild(linkLastName);

    }
}