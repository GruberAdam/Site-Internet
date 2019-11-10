//Modifies a row
$("#modifiy-button").click(function () {
    data = {};
    console.log("Button modify clicked");
    $.ajax({
        url: '../../DBA/UserModifyData.php',
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