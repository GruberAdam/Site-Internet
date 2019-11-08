//Deletes a row
function deleteRow() {
    console.log("In delete row");
    table = document.getElementById("user-table");
    table.deleteRow(-1);
}