$("#admin_reservation_page").click(function () {
    loadAllReserbvations();
})

$("#btnReservationManageGetAll").click(function () {
    loadAllReserbvations();
})

$("#updateReservation").click(function () {
    loadReservationDetailsToUpdate();
})

$("#btnReservationManageTodayReservations").click(function () {
    loadTodayReservations();
})

$("#btnReservationManagePending").click(function () {
    loadAllPendingReservations();
})

$("#btn_admin_acceptReservation").click(function () {
    setAcceptReservation();
})

$("#btn_admin_declineReservation").click(function () {

    if ($("#reservationUpdate_form_reservationStatus").val() == "pending" || $("#reservationUpdate_form_reservationStatus").val() == "accept") {
        alert("Please give the reason to customer why are tou decline this");
    } else {
        declineAReservationRequest();
    }

})

function declineAReservationRequest() {
    let resId = $("#Reservationidsearch").val()
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?id=" + resId,
        method: "GET",
        success: function (resp) {
            let reservationDTO = {
                reservation_id: resId,
                customer: {
                    customerNic: resp.data.customer.customerNic
                },
                car: {
                    number: resp.data.car.number
                },
                reserve_date: resp.data.reserve_date,
                pick_up_date: resp.data.pick_up_date,
                return_date: resp.data.return_date,
                pick_up_time: resp.data.pick_up_time,
                pick_up_and_return_venue: resp.data.pick_up_and_return_venue,
                reservation_status: $("#reservationUpdate_form_reservationStatus").val(),
                driverStatus: resp.data.driverStatus,
                bankSlip: resp.data.bankSlip,
            }

            updateReservationRequest(reservationDTO);

        }
    });
}

function setAcceptReservation() {
    let resId = $("#Reservationidsearch").val()
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?id=" + resId,
        method: "GET",
        success: function (resp) {
            let reservationDTO = {
                reservation_id: resId,
                customer: {
                    customerNic: resp.data.customer.customerNic
                },
                car: {
                    number: resp.data.car.number
                },
                reserve_date: resp.data.reserve_date,
                pick_up_date: resp.data.pick_up_date,
                return_date: resp.data.return_date,
                pick_up_time: resp.data.pick_up_time,
                pick_up_and_return_venue: resp.data.pick_up_and_return_venue,
                reservation_status: "accept",
                driverStatus: resp.data.driverStatus,
                bankSlip: resp.data.bankSlip,
            }

            updateReservationRequest(reservationDTO);

        }
    });
}

function updateReservationRequest(reservationDTO) {
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(reservationDTO),
        success: function (res) {
            alert(res.message)
            loadAllReserbvations();
        }
    });
}

function loadAllPendingReservations() {
    $(".resevation_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?pending",
        method: "GET",
        success: function (resp) {
            for (const res of resp.data) {
                let row = `<tr><td>${res.reservation_id}</td><td>${res.pick_up_date}</td><td>${res.pick_up_and_return_venue}</td><td>${res.return_date}</td><td>${res.reservation_status}</td><td>${res.driverStatus}</td></tr>`;
                $(".resevation_management_table_body").append(row);
            }

        }
    });
}

function loadTodayReservations() {
    /*set today date*/
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear() + "-" + (month) + "-" + (day);


    $(".resevation_management_table_body").empty();
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?todayDate=" + today,
        method: "GET",
        success: function (resp) {
            for (const res of resp.data) {
                let row = `<tr><td>${res.reservation_id}</td><td>${res.pick_up_date}</td><td>${res.pick_up_and_return_venue}</td><td>${res.return_date}</td><td>${res.reservation_status}</td><td>${res.driverStatus}</td></tr>`;
                $(".resevation_management_table_body").append(row);
            }

        }
    });
}

function loadReservationDetailsToUpdate() {
    let resId = $("#Reservationidsearch").val()
    $.ajax({
        url: "http://localhost:8080/CarRentalSystem_war_exploded/reservation?id=" + resId,
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