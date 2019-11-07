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

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

//Get the data from json file
function httpRequest() {
    console.log("in");

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'DBA/userData.json', true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
}

function renderHTML(data) {

    console.log(data);
    // Get a reference to the table
    var tableRef = document.getElementById('user-table');

    // Insert a row at the end of the table
    var newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(0);
    var newCell3 = newRow.insertCell(0);
    var newCell4 = newRow.insertCell(0);
    var newCell5 = newRow.insertCell(0);
    var newCell6 = newRow.insertCell(0);
    var newCell7 = newRow.insertCell(0);

    // Append a text node to the cell

    var newText = document.createTextNode(data[0].nationalite);
    var newText2 = document.createTextNode(data[0].abonnement);
    var newText3 = document.createTextNode(data[0].maladie);
    var newText4 = document.createTextNode(data[0].role);
    var newText5 = document.createTextNode(data[0].classe);
    var newText6 = document.createTextNode(data[0].prenom);
    var newText7 = document.createTextNode(data[0].nom);

    newCell.appendChild(newText);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
    newCell4.appendChild(newText4);
    newCell5.appendChild(newText5);
    newCell6.appendChild(newText6);
    newCell7.appendChild(newText7);
}