//Deletes a row
$("#delete-button").click(function () {
    data = {};
   console.log("Button delete clicked");
   $.ajax({
       url: '../../DBA/UserDeleteData.php',
       type: 'POST',
       data: data,
       success: function () {
           console.log("succes");
           deleteRow();
       },
       error: function () {
           console.log("error");
       }
   })
});

function deleteRow() {
    console.log("in");

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '../../DBA/userData.json', true);
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        deleteARow(ourData);
    };
    ourRequest.send();
}

function deleteARow(data) {
    var numberOfRows = data.length;
    console.log("number of Rows value : " + numberOfRows);
        // Get a reference to the table
        var tableRef = document.getElementById('user-table');
        tableRef.deleteRow(-1);

}