
$("#appointmentStatus").hide();
$("#Prescription").hide();
$("#previousApp").hide();
$("#Cancelled").hide();
$("#delete-app").hide();

function appointmentLinkButtonClick()
{
    $("#bookAppointment").show();
    $("#appointmentStatus").hide();
    $("#Prescription").hide();
    $("#previousApp").hide();
    $("#Cancelled").hide();
}


function statusLinkButtonClick()
{
  $("#bookAppointment").hide();
  $("#appointmentStatus").show();
  $("#Prescription").hide();
  $("#previousApp").hide();
//  $("#Cancelled").hide();

}

function prescriptionLinkButtonClick(){
$("#bookAppointment").hide();
$("#appointmentStatus").hide();
$("#Prescription").show();
$("#previousApp").hide();
$("#Cancelled").hide();
}

function previousLinkButtonClick(){
$("#bookAppointment").hide();
$("#appointmentStatus").hide();
$("#Prescription").hide();
$("#previousApp").show();
$("#Cancelled").hide();
}

$(".submitBtn").click(function(){
  alert("Appointment Booked Successfully");
});


$(".booking-btn").click(function(){
    $("#currentt-status").hide();
    $("#Cancelled").hide();
    $("#delete-app").show();
});

$(".cancel-appointment").click(function(){
    // $("#currentt-status").hide();
    $("#Cancelled").show();
    $("#delete-app").hide();

    setTimeout(function() {
      $('#currentt-status').show()
    }, 4000);

    setTimeout(function() {
      $('#Cancelled').hide()
    }, 4000);

});

$(".btnContact").click(function(){
  alert("Successfully Send");
});

// function togglePopup() {
//             $(".content").toggle();
//         }
