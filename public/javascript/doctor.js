

 $("#all-appointment").hide();
 $("#All-patient").hide();
  $("#previous-patient").hide();
  $("#rejected-btn").hide();
  $("#accepted-btn").hide();



function showLinkButtonClick()
{
    $("#all-appointment").show();
    $("#Today-Appointment").hide();
    $("#All-patient").hide();
    $("#previous-patient").hide();
}

function todayshowLinkButtonClick(){
  $("#Today-Appointment").show();
  $("#all-appointment").hide();
  $("#All-patient").hide();
  $("#previous-patient").hide();
}

function allpatientshowLinkButtonClick(){
  $("#Today-Appointment").hide();
  $("#all-appointment").hide();
  $("#All-patient").show();
  $("#previous-patient").hide();
}

function previouspatientshowLinkButtonClick(){
  $("#Today-Appointment").hide();
  $("#all-appointment").hide();
  $("#All-patient").hide();
  $("#previous-patient").show();
}

$(".accept-app").click(function(){
    $("#reject-btn").hide();
    $("#accept-btn").hide();
    $("#accepted-btn").show();
});

$(".reject-app").click(function(){
    $("#accept-btn").hide();
    $("#reject-btn").hide();
    $("#rejected-btn").show();

});

$(".alertmsg").click(function(){
  alert("Successfully Done")
});
