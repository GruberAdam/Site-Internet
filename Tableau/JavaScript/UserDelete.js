//Deletes a row
$("#delete-button").click(function (e) {
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

}