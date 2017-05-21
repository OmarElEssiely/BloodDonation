$(document).ready(function () {
    $("#requestList").hide();
    $("#NormalRequests").hide();
    $("#UrgentRequests").hide();

    ///////////// View hospital button to show hospital table
    $("#ViewHospital").click(function () {
        $("#tableHos").show();
        $("#NormalRequests").hide();
        $("#UrgentRequests").hide();
    })

    /////////////// slide down behavior //////////////////
    $("input[name='option'][value ='Requests']").click(function () {
        $('#requestList').slideToggle('slow');
    })

    ///////////////////normal request button to show table //////////////
    $("#NrmBtn").click(function () {
        $('#requestList').slideToggle('slow');
        $("#tableHos").hide();
        $("#NormalRequests").show();
        $("#UrgentRequests").hide();
    })

    ///////////////////urgent request button to show table //////////////
    $("#Urgbtn").click(function () {
        $('#requestList').slideToggle('slow');
        $("#tableHos").hide();
        $("#NormalRequests").hide();
        $("#UrgentRequests").show();
    })
    //----------------hospital data read -------------------//
    $(function () {

        $.getJSON("../js/Hospitals.json")
         .success(function (data) {
             $(data.hospitals).each(function (index, value) {
                 var tr;
                 tr = $('<tr/>');
                 tr.append("<td>" + value.HospitalName + "</td>");
                 tr.append("<td>" + value.city + "</td>");
                 tr.append("<td>" + value.number + "</td>")
                     .click(function () {
                         newLocation(value.latitude, value.longitude);
                     })
                 $('#tableHos').append(tr);
             })
         })
    });
    //////////////////Normal Request data read /////////////
    $(function () {
        $.getJSON("../js/Requests.json")
         .success(function (data) {
             $(data.NormalRequest).each(function (index, value) {
                 var tr;
                 tr = $('<tr/>');
                 tr.append("<td>" + value.Name + "</td>");
                 tr.append("<td>" + value.PhoneNumber + "</td>");
                 tr.append("<td>" + value.Hospital + "</td>");
                 tr.append("<td>" + value.BTR + "</td>");
                 tr.append("<td>" + value.RequestTime + "</td>").click(function () {
                     newLocation(value.latitude, value.longitude);
                 })

                 $('#NormalRequests').append(tr);
             })
         })
    });
    /////////////////urgent Request data read /////////////////
    $(function () {
        $.getJSON("../js/Requests.json")
         .success(function (data) {
             $(data.UrgentRequest).each(function (index, value) {
                 var tr;
                 tr = $('<tr/>');
                 tr.append("<td>" + value.Name + "</td>");
                 tr.append("<td>" + value.PhoneNumber + "</td>");
                 tr.append("<td>" + value.Hospital + "</td>");
                 tr.append("<td>" + value.BTR + "</td>");
                 tr.append("<td>" + value.RequestTime + "</td>").click(function () {
                     newLocation(value.latitude, value.longitude);
                 })

                 $('#UrgentRequests').append(tr);
             })
         })
    });
    //////////////////---------End of Data Read ----------/////////
})