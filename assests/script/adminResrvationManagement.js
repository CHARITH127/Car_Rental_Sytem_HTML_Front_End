$("#admin_reservation_page").click(function () {
    loadAllReserbvations();
})

$("#btnReservationManageGetAll").click(function () {
    loadAllReserbvations();
})

$("#updateReservation").click(function () {
    loadReservationDetailsToUpdate();
})

function loadTodayReservations() {

}

function loadReservationDetailsToUpdate() {
    let resId = $("#Reservationidsearch").val()
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?id="+resId,
        method: "GET",
        success: function (resp) {
            $("#reservationUpdate_form_resId").val(resp.data.reservation_id)
            $("#reservationUpdate_form_pickupdate").val(resp.data.pick_up_date)
            $("#reservationUpdate_form_pickuptime").val(resp.data.pick_up_time)
            $("#reservationUpdate_form_pickupVenue").val(resp.data.pick_up_and_return_venue)
            $("#reservationUpdate_form_returnDate").val(resp.data.return_date)
            $("#reservationUpdate_form_driverStatus").val(resp.data.driverStatus)
            $("#reservationUpdate_form_reservationStatus").val(resp.data.reservation_status)

            $(".idcardImage").css({
                "background": `url('http://localhost:8080/CarRentalSystem_war_exploded/uploads/${resp.data.bankSlip}')`,
                "background-size": "cover",
                "height": "8rem"
            });

        }
    });
}

function loadAllReserbvations() {
    $(".resevation_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation",
        method: "GET",
        success: function (resp) {
            for (const res of resp.data) {
                let row = `<tr><td>${res.reservation_id}</td><td>${res.pick_up_date}</td><td>${res.pick_up_and_return_venue}</td><td>${res.return_date}</td><td>${res.reservation_status}</td><td>${res.driverStatus}</td></tr>`;
                $(".resevation_management_table_body").append(row);
            }

        }
    });
}